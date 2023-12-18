import {
  Deployment,
  DeploymentStrategy,
  Service,
  Volume,
} from "npm:cdk8s-plus-27";
import { Chart } from "npm:cdk8s";
import { withCommonLinuxServerProps } from "../../utils/linuxserver.ts";
import { createTailscaleIngress } from "../../utils/tailscale.ts";
import { LonghornVolume } from "../../utils/longhorn.ts";

export function createRadarrDeployment(chart: Chart) {
  const deployment = new Deployment(chart, "radarr", {
    replicas: 1,
    strategy: DeploymentStrategy.recreate(),
    securityContext: {
      fsGroup: 1000,
    },
  });

  const longhornVolume = new LonghornVolume(chart, "radarr-longhorn", {});

  deployment.addContainer(
    withCommonLinuxServerProps({
      image: "lscr.io/linuxserver/radarr",
      portNumber: 7878,
      volumeMounts: [
        {
          path: "/config",
          volume: Volume.fromPersistentVolumeClaim(
            chart,
            "radarr-volume",
            longhornVolume.claim,
          ),
        },
        {
          volume: Volume.fromHostPath(
            chart,
            "radarr-torrents-bind-mount",
            "radarr-torrents-bind-mount",
            {
              path: "/mnt/storage/downloads/torrents",
            },
          ),
          path: "/downloads",
        },
        {
          volume: Volume.fromHostPath(
            chart,
            "radarr-movies-bind-mount",
            "radarr-movies-bind-mount",
            {
              path: "/mnt/storage/media/movies",
            },
          ),
          path: "/movies",
        },
      ],
    }),
  );

  const service = new Service(chart, "radarr-service", {
    selector: deployment,
    ports: [{ port: 7878 }],
  });

  createTailscaleIngress(chart, "radarr-ingress", {
    service,
    host: "radarr",
  });
}