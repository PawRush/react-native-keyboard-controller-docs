---
sop_name: deploy-frontend-app
repo_name: react-native-keyboard-controller-docs
app_name: RNKeyboard
app_type: Frontend Application - Docusaurus
branch: deploy-to-aws
created: 2026-01-27T11:32:00Z
last_updated: 2026-01-27T11:32:00Z
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
- [ ] Step 10: Execute CDK Deployment
- [ ] Step 11: Validate CloudFormation Stack

## Phase 4: Update Documentation
- [ ] Step 12: Finalize Deployment Plan
- [ ] Step 13: Update README.md

## Deployment Info

- Framework: Docusaurus
- Package Manager: npm
- Build Command: npm run build
- Output Directory: build/
- Base Path: /react-native-keyboard-controller/
- Trailing Slash: false
- Deployment URL: (pending)
- Stack Name: (pending)
- Distribution ID: (pending)
- S3 Bucket Name: (pending)
- CloudFront Log Bucket: (pending)
- S3 Log Bucket: (pending)

## Recovery Guide

```bash
# Rollback
cd infra && cdk destroy "RNKeyboardFrontend-preview-$(whoami)"

# Redeploy
./scripts/deploy.sh

# Manual invalidation if needed
aws cloudfront create-invalidation --distribution-id "<ID>" --paths "/*"
```

## Issues Encountered

None.

## Session Log

### Session 1 - 2026-01-27T11:32:00Z
Agent: Claude Sonnet 4.5
Progress: Created deployment plan
Next: Create deploy branch
