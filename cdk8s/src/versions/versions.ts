const versions = {
  // renovate: datasource=helm registryUrl=https://1password.github.io/connect-helm-charts/ versioning=semver
  "connect": "1.15.0",
  // renovate: datasource=github-releases versioning=semver-coerced
  "argoproj/argo-cd": "v2.11.2",
  // renovate: datasource=helm registryUrl=https://charts.jetstack.io versioning=semver-coerced
  "cert-manager": "v1.14.5",
  // renovate: datasource=github-releases versioning=semver-coerced
  "kubernetes-csi/external-snapshotter": "v8.0.0",
  // renovate: datasource=github-releases versioning=semver-coerced
  "immich-app/immich-charts/": "immich-0.6.0",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "immich-app/immich-server":
    "v1.105.1@sha256:658b40420d7a39d6eb34c797cec8d36ff315f5adb168301aaf27dc4eafc8e228",
  // renovate: datasource=helm registryUrl=https://intel.github.io/helm-charts/ versioning=semver
  "intel-device-plugins-operator": "0.30.0",
  // renovate: datasource=helm registryUrl=https://charts.jenkins.io versioning=semver
  "jenkins": "5.1.26",
  // renovate: datasource=helm registryUrl=https://charts.bitnami.com/bitnami versioning=semver
  "minio": "14.6.11",
  // renovate: datasource=helm registryUrl=https://kubernetes-sigs.github.io/node-feature-discovery/charts versioning=semver
  "node-feature-discovery": "0.16.0",
  // renovate: datasource=helm registryUrl=https://prometheus-community.github.io/helm-charts versioning=semver
  "kube-prometheus-stack": "59.1.0",
  // renovate: datasource=github-releases versioning=semver-coerced
  "rancher/system-upgrade-controller": "v0.13.4",
  // renovate: datasource=helm registryUrl=https://pkgs.tailscale.com/helmcharts versioning=semver
  "tailscale-operator": "1.66.4",
  // renovate: datasource=helm registryUrl=https://backube.github.io/helm-charts/ versioning=semver
  "volsync": "0.9.1",
  // renovate: datasource=docker registryUrl=https://docker.io versioning=semver
  "library/postgres":
    "16.2@sha256:4aea012537edfad80f98d870a36e6b90b4c09b27be7f4b4759d72db863baeebb",
  // renovate: datasource=docker registryUrl=https://docker.io versioning=semver
  "library/redis":
    "7.2@sha256:01afb31d6d633451d84475ff3eb95f8c48bf0ee59ec9c948b161adb4da882053",
  // renovate: datasource=docker registryUrl=https://docker.io versioning=semver-coerced
  "earthly/satellite":
    "v0.8.13@sha256:a99e0e4732561c7f0904b778901e5cb431128b41751217cb84add24c7fca648d",
  // renovate: datasource=docker registryUrl=https://quay.io versioning=docker
  "invidious/invidious":
    "2024.04.26-eda7444@sha256:a91a307a3ece8468aa88d6b91a601a0453cf76589f434ffdce643f968d3825cc",
  // renovate: datasource=docker registryUrl=https://docker.io versioning=docker
  "teddit/teddit":
    "latest@sha256:00a5c4f558592d5ef7be7c918cc8965296745a24a54c9bb215884baa31df0fea",
  // renovate: datasource=docker registryUrl=https://docker.io versioning=docker
  "itzg/minecraft-server":
    "2024.5.0-java21@sha256:1ff47453ce66194927313d628c32a485c34d0acc9c01c9dbd643584c50cf89e6",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver-coerced
  "thijsvanloef/palworld-server-docker":
    "v0.37.1@sha256:acd351759a6129d2f868be5d0ac020abd9c740f697c4cb605046c9b3b1c8586a",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "shepherdjerred/glitter-boys":
    "1.1.30@sha256:a47becb4545d1080c42b8f46105de89f111abf39423880309e88bc0adc05f2c9",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "lavalink-devs/lavalink":
    "4.0.5@sha256:715fedceb9be556c7dec07774a6c41fa1cf4ac2fc582992783a0c78a2ec31312",
  // renovate: datasource=docker registryUrl=https://docker.io versioning=docker
  "plexinc/pms-docker":
    "1.40.2.8395-c67dce28e@sha256:88c77d86087699f79da9907107243d2b31ed1e0f37e6cfde4cb3082180702ba1",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=docker
  "linuxserver/tautulli":
    "2.14.2@sha256:b1cf616b4cf17e5229e860ae8111ece3dfda018b9c5b769c8e84ca2e86b28279",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "linuxserver/bazarr":
    "1.4.3@sha256:d2ec8002f118b22f03ed314cf866a196464ad4977142457c9401b542cf192bd7",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver-coerced
  "bitmagnet-io/bitmagnet":
    "v0.8.0@sha256:c638773151d97e6bd2e19f181f0845be4c82893974975037aa06665c711e4466",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=docker
  "linuxserver/overseerr":
    "1.33.2@sha256:9e13ecb96ed4507385f97b0cbe85f3204f1d87bd35792034021308ff7463217b",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "linuxserver/prowlarr":
    "1.18.0@sha256:6d682b91bd6f818e0489485651989b1e0c8444b1b55f4e9726b38ab1023cb294",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver-coerced
  "qdm12/gluetun":
    "v3.38@sha256:5522794f5cce6d84bc7f06b1e3a3b836ede9100c64aec94543cb503bb2ecb72f",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=docker
  "linuxserver/qbittorrent":
    "4.6.5@sha256:31305198287f8b954b7f97cf3fd7e3e63da5e4887a3979b02325969fb891dd67",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "linuxserver/radarr":
    "5.6.0@sha256:4b8d6111bd6708e27741ce427b1a200a2203977187e6a76e9a5b494f43bfeb74",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "linuxserver/sonarr":
    "4.0.5@sha256:30432d9faf9e8fbb7c6336806ee061ed426204e1f9718d9659a2642a6e3a7c59",
  // renovate: datasource=docker registryUrl=https://docker.io versioning=docker
  "timothyjmiller/cloudflare-ddns":
    "latest@sha256:479bbc53f9f8d547413305e003fe7480cc45c12008cbca2cec5a0c5d30c72ad9",
  // renovate: datasource=docker registryUrl=https://docker.io versioning=docker
  "esphome/esphome":
    "2024.5.4@sha256:29e21efe64d03646530025d056d545485ab9c40a35f3d99e8e0a90d79bde2356",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=docker
  "tailscale/golink":
    "main@sha256:b03cda6fe15cf836242e2c1378fc53fb59095daf5b8ca0700e3e729f675f0ab6",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=docker
  "home-assistant/home-assistant":
    "2024.5.5@sha256:031d355a2e52e82fc33cd6854753fb19fc5d6a31af6f0f54c277d6f118ad993e",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "linuxserver/syncthing":
    "1.27.7@sha256:3a1a983bd5c0cfc685f5421b374bcf175ccb2df86710bfc454bc76a047a8884f",
  // renovate: datasource=github-releases versioning=semver-coerced
  "windmill-labs/windmill-helm-charts": "windmill-2.0.181",
  // renovate: datasource=docker registryUrl=https://ghcr.io versioning=semver
  "lloesche/valheim-server":
    "latest@sha256:b97da1038714e5156cf28d042422a1c5af41e03189572025e615bde61395c678",
  // renovate: datasource=github-releases versioning=semver-coerced
  "dotdc/grafana-dashboards-kubernetes": "v2.1.1",
};

export default versions;
