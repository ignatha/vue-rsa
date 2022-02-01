# vue-rsa

Demo Application [Vue-rsa](https://front.ignatha.site/)

## Project setup
```
npm install
```

## Environment Variable
Setup your environment variable inside `.env` file for development, dan `.env.production`. Create a file environment in the root folder.

`.env` for the local environment :
```
VUE_APP_ROOT_API=http://localhost:5000
```
`.env.production` for the local environment :
```
VUE_APP_ROOT_API=http://rsa.ignatha.site
```

This origin server is using Python Flask for Backend. Repo for Python Flask Backend RSA [Rsa Simple](https://github.com/ignatha/rsa-simple)


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
