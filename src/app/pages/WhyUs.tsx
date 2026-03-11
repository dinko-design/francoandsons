import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Minus,
  Star,
  Shield,
  Phone,
  AlertTriangle,
  Users,
  Clock,
  DollarSign,
  MessageSquare,
  FileText,
  BadgeCheck,
  Eye,
  HardHat,
} from "lucide-react";
import { COMPANY, TESTIMONIALS, IMAGES } from "../data/siteData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEOContentBlock } from "../components/shared/SEOContentBlock";
import { PAGE_SEO_CONTENT } from "../data/seoData";
import { BRAND } from "../data/brandConfig";

type ComparisonStatus = "yes" | "no" | "maybe" | "highlight";

interface ComparisonRow {
  feature: string;
  diy: ComparisonStatus;
  bigBox: ComparisonStatus;
  random: ComparisonStatus;
  franco: ComparisonStatus;
  francoNote?: string;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Licensed & insured", diy: "no", bigBox: "yes", random: "maybe", franco: "highlight", francoNote: "Full CA license + liability & workers' comp" },
  { feature: "Father & son personally on every job", diy: "no", bigBox: "no", random: "no", franco: "highlight", francoNote: "Carlos & Cristian — no handoffs" },
  { feature: "Transparent, detailed written estimates", diy: "no", bigBox: "maybe", random: "no", franco: "highlight", francoNote: "Every cost spelled out, no vague allowances" },
  { feature: "Permits handled when required", diy: "no", bigBox: "yes", random: "maybe", franco: "highlight" },
  { feature: "Daily progress updates", diy: "no", bigBox: "no", random: "no", franco: "highlight" },
  { feature: "Direct communication (no middleman)", diy: "yes", bigBox: "no", random: "maybe", franco: "highlight", francoNote: "Cristian's direct cell number" },
  { feature: "Start-to-finish project management", diy: "no", bigBox: "maybe", random: "no", franco: "highlight" },
  { feature: "Workmanship warranty", diy: "no", bigBox: "maybe", random: "no", franco: "highlight" },
  { feature: "Fair, competitive pricing", diy: "yes", bigBox: "no", random: "maybe", franco: "highlight", francoNote: "Quality craftsmanship, fair price" },
  { feature: "Clean job site daily", diy: "maybe", bigBox: "maybe", random: "no", franco: "highlight" },
  { feature: "Won't disappear mid-project", diy: "yes", bigBox: "yes", random: "no", franco: "highlight", francoNote: "Family business — we're not going anywhere" },
  { feature: "30+ years construction experience", diy: "no", bigBox: "maybe", random: "maybe", franco: "highlight" },
];

function StatusIcon({ status }: { status: ComparisonStatus }) {
  if (status === "yes" || status === "highlight") {
    return <CheckCircle className={`w-5 h-5 ${status === "highlight" ? "text-primary" : "text-green-500"}`} />;
  }
  if (status === "no") {
    return <XCircle className="w-5 h-5 text-red-400" />;
  }
  return <Minus className="w-5 h-5 text-amber-400" />;
}

