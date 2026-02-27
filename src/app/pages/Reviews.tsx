import { Link } from "react-router";
import { Star, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS, COMPANY } from "../data/siteData";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { AngularDivider, BlueprintLines } from "../components/shared/AngularDivider";

export function ReviewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[120px] lg:pb-[140px] bg-accent overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="reviewgrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#reviewgrid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Reviews & Testimonials
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              What Our Clients Say About Working With Us
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              Our reputation is our most valuable asset. Read what homeowners throughout Placer County have to say about their experience with Franco & Sons Construction LLC.
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
            <polygon points="0,30 0,80 1440,80" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <div className="text-[3rem] text-primary" style={{ fontWeight: 700 }}>5.0</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-muted-foreground text-[0.9rem]">Overall Rating</div>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-[1.75rem]" style={{ fontWeight: 700 }}>100+</div>
                <div className="text-muted-foreground text-[0.85rem]">Happy Clients</div>
              </div>
              <div>
                <div className="text-[1.75rem]" style={{ fontWeight: 700 }}>{COMPANY.yearsExperience}+</div>
                <div className="text-muted-foreground text-[0.85rem]">Years of Experience</div>
              </div>
              <div>
                <div className="text-[1.75rem]" style={{ fontWeight: 700 }}>100%</div>
                <div className="text-muted-foreground text-[0.85rem]">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider */}
      <AngularDivider from="#ffffff" to="#F8FAFC" variant="slant-left" />

      {/* Reviews */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {TESTIMONIALS.map((t, index) => (
              <div key={t.name} className="bg-white rounded-xl border border-border p-6 lg:p-8 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[1rem]" style={{ fontWeight: 600 }}>{t.name}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-muted-foreground text-[0.8rem]">
                      {t.service} | {t.location}
                    </div>
                  </div>
                </div>
                <p className="text-[0.95rem] text-muted-foreground leading-relaxed italic pl-14">
                  "{t.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Video reviews CTA */}
          <div className="mt-16 bg-secondary rounded-xl p-8 lg:p-10 text-center border border-primary/10">
            <h2 className="text-[1.5rem] mb-3" style={{ fontWeight: 700 }}>
              Video Testimonials Coming Soon
            </h2>
            <p className="text-muted-foreground text-[0.95rem] max-w-xl mx-auto mb-6">
              We're collecting video reviews from our happy clients. Check back soon to see and hear directly from homeowners who have worked with Franco & Sons Construction LLC.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg text-[0.95rem] hover:bg-[#1D4ED8] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Share Your Experience <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Angular divider */}
      <AngularDivider from="#F8FAFC" to="#ffffff" variant="double" />

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-xl p-8 lg:p-10 border border-primary/10">
            <LeadCaptureForm
              title="Join Our Happy Clients"
              subtitle="Ready to experience the Franco & Sons Construction LLC difference? Get your free estimate today."
            />
          </div>
        </div>
      </section>

      {/* Angular divider: to footer */}
      <AngularDivider from="#ffffff" to="#1E3A5F" variant="slant-left" />
    </div>
  );
}