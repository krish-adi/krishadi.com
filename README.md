# krishadi.com

## Local Development

**Start the development server:**

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

**Build the static website:**

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

**Deploy the build files to brach `pages`:**

```
$ GIT_USER=krish-adi GIT_PASS=$GIT_PASS DEPLOYMENT_BRANCH=pages npm run deploy
```

This command is a convenient way to build the website and push to the `pages` branch.
