import { Link } from "react-router";
import {
  ArrowRight,
  Tag,
  Shield,
  Clock,
  ThumbsUp,
  Sparkles,
  Lock,
  Gift,
  Star,
  CheckCircle,
} from "lucide-react";
import { GUARANTEES, PROMOTIONS, type Promotion, type Guarantee } from "../../data/promotionsData";
import { BRAND } from "../../data/brandConfig";

const guaranteeIcons: Record<string, React.ReactNode> = {
  Lock: <Lock className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  ThumbsUp: <ThumbsUp className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

// ── Stacked Promotions Banner ──
interface StackedPromosProps {
  serviceSlug?: string;
  locationSlug?: string;
  maxPromos?: number;
}

export function StackedPromos({ serviceSlug, locationSlug, maxPromos = 3 }: StackedPromosProps) {
  const applicable = PROMOTIONS.filter((p) => {
    const matchService = p.applicableServices.includes("all") || (serviceSlug && p.applicableServices.includes(serviceSlug));
    const matchLocation = p.applicableLocations.includes("all") || (locationSlug && p.applicableLocations.includes(locationSlug));
    return matchService && matchLocation;
  }).slice(0, maxPromos);

  if (applicable.length === 0) return null;

  const totalSavings = applicable.length > 1;

  return (
    <div className="rounded-xl overflow-hidden border border-white/10" style={{ background: `linear-gradient(to right, ${BRAND.colors.primaryDark}, #1E293B)` }}>
      {/* Header bar */}
      <div className="bg-primary/10 border-b border-primary/20 px-6 py-3 flex items-center gap-2">
        <Gift className="w-4 h-4" style={{ color: BRAND.colors.accent }} />
        <span className="text-[0.8rem] tracking-wider uppercase" style={{ fontWeight: 700, color: BRAND.colors.accent }}>
          {totalSavings ? "Stack & Save — Combine These Offers" : "Current Offer"}
        </span>
      </div>

      <div className="p-6 space-y-4">
        {applicable.map((promo, i) => (
          <PromoCard key={promo.id} promo={promo} index={i} />
        ))}

        {totalSavings && (
          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20 flex items-center gap-3">
            <Star className="w-5 h-5 shrink-0" style={{ color: BRAND.colors.accent }} />
            <div>
              <div className="text-white text-[0.9rem]" style={{ fontWeight: 600 }}>
                These offers are stackable!
              </div>
              <div className="text-white/60 text-[0.8rem]">
                Combine {applicable.length} offers for maximum savings on your project.
              </div>
            </div>
          </div>
        )}

        <Link
          to="/get-started"
          className="block w-full text-white text-center px-6 py-3.5 rounded-lg text-[0.95rem] transition-colors"
          style={{ backgroundColor: BRAND.colors.accent }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND.colors.accentDark)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND.colors.accent)}
          style={{ fontWeight: 700 }}
        >
          Claim These Offers — Get Free Estimate
          <ArrowRight className="w-4 h-4 inline ml-2" />
        </Link>
      </div>
    </div>
  );
}

function PromoCard({ promo, index }: { promo: Promotion; index: number }) {
  return (
    <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
      <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
        <Tag className="w-5 h-5 text-gold" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gold text-[0.95rem]" style={{ fontWeight: 700 }}>
            {promo.discount}
          </span>
          <span className="text-[0.65rem] bg-gold/20 text-gold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ fontWeight: 600 }}>
            {promo.badge}
          </span>
        </div>
        <div className="text-white text-[0.9rem]" style={{ fontWeight: 600 }}>
          {promo.title}
        </div>
        <div className="text-white/50 text-[0.8rem]">{promo.description}</div>
      </div>
    </div>
  );
}

// ── Guarantee Strip ──
interface GuaranteeStripProps {
  variant?: "full" | "compact" | "icons-only";
  maxItems?: number;
}

export function GuaranteeStrip({ variant = "full", maxItems, dark = false }: GuaranteeStripProps & { dark?: boolean }) {
  const items = maxItems ? GUARANTEES.slice(0, maxItems) : GUARANTEES;

  if (variant === "icons-only") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6">
        {items.map((g) => (
          <div key={g.id} className="flex items-center gap-2 text-[0.85rem]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${BRAND.colors.accent}15`, color: BRAND.colors.accent }}>
              {guaranteeIcons[g.icon]}
            </div>
            <span className={dark ? "text-white/70" : "text-foreground/70"} style={{ fontWeight: 600 }}>{g.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((g) => (
          <div key={g.id} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
              {guaranteeIcons[g.icon]}
            </div>
            <div>
              <div className="text-[0.85rem]" style={{ fontWeight: 600 }}>
                {g.title}
              </div>
              <div className="text-[0.75rem] text-muted-foreground">{g.description.slice(0, 80)}...</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((g) => (
        <div key={g.id} className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
            {guaranteeIcons[g.icon]}
          </div>
          <h3 className="text-[1rem] mb-2" style={{ fontWeight: 700 }}>
            {g.title}
          </h3>
          <p className="text-muted-foreground text-[0.875rem] leading-relaxed">{g.description}</p>
        </div>
      ))}
    </div>
  );
}

// ── Single Promo Bar (for embedding in pages) ──
interface PromoBarProps {
  serviceSlug?: string;
  locationSlug?: string;
}

export function PromoBar({ serviceSlug, locationSlug }: PromoBarProps) {
  const promo = PROMOTIONS.find((p) => {
    const matchService = p.applicableServices.includes("all") || (serviceSlug && p.applicableServices.includes(serviceSlug));
    const matchLocation = p.applicableLocations.includes("all") || (locationSlug && p.applicableLocations.includes(locationSlug));
    return matchService && matchLocation;
  });

  if (!promo) return null;

  return (
    <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/20 rounded-lg px-5 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <Tag className="w-5 h-5 text-gold shrink-0" />
        <div>
          <span className="text-gold text-[0.9rem]" style={{ fontWeight: 700 }}>
            {promo.discount}
          </span>
          <span className="text-[0.85rem] ml-2">{promo.title}</span>
        </div>
      </div>
      <Link
        to="/get-started"
        className="text-primary text-[0.85rem] flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
        style={{ fontWeight: 600 }}
      >
        Claim Offer <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
