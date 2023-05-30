## 07-blog-k8s-loadbalancer-ingress / hello-app-ssl

In this section you will learn how to create `ssl` on K8s with `mkcert` and `k8s secret`

Prepare server.key & server.crt with development environtment using `mkcert` [FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)

Apply  `tls/ssl` with article [How To Configure Ingress TLS/SSL Certificates in Kubernetes](https://devopscube.com/configure-ingress-tls-kubernetes/)


### Preparation hosts & certs
```sh
# Install mkcert on macOS
brew install mkcert
mkcert -h

# Prepare hosts file
192.168.64.10   hello.app

# Prepare cert
mkcert hello.app
```
#
### K8s Secret 
**Imperative** style create K8s secret to namespace default
```sh
# terminal
kubectl create secret tls hello-app-tls \
    --namespace default \
    --key hello.app-key.pem \
    --cert hello.app.pem
```

**Declarative** style create K8s secret to namespace default
```yaml
# hello-app.yaml
apiVersion: v1
kind: Secret
metadata:
  name: hello-app-tls
  namespace: default
type: kubernetes.io/tls
data:
  tls.crt: LS0tLS1CRUdJ... <hello.app.pem>
  tls.key: LS0tLS1CRUdJ... <hello.app-key.pem>
```
#

Running test
```sh
# Deployment
kubectl apply -f hello-app.yaml
```
Open web browser to https://hello.app
