# Franco and Sons Construction LLC — Image Catalog

## Image Management

Images are managed through **two systems** that work together:

1. **Sanity CMS** (primary) — Project images, gallery images, blog post images, and testimonial photos are uploaded to Sanity's CDN and managed via Sanity Studio at `https://francoandsons.sanity.studio`
2. **Static assets** (fallback) — `src/assets/` contains the original image files. These serve as fallbacks when Sanity images aren't available.

---

## Sanity CMS Image Workflow

### Adding new images

1. Open Sanity Studio → select the document type (Project, Blog Post, etc.)
2. Drag and drop images into the image field
3. Set hotspot/crop if needed
4. Fill in the `alt` text field for SEO
5. Publish the document

### Image document types in Sanity

| Document Type | Image Fields | Usage |
|--------------|-------------|-------|
| **project** | `images[]`, `beforeImage`, `afterImage` | Portfolio, before/after showcase |
| **blogPost** | `image` (featured) | Blog cards, blog post hero |
| **testimonial** | `image` | Review cards |
| **service** | `image`, `galleryImages[]` | Service page hero and gallery |
| **serviceArea** | `image` | Location page hero |
| **galleryImage** | `image` | Standalone gallery items with category, caption, alt |

### Sanity CDN features

Sanity serves images via a global CDN with on-the-fly transformations:
- **Auto-format**: Serves WebP/AVIF based on browser support
- **Responsive sizing**: Request any width (e.g. `?w=800`)
- **Hotspot/crop**: Set focal points in Studio, preserved at any size
- **Quality control**: Configurable quality parameter

---

## Static Image Fallback

### Directory structure

```
src/assets/
  before-after/
    kitchen/     — 3 composite before/after images
    bathroom/    — 8 composite before/after images
  gallery/
    kitchen/
      318-james-drive/   — 25 images
      newcastle/         — 13 images
      roseville/         — 5 images
      crazy-wood/        — 15 images
    bathroom/
      joanne-ada/        — 5 images
      bathroom-remodel-3/ — 6 images
      roseville/         — 8 images
      roseville-2/       — 32 images
      bathroom-misc-*.jpg — 21 misc images
  projects/              — 59 images from original project folders
```

### How static images are used

All static images are imported in `src/app/data/siteData.ts` and exposed via the `IMAGES` object. Components reference `IMAGES.kitchen`, `IMAGES.bathroom`, etc.

When Sanity is configured (`VITE_SANITY_PROJECT_ID` is set) and has images, the frontend prefers Sanity CDN URLs. When Sanity images aren't available, components fall back to static `IMAGES.*` values.

---

## SanityImage Component

For pages that display Sanity images, use the `SanityImage` component:

```tsx
import { SanityImage } from "../components/shared/SanityImage";

<SanityImage
  image={post.image}       // Sanity image ref (from GROQ query)
  staticSrc={IMAGES.kitchen} // Fallback if Sanity image missing
  alt="Kitchen remodel in Roseville, CA"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority                  // Set for LCP/above-fold images
/>
```

This auto-generates responsive `srcSet` at 400/800/1200/1600px widths using Sanity CDN.

---

## Image Audit & Orientation Fix

### Scripts

- `scripts/audit-images.ts` — Scans all images, flags EXIF orientation issues, generates `audit/index.html` contact sheet
- `scripts/fix-orientation.ts` — Fixes flagged images by baking EXIF rotation into pixels
- `scripts/upload-images-to-sanity.ts` — Uploads project/gallery images to Sanity CDN

### Running the audit

```bash
npx vite-node scripts/audit-images.ts
open audit/index.html  # Visual review of all 368 thumbnails
```

### Fixing sideways images

```bash
# Fix all flagged images from the audit
npx vite-node scripts/fix-orientation.ts

# Fix a specific image with manual rotation
npx vite-node scripts/fix-orientation.ts -- --file=gallery/kitchen/photo.jpg --rotate=90
```

---

## SEO Optimization

### Alt text

All images should have descriptive alt text that includes:
- What the image shows
- Location when relevant
- Service context

For Sanity-managed images, set the `alt` field in Studio. The `SanityImage` component uses `image.alt` when present, falling back to the `alt` prop.

### Image sitemap

The build script (`scripts/generate-sitemap.ts`) includes `<image:image>` tags for service and blog post images, helping search engines discover and index images.

---

## Quick Reference — IMAGES Keys

| Key | Used For |
|-----|----------|
| `kitchen`, `kitchenOpenConcept`, `kitchenCabinets`, `kitchenCooktop`, `kitchenIslandClose` | Home hero, services, portfolio, featured grid |
| `bathroom`, `bathroomVanity`, `ada`, `customShower` | Bathroom/ADA services, portfolio |
| `brandedTrucks`, `carlosCristianKitchen`, `carlosInKitchen`, `cristianBlueprints` | About, team, fleet |
| `beforeAfterBath1/2/3`, `beforeAfterKitchen1` | Before & After showcase |
| `lincoln`, `folsom`, `elDoradoHills`, `newcastle` | Location pages |
| `homeAddition`, `tile`, `interiorRemodel`, `electricalPlumbing`, `painting`, `exteriorImprovements` | Service cards and pages |
