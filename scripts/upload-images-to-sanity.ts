/**
 * Upload project images to Sanity CMS and create/update project + galleryImage documents.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=xxx npx vite-node scripts/upload-images-to-sanity.ts
 *   SANITY_WRITE_TOKEN=xxx npx vite-node scripts/upload-images-to-sanity.ts -- --dry-run
 *   SANITY_WRITE_TOKEN=xxx npx vite-node scripts/upload-images-to-sanity.ts -- --project=roseville-kitchen
 */

import fs from "fs";
import path from "path";
import { createClient, type SanityClient } from "@sanity/client";

const projectId = "7com7vhk";
const dataset = "production";
const token = process.env.SANITY_WRITE_TOKEN;
const dryRun = process.argv.includes("--dry-run");
const projectFilter = process.argv.find((a) => a.startsWith("--project="))?.split("=")[1];

if (!token && !dryRun) {
  console.error("SANITY_WRITE_TOKEN required. Use --dry-run to preview.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token: token || "", apiVersion: "2024-01-01", useCdn: false });

const GALLERY_DIR = path.resolve(__dirname, "../src/assets/gallery");
const PROJECTS_DIR = path.resolve(__dirname, "../src/assets/projects");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

interface ProjectMapping {
  folder: string;
  title: string;
  service: string;
  location: string;
  category: "Kitchen" | "Bathroom" | "Commercial" | "ADA";
}

const PROJECT_MAP: ProjectMapping[] = [
  { folder: "318-james-drive-kitchen", title: "318 James Drive Kitchen Remodel", service: "Kitchen Remodeling", location: "Lincoln, CA", category: "Kitchen" },
  { folder: "crazy-wood-kitchen", title: "Crazy Wood Kitchen Transformation", service: "Kitchen Remodeling", location: "Lincoln, CA", category: "Kitchen" },
  { folder: "newcastle-kitchen", title: "Newcastle Kitchen Remodel", service: "Kitchen Remodeling", location: "Newcastle, CA", category: "Kitchen" },
  { folder: "roseville-kitchen", title: "Roseville Kitchen Remodel", service: "Kitchen Remodeling", location: "Roseville, CA", category: "Kitchen" },
  { folder: "roseville-bathroom", title: "Roseville Bathroom Remodel", service: "Bathroom Remodeling", location: "Roseville, CA", category: "Bathroom" },
  { folder: "roseville-bathroom-2", title: "Roseville Bathroom Remodel #2", service: "Bathroom Remodeling", location: "Roseville, CA", category: "Bathroom" },
  { folder: "bathroom-remodel-3", title: "Custom Bathroom Remodel", service: "Bathroom Remodeling", location: "Placer County, CA", category: "Bathroom" },
  { folder: "joanne-ada-bathroom", title: "Joanne's ADA Accessible Bathroom", service: "ADA / Accessible Bathroom Remodeling", location: "Lincoln, CA", category: "ADA" },
];

function getImageFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
    .sort();
}

async function uploadAsset(client: SanityClient, filePath: string, filename: string): Promise<string> {
  const existing = await client.fetch(
    `*[_type == "sanity.imageAsset" && originalFilename == $filename][0]._id`,
    { filename },
  );
  if (existing) {
    console.log(`    Asset exists: ${filename} → ${existing}`);
    return existing;
  }

  if (dryRun) {
    console.log(`    DRY RUN: would upload ${filename}`);
    return "dry-run-asset-id";
  }

  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload("image", stream, { filename });
  console.log(`    Uploaded: ${filename} → ${asset._id}`);
  return asset._id;
}

async function processProject(mapping: ProjectMapping) {
  console.log(`\n--- ${mapping.title} ---`);

  const projectDir = path.join(PROJECTS_DIR, mapping.folder);
  const galleryDir = (() => {
    const cat = mapping.category === "ADA" ? "bathroom" : mapping.category.toLowerCase();
    const subDir = mapping.folder.replace(/-kitchen|-bathroom/, "");
    const candidate = path.join(GALLERY_DIR, cat, subDir);
    if (fs.existsSync(candidate)) return candidate;
    const candidate2 = path.join(GALLERY_DIR, cat, mapping.folder.replace(/-kitchen|-bathroom/, ""));
    return fs.existsSync(candidate2) ? candidate2 : null;
  })();

  const projectImages = getImageFiles(projectDir);
  const galleryImages = galleryDir ? getImageFiles(galleryDir) : [];
  const allImages = [...new Set([
    ...projectImages.map((f) => ({ file: f, dir: projectDir })),
    ...galleryImages.map((f) => ({ file: f, dir: galleryDir! })),
  ])];

  console.log(`  Project dir: ${projectImages.length} images`);
  console.log(`  Gallery dir: ${galleryImages.length} images`);

  const assetRefs: Array<{ _type: "image"; _key: string; asset: { _type: "reference"; _ref: string }; caption?: string }> = [];

  for (let i = 0; i < allImages.length; i++) {
    const { file, dir } = allImages[i];
    const filePath = path.join(dir, file);
    const assetId = await uploadAsset(client, filePath, file);
    assetRefs.push({
      _type: "image",
      _key: `img-${i}`,
      asset: { _type: "reference", _ref: assetId },
      caption: `${mapping.title} — Photo ${i + 1}`,
    });
  }

  // Check if project document exists
  const existingProject = await client.fetch(
    `*[_type == "project" && title == $title][0]._id`,
    { title: mapping.title },
  );

  const projectDoc = {
    _type: "project" as const,
    title: mapping.title,
    slug: { _type: "slug" as const, current: mapping.folder },
    service: mapping.service,
    location: mapping.location,
    description: `${mapping.service} project in ${mapping.location} by Franco and Sons Construction LLC.`,
    images: assetRefs,
    beforeImage: assetRefs[0] ? { _type: "image" as const, asset: assetRefs[0].asset } : undefined,
    afterImage: assetRefs.length > 1 ? { _type: "image" as const, asset: assetRefs[assetRefs.length - 1].asset } : undefined,
    featured: true,
  };

  if (dryRun) {
    console.log(`  DRY RUN: would ${existingProject ? "update" : "create"} project "${mapping.title}" with ${assetRefs.length} images`);
    return;
  }

  if (existingProject) {
    await client.patch(existingProject).set({
      images: projectDoc.images,
      beforeImage: projectDoc.beforeImage,
      afterImage: projectDoc.afterImage,
    }).commit();
    console.log(`  Updated project: ${existingProject}`);
  } else {
    const created = await client.create(projectDoc);
    console.log(`  Created project: ${created._id}`);
  }
}

async function processMiscGallery() {
  console.log("\n--- Miscellaneous Gallery Images ---");

  const bathroomMisc = getImageFiles(path.join(GALLERY_DIR, "bathroom")).filter((f) => f.startsWith("bathroom-misc") || f.startsWith("bathroom-tub"));
  console.log(`  Found ${bathroomMisc.length} misc bathroom images`);

  for (const file of bathroomMisc) {
    const filePath = path.join(GALLERY_DIR, "bathroom", file);
    const assetId = await uploadAsset(client, filePath, file);

    const existing = await client.fetch(
      `*[_type == "galleryImage" && title == $title][0]._id`,
      { title: file.replace(/\.[^.]+$/, "") },
    );

    if (existing) {
      console.log(`  Gallery image exists: ${file}`);
      continue;
    }

    if (dryRun) {
      console.log(`  DRY RUN: would create galleryImage for ${file}`);
      continue;
    }

    await client.create({
      _type: "galleryImage",
      title: file.replace(/\.[^.]+$/, "").replace(/-/g, " "),
      image: { _type: "image", asset: { _type: "reference", _ref: assetId } },
      category: "Bathroom",
      location: "Placer County, CA",
      alt: `Bathroom remodeling project by Franco and Sons Construction LLC`,
      featured: false,
    });
    console.log(`  Created gallery image: ${file}`);
  }
}

async function main() {
  console.log("=== Upload Images to Sanity ===");
  if (dryRun) console.log("Mode: DRY RUN\n");

  const projects = projectFilter
    ? PROJECT_MAP.filter((p) => p.folder === projectFilter)
    : PROJECT_MAP;

  if (projects.length === 0) {
    console.error(`No project found matching "${projectFilter}"`);
    process.exit(1);
  }

  for (const project of projects) {
    await processProject(project);
  }

  if (!projectFilter) {
    await processMiscGallery();
  }

  console.log("\n=== Done ===");
}

main().catch(console.error);
