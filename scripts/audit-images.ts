/**
 * Audit all images in src/assets/ for orientation issues and generate a visual
 * contact sheet for manual review.
 *
 * Usage:
 *   npx vite-node scripts/audit-images.ts
 *
 * Outputs:
 *   audit/index.html   — thumbnail contact sheet for visual review
 *   audit/flagged.json — auto-detected orientation candidates
 *   audit/manifest.json — full metadata for every image
 *   audit/thumbs/       — 200px thumbnails
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve(__dirname, "../src/assets");
const AUDIT_DIR = path.resolve(__dirname, "../audit");
const THUMBS_DIR = path.join(AUDIT_DIR, "thumbs");

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

interface ImageInfo {
  relativePath: string;
  width: number;
  height: number;
  orientation: number | undefined;
  format: string | undefined;
  sizeKB: number;
  flagged: boolean;
  flagReason: string;
  thumbFile: string;
}

async function findImages(dir: string, base: string): Promise<string[]> {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findImages(fullPath, base)));
    } else if (IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
      results.push(path.relative(base, fullPath));
    }
  }
  return results;
}

async function auditImage(relativePath: string): Promise<ImageInfo> {
  const fullPath = path.join(ASSETS_DIR, relativePath);
  const stat = fs.statSync(fullPath);
  const sizeKB = Math.round(stat.size / 1024);

  const image = sharp(fullPath);
  const metadata = await image.metadata();

  const width = metadata.width || 0;
  const height = metadata.height || 0;
  const orientation = metadata.orientation;
  const format = metadata.format;

  let flagged = false;
  let flagReason = "";

  // Flag 1: EXIF orientation is not 1 (normal) — image needs auto-orient
  if (orientation && orientation !== 1) {
    flagged = true;
    flagReason = `EXIF orientation=${orientation} (not normal)`;
  }

  // Flag 2: Very tall aspect ratio from a phone camera (may be sideways landscape)
  // Phone photos are typically 4:3 or 16:9. If stored as landscape but looks
  // portrait-ish with a very narrow ratio, it might be rotated.
  // We flag images where height > width * 1.8 AND width > 400 (not icons)
  if (!flagged && height > width * 1.8 && width > 400) {
    flagged = true;
    flagReason = `Unusually tall (${width}x${height}) — may be rotated`;
  }

  // Generate thumbnail
  const safeThumbName = relativePath.replace(/[/\\]/g, "__");
  const thumbFile = safeThumbName.replace(/\.(jpe?g|png|webp)$/i, ".webp");
  const thumbPath = path.join(THUMBS_DIR, thumbFile);

  await sharp(fullPath)
    .rotate() // auto-orient from EXIF if present
    .resize(200, 200, { fit: "cover" })
    .webp({ quality: 70 })
    .toFile(thumbPath);

  return {
    relativePath,
    width,
    height,
    orientation,
    format,
    sizeKB,
    flagged,
    flagReason,
    thumbFile,
  };
}

function generateHTML(images: ImageInfo[]): string {
  const flaggedImages = images.filter((i) => i.flagged);
  const byDirectory: Record<string, ImageInfo[]> = {};

  for (const img of images) {
    const dir = path.dirname(img.relativePath) || ".";
    if (!byDirectory[dir]) byDirectory[dir] = [];
    byDirectory[dir].push(img);
  }

  const dirSections = Object.entries(byDirectory)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([dir, imgs]) => `
      <h2 id="${dir.replace(/[/\\]/g, "-")}">${dir} (${imgs.length})</h2>
      <div class="grid">
        ${imgs
          .map(
            (img) => `
          <div class="card ${img.flagged ? "flagged" : ""}">
            <img src="thumbs/${img.thumbFile}" alt="${img.relativePath}" loading="lazy">
            <div class="info">
              <div class="name" title="${img.relativePath}">${path.basename(img.relativePath)}</div>
              <div class="dims">${img.width}x${img.height} &middot; ${img.sizeKB}KB</div>
              ${img.orientation ? `<div class="exif">EXIF orient: ${img.orientation}</div>` : ""}
              ${img.flagged ? `<div class="flag">${img.flagReason}</div>` : ""}
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Image Audit — Franco and Sons Construction LLC</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #111; color: #eee; padding: 24px; }
    h1 { margin-bottom: 8px; }
    .summary { color: #aaa; margin-bottom: 24px; font-size: 14px; }
    .summary .warn { color: #f59e0b; font-weight: 600; }
    h2 { margin: 32px 0 12px; padding: 8px 0; border-bottom: 1px solid #333; font-size: 16px; color: #8BC34A; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
    .card { background: #1a1a1a; border-radius: 8px; overflow: hidden; border: 2px solid transparent; }
    .card.flagged { border-color: #f59e0b; }
    .card img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; }
    .info { padding: 8px; }
    .name { font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #ccc; }
    .dims { font-size: 10px; color: #666; margin-top: 2px; }
    .exif { font-size: 10px; color: #f59e0b; margin-top: 2px; }
    .flag { font-size: 10px; color: #ef4444; margin-top: 2px; font-weight: 600; }
    nav { margin-bottom: 24px; display: flex; flex-wrap: wrap; gap: 8px; }
    nav a { color: #8BC34A; font-size: 12px; text-decoration: none; padding: 4px 8px; background: #222; border-radius: 4px; }
    nav a:hover { background: #333; }
    .filter-bar { margin-bottom: 16px; }
    .filter-bar button { background: #222; border: 1px solid #444; color: #eee; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 13px; margin-right: 8px; }
    .filter-bar button.active { background: #f59e0b; color: #111; border-color: #f59e0b; }
  </style>
</head>
<body>
  <h1>Image Audit</h1>
  <div class="summary">
    ${images.length} total images &middot;
    <span class="warn">${flaggedImages.length} flagged</span> for review
  </div>
  <div class="filter-bar">
    <button onclick="showAll()" class="active" id="btn-all">Show All (${images.length})</button>
    <button onclick="showFlagged()" id="btn-flagged">Flagged Only (${flaggedImages.length})</button>
  </div>
  <nav>
    ${Object.keys(byDirectory)
      .sort()
      .map((dir) => `<a href="#${dir.replace(/[/\\]/g, "-")}">${dir}</a>`)
      .join("")}
  </nav>
  ${dirSections}
  <script>
    function showAll() {
      document.querySelectorAll('.card').forEach(c => c.style.display = '');
      document.getElementById('btn-all').classList.add('active');
      document.getElementById('btn-flagged').classList.remove('active');
    }
    function showFlagged() {
      document.querySelectorAll('.card').forEach(c => {
        c.style.display = c.classList.contains('flagged') ? '' : 'none';
      });
      document.getElementById('btn-flagged').classList.add('active');
      document.getElementById('btn-all').classList.remove('active');
    }
  </script>
</body>
</html>`;
}

async function main() {
  console.log("=== Image Audit ===");
  console.log(`Scanning: ${ASSETS_DIR}\n`);

  fs.mkdirSync(THUMBS_DIR, { recursive: true });

  const files = await findImages(ASSETS_DIR, ASSETS_DIR);
  console.log(`Found ${files.length} images\n`);

  const results: ImageInfo[] = [];
  let flagCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    try {
      const info = await auditImage(file);
      results.push(info);
      if (info.flagged) {
        flagCount++;
        console.log(`  FLAGGED: ${file} — ${info.flagReason}`);
      }
      if ((i + 1) % 50 === 0) {
        console.log(`  ... processed ${i + 1}/${files.length}`);
      }
    } catch (err) {
      console.error(`  ERROR: ${file} — ${err}`);
    }
  }

  // Write manifest
  fs.writeFileSync(
    path.join(AUDIT_DIR, "manifest.json"),
    JSON.stringify(results, null, 2),
  );

  // Write flagged list
  const flagged = results.filter((r) => r.flagged);
  fs.writeFileSync(
    path.join(AUDIT_DIR, "flagged.json"),
    JSON.stringify(flagged, null, 2),
  );

  // Write HTML contact sheet
  const html = generateHTML(results);
  fs.writeFileSync(path.join(AUDIT_DIR, "index.html"), html);

  console.log(`\n=== Summary ===`);
  console.log(`  Total images: ${results.length}`);
  console.log(`  Flagged: ${flagCount}`);
  console.log(`  Output: audit/index.html`);
  console.log(`  Manifest: audit/manifest.json`);
  console.log(`  Flagged list: audit/flagged.json`);
}

main().catch(console.error);
