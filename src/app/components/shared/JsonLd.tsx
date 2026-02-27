import { Helmet } from "react-helmet-async";
import { COMPANY, LOCATIONS, SERVICES, TESTIMONIALS, FAQS } from "../../data/siteData";
import { BLOG_POSTS } from "../../data/blogData";
import { SITE_URL } from "../../data/metaData";

interface JsonLdProps {
  pathname?: string;
  params?: Record<string, string | undefined>;
}

/**
 * LocalBusiness + Organization JSON-LD for rich results and knowledge panel.
 * Includes page-specific schema (BreadcrumbList, Service, Place, FAQPage) for local & technical SEO.
 */
export function JsonLd({ pathname = "/", params = {} }: JsonLdProps) {
  const graph: object[] = [
    // Organization (for Knowledge Panel)
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY.fullName,
      url: SITE_URL,
      description: COMPANY.positioning,
      email: COMPANY.email,
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY.address,
        addressRegion: "CA",
        addressCountry: "US",
      },
      sameAs: [],
    },
    // LocalBusiness (for local pack, maps, rich results)
    {
      "@type": "LocalBusiness",
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
        itemListElement: SERVICES.slice(0, 12).map((s, i) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title },
        })),
      },
    },
  ];

  // Page-specific schema
  const slug = params.slug;

  // BreadcrumbList for inner pages
  const pathSegments = pathname.split("/").filter(Boolean);
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

  // Service page: LocalBusiness + Service
  if (pathname.startsWith("/services/") && slug) {
    const service = SERVICES.find((s) => s.slug === slug);
    if (service) {
      graph.push({
        "@type": "Service",
        name: service.title,
        description: service.heroDescription || service.description,
        provider: { "@id": `${SITE_URL}/#localbusiness` },
        areaServed: LOCATIONS.map((loc) => ({
          "@type": "City",
          name: loc.city,
          containedInPlace: { "@type": "State", name: "California" },
        })),
      });
    }
  }

  // Location page: Place (for "contractor in [City]" queries)
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

  // FAQ page: FAQPage schema (rich results in SERP)
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

  // Blog post: Article
  if (pathname.startsWith("/blog/") && pathname !== "/blog" && slug) {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (post) {
      graph.push({
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        author: { "@type": "Person", name: post.author },
        datePublished: post.date,
        publisher: { "@id": `${SITE_URL}/#organization` },
      });
    }
  }

  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
