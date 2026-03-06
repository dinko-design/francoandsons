import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PROCESS_STEPS, COMPANY } from "../data/siteData";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { GeometricBackground } from "../components/shared/AngularDivider";
import { SEOContentBlock } from "../components/shared/SEOContentBlock";
import { PAGE_SEO_CONTENT } from "../data/seoData";
import { BRAND } from "../data/brandConfig";

export function ProcessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[110px] lg:pb-[130px] bg-accent overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
              Our Process
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              From Estimate to Completion - Here's How We Work
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              We believe in transparency at every stage. Here's exactly what you can expect when you work with Franco and Sons Construction LLC, from your first call to the final walkthrough.
            </p>
          </div>
        </div>
        {/* Angular shape integrated into hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg
            viewBox="0 0 1440 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: "70px" }}
          >
            <polygon points="0,10 660,70 780,70 1440,10 1440,70 0,70" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-[1.75rem] top-16 bottom-0 w-px bg-primary/20 hidden md:block" />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Step number */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white text-[1.25rem] relative z-10" style={{ fontWeight: 700 }}>
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h2 className="text-[1.35rem] md:text-[1.5rem] mb-3" style={{ fontWeight: 700 }}>
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground text-[1rem] leading-relaxed mb-5">
                      {step.description}
                    </p>
                    <div className="bg-white rounded-xl border border-border p-5 hover:border-primary/20 hover:shadow-sm transition-all">
                      <div className="space-y-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-[0.9rem]">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Angular divider */}

      {/* What sets us apart */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <line x1="0" y1="200" x2="500" y2="0" stroke="white" strokeWidth="1" />
            <line x1="300" y1="200" x2="800" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="700" y1="200" x2="1200" y2="0" stroke="white" strokeWidth="1" />
            <line x1="1100" y1="200" x2="1440" y2="40" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] text-white mb-4" style={{ fontWeight: 700 }}>
            The Franco and Sons Construction LLC Difference
          </h2>
          <p className="text-white/70 text-[1rem] max-w-2xl mx-auto mb-10">
            Unlike big contractors, you'll always know who's working on your project and what's happening next.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Personal Attention", desc: "Carlos and Cristian are on every job. No hand-offs to strangers." },
              { title: "Clear Communication", desc: "Daily updates and always available to answer your questions." },
              { title: "No Surprises", desc: "Detailed estimates upfront. If something changes, you know immediately." },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <h3 className="text-white text-[1rem] mb-2" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-white/70 text-[0.875rem]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Angular divider */}

      {/* SEO Content Block */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContentBlock
            sections={PAGE_SEO_CONTENT.process}
            showRelatedServices
            showServiceAreas
          />
        </div>
      </section>

      {/* Angular divider: to footer */}
    </div>
  );
}