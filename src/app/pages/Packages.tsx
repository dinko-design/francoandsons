import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Shield,
  Clock,
  Home,
  Sparkles,
  Crown,
  Wrench,
  Calendar,
  FileText,
  Users,
  HardHat,
  BadgeCheck,
} from "lucide-react";
import { COMPANY, TESTIMONIALS, IMAGES } from "../data/siteData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  AngularDivider,
  GeometricBackground,
  BlueprintLines,
} from "../components/shared/AngularDivider";
import { BRAND } from "../data/brandConfig";

export function PackagesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[100px] lg:pb-[120px] bg-accent overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pkggrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.08" />
                <line x1="80" y1="0" x2="0" y2="80" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pkggrid)" />
          </svg>
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
            style={{
              background: `linear-gradient(225deg, ${BRAND.colors.accent} 0%, transparent 60%)`,
              clipPath: "polygon(100% 0, 30% 0, 100% 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              How We Work
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Choose the Right Service Level{" "}
              <span style={{ color: BRAND.colors.accent }}>for Your Project</span>
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              Whether you need a single room refreshed or your entire home transformed,
              we have a clear path forward. Every option starts with a free consultation.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: "60px" }}
          >
            <polygon points="0,10 360,60 720,10 1080,60 1440,10 1440,60 0,60" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* PACKAGE TIERS */}
      {/* ═══════════════════════════════════════════ */}
      <GeometricBackground>
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                Service Packages
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
                Four Ways to Get Started
              </h2>
              <p className="text-muted-foreground text-[1rem]">
                From a free assessment to a full-home transformation — every engagement
                starts with clarity and ends with your satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* TIER 1: Free Consultation */}
              <div className="bg-white rounded-xl border border-border p-6 flex flex-col">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-[0.7rem] mb-3 self-start" style={{ fontWeight: 600 }}>
                  Entry Level
                </div>
                <h3 className="text-[1.1rem] mb-1" style={{ fontWeight: 700 }}>
                  Free Project Assessment
                </h3>
                <div className="text-[1.75rem] text-green-600 mb-3" style={{ fontWeight: 700 }}>
                  $0
                </div>
                <p className="text-muted-foreground text-[0.85rem] mb-5 leading-relaxed flex-1">
                  Not sure where to start? We'll visit your home, discuss your vision,
                  and give you a clear, written estimate — all at no cost.
                </p>
                <div className="space-y-2.5 mb-6">
                  {[
                    "In-home visit by Cristian",
                    "Written scope of work",
                    "Detailed cost estimate",
                    "Material option recommendations",
                    "Timeline projection",
                    "Zero obligation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[0.825rem]">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-[0.75rem] text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Scheduled within 48 hours</span>
                  </div>
                  <Link
                    to="/get-started#free-estimate"
                    className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg text-[0.9rem] hover:bg-green-700 transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Schedule Free Assessment
                  </Link>
                </div>
              </div>

              {/* TIER 2: Single-Room Remodel */}
              <div className="bg-white rounded-xl border-2 border-primary p-6 flex flex-col relative shadow-lg shadow-primary/10">
                <div className="absolute -top-3 left-4 bg-primary text-white px-3 py-0.5 rounded-full text-[0.7rem]" style={{ fontWeight: 600 }}>
                  Most Popular
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[0.7rem] mb-3 self-start" style={{ fontWeight: 600 }}>
                  Core Offer
                </div>
                <h3 className="text-[1.1rem] mb-1" style={{ fontWeight: 700 }}>
                  Complete Room Remodel
                </h3>
                <div className="text-[1.1rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>
                  Custom Quote
                </div>
                <p className="text-muted-foreground text-[0.85rem] mb-5 leading-relaxed flex-1">
                  Full kitchen, bathroom, or room transformation with start-to-finish
                  management by Carlos and Cristian personally.
                </p>
                <div className="space-y-2.5 mb-6">
                  {[
                    "Everything in Free Assessment",
                    "Complete demolition & construction",
                    "All permits & inspections (when required)",
                    "Material sourcing & installation",
                    "Electrical & plumbing upgrades",
                    "Daily progress updates",
                    "Final walkthrough with punch list",
                    "Workmanship warranty",
                    "Post-completion follow-up",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-start gap-2 text-[0.825rem] ${i === 0 ? "text-primary" : ""}`}
                      style={i === 0 ? { fontWeight: 600 } : undefined}
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-[0.75rem] text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Typical: 2–8 weeks depending on scope</span>
                  </div>
                  <Link
                    to="/get-started#free-estimate"
                    className="block text-center bg-primary text-white px-6 py-3 rounded-lg text-[0.9rem] hover:bg-gold-dark transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Get Your Custom Quote
                  </Link>
                </div>
              </div>

              {/* TIER 3: Whole-Home Transformation */}
              <div className="bg-white rounded-xl border border-border p-6 flex flex-col">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                  <Crown className="w-5 h-5" />
                </div>
                <div className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-[0.7rem] mb-3 self-start" style={{ fontWeight: 600 }}>
                  Premium
                </div>
                <h3 className="text-[1.1rem] mb-1" style={{ fontWeight: 700 }}>
                  Whole-Home Transformation
                </h3>
                <div className="text-[1.1rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>
                  Custom Quote
                </div>
                <p className="text-muted-foreground text-[0.85rem] mb-5 leading-relaxed flex-1">
                  Multi-room or whole-home remodel with coordinated design, priority scheduling,
                  and a single point of contact from start to finish.
                </p>
                <div className="space-y-2.5 mb-6">
                  {[
                    "Everything in Complete Remodel",
                    "Multi-room project coordination",
                    "Design consultation included",
                    "Priority scheduling",
                    "Extended workmanship warranty",
                    "Premium material sourcing",
                    "Phased construction planning",
                    "Dedicated project timeline",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-start gap-2 text-[0.825rem] ${i === 0 ? "text-amber-600" : ""}`}
                      style={i === 0 ? { fontWeight: 600 } : undefined}
                    >
                      <CheckCircle className={`w-4 h-4 ${i === 0 ? "text-amber-500" : "text-amber-500"} mt-0.5 shrink-0`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-[0.75rem] text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Typical: 6–16 weeks depending on scope</span>
                  </div>
                  <Link
                    to="/get-started#free-estimate"
                    className="block text-center bg-accent text-white px-6 py-3 rounded-lg text-[0.9rem] hover:bg-[#1E293B] transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Discuss Your Vision
                  </Link>
                </div>
              </div>

              {/* TIER 4: Ongoing / Retainer */}
              <div className="bg-white rounded-xl border border-border p-6 flex flex-col">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <div className="inline-block bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-[0.7rem] mb-3 self-start" style={{ fontWeight: 600 }}>
                  Ongoing
                </div>
                <h3 className="text-[1.1rem] mb-1" style={{ fontWeight: 700 }}>
                  Preferred Client Program
                </h3>
                <div className="text-[1.1rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>
                  By Invitation
                </div>
                <p className="text-muted-foreground text-[0.85rem] mb-5 leading-relaxed flex-1">
                  For homeowners who've completed a project with us and want ongoing
                  support for future improvements, maintenance, and priority service.
                </p>
                <div className="space-y-2.5 mb-6">
                  {[
                    "Priority scheduling for new projects",
                    "Preferred pricing on future work",
                    "Annual home check-in consultation",
                    "First access to seasonal availability",
                    "Referral rewards program",
                    "Direct line to Cristian",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[0.825rem]">
                      <CheckCircle className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-[0.75rem] text-muted-foreground">
                    <Users className="w-3.5 h-3.5" />
                    <span>Available to past clients only</span>
                  </div>
                  <Link
                    to="/contact"
                    className="block text-center border-2 border-violet-500 text-violet-600 px-6 py-3 rounded-lg text-[0.9rem] hover:bg-violet-50 transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Ask About This Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </GeometricBackground>

      <AngularDivider from="#F8FAFC" to="#ffffff" variant="sharp" />

      {/* ═══════════════════════════════════════════ */}
      {/* WHAT'S INCLUDED IN EVERY PROJECT */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Standard With Every Project
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              What You'll Never Pay Extra For
            </h2>
            <p className="text-muted-foreground text-[1rem]">
              Other contractors nickel-and-dime you with add-ons. We include everything
              that matters in every project — no exceptions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: <FileText className="w-5 h-5" />, label: "Detailed written estimate" },
              { icon: <BadgeCheck className="w-5 h-5" />, label: "Permits handled when required" },
              { icon: <HardHat className="w-5 h-5" />, label: "Carlos & Cristian on-site" },
              { icon: <Calendar className="w-5 h-5" />, label: "Daily progress updates" },
              { icon: <Shield className="w-5 h-5" />, label: "Licensed & insured coverage" },
              { icon: <Sparkles className="w-5 h-5" />, label: "Professional daily cleanup" },
              { icon: <CheckCircle className="w-5 h-5" />, label: "Final walkthrough review" },
              { icon: <Star className="w-5 h-5" />, label: "Workmanship warranty" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-background rounded-lg border border-border p-4 hover:border-primary/20 transition-colors"
              >
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  {item.icon}
                </div>
                <span className="text-[0.875rem]" style={{ fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#EFF6FF" variant="slant-left" />

      {/* ═══════════════════════════════════════════ */}
      {/* PRICING PHILOSOPHY */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                Our Pricing Philosophy
              </span>
              <h2 className="text-[1.5rem] md:text-[1.75rem] mt-2 mb-5" style={{ fontWeight: 700 }}>
                Why We Don't Publish Prices (and Why That's Actually Better for You)
              </h2>
              <div className="space-y-4 text-[0.95rem] text-muted-foreground leading-relaxed">
                <p>
                  Cookie-cutter pricing is either so vague it's useless ("kitchens start
                  at $10K!") or so inflated it pads for every possible scenario.
                  Neither serves you.
                </p>
                <p>
                  Instead, we visit your home, understand your specific space, discuss
                  your goals and budget, and produce a detailed estimate where every
                  line is accounted for. You know exactly what you're getting and what
                  it costs — before we pick up a single tool.
                </p>
                <p>
                  That estimate is the real number. Not a "starting at" number. Not an
                  "approximately" number. The real one.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-[1.05rem] mb-4" style={{ fontWeight: 700 }}>
                What Our Estimates Include
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Materials", desc: "Specific products, quantities, and costs" },
                  { label: "Labor", desc: "Hours and rates for every phase of work" },
                  { label: "Permits", desc: "All required permit fees included (when applicable)" },
                  { label: "Demolition & Disposal", desc: "Tear-out and haul-away costs" },
                  { label: "Electrical & Plumbing", desc: "Any required upgrades to support the remodel" },
                  { label: "Cleanup", desc: "Daily cleanup and final project cleaning" },
                  { label: "Timeline", desc: "Expected start date, milestones, and completion" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <span className="text-[0.875rem]" style={{ fontWeight: 600 }}>
                        {item.label}:
                      </span>{" "}
                      <span className="text-[0.85rem] text-muted-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#EFF6FF" to="#ffffff" variant="zigzag" />

      {/* ═══════════════════════════════════════════ */}
      {/* PROOF STRIP */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl border border-primary/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[1.05rem] leading-relaxed mb-6 italic text-muted-foreground">
                  "{TESTIMONIALS[0].quote}"
                </p>
                <div>
                  <div className="text-[0.95rem]" style={{ fontWeight: 600 }}>
                    {TESTIMONIALS[0].name}
                  </div>
                  <div className="text-[0.85rem] text-muted-foreground">
                    {TESTIMONIALS[0].service} — {TESTIMONIALS[0].location}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <ImageWithFallback
                  src={IMAGES.kitchen}
                  alt="Kitchen remodel result"
                  className="w-full aspect-square object-cover"
                />
                <ImageWithFallback
                  src={IMAGES.kitchenCabinets}
                  alt="Custom cabinetry"
                  className="w-full aspect-square object-cover"
                />
                <ImageWithFallback
                  src={IMAGES.kitchenCooktop}
                  alt="Kitchen cooktop area"
                  className="w-full aspect-square object-cover"
                />
                <ImageWithFallback
                  src={IMAGES.carlosCristianKitchen}
                  alt="Carlos and Cristian Franco on-site"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to={BRAND.colors.primaryDark} variant="arrow-down" />

      {/* ═══════════════════════════════════════════ */}
      {/* FINAL CTA */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pkgCtaGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.06" />
                <line x1="80" y1="0" x2="0" y2="80" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pkgCtaGrid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[1.75rem] md:text-[2.25rem] text-white mb-4" style={{ fontWeight: 700 }}>
            Every Great Project Starts with a Free Conversation
          </h2>
          <p className="text-gray-300 text-[1rem] mb-8 leading-relaxed">
            No commitment required. Tell us about your project, get a clear estimate,
            and decide if we're the right fit. It's that simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started#free-estimate"
              className="bg-primary text-white px-8 py-4 rounded-lg text-[1rem] hover:bg-gold-dark transition-colors inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-[1rem] hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            {["Free Consultation", "Detailed Estimates", "No Obligation"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-gray-400 text-[0.8rem]">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AngularDivider from={BRAND.colors.primaryDark} to={BRAND.colors.primary} variant="slant-right" />
    </div>
  );
}