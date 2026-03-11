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
  { loc: "/services", changefreq: "weekly", priority: "0.9" },
];

interface UrlEntry {
  loc: string;
  changefreq: string;
  priority: string;
  images?: { loc: string; title?: string }[];
}

function urlEntryXml(entry: UrlEntry): string {
  const imageXml = (entry.images || [])
    .map((img) => {
      const titleTag = img.title ? `<image:title>${escapeXml(img.title)}</image:title>` : "";
      return `    <image:image><image:loc>${escapeXml(img.loc)}</image:loc>${titleTag}</image:image>`;
    })
    .join("\n");

  return [
    `  <url>`,
    `    <loc>${baseUrl}${entry.loc}</loc>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    imageXml,
    `  </url>`,
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const urls: UrlEntry[] = [];

staticRoutes.forEach((e) => urls.push({ ...e, loc: e.loc }));

SERVICES.forEach((s) => {
  const p = s.tier === "primary" ? "0.9" : "0.8";
  const images: UrlEntry["images"] = [];
  if (s.image && typeof s.image === "string") {
    images.push({ loc: `${baseUrl}${s.image}`, title: `${s.title} — Franco and Sons Construction LLC` });
  }
  urls.push({ loc: `/services/${s.slug}`, changefreq: "monthly", priority: p, images });
  if (s.subPages) {
    s.subPages.forEach((sp) => {
      urls.push({ loc: `/services/${s.slug}/${sp.slug}`, changefreq: "monthly", priority: "0.7" });
    });
  }
});

LOCATIONS.forEach((loc) => {
  const priority = loc.isPrimary ? "0.9" : "0.8";
  urls.push({ loc: `/locations/${loc.slug}`, changefreq: "monthly", priority });
});

BLOG_POSTS.forEach((post) => {
  const images: UrlEntry["images"] = [];
  if (post.image && typeof post.image === "string") {
    images.push({ loc: `${baseUrl}${post.image}`, title: post.title });
  }
  urls.push({ loc: `/blog/${post.slug}`, changefreq: "monthly", priority: "0.7", images });
});

LEAD_MAGNETS.forEach((lm) => {
  urls.push({ loc: `/free/${lm.slug}`, changefreq: "monthly", priority: "0.6" });
});

urls.push({ loc: "/offers/commercial-remodeling", changefreq: "monthly", priority: "0.8" });

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(urlEntryXml).join("\n")}
</urlset>
`;

const outPath = path.join(root, "public", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf-8");
console.log(`Wrote ${urls.length} URLs to ${outPath}`);
