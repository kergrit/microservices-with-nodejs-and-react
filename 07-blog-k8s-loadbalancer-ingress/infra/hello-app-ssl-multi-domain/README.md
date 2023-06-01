## 07-blog-k8s-loadbalancer-ingress / hello-app-ssl-multiple domain

In this section we deploy hello app with multiple domain `hello-a.app` and `hello-b.app`. 

This how we manage ssl for them

```sh
# Prepare cert
mkcert hello-a.app && \
mkcert hello-b.app 

# Create K8s secret tls
kubectl create secret tls hello-a-app-tls --key hello-a.app-key.pem --cert hello-a.app.pem && \
kubectl create secret tls hello-b-app-tls --key hello-b.app-key.pem --cert hello-b.app.pem && \
kubectl get secrets 

# Apply yaml
kubectl apply -f hello-app-multi-domain.yaml

# Verify ssl
curl -v -k https://hello-a.app && \
curl -v -k https://hello-b.app
```