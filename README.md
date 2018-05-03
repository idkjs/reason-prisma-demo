# Demo for a Basic Fullstack GraphQL App with [ReasonApollo](https://github.com/apollographql/reason-apollo) / [Prisma](https://prisma.io)

# Installing & Running

```s
cd server
yarn && yarn start
cd ..
yarn && yarn start
```

## Running two instances

To run to front ends against the server run `yarn start` in root run on your local machine, the run `docker run -p 8080:80 idkjs/crud-image` in another terminal.

Both instance will work against the running server, exactly the same way, in theory. There is some kind of latency on the docker image. The refetch query function seems to not be working quickly enough or its not waiting for a respose. Need to work that out.

## Note on graphql

Only seems to work on graphql@12.3. Otherwise anything above that is throwing a parse(doc) experimental graphql-tag error. Strangely, works on a webpack, no react-scripts version with 13.2.

Culprit is probably refetchqueries and inMemoryCache settings.

## Deploying to Digital Ocean

Building the image in the droplet throws errors with reason so we are building the image on our local machine in its done state. The running that on droplet.

1.  Build the image `docker build -t idkjs/someimage .`
2.  Test locally:`docker run -p 8080:80 idkjs/someimage`
3.  Push the image to hub.docker.io: `docker push idkjs/someimage`
4.  In droplet, `docker pull idkjs/someimage`
5.  Then `docker run -p 8080:80 idkjs/someimage` or `docker run -d -p 8080:80 idkjs/someimage`

Final Image: idkjs/reason-prisma-basic

## Documentation

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

> **Note**: We recommend that you're using `yarn dev` during development as it will give you access to the GraphQL API or your server (defined by the [application schema](./src/schema.graphql)) as well as to the Prisma API directly (defined by the [Prisma database schema](./generated/prisma.graphql)). If you're starting the server with `yarn start`, you'll only be able to access the API of the application schema.

### Server structure

![](https://imgur.com/95faUsa.png)

| File name 　　　　　　　　　　　　　　 | Description 　　　　　　　　<br><br>                                                                                                                           |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `├── .graphqlconfig.yml`               | Configuration file based on [`graphql-config`](https://github.com/prisma/graphql-config) (e.g. used by GraphQL Playground).                                    |
| `└── database` (_directory_)           | _Contains all files that are related to the Prisma database service_                                                                                           | \  |
| `├── prisma.yml`                       | The root configuration file for your Prisma database service ([docs](https://www.prismagraphql.com/docs/reference/prisma.yml/overview-and-example-foatho8aip)) |
| `└── datamodel.graphql`                | Defines your data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51))                                |
| `└── src` (_directory_)                | _Contains the source files for your GraphQL server_                                                                                                            |
| `├── index.js`                         | The entry point for your GraphQL server                                                                                                                        |
| `├── schema.graphql`                   | The **application schema** defining the API exposed to client applications                                                                                     |
| `└── generated` (_directory_)          | _Contains generated files_                                                                                                                                     |
| `└── prisma.grapghql`                  | The **Prisma database schema** defining the Prisma GraphQL API                                                                                                 |
