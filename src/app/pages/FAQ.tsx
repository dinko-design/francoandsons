import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { FAQS, COMPANY } from "../data/siteData";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { AngularDivider, BlueprintLines } from "../components/shared/AngularDivider";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categories = [...new Set(FAQS.map((faq) => faq.category))];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[120px] lg:pb-[140px] bg-accent overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="faqgrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faqgrid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              FAQ
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              We believe in transparency. Here are answers to the most common questions homeowners ask before starting a project with Franco & Sons Construction LLC.
            </p>
          </div>
        </div>
        {/* Angular shape integrated into hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: "80px" }}
          >
            <polygon points="0,20 720,80 1440,20 1440,80 0,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border overflow-hidden hover:border-primary/20 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span
                      className="text-[0.7rem] tracking-wider uppercase text-primary bg-primary/10 px-2 py-1 rounded shrink-0"
                      style={{ fontWeight: 600 }}
                    >
                      {faq.category}
                    </span>
                    <h3 className="text-[0.95rem] lg:text-[1rem]" style={{ fontWeight: 600 }}>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ml-4 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground text-[0.9rem] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-primary rounded-xl p-8 lg:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 200" preserveAspectRatio="none">
                <line x1="0" y1="200" x2="300" y2="0" stroke="white" strokeWidth="1" />
                <line x1="500" y1="200" x2="800" y2="0" stroke="white" strokeWidth="1" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-[1.5rem] text-white mb-3" style={{ fontWeight: 700 }}>
                Still Have Questions?
              </h2>
              <p className="text-white/70 text-[0.95rem] max-w-xl mx-auto mb-6">
                We're happy to answer any questions you have about your project. Reach out anytime - no question is too small.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-primary px-8 py-3.5 rounded-lg text-[0.95rem] hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
                  style={{ fontWeight: 600 }}
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="border-2 border-white text-white px-8 py-3.5 rounded-lg text-[0.95rem] hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                  style={{ fontWeight: 600 }}
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider */}
      <AngularDivider from="#F8FAFC" to="#EFF6FF" variant="slant-right" />

      {/* Lead capture */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-border shadow-sm">
            <LeadCaptureForm
              title="Ready to Get Started?"
              subtitle="Request your free estimate today. We'll answer all your questions during the consultation."
            />
          </div>
        </div>
      </section>

      {/* Angular divider: to footer */}
      <AngularDivider from="#EFF6FF" to="#2563EB" variant="slant-left" />
    </div>
  );
}