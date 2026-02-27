import { Helmet } from "react-helmet-async";
import { COMPANY, LOCATIONS } from "../../data/siteData";
import { SITE_URL } from "../../data/metaData";

/**
 * LocalBusiness + Organization JSON-LD for rich results and knowledge panel.
 * Rendered once in Layout so every page has the same organization schema.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
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
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: COMPANY.name,
        image: `${SITE_URL}/og-default.png`,
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
          opens: "08:00",
          closes: "17:00",
        },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
