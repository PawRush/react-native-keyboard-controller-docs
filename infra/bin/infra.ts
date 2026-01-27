#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { execSync } from "child_process";
import { FrontendStack } from "../lib/stacks/frontend-stack";
import { PipelineStack } from "../lib/stacks/pipeline-stack";

const app = new cdk.App();

const getDefaultEnvironment = (): string => {
  try {
    const username = process.env.USER || execSync('whoami').toString().trim();
    return `preview-${username}`;
  } catch {
    return 'preview-local';
  }
};

const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION || "us-east-1";

const codeConnectionArn = app.node.tryGetContext("codeConnectionArn");
const repositoryName = app.node.tryGetContext("repositoryName") || "PawRush/react-native-keyboard-controller-docs";
const branchName = app.node.tryGetContext("branchName") || "deploy-to-aws";

// Manual deployment stacks (when not using pipeline)
if (!codeConnectionArn) {
  const environment = app.node.tryGetContext("environment") || getDefaultEnvironment();
  const buildOutputPath = app.node.tryGetContext("buildPath") || "../build";

  new FrontendStack(app, `RNKeyboardFrontend-${environment}`, {
    env: { account, region },
    environment,
    buildOutputPath,
    description: `React Native Keyboard Controller Docs - ${environment}`,
    terminationProtection: environment === "prod",
  });

  cdk.Tags.of(app).add("Environment", environment);
}

// Pipeline deployment (when codeConnectionArn is provided)
if (codeConnectionArn) {
  new PipelineStack(app, "RNKeyboardPipelineStack", {
    env: { account, region },
    description: "CI/CD Pipeline for RNKeyboard",
    codeConnectionArn,
    repositoryName,
    branchName,
    terminationProtection: true,
  });
}

cdk.Tags.of(app).add("Project", "RNKeyboard");
cdk.Tags.of(app).add("ManagedBy", "CDK");
