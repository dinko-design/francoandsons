# Local & Technical SEO Checklist — Franco & Sons Construction

This doc summarizes what’s implemented and what to do outside the site for strong local and technical SEO.

---

## Implemented on the site

### Technical SEO
- **Unique title & meta description** per page (home, services, locations, blog, FAQ, etc.) with local keywords (Lincoln, Rocklin, Roseville, Placer County).
- **Canonical URLs** on every page to avoid duplicate content.
- **Open Graph & Twitter cards** with absolute image URLs for correct previews when shared.
- **Dynamic meta for ad/offer pages** (`/offers/...`) so each offer has a relevant title/description (e.g. “Kitchen Remodeling in Roseville | Franco & Sons”).
- **`robots.txt`** allowing crawlers and pointing to the sitemap.
- **`sitemap.xml`** including all important URLs (services, locations, blog, free resources, commercial offer).
- **`index.html`** fallback with correct brand title and description for crawlers that don’t run JS.

### Local SEO (structured data)
- **Organization + LocalBusiness JSON-LD** on every page:
  - Name, phone, email, address (Lincoln, CA).
  - **GeoCoordinates** (Lincoln).
  - **areaServed**: all cities (Lincoln, Rocklin, Roseville, Loomis, Newcastle, Auburn, Folsom, El Dorado Hills).
  - **Opening hours** (Mon–Sat 7am–6pm).
  - **aggregateRating** from testimonials (5-star, review count).
  - **hasOfferCatalog** listing main services.
- **BreadcrumbList** on inner pages for clearer SERP breadcrumbs.
- **Service** schema on each service page (name, description, provider, areaServed).
- **Place** schema on each location page (city, description, address).
- **FAQPage** schema on the FAQ page for FAQ rich results.
- **Article** schema on blog posts (headline, author, datePublished, publisher).

---

## What to do outside the site

### 1. Google Business Profile (critical for local)
- Claim/verify **Google Business Profile** for “Franco & Sons Construction LLC” in Lincoln.
- Use the **exact** business name, address, and phone `(916) 316-2948` everywhere (NAP consistency).
- Add **primary category**: “General contractor” (and secondary e.g. “Kitchen remodeler”, “Bathroom remodeler” if allowed).
- Add **service areas**: Lincoln, Rocklin, Roseville, Loomis, Newcastle, Auburn, Folsom, El Dorado Hills.
- Add **services** (kitchen remodeling, bathroom remodeling, etc.) and a short business description.
- Upload **photos**: team, trucks, before/after, projects.
- Get **reviews** on Google (ask happy clients; link from site “Reviews” page or follow-up emails).
- Post **updates** (offers, project highlights, tips) regularly.

### 2. NAP consistency
- Use the **same** business name, address, phone, and (if any) email on:
  - Website (footer, contact, schema).
  - Google Business Profile.
  - Yelp, BBB, HomeAdvisor, Angi, etc.
  - Invoices, contracts, yard signs.
- Prefer **street address** in GBP and schema if you have one (not just “Lincoln, California”); update `siteData` and JsonLd if needed.

### 3. Other directories & citations
- List the business on **Yelp**, **BBB**, **HomeAdvisor**, **Angi**, and any local Chamber of Commerce or “Lincoln CA contractor” lists.
- Use the **exact** same NAP and link to the main site.

### 4. Sitemap after big content changes
- When you add new **services**, **locations**, **blog posts**, or **offer pages**, regenerate the sitemap so search engines can discover the new URLs:
  ```bash
  pnpm run generate:sitemap
  ```
  (Or `npm run generate:sitemap` if you use npm.) This reads from your app data and overwrites `public/sitemap.xml`.
- Submit sitemap in **Google Search Console** (and Bing Webmaster Tools):  
  `https://www.francoandsonsconstruction.com/sitemap.xml`

### 5. Search Console & Analytics
- **Google Search Console**: add property for `https://www.francoandsonsconstruction.com`, verify, submit sitemap, and fix any crawl/index issues.
- **Google Analytics 4**: install and use for traffic and conversions; optional link to Search Console for query data.
- **Bing Webmaster Tools**: add site and submit sitemap.

### 6. Optional: `lastmod` in sitemap
- For better crawl efficiency, add `<lastmod>YYYY-MM-DD</lastmod>` to sitemap URLs when you change key pages (e.g. after a content update). You can do this by hand or with a small build script.

### 7. Site URL in production
- Set **`VITE_SITE_URL`** in the production build to your live domain (e.g. `https://www.francoandsonsconstruction.com`) so canonicals, OG tags, and schema use the correct base URL.

---

## Quick wins

1. **Get 5–10 Google reviews** and keep the “Reviews” page and schema in sync (review count in schema can be updated as you add more testimonials to the site).
2. **Add real street address** to `COMPANY.address` and schema if you’re comfortable (helps GBP and local pack).
3. **Add `sameAs`** in JsonLd when you have official profiles (e.g. Facebook, Instagram, LinkedIn) — update `sameAs: []` in `src/app/components/shared/JsonLd.tsx` with full profile URLs.
4. **Create an `og-default.png`** image (e.g. 1200×630) in `public/` so link previews look good when the site is shared.

---

## Verifying structured data

- **Google Rich Results Test**: https://search.google.com/test/rich-results  
  Paste a URL (e.g. home, a service page, FAQ) to confirm Organization, LocalBusiness, FAQ, etc. are valid.
- **Schema Markup Validator**: https://validator.schema.org/  
  Paste the page URL or the JSON-LD block to double-check types and properties.

Once Google indexes the site and GBP is optimized, local queries like “kitchen remodel Lincoln CA” and “contractor Roseville” should improve over time.
