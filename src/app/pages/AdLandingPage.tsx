import { useParams, Link, Navigate } from "react-router";
import { Star, Shield, Clock, CheckCircle, Phone, ArrowRight, Users, MapPin } from "lucide-react";
import { SERVICES, COMPANY, IMAGES, LOCATIONS, TESTIMONIALS } from "../data/siteData";
import { PROMOTIONS, GUARANTEES } from "../data/promotionsData";
import { MultiStepForm } from "../components/shared/MultiStepForm";
import { StackedPromos, GuaranteeStrip } from "../components/shared/PromotionBanner";
import { VideoPlaceholder } from "../components/shared/VideoPlaceholder";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AngularDivider, BlueprintLines } from "../components/shared/AngularDivider";

export function AdLandingPage() {
  const { slug } = useParams<{ slug: string }>();

  // Parse slug: "kitchen-remodeling-lincoln" → service="kitchen-remodeling", location="lincoln"
  // Or just "kitchen-remodeling" for service-only pages
  // Or "commercial-remodeling" etc.
  const allServiceSlugs = SERVICES.map((s) => s.slug);
  const allLocationSlugs = LOCATIONS.map((l) => l.slug);

  let serviceSlug = "";
  let locationSlug = "";

  // Try to match service-location pattern
  for (const sSlug of allServiceSlugs) {
    if (slug?.startsWith(sSlug + "-")) {
      serviceSlug = sSlug;
      const remainder = slug.slice(sSlug.length + 1);
      if (allLocationSlugs.includes(remainder)) {
        locationSlug = remainder;
      }
      break;
    }
    if (slug === sSlug) {
      serviceSlug = sSlug;
      break;
    }
  }

  // Handle commercial
  if (slug?.startsWith("commercial")) {
    serviceSlug = "commercial";
  }

  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const location = LOCATIONS.find((l) => l.slug === locationSlug);

  const serviceName = service?.title || "Home Remodeling";
  const locationName = location ? `${location.city}, CA` : "Lincoln & Placer County";
  const heroImage = service?.image || IMAGES.kitchen;

  // Get relevant testimonial
  const testimonial = TESTIMONIALS.find(
    (t) => service && t.service.toLowerCase().includes(service.shortTitle.toLowerCase())
  ) || TESTIMONIALS[0];

  return (
    <div>
      {/* ═══════════════════════════════════ */}
      {/* HERO — Above the fold conversion   */}
      {/* ═══════════════════════════════════ */}
      <section className="relative min-h-[600px] lg:min-h-[auto] overflow-hidden bg-accent">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="adgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="60" y2="60" stroke="#2563EB" strokeWidth="0.5" opacity="0.06" />
                <line x1="60" y1="0" x2="0" y2="60" stroke="#2563EB" strokeWidth="0.5" opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#adgrid)" />
          </svg>
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
            style={{ background: "linear-gradient(225deg, #D4A853 0%, transparent 60%)", clipPath: "polygon(100% 0, 30% 0, 100% 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Copy */}
            <div className="py-4">
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white text-[0.75rem]" style={{ fontWeight: 600 }}>5.0 Rating</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span className="text-white text-[0.75rem]" style={{ fontWeight: 600 }}>Licensed & Insured</span>
                </div>
              </div>

              <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.1 }}>
                {serviceName} in{" "}
                <span className="text-[#60A5FA]">{locationName}</span>
              </h1>
              <p className="text-white/80 text-[1.05rem] leading-relaxed mb-6 max-w-lg">
                {service?.heroDescription?.slice(0, 200) ||
                  `Quality ${serviceName.toLowerCase()} by a father-son team with ${COMPANY.yearsExperience}+ years of experience. No subcontractors, no surprises — just honest craftsmanship from estimate to final walkthrough.`}
              </p>

              {/* Key differentiators */}
              <div className="space-y-3 mb-8">
                {[
                  "Father & son personally on every job",
                  "Transparent, detailed estimates — no hidden fees",
                  `${COMPANY.yearsExperience}+ years of construction experience`,
                  "Licensed, insured & fully code-compliant",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#60A5FA] shrink-0" />
                    <span className="text-white/80 text-[0.9rem]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#60A5FA]" />
                <div>
                  <div className="text-[0.8rem] text-white/60">Call Cristian directly</div>
                  <div className="text-[1rem]" style={{ fontWeight: 700 }}>{COMPANY.phone}</div>
                </div>
              </a>
            </div>

            {/* Right: Multi-step form */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-2xl border border-primary/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[0.75rem] text-green-600" style={{ fontWeight: 600 }}>Accepting New Projects</span>
              </div>
              <MultiStepForm
                defaultService={serviceSlug || undefined}
                defaultLocation={locationSlug || undefined}
                source="ad-landing"
                campaignId={slug}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gold accent bar */}
      <div className="bg-primary py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[0.8rem] text-white">
          {["Price Lock Guarantee", "On-Time Guarantee", "100% Satisfaction", "Workmanship Warranty"].map((g) => (
            <div key={g} className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span style={{ fontWeight: 600 }}>{g}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <section className="py-16 bg-white relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial */}
            <div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="text-[1.15rem] leading-relaxed italic mb-5">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="text-[0.95rem]" style={{ fontWeight: 700 }}>
                  {testimonial.name}
                </div>
                <div className="text-[0.85rem] text-muted-foreground">
                  {testimonial.service} — {testimonial.location}
                </div>
              </div>
            </div>

            {/* Video Placeholder */}
            <VideoPlaceholder
              title={`See Our ${serviceName} Work`}
              subtitle="Project walkthrough coming soon"
              thumbnailSrc={heroImage}
            />
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#F8FAFC" variant="slant-right" />

      {/* Stacked Promotions */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-gold text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Current Offers
            </span>
            <h2 className="text-[1.75rem] md:text-[2rem] mt-2 mb-3" style={{ fontWeight: 700 }}>
              Stack & Save on Your Project
            </h2>
            <p className="text-muted-foreground text-[0.95rem]">
              Combine multiple offers for maximum savings. All offers can be applied to your free estimate.
            </p>
          </div>
          <StackedPromos serviceSlug={serviceSlug} locationSlug={locationSlug} maxPromos={4} />
        </div>
      </section>

      <AngularDivider from="#F8FAFC" to="#ffffff" variant="arrow-down" />

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Our Guarantees
            </span>
            <h2 className="text-[1.75rem] md:text-[2rem] mt-2 mb-3" style={{ fontWeight: 700 }}>
              Your Peace of Mind, In Writing
            </h2>
          </div>
          <GuaranteeStrip variant="full" />
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#0F172A" variant="sharp" />

      {/* Bottom CTA */}
      <section className="py-16 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] opacity-10" style={{ background: "radial-gradient(ellipse at bottom left, #D4A853 0%, transparent 70%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[1.75rem] md:text-[2.25rem] text-white mb-4" style={{ fontWeight: 700 }}>
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-[1rem] mb-8">
            Get your free, no-obligation estimate. Cristian will personally follow up within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="bg-primary hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-lg text-[1rem] transition-colors inline-flex items-center justify-center gap-2"
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

      <AngularDivider from="#0F172A" to="#1E3A5F" variant="slant-left" />
    </div>
  );
}