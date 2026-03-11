/**
 * Fix image orientation by baking EXIF rotation into the pixel data.
 *
 * Usage:
 *   npx vite-node scripts/fix-orientation.ts                  # fix all flagged images
 *   npx vite-node scripts/fix-orientation.ts -- --dry-run     # preview without writing
 *   npx vite-node scripts/fix-orientation.ts -- --file=path   # fix a specific file (relative to src/assets/)
 *   npx vite-node scripts/fix-orientation.ts -- --rotate=90 --file=path  # manual rotation
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve(__dirname, "../src/assets");
const FLAGGED_PATH = path.resolve(__dirname, "../audit/flagged.json");

const dryRun = process.argv.includes("--dry-run");
const fileArg = process.argv.find((a) => a.startsWith("--file="))?.split("=")[1];
const rotateArg = process.argv.find((a) => a.startsWith("--rotate="))?.split("=")[1];

interface FlaggedImage {
  relativePath: string;
  orientation: number | undefined;
  flagReason: string;
}

async function fixImage(relativePath: string, manualRotate?: number) {
  const fullPath = path.join(ASSETS_DIR, relativePath);

  if (!fs.existsSync(fullPath)) {
    console.error(`  NOT FOUND: ${relativePath}`);
    return false;
  }

  const metadata = await sharp(fullPath).metadata();
  const ext = path.extname(relativePath).toLowerCase();
  const isJpeg = ext === ".jpg" || ext === ".jpeg" || metadata.format === "jpeg";
  const isPng = ext === ".png" || metadata.format === "png";

  console.log(`  Processing: ${relativePath}`);
  console.log(`    Original: ${metadata.width}x${metadata.height}, orientation=${metadata.orientation || "none"}, format=${metadata.format}`);

  if (dryRun) {
    console.log(`    DRY RUN — would fix orientation`);
    return true;
  }

  const tmpPath = fullPath + ".tmp";

  let pipeline = sharp(fullPath);

  if (manualRotate) {
    pipeline = pipeline.rotate(manualRotate);
  } else {
    // Auto-orient from EXIF — bakes the rotation into pixels
    pipeline = pipeline.rotate();
  }

  if (isJpeg) {
    pipeline = pipeline.jpeg({ quality: 90, mozjpeg: true });
  } else if (isPng) {
    // These "PNGs" are actually JPEGs with .png extension (4032x3024 photos).
    // Re-save as JPEG for better compression since they're photos, not graphics.
    pipeline = pipeline.jpeg({ quality: 90, mozjpeg: true });
  } else {
    pipeline = pipeline.webp({ quality: 85 });
  }

  await pipeline.toFile(tmpPath);

  // Verify the result
  const newMeta = await sharp(tmpPath).metadata();
  console.log(`    Fixed: ${newMeta.width}x${newMeta.height}, orientation=${newMeta.orientation || "none"}`);

  // Replace original
  fs.renameSync(tmpPath, fullPath);
  console.log(`    Saved: ${relativePath}`);
  return true;
}

async function main() {
  console.log("=== Fix Image Orientation ===");
  if (dryRun) console.log("Mode: DRY RUN\n");

  if (fileArg) {
    const angle = rotateArg ? parseInt(rotateArg, 10) : undefined;
    await fixImage(fileArg, angle);
    return;
  }

  if (!fs.existsSync(FLAGGED_PATH)) {
    console.error("No audit/flagged.json found. Run audit-images.ts first.");
    process.exit(1);
  }

  const flagged: FlaggedImage[] = JSON.parse(fs.readFileSync(FLAGGED_PATH, "utf-8"));

  if (flagged.length === 0) {
    console.log("No flagged images to fix.");
    return;
  }

  console.log(`Found ${flagged.length} flagged images\n`);

  let fixed = 0;
  for (const img of flagged) {
    const success = await fixImage(img.relativePath);
    if (success) fixed++;
  }

  console.log(`\n=== Done ===`);
  console.log(`  Fixed: ${fixed}/${flagged.length}`);
}

main().catch(console.error);
