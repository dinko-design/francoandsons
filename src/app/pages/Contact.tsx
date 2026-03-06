import { Phone, MapPin, Clock } from "lucide-react";
import { COMPANY } from "../data/siteData";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { BRAND } from "../data/brandConfig";

export function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[110px] lg:pb-[130px] bg-accent overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
              Contact Us
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Let's Talk About Your Project
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              Ready to start your remodel or construction project? Fill out the form below and Cristian will personally follow up within 24 hours to schedule your free in-home consultation.
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

      {/* Contact section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-border p-6 lg:p-10 shadow-sm">
                <LeadCaptureForm
                  title="Request Your Free Estimate"
                  subtitle="Tell us about your project and we'll provide a detailed, no-obligation estimate. Most estimates are delivered within 48 hours of your consultation."
                />
              </div>
            </div>

            {/* Contact info */}
            <div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-border p-6">
                  <h3 className="text-[1rem] mb-5" style={{ fontWeight: 600 }}>Contact Information</h3>
                  <div className="space-y-5">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="flex items-start gap-4 hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[0.85rem]" style={{ fontWeight: 600 }}>Phone</div>
                        <div className="text-muted-foreground text-[0.9rem]">{COMPANY.phone}</div>
                        <div className="text-muted-foreground text-[0.8rem]">Call or text anytime</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[0.85rem]" style={{ fontWeight: 600 }}>Location</div>
                        <div className="text-muted-foreground text-[0.9rem]">{COMPANY.address}</div>
                        <div className="text-muted-foreground text-[0.8rem]">Serving all of Placer County</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[0.85rem]" style={{ fontWeight: 600 }}>Hours</div>
                        <div className="text-muted-foreground text-[0.9rem]">Mon - Sat: 7am - 6pm</div>
                        <div className="text-muted-foreground text-[0.8rem]">Sunday: By appointment</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick response promise */}
                <div className="bg-primary rounded-xl p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <line x1="0" y1="200" x2="200" y2="0" stroke="white" strokeWidth="1" />
                      <line x1="200" y1="200" x2="400" y2="0" stroke="white" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-[1rem] mb-3" style={{ fontWeight: 600 }}>Our Response Promise</h3>
                    <div className="space-y-3 text-white/80 text-[0.875rem]">
                      <p>We respond to all inquiries within 24 hours.</p>
                      <p>Cristian personally reviews every contact form submission.</p>
                      <p>Free in-home consultations typically scheduled within 3-5 business days.</p>
                    </div>
                  </div>
                </div>

                {/* License info */}
                <div className="bg-secondary rounded-xl p-6 border border-primary/10">
                  <h3 className="text-[1rem] mb-3" style={{ fontWeight: 600 }}>Licensed & Insured</h3>
                  <p className="text-muted-foreground text-[0.85rem] leading-relaxed">
                    {COMPANY.license}. Fully insured with general liability and workers' compensation coverage. Proof of insurance available upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider */}

      {/* Service areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[1.25rem] mb-6" style={{ fontWeight: 600 }}>We Serve These Communities</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Lincoln", "Rocklin", "Roseville", "Loomis", "Newcastle", "Auburn", "Folsom", "El Dorado Hills"].map((city) => (
              <span key={city} className="px-5 py-2.5 bg-secondary rounded-lg text-[0.9rem] border border-primary/10">
                {city}, CA
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Angular divider: to footer */}
    </div>
  );
}