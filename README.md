# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

**Automated CI/CD Pipeline:** https://us-east-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/RNKbdDocsPipeline/view

**Preview:** https://d24nw37vjnfh9d.cloudfront.net/react-native-keyboard-controller

Deploy to production: `git push origin deploy-to-aws-20260127_182622-sergeyka`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full details.

Created with the [deploy-frontend-app] and [setup-pipeline] Agent Standard Operation Procedures from the [AWS MCP](https://docs.aws.amazon.com/aws-mcp/latest/userguide/what-is-mcp-server.html).

### Manual Deployment

For manual preview deployments (bypasses pipeline):

```bash
./scripts/deploy.sh
```

### Legacy GitHub Pages Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
