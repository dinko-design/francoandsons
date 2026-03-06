import { Link } from "react-router";
import { ArrowRight, MapPin, Shield, CheckCircle } from "lucide-react";
import { SERVICES, LOCATIONS, COMPANY } from "../../data/siteData";
import { BRAND } from "../../data/brandConfig";

export interface SEOSection {
  heading: string;
  body: string;
  bullets?: string[];
  links?: { text: string; to: string }[];
}

interface SEOContentBlockProps {
  sections: SEOSection[];
  currentServiceSlug?: string;
  currentLocationSlug?: string;
  showRelatedServices?: boolean;
  showServiceAreas?: boolean;
  crossLinkGroups?: { title: string; links: { text: string; to: string }[] }[];
  blockTitle?: string;
  variant?: "default" | "card" | "highlight";
}

const { accent, primary } = BRAND.colors;

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
      ? "rounded-xl border p-6 lg:p-10"
      : variant === "highlight"
      ? "rounded-xl border p-6 lg:p-10"
      : "";

  const wrapperStyle =
    variant === "card"
      ? { background: `${primary}40`, borderColor: `${accent}15` }
      : variant === "highlight"
      ? { background: `${accent}08`, borderColor: `${accent}20` }
      : {};

  return (
    <div className={`rounded-xl p-6 lg:p-10 ${wrapperClass}`} style={{ background: BRAND.colors.foreground, ...wrapperStyle }}>
      {blockTitle && (
        <h2 className="text-[1.5rem] md:text-[1.75rem] mb-8 text-white" style={{ fontWeight: 700 }}>
          {blockTitle}
        </h2>
      )}

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-[1.25rem] md:text-[1.35rem] mb-3 text-white/90" style={{ fontWeight: 700 }}>
              {section.heading}
            </h3>
            <p className="text-[0.95rem] text-white/45 leading-[1.8] mb-4">
              {section.body}
            </p>

            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 mb-4">
                {section.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 mt-1 shrink-0" style={{ color: accent }} />
                    <span className="text-[0.9rem] text-white/45">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.links && section.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {section.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex items-center gap-1 text-[0.85rem] transition-colors px-3 py-1.5 rounded-lg"
                    style={{ fontWeight: 600, color: accent, background: `${accent}10` }}
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

      {(showRelatedServices || showServiceAreas || crossLinkGroups) && (
        <div className="mt-12 pt-10" style={{ borderTop: `1px solid ${accent}15` }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showRelatedServices && (
              <div>
                <h4 className="text-[0.95rem] mb-4 flex items-center gap-2 text-white/80" style={{ fontWeight: 700 }}>
                  <Shield className="w-4 h-4" style={{ color: accent }} />
                  Our Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-2 text-[0.85rem] text-white/35 hover:text-white/70 transition-colors py-1"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      <span>{service.title}</span>
                      {currentLocationSlug && (
                        <span className="text-[0.75rem] text-white/20">
                          in {LOCATIONS.find((l) => l.slug === currentLocationSlug)?.city}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {showServiceAreas && (
              <div>
                <h4 className="text-[0.95rem] mb-4 flex items-center gap-2 text-white/80" style={{ fontWeight: 700 }}>
                  <MapPin className="w-4 h-4" style={{ color: accent }} />
                  Service Areas
                </h4>
                <div className="space-y-2">
                  {relatedLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/locations/${loc.slug}`}
                      className="flex items-center gap-2 text-[0.85rem] text-white/35 hover:text-white/70 transition-colors py-1"
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

            {crossLinkGroups?.map((group) => (
              <div key={group.title}>
                <h4 className="text-[0.95rem] mb-4 text-white/80" style={{ fontWeight: 700 }}>
                  {group.title}
                </h4>
                <div className="space-y-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center gap-2 text-[0.85rem] text-white/35 hover:text-white/70 transition-colors py-1"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h4 className="text-[0.95rem] mb-4 text-white/80" style={{ fontWeight: 700 }}>
                Helpful Resources
              </h4>
              <div className="space-y-2">
                {[
                  { text: "Our Process — How It Works", to: "/process" },
                  { text: "Read Client Reviews", to: "/reviews" },
                  { text: "View Our Portfolio", to: "/portfolio" },
                  { text: "Why Choose Franco and Sons Construction LLC", to: "/why-us" },
                  { text: "About Our Family", to: "/about" },
                  { text: "FAQ — Common Questions", to: "/faq" },
                  { text: "Get Your Free Estimate", to: "/get-started" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-2 text-[0.85rem] text-white/35 hover:text-white/70 transition-colors py-1"
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
