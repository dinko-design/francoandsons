import { useParams, Link, Navigate } from "react-router";
import { ArrowRight, CheckCircle, MapPin, Phone, Tag, Download, Shield, Star } from "lucide-react";
import { LOCATIONS, SERVICES, COMPANY, IMAGES } from "../data/siteData";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AngularDivider, BlueprintLines, GeometricBackground } from "../components/shared/AngularDivider";
import { PromoBar, GuaranteeStrip } from "../components/shared/PromotionBanner";
import { LEAD_MAGNETS } from "../data/promotionsData";
import { SEOContentBlock } from "../components/shared/SEOContentBlock";
import { LOCATION_SEO_CONTENT } from "../data/seoData";
import { BRAND } from "../data/brandConfig";

export function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  const otherLocations = LOCATIONS.filter((l) => l.slug !== slug);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center pb-[70px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.lincoln}
            alt={`${location.city}, ${location.state}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${BRAND.colors.primaryDark}d9, ${BRAND.colors.primaryDark}a6, ${BRAND.colors.primaryDark}59)` }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: `linear-gradient(to top, ${BRAND.colors.primaryDark}cc, transparent)` }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1440 130" preserveAspectRatio="none">
              <line x1="0" y1="130" x2="500" y2="0" stroke={BRAND.colors.accent} strokeWidth="2" />
              <line x1="800" y1="130" x2="1440" y2="20" stroke={BRAND.colors.accent} strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-white/70 text-[0.85rem] mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span>Service Areas</span>
              <span>/</span>
              <span className="text-white">{location.city}</span>
            </div>
            <div className="flex items-center gap-2 mb-4" style={{ color: BRAND.colors.accent }}>
              <MapPin className="w-5 h-5" />
              <span className="text-[0.9rem]" style={{ fontWeight: 600 }}>
                {location.isPrimary ? "Primary Service Area" : "Service Area"}
              </span>
            </div>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Contractor Services in{" "}
              <span style={{ color: BRAND.colors.accent }}>{location.city}, {location.state}</span>
            </h1>
            <p className="text-white/80 text-[1.05rem] leading-relaxed">
              {location.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "70px" }}>
            <polygon points="0,10 660,70 780,70 1440,10 1440,70 0,70" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Location highlights + promo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Promo bar */}
          <div className="mb-8">
            <PromoBar locationSlug={location.slug} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {location.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 bg-secondary rounded-lg p-5 border border-primary/10">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-[0.9rem]">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Ad landing page links for this location */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Kitchen Remodeling", slug: "kitchen-remodeling", desc: "Custom kitchens built right" },
              { label: "Bathroom Remodeling", slug: "bathroom-remodeling", desc: "Spa-like bathroom retreats" },
              { label: "Home Additions", slug: "home-additions", desc: "More space for your family" },
            ].map((item) => (
              <Link
                key={item.slug}
                to={`/offers/${item.slug}-${location.slug}`}
                className="group bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-5 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-gold" />
                  <span className="text-[0.7rem] text-gold uppercase tracking-wider" style={{ fontWeight: 700 }}>
                    Special Offer
                  </span>
                </div>
                <div className="text-[0.95rem] mb-1" style={{ fontWeight: 700 }}>
                  {item.label} in {location.city}
                </div>
                <div className="text-[0.8rem] text-muted-foreground mb-3">{item.desc}</div>
                <span className="text-primary text-[0.85rem] flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontWeight: 600 }}>
                  View Offers <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Angular divider */}
      <AngularDivider from="#ffffff" to="#F8FAFC" variant="slant-right" />

      {/* ═══════════════════════════════════════ */}
      {/* SEO RICH CONTENT BLOCK                  */}
      {/* ═══════════════════════════════════════ */}
      {(LOCATION_SEO_CONTENT[location.slug] || (location.seoContent && location.seoContent.length > 0)) && (
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SEOContentBlock
              sections={LOCATION_SEO_CONTENT[location.slug] || (location.seoContent || []).map(s => ({ heading: s.heading, body: s.body, bullets: s.bullets }))}
              currentLocationSlug={location.slug}
              showRelatedServices
              showServiceAreas
            />
          </div>
        </section>
      )}

      {/* Services in this location */}
      <GeometricBackground>
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] mb-4" style={{ fontWeight: 700 }}>
                Our Services in {location.city}
              </h2>
              <p className="text-muted-foreground text-[1rem]">
                Franco & Sons Construction LLC provides the full range of construction and remodeling services to {location.city} homeowners and businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 hover:shadow-primary/5 transition-all"
                >
                  <h3 className="text-[1rem] mb-2" style={{ fontWeight: 600 }}>
                    {service.title} in {location.city}
                  </h3>
                  <p className="text-muted-foreground text-[0.85rem] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary text-[0.85rem] inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontWeight: 600 }}>
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </GeometricBackground>

      {/* Angular divider */}
      <AngularDivider from="#F8FAFC" to="#ffffff" variant="double" />

      {/* Guarantees */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[1.5rem] mb-2" style={{ fontWeight: 700 }}>
              Our Guarantees to {location.city} Homeowners
            </h2>
          </div>
          <GuaranteeStrip variant="icons-only" />
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#F8FAFC" variant="slant-left" />

      {/* Contact Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mb-4" style={{ fontWeight: 700 }}>
                Ready to Start Your {location.city} Project?
              </h2>
              <p className="text-muted-foreground text-[1rem] mb-8 leading-relaxed">
                Whether you're planning a kitchen remodel, bathroom renovation, or any other construction project in {location.city}, Franco & Sons Construction LLC is here to help. Contact us today for a free, no-obligation estimate.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-lg hover:bg-gold-dark transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="text-[0.9rem]" style={{ fontWeight: 600 }}>Call Us Today</div>
                    <div className="text-white/80 text-[0.85rem]">{COMPANY.phone}</div>
                  </div>
                </a>
              </div>

              {/* Free resources */}
              <div className="mb-8">
                <h3 className="text-[1rem] mb-3" style={{ fontWeight: 600 }}>Free Resources</h3>
                <div className="space-y-2">
                  {LEAD_MAGNETS.slice(0, 2).map((lm) => (
                    <Link
                      key={lm.id}
                      to={`/free/${lm.slug}`}
                      className="flex items-center gap-3 text-[0.875rem] text-primary hover:text-gold-dark transition-colors"
                      style={{ fontWeight: 600 }}
                    >
                      <Download className="w-4 h-4" />
                      {lm.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other locations */}
              <h3 className="text-[1rem] mb-4" style={{ fontWeight: 600 }}>We Also Serve</h3>
              <div className="flex flex-wrap gap-2">
                {otherLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    className="px-4 py-2 bg-secondary rounded-lg text-[0.85rem] hover:bg-primary hover:text-white transition-colors border border-primary/10"
                  >
                    {loc.city}, CA
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 lg:p-8 border border-border shadow-sm">
              <LeadCaptureForm
                title={`Free Estimate for ${location.city}`}
                subtitle={`Tell us about your ${location.city} project and we'll get back to you within 24 hours.`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider: to footer */}
      <AngularDivider from="#F8FAFC" to={BRAND.colors.primary} variant="slant-left" />
    </div>
  );
}