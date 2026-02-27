import { IMAGES } from "./siteData";

// ── Promotions & Seasonal Offers ──
export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  description: string;
  validThrough: string;
  code?: string;
  applicableServices: string[]; // service slugs or "all"
  applicableLocations: string[]; // location slugs or "all"
  stackable: boolean;
  badge: string;
}

export const PROMOTIONS: Promotion[] = [
  {
    id: "spring-2026-kitchen",
    title: "Spring Kitchen Special",
    subtitle: "Save on your dream kitchen",
    discount: "$1,500 OFF",
    description:
      "Book your kitchen remodel consultation before March 31, 2026 and save $1,500 on any kitchen project over $20,000. Includes free design consultation.",
    validThrough: "2026-03-31",
    applicableServices: ["kitchen-remodeling"],
    applicableLocations: ["all"],
    stackable: true,
    badge: "Limited Time",
  },
  {
    id: "bathroom-bundle",
    title: "Bathroom Bundle Deal",
    subtitle: "Remodel 2 bathrooms, save more",
    discount: "15% OFF",
    description:
      "Remodel two or more bathrooms at the same time and save 15% on the total project cost. Includes master bath, guest bath, or powder room combinations.",
    validThrough: "2026-06-30",
    applicableServices: ["bathroom-remodeling", "custom-showers", "ada-accessible-remodeling"],
    applicableLocations: ["all"],
    stackable: true,
    badge: "Best Value",
  },
  {
    id: "lincoln-local",
    title: "Lincoln Local Discount",
    subtitle: "Our hometown neighbors save more",
    discount: "$500 OFF",
    description:
      "Lincoln homeowners get $500 off any remodeling project over $10,000. We're your neighbors — let's build something great together.",
    validThrough: "2026-12-31",
    applicableServices: ["all"],
    applicableLocations: ["lincoln"],
    stackable: true,
    badge: "Neighbors",
  },
  {
    id: "senior-ada",
    title: "Senior Safety Upgrade",
    subtitle: "Aging-in-place with dignity",
    discount: "FREE",
    description:
      "Free grab bar installation (up to 3 locations) with any ADA bathroom remodel for homeowners 65+. Safety is our priority.",
    validThrough: "2026-12-31",
    applicableServices: ["ada-accessible-remodeling"],
    applicableLocations: ["all"],
    stackable: true,
    badge: "Safety First",
  },
  {
    id: "referral-bonus",
    title: "Referral Reward",
    subtitle: "Share the love, earn the savings",
    discount: "$500",
    description:
      "Refer a friend or neighbor who books a project and you BOTH receive $500 off. No limit on referrals. Stack them up.",
    validThrough: "2026-12-31",
    applicableServices: ["all"],
    applicableLocations: ["all"],
    stackable: true,
    badge: "Referral",
  },
];

