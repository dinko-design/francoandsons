import { useParams, Link, Navigate } from "react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  ChefHat,
  Bath,
  Building2,
  Home,
  Grid3X3,
  Accessibility,
  LayoutDashboard,
  Droplets,
  Zap,
  Paintbrush,
  TreePine,
  Download,
  Shield,
  Lock,
  Tag,
  Gift,
  Phone,
  Award,
} from "lucide-react";
import { SERVICES, COMPANY, TESTIMONIALS, IMAGES } from "../data/siteData";
import { PROMOTIONS, LEAD_MAGNETS } from "../data/promotionsData";
import { MultiStepForm } from "../components/shared/MultiStepForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GuaranteeStrip } from "../components/shared/PromotionBanner";
import { VideoPlaceholder } from "../components/shared/VideoPlaceholder";
import { TrustBadges, SecureFormNotice } from "../components/shared/TrustBadges";
import { SEOContentBlock } from "../components/shared/SEOContentBlock";
import { SERVICE_SEO_CONTENT } from "../data/seoData";
import { BRAND } from "../data/brandConfig";

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="w-7 h-7" />,
  Bath: <Bath className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
  Home: <Home className="w-7 h-7" />,
  Grid3X3: <Grid3X3 className="w-7 h-7" />,
  Accessibility: <Accessibility className="w-7 h-7" />,
  LayoutDashboard: <LayoutDashboard className="w-7 h-7" />,
  Droplets: <Droplets className="w-7 h-7" />,
  Zap: <Zap className="w-7 h-7" />,
  Paintbrush: <Paintbrush className="w-7 h-7" />,
  TreePine: <TreePine className="w-7 h-7" />,
};

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const relatedTestimonial = TESTIMONIALS.find(
    (t) => t.service.toLowerCase().includes(service.shortTitle.toLowerCase())
  ) || TESTIMONIALS[0];

  // Find applicable promotions
  const applicablePromos = PROMOTIONS.filter((p) => {
    const matchService = p.applicableServices.includes("all") || p.applicableServices.includes(service.slug);
    return matchService;
  }).slice(0, 3);

  const topPromo = applicablePromos[0];

  // Find relevant lead magnet
  const relevantMagnet = LEAD_MAGNETS.find(
    (lm) => lm.applicableServices.includes("all") || lm.applicableServices.includes(service.slug)
  );

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* HERO — 2-column: Left = content, Right = offer + form */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-accent">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={service.image}
            alt={`${service.title} service by Franco and Sons Construction LLC in Placer County, CA`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${BRAND.colors.primaryDark}e6, ${BRAND.colors.primaryDark}bf, ${BRAND.colors.primaryDark}80)` }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: `linear-gradient(to top, ${BRAND.colors.primaryDark}cc, transparent)` }} />
          {/* Geometric lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1440 130" preserveAspectRatio="none">
              <line x1="0" y1="130" x2="400" y2="0" stroke={BRAND.colors.accent} strokeWidth="2" />
              <line x1="200" y1="130" x2="600" y2="0" stroke={BRAND.colors.accent} strokeWidth="1" />
              <line x1="800" y1="130" x2="1440" y2="30" stroke={BRAND.colors.accent} strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT: Title, description, trust badges */}
            <div className="py-4">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/60 text-[0.8rem] mb-5">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white">{service.title}</span>
              </div>

              {/* Service icon */}
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-5">
                {iconMap[service.icon]}
              </div>

              <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] text-white mb-5" style={{ fontWeight: 700, lineHeight: 1.1 }}>
                {service.title} in{" "}
                <span className="text-gold">Lincoln, California</span>
              </h1>

              <p className="text-white/80 text-[1.05rem] leading-relaxed mb-6 max-w-xl">
                {service.heroDescription}
              </p>

              {/* Trust badges */}
              <TrustBadges variant="hero" />

              {/* Key differentiators */}
              <div className="mt-6 space-y-2.5">
                {[
                  "Father & son personally on every job",
                  "Transparent, detailed estimates — no hidden fees",
                  `${COMPANY.yearsExperience}+ years of construction experience`,
                  "Licensed, insured & code-compliant",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-white/75 text-[0.875rem]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <a
                href={`tel:${COMPANY.phone}`}
                className="mt-8 inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-[0.75rem] text-white/60">Call Cristian directly</div>
                  <div className="text-[1rem]" style={{ fontWeight: 700 }}>{COMPANY.phone}</div>
                </div>
              </a>
            </div>

            {/* RIGHT: Offer card + form */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary/10">
              {/* Offer callout header */}
              {topPromo ? (
                <div className="p-5 border-b border-white/10" style={{ background: `linear-gradient(to right, ${BRAND.colors.primaryDark}, #1E293B)` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-gold" />
                    <span className="text-gold text-[0.7rem] tracking-wider uppercase" style={{ fontWeight: 700 }}>
                      Current Offer — Claim With Your Estimate
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
                      <Tag className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold text-[1.1rem]" style={{ fontWeight: 700 }}>
                          {topPromo.discount}
                        </span>
                        <span className="text-[0.6rem] bg-gold/20 text-gold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ fontWeight: 600 }}>
                          {topPromo.badge}
                        </span>
                      </div>
                      <div className="text-white text-[0.85rem]" style={{ fontWeight: 600 }}>
                        {topPromo.title}
                      </div>
                    </div>
                  </div>
                  {applicablePromos.length > 1 && (
                    <div className="mt-3 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                      <Star className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span className="text-white/70 text-[0.75rem]">
                        {applicablePromos.length} stackable offers available for this service
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gradient-to-r from-primary to-primary/90 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-[0.75rem]" style={{ fontWeight: 600 }}>Accepting New Projects</span>
                  </div>
                  <div className="text-white text-[1.1rem]" style={{ fontWeight: 700 }}>
                    Get a Free {service.shortTitle} Estimate
                  </div>
                </div>
              )}

              {/* Form */}
              <div className="p-6 lg:p-7">
                <MultiStepForm
                  defaultService={service.slug}
                  source="service-page"
                />
                <SecureFormNotice />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom angular divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "80px" }}>
            <polygon points="0,30 0,80 1440,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════ */}
      {/* TRUST STRIP            */}
      {/* ═══════════════════════ */}
      <TrustBadges variant="strip" />

      {/* ═══════════════════════════════ */}
      {/* MAIN CONTENT AREA              */}
      {/* ═══════════════════════════════ */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content — Left 2/3 */}
            <div className="lg:col-span-2">
              {/* Stackable offers callout */}
              {applicablePromos.length > 0 && (
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 mb-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Gift className="w-5 h-5 text-gold" />
                    <span className="text-gold text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 700 }}>
                      {applicablePromos.length > 1 ? "Stack & Save — Combine These Offers" : "Current Offer"}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {applicablePromos.map((promo) => (
                      <div key={promo.id} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-primary/10">
                        <Tag className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-gold text-[0.9rem]" style={{ fontWeight: 700 }}>{promo.discount}</span>
                            <span className="text-[0.9rem]" style={{ fontWeight: 600 }}>{promo.title}</span>
                          </div>
                          <div className="text-muted-foreground text-[0.8rem]">{promo.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="#get-estimate"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-gold-dark text-white px-6 py-3 rounded-lg text-[0.9rem] transition-colors"
                      style={{ fontWeight: 700 }}
                    >
                      Claim These Offers — Get Free Estimate <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}

              {/* Features */}
              <h2 className="text-[1.5rem] md:text-[1.75rem] mb-6" style={{ fontWeight: 700 }}>
                What We Offer
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-border hover:border-primary/20 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-[0.9rem]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Video Placeholder */}
              <div className="mb-12">
                <VideoPlaceholder
                  title={`${service.title} Project Walkthrough`}
                  subtitle="Video coming soon"
                  thumbnailSrc={service.image}
                />
              </div>

              {/* Benefits */}
              <h2 className="text-[1.5rem] md:text-[1.75rem] mb-6" style={{ fontWeight: 700 }}>
                Why Choose Franco and Sons Construction LLC for {service.title}
              </h2>
              <div className="bg-white rounded-xl border border-border p-6 lg:p-8 mb-12">
                <div className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[0.95rem]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ═══════════════════════════════════════ */}
              {/* SEO RICH CONTENT BLOCK                  */}
              {/* ═══════════════════════════════════════ */}
              {(SERVICE_SEO_CONTENT[service.slug] || (service.seoContent && service.seoContent.length > 0)) && (
                <div className="mb-12">
                  <SEOContentBlock
                    sections={SERVICE_SEO_CONTENT[service.slug] || (service.seoContent || []).map(s => ({ heading: s.heading, body: s.body }))}
                    currentServiceSlug={service.slug}
                    showRelatedServices
                    showServiceAreas
                  />

                  {/* Trust callout within content */}
                  <div className="bg-secondary rounded-xl p-6 border border-primary/10 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-[1.05rem] mb-2" style={{ fontWeight: 700 }}>
                          Trusted by Lincoln Homeowners
                        </h3>
                        <p className="text-[0.875rem] text-muted-foreground leading-relaxed mb-3">
                          Franco and Sons Construction LLC is a licensed, insured California general contractor with over {COMPANY.yearsExperience} years of experience.
                          Your personal information is always secure with us — we never share or sell your data.
                          When you request an estimate, only Cristian sees your details and follows up personally.
                        </p>
                        <TrustBadges variant="compact" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery */}
              <h2 className="text-[1.5rem] md:text-[1.75rem] mb-6" style={{ fontWeight: 700 }}>
                Project Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-12">
                {(service.galleryImages && service.galleryImages.length > 0
                  ? service.galleryImages
                  : [service.image, IMAGES.kitchenBeforeAfter, IMAGES.livingRoom, IMAGES.homeExterior]
                ).map((img, i) => {
                  const galleryLen = service.galleryImages?.length || 4;
                  const isSpanning = galleryLen % 2 === 1 && i === 0;
                  return (
                    <div key={i} className={`rounded-lg overflow-hidden relative group ${isSpanning ? "col-span-2" : ""}`}>
                      <ImageWithFallback
                        src={img}
                        alt={`${service.title} project photo ${i + 1} — Franco and Sons Construction LLC`}
                        className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          isSpanning ? "aspect-[16/9]" : "aspect-[4/3]"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Testimonial */}
              <div className="bg-secondary rounded-xl p-6 lg:p-8 border border-primary/10 mb-12">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[1rem] leading-relaxed mb-4 italic">
                  "{relatedTestimonial.quote}"
                </p>
                <div>
                  <div className="text-[0.9rem]" style={{ fontWeight: 600 }}>{relatedTestimonial.name}</div>
                  <div className="text-[0.8rem] text-muted-foreground">{relatedTestimonial.service} - {relatedTestimonial.location}</div>
                </div>
              </div>

              {/* Guarantees */}
              <h2 className="text-[1.5rem] md:text-[1.75rem] mb-6" style={{ fontWeight: 700 }}>
                Our Guarantees
              </h2>
              <GuaranteeStrip variant="compact" maxItems={3} />
            </div>

            {/* SIDEBAR — Right 1/3 */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Sticky estimate form with offer */}
                <div id="get-estimate" className="bg-white rounded-xl border border-border shadow-lg overflow-hidden">
                  {/* Offer header */}
                  {topPromo && (
                    <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-b border-gold/20 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Tag className="w-4 h-4 text-gold" />
                        <span className="text-gold text-[0.85rem]" style={{ fontWeight: 700 }}>
                          {topPromo.discount}
                        </span>
                        <span className="text-[0.85rem]" style={{ fontWeight: 600 }}>{topPromo.title}</span>
                      </div>
                      <div className="text-[0.75rem] text-muted-foreground">Applied to your free estimate</div>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-[1.1rem] mb-1" style={{ fontWeight: 700 }}>
                      Get a Free {service.shortTitle} Estimate
                    </h3>
                    <p className="text-[0.8rem] text-muted-foreground mb-4">
                      Cristian will personally follow up within 24 hours.
                    </p>
                    <SidebarQuickForm serviceSlug={service.slug} />
                    <SecureFormNotice />
                  </div>
                </div>

                {/* Lead Magnet CTA */}
                {relevantMagnet && (
                  <Link
                    to={`/free/${relevantMagnet.slug}`}
                    className="block bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-5 hover:border-primary/40 transition-all"
                  >
                    <div className="text-[0.7rem] text-primary uppercase tracking-wider mb-2" style={{ fontWeight: 700 }}>
                      Free Download
                    </div>
                    <div className="text-[0.95rem] mb-1" style={{ fontWeight: 700 }}>{relevantMagnet.title}</div>
                    <div className="text-[0.8rem] text-muted-foreground mb-3">{relevantMagnet.subtitle}</div>
                    <span className="text-primary text-[0.85rem] flex items-center gap-1" style={{ fontWeight: 600 }}>
                      <Download className="w-4 h-4" /> Download Free
                    </span>
                  </Link>
                )}

                {/* Trust box */}
                <div className="bg-white rounded-xl border border-border p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="text-[0.95rem]" style={{ fontWeight: 700 }}>Why Trust Us</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: <Award className="w-4 h-4" />, text: `${COMPANY.yearsExperience}+ years construction experience` },
                      { icon: <Shield className="w-4 h-4" />, text: "Licensed & insured CA contractor" },
                      { icon: <Lock className="w-4 h-4" />, text: "Your information is 100% secure" },
                      { icon: <Star className="w-4 h-4" />, text: "5-star rated by homeowners" },
                      { icon: <CheckCircle className="w-4 h-4" />, text: "Satisfaction guarantee on every project" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-start gap-2.5">
                        <span className="text-primary mt-0.5 shrink-0">{item.icon}</span>
                        <span className="text-[0.8rem] text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related services */}
                <div className="bg-white rounded-xl border border-border p-5">
                  <h3 className="text-[0.95rem] mb-4" style={{ fontWeight: 600 }}>Other Services</h3>
                  <div className="space-y-3">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 text-[0.85rem] hover:text-primary transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-pages — topic cluster links */}
      {service.subPages && service.subPages.length > 0 && (
        <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: BRAND.colors.foreground }}>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
                {service.shortTitle} Services
              </span>
              <h2 className="text-[1.5rem] md:text-[2rem] text-white mt-2 mb-3" style={{ fontWeight: 700 }}>
                Explore Our {service.shortTitle} Expertise
              </h2>
              <p className="text-white/50 text-[0.95rem]">
                Dive deeper into our specialized {service.shortTitle.toLowerCase()} services.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.subPages.map((sp) => (
                <Link
                  key={sp.slug}
                  to={`/services/${service.slug}/${sp.slug}`}
                  className="group rounded-xl border border-white/10 p-5 hover:border-white/25 transition-all"
                  style={{ background: BRAND.colors.primaryDark }}
                >
                  <h3 className="text-white text-[1rem] mb-2 group-hover:text-white/90" style={{ fontWeight: 600 }}>
                    {sp.title}
                  </h3>
                  <p className="text-white/40 text-[0.85rem] leading-relaxed line-clamp-2 mb-3">
                    {sp.heroDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[0.8rem] group-hover:gap-2 transition-all" style={{ color: BRAND.colors.accent, fontWeight: 600 }}>
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.5rem] mb-8 text-center" style={{ fontWeight: 700 }}>
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-xl overflow-hidden border border-border hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <ImageWithFallback
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full block" style={{ height: "20px" }}>
                      <polygon points="0,20 400,20 400,5 250,0 150,10 0,5" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[0.95rem] mb-2" style={{ fontWeight: 600 }}>{s.title}</h3>
                  <span className="text-primary text-[0.85rem] inline-flex items-center gap-1" style={{ fontWeight: 500 }}>
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA with trust */}
      <section className="py-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] opacity-10" style={{ background: "radial-gradient(ellipse at bottom left, #D97B2B 0%, transparent 70%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-gold text-[0.8rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Trusted & Secure
            </span>
          </div>
          <h2 className="text-[1.75rem] md:text-[2.25rem] text-white mb-4" style={{ fontWeight: 700 }}>
            Ready to Start Your {service.shortTitle} Project?
          </h2>
          <p className="text-gray-400 text-[1rem] mb-3">
            Get your free, no-obligation estimate. Cristian will personally follow up within 24 hours.
          </p>
          <p className="text-gray-500 text-[0.8rem] mb-8 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            Your information is always secure. We never share or sell your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg text-[1rem] transition-colors inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 700 }}
            >
              Get My Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-[1rem] hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

/** Compact sidebar form (not multi-step, just quick contact) */
function SidebarQuickForm({ serviceSlug }: { serviceSlug: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: serviceSlug,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us directly.");
      }
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
        <p className="text-[0.95rem]" style={{ fontWeight: 600 }}>You're All Set!</p>
        <p className="text-[0.8rem] text-muted-foreground mt-1">
          Cristian will follow up within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-3.5 py-2.5 rounded-lg bg-input-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[0.85rem]";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} className={inputClasses} />
      <input type="tel" name="phone" placeholder="Phone Number *" required value={formData.phone} onChange={handleChange} className={inputClasses} />
      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className={inputClasses} />
      <input type="text" name="city" placeholder="City / Zip Code" value={formData.city} onChange={handleChange} className={inputClasses} />
      {error && (
        <p className="text-red-500 text-[0.8rem] text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary hover:bg-gold-dark text-white px-5 py-3 rounded-lg text-[0.9rem] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
        style={{ fontWeight: 700 }}
      >
        {submitting ? "Submitting…" : (<>Get My Free Estimate <ArrowRight className="w-4 h-4" /></>)}
      </button>
      <p className="text-[0.7rem] text-muted-foreground text-center">
        No obligation. No spam. Cristian follows up personally.
      </p>
    </form>
  );
}