# Architecture

## Node

- each node has mutloiple ods on it
  3 pro

## Master

- The master machines act as the brain of all operations and are charged with orchestrating containers that run on all of the node machines.
- cluster usually holds multiple masters to preserve etcd

### Scheduler

- examine pods to place and distribute pods equally to nodes
- scheduler does not start the container but the kubelet on a node starts the container in its container runtime

### etcd

- distributed key/value store which Kubernetes uses for persistent storage of all cluster information.

### API Server

- the main component, exposing APIs for the other master components. (e.g kubectl)

API Server is responsible for receiving requests from clients to authenticate and validate then forward to other processes

### Kube Controller Manager

- responsible for node management (detecting if a node fails), pod replication, and endpoint creation.

### Cloud Controller Manager

– daemon acting like an abstraction layer between the APIs and the different cloud providers’ tools (storage volumes, load balancers etc.)

## Slave

- The slave node receives instruction from the master and then takes actions to either create pods, delete them, or adjust networking rules.

### Kubelet

- watches the API server for pods on that node and makes sure they are running

The kubelet agent handles all communication between the master and the node on which it is running. It receives commands from the master in the form of a manifest which defines the workload and the operating parameters. It interfaces with the container runtime that is responsible for creating, starting, and monitoring pods.

The kubelet also periodically executes any configured liveness probes and readiness checks. It constantly monitors the state of the pods and, in the event of a problem, launches a new instance instead. The kubelet also has an internal HTTP server exposing a read-only view at port 10255. There’s a health check endpoint at /healthz and also a few additional status endpoints. For example, we can get a list of running pods at /pods. We can also get specs of the machine the kubelet is running on at /spec.

### cAdvisor

– collects metrics about pods running on that particular node

cAdvisor is an open-source agent that monitors resource usage and analyzes the performance of containers. Originally created by Google, cAdvisor is now integrated with kubelet.

The cAdvisor instance on each node collects, aggregates, processes, and exports metrics such as CPU, memory, file, and network usage for all running containers. All data is sent to the scheduler to ensure that it knows about the performance and resource usage inside of the node. This information is used to perform various orchestration tasks like scheduling, horizontal pod scaling, and managing container resource limits.

### Kube Proxy

- watches the API server for pods/services changes in order to maintain the network up to date container runtime – responsible for managing container images and running containers on that node

The kube-proxy component runs on each node and proxies UDP, TCP, and SCTP packets (it doesn’t understand HTTP). It maintains the network rules on the host and handles transmission of packets between pods, the host, and the outside world. It acts like a network proxy and load balancer for pods running on the node by implementing east/west load-balancing using NAT in iptables.

The kube-proxy process stands in between the network Kubernetes is attached to and the pods that are running on that particular node. It is essentially the core networking component of Kubernetes and is responsible for ensuring that communication is maintained efficiently across all elements of the cluster. When a user creates a Kubernetes service object, the kube-proxy instance is responsible to translate that object into meaningful rules in the local iptables rule set on the worker node. iptables is used to translate the virtual IP assigned to the service object to all of the pod IPs mapped by the service.
