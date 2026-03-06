import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Star,
  Shield,
  Clock,
  Users,
  Phone,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  FileText,
  HardHat,
  Handshake,
  BadgeCheck,
  MessageSquare,
  Lock,
  DollarSign,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { COMPANY, IMAGES, TESTIMONIALS } from "../data/siteData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import {
  AngularDivider,
  BlueprintLines,
  GeometricBackground,
} from "../components/shared/AngularDivider";
import { MultiStepForm } from "../components/shared/MultiStepForm";
import { StackedPromos, GuaranteeStrip } from "../components/shared/PromotionBanner";
import { VideoPlaceholder } from "../components/shared/VideoPlaceholder";
import { TrustBadges } from "../components/shared/TrustBadges";
import { BRAND } from "../data/brandConfig";

const conversionFaqs = [
  {
    q: "What if the project goes over budget?",
    a: "Our detailed estimates cover every material, labor hour, and anticipated cost. We don't use vague \"allowances\" that balloon later. If something unexpected comes up (like hidden water damage behind a wall), we stop, show you, discuss options, and get your approval before any additional work. No surprises.",
  },
  {
    q: "How do I know you won't disappear mid-project?",
    a: "We're a family business rooted in Lincoln — we're not going anywhere. Carlos and Cristian Franco work on every single project personally. We provide daily progress updates, and you'll have Cristian's direct cell number. Our reputation is everything to us.",
  },
  {
    q: "I got a cheaper quote from someone else. Why should I choose you?",
    a: "The cheapest bid almost always costs more in the end. Unlicensed contractors skip permits, use inferior materials, and cut corners you won't see until problems appear. We're licensed, insured, and our estimates include everything — materials, labor, cleanup. Compare apples to apples, and you'll see the value.",
  },
  {
    q: "How long will a kitchen or bathroom remodel take?",
    a: "A typical bathroom remodel takes 2-4 weeks. A kitchen remodel runs 4-8 weeks depending on scope. We provide a specific timeline in your estimate and keep you updated daily. We don't start your project and then disappear to work on three other jobs — you get our full attention.",
  },
  {
    q: "What if I don't know exactly what I want yet?",
    a: "That's perfectly fine — most homeowners don't. The free consultation exists for exactly this reason. Cristian will walk through your space, ask about how you use it, discuss what's bothering you about it, and suggest options you might not have considered. No design degree required.",
  },
  {
    q: "Do I need to move out during the remodel?",
    a: "Usually not. We work in contained areas, clean up daily, and minimize disruption. For kitchen remodels, we'll help you set up a temporary kitchen area. We'll discuss the specifics for your project during planning so you know exactly what to expect.",
  },
  {
    q: "What's your warranty?",
    a: "We stand behind every project with a workmanship warranty. If something we built doesn't hold up, we come back and make it right — no argument, no cost. Many of our materials also carry manufacturer warranties that we'll walk you through.",
  },
  {
    q: "Why don't you list prices on your website?",
    a: "Because every home is different and cookie-cutter pricing would be dishonest. A bathroom remodel in a 1980s home with outdated plumbing is a different project than one in a 2015 home. We provide detailed written estimates after seeing your actual space — so the number you get is the real number.",
  },
];

