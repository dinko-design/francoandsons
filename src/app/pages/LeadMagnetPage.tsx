import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { ArrowRight, CheckCircle, Download, FileText, Shield, Star, Phone } from "lucide-react";
import { LEAD_MAGNETS } from "../data/promotionsData";
import { COMPANY } from "../data/siteData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AngularDivider } from "../components/shared/AngularDivider";
import { GuaranteeStrip } from "../components/shared/PromotionBanner";

export function LeadMagnetPage() {
  const { slug } = useParams<{ slug: string }>();
  const magnet = LEAD_MAGNETS.find((lm) => lm.slug === slug);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  if (!magnet) {
    return <Navigate to="/blog" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead magnet download:", { magnet: magnet.id, ...formData });
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[120px] bg-accent overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lmgrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="#D4A853" strokeWidth="0.5" opacity="0.06" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="#D4A853" strokeWidth="0.5" opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lmgrid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-5">
                <Download className="w-4 h-4 text-[#60A5FA]" />
                <span className="text-[#60A5FA] text-[0.8rem]" style={{ fontWeight: 700 }}>
                  Free {magnet.format.split("—")[0].trim()} — No Obligation
                </span>
              </div>
              <h1 className="text-[2rem] md:text-[2.5rem] text-white mb-2" style={{ fontWeight: 700, lineHeight: 1.15 }}>
                {magnet.title}
              </h1>
              <p className="text-[#60A5FA] text-[1.1rem] mb-5" style={{ fontWeight: 500 }}>
                {magnet.subtitle}
              </p>
              <p className="text-gray-300 text-[1rem] leading-relaxed mb-8">
                {magnet.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                <div className="text-white/50 text-[0.75rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                  What's inside:
                </div>
                {magnet.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#60A5FA] mt-0.5 shrink-0" />
                    <span className="text-white/80 text-[0.9rem]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-[1.35rem] mb-3" style={{ fontWeight: 700 }}>
                    Check Your Email!
                  </h3>
                  <p className="text-muted-foreground text-[0.95rem] mb-6">{magnet.deliveryMessage}</p>
                  <div className="border-t border-border pt-6">
                    <p className="text-[0.9rem] mb-4" style={{ fontWeight: 600 }}>
                      Ready to discuss your project?
                    </p>
                    <Link
                      to="/get-started"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-[0.95rem] hover:opacity-90 transition-opacity"
                      style={{ fontWeight: 600 }}
                    >
                      Get Free Estimate <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-[1.05rem]" style={{ fontWeight: 700 }}>
                        Download Your Free Guide
                      </div>
                      <div className="text-[0.8rem] text-muted-foreground">{magnet.format}</div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {magnet.formFields.map((field) => (
                      <input
                        key={field}
                        type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                        placeholder={
                          field === "name" ? "Your Name *" :
                          field === "email" ? "Email Address *" :
                          field === "phone" ? "Phone Number" :
                          "City / Zip Code"
                        }
                        required={field === "name" || field === "email"}
                        value={formData[field] || ""}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-input-background border-2 border-border text-[0.95rem] focus:border-primary focus:outline-none transition-colors"
                      />
                    ))}
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-[#1D4ED8] text-white px-6 py-4 rounded-xl text-[1rem] transition-colors flex items-center justify-center gap-2"
                      style={{ fontWeight: 700 }}
                    >
                      <Download className="w-5 h-5" />
                      Download Free Guide
                    </button>
                    <p className="text-[0.75rem] text-center text-muted-foreground">
                      No spam, ever. We'll send your guide and that's it — unless you want to talk about your project.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "80px" }}>
            <polygon points="0,30 0,80 1440,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[1.5rem] mb-2" style={{ fontWeight: 700 }}>
              Why Trust Franco & Sons Construction LLC?
            </h2>
            <p className="text-muted-foreground text-[0.95rem]">
              We wrote this guide because we believe informed homeowners make better decisions — and that's good for everyone.
            </p>
          </div>
          <GuaranteeStrip variant="compact" maxItems={3} />
        </div>
      </section>

      <AngularDivider from="#F8FAFC" to="#2563EB" variant="slant-left" />
    </div>
  );
}