# Deployment Guide — Desert Diamond Tech

**⚠️ IMPORTANT: Do not execute any of these deployment steps until the human reviewer has explicitly approved the local builds and given separate sign-off for production deployment.**

This document outlines the proposed AWS deployment architecture for both properties:

1. **Main consulting site** → `desertdiamondinc.com`
2. **Training academy site** → `academy.desertdiamondinc.com`

---

## 📋 Prerequisites

Before deploying:

- [ ] Both sites tested locally and approved
- [ ] Domain `desertdiamondinc.com` purchased and DNS managed in Route 53
- [ ] AWS account with appropriate IAM permissions
- [ ] AWS CLI configured locally
- [ ] Terraform installed (if using IaC approach)

---

## 🏗️ Architecture Overview

### Option 1: Static Hosting with S3 + CloudFront (Recommended)

**Per property:**

- **S3 Bucket** (private) — stores Next.js static export
- **CloudFront Distribution** — CDN with Origin Access Control (OAC)
- **ACM Certificate** (us-east-1) — SSL/TLS for HTTPS
- **Route 53 Records** — DNS A + AAAA aliases to CloudFront

**Benefits:**
- Low cost (~$1-5/month per site at low traffic)
- Excellent performance with global CDN
- Automatic SSL certificate management
- Infrastructure as Code friendly

### Option 2: AWS Amplify Hosting (Simpler Alternative)

**Per property:**

- **Amplify App** — managed hosting with built-in CI/CD
- Automatic domain mapping for `desertdiamondinc.com` and `academy.desertdiamondinc.com`
- Automatic SSL certificates
- GitHub integration for auto-deploy on push

**Benefits:**
- Simplest setup (no S3/CloudFront config)
- Built-in preview environments
- Slightly higher cost (~$2-10/month per site)

---

## 🚀 Deployment Steps (Option 1: S3 + CloudFront)

### 1. Build for Production

```bash
# Build both sites
npm run build
```

This generates static exports in:
- `apps/main-site/.next/`
- `apps/academy-site/.next/`

If using full static export (no server components), add to `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  // ...
};
```

### 2. Create S3 Buckets

```bash
# Main site bucket
aws s3 mb s3://desertdiamondinc-main-site --region us-east-1

# Academy site bucket
aws s3 mb s3://desertdiamondinc-academy-site --region us-east-1
```

**Important:** Keep buckets private (no public access). CloudFront will access via OAC.

### 3. Upload Build Artifacts

```bash
# Main site
cd apps/main-site
aws s3 sync out/ s3://desertdiamondinc-main-site --delete

# Academy site
cd ../academy-site
aws s3 sync out/ s3://desertdiamondinc-academy-site --delete
```

### 4. Request ACM Certificates

In **us-east-1** (required for CloudFront):

```bash
# Certificate for main domain + www
aws acm request-certificate \
  --domain-name desertdiamondinc.com \
  --subject-alternative-names www.desertdiamondinc.com \
  --validation-method DNS \
  --region us-east-1

# Certificate for academy subdomain
aws acm request-certificate \
  --domain-name academy.desertdiamondinc.com \
  --validation-method DNS \
  --region us-east-1
```

Validate via DNS records in Route 53 (ACM provides CNAME records to add).

### 5. Create CloudFront Distributions

For each site:

- **Origin**: S3 bucket (via Origin Access Control, not legacy OAI)
- **Default root object**: `index.html`
- **SSL certificate**: ACM cert from step 4
- **Alternate domain names (CNAMEs)**: `desertdiamondinc.com`, `www.desertdiamondinc.com` (main) or `academy.desertdiamondinc.com` (academy)
- **Viewer protocol policy**: Redirect HTTP to HTTPS
- **Price class**: Use all edge locations or just US/EU based on traffic

### 6. Configure Route 53

Create A and AAAA records (IPv4 + IPv6) for:

- `desertdiamondinc.com` → main site CloudFront distribution
- `www.desertdiamondinc.com` → main site CloudFront distribution
- `academy.desertdiamondinc.com` → academy site CloudFront distribution

Use **Alias records** pointing to CloudFront distributions (not raw IPs).

### 7. Test

- Visit `https://desertdiamondinc.com` → should load main site
- Visit `https://academy.desertdiamondinc.com` → should load academy site
- Verify HTTPS works (green lock icon)
- Test contact/registration forms end-to-end

---

## 🛠️ Infrastructure as Code (Terraform)

Example Terraform module for one property:

