import { Helmet } from "react-helmet-async";
import { COMPANY, LOCATIONS, SERVICES, TESTIMONIALS, FAQS } from "../../data/siteData";
import { BLOG_POSTS } from "../../data/blogData";
import { SITE_URL } from "../../data/metaData";

interface JsonLdProps {
  pathname?: string;
  params?: Record<string, string | undefined>;
}

/**
 * Comprehensive JSON-LD structured data for rich results, knowledge panel, and AI search.
 * Includes: Organization, LocalBusiness, BreadcrumbList, Service, Place, FAQPage, Article, Review, WebPage, WebSite
 */
export function JsonLd({ pathname = "/", params = {} }: JsonLdProps) {
  const graph: object[] = [
    // WebSite (for sitelinks search box)
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.fullName,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    // Organization (for Knowledge Panel)
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY.fullName,
      url: SITE_URL,
      description: COMPANY.positioning,
      email: COMPANY.email,
      telephone: COMPANY.phone,
      founder: [
        { "@type": "Person", name: COMPANY.owner, jobTitle: "Owner / General Contractor" },
        { "@type": "Person", name: COMPANY.coOwner, jobTitle: "Co-Owner / Project Manager" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lincoln",
        addressRegion: "CA",
        addressCountry: "US",
      },
      sameAs: [],
    },
    // LocalBusiness (for local pack, maps, rich results)
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: COMPANY.name,
      image: [`${SITE_URL}/og-default.png`],
      url: SITE_URL,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      description: COMPANY.positioning,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lincoln",
        addressRegion: "CA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.8916,
        longitude: -121.293,
      },
      areaServed: LOCATIONS.map((loc) => ({
        "@type": "City",
        name: loc.city,
        containedInPlace: { "@type": "State", name: "California" },
      })),
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
      aggregateRating:
        TESTIMONIALS.length > 0
          ? {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
              ratingCount: String(TESTIMONIALS.length),
            }
          : undefined,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Remodeling Services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            provider: { "@id": `${SITE_URL}/#localbusiness` },
            areaServed: LOCATIONS.map((loc) => ({
              "@type": "City",
              name: loc.city,
            })),
            url: `${SITE_URL}/services/${s.slug}`,
          },
        })),
      },
      review: TESTIMONIALS.slice(0, 5).map((t) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(t.rating),
          bestRating: "5",
        },
        author: { "@type": "Person", name: t.name },
        reviewBody: t.quote,
      })),
    },
  ];

  // Page-specific schema
  const slug = params.slug;
  const pathSegments = pathname.split("/").filter(Boolean);

  // WebPage for every page
  const pageUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  // Home page specific
  if (pathname === "/") {
    webPage["@type"] = "WebPage";
    webPage.name = `${COMPANY.name} | Kitchen & Bathroom Remodeling | Lincoln, CA`;
    webPage.description = COMPANY.positioning;
    webPage.about = { "@id": `${SITE_URL}/#localbusiness` };
  }

  // About page
  if (pathname === "/about") {
    webPage["@type"] = "AboutPage";
    webPage.name = `About ${COMPANY.name}`;
    webPage.about = { "@id": `${SITE_URL}/#organization` };
  }

  // Contact page
  if (pathname === "/contact" || pathname === "/get-started") {
    webPage["@type"] = "ContactPage";
    webPage.name = `Contact ${COMPANY.name}`;
  }

  graph.push(webPage);

  // BreadcrumbList for inner pages
  if (pathSegments.length > 0) {
    const breadcrumbItems = [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }];
    let url = SITE_URL;
    pathSegments.forEach((segment, i) => {
      url += `/${segment}`;
      const name =
        segment === "services"
          ? "Services"
          : segment === "locations"
            ? "Service Areas"
            : segment === "blog"
              ? "Blog"
              : segment === "free"
                ? "Free Resources"
                : segment === "offers"
                  ? "Offers"
                  : segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      breadcrumbItems.push({ "@type": "ListItem", position: i + 2, name, item: url });
    });
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });
  }

  // Service page: Service schema
  if (pathname.startsWith("/services/") && slug) {
    const service = SERVICES.find((s) => s.slug === slug);
    if (service) {
      graph.push({
        "@type": "Service",
        "@id": `${SITE_URL}/services/${slug}#service`,
        name: service.title,
        description: service.heroDescription || service.description,
        provider: { "@id": `${SITE_URL}/#localbusiness` },
        areaServed: LOCATIONS.map((loc) => ({
          "@type": "City",
          name: loc.city,
          containedInPlace: { "@type": "State", name: "California" },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} Features`,
          itemListElement: service.features.map((f) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: f },
          })),
        },
      });
    }
  }

  // Location page: Place
  if (pathname.startsWith("/locations/") && slug) {
    const location = LOCATIONS.find((l) => l.slug === slug);
    if (location) {
      graph.push({
        "@type": "Place",
        name: `${location.city}, ${location.state}`,
        description: location.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: location.city,
          addressRegion: location.state,
          addressCountry: "US",
        },
      });
    }
  }

  // FAQ page: FAQPage schema
  if (pathname === "/faq" && FAQS.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  // Reviews page: all Review schemas
  if (pathname === "/reviews") {
    graph.push({
      "@type": "ItemList",
      name: "Client Reviews",
      itemListElement: TESTIMONIALS.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: String(t.rating),
            bestRating: "5",
          },
          author: { "@type": "Person", name: t.name },
          reviewBody: t.quote,
          itemReviewed: { "@id": `${SITE_URL}/#localbusiness` },
        },
      })),
    });
  }

  // Blog listing: CollectionPage
  if (pathname === "/blog") {
    graph.push({
      "@type": "CollectionPage",
      name: "Blog",
      description: `Remodeling tips, advice, and project stories from ${COMPANY.name}`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: BLOG_POSTS.slice(0, 10).map((post, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/blog/${post.slug}`,
          name: post.title,
        })),
      },
    });
  }

  // Blog post: Article
  if (pathname.startsWith("/blog/") && pathname !== "/blog" && slug) {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (post) {
      graph.push({
        "@type": "Article",
        "@id": `${SITE_URL}/blog/${slug}#article`,
        headline: post.title,
        description: post.excerpt,
        author: { "@type": "Person", name: post.author },
        datePublished: post.date,
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        keywords: post.tags?.join(", "),
        articleSection: post.category,
      });
    }
  }

  // Portfolio page: ImageGallery
  if (pathname === "/portfolio") {
    graph.push({
      "@type": "CollectionPage",
      name: "Project Portfolio",
      description: `Kitchen remodels, bathroom renovations, and home additions by ${COMPANY.name}`,
    });
  }

  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
