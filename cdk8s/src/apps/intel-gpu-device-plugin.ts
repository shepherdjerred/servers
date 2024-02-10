import { Chart } from "npm:cdk8s";
import { Application } from "../../imports/argoproj.io.ts";

export function createIntelGpuDevicePluginApp(chart: Chart) {
  new Application(chart, "intel-gpu-device-plugin-app", {
    metadata: {
      name: "intel-gpu-device-plugin",
    },
    spec: {
      project: "default",
      source: {
        repoUrl: "https://intel.github.io/helm-charts/",
        chart: "gpu-device-plugin",
        targetRevision: "0.29.0",
      },
      destination: {
        server: "https://kubernetes.default.svc",
        namespace: "gpu-device-plugin",
      },
      syncPolicy: {
        automated: {},
        syncOptions: ["CreateNamespace=true"],
      },
    },
  });
}
