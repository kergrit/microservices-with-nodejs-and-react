# 10-tickets-k8s-skaffold-setup

In latest section we will learn about tickets `NextJS` application use microservice design and development with `TypeScript`

In this section we will setting up k8s and skaffold for our project

## Folder structures
- `/auth` contain Express(TypeScript) app for auth service on port `:3000`

## Auth service setup (k8s+nginx-ingress+skaffold)
```sh
# add Dockerfile 
touch auth/Dockerfile
touch auth/.dockerignore

# build image & push image
docker build -t kergrit/tickets-auth .
docker push kergrit/tickets-auth

# start minikube [192.168.64.10]
minikube start
minikube ip

# setup k8s infra/k8s 
mkdir -p infra/k8s
touch infra/k8s/tickets-auth-deployment.yaml
touch infra/k8s/ingress-service.yaml

# update hosts file
...
192.168.64.10 tickets.app
...

# setup skaffold
touch skaffold.yaml

# start skaffold
skaffold dev

# open web browser to 
https://tickets.app/api/users/currentuser

Type "thisisunsafe" on chrome when SSL invalid
```