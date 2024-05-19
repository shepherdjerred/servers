// # Copied from https://docs.k3s.io/upgrades/automated#configure-plans
// # Server plan
// apiVersion: upgrade.cattle.io/v1
// kind: Plan
// metadata:
//   name: server-plan
//   namespace: system-upgrade
// spec:
//   concurrency: 1
//   cordon: true
//   nodeSelector:
//     matchExpressions:
//       - key: node-role.kubernetes.io/control-plane
//         operator: In
//         values:
//           - "true"
//   serviceAccountName: system-upgrade
//   upgrade:
//     image: rancher/k3s-upgrade
//   channel: https://update.k3s.io/v1-release/channels/stable
// ---
// # Agent plan
// apiVersion: upgrade.cattle.io/v1
// kind: Plan
// metadata:
//   name: agent-plan
//   namespace: system-upgrade
// spec:
//   concurrency: 1
//   cordon: true
//   nodeSelector:
//     matchExpressions:
//       - key: node-role.kubernetes.io/control-plane
//         operator: DoesNotExist
//   prepare:
//     args:
//       - prepare
//       - server-plan
//     image: rancher/k3s-upgrade
//   serviceAccountName: system-upgrade
//   upgrade:
//     image: rancher/k3s-upgrade
//   channel: https://update.k3s.io/v1-release/channels/stable
