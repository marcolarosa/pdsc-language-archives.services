# language-archives.services

This is the base website and associated docker container code and stack configuration

- [language-archives.services](#language-archivesservices)
    - [Building the container](#building-the-container)
    - [Helper scripts](#helper-scripts)
        - [Deploying the stack](#deploying-the-stack)
        - [Removing the stack](#removing-the-stack)

## Building the container

```
> cd docker/website
> docker build --rm=true --tag "pdsc/website" .
```

## Helper scripts

There are 3 helpers in the `bin` folder:

-   build: will build / rebuild the container
-   start-stack: starts the stack (more informaion `Deploying the stack`)
-   stop-stack: stops the stack (more information in `Removing the stack`)

### Deploying the stack

Docker compose can deploy the stack to a swarm. In this case the swarm is the language-archives.services node. To deploy the stack the swarm first needs to be initialised (this only needs to be done once), viz:

```
> docker swarm init
> docker swarm join-token manager
```

This will initialise the swarm and join the current node as a manager. After that, `docker stack ls` should show an empty swarm.

Then, to deploy the stack do:

```
> docker stack deploy -c config/production-stack.yml pdsc-webstack
```

### Removing the stack

Putting aside the question of why you are doing this...

```
docker stack rm pdsc-webstack
```