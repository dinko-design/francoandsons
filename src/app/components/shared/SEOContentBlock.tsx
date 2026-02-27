import { Link } from "react-router";
import { ArrowRight, MapPin, Shield, CheckCircle } from "lucide-react";
import { SERVICES, LOCATIONS, COMPANY } from "../../data/siteData";

export interface SEOSection {
  heading: string;
  body: string;
  /** Optional bullet points under this section */
  bullets?: string[];
  /** Optional inline cross-links rendered below the body */
  links?: { text: string; to: string }[];
}

interface SEOContentBlockProps {
  /** The main rich content sections */
  sections: SEOSection[];
  /** Current service slug — used to auto-generate related links */
  currentServiceSlug?: string;
  /** Current location slug — used to auto-generate related links */
  currentLocationSlug?: string;
  /** Show auto-generated cross-links to related services */
  showRelatedServices?: boolean;
  /** Show auto-generated cross-links to service areas */
  showServiceAreas?: boolean;
  /** Additional custom cross-link groups */
  crossLinkGroups?: { title: string; links: { text: string; to: string }[] }[];
  /** Optional heading before the whole block */
  blockTitle?: string;
  /** Variant for background style */
  variant?: "default" | "card" | "highlight";
}

export function SEOContentBlock({
  sections,
  currentServiceSlug,
  currentLocationSlug,
  showRelatedServices = true,
  showServiceAreas = true,
  crossLinkGroups,
  blockTitle,
  variant = "default",
}: SEOContentBlockProps) {
  const relatedServices = SERVICES.filter((s) => s.slug !== currentServiceSlug);
  const relatedLocations = LOCATIONS.filter((l) => l.slug !== currentLocationSlug);

  const wrapperClass =
    variant === "card"
      ? "bg-white rounded-xl border border-border p-6 lg:p-10"
      : variant === "highlight"
      ? "bg-secondary rounded-xl border border-primary/10 p-6 lg:p-10"
      : "";

  return (
    <div className={wrapperClass}>
      {blockTitle && (
        <h2 className="text-[1.5rem] md:text-[1.75rem] mb-8" style={{ fontWeight: 700 }}>
          {blockTitle}
        </h2>
      )}

      {/* Rich content sections */}
      <div className="space-y-10">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-[1.25rem] md:text-[1.35rem] mb-3" style={{ fontWeight: 700 }}>
              {section.heading}
            </h3>
            <p className="text-[0.95rem] text-muted-foreground leading-[1.8] mb-4">
              {section.body}
            </p>

            {/* Bullet points */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 mb-4">
                {section.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-[0.9rem] text-muted-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Section-specific links */}
            {section.links && section.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {section.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex items-center gap-1 text-primary text-[0.85rem] hover:text-[#1D4ED8] transition-colors bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg"
                    style={{ fontWeight: 600 }}
                  >
                    {link.text}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cross-linking grid */}
      {(showRelatedServices || showServiceAreas || crossLinkGroups) && (
        <div className="mt-12 pt-10 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Related Services */}
            {showRelatedServices && (
              <div>
                <h4 className="text-[0.95rem] mb-4 flex items-center gap-2" style={{ fontWeight: 700 }}>
                  <Shield className="w-4 h-4 text-primary" />
                  Our Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-2 text-[0.85rem] text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      <span>{service.title}</span>
                      {currentLocationSlug && (
                        <span className="text-[0.75rem] text-muted-foreground/60">
                          in {LOCATIONS.find((l) => l.slug === currentLocationSlug)?.city}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Service Areas */}
            {showServiceAreas && (
              <div>
                <h4 className="text-[0.95rem] mb-4 flex items-center gap-2" style={{ fontWeight: 700 }}>
                  <MapPin className="w-4 h-4 text-primary" />
                  Service Areas
                </h4>
                <div className="space-y-2">
                  {relatedLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/locations/${loc.slug}`}
                      className="flex items-center gap-2 text-[0.85rem] text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      <span>
                        {currentServiceSlug
                          ? `${SERVICES.find((s) => s.slug === currentServiceSlug)?.title} in ${loc.city}`
                          : `${loc.city}, ${loc.state}`}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Custom cross-link groups */}
            {crossLinkGroups?.map((group) => (
              <div key={group.title}>
                <h4 className="text-[0.95rem] mb-4" style={{ fontWeight: 700 }}>
                  {group.title}
                </h4>
                <div className="space-y-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center gap-2 text-[0.85rem] text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Helpful pages — always shown */}
            <div>
              <h4 className="text-[0.95rem] mb-4" style={{ fontWeight: 700 }}>
                Helpful Resources
              </h4>
              <div className="space-y-2">
                {[
                  { text: "Our Process — How It Works", to: "/process" },
                  { text: "Read Client Reviews", to: "/reviews" },
                  { text: "View Our Portfolio", to: "/portfolio" },
                  { text: "Why Choose Franco & Sons", to: "/why-us" },
                  { text: "About Our Family", to: "/about" },
                  { text: "FAQ — Common Questions", to: "/faq" },
                  { text: "Get Your Free Estimate", to: "/get-started" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-2 text-[0.85rem] text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    <ArrowRight className="w-3 h-3 shrink-0" />
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
