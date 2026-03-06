# Franco & Sons Construction LLC — Project Context

## Tech Stack
- **Framework**: Vite + React 18 + TypeScript (SPA, not Next.js)
- **Styling**: Tailwind CSS v4 + inline styles for brand theming
- **Routing**: react-router v7 (createBrowserRouter) — see `src/app/routes.ts`
- **Hosting**: Vercel (SPA mode with `vercel.json` rewrites)
- **CMS**: Sanity v3 (studio in `/studio/` directory, separate deployment)
- **Forms**: Vercel serverless function (`/api/submit-lead.ts`) → Sanity documents
- **Images**: vite-imagetools auto-converts jpg/png to WebP at build time
- **SEO**: react-helmet-async for head tags, JSON-LD structured data via `JsonLd` component

## Project Structure
```
/api/                    → Vercel serverless functions
/studio/                 → Sanity Studio (separate npm project)
/scripts/                → Build scripts (sitemap generator)
/src/app/
  components/
    layout/              → Header, Footer, Layout
    shared/              → Reusable components (LeadCaptureForm, ImageWithFallback, etc.)
    figma/               → ImageWithFallback (responsive image component)
  data/
    siteData.ts          → COMPANY, SERVICES, LOCATIONS, TESTIMONIALS, IMAGES, FAQS
    blogData.ts          → BLOG_POSTS array
    brandConfig.ts       → BRAND colors, fonts, design tokens
    metaData.ts          → SEO meta generation per route
    seoData.ts           → Page-specific SEO content blocks
    promotionsData.ts    → Lead magnets, promotions
  lib/
    sanity.ts            → Sanity client for frontend reads
  pages/                 → Route page components
/src/assets/             → All images (382MB, auto-optimized to WebP by vite-imagetools)
```

## Key Data Files
- `siteData.ts`: Central source of truth for company info, services, locations, testimonials, FAQs, and image imports
- `blogData.ts`: Blog post content (static, will migrate to Sanity CMS)
- `brandConfig.ts`: Design system — colors, fonts, spacing (dark blueprint aesthetic)

## Brand & Design
- **Aesthetic**: Dark blueprint/construction theme
- **Colors**: Dark navy backgrounds, lime-green (#a3e635-ish) accent
- **Fonts**: Display (bold headlines), Secondary (uppercase labels), Body
- **Elements**: CornerBrackets, DotGrid, CrosshatchGrid, SectionEyebrow, FBadge, AngularDivider
- **Section transitions**: Use `AngularDivider` with `slant-left`/`slant-right` variants between sections. Avoid `roof-multi`, `zigzag`, or other complex variants (they look like visual glitches).

## Business Context
- **Client**: Franco and Sons Construction LLC
- **Location**: Lincoln, California (serves Placer County: Roseville, Rocklin, Folsom, etc.)
- **Owners**: Carlos Franco (father) + Cristian Franco (son)
- **Services**: Kitchen/bathroom remodeling, commercial remodeling, ADA accessible, home additions, and more
- **Phone**: (916) 316-2948
- **License**: CA Licensed General Contractor
- **NOT in Florida** — the business is in California. Do not reference Gulf Coast, Southwest Florida, etc.

## CRITICAL Naming Rules
- **ALWAYS** use the full name: "Franco and Sons Construction LLC"
- **NEVER** abbreviate to "Franco & Sons" — always spell out "and", never use "&"
- **NEVER** drop "Construction LLC" — always include the full legal name
- The ONLY exception is the visual logo mark where "& SONS" is used as a stylistic treatment

## Build & Deploy
- `npm run build` → generates sitemap then runs vite build
- Sitemap auto-generates on every build from route data (`scripts/generate-sitemap.ts`)
- Vercel deploys on push to main
- Sanity Studio deployed separately via `cd studio && npx sanity deploy`

## Environment Variables
- `VITE_SANITY_PROJECT_ID` — Sanity project ID (public, used by frontend)
- `VITE_SANITY_DATASET` — Sanity dataset name (public)
- `SANITY_WRITE_TOKEN` — Sanity write token (secret, API routes only)

## SEO & Schema
- JSON-LD structured data in `JsonLd.tsx`: Organization, LocalBusiness, BreadcrumbList, Service, Place, FAQPage, Article, Review
- Meta tags via `DocumentHead` component using react-helmet-async
- Sitemap at `/sitemap.xml`, robots.txt at `/robots.txt`
- All images get `loading="lazy"` and `decoding="async"` by default (via ImageWithFallback)
- Hero/LCP images use `priority` prop for eager loading

## Important Notes
- Images are in `src/assets/` with hash-based filenames (legacy) and organized folders (`gallery/`, `before-after/`)
- All image imports go through `siteData.ts` IMAGES object
- The `ImageWithFallback` component handles errors gracefully with a placeholder
- Forms submit to `/api/submit-lead` → stored as Sanity "lead" documents
- Content is currently static in TypeScript files; Sanity CMS is set up but needs project creation and data migration
