/**
 * Generates public/sitemap.xml from app data (SERVICES, LOCATIONS, BLOG_POSTS, LEAD_MAGNETS).
 * Run: pnpm run generate:sitemap (or npx vite-node scripts/generate-sitemap.ts)
 *
 * Uses Vite's resolver so path aliases and asset imports in data files work.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SERVICES } from "../src/app/data/siteData";
import { LOCATIONS } from "../src/app/data/siteData";
import { BLOG_POSTS } from "../src/app/data/blogData";
import { LEAD_MAGNETS } from "../src/app/data/promotionsData";
import { SITE_URL } from "../src/app/data/metaData";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const baseUrl = SITE_URL.replace(/\/$/, "");

const staticRoutes: { loc: string; changefreq: string; priority: string }[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/about", changefreq: "monthly", priority: "0.9" },
  { loc: "/contact", changefreq: "monthly", priority: "0.9" },
  { loc: "/portfolio", changefreq: "weekly", priority: "0.9" },
  { loc: "/process", changefreq: "monthly", priority: "0.8" },
  { loc: "/reviews", changefreq: "weekly", priority: "0.8" },
  { loc: "/faq", changefreq: "monthly", priority: "0.8" },
  { loc: "/get-started", changefreq: "monthly", priority: "0.9" },
  { loc: "/why-us", changefreq: "monthly", priority: "0.8" },
  { loc: "/packages", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog", changefreq: "weekly", priority: "0.8" },
];

function urlEntry(loc: string, changefreq: string, priority: string): string {
  return `  <url><loc>${baseUrl}${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

const urls: string[] = [];

staticRoutes.forEach((e) => urls.push(urlEntry(e.loc, e.changefreq, e.priority)));

SERVICES.forEach((s) => {
  const p = s.tier === "primary" ? "0.9" : "0.8";
  urls.push(urlEntry(`/services/${s.slug}`, "monthly", p));
});

LOCATIONS.forEach((loc) => {
  const priority = loc.isPrimary ? "0.9" : "0.8";
  urls.push(urlEntry(`/locations/${loc.slug}`, "monthly", priority));
});

BLOG_POSTS.forEach((post) => {
  urls.push(urlEntry(`/blog/${post.slug}`, "monthly", "0.7"));
});

LEAD_MAGNETS.forEach((lm) => {
  urls.push(urlEntry(`/free/${lm.slug}`, "monthly", "0.6"));
});

urls.push(urlEntry("/offers/commercial-remodeling", "monthly", "0.8"));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const outPath = path.join(root, "public", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf-8");
console.log(`Wrote ${urls.length} URLs to ${outPath}`);
