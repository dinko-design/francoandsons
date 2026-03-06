import { Link } from "react-router";
import {
  Star,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Phone,
  ChefHat,
  Bath,
  Home as HomeIcon,
  Grid3X3,
  Accessibility,
  CheckCircle,
  LayoutDashboard,
  Droplets,
  Zap,
  Paintbrush,
  TreePine,
  Building2,
  BookOpen,
  Download,
} from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS, TESTIMONIALS, IMAGES } from "../data/siteData";
import { BRAND } from "../data/brandConfig";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GeometricBackground } from "../components/shared/AngularDivider";
import { CornerBrackets, DotGrid, FBadge, SectionEyebrow, QuoteMarks, DashedCard, CrosshatchGrid } from "../components/shared/BrandElements";
import { Logo } from "../components/shared/Logo";
import { BLOG_POSTS } from "../data/blogData";
import { GuaranteeStrip } from "../components/shared/PromotionBanner";
import { BeforeAfterShowcase } from "../components/shared/BeforeAfterShowcase";
import { TrustBadges } from "../components/shared/TrustBadges";
import { SEOContentBlock } from "../components/shared/SEOContentBlock";
import { PAGE_SEO_CONTENT } from "../data/seoData";

const { accent, accentDark, primary, primaryDark, primaryLight } = BRAND.colors;
const darkest = BRAND.colors.darkBgDeepest;
const heroBg = "#0e1929";

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="w-6 h-6" />,
  Bath: <Bath className="w-6 h-6" />,
  Home: <HomeIcon className="w-6 h-6" />,
  Grid3X3: <Grid3X3 className="w-6 h-6" />,
  Accessibility: <Accessibility className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Paintbrush: <Paintbrush className="w-6 h-6" />,
  TreePine: <TreePine className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
};

