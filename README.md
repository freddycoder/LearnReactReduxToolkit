# LearnReactReduxToolkit

This is a repos I used to learn react and the redux-toolkit. This is a app that allow CRUD operations on a list of products. 

The backend API used is in this repo. https://github.com/freddycoder/LearnNestJS

## Features

- CRUD operations on a list of products

## Docker

Build the app

```
docker build -t erabliereapi/product-ui .
```

Run the app

```
docker run -d -p 3011:80 erabliereapi/product-ui
```

## Kubernetes

Deploy the app

```
kubectl apply -f k8s/deployment.yaml
```

## Developpment

This app is using pnpm as pacakge manager.

### Install pnpm

```
npm install -g pnpm
```

### Install dependencies

```
pnpm install
```

Run the app

```
pnpm start
```