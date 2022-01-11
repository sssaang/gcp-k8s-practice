- used minikube

1. minikube start
2. kubectl get nodes -> to see a node named minikue (if docker desktop, its name should be different)
3. kubectl create deployment nginx --image=nginx -> create a deployment named nginx with image of nginx
4. kubectl edit deployment nginx -> to edit deployment w/o manifest file
5. kubectl logs POD-NAME -> logs of pod
6. kubectl exec -it POD-NAME -> enters the pod
7. kubectl delete deployment POD-NAME -> deletes deployment
8. kubectl apply -f filename -> apply manifest file (k8s knows if the config is created or updated)
9. kubectl delete -f filename -> delete the components created by the file
