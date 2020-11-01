## Running in prod:

### 1. Build and tag docker container

```sh
$ docker build --build-arg REACT_APP_GMAPS_API_KEY=<YOUR_GOOGLE_MAPS_API_KEY> -t zesty-maps:master .
```

### 2. Run the built image

```sh
$ docker run -p 8080:80 zesty-maps:master
```

### 3. The app will be available at `http://localhost:8080/`

---

## Running in dev:

1. Ensure you are running node 14 (_nvm use 14_)
2. Install the dependencies

```sh
$ yarn
```

3. Start the dev server

```sh
$ REACT_APP_GMAPS_API_KEY=<YOUR_GOOGLE_MAPS_API_KEY> yarn start
```

4. The app will be available at `http://localhost:3000/`