# Namespace

- Organize resources in namespaces within a cluster
- a virtual cluster within a cluster

## Default Namespaces

### Kube-System NS

- NEVER modify kube-system namespace

- Store system processes, master node, kubctletc

### Kube-Public NS

- publicly accessible data

- contains a configmap which store cluster info

### Kube-Node-Lease

- heartbeats of nodes
- each node has associated lease object in namespace
- determines the availability of a node

1. create namespace through cli
   kubectl create namespace NAMESPACE-NAME
2. create namespace through config yaml file

- besides services, you cannot access resources from other namespace
