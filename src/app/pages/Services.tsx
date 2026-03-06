import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  Phone,
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
} from "lucide-react";
import { SERVICES, COMPANY } from "../data/siteData";
import { BRAND } from "../data/brandConfig";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { TrustBadges } from "../components/shared/TrustBadges";

const { accent, primary, primaryDark } = BRAND.colors;

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="w-6 h-6" />,
  Bath: <Bath className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Grid3X3: <Grid3X3 className="w-6 h-6" />,
  Accessibility: <Accessibility className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Paintbrush: <Paintbrush className="w-6 h-6" />,
  TreePine: <TreePine className="w-6 h-6" />,
};

const primaryServices = SERVICES.filter((s) => s.tier === "primary");
const secondaryServices = SERVICES.filter((s) => s.tier === "secondary");
const additionalServices = SERVICES.filter((s) => s.tier === "additional");

export function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[100px] lg:pb-[120px] bg-accent overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
              Our Services
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Full-Service Remodeling and{" "}
              <span style={{ color: accent }}>Construction</span>
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed max-w-2xl">
              From kitchens and bathrooms to home additions and commercial build-outs, Franco and Sons Construction LLC
              delivers quality craftsmanship with transparent pricing and start-to-finish project management.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {[
                `${COMPANY.yearsExperience}+ years of experience`,
                "Licensed, bonded & insured",
                "Free detailed estimates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: accent }} />
                  <span className="text-white/75 text-[0.875rem]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "80px" }}>
            <polygon points="0,30 720,80 1440,30 1440,80 0,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBadges variant="strip" />

      {/* Primary Services */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Core Services
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              What We Do Best
            </h2>
            <p className="text-muted-foreground text-[1rem] leading-relaxed">
              Our most requested services — backed by decades of hands-on experience and hundreds of satisfied homeowners across Placer County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-xl border border-border p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${accent}15`, color: accent }}
                  >
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-[1.15rem]" style={{ fontWeight: 700 }}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-[0.9rem] leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: accent }} />
                      <span className="text-[0.8rem] text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[0.85rem] group-hover:gap-2.5 transition-all" style={{ color: accent, fontWeight: 600 }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Services */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: BRAND.colors.foreground }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: accent }}>
              Specialized Services
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] text-white mt-2 mb-4" style={{ fontWeight: 700 }}>
              Expert Craftsmanship in Every Detail
            </h2>
            <p className="text-white/60 text-[1rem] leading-relaxed">
              Focused services for specific project needs — each delivered with the same quality and care as our full remodels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group rounded-xl border border-white/10 p-6 hover:border-white/25 transition-all"
                style={{ background: `${primaryDark}` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${accent}15`, color: accent }}
                  >
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-white text-[1.1rem]" style={{ fontWeight: 700 }}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-white/55 text-[0.9rem] leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-[0.85rem] group-hover:gap-2.5 transition-all" style={{ color: accent, fontWeight: 600 }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Additional Services
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              Completing the Picture
            </h2>
            <p className="text-muted-foreground text-[1rem] leading-relaxed">
              From painting to exterior work, we handle the finishing touches that make your project complete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-xl border border-border p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${accent}15`, color: accent }}
                  >
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-[1.1rem]" style={{ fontWeight: 700 }}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-[0.9rem] leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-[0.85rem] group-hover:gap-2.5 transition-all" style={{ color: accent, fontWeight: 600 }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: primaryDark }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: accent }}>
                Ready to Get Started?
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] text-white mt-2 mb-5" style={{ fontWeight: 700 }}>
                Request Your Free Estimate
              </h2>
              <p className="text-white/60 text-[1rem] leading-relaxed mb-8">
                Tell us about your project and we'll provide a detailed, no-obligation estimate.
                Most estimates are delivered within 48 hours of your consultation.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Transparent pricing — no surprises",
                  "Father and son personally on every job",
                  "Licensed, bonded, and insured",
                  "Serving Lincoln, Roseville, Rocklin & beyond",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4.5 h-4.5 shrink-0" style={{ color: accent }} />
                    <span className="text-white/75 text-[0.925rem]">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" style={{ color: accent }} />
                <div>
                  <div className="text-[0.75rem] text-white/60">Call Cristian directly</div>
                  <div className="text-[1rem]" style={{ fontWeight: 700 }}>{COMPANY.phone}</div>
                </div>
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary/10">
              <div className="p-6 lg:p-8">
                <LeadCaptureForm
                  title="Get Your Free Estimate"
                  subtitle="Describe your project and we'll get back to you within one business day."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
