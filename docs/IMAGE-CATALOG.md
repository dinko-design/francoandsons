# Franco & Sons Construction — Image Catalog

Inventory and structure for the **Images - Resized** folder (Dropbox) and how it maps to the website.

---

## 1. Dropbox folder location

```
/Users/dinkoibukic/Library/CloudStorage/Dropbox-DinkoDesign/Dinko Design Team Folder/
  Franco and Sons Construction/
    Images - Resized/
```

---

## 2. Project subfolders (by project)

| Folder | Image count | Sample files |
|--------|-------------|--------------|
| **318 James drive kitchen- house remodel** | 7 | IMG_3111, IMG_3112, IMG_3114, IMG_3117, IMG_3533, IMG_3534, IMG_3535 |
| **Bathroom Remodel 3** | 7 | IMG_6467, IMG_6469, IMG_6472, IMG_6475, IMG_6711, IMG_6716, IMG_6720 |
| **Crazy wood Kitchen Transformation** | 10 | IMG_6718–6723, IMG_7536, IMG_7539, IMG_7540, IMG_7542, IMG_7544 |
| **Joanne ADA bathroom** | 5 | IMG_4453, IMG_4457, IMG_4616, IMG_4617, IMG_4620 |
| **Newcastle Kitchen Remodel** | 13 | IMG_2090, IMG_2091, IMG_2092, IMG_2350, IMG_2952, IMG_2954, IMG_2955, IMG_3017, IMG_3019, IMG_3050, IMG_3052, IMG_3057, IMG_3067 |
| **Roseville Bathroom** | 5 | IMG_7638, IMG_7640, IMG_7905, IMG_7909, IMG_7917 |
| **Roseville Bathroom 2** | 7 | IMG_8087, IMG_8092, IMG_8093, IMG_8570, IMG_8572, IMG_8714, IMG_8717 |
| **Roseville Kitchen Remodel** | 5 | IMG_3781, IMG_3783, IMG_3789, IMG_3790, IMG_3791 |

**Total in subfolders:** 59 images across 8 projects.

---

## 3. Root-level images (Images - Resized)

- **UUID-named JPGs:** 12 files (e.g. `2AA01379-88EB-4715-9A85-364359C1CD53.jpg`, …).
- **IMG_*.jpg:** ~110+ files (e.g. IMG_0034, IMG_0040, …, IMG_9971).  
  Some of these may overlap with files inside project folders (same filenames in different contexts).

**Recommendation:** Treat root as a mixed pool. When adding to the site, prefer images from the project subfolders for portfolio/B&A so each project stays identifiable.

---

## 4. Suggested folder structure (optional, in repo or Dropbox)

**Implemented in repo** — organized root-level images are now in:

```
src/assets/
  before-after/
    kitchen/     # 3 composites: kitchen-before-after-*.jpg
    bathroom/    # 8 composites: bathroom-before-after-*.jpg
  gallery/
    kitchen/
      318-james-drive/   # 25 images (318-james-kitchen-01..25)
      newcastle/         # 13 images (newcastle-kitchen-01..13)
      roseville/         # 5 images (roseville-kitchen-01..05)
      crazy-wood/        # 15 images (crazy-wood-kitchen-01..15)
    bathroom/
      joanne-ada/        # 5 images (joanne-ada-bathroom-01..05)
      bathroom-remodel-3/# 6 images (bathroom-remodel-3-01..06)
      roseville/         # 8 images (roseville-bathroom-01..08)
      roseville-2/       # 32 images (roseville-bathroom-2-01..32)
      bathroom-misc-*.jpg, bathroom-tub-shower-window.jpg
  projects/              # 59 images from project subfolders (unchanged)
    318-james-drive-kitchen/, bathroom-remodel-3/, crazy-wood-kitchen/, ...
  imported-root/         # staging (can be removed after verification)
```

Use **kebab-case** folder names in the repo to avoid spaces and special characters.

---

## 5. Mapping Dropbox projects → website

### Portfolio (`src/app/pages/Portfolio.tsx` + `siteData.ts`)

