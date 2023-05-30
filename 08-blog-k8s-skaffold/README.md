## 08-blog-k8s-skaffold

In latest section we will learn about simple orchesting blog app with `Kubernetes` with `Load Balancer` and `Ingress`. 

Everytime we update codebase for development in project that often tasks will todo:
- Build & Push docker image to docker hub
- Restart deployment wiht `kubectl rollout restart deployment {deploymentName}`

> *Question*: What tool will help us automately this tasks on tasks development process.?
>
> *Answer*: Skaffold

In this section we will learn about automately CI codebase on k8s with skaffold : Fast.Repeatable.Simple https://skaffold.dev/ and https://github.com/GoogleContainerTools/skaffold


## What is skaffold and How it work? 
Skaffold handles the workflow for building, pushing and deploying your application, allowing you to focus on what matters most: writing code. An open source project from Google.

**Installation skaffold**
```sh
# For macOS with homebrew
brew install skaffold

# list skaffold schema
skaffold schema list

# initail skaffold
skaffold init --skip-build
```

```yaml
# sample skaffold.yaml
apiVersion: skaffold/v4beta5
kind: Config
manifests:
  rawYaml:
    - ./infra/k8s/*
build:
  local:
    push: false
  artifacts:
    - image: kergrit/07-blog-client
      context: client
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: 'src/**/*.js'
            dest: .
...
```

**Running skaffold**
```sh
# running skaffold (required skaffold.yaml before run it)
skaffold dev
```

**Testing**
- Open web browser to https://blog.app
- Add some posts & comments
- Update some codebase on client service
- See results (skaffold done)