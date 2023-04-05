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
GIT_USER=$GITHUB_USERNAME GIT_PASS=$GITHUB_KEY DEPLOYMENT_BRANCH=pages npm run deploy
```

This command is a convenient way to build the website and push to the `pages` branch.

## Images

- Host images using the markdown structure for individual images. https://docusaurus.io/docs/markdown-features/assets
- Host albums with google photos. 

## Tools used: 

1. https://tableconvert.com/html-to-json
2. https://favicon.io/favicon-converter/
