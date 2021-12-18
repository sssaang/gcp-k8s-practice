# GCP Kubernetes Practice

## Service
You can group number of pods together to be served through a loadbalancer using single IP and ports
Pods are dynamically created or destroyed in different scenarios and thus hard to be tracked by their ips

For a solution, you can group numbers of pods with label and use label selectors to select those label to group pods

### Service Type

* __Cluster IP__
* __Load Balancer__
* __Node IP__
* __External name__

##### Cluster IP
It gives cluster ip (internal ip) to a service by default
You can access this ip within the cluster but not from the outside

##### Load Balancer 
It gives public IP to the service that can be accessed from the outside of the cluster

##### NodePort
You can access the service through the nodeport that can be accessed through all nodes lives in the same cluster
For example, if you declare server-svc with NodePort type and expose 30036 as a node port, 
then this service (and the pods served by this service) can be access from all nodes exists
within the same cluster using the nodeport.
e,g server-svc.yml
```
apiVersion: v1
kind: Service
metadata:
  name: server-svc
spec:
  selector:
    app: server
  type: NodePort
  ports:
    - name: http
      port: 80
      protocol: TCP
      targetPort: 8080
      nodePort: 30036
```

##### External Name
When you try to access resource that lives outside of the cluster, you will need
to setup of complicated security configuration such as NAT settings. External name helps
you accessing external resources from the cluster. 
It is a type of revese proxy that maps external resources by their domain names or ip addresses.

Let's say you have a database that lives outside.
This service allow k8s resources to access the database using DNS
e.g 
```
kind: Service
apiVersion: v1
metadata:
  name: my-service
  namespace: prod
spec:
  type: ExternalName
  externalName: my.database.example.com
```
You can also k8s resources to access the database using IP
```
apiVersion: v1
kind: Service
metadata:
  name: external-svc-nginx
spec:
  ports:
  - port: 80
  
apiVersion: v1
kind: Endpoints
metadata:
  name: external-svc-nginx
subsets:
  - addresses:
    - ip: 35.225.75.124
    ports:
    - port: 80
```