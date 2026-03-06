import { Link } from "react-router";
import { ArrowRight, CheckCircle, Star, Heart, Shield, Users, Target, Quote } from "lucide-react";
import { COMPANY, IMAGES } from "../data/siteData";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { TrustBadges } from "../components/shared/TrustBadges";
import { SEOContentBlock } from "../components/shared/SEOContentBlock";
import { PAGE_SEO_CONTENT } from "../data/seoData";
import { BRAND } from "../data/brandConfig";

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[120px] lg:pb-[140px] bg-accent overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
              About Us
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Meet the Family Behind{" "}
              <span style={{ color: BRAND.colors.accent }}>Franco and Sons Construction LLC</span>
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              We're not a big corporation. We're a father-and-son team with over 30 years of construction experience, treating every home with respect and building relationships that last longer than our projects.
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
            <polygon points="0,30 0,80 1440,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBadges variant="strip" />

      {/* Our Story */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl relative">
                <img
                  src={IMAGES.brandedTrucks}
                  alt="Carlos and Cristian Franco standing with their branded Franco and Sons Construction LLC fleet"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 hidden md:block border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[0.85rem]" style={{ fontWeight: 600 }}>5.0</span>
                </div>
                <div className="text-[0.8rem] text-muted-foreground">Based on Google reviews</div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary/20 hidden lg:block" />
            </div>

            <div>
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                Our Story
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-6" style={{ fontWeight: 700 }}>
                From Father to Son, Quality Runs in the Family
              </h2>
              <div className="space-y-5 text-[0.95rem] text-muted-foreground leading-relaxed">
                <p>
                  Franco and Sons Construction LLC was built on a foundation of family, hard work, and over 30 years of construction experience. What started as Carlos Franco passing down his craft to his son Cristian has grown into a full-service remodeling company that families across Placer County trust with their homes.
                </p>
                <p>
                  Today, Franco and Sons Construction LLC specializes in kitchen remodeling, bathroom remodeling, ADA-accessible bathroom renovations, and home additions. Every project gets the personal touch that only a family business can provide — because Carlos and Cristian are on the job site, not just behind a desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider */}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CARLOS — Full-width cinematic hero treatment           */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[550px] lg:min-h-[650px] overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.carlosInKitchen}
            alt="Carlos Franco, owner — standing in a completed luxury kitchen"
            className="w-full h-full object-cover object-top"
          />
          {/* Cinematic dark-to-blue gradient overlay */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${BRAND.colors.primaryDark}f2, ${BRAND.colors.primaryDark}bf, ${BRAND.colors.primaryDark}4d)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BRAND.colors.primaryDark}e6, transparent, ${BRAND.colors.primaryDark}33)` }} />
          {/* Blue accent glow */}
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-15"
            style={{
              background: `radial-gradient(ellipse at bottom left, ${BRAND.colors.accent} 0%, transparent 70%)`,
            }}
          />
          {/* Angular accent lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute bottom-0 left-0 w-full h-40 opacity-10" viewBox="0 0 1440 160" preserveAspectRatio="none">
              <line x1="0" y1="160" x2="500" y2="0" stroke={BRAND.colors.accent} strokeWidth="2" />
              <line x1="200" y1="160" x2="700" y2="0" stroke={BRAND.colors.accent} strokeWidth="1" />
              <line x1="800" y1="160" x2="1440" y2="40" stroke={BRAND.colors.accent} strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex items-center min-h-[550px] lg:min-h-[650px]">
          <div className="max-w-xl">
            {/* Accent bar */}
            <div className="w-16 h-1 bg-primary mb-6" />
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
              Founder & Master Craftsman
            </span>
            <h2 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-2" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Carlos Franco
            </h2>
            <p className="text-[1.05rem] mb-6" style={{ fontWeight: 500, color: BRAND.colors.accent }}>
              Owner — {COMPANY.yearsExperience}+ Years of Experience
            </p>
            <div className="space-y-4 text-white/85 text-[0.95rem] leading-relaxed mb-8">
              <p>
                Carlos didn't learn construction from a textbook — he learned it the way it sticks: through years of hard work, sweat, and building things with his own hands. With over 30 years in the trade, he's done everything from foundations to finish carpentry, and there's nothing on a job site he hasn't handled.
              </p>
              <p>
                His standard is simple: build it like it's your own home. That mentality shows up in every project — in the way he checks every cut, every seam, every detail. When Carlos is on your project, the quality is guaranteed because he won't leave until it's right.
              </p>
            </div>
            {/* Signature-style traits */}
            <div className="flex flex-wrap gap-3">
              {["Structural expertise", "Finish carpentry", "30+ years hands-on", "On-site daily"].map((trait) => (
                <span
                  key={trait}
                  className="text-[0.8rem] bg-white/10 text-white/90 px-4 py-1.5 rounded-full border border-white/10"
                  style={{ fontWeight: 500 }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider from Carlos dark section */}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* CRISTIAN — Open, modern, blueprint-themed layout       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text - left side */}
            <div className="order-2 lg:order-1">
              {/* Accent bar */}
              <div className="w-16 h-1 bg-primary mb-6" />
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                Second Generation
              </span>
              <h2 className="text-[2rem] md:text-[2.75rem] mt-2 mb-2" style={{ fontWeight: 700, lineHeight: 1.15 }}>
                Cristian Franco
              </h2>
              <p className="text-primary text-[1.05rem] mb-6" style={{ fontWeight: 500 }}>
                Co-Owner & Operations Lead
              </p>

              <div className="space-y-4 text-muted-foreground text-[0.95rem] leading-relaxed mb-8">
                <p>
                  Cristian grew up on job sites. While other kids were on summer break, he was handing his dad tools, learning how to read a tape measure, and watching Carlos turn empty rooms into someone's dream kitchen. Construction isn't just what Cristian does — it's who he is.
                </p>
                <p>
                  Now as co-owner, Cristian brings that generational knowledge together with a modern, client-first approach. He handles every consultation personally, keeps homeowners informed with daily updates, and manages the details so nothing falls through the cracks. His vision is clear: build the kind of company his dad would be proud of — one where every client feels like family.
                </p>
                <p>
                  Working alongside his father isn't just a business arrangement — it's personal. There's a level of trust and accountability that only a father-and-son team can deliver. When Cristian says "we stand behind our work," he means it, because his family name is on every project.
                </p>
              </div>

              {/* Quote callout */}
              <div className="bg-secondary rounded-xl p-6 border border-primary/10 relative">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                <p className="text-[0.95rem] italic leading-relaxed mb-3">
                  "I learned this trade from my dad. Everything I know about quality, about showing up, about doing things the right way — that comes from him. My goal is to take what he built and make it even better for the next generation of homeowners we serve."
                </p>
                <span className="text-[0.85rem] text-primary" style={{ fontWeight: 600 }}>
                  — Cristian Franco
                </span>
              </div>
            </div>

            {/* Photo - right side with unique treatment */}
            <div className="order-1 lg:order-2 relative">
              {/* Background angular shape */}
              <div
                className="absolute -inset-4 lg:-inset-8 bg-primary/5 rounded-2xl hidden lg:block"
                style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 15%)" }}
              />
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl relative">
                  <img
                    src={IMAGES.cristianBlueprints}
                    alt="Cristian Franco reviewing blueprints on-site"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  {/* Subtle blue gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: `linear-gradient(to top, ${BRAND.colors.primaryDark}80, transparent)` }} />
                  {/* Name badge overlaid */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-3 shadow-lg border border-primary/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[0.95rem]" style={{ fontWeight: 700 }}>Cristian Franco</div>
                          <div className="text-[0.75rem] text-muted-foreground">Co-Owner & Operations</div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-[0.7rem] text-muted-foreground uppercase tracking-wider" style={{ fontWeight: 600 }}>2nd Gen</div>
                          <div className="w-8 h-0.5 bg-primary mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Angular accent corners */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-primary/20 hidden lg:block" />
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-primary/20 hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider */}

      {/* Client Consultation Photo + Values */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                Our Values
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-8" style={{ fontWeight: 700 }}>
                What We Stand For
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Heart className="w-5 h-5" />,
                    title: "Family First",
                    description: "We treat your home and family with the same care and respect we'd want for our own. That's the Franco way.",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Integrity Always",
                    description: "Honest estimates, no hidden fees, and transparent communication from start to finish on every project.",
                  },
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: "Quality Craftsmanship",
                    description: "We never cut corners. Every detail matters, from the foundation to the finishing touches.",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Community Commitment",
                    description: "We live and work in Lincoln. Building great relationships with our neighbors is what drives us.",
                  },
                ].map((value) => (
                  <div key={value.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-[1rem] mb-1" style={{ fontWeight: 600 }}>{value.title}</h3>
                      <p className="text-muted-foreground text-[0.875rem] leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={IMAGES.carlosWithClient}
                  alt="Carlos Franco reviewing plans with a homeowner"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary/20 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider */}

      {/* Stats */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <line x1="0" y1="200" x2="400" y2="0" stroke="white" strokeWidth="1" />
            <line x1="200" y1="200" x2="600" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="800" y1="200" x2="1200" y2="0" stroke="white" strokeWidth="1" />
            <line x1="1000" y1="200" x2="1440" y2="0" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: `${COMPANY.yearsExperience}+`, label: "Years of Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "8", label: "Cities Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[2rem] md:text-[2.5rem] text-white" style={{ fontWeight: 700 }}>{stat.number}</div>
                <div className="text-white/70 text-[0.9rem]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Angular divider */}

      {/* Why Hire Us */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[1.75rem] md:text-[2.25rem] mb-8 text-center" style={{ fontWeight: 700 }}>
              Why Homeowners Choose Franco and Sons Construction LLC
            </h2>
            <div className="space-y-5">
              {[
                "Carlos and Cristian personally work on every project - you always know who's in your home.",
                "We provide detailed, written estimates so there are never any surprises on your bill.",
                "We communicate daily with project updates and are always available to answer questions.",
                "Our job sites are kept clean and organized. We respect your home and your family's routine.",
                "When permits are required, we handle the entire process and ensure every project meets or exceeds building codes.",
                "We don't consider a project done until you're 100% satisfied with the result.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 bg-white rounded-lg p-5 border border-border hover:border-primary/20 hover:shadow-sm transition-all">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-[0.95rem]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider */}

      {/* SEO Content Block */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContentBlock
            sections={PAGE_SEO_CONTENT.about}
            showRelatedServices
            showServiceAreas
          />
        </div>
      </section>

      {/* Angular divider: CTA to footer */}

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-border shadow-sm">
            <LeadCaptureForm
              title="Let's Talk About Your Project"
              subtitle="Get a free consultation with Cristian. We'll discuss your vision, answer your questions, and provide a detailed estimate."
            />
          </div>
        </div>
      </section>

      {/* Angular divider: CTA to footer */}
    </div>
  );
}