```hcl
# main.tf (simplified example for main site)

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# S3 Bucket
resource "aws_s3_bucket" "main_site" {
  bucket = "desertdiamondinc-main-site"
}

resource "aws_s3_bucket_public_access_block" "main_site" {
  bucket                  = aws_s3_bucket.main_site.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# CloudFront Origin Access Control
resource "aws_cloudfront_origin_access_control" "main_site" {
  name                              = "desertdiamondinc-main-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# CloudFront Distribution
resource "aws_cloudfront_distribution" "main_site" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = ["desertdiamondinc.com", "www.desertdiamondinc.com"]

  origin {
    domain_name              = aws_s3_bucket.main_site.bucket_regional_domain_name
    origin_id                = "S3-main-site"
    origin_access_control_id = aws_cloudfront_origin_access_control.main_site.id
  }

  default_cache_behavior {
    target_origin_id       = "S3-main-site"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.main_site.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

# ACM Certificate (must be in us-east-1)
resource "aws_acm_certificate" "main_site" {
  domain_name               = "desertdiamondinc.com"
  subject_alternative_names = ["www.desertdiamondinc.com"]
  validation_method         = "DNS"
}

# Route 53 A Record
resource "aws_route53_record" "main_site_a" {
  zone_id = var.route53_zone_id  # Your hosted zone ID
  name    = "desertdiamondinc.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.main_site.domain_name
    zone_id                = aws_cloudfront_distribution.main_site.hosted_zone_id
    evaluate_target_health = false
  }
}

# Repeat for academy site with different bucket/distribution/domain
```

Repeat this pattern for the academy site with `academy.desertdiamondinc.com`.

---

## 📧 Email Integration (AWS SES)

### Setup

1. **Verify domain** in SES (us-east-1 or your preferred region)
2. **Request production access** (SES starts in sandbox mode)
3. **Create IAM user** with `ses:SendEmail` permission
4. **Store credentials** in environment variables or AWS Secrets Manager

### Update API Routes

In `apps/main-site/app/api/contact/route.ts`:

```typescript
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({ region: process.env.AWS_REGION });

export async function POST(request: NextRequest) {
  // ... validation ...

  await sesClient.send(new SendEmailCommand({
    Source: process.env.SES_FROM_EMAIL,
    Destination: { ToAddresses: [contact.email] },
    Message: {
      Subject: { Data: `Contact Form: ${name}` },
      Body: {
        Text: { Data: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}` }
      }
    }
  }));

  return NextResponse.json({ success: true });
}
```

Repeat for academy registration form.

### Environment Variables

Set in Amplify environment variables or via `.env.production` (not committed):

```bash
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
SES_FROM_EMAIL=no-reply@desertdiamondinc.com
CONTACT_EMAIL=kondey@desertdiamondinc.com
```

---

## 🔄 CI/CD (GitHub Actions)

### Example Workflow (`.github/workflows/deploy-main-site.yml`)

```yaml
name: Deploy Main Site

on:
  push:
    branches: [main]
    paths:
      - 'apps/main-site/**'
      - 'packages/shared/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build:main
        
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
          
      - name: Deploy to S3
        run: |
          aws s3 sync apps/main-site/out/ s3://desertdiamondinc-main-site --delete
          
      - name: Invalidate CloudFront cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_MAIN_DISTRIBUTION_ID }} \
            --paths "/*"
```

Repeat for academy site.

---

## 💰 Cost Estimate (Low Traffic)

### Per Site (at <10K visitors/month):

- **S3 storage**: $0.023/GB/month → ~$0.50/month
- **CloudFront**: 1 GB data transfer + 10K requests → ~$1.50/month
- **Route 53**: $0.50/hosted zone/month
- **ACM certificate**: Free
- **Total per site**: **~$2.50/month**

### Both Sites Total: **~$5/month** + SES costs

SES costs:
- $0.10 per 1,000 emails (first 62K emails/month free on EC2/Lambda)
- If sending from non-AWS, ~$0.10/1K emails with no free tier

**At low volume (< 100 form submissions/month): effectively free.**

---

## 🧪 Testing Before Production

1. Deploy to **staging CloudFront distributions** with test subdomains first
2. Run Lighthouse audits (target 90+ scores)
3. Test forms end-to-end with real SES emails
4. Verify SSL certificates load correctly
5. Test from multiple devices/browsers
6. Confirm DNS propagation (can take 24-48 hours)

---

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [AWS Static Website Hosting Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront with S3 Origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html)
- [AWS SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/Welcome.html)

---

## ✅ Pre-Deployment Checklist

- [ ] Local builds tested and approved
- [ ] Placeholder content replaced with real data
- [ ] Logo and certification badge files added to `/public`
- [ ] Forms tested locally
- [ ] Environment variables documented
- [ ] DNS/domain ownership confirmed
- [ ] AWS account and billing configured
- [ ] Terraform modules reviewed (if using IaC)
- [ ] **Explicit human approval received for production deployment**

---

**Do not proceed with deployment until all items above are checked and approved.**
