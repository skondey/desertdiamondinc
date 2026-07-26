# Placeholder Images — Action Required

The following image files are referenced in the codebase but need to be added before the sites will display correctly:

## Logo File (Required)

**Location (copy to both):**
- `apps/main-site/public/logo/desert_diamond_logo_full-01.png`
- `apps/academy-site/public/logo/desert_diamond_logo_full-01.png`

**File:** Use the `desert_diamond_logo_full-01.png` file from your brochure/assets
- Full-color gold-to-blue gradient diamond mark
- Transparent background
- Includes "DESERTDIAMOND / Discovery and Pursuit" wordmark

**Recommended dimensions:** 400×120px or higher resolution with same aspect ratio

---

## AWS Certification Badge Images (Required)

**Location (copy to both):**
- `apps/main-site/public/certifications/`
- `apps/academy-site/public/certifications/`

### Files needed:

1. **`aws-certified-solutions-architect-professional.png`**
   - AWS Certified Solutions Architect – Professional badge
   - Teal/turquoise hexagon badge
   
2. **`aws-certified-solutions-architect-associate.png`**
   - AWS Certified Solutions Architect – Associate badge
   - Blue hexagon badge
   
3. **`aws-certified-cloud-practitioner.png`**
   - AWS Certified Cloud Practitioner (Foundational) badge
   - Gray/dark hexagon badge

**Recommended dimensions:** 200×200px or similar square format

**Where to get them:** You've provided these images already. Copy them from your Downloads folder to the paths above.

---

## How to Add Images

### Option 1: Manual Copy

1. Copy `desert_diamond_logo_full-01.png` to:
   - `C:\Users\skond\WorkSpace\Project\desertdiamondinc\apps\main-site\public\logo\`
   - `C:\Users\skond\WorkSpace\Project\desertdiamondinc\apps\academy-site\public\logo\`

2. Copy the three AWS badge PNGs to:
   - `C:\Users\skond\WorkSpace\Project\desertdiamondinc\apps\main-site\public\certifications\`
   - `C:\Users\skond\WorkSpace\Project\desertdiamondinc\apps\academy-site\public\certifications\`

### Option 2: Ask me to create placeholders

If you don't have the images readily available, I can create simple placeholder rectangles with text labels so you can test the sites immediately, and you can swap in the real images later.

---

## After Adding Images

Once images are in place:

```bash
# Start the dev servers
npm run dev:main    # Main site on localhost:3000
npm run dev:academy # Academy site on localhost:3001
```

Both sites should now display the logo in the header/footer and certification badges on their respective pages.

---

**Note:** Without these image files, Next.js will show errors about missing static assets, but the sites will still load (just without the logo/badges visible).
