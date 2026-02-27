import { COMPANY, SERVICES, LOCATIONS } from "./siteData";
import { BLOG_POSTS } from "./blogData";
import { LEAD_MAGNETS } from "./promotionsData";

/** Base URL for canonical and OG (no trailing slash). Set in .env as VITE_SITE_URL for production. */
export const SITE_URL =
  (typeof import.meta !== "undefined" && (import.meta as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL) ||
  "https://www.francoandsonsconstruction.com";

export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
}

const DEFAULT_IMAGE = `${SITE_URL}/og-default.png`;

function truncateDescription(text: string, maxLen = 160): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, maxLen - 3) + "...";
}

/**
 * Returns meta (title, description, canonical, image) for the current path.
 * Used by DocumentHead to set document head and OG tags.
 */
export function getMetaForPath(
  pathname: string,
  params: Record<string, string | undefined>
): PageMeta {
  const base = { canonical: `${SITE_URL}${pathname === "/" ? "" : pathname}` };

  // Home
  if (pathname === "/") {
    return {
      ...base,
      title: `${COMPANY.name} | Kitchen & Bathroom Remodeling | Lincoln, CA`,
      description: truncateDescription(
        `${COMPANY.positioning} Free estimates. Serving Lincoln, Rocklin, Roseville, Placer County & Sacramento area.`
      ),
      image: DEFAULT_IMAGE,
    };
  }

  // Static pages
  const staticMeta: Record<string, PageMeta> = {
    about: {
      ...base,
      title: `About Us | ${COMPANY.name} | Lincoln, CA`,
      description: truncateDescription(
        `Meet Carlos and Cristian Franco. Family-owned general contractor with over ${COMPANY.yearsExperience} years of construction experience serving Lincoln and Placer County.`
      ),
      image: DEFAULT_IMAGE,
    },
    contact: {
      ...base,
      title: `Contact Us | ${COMPANY.name} | Free Estimate`,
      description: truncateDescription(
        `Get a free estimate from ${COMPANY.name}. Call ${COMPANY.phone} or request a consultation. Serving Lincoln, Rocklin, Roseville & Placer County.`
      ),
      image: DEFAULT_IMAGE,
    },
    portfolio: {
      ...base,
      title: `Our Portfolio | Kitchen & Bathroom Remodels | ${COMPANY.name}`,
      description: truncateDescription(
        `See before & after photos of kitchen remodels, bathroom renovations, and home additions by ${COMPANY.name} in Lincoln, Rocklin, Roseville & Placer County.`
      ),
      image: DEFAULT_IMAGE,
    },
    process: {
      ...base,
      title: `Our Process | ${COMPANY.name} | From Consultation to Completion`,
      description: truncateDescription(
        `How ${COMPANY.name} runs your remodel: free consultation, detailed estimate, design & planning, construction, and final walkthrough. No surprises.`
      ),
      image: DEFAULT_IMAGE,
    },
    reviews: {
      ...base,
      title: `Client Reviews | ${COMPANY.name} | Lincoln, CA`,
      description: truncateDescription(
        `Read what Lincoln and Placer County homeowners say about ${COMPANY.name}. Kitchen remodeling, bathroom renovations, and home addition reviews.`
      ),
      image: DEFAULT_IMAGE,
    },
    faq: {
      ...base,
      title: `FAQ | ${COMPANY.name} | Common Questions`,
      description: truncateDescription(
        `Frequently asked questions about kitchen remodeling, bathroom remodels, estimates, permits, and working with ${COMPANY.name} in Lincoln, CA.`
      ),
      image: DEFAULT_IMAGE,
    },
    "get-started": {
      ...base,
      title: `Get a Free Estimate | ${COMPANY.name} | Lincoln, CA`,
      description: truncateDescription(
        `Request a free, no-obligation estimate from ${COMPANY.name}. In-home consultation, detailed written estimate. Serving Lincoln, Rocklin, Roseville & Placer County.`
      ),
      image: DEFAULT_IMAGE,
    },
    "why-us": {
      ...base,
      title: `Why Choose Us | ${COMPANY.name} | Lincoln's Trusted Contractor`,
      description: truncateDescription(
        `Father and son on every job. Detailed estimates, no hidden fees. Why homeowners in Lincoln and Placer County choose ${COMPANY.name} for remodeling.`
      ),
      image: DEFAULT_IMAGE,
    },
    packages: {
      ...base,
      title: `Remodeling Packages | ${COMPANY.name}`,
      description: truncateDescription(
        `Explore remodeling packages and options from ${COMPANY.name}. Kitchen, bathroom, and home addition services in Lincoln & Placer County.`
      ),
      image: DEFAULT_IMAGE,
    },
    blog: {
      ...base,
      title: `Blog | Remodeling Tips & Advice | ${COMPANY.name}`,
      description: truncateDescription(
        `Kitchen remodel costs, bathroom timelines, contractor advice, and before & after stories from ${COMPANY.name}. Lincoln & Placer County remodeling blog.`
      ),
      image: DEFAULT_IMAGE,
    },
  };

  const staticSegment = pathname.replace(/^\//, "").split("/")[0];
  if (staticMeta[staticSegment]) {
    return staticMeta[staticSegment];
  }

  // Services
  const serviceSlug = params.slug ?? pathname.match(/^\/services\/([^/]+)/)?.[1];
  if (pathname.startsWith("/services/") && serviceSlug) {
    const service = SERVICES.find((s) => s.slug === serviceSlug);
    if (service) {
      return {
        ...base,
        title: `${service.title} | ${COMPANY.name} | Lincoln, Rocklin, Roseville`,
        description: truncateDescription(
          `${service.heroDescription || service.description} Serving Lincoln, Rocklin, Roseville & Placer County. Free estimate.`
        ),
        image: typeof service.image === "string" && service.image.startsWith("http") ? service.image : DEFAULT_IMAGE,
      };
    }
  }

  // Locations
  const locationSlug = params.slug ?? pathname.match(/^\/locations\/([^/]+)/)?.[1];
  if (pathname.startsWith("/locations/") && locationSlug) {
    const location = LOCATIONS.find((l) => l.slug === locationSlug);
    if (location) {
      return {
        ...base,
        title: `${location.city} ${location.state} Remodeling | ${COMPANY.name}`,
        description: truncateDescription(
          `${location.description} Kitchen remodeling, bathroom renovations, home additions in ${location.city}. Free estimate.`
        ),
        image: DEFAULT_IMAGE,
      };
    }
  }

  // Blog post
  const blogSlug = params.slug ?? pathname.match(/^\/blog\/([^/]+)/)?.[1];
  if (pathname.startsWith("/blog/") && pathname !== "/blog" && blogSlug) {
    const post = BLOG_POSTS.find((p) => p.slug === blogSlug);
    if (post) {
      return {
        ...base,
        title: `${post.title} | ${COMPANY.name} Blog`,
        description: truncateDescription(post.excerpt),
        image: typeof post.image === "string" && post.image.startsWith("http") ? post.image : DEFAULT_IMAGE,
      };
    }
  }

  // Lead magnets /free/:slug
  const freeSlug = params.slug ?? pathname.match(/^\/free\/([^/]+)/)?.[1];
  if (pathname.startsWith("/free/") && freeSlug) {
    const magnet = LEAD_MAGNETS.find((m) => m.slug === freeSlug);
    if (magnet) {
      return {
        ...base,
        title: `${magnet.title} | Free Download | ${COMPANY.name}`,
        description: truncateDescription(magnet.description),
        image: DEFAULT_IMAGE,
      };
    }
  }

  // Ad landing /offers/:slug — dynamic by service/location for local SEO
  if (pathname.startsWith("/offers/")) {
    const offerSlug = params.slug ?? pathname.match(/^\/offers\/([^/]+)/)?.[1];
    let offerTitle = `Special Offer | ${COMPANY.name} | Lincoln, CA`;
    let offerDesc = `Limited-time offer from ${COMPANY.name}. Kitchen and bathroom remodeling in Lincoln, Rocklin, Roseville & Placer County. Get your free estimate.`;

    if (offerSlug) {
      const allServiceSlugs = SERVICES.map((s) => s.slug);
      const allLocationSlugs = LOCATIONS.map((l) => l.slug);
      let serviceSlug = "";
      let locationSlug = "";

      for (const sSlug of allServiceSlugs) {
        if (offerSlug.startsWith(sSlug + "-")) {
          serviceSlug = sSlug;
          const remainder = offerSlug.slice(sSlug.length + 1);
          if (allLocationSlugs.includes(remainder)) locationSlug = remainder;
          break;
        }
        if (offerSlug === sSlug) {
          serviceSlug = sSlug;
          break;
        }
      }
      if (offerSlug.startsWith("commercial")) serviceSlug = "commercial-remodeling";

      const service = SERVICES.find((s) => s.slug === serviceSlug);
      const location = LOCATIONS.find((l) => l.slug === locationSlug);
      const serviceName = service?.title ?? "Remodeling";
      const locationName = location ? `${location.city}, CA` : "Lincoln & Placer County";

      offerTitle = `${serviceName} in ${locationName} | ${COMPANY.name} | Free Estimate`;
      offerDesc = truncateDescription(
        `${COMPANY.positioning} ${serviceName} in ${locationName}. Free estimate. Call ${COMPANY.phone}.`
      );
    }

    return {
      ...base,
      title: offerTitle,
      description: offerDesc,
      image: DEFAULT_IMAGE,
    };
  }

  // 404
  if (pathname !== "/" && pathname.split("/").filter(Boolean).length > 0) {
    return {
      ...base,
      title: `Page Not Found | ${COMPANY.name}`,
      description: truncateDescription(COMPANY.positioning),
      noindex: true,
      image: DEFAULT_IMAGE,
    };
  }

  // Fallback
  return {
    ...base,
    title: `${COMPANY.name} | Kitchen & Bathroom Remodeling | Lincoln, CA`,
    description: truncateDescription(COMPANY.positioning),
    image: DEFAULT_IMAGE,
  };
}
