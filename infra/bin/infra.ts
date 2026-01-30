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
const branchName = app.node.tryGetContext("branchName") || "deploy-to-aws-20260130_032535-sergeyka";

// Manual deployment mode (no CodeConnection)
if (!codeConnectionArn) {
  const environment = app.node.tryGetContext("environment") || getDefaultEnvironment();
  const buildOutputPath = app.node.tryGetContext("buildPath") || "../build";

  new FrontendStack(app, `KbdCtrlDocsFrontend-${environment}`, {
    env: { account, region },
    environment,
    buildOutputPath,
    description: `Static website hosting - ${environment}`,
    terminationProtection: environment === "prod",
  });

  cdk.Tags.of(app).add("Environment", environment);
}

// Pipeline mode (with CodeConnection)
if (codeConnectionArn) {
  new PipelineStack(app, "KbdCtrlDocsPipelineStack", {
    env: { account, region },
    description: "CI/CD Pipeline for KbdCtrlDocs",
    codeConnectionArn,
    repositoryName,
    branchName,
    terminationProtection: true,
  });
}

cdk.Tags.of(app).add("Project", "KbdCtrlDocs");
cdk.Tags.of(app).add("ManagedBy", "CDK");
