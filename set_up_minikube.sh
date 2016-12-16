# Download (Mac)
# curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.14.0/minikube-darwin-amd64 && chmod +x minikube

# Start minikube
# ./minikube start

# Build images for our app (inside minikube's Docker env)
(
	eval $(./minikube docker-env)
	for v in 1 2 3 4; do
		docker build -t app:v$v app/v$v
	done
)
