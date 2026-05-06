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

### CI/CD Pipeline

Automated deployments via AWS CodePipeline from the `deploy-to-aws-20260506_150212-kamielw` branch.

**Pipeline**: https://eu-central-1.console.aws.amazon.com/codesuite/codepipeline/pipelines/KeyboardControllerPipeline/view

**Deploy**: Push to `deploy-to-aws-20260506_150212-kamielw` branch to trigger automatic deployment.

Created with the [setup-pipeline] Agent Standard Operation Procedure from the [AWS MCP](https://docs.aws.amazon.com/aws-mcp/latest/userguide/what-is-mcp-server.html).

**Manual Deployment:** Deployed at https://d1fp14oynvr8l9.cloudfront.net/react-native-keyboard-controller (manual script: `./scripts/deploy.sh`)

See [DEPLOYMENT_PLAN.md](./DEPLOYMENT_PLAN.md) for pipeline setup details and next steps.

### GitHub Pages Deployment (Original)

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
