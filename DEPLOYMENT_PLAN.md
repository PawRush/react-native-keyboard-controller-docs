---
sop_name: deploy-frontend-app
repo_name: react-native-keyboard-controller-docs
app_name: RNKeyboard
app_type: Frontend Application (Docusaurus)
branch: deploy-to-aws-20260128_131744-sergeyka
created: 2026-01-28T13:17:44Z
last_updated: 2026-01-28T13:35:00Z
---

# Deployment Plan: React Native Keyboard Controller Docs

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

- Framework: Docusaurus 3.4.0
- Package Manager: npm
- Build Command: `npm run build`
- Output Directory: `build/`
- Base Path: `/react-native-keyboard-controller/`
- Trailing Slash: false
- CloudFront Config: extensionRewriteFunction (rewrites /path to /path.html)
- Deployment URL: https://d36wd7f6erioxo.cloudfront.net/react-native-keyboard-controller/index.html
- Stack name: RNKeyboardFrontend-preview-sergeyka
- Distribution ID: E1Z73IA0TTBWGD
- Distribution Domain: d36wd7f6erioxo.cloudfront.net
- S3 Bucket Name: rnkeyboardfrontend-preview--cftos3s3bucketcae9f2be-isslrxyunjbf
- CloudFront Log Bucket: rnkeyboardfrontend-previe-cftos3cloudfrontloggingb-qqf8ue1owqgr
- S3 Log Bucket: rnkeyboardfrontend-previe-cftos3s3loggingbucket64b-v4ow6cujbn7c
- Deployment Timestamp: 2026-01-28T13:34:58Z

## Recovery Guide

```bash
# Rollback
cd infra && npx cdk destroy "<StackName>"

# Redeploy
./scripts/deploy.sh
```

## Issues Encountered

None.

## Session Log

### Session 1 - 2026-01-28T13:17:44Z - 2026-01-28T13:35:00Z
Agent: Claude Sonnet 4.5
Progress: Complete deployment - all phases finished successfully
Next: Documentation finalization
