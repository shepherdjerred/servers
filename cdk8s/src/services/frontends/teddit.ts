import {
  Deployment,
  DeploymentStrategy,
  EnvValue,
  Service,
} from "https://esm.sh/cdk8s-plus-27@2.9.3";
import { Chart } from "https://esm.sh/cdk8s@2.68.58";
import { withCommonProps } from "../../utils/common.ts";
import { Redis } from "../common/redis.ts";
import { TailscaleIngress } from "../../utils/tailscale.ts";
import versions from "../../versions/versions.ts";

export function createTedditDeployment(chart: Chart) {
  const redis = new Redis(chart, "teddis-redis");

  const UID = 1000;
  const GID = 1000;

  const tedditDeployment = new Deployment(chart, "teddit", {
    replicas: 1,
    strategy: DeploymentStrategy.recreate(),
    securityContext: {
      user: UID,
      group: GID,
    },
  });

  tedditDeployment.addContainer(
    withCommonProps({
      image: `teddit/teddit:${versions["teddit/teddit"]}`,
      envVariables: {
        REDIS_HOST: EnvValue.fromValue(redis.service.name),
        DOMAIN: EnvValue.fromValue("teddit.tailnet-1a49.ts.net"),
      },
      securityContext: {
        readOnlyRootFilesystem: false,
      },
      portNumber: 8080,
    }),
  );

  const service = new Service(chart, "teddit-service", {
    selector: tedditDeployment,
    ports: [{ port: 8080 }],
  });

  new TailscaleIngress(chart, "teddit-tailscale-ingress", {
    service,
    host: "teddit",
  });
}
