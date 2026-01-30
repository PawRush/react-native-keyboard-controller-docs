---
sop_name: deploy-frontend-app
repo_name: react-native-keyboard-controller-docs
app_name: KbdCtrlDocs
app_type: Frontend Application (Docusaurus)
branch: deploy-to-aws-20260130_032535-sergeyka
created: 2026-01-30T05:11:00Z
last_updated: 2026-01-30T05:28:00Z
---

# Deployment Plan: Keyboard Controller Docs

Coding Agents should follow this Deployment Plan, and validate previous progress if picking up the Deployment in a new coding session.

**IMPORTANT**: Update this plan after EACH step completes. Mark the step `[x]` and update `last_updated` timestamp.

## Phase 1: Gather Context and Configure
- [x] Step 0: Inform User of Execution Flow
- [x] Step 1: Create Deployment Plan
- [x] Step 2: Create Deploy Branch
- [x] Step 3: Detect Build Configuration
- [x] Step 4: Validate Prerequisites
- [x] Step 5: Revisit Deployment Plan

### Build Configuration
- Framework: Docusaurus 3.4.0
- Package manager: yarn (v4.12.0)
- Build command: `yarn build`
- Output directory: `build/`
- Base path: `/react-native-keyboard-controller/`
- Entry point: `index.html`
- Trailing slash: `false`
- Lint command: None
- CloudFront config: extensionRewriteFunction (rewrites /path → /path.html)

## Phase 2: Build CDK Infrastructure
- [x] Step 6: Initialize CDK Foundation
- [x] Step 7: Generate CDK Stack
- [x] Step 8: Create Deployment Script
- [x] Step 9: Validate CDK Synth

## Phase 3: Deploy and Validate
- [x] Step 10: Execute CDK Deployment
- [x] Step 11: Validate CloudFormation Stack

### Validation Results
- Stack status: CREATE_COMPLETE
- CloudFront distribution: Deployed
- S3 bucket: Files uploaded successfully
- URL: https://d16csi8blmb657.cloudfront.net/react-native-keyboard-controller/index.html (accessible)

## Phase 4: Update Documentation
- [ ] Step 12: Finalize Deployment Plan
- [ ] Step 13: Update README.md

## Deployment Info

- Deployment URL: https://d16csi8blmb657.cloudfront.net/react-native-keyboard-controller
- Stack name: KbdCtrlDocsFrontend-preview-sergeyka
- Distribution ID: E2RWDULEHTE4O9
- Distribution Domain: d16csi8blmb657.cloudfront.net
- S3 Bucket: kbdctrldocsfrontend-preview-cftos3s3bucketcae9f2be-d7zaiwq1i2kk
- S3 Log Bucket: kbdctrldocsfrontend-previ-cftos3s3loggingbucket64b-4htavkf8o9q2
- CloudFront Log Bucket: kbdctrldocsfrontend-previ-cftos3cloudfrontloggingb-yy2buny8mlv1

## Recovery Guide

```bash
# Rollback (from infra/ directory)
cdk destroy "KbdCtrlDocsFrontend-<environment>"

# Redeploy
./scripts/deploy.sh

# Invalidate CloudFront cache manually
aws cloudfront create-invalidation --distribution-id "<ID>" --paths "/*"
```

## Issues Encountered

None.

## Session Log

### Session 1 - 2026-01-30T05:11:00Z
Agent: Claude Sonnet 4.5
Progress: Created deployment plan, using branch deploy-to-aws-20260130_032535-sergeyka
Next: Create deploy branch (Step 2)
