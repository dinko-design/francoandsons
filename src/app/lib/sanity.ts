import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const isSanityConfigured = Boolean(projectId);

// ── Types for Sanity documents ───────────────────────────────────────────

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  content: PortableTextBlock[];
}

export interface PortableTextBlock {
  _type: "block" | "image";
  _key: string;
  style?: string;
  children?: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks: string[];
  }>;
  markDefs?: Array<{ _type: string; _key: string; [key: string]: unknown }>;
  asset?: { _ref: string };
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
  featured: boolean;
}

// ── GROQ Queries ─────────────────────────────────────────────────────────

const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(date desc) {
  _id, title, slug, excerpt, category, author, date, readTime, featured, tags, content
}`;

const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, slug, excerpt, category, author, date, readTime, featured, tags, content
}`;

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt asc) {
  _id, name, location, service, quote, rating, featured
}`;

// ── Fetch helpers ────────────────────────────────────────────────────────

export async function fetchBlogPosts(): Promise<SanityBlogPost[]> {
  if (!isSanityConfigured) return [];
  return sanityClient.fetch<SanityBlogPost[]>(BLOG_POSTS_QUERY);
}

export async function fetchBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  if (!isSanityConfigured) return null;
  return sanityClient.fetch<SanityBlogPost | null>(BLOG_POST_BY_SLUG_QUERY, { slug });
}

export async function fetchTestimonials(): Promise<SanityTestimonial[]> {
  if (!isSanityConfigured) return [];
  return sanityClient.fetch<SanityTestimonial[]>(TESTIMONIALS_QUERY);
}

// ── Portable Text → string[] converter (for backward compatibility) ─────

export function portableTextToStrings(blocks: PortableTextBlock[]): string[] {
  if (!blocks) return [];
  return blocks
    .filter((b) => b._type === "block" && b.children)
    .map((block) => {
      return (block.children || [])
        .map((child) => {
          if (child.marks?.includes("strong")) return `**${child.text}**`;
          return child.text;
        })
        .join("");
    });
}
