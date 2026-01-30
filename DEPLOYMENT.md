---
sop_name: deploy-frontend-app
repo_name: react-native-keyboard-controller-docs
app_name: KbdCtrlDocs
app_type: Frontend Application (Docusaurus)
branch: deploy-to-aws-20260130_032535-sergeyka
created: 2026-01-30T05:11:00Z
completed: 2026-01-30T05:28:00Z
---

# Deployment Summary

Your app is deployed to AWS! Preview URL: https://d16csi8blmb657.cloudfront.net/react-native-keyboard-controller/index.html

**Next Step: Automate Deployments**

You're currently using manual deployment. To automate deployments from GitHub, ask your coding agent to set up AWS CodePipeline using an agent SOP for pipeline creation. Try: "create a pipeline using AWS SOPs"

Services used: CloudFront, S3, CloudFormation, IAM

Questions? Ask your Coding Agent:
 - What resources were deployed to AWS?
 - How do I update my deployment?

## Quick Commands

```bash
# View deployment status
aws cloudformation describe-stacks --stack-name "KbdCtrlDocsFrontend-preview-sergeyka" --query 'Stacks[0].StackStatus' --output text

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id "E2RWDULEHTE4O9" --paths "/*"

# View CloudFront access logs (last hour)
aws s3 ls "s3://kbdctrldocsfrontend-previ-cftos3cloudfrontloggingb-yy2buny8mlv1/" --recursive | tail -20

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
- [x] Step 12: Finalize Deployment Plan
- [x] Step 13: Update README.md

## Deployment Info

- Deployment URL: https://d16csi8blmb657.cloudfront.net/react-native-keyboard-controller/index.html
- Stack name: KbdCtrlDocsFrontend-preview-sergeyka
- Distribution ID: E2RWDULEHTE4O9
- Distribution Domain: d16csi8blmb657.cloudfront.net
- S3 Bucket: kbdctrldocsfrontend-preview-cftos3s3bucketcae9f2be-d7zaiwq1i2kk
- S3 Log Bucket: kbdctrldocsfrontend-previ-cftos3s3loggingbucket64b-4htavkf8o9q2
- CloudFront Log Bucket: kbdctrldocsfrontend-previ-cftos3cloudfrontloggingb-yy2buny8mlv1

## Recovery Guide

```bash
# Rollback (from infra/ directory)
cd infra
cdk destroy "KbdCtrlDocsFrontend-preview-sergeyka"

# Redeploy
./scripts/deploy.sh

# Invalidate CloudFront cache manually
aws cloudfront create-invalidation --distribution-id "E2RWDULEHTE4O9" --paths "/*"
```

## Issues Encountered

None.

## Session Log

### Session 1 - 2026-01-30T05:11:00Z - 05:28:00Z
Agent: Claude Sonnet 4.5
Progress: Complete deployment - all phases executed successfully
- Phase 1: Gathered context, detected Docusaurus build configuration
- Phase 2: Built CDK infrastructure with CloudFront + S3
- Phase 3: Deployed to AWS, validated stack
- Phase 4: Finalized documentation
Status: COMPLETED ✅
