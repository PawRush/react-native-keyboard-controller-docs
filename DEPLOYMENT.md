---
sop_name: deploy-frontend-app
repo_name: react-native-keyboard-controller-docs
app_name: RNKbdDocs
app_type: Frontend Application (Docusaurus)
branch: deploy-to-aws-20260127_182622-sergeyka
created: 2026-01-27T18:30:00Z
last_updated: 2026-01-27T18:50:00Z
---

# Deployment Summary

Your app is deployed to AWS! Preview URL: https://d24nw37vjnfh9d.cloudfront.net/react-native-keyboard-controller

**Next Step: Automate Deployments**

You're currently using manual deployment. To automate deployments from GitHub, ask your coding agent to set up AWS CodePipeline using an agent SOP for pipeline creation. Try: "create a pipeline using AWS SOPs"

Services used: CloudFront, S3, CloudFormation, IAM

Questions? Ask your Coding Agent:
 - What resources were deployed to AWS?
 - How do I update my deployment?

## Quick Commands

```bash
# View deployment status
aws cloudformation describe-stacks --stack-name "RNKbdDocsFrontend-preview-sergeyka" --query 'Stacks[0].StackStatus' --output text

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id "E39G638LYOFEIL" --paths "/*"

# View CloudFront access logs (last hour)
aws s3 ls "s3://rnkbddocsfrontend-preview-cftos3cloudfrontloggingb-ws37giw1l48z/" --recursive | tail -20

# Redeploy
./scripts/deploy.sh
```

## Production Readiness

For production deployments, consider:
- WAF Protection: Add AWS WAF with managed rules (Core Rule Set, Known Bad Inputs) and rate limiting
- CSP Headers: Configure Content Security Policy in CloudFront response headers (`script-src 'self'`, `frame-ancestors 'none'`)
- Custom Domain: Set up Route 53 and ACM certificate
- Monitoring: CloudWatch alarms for 4xx/5xx errors and CloudFront metrics
- Auth Redirect URLs: If using an auth provider (Auth0, Supabase, Firebase, Lovable, etc.), add your CloudFront URL to allowed redirect URLs

---

# Deployment Plan: RNKbdDocs

Coding Agents should follow this Deployment Plan, and validate previous progress if picking up the Deployment in a new coding session.

**IMPORTANT**: Update this plan after EACH step completes. Mark the step `[x]` and update `last_updated` timestamp.

## Phase 1: Gather Context and Configure
- [x] Step 0: Inform User of Execution Flow
- [x] Step 1: Create Deployment Plan
- [x] Step 2: Create Deploy Branch
- [x] Step 3: Detect Build Configuration
- [x] Step 4: Validate Prerequisites
- [x] Step 5: Revisit Deployment Plan

## Phase 2: Build CDK Infrastructure
- [x] Step 6: Initialize CDK Foundation
- [x] Step 7: Generate CDK Stack
- [x] Step 8: Create Deployment Script
- [x] Step 9: Validate CDK Synth

## Phase 3: Deploy and Validate
- [x] Step 10: Execute CDK Deployment
- [x] Step 11: Validate CloudFormation Stack

## Phase 4: Update Documentation
- [x] Step 12: Finalize Deployment Plan
- [x] Step 13: Update README.md

## Deployment Info

- Deployment URL: https://d24nw37vjnfh9d.cloudfront.net/react-native-keyboard-controller
- Stack name: RNKbdDocsFrontend-preview-sergeyka
- Distribution ID: E39G638LYOFEIL
- Distribution Domain: d24nw37vjnfh9d.cloudfront.net
- S3 Bucket Name: rnkbddocsfrontend-preview-s-cftos3s3bucketcae9f2be-l0cmdnnpgomb
- S3 Log Bucket Name: rnkbddocsfrontend-preview-cftos3s3loggingbucket64b-nfzbrjxtizw3
- CloudFront Log Bucket Name: rnkbddocsfrontend-preview-cftos3cloudfrontloggingb-ws37giw1l48z
- Deployment timestamp: 2026-01-27T18:45:09Z

## Recovery Guide

```bash
# Rollback
cd infra
npx cdk destroy "RNKbdDocsFrontend-preview-sergeyka"

# Redeploy
./scripts/deploy.sh
```

## Issues Encountered

1. CloudFront base path routing - Fixed: Updated extensionRewriteFunction to explicitly handle `/react-native-keyboard-controller` and `/react-native-keyboard-controller/` paths to return index.html.

## Session Log

### Session 1 - 2026-01-27T18:30:00Z - 2026-01-27T18:50:00Z
Agent: Claude Sonnet 4.5
Progress:
- Analyzed codebase (Docusaurus static site)
- Created deployment infrastructure with CDK
- Generated frontend stack with CloudFront + S3
- Deployed to AWS successfully
- Fixed CloudFront function for base path routing
- Validated deployment

Status: All phases completed successfully
