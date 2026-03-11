import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const isSanityConfigured = Boolean(projectId);

// ── Image URL builder ────────────────────────────────────────────────────

const builder = imageUrlBuilder(sanityClient);

export function sanityImageUrl(source: SanityImageSource) {
  return builder.image(source);
}

export type { SanityImageSource };

// ── Types for Sanity documents ───────────────────────────────────────────

export interface SanityImageRef {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  caption?: string;
  alt?: string;
}

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
  image?: SanityImageRef;
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
  image?: SanityImageRef;
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  service: string;
  location: string;
  description: string;
  images: SanityImageRef[];
  beforeImage?: SanityImageRef;
  afterImage?: SanityImageRef;
  featured: boolean;
  completedDate?: string;
}

export interface SanityService {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: SanityImageRef;
  galleryImages?: SanityImageRef[];
}

export interface SanityServiceArea {
  _id: string;
  name: string;
  slug: { current: string };
  description: string;
  image?: SanityImageRef;
}

export interface SanityGalleryImage {
  _id: string;
  title: string;
  image: SanityImageRef;
  caption?: string;
  category: string;
  location?: string;
  featured: boolean;
  order?: number;
}

// ── GROQ Queries ─────────────────────────────────────────────────────────

const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(date desc) {
  _id, title, slug, excerpt, category, author, date, readTime, featured, tags, image, content
}`;

const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, slug, excerpt, category, author, date, readTime, featured, tags, image, content
}`;

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt asc) {
  _id, name, location, service, quote, rating, featured, image
}`;

const PROJECTS_QUERY = `*[_type == "project"] | order(completedDate desc) {
  _id, title, slug, service, location, description,
  images[] { ..., asset-> },
  beforeImage { ..., asset-> },
  afterImage { ..., asset-> },
  featured, completedDate
}`;

const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(completedDate desc) {
  _id, title, slug, service, location,
  images[0] { ..., asset-> },
  featured
}`;

const SERVICES_QUERY = `*[_type == "service"] | order(title asc) {
  _id, title, slug, description, image, galleryImages
}`;

const SERVICE_AREAS_QUERY = `*[_type == "serviceArea"] | order(name asc) {
  _id, name, slug, description, image
}`;

const GALLERY_IMAGES_QUERY = `*[_type == "galleryImage"] | order(order asc) {
  _id, title, image, caption, category, location, featured, order
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

export async function fetchProjects(): Promise<SanityProject[]> {
  if (!isSanityConfigured) return [];
  return sanityClient.fetch<SanityProject[]>(PROJECTS_QUERY);
}

export async function fetchFeaturedProjects(): Promise<SanityProject[]> {
  if (!isSanityConfigured) return [];
  return sanityClient.fetch<SanityProject[]>(FEATURED_PROJECTS_QUERY);
}

export async function fetchServices(): Promise<SanityService[]> {
  if (!isSanityConfigured) return [];
  return sanityClient.fetch<SanityService[]>(SERVICES_QUERY);
}

export async function fetchServiceAreas(): Promise<SanityServiceArea[]> {
  if (!isSanityConfigured) return [];
  return sanityClient.fetch<SanityServiceArea[]>(SERVICE_AREAS_QUERY);
}

export async function fetchGalleryImages(category?: string): Promise<SanityGalleryImage[]> {
  if (!isSanityConfigured) return [];
  if (category) {
    return sanityClient.fetch<SanityGalleryImage[]>(
      `*[_type == "galleryImage" && category == $category] | order(order asc) {
        _id, title, image, caption, category, location, featured, order
      }`,
      { category },
    );
  }
  return sanityClient.fetch<SanityGalleryImage[]>(GALLERY_IMAGES_QUERY);
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