Portfolio entries use `IMAGES.*` and optional `galleryImages`. You can add or replace with images from Dropbox:

| Site project / concept | Dropbox source | Suggested files |
|------------------------|----------------|-----------------|
| Kitchen (e.g. Steven's Kitchen, Open-Concept) | Roseville Kitchen Remodel, Newcastle Kitchen Remodel, 318 James drive kitchen, Crazy wood Kitchen | Pick 1–2 hero images per project; use rest in gallery |
| Bathroom (Custom Walk-In Shower, Double Vanity) | Roseville Bathroom, Roseville Bathroom 2, Bathroom Remodel 3 | Same: hero + gallery |
| Joanne's ADA Bathroom | Joanne ADA bathroom | All 5 as gallery |

### Before & After (`BeforeAfterShowcase`, `BEFORE_AFTER_PROJECTS`)

Currently uses composite/placeholder images. To use real B&A:

1. Build before/after composites (side-by-side or slider) from Dropbox project folders, or  
2. Use single “after” shots and point `beforeAfterBath1/2/3`, `beforeAfterKitchen1` in `siteData.ts` to new imports.

Suggested mapping:

- **beforeAfterBath1/2/3** ← Roseville Bathroom, Roseville Bathroom 2, Bathroom Remodel 3 (pick best “after” or composite per project).
- **beforeAfterKitchen1** ← 318 James drive kitchen, Newcastle Kitchen Remodel, or Crazy wood Kitchen (pick one project’s best after).

### Home page hero & featured projects

- **Hero:** `IMAGES.kitchenOpenConcept` — consider replacing with a strong shot from Newcastle Kitchen Remodel or Roseville Kitchen Remodel.
- **Featured project grid:** The six items (e.g. Kitchen Remodel - Roseville, Open-Concept Kitchen, Custom Walk-In Shower, …) can pull from the same project folders as above; pick the single best image per project for the grid.

### Services & team

- **Services** use `siteData` `IMAGES.*` (e.g. `ada`, `bathroom`, `kitchen`). You can replace those with chosen shots from **Joanne ADA bathroom**, **Roseville Bathroom**, and kitchen folders.
- **Team / branded trucks:** When you have final team and fleet photos, add them to `src/assets` (e.g. `team/`, `hero/`) and wire `IMAGES.brandedTrucks`, `IMAGES.carlosCristianKitchen`, etc. in `siteData.ts`.

---

## 6. How to add a new image to the site

1. **Copy** the file from Dropbox into `src/assets` (e.g. `src/assets/projects/roseville-kitchen/IMG_3781.jpg`).
2. **Import** in `src/app/data/siteData.ts`:
   ```ts
   import rosevilleKitchenHero from '@/assets/projects/roseville-kitchen/IMG_3781.jpg';
   ```
3. **Use** in `IMAGES` or in a specific service/portfolio/B&A entry:
   ```ts
   kitchenOpenConcept: rosevilleKitchenHero,
   ```
4. **Optimize:** Keep using resized assets (your “Images - Resized” folder). For very large files, consider converting to WebP or further resizing for hero/cards to keep bundle size down.

---

## 7. Quick reference — site image keys

| Key | Used for |
|-----|----------|
| `kitchen`, `kitchenOpenConcept`, `kitchenCabinets`, `kitchenCooktop`, `kitchenIslandClose` | Home hero, services, portfolio, featured grid |
| `bathroom`, `bathroomVanity`, `ada`, `customShower` | Bathroom/ADA services, portfolio |
| `brandedTrucks`, `carlosCristianKitchen`, `carlosInKitchen`, `cristianBlueprints`, etc. | About, team, fleet |
| `beforeAfterBath1/2/3`, `beforeAfterKitchen1` | Before & After showcase |
| `lincoln`, `folsom`, `elDoradoHills`, `newcastle` | Location pages |
| `homeAddition`, `tile`, `interiorRemodel`, `electricalPlumbing`, `painting`, `exteriorImprovements` | Service cards and pages |

---

*Last updated from inventory of **Images - Resized** (Dropbox) and `src/app/data/siteData.ts`.*