// ── Guarantees ──
export interface Guarantee {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const GUARANTEES: Guarantee[] = [
  {
    id: "price-lock",
    title: "Price Lock Guarantee",
    description:
      "Your written estimate is the price you pay. No hidden fees, no surprise change orders. If we find something unexpected, we discuss it with you BEFORE any additional work.",
    icon: "Lock",
  },
  {
    id: "on-time",
    title: "On-Time Guarantee",
    description:
      "We provide a specific completion date and we stick to it. If we go past the agreed timeline for reasons within our control, we credit you $100 per business day.",
    icon: "Clock",
  },
  {
    id: "satisfaction",
    title: "100% Satisfaction Guarantee",
    description:
      "We don't ask for final payment until you're completely satisfied. If something isn't right, we fix it — period. Your happiness is what drives our referral business.",
    icon: "ThumbsUp",
  },
  {
    id: "workmanship",
    title: "Workmanship Warranty",
    description:
      "Every project comes with a written workmanship warranty. If anything we built doesn't hold up, we come back and make it right at no cost to you.",
    icon: "Shield",
  },
  {
    id: "clean-site",
    title: "Clean Job Site Promise",
    description:
      "We clean up at the end of every work day. Your home won't look like a construction zone when we leave each evening. We respect your space and your family's routine.",
    icon: "Sparkles",
  },
];

// ── Lead Magnets ──
export interface LeadMagnet {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  image: string;
  applicableServices: string[];
  applicableLocations: string[];
  formFields: string[];
  deliveryMessage: string;
  benefits: string[];
}

export const LEAD_MAGNETS: LeadMagnet[] = [
  {
    id: "kitchen-cost-guide",
    slug: "kitchen-remodel-cost-guide",
    title: "2026 Kitchen Remodel Cost Guide",
    subtitle: "Lincoln & Placer County Edition",
    description:
      "Get real cost breakdowns for kitchen remodels in our area — not national averages. Includes budget tiers, what drives cost up, and how to save without sacrificing quality.",
    format: "PDF Guide — 12 Pages",
    image: IMAGES.kitchen,
    applicableServices: ["kitchen-remodeling"],
    applicableLocations: ["all"],
    formFields: ["name", "email", "phone", "city"],
    deliveryMessage:
      "Your cost guide is on its way! Check your email. In the meantime, want to discuss your specific project? Call Cristian at (916) 316-2948.",
    benefits: [
      "Real cost data from local projects",
      "Budget tier breakdowns ($12K to $80K+)",
      "What drives cost up — and what you can save on",
      "Red flags to watch for in contractor estimates",
      "Material comparison chart (quartz vs granite vs laminate)",
    ],
  },
  {
    id: "bathroom-checklist",
    slug: "bathroom-remodel-checklist",
    title: "Bathroom Remodel Checklist",
    subtitle: "47 Things to Consider Before You Start",
    description:
      "The complete bathroom remodel planning checklist used by professional contractors. Covers layout, materials, plumbing, electrical, ventilation, and accessibility.",
    format: "PDF Checklist — 8 Pages",
    image: IMAGES.bathroom,
    applicableServices: ["bathroom-remodeling", "custom-showers", "ada-accessible-remodeling"],
    applicableLocations: ["all"],
    formFields: ["name", "email", "phone"],
    deliveryMessage:
      "Your checklist is on its way! Check your email. Questions about your specific bathroom? Call us at (916) 316-2948 for a free consultation.",
    benefits: [
      "47-point planning checklist used by pros",
      "Layout optimization tips for any size bathroom",
      "Material durability & maintenance comparison",
      "Ventilation requirements most people miss",
      "ADA compliance checklist included",
    ],
  },
  {
    id: "contractor-questions",
    slug: "contractor-hiring-guide",
    title: "10 Questions to Ask Before Hiring a Contractor",
    subtitle: "Protect Yourself from Bad Contractors",
    description:
      "The essential questions every homeowner should ask before signing a contract. Includes red flags, license verification steps, and what a good estimate should look like.",
    format: "PDF Guide — 6 Pages",
    image: IMAGES.carlosWithClient,
    applicableServices: ["all"],
    applicableLocations: ["all"],
    formFields: ["name", "email"],
    deliveryMessage:
      "Your guide is on its way! We wrote this because too many homeowners get burned by bad contractors. Use these questions — and feel free to ask us the same ones.",
    benefits: [
      "10 critical questions with explanations",
      "Red flags that mean 'walk away'",
      "How to verify a contractor's license",
      "What a professional estimate should include",
      "Payment schedule best practices",
    ],
  },
  {
    id: "ada-conversion-guide",
    slug: "ada-bathroom-conversion-guide",
    title: "ADA Bathroom Conversion Guide",
    subtitle: "Safe, Beautiful & Built for Independence",
    description:
      "A compassionate guide for families navigating accessibility modifications. Covers walk-in showers, grab bars, slip-resistant materials, and how to maintain beautiful design.",
    format: "PDF Guide — 10 Pages",
    image: IMAGES.ada,
    applicableServices: ["ada-accessible-remodeling"],
    applicableLocations: ["all"],
    formFields: ["name", "email", "phone"],
    deliveryMessage:
      "Your guide is on its way. We understand this is often a big decision. Take your time with the guide, and when you're ready, Cristian is here to help — (916) 316-2948.",
    benefits: [
      "Walk-in shower conversion options explained",
      "Grab bar placement guide with diagrams",
      "Slip-resistant material comparison",
      "Design ideas that are beautiful AND safe",
      "Cost estimates for common ADA modifications",
    ],
  },
];

// ── Ad Campaign Configurations ──
export interface AdCampaign {
  id: string;
  name: string;
  targetService: string;
  targetLocation: string;
  headline: string;
  subheadline: string;
  offer: string;
  urgency: string;
  landingSlug: string;
}

export const AD_CAMPAIGNS: AdCampaign[] = [
  // Kitchen campaigns per location
  ...["lincoln", "roseville", "rocklin", "folsom", "el-dorado-hills", "auburn", "loomis", "newcastle"].map(
    (loc) => ({
      id: `kitchen-${loc}`,
      name: `Kitchen Remodeling — ${loc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`,
      targetService: "kitchen-remodeling",
      targetLocation: loc,
      headline: `Kitchen Remodeling in ${loc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}, CA`,
      subheadline: "Family-owned. 30+ years experience. No subcontractor roulette.",
      offer: "$1,500 OFF kitchen remodels over $20K — Spring 2026 Special",
      urgency: "Limited spots available for spring schedule",
      landingSlug: `kitchen-remodeling-${loc}`,
    })
  ),
  // Bathroom campaigns per location
  ...["lincoln", "roseville", "rocklin", "folsom", "el-dorado-hills"].map((loc) => ({
    id: `bathroom-${loc}`,
    name: `Bathroom Remodeling — ${loc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`,
    targetService: "bathroom-remodeling",
    targetLocation: loc,
    headline: `Bathroom Remodeling in ${loc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}, CA`,
    subheadline: "Custom tile showers, modern vanities, expert waterproofing.",
    offer: "15% OFF when you remodel 2+ bathrooms",
    urgency: "Book your free consultation today",
    landingSlug: `bathroom-remodeling-${loc}`,
  })),
  // ADA campaigns
  {
    id: "ada-placer-county",
    name: "ADA Bathroom Remodeling — Placer County",
    targetService: "ada-accessible-remodeling",
    targetLocation: "all",
    headline: "ADA Accessible Bathroom Remodeling",
    subheadline: "Safe, beautiful, and built for independence. Free grab bar installation included.",
    offer: "FREE grab bar installation (3 locations) with any ADA remodel",
    urgency: "Compassionate service for your family's needs",
    landingSlug: "ada-accessible-remodeling",
  },
  // Commercial campaign
  {
    id: "commercial-placer-county",
    name: "Commercial Remodeling — Placer County",
    targetService: "commercial",
    targetLocation: "all",
    headline: "Commercial Build-Outs & Renovations",
    subheadline: "Tenant improvements, office renovations, retail build-outs.",
    offer: "Free consultation for your commercial project",
    urgency: "Minimize downtime. Maximize ROI.",
    landingSlug: "commercial-remodeling",
  },
];