export function HomePage() {
  return (
    <div>
      {/* Hero Section — dark blueprint aesthetic matching brand guide */}
      <section className="relative min-h-[650px] lg:min-h-[750px] flex items-center" style={{ background: heroBg }}>
        {/* Blueprint dot+line grid — matching brand guide */}
        <DotGrid opacity={0.2} spacing={28} dotSize={0.8} lineOpacity={0.06} />
        {/* Photo overlay */}
        <div className="absolute inset-0">
          <img src={IMAGES.kitchenOpenConcept} alt="Beautiful kitchen remodel by Franco and Sons Construction LLC" className="w-full h-full object-cover object-center opacity-15" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${heroBg}f5, ${primary}99, ${heroBg}80)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${heroBg}, transparent, ${heroBg}66)` }} />
        </div>
        {/* Corner brackets on hero */}
        <CornerBrackets size={36} strokeWidth={2.5} inset={16} />
        {/* Dashed inner border */}
        <div className="absolute pointer-events-none" style={{ inset: 28, border: `1px dashed ${accent}20` }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow className="mb-6">Lincoln, California · Est. 2004</SectionEyebrow>
              <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-white mb-6 leading-[0.9]" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>
                BUILDING<br />
                <span style={{ color: accent }}>CALIFORNIA'S</span><br />
                FUTURE
              </h1>
              <p className="text-white/45 text-[1.05rem] mb-9 leading-relaxed max-w-md" style={{ fontFamily: BRAND.fonts.body }}>
                Residential & commercial construction across Placer County. Licensed, insured, and built on trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-started" className="px-8 py-3.5 rounded text-[0.95rem] transition-all inline-flex items-center justify-center gap-2 group" style={{ fontFamily: BRAND.fonts.secondary, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" as const, background: accent, color: primary, boxShadow: `0 10px 25px ${accent}33` }}>
                  Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/portfolio" className="px-8 py-3.5 rounded text-[0.95rem] hover:bg-white/[0.04] hover:text-white transition-all inline-flex items-center justify-center gap-2" style={{ fontFamily: BRAND.fonts.secondary, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, border: `1.5px dashed ${accent}80`, color: "rgba(255,255,255,0.6)" }}>
                  View Projects
                </Link>
              </div>
            </div>
            {/* Logo mark on right — matching brand guide hero layout */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Dashed border frame around logo */}
                <div className="p-12" style={{ border: `1.5px dashed ${accent}30` }}>
                  <CornerBrackets size={16} strokeWidth={2} color={accent} />
                  <Logo variant="light" linkTo="" size="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stat bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex" style={{ borderTop: `1px solid ${accent}15`, background: `${heroBg}cc`, backdropFilter: "blur(8px)" }}>
          {[
            { val: `${COMPANY.yearsExperience}+`, label: "Years Experience" },
            { val: "500+", label: "Projects Completed" },
            { val: "5\u2605", label: "Google Rating" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex-1 py-5 px-6 lg:px-10" style={i < 2 ? { borderRight: `1px solid ${accent}15` } : {}}>
              <div className="text-[1.75rem] leading-none" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, color: accent }}>{stat.val}</div>
              <div className="text-white/30 text-[0.7rem] tracking-[0.15em] uppercase mt-1" style={{ fontFamily: BRAND.fonts.secondary, fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar — dark slate */}
      <section className="py-8" style={{ background: primaryDark, borderTop: `1px solid ${accent}1A`, borderBottom: `1px solid ${accent}1A` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-5 h-5" style={{ color: accent }} />, label: "Licensed & Insured", sub: COMPANY.license },
              { icon: <Clock className="w-5 h-5" style={{ color: accent }} />, label: `${COMPANY.yearsExperience}+ Years Experience`, sub: "Family Tradition" },
              { icon: <Star className="w-5 h-5" style={{ color: accent }} />, label: "5-Star Rated", sub: "100+ Happy Clients" },
              { icon: <Users className="w-5 h-5" style={{ color: accent }} />, label: "Family Owned", sub: "Father & Son Team" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/[0.04] rounded-lg flex items-center justify-center shrink-0" style={{ border: `1px solid ${accent}26` }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.85rem] font-semibold text-white/90">{item.label}</div>
                  <div className="text-[0.75rem] text-white/35">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Branded Fleet */}
      <section className="relative min-h-[550px] lg:min-h-[600px] overflow-hidden" style={{ background: BRAND.colors.foreground }}>
        <DotGrid opacity={0.15} spacing={28} dotSize={0.8} lineOpacity={0.05} />
        <div className="absolute inset-0">
          <ImageWithFallback src={IMAGES.brandedTrucks} alt="Franco and Sons Construction LLC branded fleet" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${BRAND.colors.foreground}f5, ${primary}cc, ${BRAND.colors.foreground}80)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BRAND.colors.foreground}f2, transparent, ${BRAND.colors.foreground}80)` }} />
        </div>
        <CornerBrackets size={28} strokeWidth={2} inset={20} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[550px] lg:min-h-[600px]">
          <div className="max-w-2xl py-20">
            <SectionEyebrow className="mb-7">Our Commitment</SectionEyebrow>
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-white mb-5 leading-[0.9]" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>
              PROFESSIONAL SERVICE,<br /><span style={{ color: accent }}>PERSONAL DEDICATION</span>
            </h2>
            <p className="text-white/70 text-[1.075rem] leading-relaxed mb-8">
              When our branded fleet arrives at your home, you know exactly who's doing the work. Carlos and Cristian Franco — the same father-and-son team from your first consultation to the final walkthrough. No subcontractors, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started" className="px-7 py-3.5 rounded text-[0.95rem] transition-all inline-flex items-center justify-center gap-2 group" style={{ fontFamily: BRAND.fonts.secondary, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" as const, background: accent, color: primary, boxShadow: `0 10px 25px ${accent}33` }}>
                Get Your Free Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="px-7 py-3.5 rounded text-[0.95rem] hover:bg-white/[0.04] hover:text-white transition-all inline-flex items-center justify-center gap-2" style={{ fontFamily: BRAND.fonts.secondary, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, border: `1.5px dashed ${accent}66`, color: "rgba(255,255,255,0.6)" }}>
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
        {/* F badge watermark */}
        <div className="absolute bottom-6 right-8 z-10">
          <FBadge size={36} variant="filled" />
        </div>
      </section>


      {/* Services Section — dark cards matching brand guide */}
      <section className="py-24 lg:py-28 relative overflow-hidden" style={{ background: primaryDark }}>
        <DotGrid opacity={0.12} spacing={28} dotSize={0.8} lineOpacity={0.04} />
        <CrosshatchGrid opacity={0.03} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow className="justify-center mb-3">Our Services</SectionEyebrow>
            <h2 className="text-[2.25rem] md:text-[2.75rem] mt-3 mb-5 leading-[1] text-white" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>EXPERT CONSTRUCTION & REMODELING</h2>
            <p className="text-[1.05rem] leading-relaxed text-white/40">From kitchen remodels to home additions, Franco and Sons Construction LLC delivers precision craftsmanship on every project.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} className="group relative rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300" style={{ background: `${primary}80`, border: `1px solid ${accent}15` }}>
                <CornerBrackets size={14} strokeWidth={1.5} color={`${accent}30`} />
                <div className="aspect-[16/10] overflow-hidden relative">
                  <ImageWithFallback src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${primary}, transparent)` }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${accent}15`, color: accent }}>{iconMap[service.icon]}</div>
                    <h3 className="text-[1.075rem] font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-[0.9rem] leading-relaxed mb-4 text-white/45">{service.description}</p>
                  <span className="text-[0.9rem] inline-flex items-center gap-1 group-hover:gap-2 transition-all font-semibold" style={{ color: accent }}>
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Why Franco and Sons Construction LLC — dark version */}
      <section className="py-24 lg:py-28 relative overflow-hidden" style={{ background: BRAND.colors.foreground }}>
        <DotGrid opacity={0.12} spacing={28} dotSize={0.8} lineOpacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionEyebrow className="mb-3">Why Choose Us</SectionEyebrow>
              <h2 className="text-[2.25rem] md:text-[2.75rem] mt-3 mb-6 leading-[1] text-white" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>A FAMILY BUSINESS BUILT ON TRUST</h2>
              <p className="text-[1.05rem] mb-9 leading-relaxed text-white/50">
                When you hire Franco and Sons Construction LLC, you're not getting a faceless corporation. Carlos and Cristian Franco work on every project personally — from your initial consultation to the final walkthrough.
              </p>
              <div className="space-y-4 mb-9">
                {[
                  "Father & son on every job — you know who's working in your home",
                  "Transparent, detailed estimates with no hidden fees or surprises",
                  "Daily progress updates and open, honest communication",
                  "Clean, organized job sites and respect for your property",
                  "Licensed, insured, and compliant with all building codes",
                  `Serving Lincoln and Placer County with over ${COMPANY.yearsExperience} years of experience`,
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: accent }} />
                    <span className="text-[0.95rem] leading-relaxed text-white/70">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-[1rem] font-semibold hover:gap-3 transition-all group" style={{ color: accent }}>
                Meet the Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl relative" style={{ border: `1.5px solid ${accent}20` }}>
                <CornerBrackets size={20} strokeWidth={2} color={accent} />
                <ImageWithFallback src={IMAGES.carlosCristianKitchen} alt="Carlos and Cristian Franco" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: `linear-gradient(to top, ${BRAND.colors.foreground}, transparent)` }} />
              </div>
              <div className="absolute -bottom-6 -left-6 text-white p-7 rounded-lg shadow-2xl hidden md:block" style={{ background: primary, border: `1px solid ${accent}20` }}>
                <div className="text-[2.25rem] font-bold leading-none mb-1" style={{ color: accent }}>{COMPANY.yearsExperience}+</div>
                <div className="text-[0.875rem] text-white/90 font-medium">Years of Excellence</div>
                <svg className="absolute -top-3 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,10 L50,0 L100,10 Z" fill={accent} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects — dark with corner brackets on each */}
      <section className="py-20 lg:py-24 relative" style={{ background: BRAND.colors.foreground }}>
        <DotGrid opacity={0.12} spacing={28} dotSize={0.8} lineOpacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow className="justify-center mb-3">Our Work</SectionEyebrow>
            <h2 className="text-[2.25rem] md:text-[2.75rem] mt-3 mb-5 leading-[1] text-white" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>FEATURED PROJECTS</h2>
            <p className="text-white/40 text-[1rem]">See the quality and craftsmanship that has made Franco and Sons Construction LLC the go-to contractor in Lincoln, California.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { img: IMAGES.kitchen, label: "Kitchen Remodel - Roseville" },
              { img: IMAGES.kitchenOpenConcept, label: "Open-Concept Kitchen - Roseville" },
              { img: IMAGES.bathroom, label: "Custom Walk-In Shower - Roseville" },
              { img: IMAGES.kitchenCabinets, label: "Custom Cabinetry - Roseville" },
              { img: IMAGES.bathroomVanity, label: "Double Vanity Remodel - Roseville" },
              { img: IMAGES.kitchenIslandClose, label: "Cherry Cabinet Kitchen - Roseville" },
            ].map((project) => (
              <div key={project.label} className="group relative rounded-lg overflow-hidden cursor-pointer" style={{ border: `1px solid ${accent}15` }}>
                <CornerBrackets size={12} strokeWidth={1.5} color={`${accent}40`} />
                <ImageWithFallback src={project.img} alt={project.label} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4" style={{ background: `linear-gradient(to top, ${BRAND.colors.foreground}ee, transparent)` }}>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white text-[0.9rem]" style={{ fontWeight: 600, fontFamily: BRAND.fonts.secondary }}>{project.label}</span>
                    <FBadge size={24} variant="filled" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-[0.95rem] transition-colors" style={{ fontWeight: 700, fontFamily: BRAND.fonts.secondary, letterSpacing: "0.1em", textTransform: "uppercase" as const, background: accent, color: primary }}>
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Before & After Teaser — dark */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: primaryDark }}>
        <DotGrid opacity={0.12} spacing={28} dotSize={0.8} lineOpacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow className="justify-center mb-3">Real Results</SectionEyebrow>
            <h2 className="text-[2rem] md:text-[2.5rem] mt-2 mb-4 text-white" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1.1 }}>
              BEFORE & AFTER
            </h2>
            <p className="text-white/40 text-[1rem]">
              See the transformations for yourself. Real projects, real results, all by Franco and Sons Construction LLC.
            </p>
          </div>
          <BeforeAfterShowcase variant="teaser" limit={2} />
        </div>
      </section>


      {/* Testimonials — dark section matching brand guide */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: BRAND.colors.foreground }}>
        <DotGrid opacity={0.15} spacing={28} dotSize={0.8} lineOpacity={0.05} />
        <CrosshatchGrid opacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow className="justify-center mb-3">Testimonials</SectionEyebrow>
            <h2 className="text-[2.25rem] md:text-[2.75rem] mt-3 mb-5 leading-[1] text-white" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>WHAT OUR CLIENTS SAY</h2>
            <p className="text-white/40 text-[1rem]">Don't just take our word for it. Here's what homeowners throughout Placer County have to say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="relative rounded-lg p-6 transition-all" style={{ background: `${primaryDark}80`, border: `1px solid ${accent}15` }}>
                <CornerBrackets size={14} strokeWidth={1.5} color={`${accent}40`} />
                <QuoteMarks size={28} color={accent} position="top-left" />
                <div className="flex mb-3 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[0.9rem] text-white/60 leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="border-t pt-4" style={{ borderColor: `${accent}15` }}>
                  <div className="text-[0.9rem] text-white" style={{ fontWeight: 600 }}>{t.name}</div>
                  <div className="text-[0.8rem] text-white/35">{t.service} - {t.location}</div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <FBadge size={24} variant="filled" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-[0.95rem] hover:gap-3 transition-all" style={{ fontWeight: 600, color: accent }}>
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Service Areas — dark */}
      <section className="py-20 lg:py-24 relative" style={{ background: primaryDark }}>
        <DotGrid opacity={0.12} spacing={28} dotSize={0.8} lineOpacity={0.04} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionEyebrow className="mb-3">Service Areas</SectionEyebrow>
              <h2 className="text-[2.25rem] md:text-[2.75rem] mt-3 mb-5 leading-[1] text-white" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>PROUDLY SERVING LINCOLN & SURROUNDING COMMUNITIES</h2>
              <p className="text-white/40 text-[1rem] mb-8 leading-relaxed">Based in Lincoln, California, we serve homeowners throughout the greater Placer County area.</p>
              <div className="grid grid-cols-2 gap-3">
                {LOCATIONS.map((loc) => (
                  <Link key={loc.slug} to={`/locations/${loc.slug}`} className="flex items-center gap-2 px-4 py-3 rounded-lg transition-colors" style={loc.isPrimary ? { background: accent, color: primary, border: `1px solid ${accent}` } : { background: `${primary}60`, border: `1px solid ${accent}20`, color: "rgba(255,255,255,0.7)" }}>
                    <MapPinIcon className="w-4 h-4 shrink-0" />
                    <span className="text-[0.9rem]" style={{ fontWeight: 500 }}>{loc.city}, CA</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden" style={{ border: `1.5px solid ${accent}20` }}>
                <CornerBrackets size={18} strokeWidth={2} color={accent} />
                <ImageWithFallback src={IMAGES.lincoln} alt="Lincoln, California neighborhood" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: `linear-gradient(to top, ${primaryDark}, transparent)` }} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Blog & Resources — dark */}
      <section className="py-16 lg:py-20 relative" style={{ background: BRAND.colors.foreground }}>
        <CrosshatchGrid opacity={0.03} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <SectionEyebrow className="mb-3">Blog & Resources</SectionEyebrow>
              <h2 className="text-[2.25rem] md:text-[2.75rem] mt-3 leading-[1] text-white" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>
                EXPERT TIPS & GUIDES
              </h2>
            </div>
            <Link to="/blog" className="text-[0.9rem] inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ fontWeight: 600, color: accent }}>
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.filter((p) => p.featured).slice(0, 3).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group relative rounded-lg overflow-hidden transition-all" style={{ background: `${primaryDark}80`, border: `1px solid ${accent}15` }}>
                <CornerBrackets size={12} strokeWidth={1.5} color={`${accent}30`} />
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[0.75rem] text-white/30 mb-2">
                    <span style={{ fontWeight: 600, color: accent }}>{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-[0.95rem] mb-2 text-white group-hover:text-white transition-colors" style={{ fontWeight: 700 }}>{post.title}</h3>
                  <p className="text-white/35 text-[0.8rem] leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* Free resources bar */}
          <div className="mt-8 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: `${accent}10`, border: `1px dashed ${accent}30` }}>
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 shrink-0" style={{ color: accent }} />
              <div>
                <div className="text-[0.9rem] text-white" style={{ fontWeight: 700 }}>Free Kitchen Remodel Cost Guide</div>
                <div className="text-[0.8rem] text-white/35">Real pricing for Lincoln & Placer County — not national averages</div>
              </div>
            </div>
            <Link to="/free/kitchen-remodel-cost-guide" className="text-[0.85rem] flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap" style={{ fontWeight: 600, color: accent }}>
              Download Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantees — dark */}
      <section className="py-12 relative" style={{ background: primaryDark }}>
        <DotGrid opacity={0.08} spacing={28} dotSize={0.8} lineOpacity={0.03} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuaranteeStrip variant="icons-only" dark />
        </div>
      </section>

      {/* SEO Content Block — dark */}
      <section className="py-16 lg:py-20 relative" style={{ background: BRAND.colors.foreground }}>
        <DotGrid opacity={0.06} spacing={28} dotSize={0.8} lineOpacity={0.03} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContentBlock
            sections={PAGE_SEO_CONTENT.home}
            showRelatedServices
            showServiceAreas
          />
        </div>
      </section>


      {/* Lead Capture Section */}
      <section className="py-20 lg:py-24 text-white relative overflow-hidden" style={{ background: heroBg }}>
        <DotGrid opacity={0.18} spacing={28} dotSize={0.8} lineOpacity={0.06} />
        <CornerBrackets size={32} strokeWidth={2} inset={12} />
        <div className="absolute pointer-events-none" style={{ inset: 24, border: `1px dashed ${accent}15` }} />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10" style={{ background: `linear-gradient(225deg, ${accent} 0%, transparent 60%)`, clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[2.25rem] md:text-[2.75rem] text-white mb-4" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1 }}>START YOUR PROJECT TODAY</h2>
              <p className="text-gray-400 text-[1rem] mb-8 leading-relaxed">
                Whether you have a clear vision or just an idea, we'd love to hear about your project. Fill out the form and Cristian will personally follow up.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Free In-Home Estimate", desc: "We come to you - no charge, no obligation" },
                  { title: "Detailed Written Quote", desc: "Clear pricing within 48 hours" },
                  { title: "Personal Attention", desc: "Cristian follows up on every inquiry" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: primary }}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-[0.95rem]" style={{ fontWeight: 600 }}>{item.title}</div>
                      <div className="text-gray-400 text-[0.85rem]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-xl p-6 lg:p-8 border border-white/10">
              <LeadCaptureForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