export function GetStartedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* ═══════════════════════════════════════════ */}
      {/* HERO — Clear promise, not generic */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative min-h-[550px] lg:min-h-[650px] flex items-center pb-[80px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.kitchen}
            alt="Kitchen remodel by Franco & Sons Construction LLC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${BRAND.colors.primaryDark}f2, ${BRAND.colors.primaryDark}cc, ${BRAND.colors.primaryDark}80)` }} />
          <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: `linear-gradient(to top, ${BRAND.colors.primaryDark}cc, transparent)` }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute bottom-0 left-0 w-full h-40 opacity-10"
              viewBox="0 0 1440 160"
              preserveAspectRatio="none"
            >
              <line x1="0" y1="160" x2="500" y2="0" stroke={BRAND.colors.accent} strokeWidth="2" />
              <line x1="200" y1="160" x2="700" y2="0" stroke={BRAND.colors.accent} strokeWidth="1" />
              <line x1="800" y1="160" x2="1440" y2="40" stroke={BRAND.colors.accent} strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4" style={{ color: BRAND.colors.accent }} />
              <span className="text-[0.8rem]" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
                Licensed & Insured — {COMPANY.yearsExperience}+ Years of Experience
              </span>
            </div>
            <h1
              className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Stop Dreading Your Remodel.{" "}
              <span style={{ color: BRAND.colors.accent }}>Start Enjoying It.</span>
            </h1>
            <p className="text-white/80 text-[1.1rem] md:text-[1.2rem] mb-4 leading-relaxed max-w-xl">
              Get a transparent, detailed estimate from a father-son team that
              personally works every job — no subcontractor roulette, no budget
              surprises, no disappearing acts.
            </p>
            <p className="text-white/60 text-[0.95rem] mb-8">
              Serving Lincoln, Roseville, Rocklin & Placer County homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#free-estimate"
                className="bg-primary text-white px-8 py-4 rounded-lg text-[1rem] hover:bg-gold-dark transition-colors inline-flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                Get Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-[1rem] hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
            </div>
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/70 text-[0.85rem]">
                5.0 Rating from 100+ homeowners
              </span>
            </div>
          </div>
        </div>

        {/* Angular shape */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: "80px" }}
          >
            <polygon points="0,20 720,80 1440,20 1440,80 0,80" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBadges variant="strip" />

      {/* ═══════════════════════════════════════════ */}
      {/* WHO THIS IS FOR / NOT FOR */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[1.75rem] md:text-[2.25rem] mb-4" style={{ fontWeight: 700 }}>
              This Is For You If...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* FOR */}
            <div className="bg-green-50 rounded-xl border border-green-200 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-[1.15rem] text-green-800" style={{ fontWeight: 700 }}>
                  We're a Great Fit
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "You want to remodel but you're nervous about hiring the wrong contractor",
                  "You want one team managing everything — not coordinating 5 different subs yourself",
                  "You care about quality craftsmanship, not just the cheapest price",
                  "You want to know exactly what you're paying for before work begins",
                  "You're a homeowner in the Lincoln, Roseville, or Rocklin area",
                  "You value clear communication and no-surprises project management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-[0.9rem] text-green-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT FOR */}
            <div className="bg-red-50 rounded-xl border border-red-200 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-5">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-[1.15rem] text-red-800" style={{ fontWeight: 700 }}>
                  We're Probably Not the Right Fit
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "You're only looking for the absolute lowest price regardless of quality",
                  "You want to manage the project yourself and just need day labor",
                  "You need a quick patch job, not a proper remodel done to code",
                  "You want to skip permits on structural work to save money",
                  "You're looking for a large commercial general contractor",
                  "You need work done outside the Placer County / Sacramento area",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                    <span className="text-[0.9rem] text-red-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#F8FAFC" variant="slant-right" />

      {/* ═══════════════════════════════════════════ */}
      {/* PROBLEM AGITATION */}
      {/* ═══════════════════════════════════════════ */}
      <GeometricBackground>
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span
                className="text-primary text-[0.85rem] tracking-wider uppercase"
                style={{ fontWeight: 600 }}
              >
                The Real Problem
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
                Why Most Homeowners Put Off Remodeling for Years
              </h2>
              <p className="text-muted-foreground text-[1rem] leading-relaxed">
                It's not that you don't want a better kitchen or bathroom. It's that
                hiring a contractor feels like gambling with your home and your savings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <AlertTriangle className="w-6 h-6" />,
                  title: "Horror Stories Everywhere",
                  desc: "Your neighbor's contractor disappeared 3 weeks into the job. Your coworker's \"2-week project\" took 4 months. You've heard enough nightmares to make you never want to start.",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Fear of Budget Blowouts",
                  desc: "\"It'll be about $15K\" turns into $28K with \"unforeseen issues\" and mysterious change orders. Vague estimates are designed to get the job, not give you the truth.",
                },
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Strangers in Your Home",
                  desc: "You meet the salesman, but random workers show up. Different faces every week. Nobody seems to know the plan. You don't feel safe leaving for work.",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Timeline Chaos",
                  desc: "Work starts strong, then they vanish for days because they're juggling 6 other projects. Your kitchen is torn apart and you're eating takeout for 3 months.",
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Communication Black Holes",
                  desc: "You text. You call. Nothing. Then a week later: \"Hey, sorry, been busy.\" You're left wondering what's happening in your own home.",
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "No Accountability",
                  desc: "No license displayed. No insurance proof. No written warranty. If something goes wrong in 6 months, good luck tracking them down.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-border p-6 hover:border-red-200 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[1rem] mb-2" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[0.875rem] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-[1.1rem] max-w-2xl mx-auto" style={{ fontWeight: 500 }}>
                You shouldn't have to feel this way about improving your own home.{" "}
                <span className="text-primary" style={{ fontWeight: 600 }}>
                  There's a better way.
                </span>
              </p>
            </div>
          </div>
        </section>
      </GeometricBackground>

      <AngularDivider from="#F8FAFC" to="#ffffff" variant="arrow-down" />

      {/* ═══════════════════════════════════════════ */}
      {/* SOLUTION — The Franco & Sons Construction LLC Process */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              How It Works
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              Our Start-to-Finish Promise
            </h2>
            <p className="text-muted-foreground text-[1rem] leading-relaxed">
              From the first phone call to the final walkthrough, you deal with Carlos
              and Cristian Franco — not a revolving door of strangers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: 1,
                icon: <Phone className="w-5 h-5" />,
                title: "You Call or Request a Quote",
                desc: "Cristian picks up. No call center. No sales department. You talk to the person who will actually manage your project.",
              },
              {
                step: 2,
                icon: <Eye className="w-5 h-5" />,
                title: "Free In-Home Consultation",
                desc: "We visit your home, listen to your vision, assess the space, and answer every question. Zero pressure. Zero obligation.",
              },
              {
                step: 3,
                icon: <FileText className="w-5 h-5" />,
                title: "Detailed Written Estimate",
                desc: "Every cost spelled out — materials, labor, timeline. The number you see is the number you pay.",
              },
              {
                step: 4,
                icon: <HardHat className="w-5 h-5" />,
                title: "We Build It Right",
                desc: "Carlos and Cristian on-site daily. Daily progress updates. Clean job site. On-schedule work. No mysteries.",
              },
              {
                step: 5,
                icon: <Handshake className="w-5 h-5" />,
                title: "Final Walkthrough",
                desc: "We walk every detail together. If anything isn't perfect, we fix it before we call it done. Your satisfaction, guaranteed.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-[0.7rem]"
                    style={{ fontWeight: 700 }}
                  >
                    {item.step}
                  </div>
                </div>
                <h3 className="text-[0.95rem] mb-2" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-[0.825rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to={BRAND.colors.primaryDark} variant="slant-left" />

      {/* ═══════════════════════════════════════════ */}
      {/* WHAT MAKES US DIFFERENT */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="offergrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.08" />
                <line x1="80" y1="0" x2="0" y2="80" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#offergrid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                The Franco & Sons Construction LLC Difference
              </span>
              <h2
                className="text-[1.75rem] md:text-[2.25rem] text-white mt-2 mb-6"
                style={{ fontWeight: 700 }}
              >
                You'll Always Know Who's in Your Home
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Father & Son on Every Job",
                    desc: "Carlos and Cristian Franco work on your project personally. You won't meet a salesman and then get handed off to workers you've never seen.",
                  },
                  {
                    icon: <FileText className="w-5 h-5" />,
                    title: "Transparent, Detailed Estimates",
                    desc: "Every material, every labor hour — spelled out in writing. No \"allowances\" that magically double. No change-order traps.",
                  },
                  {
                    icon: <MessageSquare className="w-5 h-5" />,
                    title: "Daily Progress Updates",
                    desc: "You'll hear from us every single day work is happening. Photos, updates, and next steps. You'll never wonder what's going on in your own home.",
                  },
                  {
                    icon: <BadgeCheck className="w-5 h-5" />,
                    title: "Licensed, Insured & Code-Compliant",
                    desc: "We carry full liability and workers' comp insurance, and we pull permits when your project requires them. Your home is protected. Period.",
                  },
                  {
                    icon: <Calendar className="w-5 h-5" />,
                    title: "We Finish What We Start",
                    desc: "We don't juggle 10 projects at once. Your project gets our full attention from start to finish, on the timeline we promised.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-[0.95rem] mb-1" style={{ fontWeight: 600 }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-[0.875rem] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={IMAGES.carlosOnSite}
                  alt="Carlos Franco on the job site"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: `linear-gradient(to top, ${BRAND.colors.primaryDark}cc, transparent)` }} />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary text-white p-5 rounded-xl shadow-lg hidden md:block">
                <div className="text-[2rem]" style={{ fontWeight: 700 }}>
                  {COMPANY.yearsExperience}+
                </div>
                <div className="text-[0.8rem] text-white/80">Years of Experience</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-primary/30 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from={BRAND.colors.primaryDark} to="#F8FAFC" variant="slant-right" />

      {/* ═══════════════════════════════════════════ */}
      {/* DELIVERABLES — What You Get */}
      {/* ═══════════════════════════════════════════ */}
      <GeometricBackground>
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                What's Included
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
                Every Remodel Includes
              </h2>
              <p className="text-muted-foreground text-[1rem]">
                No nickel-and-diming. No surprise add-ons. Here's what comes standard
                with every Franco & Sons Construction LLC project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { label: "Free in-home consultation & project assessment", included: true },
                { label: "Detailed written estimate", included: true },
                { label: "Material selection guidance & sourcing", included: true },
                { label: "Permit coordination when required", included: true },
                { label: "Start-to-finish project management", included: true },
                { label: "Carlos & Cristian personally on-site", included: true },
                { label: "Daily progress updates with photos", included: true },
                { label: "Professional cleanup at end of every workday", included: true },
                { label: "Final walkthrough with punch list", included: true },
                { label: "Workmanship warranty on all work", included: true },
                { label: "Post-completion follow-up", included: true },
                { label: "Licensed & insured protection", included: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 bg-white rounded-lg border border-border p-4 hover:border-primary/20 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-[0.9rem]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </GeometricBackground>

      <AngularDivider from="#F8FAFC" to="#ffffff" variant="zigzag" />

      {/* ═══════════════════════════════════════════ */}
      {/* PROOF — Results + Testimonials */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Real Results
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              Don't Take Our Word for It
            </h2>
            <p className="text-muted-foreground text-[1rem]">
              Here's what homeowners in your area say after working with Franco & Sons Construction LLC.
            </p>
          </div>

          {/* Featured project */}
          <div className="bg-background rounded-2xl border border-border overflow-hidden mb-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="grid grid-cols-2 gap-1">
                <div className="col-span-2">
                  <ImageWithFallback
                    src={IMAGES.kitchen}
                    alt="Steven's kitchen remodel — island view"
                    className="w-full aspect-[16/9] object-cover"
                  />
                </div>
                <ImageWithFallback
                  src={IMAGES.kitchenOpenConcept}
                  alt="Open-concept cherry cabinet kitchen remodel"
                  className="w-full aspect-[4/3] object-cover"
                />
                <ImageWithFallback
                  src={IMAGES.kitchenIslandClose}
                  alt="Cherry cabinetry island with quartz countertops"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[1rem] leading-relaxed mb-5 italic text-muted-foreground">
                  "Franco & Sons Construction LLC completely transformed our cramped kitchen into a
                  bright, spacious, and functional space we absolutely love. They
                  removed the false ceiling, moved walls, and opened up the entire
                  layout. The craftsmanship and attention to detail exceeded our
                  expectations."
                </p>
                <div>
                  <div className="text-[0.95rem]" style={{ fontWeight: 600 }}>
                    Steven
                  </div>
                  <div className="text-[0.8rem] text-muted-foreground">
                    Kitchen Remodel — Roseville, CA
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-3">
                    {["Full layout reconfiguration", "Custom cabinetry to ceiling", "Granite countertops", "New flooring"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-[0.75rem] bg-primary/10 text-primary px-3 py-1 rounded-full"
                          style={{ fontWeight: 500 }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.slice(1, 4).map((t) => (
              <div
                key={t.name}
                className="bg-background rounded-xl border border-border p-6"
              >
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-[0.85rem]" style={{ fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div className="text-[0.75rem] text-muted-foreground">
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
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#EFF6FF" variant="slant-right" />

      {/* ═══════════════════════════════════════════ */}
      {/* PRICING FRAMING */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Investment
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              Honest Pricing. No Games.
            </h2>
            <p className="text-muted-foreground text-[1rem] leading-relaxed">
              We don't publish cookie-cutter prices because every home is different.
              But here's what you can expect from working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free Consultation */}
            <div className="bg-white rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-[1.05rem] mb-2" style={{ fontWeight: 700 }}>
                Project Consultation
              </h3>
              <div className="text-[2rem] text-primary mb-3" style={{ fontWeight: 700 }}>
                Free
              </div>
              <p className="text-muted-foreground text-[0.85rem] mb-5 leading-relaxed">
                In-home assessment, scope discussion, and written estimate — at no cost
                and no obligation.
              </p>
              <ul className="text-left space-y-2 mb-6">
                {[
                  "In-person home visit",
                  "Written scope of work",
                  "Detailed cost estimate",
                  "Material recommendations",
                  "Timeline projection",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.85rem]">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#free-estimate"
                className="block bg-primary text-white px-6 py-3 rounded-lg text-[0.9rem] hover:bg-gold-dark transition-colors"
                style={{ fontWeight: 600 }}
              >
                Request Free Consultation
              </a>
            </div>

            {/* Core Remodel */}
            <div className="bg-white rounded-xl border-2 border-primary p-6 text-center relative shadow-lg shadow-primary/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[0.75rem]" style={{ fontWeight: 600 }}>
                Most Popular
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="text-[1.05rem] mb-2" style={{ fontWeight: 700 }}>
                Complete Remodel
              </h3>
              <div className="text-[1.1rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>
                Custom Quote
              </div>
              <p className="text-muted-foreground text-[0.85rem] mb-5 leading-relaxed">
                Full kitchen, bathroom, or room remodel with start-to-finish project
                management by Carlos and Cristian.
              </p>
              <ul className="text-left space-y-2 mb-6">
                {[
                  "Everything in Consultation, plus:",
                  "Complete demolition & build-out",
                  "All permits & inspections (when required)",
                  "Material sourcing & installation",
                  "Electrical & plumbing upgrades",
                  "Daily progress updates",
                  "Final walkthrough guarantee",
                  "Workmanship warranty",
                ].map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-[0.85rem] ${i === 0 ? "text-primary" : ""}`}
                    style={i === 0 ? { fontWeight: 600 } : undefined}
                  >
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#free-estimate"
                className="block bg-primary text-white px-6 py-3 rounded-lg text-[0.9rem] hover:bg-gold-dark transition-colors"
                style={{ fontWeight: 600 }}
              >
                Get Your Custom Quote
              </a>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-[1.05rem] mb-2" style={{ fontWeight: 700 }}>
                Whole-Home Transformation
              </h3>
              <div className="text-[1.1rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>
                Custom Quote
              </div>
              <p className="text-muted-foreground text-[0.85rem] mb-5 leading-relaxed">
                Multi-room remodel with coordinated design, priority scheduling, and
                comprehensive project management.
              </p>
              <ul className="text-left space-y-2 mb-6">
                {[
                  "Everything in Complete Remodel, plus:",
                  "Multi-room coordination",
                  "Design consultation included",
                  "Priority scheduling",
                  "Extended workmanship warranty",
                  "Premium material selection",
                  "Dedicated project timeline",
                ].map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-[0.85rem] ${i === 0 ? "text-primary" : ""}`}
                    style={i === 0 ? { fontWeight: 600 } : undefined}
                  >
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#free-estimate"
                className="block bg-accent text-white px-6 py-3 rounded-lg text-[0.9rem] hover:bg-[#1E293B] transition-colors"
                style={{ fontWeight: 600 }}
              >
                Discuss Your Vision
              </a>
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#EFF6FF" to="#ffffff" variant="sharp" />

      {/* ═══════════════════════════════════════════ */}
      {/* GUARANTEE / RISK REVERSAL */}
      {/* ═══════════════════��═══════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl border border-primary/15 p-8 lg:p-12 text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2rem] mb-4" style={{ fontWeight: 700 }}>
              Our Zero-Risk Promise
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-[1rem] text-muted-foreground leading-relaxed">
              <p>
                <span style={{ fontWeight: 600 }} className="text-foreground">
                  The consultation is free.
                </span>{" "}
                We visit your home, listen to your ideas, assess the space, and deliver
                a detailed estimate — with zero cost and zero obligation. If you decide
                we're not the right fit, no hard feelings.
              </p>
              <p>
                <span style={{ fontWeight: 600 }} className="text-foreground">
                  The estimate is transparent.
                </span>{" "}
                Every line item is spelled out. If you get a lower bid from a licensed,
                insured contractor with comparable materials and scope, we want to know
                — because we stand behind our pricing.
              </p>
              <p>
                <span style={{ fontWeight: 600 }} className="text-foreground">
                  The work is guaranteed.
                </span>{" "}
                If something we build doesn't hold up, we come back and fix it — no
                charge, no argument, no fine print. We're a family business and our name
                is on every project.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                "Free Consultation",
                "Detailed Estimates",
                "Workmanship Warranty",
                "Licensed & Insured",
                "No Hidden Fees",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 bg-white border border-primary/20 rounded-full px-4 py-2 text-[0.8rem]"
                  style={{ fontWeight: 500 }}
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#F8FAFC" variant="slant-left" />

      {/* ═══════════════════════════════════════════ */}
      {/* FAQ — Objection Removal */}
      {/* ═══════════════════════════════════════════ */}
      <GeometricBackground>
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                Common Questions
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
                Still on the Fence? We Get It.
              </h2>
              <p className="text-muted-foreground text-[1rem]">
                Here are the questions homeowners ask most before they decide to work with us.
              </p>
            </div>

            <div className="space-y-3">
              {conversionFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-border overflow-hidden hover:border-primary/20 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-[0.95rem] pr-4" style={{ fontWeight: 600 }}>
                      {faq.q}
                    </span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground text-[0.9rem] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </GeometricBackground>

      <AngularDivider from="#F8FAFC" to={BRAND.colors.primaryDark} variant="arrow-down" />

      {/* ═══════════════════════════════════════════ */}
      {/* FINAL CTA — Form */}
      {/* ═══════════════════════════════════════════ */}
      <section id="free-estimate" className="py-16 lg:py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ctaOffergrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.06" />
                <line x1="80" y1="0" x2="0" y2="80" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaOffergrid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-[1.75rem] md:text-[2.25rem] text-white mb-4"
                style={{ fontWeight: 700 }}
              >
                Your Remodel Starts with a Conversation
              </h2>
              <p className="text-gray-300 text-[1rem] mb-6 leading-relaxed">
                Tell us about your project and Cristian will reach out within 24 hours
                to schedule your free in-home consultation. No sales pitch. No
                obligation. Just honest answers and a clear estimate.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "100% free consultation — no cost, no commitment",
                  "Cristian personally visits your home",
                  "Written, detailed estimate within days",
                  "No pressure — if we're not the right fit, we'll tell you",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-200 text-[0.95rem]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-white text-[0.95rem]" style={{ fontWeight: 600 }}>
                    Prefer to call?
                  </span>
                </div>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-[1.5rem] text-primary hover:text-gold transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  {COMPANY.phone}
                </a>
                <p className="text-gray-400 text-[0.8rem] mt-1">
                  Cristian answers personally. Mon–Sat.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-2xl">
              <MultiStepForm source="get-started" variant="light" />
            </div>
          </div>

          {/* Stacked Promotions */}
          <div className="mt-12">
            <StackedPromos maxPromos={3} />
          </div>

          {/* Video Placeholder */}
          <div className="mt-12 max-w-2xl mx-auto">
            <VideoPlaceholder
              title="Meet Carlos & Cristian"
              subtitle="Watch our story — coming soon"
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* Angular divider: to footer */}
      <AngularDivider from={BRAND.colors.primaryDark} to={BRAND.colors.primary} variant="slant-right" />
    </div>
  );
}