# 3 components of the configuration (manifest) file

## Metadata

## Specifaction

- Selectors in deployment matches the labels from the pods and matchLabels as deployment is responsible for the number of replicasets
- Deployment itself has labels which is matched with the labels of services
- Target ports of service is the port service uses to connect pods in deployment

## Status

- automatically generated and managed by k8s
- checks if the state is in desired state and if not, then update the components fulfill the desired state
- gets k8s status data from etcd
