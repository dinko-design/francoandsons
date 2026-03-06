import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { ArrowRight, CheckCircle, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { SERVICES, COMPANY } from "../data/siteData";
import { BRAND } from "../data/brandConfig";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";

const { accent, primaryDark } = BRAND.colors;

export function SubServicePage() {
  const { slug, subSlug } = useParams<{ slug: string; subSlug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const parentService = SERVICES.find((s) => s.slug === slug);
  if (!parentService || !parentService.subPages) return <Navigate to="/services" replace />;

  const subPage = parentService.subPages.find((sp) => sp.slug === subSlug);
  if (!subPage) return <Navigate to={`/services/${slug}`} replace />;

  const siblings = parentService.subPages.filter((sp) => sp.slug !== subSlug);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[100px] lg:pb-[120px] bg-accent overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 text-[0.8rem] mb-5 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link to={`/services/${parentService.slug}`} className="hover:text-white transition-colors">{parentService.shortTitle}</Link>
              <span>/</span>
              <span className="text-white">{subPage.title}</span>
            </div>

            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              {subPage.heroHeading}
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed max-w-2xl">
              {subPage.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/get-started"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[0.9rem] transition-colors"
                style={{ fontWeight: 700, background: accent, color: primaryDark }}
              >
                Get a Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white border border-white/20 hover:bg-white/10 transition-colors text-[0.9rem]"
              >
                <Phone className="w-4 h-4" style={{ color: accent }} />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "80px" }}>
            <polygon points="0,30 720,80 1440,30 1440,80 0,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {subPage.sections.map((section, i) => (
                <div key={i} className={i > 0 ? "mt-12" : ""}>
                  <h2 className="text-[1.5rem] md:text-[1.75rem] mb-4" style={{ fontWeight: 700 }}>
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground text-[1rem] leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}

              {/* Features */}
              <div className="mt-12 bg-white rounded-xl border border-border p-6 lg:p-8">
                <h3 className="text-[1.25rem] mb-5" style={{ fontWeight: 700 }}>
                  What's Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subPage.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent }} />
                      <span className="text-[0.9rem] text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="mt-12">
                <h3 className="text-[1.25rem] mb-5" style={{ fontWeight: 700 }}>
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {subPage.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-border overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between p-5 text-left"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="text-[0.95rem] pr-4" style={{ fontWeight: 600 }}>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 -mt-1">
                          <p className="text-muted-foreground text-[0.9rem] leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Form */}
              <div className="bg-white rounded-xl border border-border p-5 lg:p-6 shadow-sm sticky top-28">
                <LeadCaptureForm
                  title="Get Your Free Estimate"
                  subtitle={`Tell us about your ${parentService.shortTitle.toLowerCase()} project.`}
                />

                {/* Related sub-pages */}
                {siblings.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-[0.85rem] tracking-wider uppercase mb-4" style={{ fontWeight: 600, color: accent }}>
                      Related {parentService.shortTitle} Services
                    </h4>
                    <div className="space-y-2">
                      {siblings.map((sp) => (
                        <Link
                          key={sp.slug}
                          to={`/services/${parentService.slug}/${sp.slug}`}
                          className="flex items-center gap-2 text-[0.875rem] text-muted-foreground hover:text-foreground transition-colors py-1.5"
                        >
                          <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
                          {sp.title}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to={`/services/${parentService.slug}`}
                      className="flex items-center gap-2 mt-4 text-[0.85rem] transition-colors"
                      style={{ color: accent, fontWeight: 600 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      All {parentService.shortTitle} Services
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: primaryDark }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] text-white mb-4" style={{ fontWeight: 700 }}>
            Ready to Start Your {parentService.shortTitle} Project?
          </h2>
          <p className="text-white/60 text-[1rem] mb-8 max-w-2xl mx-auto">
            Contact Franco and Sons Construction LLC for a free, no-obligation estimate.
            We serve Lincoln, Roseville, Rocklin, and communities throughout Placer County.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[0.9rem] transition-colors"
              style={{ fontWeight: 700, background: accent, color: primaryDark }}
            >
              Get a Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white border border-white/20 hover:bg-white/10 transition-colors text-[0.9rem]"
            >
              <Phone className="w-4 h-4" style={{ color: accent }} />
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
