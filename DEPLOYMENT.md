---
sop_name: deploy-frontend-app
repo_name: react-native-keyboard-controller-docs
app_name: RNKeyboard
app_type: Frontend Application - Docusaurus
branch: deploy-to-aws
created: 2026-01-27T11:32:00Z
last_updated: 2026-01-27T11:55:00Z
---

# Deployment Summary

Your app is deployed to AWS! Preview URL: https://d2zkwitkxti0yw.cloudfront.net/react-native-keyboard-controller/

**Next Step: Automate Deployments**

You're currently using manual deployment. To automate deployments from GitHub, ask your coding agent to set up AWS CodePipeline using an agent SOP for pipeline creation. Try: "create a pipeline using AWS SOPs"

Services used: CloudFront, S3, CloudFormation, IAM

Questions? Ask your Coding Agent:
 - What resources were deployed to AWS?
 - How do I update my deployment?

## Quick Commands

```bash
# View deployment status
aws cloudformation describe-stacks --stack-name "RNKeyboardFrontend-preview-sergeyka" --query 'Stacks[0].StackStatus' --output text

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id "E38Y0OEU680IRW" --paths "/*"

# View CloudFront access logs (last hour)
aws s3 ls "s3://rnkeyboardfrontend-previe-cftos3cloudfrontloggingb-2zfycqeyglkv/" --recursive | tail -20

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

# Deployment Plan: React Native Keyboard Controller Docs

Coding Agents should follow this Deployment Plan, and validate previous progress if picking up the Deployment in a new coding session.

**IMPORTANT**: Update this plan after EACH step completes. Mark the step `[x]` and update `last_updated` timestamp.

## Phase 1: Gather Context and Configure
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

## Phase 5: Pipeline Setup
- [ ] Step 14: Create CDK Pipeline Stack
- [ ] Step 15: Deploy Pipeline
- [ ] Step 16: Update Documentation

## Deployment Info

- Framework: Docusaurus
- Package Manager: npm
- Build Command: npm run build
- Output Directory: build/
- Base Path: /react-native-keyboard-controller/
- Trailing Slash: false
- Deployment URL: https://d2zkwitkxti0yw.cloudfront.net/react-native-keyboard-controller/
- Stack Name: RNKeyboardFrontend-preview-sergeyka
- Distribution ID: E38Y0OEU680IRW
- S3 Bucket Name: rnkeyboardfrontend-preview--cftos3s3bucketcae9f2be-rbvvhdmxcbre
- CloudFront Log Bucket: rnkeyboardfrontend-previe-cftos3cloudfrontloggingb-2zfycqeyglkv
- S3 Log Bucket: rnkeyboardfrontend-previe-cftos3s3loggingbucket64b-7tfsygqablk3
- Deployment Timestamp: 2026-01-27T11:54:09Z

## Recovery Guide

```bash
# Rollback
cd infra && cdk destroy "RNKeyboardFrontend-preview-$(whoami)"

# Redeploy
./scripts/deploy.sh

# Manual invalidation if needed
aws cloudfront create-invalidation --distribution-id "E38Y0OEU680IRW" --paths "/*"
```

## Issues Encountered

1. CloudFront defaultRootObject with base path - RESOLVED
   - Issue: defaultRootObject only works at distribution root, not subdirectories
   - Fix: Updated CloudFront function to handle directory indexes by appending index.html when path ends with /

## Session Log

### Session 1 - 2026-01-27T11:32:00Z - 11:55:00Z
Agent: Claude Sonnet 4.5
Progress: Completed full deployment - all phases done
- Phase 1: Detected Docusaurus configuration, validated prerequisites
- Phase 2: Generated CDK infrastructure with CloudFront + S3
- Phase 3: Deployed to AWS, fixed CloudFront function for directory indexes
- Phase 4: Finalizing documentation
Next: Update README.md and create final documentation
