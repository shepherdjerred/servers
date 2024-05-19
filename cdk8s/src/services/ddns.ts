import { Chart } from "https://esm.sh/cdk8s@2.68.58";
import {
  Deployment,
  DeploymentStrategy,
  Secret,
  Volume,
} from "https://esm.sh/cdk8s-plus-27@2.9.3";
import { withCommonProps } from "../utils/common.ts";
import { OnePasswordItem } from "../../imports/onepassword.com.ts";
import versions from "../versions/versions.ts";

export function createDdnsDeployment(chart: Chart) {
  const deployment = new Deployment(chart, "ddns", {
    replicas: 1,
    strategy: DeploymentStrategy.recreate(),
  });

  const item = new OnePasswordItem(chart, "ddns-config", {
    spec: {
      itemPath:
        "vaults/v64ocnykdqju4ui6j6pua56xw4/items/nhyb6lnjpvjsau2gkmb7n42oeq",
    },
  });

  const secret = Secret.fromSecretName(
    chart,
    "cloudflare-ddns-secret",
    item.name,
  );

  deployment.addContainer(
    withCommonProps({
      image: `timothyjmiller/cloudflare-ddns:${
        versions["timothyjmiller/cloudflare-ddns"]
      }`,
      securityContext: {
        ensureNonRoot: false,
      },
      volumeMounts: [
        {
          path: "/config.json",
          subPath: "config.json",
          volume: Volume.fromSecret(chart, "cloudflare-ddns-volume", secret, {
            items: {
              "config.json": {
                path: "config.json",
              },
            },
          }),
        },
      ],
    }),
  );
}
