# Deployment Summary

Your Docusaurus documentation app is deployed to AWS! 

**Preview URL:** https://d1fp14oynvr8l9.cloudfront.net/react-native-keyboard-controller

**Alternative URLs:**
- Root: https://d1fp14oynvr8l9.cloudfront.net/
- Base path: https://d1fp14oynvr8l9.cloudfront.net/react-native-keyboard-controller

**Next Step: Automate Deployments**

You're currently using manual deployment. To automate deployments from GitHub, ask your coding agent to set up AWS CodePipeline using an agent SOP for pipeline creation. Try: "create a pipeline using AWS SOPs"

**Services used:** CloudFront, S3, CloudFormation, IAM, CloudFront Functions

Questions? Ask your Coding Agent:
 - What resources were deployed to AWS?
 - How do I update my deployment?
 - How do I set up a custom domain?

## Quick Commands

```bash
# View deployment status
aws cloudformation describe-stacks \
  --stack-name "KeyboardCtrlFrontend-preview-kamielw" \
  --region eu-central-1 \
  --query 'Stacks[0].StackStatus' \
  --output text

# Invalidate CloudFront cache (force immediate update)
aws cloudfront create-invalidation \
  --distribution-id "E29S0BX9AE68QR" \
  --paths "/*"

# View CloudFront access logs (last 20 entries)
aws s3 ls "s3://keyboardctrlfrontend-prev-cftos3cloudfrontloggingb-vn4hrzfdfsmj/" --recursive | tail -20

# Redeploy (from project root)
./scripts/deploy.sh

# Deploy to different environment
./scripts/deploy.sh dev       # dev environment
./scripts/deploy.sh prod      # production environment
```

## Production Readiness

For production deployments, consider:

- **Custom Domain:** Set up Route 53 hosted zone and ACM certificate for your domain
- **WAF Protection:** Add AWS WAF with managed rules (Core Rule Set, Known Bad Inputs) and rate limiting (e.g., 2000 requests per 5 minutes per IP)
- **Monitoring:** CloudWatch alarms for 4xx/5xx errors and CloudFront metrics
- **CI/CD Pipeline:** Automate deployments with AWS CodePipeline or GitHub Actions
- **Budget Alerts:** Set up AWS Budget alerts to monitor costs

## Infrastructure Details

### Stack Information
- **Stack Name:** KeyboardCtrlFrontend-preview-kamielw
- **Region:** eu-central-1
- **Account:** 189681391221
- **Status:** UPDATE_COMPLETE
- **Created:** 2026-05-06

### Resources Deployed
- **CloudFront Distribution** (E29S0BX9AE68QR): Global CDN with HTTPS, HTTP/2, HTTP/3
- **S3 Bucket** (keyboardctrlfrontend-previe-cftos3s3bucketcae9f2be-7ibd3v9ubkjx): Content storage with encryption
- **CloudFront Functions:**
  - CSP Function: Adds Content-Security-Policy headers
  - Extension Rewrite Function: Handles URL rewriting for Docusaurus (trailingSlash:false)
- **Origin Access Control:** Secure S3 access (no public bucket access)
- **Logging Buckets:**
  - S3 access logs: keyboardctrlfrontend-prev-cftos3s3loggingbucket64b-vozojoyexlnb
  - CloudFront access logs: keyboardctrlfrontend-prev-cftos3cloudfrontloggingb-vn4hrzfdfsmj
- **IAM Roles:** Deployment automation with least-privilege access

### Security Features
- TLS 1.2+ only (minimum protocol version)
- Content Security Policy headers via CloudFront Function
- Private S3 bucket with Origin Access Control
- Encrypted S3 buckets with AES-256
- Enforced SSL/TLS for S3 access
- Security headers response policy

### Cost Estimation
For pricing details, use the [AWS Pricing Calculator](https://calculator.aws). Typical costs for a low-traffic documentation site:
- CloudFront: $0.085/GB + $0.0075 per 10,000 requests (first 10 TB/month)
- S3 storage: $0.023/GB/month
- S3 requests: $0.0004 per 1,000 GET requests

## Deployment History

### 2026-05-06: Initial Deployment
- Created CloudFormation stack
- Deployed Docusaurus site with base path `/react-native-keyboard-controller/`
- Configured CloudFront distribution with global CDN
- Fixed root path handling with CloudFront Function update

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Site not updating | Invalidate CloudFront cache: `aws cloudfront create-invalidation --distribution-id E29S0BX9AE68QR --paths "/*"` |
| 404 on specific pages | Check that files exist in S3 bucket and CloudFront function is handling URL rewrites correctly |
| Stale content | CloudFront caches for 24 hours by default. Use cache invalidation for immediate updates |
| Deployment fails | Check CloudFormation events in AWS Console for detailed error messages |

## Project Configuration

### Build Configuration
- **Framework:** Docusaurus 3.4.0
- **Build Command:** `npm run build`
- **Output Directory:** `build/`
- **Base Path:** `/react-native-keyboard-controller/`
- **Trailing Slash:** false

### CDK Configuration
- **CDK Version:** 2.1031.0
- **Stack Location:** `infra/`
- **Deployment Script:** `scripts/deploy.sh`

## Related Files
- Infrastructure: `infra/lib/stacks/frontend-stack.ts`
- Deployment script: `scripts/deploy.sh`
- CDK app: `infra/bin/infra.ts`
- Deployment plan: See commit history for DEPLOYMENT_PLAN.md (deleted after completion)

---

*Deployed using the [deploy-frontend-app] Agent Standard Operation Procedure from the [AWS MCP](https://docs.aws.amazon.com/aws-mcp/latest/userguide/what-is-mcp-server.html).*