export function WhyUsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[100px] lg:pb-[120px] bg-accent overflow-hidden">

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
              Why Franco and Sons Construction LLC
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Not All Contractors Are Created Equal.{" "}
              <span style={{ color: BRAND.colors.accent }}>Here's the Proof.</span>
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed max-w-2xl">
              You have options. DIY, big-box store contractors, random guys from the
              internet. Here's an honest comparison so you can make the best decision
              for your home and your family.
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
            <polygon points="0,0 1440,30 1440,60 0,60" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* THE 4 OPTIONS — Problem Setup */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[1.75rem] md:text-[2.25rem] mb-4" style={{ fontWeight: 700 }}>
              Your Four Options (and What Actually Happens)
            </h2>
            <p className="text-muted-foreground text-[1rem]">
              Every homeowner considering a remodel faces the same decision. Here's what each option really looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* DIY */}
            <div className="bg-background rounded-xl border border-border p-6">
              <div className="w-11 h-11 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-[1.05rem] mb-3" style={{ fontWeight: 700 }}>
                DIY It Yourself
              </h3>
              <ul className="space-y-2.5">
                {[
                  { text: "Cheapest upfront cost", good: true },
                  { text: "Code violations & failed inspections", good: false },
                  { text: "Months of lost weekends", good: false },
                  { text: "Mistakes cost more to fix than hiring a pro", good: false },
                  { text: "No warranty, no recourse", good: false },
                  { text: "Safety risks (electrical, plumbing, structural)", good: false },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2 text-[0.825rem]">
                    {item.good ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    )}
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Big-box store */}
            <div className="bg-background rounded-xl border border-border p-6">
              <div className="w-11 h-11 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-[1.05rem] mb-3" style={{ fontWeight: 700 }}>
                Big-Box Store Contractor
              </h3>
              <ul className="space-y-2.5">
                {[
                  { text: "Brand name recognition", good: true },
                  { text: "Massive overhead = higher prices", good: false },
                  { text: "You're a number, not a name", good: false },
                  { text: "Revolving door of workers you've never met", good: false },
                  { text: "Cookie-cutter solutions, limited customization", good: false },
                  { text: "Customer service runs through a call center", good: false },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2 text-[0.825rem]">
                    {item.good ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    )}
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Random contractor */}
            <div className="bg-background rounded-xl border border-border p-6">
              <div className="w-11 h-11 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-[1.05rem] mb-3" style={{ fontWeight: 700 }}>
                Random Online Contractor
              </h3>
              <ul className="space-y-2.5">
                {[
                  { text: "Might be affordable", good: true },
                  { text: "Often unlicensed and uninsured", good: false },
                  { text: "Vague verbal estimates that balloon", good: false },
                  { text: "High risk of disappearing mid-project", good: false },
                  { text: "No warranty, no accountability", good: false },
                  { text: "Fake or bought online reviews", good: false },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2 text-[0.825rem]">
                    {item.good ? (
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    )}
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Franco and Sons Construction LLC */}
            <div className="bg-primary/5 rounded-xl border-2 border-primary p-6 relative">
              <div className="absolute -top-3 left-4 bg-primary text-white px-3 py-0.5 rounded-full text-[0.7rem]" style={{ fontWeight: 600 }}>
                Best Choice
              </div>
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-[1.05rem] mb-3" style={{ fontWeight: 700 }}>
                Franco and Sons Construction LLC
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Licensed, insured & code-compliant",
                  "Father & son on every job personally",
                  "Transparent, detailed written estimates",
                  "Daily updates — no communication gaps",
                  "Workmanship warranty included",
                  "30+ years experience, 100+ happy clients",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.825rem]">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════ */}
      {/* DETAILED COMPARISON TABLE */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Side-by-Side
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              The Full Comparison
            </h2>
            <p className="text-muted-foreground text-[1rem]">
              An honest, feature-by-feature comparison of your options.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block bg-white rounded-xl border border-border overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="text-left p-4 text-[0.85rem]" style={{ fontWeight: 600 }}>
                    Feature
                  </th>
                  <th className="text-center p-4 text-[0.85rem] text-muted-foreground" style={{ fontWeight: 600 }}>
                    DIY
                  </th>
                  <th className="text-center p-4 text-[0.85rem] text-muted-foreground" style={{ fontWeight: 600 }}>
                    Big-Box Store
                  </th>
                  <th className="text-center p-4 text-[0.85rem] text-muted-foreground" style={{ fontWeight: 600 }}>
                    Random Contractor
                  </th>
                  <th className="text-center p-4 text-[0.85rem] bg-primary/5 border-l-2 border-primary/20" style={{ fontWeight: 700 }}>
                    <span className="text-primary">Franco and Sons Construction LLC</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? "" : "bg-background/50"}>
                    <td className="p-4 text-[0.875rem]" style={{ fontWeight: 500 }}>
                      {row.feature}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.diy} />
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.bigBox} />
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        <StatusIcon status={row.random} />
                      </div>
                    </td>
                    <td className="p-4 text-center bg-primary/5 border-l-2 border-primary/20">
                      <div className="flex flex-col items-center gap-1">
                        <StatusIcon status={row.franco} />
                        {row.francoNote && (
                          <span className="text-[0.7rem] text-primary" style={{ fontWeight: 500 }}>
                            {row.francoNote}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-3">
            {comparisonData.map((row) => (
              <div key={row.feature} className="bg-white rounded-lg border border-border p-4">
                <div className="text-[0.9rem] mb-3" style={{ fontWeight: 600 }}>
                  {row.feature}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "DIY", status: row.diy },
                    { label: "Big-Box", status: row.bigBox },
                    { label: "Random", status: row.random },
                    { label: "Franco", status: row.franco },
                  ].map((col) => (
                    <div
                      key={col.label}
                      className={`text-center py-2 rounded ${
                        col.label === "Franco" ? "bg-primary/5" : "bg-background"
                      }`}
                    >
                      <div className="text-[0.65rem] text-muted-foreground mb-1" style={{ fontWeight: 500 }}>
                        {col.label}
                      </div>
                      <div className="flex justify-center">
                        <StatusIcon status={col.status} />
                      </div>
                    </div>
                  ))}
                </div>
                {row.francoNote && (
                  <div className="mt-2 text-[0.75rem] text-primary" style={{ fontWeight: 500 }}>
                    {row.francoNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════ */}
      {/* RISK REDUCTION PILLARS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              How We Reduce Your Risk
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              Five Ways We Protect You
            </h2>
            <p className="text-muted-foreground text-[1rem]">
              We know you're putting your home and your money on the line. Here's how
              we make sure that trust is never misplaced.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: <FileText className="w-5 h-5" />,
                  title: "Written, Detailed Estimates",
                  desc: "No verbal \"about\" numbers. Every cost is documented. What you approve is what you pay.",
                },
                {
                  icon: <BadgeCheck className="w-5 h-5" />,
                  title: "Licensed & Fully Insured",
                  desc: "CA General Contractor license, general liability insurance, and workers' compensation. Your home is protected if anything happens.",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "Owners on Every Job",
                  desc: "No anonymous subcontractor crews. Carlos and Cristian are the same people from estimate to final walkthrough.",
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  title: "Daily Communication",
                  desc: "You'll get a progress update every working day. If a question comes up, Cristian's cell phone is one text away.",
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Workmanship Guarantee",
                  desc: "If something we built doesn't hold up, we come back and make it right. No charge, no argument.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[0.95rem] mb-1" style={{ fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-[0.875rem] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={IMAGES.carlosCristianKitchen}
                  alt="Carlos and Cristian Franco measuring and reviewing plans during a kitchen remodel"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-primary/20 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════ */}
      {/* SOCIAL PROOF */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Proof
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              What Homeowners Actually Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <div key={t.name} className="bg-white rounded-xl border border-border p-6">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-[0.9rem]" style={{ fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div className="text-[0.8rem] text-muted-foreground">
                    {t.service} — {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/reviews"
              className="text-primary text-[0.9rem] inline-flex items-center gap-1 hover:gap-2 transition-all"
              style={{ fontWeight: 600 }}
            >
              See All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* SEO Content Block */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContentBlock
            sections={PAGE_SEO_CONTENT["why-us"]}
            showRelatedServices
            showServiceAreas
          />
        </div>
      </section>


      {/* ═══════════════════════════════════════════ */}
      {/* FINAL CTA */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-accent relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[1.75rem] md:text-[2.25rem] text-white mb-4" style={{ fontWeight: 700 }}>
            Ready to Work with a Contractor You Can Trust?
          </h2>
          <p className="text-gray-300 text-[1rem] mb-8 leading-relaxed">
            Get a free, no-obligation estimate from a licensed father-son team that
            has been building trust in Placer County for over {COMPANY.yearsExperience} years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="bg-primary text-white px-8 py-4 rounded-lg text-[1rem] hover:bg-gold-dark transition-colors inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              Get Your Free Estimate
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
        </div>
      </section>

    </div>
  );
}