### Setup
Run `set_up_minikube.sh` to build the Docker images and (if you uncomment the lines) download and start minikube.

### Blue-green
To start the service:
```
kubectl create -f blue-green/deployment-v1.yaml
kubectl create -f blue-green/service.yaml
```
Use `blue-green/monitor.sh` to verify that it is running.

To switch over to v2:
```
kubectl create -f blue-green/deployment-v2.yaml
kubectl edit service blue-green  # run: app-v1 -> run: app-v2
```

### Rolling update
To start the service:
```
kubectl create -f rolling/deployment.yaml
kubectl create -f rolling/service.yaml
```
Use `rolling/monitor.sh` to verify that it is running.

To switch over to v2:
```
kubectl set image deployment/rolling rolling=app:v2
```

### A/B
To start the service:
```
kubectl create -f a-b/deployment-v1.yaml
kubectl create -f a-b/deployment-v2.yaml
kubectl create -f a-b/service.yaml
```
Use `a-b/monitor.sh` to verify that it is running.

To switch over to v2:
```
kubectl edit deploy app-v2  # change to 4 replicas
kubectl edit deploy app-v1  # remove service:app from selector and template metadata
```
