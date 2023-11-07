import { Deployment } from "cdk8s-plus-27";
import { Chart } from "cdk8s";

export function createSonarrDeployment(chart: Chart) {
  const deployment = new Deployment(chart, "sonarr", {
    replicas: 1,
  });

  deployment.addContainer({
    image: "lscr.io/linuxserver/sonarr",
    portNumber: 8989,
    securityContext: {
      ensureNonRoot: false,
      readOnlyRootFilesystem: false,
    },
    resources: {},
  });

  const service = deployment.exposeViaService();

  service.metadata.addAnnotation("tailscale.com/expose", "true");
  service.metadata.addAnnotation("tailscale.com/hostname", "sonarr");
}
