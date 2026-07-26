# Desert Diamond Tech — Monorepo

This monorepo contains two separate but related properties for **Desert Diamond Tech**:

1. **Main Consulting Site** (`apps/main-site`) → `desertdiamondinc.com`
2. **Training Academy Site** (`apps/academy-site`) → `academy.desertdiamondinc.com`

Both sites share design tokens, content data, and brand assets through the `packages/shared` workspace.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

```bash
# Install all dependencies across the monorepo
npm install
```

### Development

Run both sites locally on separate ports:

```bash
# Main consulting site on http://localhost:3000
npm run dev:main

# Training academy site on http://localhost:3001
npm run dev:academy

# Or run both simultaneously (Windows)
npm run dev
```

### Build

```bash
# Build both sites for production
npm run build

# Build individual sites
npm run build:main
npm run build:academy
```

### Lint & Format

```bash
# Lint all workspaces
npm run lint

# Format all code
npm run format
```

---

## 📂 Project Structure

```
desertdiamondinc/
├── apps/
│   ├── main-site/          # Main consulting website
│   │   ├── app/            # Next.js App Router pages
│   │   ├── components/     # React components
│   │   ├── public/         # Static assets
│   │   └── package.json
│   └── academy-site/       # Training academy website
│       ├── app/            # Next.js App Router pages
│       ├── components/     # React components
│       ├── public/         # Static assets
│       └── package.json
├── packages/
│   └── shared/             # Shared design tokens & content
│       ├── tokens.ts       # Brand colors, logo paths, certs
│       ├── content/        # Programs, services, marketing copy
│       └── package.json
├── package.json            # Root workspace configuration
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── README.md               # This file
└── DEPLOYMENT.md           # AWS deployment guide
```

---

## 🎨 Design System

### Brand Colors

Defined in `packages/shared/tokens.ts`:

- **Gold**: `#CC9F5E`
- **Blue**: `#0A26B4`
- **Black**: `#0B0B0C`
- **White**: `#FFFFFF`
- **Gray scale**: 50–900

Both sites extend Tailwind with these colors as `dd-gold`, `dd-blue`, etc.

### Logo

- **File**: `desert_diamond_logo_full-01.png` (full-color gradient)
- **Placement**: Light backgrounds only (white/light-neutral header and footer)
- **Usage**: Exact same file on both properties; do not swap variants

### Certification Badges

Real AWS certification badges stored in `/public/certifications/` on both sites:

- `aws-certified-solutions-architect-professional.png`
- `aws-certified-solutions-architect-associate.png`
- `aws-certified-cloud-practitioner.png`

---

## 📝 Content Management

All copy is centralized in `packages/shared/content/`:

- **`programs.ts`** — Training programs with pricing, cohort dates
- **`services.ts`** — Consulting services descriptions
- **`marketing.ts`** — Approved taglines and differentiators

### Updating Pricing or Dates

Edit `packages/shared/content/programs.ts`:

```typescript
export const programs: Program[] = [
  {
    id: "system-engineering-comprehensive",
    title: "System Engineering (AWS, DevOps, Networking, Windows, Linux & AI)",
    duration: "5 Months",
    price: 3500,  // ← Change here
    // ...
  },
];

export const cohorts: Cohort[] = [
  { name: "March Cohort", startDate: "03/21" },  // ← Update dates here
  // ...
];
```

Changes automatically propagate to both the academy homepage and programs page.

---

## 🔒 Environment Variables

Each app has a `.env.example` file. Copy to `.env.local` and configure:

### Main Site (`apps/main-site/.env.local`)

```bash
CONTACT_EMAIL=kondey@desertdiamondinc.com

# For production with AWS SES:
# AWS_REGION=us-east-1
# AWS_ACCESS_KEY_ID=...
# AWS_SECRET_ACCESS_KEY=...
# SES_FROM_EMAIL=no-reply@desertdiamondinc.com
```

### Academy Site (`apps/academy-site/.env.local`)

Same as above.

---

## 🧪 Forms (Local Development)

### Contact Form (`/api/contact`)

Currently logs submissions to console. Ready to plug into AWS SES.

### Registration Form (`/api/register`)

Currently logs submissions to console. Ready to plug into AWS SES or a CRM.

Both forms validate input and return proper error responses. See `DEPLOYMENT.md` for production email integration.

---

## 🌐 SEO

- **Sitemaps**: Auto-generated at `/sitemap.xml` on each site
- **Robots.txt**: Configured in `/public/robots.txt`
- **Metadata**: Per-page `<title>`, `<meta description>`, Open Graph tags
- **Structured Data**: Course schema on academy program pages

---

## 🎯 Placeholder Content

Content clearly marked as placeholder:

- Case study client names on main site (`/work`)
- Testimonials on academy site (`/`)
- Team/founder bios (`/about` pages)

Replace with real data before launch.

---

## 📦 Dependencies

- **Next.js 14** — App Router
- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **ESLint + Prettier** — Code quality

---

## 🚢 Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for:

- AWS infrastructure setup (S3 + CloudFront + Route 53)
- Terraform IaC examples
- CI/CD with GitHub Actions
- Cost estimates

**⚠️ Do not deploy to production until explicitly approved.**

---

## 📞 Contact

- **Email**: kondey@desertdiamondinc.com
- **Main Domain**: desertdiamondinc.com
- **Academy Domain**: academy.desertdiamondinc.com

---

## ✅ Deliverables Checklist

- [x] Monorepo structure with shared design tokens
- [x] Main consulting site (5 pages: Home, About, Services, Work, Contact)
- [x] Training academy site (4 pages: Home, Programs, About, Contact/Register)
- [x] Real AWS certification badges
- [x] Functional contact and registration forms (local/mock)
- [x] SEO fundamentals (sitemap, robots, metadata, schema)
- [x] Responsive design (mobile-first, 375px–1440px)
- [x] TypeScript strict mode, ESLint, Prettier
- [x] `.env.example`, `.gitignore` configurations
- [x] This README and DEPLOYMENT.md

---

**Built by Desert Diamond Tech** — Discovery and Pursuit
