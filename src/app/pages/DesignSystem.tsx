import { Link } from "react-router";
import { ArrowRight, Phone, CheckCircle, Star, ChevronRight } from "lucide-react";
import { COMPANY } from "../data/siteData";
import { BRAND } from "../data/brandConfig";
import { Logo } from "../components/shared/Logo";
import { CornerBrackets, FBadge, DotGrid, DashedCard, SectionEyebrow, QuoteMarks, CrosshatchGrid } from "../components/shared/BrandElements";

const { colors, fonts, style } = BRAND;

function ColorSwatch({ name, value, textLight = false }: { name: string; value: string; textLight?: boolean }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full h-20 rounded-lg border border-white/10 flex items-end p-2.5"
        style={{ background: value }}
      >
        <span className={`text-[0.7rem] font-mono ${textLight ? "text-white/70" : "text-black/50"}`}>{value}</span>
      </div>
      <span className="text-[0.8rem] mt-2" style={{ fontWeight: 600 }}>{name}</span>
    </div>
  );
}

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div id={id} className="mb-8 pt-4">
      <SectionEyebrow color={colors.accent} className="mb-3">{children}</SectionEyebrow>
      <div className="w-full h-px" style={{ background: `${colors.accent}20` }} />
    </div>
  );
}

export function DesignSystemPage() {
  return (
    <div>
      {/* Hero — dark blueprint */}
      <section className="relative py-20 lg:py-28 pb-[120px] lg:pb-[140px] overflow-hidden" style={{ background: colors.primaryDark }}>
        <DotGrid opacity={0.08} spacing={28} dotSize={0.8} lineOpacity={0.03} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow color={colors.accent} className="mb-4">Design System</SectionEyebrow>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontFamily: fonts.display, fontWeight: 700, lineHeight: 1.15, letterSpacing: "0.02em" }}>
              <span style={{ color: colors.accent }}>Slate Blue & Lime</span><br />
              Brand System
            </h1>
            <p className="text-gray-400 text-[1.05rem] leading-relaxed max-w-xl">
              Design tokens, components, typography, and patterns for the {COMPANY.name} brand identity. This page is for internal reference only.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "80px" }}>
            <polygon points="0,30 0,80 1440,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Jump Nav */}
      <section className="py-6 border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 text-[0.8rem]" style={{ fontFamily: fonts.secondary, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {[
              { id: "logo", label: "Logo" },
              { id: "colors", label: "Colors" },
              { id: "typography", label: "Typography" },
              { id: "buttons", label: "Buttons" },
              { id: "brand-elements", label: "Brand Elements" },
              { id: "cards", label: "Cards" },
              { id: "sections", label: "Section Patterns" },
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ═══════════════════════════════════════ */}
        {/* LOGO                                    */}
        {/* ═══════════════════════════════════════ */}
        <SectionTitle id="logo">Logo</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Dark variant on light */}
          <div className="bg-white border border-border rounded-xl p-8 flex items-center justify-center">
            <Logo variant="dark" linkTo="" size="large" />
          </div>
          {/* Light variant on dark */}
          <div className="rounded-xl p-8 flex items-center justify-center" style={{ background: colors.primaryDark }}>
            <Logo variant="light" linkTo="" size="large" />
          </div>
          {/* Light variant on primary */}
          <div className="rounded-xl p-8 flex items-center justify-center" style={{ background: colors.primary }}>
            <Logo variant="light" linkTo="" size="large" />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-[1rem] mb-4" style={{ fontWeight: 600 }}>Logo Sizes</h3>
          <div className="flex flex-wrap items-end gap-8 bg-white border border-border rounded-xl p-8">
            <div className="text-center">
              <Logo variant="dark" linkTo="" size="small" />
              <span className="text-[0.75rem] text-muted-foreground mt-2 block">Small</span>
            </div>
            <div className="text-center">
              <Logo variant="dark" linkTo="" size="default" />
              <span className="text-[0.75rem] text-muted-foreground mt-2 block">Default</span>
            </div>
            <div className="text-center">
              <Logo variant="dark" linkTo="" size="large" />
              <span className="text-[0.75rem] text-muted-foreground mt-2 block">Large</span>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-[1rem] mb-4" style={{ fontWeight: 600 }}>F Badge</h3>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <FBadge size={48} variant="filled" />
              <span className="text-[0.75rem] text-muted-foreground mt-2 block">Filled</span>
            </div>
            <div className="text-center">
              <FBadge size={48} variant="outline" />
              <span className="text-[0.75rem] text-muted-foreground mt-2 block">Outline</span>
            </div>
            <div className="text-center">
              <FBadge size={48} variant="dark" />
              <span className="text-[0.75rem] text-muted-foreground mt-2 block">Dark</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* COLORS                                  */}
        {/* ═══════════════════════════════════════ */}
        <SectionTitle id="colors">Colors</SectionTitle>

        <div className="mb-10">
          <h3 className="text-[1rem] mb-4" style={{ fontWeight: 600 }}>Primary Palette</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <ColorSwatch name="Primary" value={colors.primary} textLight />
            <ColorSwatch name="Primary Light" value={colors.primaryLight} textLight />
            <ColorSwatch name="Primary Dark" value={colors.primaryDark} textLight />
            <ColorSwatch name="Darkest" value={colors.darkBgDeepest} textLight />
            <ColorSwatch name="Warm White" value={colors.warmWhite} />
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-[1rem] mb-4" style={{ fontWeight: 600 }}>Accent Palette</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <ColorSwatch name="Accent" value={colors.accent} />
            <ColorSwatch name="Accent Dark" value={colors.accentDark} />
            <ColorSwatch name="Accent Muted" value={colors.accentMuted} />
            <ColorSwatch name="Accent Light" value={colors.accentLight} />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-[1rem] mb-4" style={{ fontWeight: 600 }}>Semantic Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <ColorSwatch name="Background" value={colors.background} />
            <ColorSwatch name="Foreground" value={colors.foreground} textLight />
            <ColorSwatch name="Card BG" value={colors.cardBg} />
            <ColorSwatch name="Muted Text" value={colors.mutedText} textLight />
            <ColorSwatch name="Tertiary" value={colors.tertiary} textLight />
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* TYPOGRAPHY                              */}
        {/* ═══════════════════════════════════════ */}
        <SectionTitle id="typography">Typography</SectionTitle>

        <div className="space-y-10 mb-16">
          {/* Display */}
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-[0.75rem] text-muted-foreground" style={{ fontFamily: fonts.secondary, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Display — {fonts.display}</span>
            </div>
            <div className="space-y-3">
              <p style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "3rem", lineHeight: 1.1, letterSpacing: "0.02em" }}>
                BUILDING YOUR<br />FUTURE HOME
              </p>
              <p style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: "2rem", lineHeight: 1.15, letterSpacing: "0.02em" }}>
                Kitchen Remodeling in Lincoln, CA
              </p>
              <p style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.2, letterSpacing: "0.02em", color: colors.accent }}>
                FRANCO AND SONS
              </p>
            </div>
          </div>

          {/* Secondary */}
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-[0.75rem] text-muted-foreground" style={{ fontFamily: fonts.secondary, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Secondary — {fonts.secondary}</span>
            </div>
            <div className="space-y-3">
              <p style={{ fontFamily: fonts.secondary, fontWeight: 800, fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                GET FREE ESTIMATE
              </p>
              <p style={{ fontFamily: fonts.secondary, fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: colors.mutedText }}>
                CONSTRUCTION LLC &middot; CA LICENSED GENERAL CONTRACTOR
              </p>
              <p style={{ fontFamily: fonts.secondary, fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", color: colors.accent }}>
                Kitchen Remodeling &middot; Bathroom Remodeling &middot; Home Additions
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-[0.75rem] text-muted-foreground" style={{ fontFamily: fonts.secondary, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Body — {fonts.body}</span>
            </div>
            <div className="space-y-4">
              <p style={{ fontFamily: fonts.body, fontSize: "1.1rem", lineHeight: 1.7 }}>
                Franco and Sons Construction LLC was built on a foundation of family, hard work, and over 30 years of construction experience. What started as Carlos Franco passing down his craft to his son Cristian has grown into a full-service remodeling company.
              </p>
              <p style={{ fontFamily: fonts.body, fontSize: "0.95rem", lineHeight: 1.7, color: colors.mutedText }}>
                We're not a big corporation. We're a father-and-son team treating every home with respect and building relationships that last longer than our projects.
              </p>
              <p style={{ fontFamily: fonts.body, fontSize: "0.85rem", lineHeight: 1.6, color: colors.mutedText }}>
                Small text for captions, disclaimers, and fine print. Font weight 400 for normal, 500 for medium, 600 for semibold.
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* BUTTONS                                 */}
        {/* ═══════════════════════════════════════ */}
        <SectionTitle id="buttons">Buttons</SectionTitle>

        <div className="space-y-8 mb-16">
          {/* Light background buttons */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>On Light Background</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                className="px-7 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
                style={{ fontFamily: fonts.secondary, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.9rem", background: colors.accent, color: colors.primary }}
              >
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="px-7 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
                style={{ fontFamily: fonts.secondary, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.9rem", background: colors.primary, color: "#ffffff" }}
              >
                View Portfolio
              </button>
              <button
                className="px-7 py-3 rounded-md inline-flex items-center gap-2 border-2 transition-colors"
                style={{ fontFamily: fonts.secondary, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.9rem", borderColor: colors.primary, color: colors.primary }}
              >
                Learn More
              </button>
              <button
                className="px-7 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
                style={{ fontFamily: fonts.secondary, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem", color: colors.primary }}
              >
                Text Link <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dark background buttons */}
          <div className="rounded-xl p-8" style={{ background: colors.primaryDark }}>
            <h3 className="text-[0.85rem] text-gray-400 mb-5" style={{ fontWeight: 600 }}>On Dark Background</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                className="px-7 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
                style={{ fontFamily: fonts.secondary, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.9rem", background: colors.accent, color: colors.primary }}
              >
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="px-7 py-3 rounded-md inline-flex items-center gap-2 border-2 border-white text-white transition-colors"
                style={{ fontFamily: fonts.secondary, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.9rem" }}
              >
                <Phone className="w-4 h-4" /> Call Now
              </button>
              <button
                className="px-7 py-3 rounded-md inline-flex items-center gap-2 transition-colors text-white/80"
                style={{ fontFamily: fonts.secondary, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem" }}
              >
                View Services <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* BRAND ELEMENTS                          */}
        {/* ═══════════════════════════════════════ */}
        <SectionTitle id="brand-elements">Brand Elements</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Corner Brackets */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Corner Brackets</h3>
            <div className="relative bg-secondary rounded-lg p-10 flex items-center justify-center min-h-[160px]">
              <CornerBrackets size={28} strokeWidth={2} />
              <span className="text-[0.9rem] text-muted-foreground">Content area</span>
            </div>
          </div>

          {/* Section Eyebrow */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Section Eyebrow</h3>
            <div className="space-y-4">
              <SectionEyebrow color={colors.accent}>Our Services</SectionEyebrow>
              <SectionEyebrow color={colors.primary}>About Us</SectionEyebrow>
              <SectionEyebrow color={colors.mutedText}>Lincoln, California</SectionEyebrow>
            </div>
          </div>

          {/* Dot Grid / Blueprint Pattern */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Blueprint Dot Grid</h3>
            <div className="relative rounded-lg overflow-hidden min-h-[160px]" style={{ background: colors.primaryDark }}>
              <DotGrid opacity={0.15} spacing={24} dotSize={1} lineOpacity={0.06} />
              <div className="relative z-10 p-6">
                <span className="text-white/60 text-[0.85rem]">Background pattern for dark sections</span>
              </div>
            </div>
          </div>

          {/* Crosshatch Grid */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Crosshatch Grid</h3>
            <div className="relative rounded-lg overflow-hidden min-h-[160px]" style={{ background: colors.primary }}>
              <CrosshatchGrid opacity={0.08} />
              <div className="relative z-10 p-6">
                <span className="text-white/60 text-[0.85rem]">Diagonal pattern for footer/dark areas</span>
              </div>
            </div>
          </div>

          {/* Quote Marks */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Quote Marks</h3>
            <div className="bg-secondary rounded-lg p-6 relative">
              <QuoteMarks size={32} position="top-left" />
              <p className="text-[0.95rem] italic leading-relaxed my-2 px-2">
                "I learned this trade from my dad. Everything I know about quality, about showing up, about doing things the right way — that comes from him."
              </p>
              <QuoteMarks size={32} position="bottom-right" />
            </div>
          </div>

          {/* Dashed Card */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Dashed Card</h3>
            <DashedCard className="rounded-lg p-6 bg-secondary">
              <p className="text-[0.9rem] text-muted-foreground text-center">Dashed border with corner brackets — blueprint aesthetic</p>
            </DashedCard>
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* CARDS                                   */}
        {/* ═══════════════════════════════════════ */}
        <SectionTitle id="cards">Cards</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Service card */}
          <div className="bg-white rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-[1.05rem] mb-2" style={{ fontWeight: 600 }}>Kitchen Remodeling</h3>
            <p className="text-muted-foreground text-[0.875rem] leading-relaxed mb-4">
              Transform your kitchen with custom cabinetry, modern countertops, and thoughtful layouts.
            </p>
            <span className="text-primary text-[0.85rem] inline-flex items-center gap-1" style={{ fontWeight: 500 }}>
              Learn more <ChevronRight className="w-4 h-4" />
            </span>
          </div>

          {/* Feature card */}
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="text-[0.95rem] mb-1" style={{ fontWeight: 600 }}>On-Site Daily</h3>
                <p className="text-muted-foreground text-[0.85rem] leading-relaxed">
                  Carlos and Cristian personally work on every project — you always know who's in your home.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="bg-secondary rounded-xl p-6 border border-primary/10 relative">
            <div className="flex mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-[0.9rem] italic leading-relaxed mb-3">
              "They treated our home like it was their own. The kitchen came out better than we imagined."
            </p>
            <span className="text-[0.85rem] text-primary" style={{ fontWeight: 600 }}>
              — Sarah M., Lincoln
            </span>
          </div>
        </div>

        {/* Dark cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Stat card */}
          <div className="rounded-xl p-8 text-center" style={{ background: colors.primary }}>
            <div className="text-[2.5rem] text-white" style={{ fontFamily: fonts.display, fontWeight: 700 }}>30+</div>
            <div className="text-white/70 text-[0.9rem]">Years of Experience</div>
          </div>

          {/* CTA card */}
          <div className="rounded-xl p-8 relative overflow-hidden" style={{ background: colors.primaryDark }}>
            <DotGrid opacity={0.06} spacing={20} dotSize={0.6} lineOpacity={0.02} />
            <div className="relative z-10">
              <h3 className="text-[1.25rem] text-white mb-2" style={{ fontFamily: fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>
                READY TO START?
              </h3>
              <p className="text-gray-400 text-[0.9rem] mb-4">Get your free consultation today.</p>
              <button
                className="px-6 py-2.5 rounded-md inline-flex items-center gap-2"
                style={{ fontFamily: fonts.secondary, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem", background: colors.accent, color: colors.primary }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION PATTERNS                        */}
        {/* ═══════════════════════════════════════ */}
        <SectionTitle id="sections">Section Patterns</SectionTitle>

        <div className="space-y-6 mb-16">
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Angular Divider (Slant)</h3>
            <div className="relative bg-secondary rounded-lg overflow-hidden">
              <div className="p-8 pb-20" style={{ background: colors.primary }}>
                <p className="text-white/70 text-[0.85rem]">Section above</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0, fontSize: 0 }}>
                <svg viewBox="0 0 1440 80" fill="none" className="w-full block" preserveAspectRatio="none" style={{ height: "60px" }}>
                  <polygon points="0,30 0,80 1440,80" fill="#F8FAFC" />
                </svg>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground text-[0.85rem]">Section below</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Hero Section Pattern</h3>
            <p className="text-muted-foreground text-[0.875rem] leading-relaxed">
              Dark background ({colors.primaryDark}) + DotGrid overlay + accent eyebrow label + Teko display heading + DM Sans body + angular SVG divider at bottom. This pattern is used across all page heroes for consistency.
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-[0.85rem] text-muted-foreground mb-5" style={{ fontWeight: 600 }}>Decorative Style Flags</h3>
            <div className="grid grid-cols-3 gap-4 text-[0.85rem]">
              <div className="bg-secondary rounded-lg p-4 text-center">
                <div className="text-[1.1rem] mb-1">{style.dashedBorders ? "On" : "Off"}</div>
                <div className="text-muted-foreground">Dashed Borders</div>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <div className="text-[1.1rem] mb-1">{style.dotGridPattern ? "On" : "Off"}</div>
                <div className="text-muted-foreground">Dot Grid</div>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <div className="text-[1.1rem] mb-1">{style.cornerBrackets ? "On" : "Off"}</div>
                <div className="text-muted-foreground">Corner Brackets</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════ */}
        {/* CONFIG REFERENCE                        */}
        {/* ═══════════════════════════════════════ */}
        <SectionTitle id="config">Config Reference</SectionTitle>

        <div className="bg-white border border-border rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[0.875rem]">
            <div>
              <h3 className="text-[0.85rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>Active Preset</h3>
              <code className="bg-secondary px-3 py-1.5 rounded text-[0.8rem]">{BRAND.preset} — "{BRAND.presetName}"</code>
            </div>
            <div>
              <h3 className="text-[0.85rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>Border Radius</h3>
              <code className="bg-secondary px-3 py-1.5 rounded text-[0.8rem]">{style.radius}</code>
            </div>
            <div>
              <h3 className="text-[0.85rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>Font: Display</h3>
              <code className="bg-secondary px-3 py-1.5 rounded text-[0.8rem]">{fonts.display}</code>
            </div>
            <div>
              <h3 className="text-[0.85rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>Font: Secondary</h3>
              <code className="bg-secondary px-3 py-1.5 rounded text-[0.8rem]">{fonts.secondary}</code>
            </div>
            <div>
              <h3 className="text-[0.85rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>Font: Body</h3>
              <code className="bg-secondary px-3 py-1.5 rounded text-[0.8rem]">{fonts.body}</code>
            </div>
            <div>
              <h3 className="text-[0.85rem] text-muted-foreground mb-3" style={{ fontWeight: 600 }}>Source File</h3>
              <code className="bg-secondary px-3 py-1.5 rounded text-[0.8rem]">src/app/data/brandConfig.ts</code>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Wrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
