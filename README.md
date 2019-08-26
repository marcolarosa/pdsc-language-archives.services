> # Development of this application has moved to https://github.com/CoEDL/language-archives.services.
>
> ## Issues raised here will be ignored.

# language-archives.services

This is the base website and associated docker container code and stack configuration

- [language-archives.services](#language-archivesservices)
  - [Developing the website](#developing-the-website)
  - [Building the website container](#building-the-website-container)
  - [Helper scripts](#helper-scripts)
    - [Setting up the swarm](#setting-up-the-swarm)
    - [Updating a service](#updating-a-service)

## Developing the website

```
> cd app
> docker-compose up
```

Load http://localhost:9000 in your browser.

## Building the website container

```
> cd bin
> ./build
```

## Helper scripts

There are 3 helpers in the `bin` folder:

-   build: will build / rebuild the container
-   start-stack: starts the stack (more informaion `Deploying the stack`)
-   stop-stack: stops the stack (more information in `Removing the stack`)

### Setting up the swarm

Docker compose can deploy the stack to a swarm. In this case the swarm is the language-archives.services node. To deploy the stack the swarm first needs to be initialised (this only needs to be done once), viz:

```
> docker swarm init
> docker swarm join-token manager
```

This will initialise the swarm and join the current node as a manager. After that, `docker stack ls` should show an empty swarm.

### Updating a service

```
$ docker service update --image pdsc/api-service-production:latest --update-parallelism 1 --force pdsc-webstack_api-service
```
