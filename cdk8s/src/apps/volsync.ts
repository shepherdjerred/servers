import { Chart } from "npm:cdk8s";
import { Application } from "../../imports/argoproj.io.ts";

export function createVolsyncApp(chart: Chart) {
  return new Application(chart, "volsync-app", {
    metadata: {
      name: "volsync",
    },
    spec: {
      project: "default",
      source: {
        // https://github.com/backube/helm-charts
        repoUrl: "https://backube.github.io/helm-charts/",
        chart: "volsync",
        targetRevision: "0.8.1",
      },
      destination: {
        server: "https://kubernetes.default.svc",
        namespace: "volsync-system",
      },
      syncPolicy: {
        automated: {},
        syncOptions: ["CreateNamespace=true"],
      },
    },
  });
}
