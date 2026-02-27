// Import local project images from assets
import kitchenImage1 from '@/assets/6a7e539968c99b40f8271a64cf537ad3b43ac0ea.png';
import kitchenImage2 from '@/assets/72c344f8b5c7ef896d5769baeb8782219a9a9e00.png';
import kitchenImage3 from '@/assets/a8d277bc56f52935e74da0b808992f7617b89f6c.png';
import bathroomImage1 from '@/assets/5305a3e18a34cb74352a3cc9b084a9289d5d276b.png';
import bathroomImage2 from '@/assets/0995b5e943a8b6c9d5905b1ce573f86fad51bd8a.png';
import bathroomImage3 from '@/assets/e2b87549c32d1a2a3f60641b136b04c87d3988cd.png';
import houseImage1 from '@/assets/f3a3da69b2d2f8cd0bf9750c5bcdde4cb2e5b0b8.png';
import houseImage2 from '@/assets/74b429c0a01b6bf2a8e930481bd7ba121e8b1b69.png';
import houseImage3 from '@/assets/2d3d10e0c7dd5fb841cd3ff509f73344431b9fd2.png';
import adaImage from '@/assets/ad669742901e0553b2a16ee7ddc9e010151c7f18.png';
import tileImage from '@/assets/64c12f3def3ced43d7309e1c235a6c907d89d362.png';
import constructionImage from '@/assets/849dc29ab6df9f85a755c25a1dcb88d34b0022f8.png';
import teamImage from '@/assets/9d281622c5c22a85b9e85ebec579088d9eacbcf5.png';

// Organized imported images (analyzed, renamed: before-after/ and gallery/)
import beforeAfterKitchen1Img from '@/assets/before-after/kitchen/kitchen-before-after-dark-cabinets.jpg';
import beforeAfterBath1Img from '@/assets/before-after/bathroom/bathroom-before-after-tub-to-walkin.jpg';
import beforeAfterBath2Img from '@/assets/before-after/bathroom/bathroom-before-after-double-vanity.jpg';
import beforeAfterBath3Img from '@/assets/before-after/bathroom/bathroom-before-after-ada-walkin.jpg';
import rosevilleKitchenHero from '@/assets/gallery/kitchen/roseville/roseville-kitchen-01.jpg';
import newcastleKitchenHero from '@/assets/gallery/kitchen/newcastle/newcastle-kitchen-01.jpg';
import joanneAdaHero from '@/assets/gallery/bathroom/joanne-ada/joanne-ada-bathroom-02.jpg';
import rosevilleBathHero from '@/assets/gallery/bathroom/roseville/roseville-bathroom-01.jpg';

// Real project photos (from local assets + organized gallery)
const realKitchenIsland = kitchenImage1;
const realKitchenCabinets = kitchenImage2;
const realKitchenCooktop = kitchenImage3;
const realKitchenOpenConcept = rosevilleKitchenHero;
const realKitchenIslandClose = kitchenImage2;
const realBathroomShower = bathroomImage1;
const realBathroomVanity = bathroomImage2;

// Real team photos (use team image for now, replace with actual team photos)
const teamCarlosOnSite = teamImage;
const teamCarlosCristianKitchen = teamImage;
const teamCristianMeasuring = teamImage;
const teamCarlosWithClient = teamImage;
const teamCarlosInKitchen = teamImage;
const teamCristianBlueprints = teamImage;
const teamBrandedTrucks = teamImage;

// Before & After project photos (real composites from imported images)
const baBeforeAfterBath1 = beforeAfterBath1Img;
const baBeforeAfterBath2 = beforeAfterBath2Img;
const baBeforeAfterBath3 = beforeAfterBath3Img;
const baBeforeAfterKitchen1 = beforeAfterKitchen1Img;

export const COMPANY = {
  name: "Franco & Sons Construction LLC",
  fullName: "Franco & Sons Construction LLC",
  tagline: "Quality Craftsmanship, Built on Experience",
  phone: "(916) 316-2948",
  email: "Cfrancoandsons@yahoo.com",
  address: "Lincoln, California",
  license: "CA Licensed General Contractor",
  yearsExperience: 30,
  owner: "Carlos Franco",
  coOwner: "Cristian Franco",
  positioning:
    "Family-owned, quality-driven remodeling contractor serving Lincoln and surrounding communities with start-to-finish project management and craftsmanship built on over 30 years of experience.",
};

export const IMAGES = {
  kitchen: realKitchenIsland,
  kitchenCabinets: realKitchenCabinets,
  kitchenCooktop: realKitchenCooktop,
  kitchenOpenConcept: realKitchenOpenConcept,
  kitchenIslandClose: realKitchenIslandClose,
  // Team photos
  carlosOnSite: teamCarlosOnSite,
  carlosCristianKitchen: teamCarlosCristianKitchen,
  cristianMeasuring: teamCristianMeasuring,
  carlosWithClient: teamCarlosWithClient,
  carlosInKitchen: teamCarlosInKitchen,
  cristianBlueprints: teamCristianBlueprints,
  brandedTrucks: teamBrandedTrucks,
  // Real bathroom project photos
  bathroom: realBathroomShower,
  bathroomVanity: realBathroomVanity,
  // Service images (using local assets)
  homeAddition: constructionImage,
  tile: tileImage,
  ada: adaImage,
  customShower: realBathroomShower,
  interiorRemodel: houseImage1,
  electricalPlumbing: constructionImage,
  painting: houseImage2,
  exteriorImprovements: houseImage3,
  contractor: teamImage,
  homeExterior: houseImage1,
  // Location images (using house images)
  lincoln: houseImage1,
  folsom: houseImage2,
  elDoradoHills: houseImage3,
  newcastle: newcastleKitchenHero,
  // Additional images (organized gallery)
  kitchenBeforeAfter: beforeAfterKitchen1Img,
  happyHomeowner: teamImage,
  livingRoom: houseImage1,
  // Before & After composite photos
  beforeAfterBath1: baBeforeAfterBath1,
  beforeAfterBath2: baBeforeAfterBath2,
  beforeAfterBath3: baBeforeAfterBath3,
  beforeAfterKitchen1: baBeforeAfterKitchen1,
  galleryRosevilleBath: rosevilleBathHero,
  galleryJoanneAda: joanneAdaHero,
  galleryNewcastleKitchen: newcastleKitchenHero,
};

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroDescription: string;
  image: string;
  galleryImages?: string[];
  features: string[];
  benefits: string[];
  icon: string;
  tier: "primary" | "secondary" | "additional";
  seoContent?: {
    heading: string;
    body: string;
  }[];
}

export const SERVICES: ServiceData[] = [
  // ── Primary Services ──
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    shortTitle: "Kitchens",
    description:
      "Transform your kitchen into the heart of your home with custom cabinetry, modern countertops, and thoughtful layouts designed for how your family lives.",
    heroDescription:
      "From cramped to captivating. We specialize in complete kitchen transformations — removing walls, opening layouts, and creating bright, spacious kitchens our clients love. Whether you're dreaming of more space, a modern design, or a complete home makeover, Franco & Sons Construction LLC will bring your vision to life.",
    image: IMAGES.kitchen,
    galleryImages: [
      IMAGES.kitchen,
      IMAGES.kitchenCabinets,
      IMAGES.kitchenCooktop,
      IMAGES.kitchenOpenConcept,
      IMAGES.kitchenIslandClose,
    ],
    features: [
      "Custom cabinet design & installation",
      "Granite, quartz & marble countertops",
      "Tile backsplash installation",
      "Kitchen island construction",
      "Plumbing & electrical upgrades",
      "Flooring replacement",
      "Lighting design & installation",
      "Open-concept wall removal",
    ],
    benefits: [
      "Increase your home value significantly",
      "Energy-efficient appliance integration",
      "Custom layouts for your lifestyle",
      "Start-to-finish project management",
    ],
    icon: "ChefHat",
    tier: "primary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Kitchen Remodeling?",
        body: "At Franco & Sons Construction LLC, we understand that your kitchen is more than just a room — it's the heart of your home. Our team specializes in complete kitchen transformations, from removing walls to opening layouts and creating bright, spacious kitchens that our clients love. Whether you're dreaming of more space, a modern design, or a complete home makeover, we will bring your vision to life. Our expertise in custom cabinetry, modern countertops, and thoughtful layouts ensures that your kitchen is designed for how your family lives.",
      },
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortTitle: "Bathrooms",
    description:
      "Create a spa-like retreat in your own home with custom showers, elegant tile work, and modern fixtures that elevate your daily routine.",
    heroDescription:
      "Your bathroom should be a sanctuary. We create beautiful, functional bathrooms with expert tile work, custom showers, soaking tubs, and premium fixtures. From powder rooms to master baths, every detail matters.",
    image: IMAGES.bathroom,
    galleryImages: [IMAGES.bathroom, IMAGES.bathroomVanity],
    features: [
      "Custom tile showers & surrounds",
      "Walk-in shower conversions",
      "Bathtub-to-shower conversions",
      "Vanity & cabinet installation",
      "Heated flooring systems",
      "Custom tile patterns & mosaics",
      "Plumbing fixture upgrades",
      "Ventilation & lighting improvements",
    ],
    benefits: [
      "Increase home resale value",
      "Reduce water usage with modern fixtures",
      "ADA-compliant options available",
      "Waterproofing guaranteed",
    ],
    icon: "Bath",
    tier: "primary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Bathroom Remodeling?",
        body: "At Franco & Sons Construction LLC, we believe that your bathroom should be a sanctuary. Our team creates beautiful, functional bathrooms with expert tile work, custom showers, soaking tubs, and premium fixtures. From powder rooms to master baths, every detail matters. We offer ADA-compliant options to ensure safety and accessibility, and our waterproofing guarantees ensure peace of mind. Whether you're looking to create a spa-like retreat or simply update your daily routine, we will bring your vision to life.",
      },
    ],
  },
  {
    slug: "commercial-remodeling",
    title: "Commercial Remodeling",
    shortTitle: "Commercial",
    description:
      "Tenant improvements, office build-outs, and retail renovations. We deliver commercial construction and remodeling with minimal downtime and clear communication so your business stays on track.",
    heroDescription:
      "From tenant improvements to office and retail build-outs, Franco & Sons Construction LLC brings the same quality and reliability we're known for in residential work to your commercial project. We work with business owners, property managers, and tenants to complete build-outs and renovations on schedule and within budget. Licensed, insured, and experienced in commercial permitting and code requirements.",
    image: IMAGES.homeAddition,
    features: [
      "Tenant improvements (TI) & build-outs",
      "Office renovations & interior build-outs",
      "Retail space construction",
      "Restaurant & hospitality build-outs",
      "Commercial permitting & code compliance",
      "Scheduling around your business hours",
      "Clear communication & project management",
      "Finish carpentry & interior fit-out",
    ],
    benefits: [
      "Minimize downtime — we work around your operations",
      "Licensed & insured for commercial work",
      "Transparent estimates and timelines",
      "Experience with Placer County commercial permits",
    ],
    icon: "Building2",
    tier: "primary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Commercial Remodeling?",
        body: "Franco & Sons Construction LLC offers commercial build-outs, tenant improvements, and office or retail renovations throughout Lincoln and Placer County. We bring the same family-owned reliability and quality craftsmanship to commercial projects — with clear communication, on-schedule delivery, and full compliance with commercial building codes. Whether you're opening a new location, refreshing an existing space, or need tenant improvements, we'll work with you to minimize downtime and maximize results.",
      },
    ],
  },
  {
    slug: "ada-accessible-remodeling",
    title: "ADA / Accessible Bathroom Remodeling",
    shortTitle: "ADA Bathrooms",
    description:
      "Safe, functional, and built to support independence. We specialize in ADA-compliant bathroom remodels that maintain a clean, modern look while prioritizing accessibility.",
    heroDescription:
      "Everyone deserves to feel safe and comfortable in their home. We replace outdated tubs with low-threshold walk-in showers designed for safety and long-term comfort. By opening up layouts, we create better flow and accessibility in compact spaces — with built-in benches, slip-resistant tile, and strategically placed grab bars for stability and confidence.",
    image: IMAGES.ada,
    features: [
      "Low-threshold walk-in shower conversions",
      "Built-in shower bench installation",
      "Grab bar placement & installation",
      "Slip-resistant tile flooring",
      "Doorway widening",
      "Non-slip flooring installation",
      "Accessible vanity modifications",
      "Comfort-height toilet installation",
    ],
    benefits: [
      "ADA-compliant design expertise",
      "Safe, functional, built for independence",
      "Maintain a clean, modern aesthetic",
      "Compassionate, respectful service",
    ],
    icon: "Accessibility",
    tier: "primary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for ADA-Compliant Bathroom Remodeling?",
        body: "At Franco & Sons Construction LLC, we specialize in ADA-compliant bathroom remodels that maintain a clean, modern look while prioritizing accessibility. Our team replaces outdated tubs with low-threshold walk-in showers designed for safety and long-term comfort. By opening up layouts, we create better flow and accessibility in compact spaces — with built-in benches, slip-resistant tile, and strategically placed grab bars for stability and confidence. We offer ADA-compliant design expertise, safe and functional solutions built for independence, and maintain a clean, modern aesthetic. Whether you're looking to create a safe and comfortable space for yourself or a loved one, we will bring your vision to life.",
      },
    ],
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    shortTitle: "Additions",
    description:
      "Expand your living space with expertly crafted home additions that seamlessly blend with your existing structure. More room for your growing family.",
    heroDescription:
      "Need more space? Franco & Sons Construction LLC builds home additions that look like they were always part of your original home. From extra bedrooms and family rooms to sunrooms and in-law suites, we handle every aspect of construction with start-to-finish project management.",
    image: IMAGES.homeAddition,
    features: [
      "Room additions & extensions",
      "Second-story additions",
      "Garage conversions",
      "ADU (Accessory Dwelling Unit) construction",
      "Sunroom & patio enclosures",
      "Structural modifications",
      "Permit acquisition & planning",
      "Foundation work for additions",
    ],
    benefits: [
      "Add square footage to your home",
      "Avoid the cost of moving",
      "Full permit & planning support",
      "Seamless architectural integration",
    ],
    icon: "Home",
    tier: "primary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Home Additions?",
        body: "At Franco & Sons Construction LLC, we understand that sometimes you need more space. Our team builds home additions that look like they were always part of your original home. From extra bedrooms and family rooms to sunrooms and in-law suites, we handle every aspect of construction with start-to-finish project management. We offer full permit and planning support, seamless architectural integration, and the ability to add square footage to your home without the cost of moving. Whether you're looking to expand your living space or create a new suite for a loved one, we will bring your vision to life.",
      },
    ],
  },

  // ── Secondary Services ──
  {
    slug: "interior-remodeling",
    title: "Interior Remodeling",
    shortTitle: "Interior",
    description:
      "Complete interior renovations from open-concept conversions to room transformations. We reimagine your living spaces for modern comfort and style.",
    heroDescription:
      "Your home should evolve with your lifestyle. Franco & Sons Construction LLC provides complete interior remodeling services — from opening up floor plans and modernizing living areas to converting unused rooms into functional spaces your family will love.",
    image: IMAGES.interiorRemodel,
    features: [
      "Open-concept floor plan conversions",
      "Living room & family room renovations",
      "Ceiling removal & height modifications",
      "Wall relocation & structural changes",
      "Built-in shelving & storage solutions",
      "Trim, molding & finish carpentry",
      "Drywall & texture work",
      "Complete room makeovers",
    ],
    benefits: [
      "Modernize dated interiors",
      "Improve flow and functionality",
      "Increase property value",
      "Custom designs for your lifestyle",
    ],
    icon: "LayoutDashboard",
    tier: "secondary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Interior Remodeling?",
        body: "At Franco & Sons Construction LLC, we believe that your home should evolve with your lifestyle. Our team provides complete interior remodeling services — from opening up floor plans and modernizing living areas to converting unused rooms into functional spaces your family will love. We offer modernize dated interiors, improve flow and functionality, increase property value, and custom designs for your lifestyle. Whether you're looking to refresh your living spaces or create a new layout, we will bring your vision to life.",
      },
    ],
  },
  {
    slug: "custom-showers",
    title: "Custom Showers",
    shortTitle: "Showers",
    description:
      "Beautiful custom shower installations featuring frameless glass, designer tile, and luxury features that turn your daily shower into an experience.",
    heroDescription:
      "A custom shower is the centerpiece of any great bathroom. Franco & Sons Construction LLC designs and installs stunning walk-in showers, frameless glass enclosures, and multi-head shower systems with expert tile work and waterproofing that stands the test of time.",
    image: IMAGES.customShower,
    galleryImages: [IMAGES.customShower, IMAGES.bathroomVanity],
    features: [
      "Frameless glass shower enclosures",
      "Custom tile design & installation",
      "Walk-in shower construction",
      "Multi-head & rain shower systems",
      "Built-in niches & shelving",
      "Bench seating installation",
      "Waterproofing & drainage systems",
      "Steam shower preparation",
    ],
    benefits: [
      "Luxury finishes at fair prices",
      "Expert waterproofing guaranteed",
      "Precision tile craftsmanship",
      "Custom designs for any space",
    ],
    icon: "Droplets",
    tier: "secondary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Custom Showers?",
        body: "At Franco & Sons Construction LLC, we believe that a custom shower is the centerpiece of any great bathroom. Our team designs and installs stunning walk-in showers, frameless glass enclosures, and multi-head shower systems with expert tile work and waterproofing that stands the test of time. We offer luxury finishes at fair prices, expert waterproofing guaranteed, precision tile craftsmanship, and custom designs for any space. Whether you're looking to create a spa-like retreat or simply update your daily routine, we will bring your vision to life.",
      },
    ],
  },
  {
    slug: "flooring-installation",
    title: "Flooring Installation",
    shortTitle: "Flooring",
    description:
      "From tile and hardwood to luxury vinyl plank, our skilled installers deliver flawless flooring that transforms any room in your home.",
    heroDescription:
      "Beautiful floors are the foundation of every great room. Our flooring specialists bring precision and artistry to every installation. We work with all materials and styles to create the perfect surface for your space.",
    image: IMAGES.tile,
    features: [
      "Ceramic & porcelain tile installation",
      "Natural stone flooring",
      "Hardwood floor installation",
      "Luxury vinyl plank (LVP)",
      "Custom tile patterns & borders",
      "Floor leveling & preparation",
      "Grout sealing & waterproofing",
      "Heated floor systems",
    ],
    benefits: [
      "Expert material recommendations",
      "Precision cutting & layout",
      "Long-lasting installations",
      "Wide selection of materials",
    ],
    icon: "Grid3X3",
    tier: "secondary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Flooring Installation?",
        body: "At Franco & Sons Construction LLC, we believe that beautiful floors are the foundation of every great room. Our team brings precision and artistry to every installation. We work with all materials and styles to create the perfect surface for your space. We offer expert material recommendations, precision cutting and layout, long-lasting installations, and a wide selection of materials. Whether you're looking to refresh your living spaces or create a new look, we will bring your vision to life.",
      },
    ],
  },
  {
    slug: "electrical-plumbing",
    title: "Electrical & Plumbing Upgrades",
    shortTitle: "Electrical & Plumbing",
    description:
      "Modern electrical and plumbing upgrades to support your remodel. Panel upgrades, new circuits, fixture installations, and pipe rerouting done right.",
    heroDescription:
      "Every great remodel needs solid infrastructure behind the walls. Franco & Sons Construction LLC handles electrical and plumbing upgrades as part of our comprehensive remodeling services — ensuring your home's systems are safe, up to code, and ready for modern living.",
    image: IMAGES.electricalPlumbing,
    features: [
      "Electrical panel upgrades",
      "New circuit installation",
      "Lighting fixture installation",
      "Outlet & switch upgrades",
      "Plumbing fixture replacement",
      "Pipe rerouting for remodels",
      "Water heater upgrades",
      "Code compliance updates",
    ],
    benefits: [
      "Licensed and code-compliant work",
      "Support for modern appliances",
      "Energy efficiency improvements",
      "Integrated with your remodel plan",
    ],
    icon: "Zap",
    tier: "secondary",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Electrical & Plumbing Upgrades?",
        body: "At Franco & Sons Construction LLC, we believe that every great remodel needs solid infrastructure behind the walls. Our team handles electrical and plumbing upgrades as part of our comprehensive remodeling services — ensuring your home's systems are safe, up to code, and ready for modern living. We offer licensed and code-compliant work, support for modern appliances, energy efficiency improvements, and integration with your remodel plan. Whether you're looking to update your home's systems or ensure safety and compliance, we will bring your vision to life.",
      },
    ],
  },

  // ── Additional / Specialized Services ──
  {
    slug: "interior-painting",
    title: "Interior Home Painting",
    shortTitle: "Painting",
    description:
      "Professional interior painting services with meticulous prep work, premium paints, and clean, crisp results that refresh your entire home.",
    heroDescription:
      "A fresh coat of paint is one of the most impactful upgrades you can make. Franco & Sons Construction LLC provides professional interior painting with thorough surface preparation, premium paints, and the attention to detail that transforms rooms from tired to beautiful.",
    image: IMAGES.painting,
    features: [
      "Full interior painting",
      "Accent wall design",
      "Cabinet & trim painting",
      "Ceiling painting & texturing",
      "Color consultation",
      "Surface preparation & repair",
      "Drywall patching & touch-ups",
      "Clean, protective masking",
    ],
    benefits: [
      "Refresh any room affordably",
      "Premium paints & materials",
      "Meticulous prep for lasting results",
      "Clean, professional workmanship",
    ],
    icon: "Paintbrush",
    tier: "additional",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Interior Home Painting?",
        body: "At Franco & Sons Construction LLC, we believe that a fresh coat of paint is one of the most impactful upgrades you can make. Our team provides professional interior painting with thorough surface preparation, premium paints, and the attention to detail that transforms rooms from tired to beautiful. We offer refresh any room affordably, premium paints and materials, meticulous prep for lasting results, and clean, professional workmanship. Whether you're looking to refresh your living spaces or create a new look, we will bring your vision to life.",
      },
    ],
  },
  {
    slug: "exterior-improvements",
    title: "Exterior Home Improvements",
    shortTitle: "Exterior",
    description:
      "Boost curb appeal and protect your investment with exterior upgrades including siding, trim, decks, and outdoor living enhancements.",
    heroDescription:
      "Your home's exterior is the first impression and your primary protection from the elements. Franco & Sons Construction LLC provides expert exterior improvement services that boost curb appeal, increase property value, and keep your home looking its best for years to come.",
    image: IMAGES.exteriorImprovements,
    features: [
      "Siding repair & replacement",
      "Exterior trim & fascia work",
      "Deck construction & repair",
      "Patio & outdoor living areas",
      "Exterior painting",
      "Window & door installation",
      "Gutter & drainage improvements",
      "Fence construction & repair",
    ],
    benefits: [
      "Boost curb appeal & home value",
      "Protect your home from elements",
      "Quality materials built to last",
      "Expert craftsmanship throughout",
    ],
    icon: "TreePine",
    tier: "additional",
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Exterior Home Improvements?",
        body: "At Franco & Sons Construction LLC, we believe that your home's exterior is the first impression and your primary protection from the elements. Our team provides expert exterior improvement services that boost curb appeal, increase property value, and keep your home looking its best for years to come. We offer boost curb appeal and home value, protect your home from elements, quality materials built to last, and expert craftsmanship throughout. Whether you're looking to refresh your living spaces or create a new look, we will bring your vision to life.",
      },
    ],
  },
];

export interface Testimonial {
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Steven",
    location: "Roseville, CA",
    service: "Kitchen Remodeling",
    quote:
      "Franco & Sons Construction LLC completely transformed our cramped kitchen into a bright, spacious, and functional space we absolutely love. They removed the false ceiling, moved walls, and opened up the entire layout. The craftsmanship and attention to detail exceeded our expectations.",
    rating: 5,
    image: IMAGES.kitchen,
  },
  {
    name: "Joanne",
    location: "Roseville, CA",
    service: "ADA Accessible Bathroom",
    quote:
      "They replaced our outdated tub with a beautiful low-threshold walk-in shower designed for safety and comfort. The built-in bench, slip-resistant tile, and grab bars give us confidence every day. Safe, functional, and it looks amazing — not institutional at all.",
    rating: 5,
    image: IMAGES.ada,
  },
  {
    name: "Maria & Roberto Herrera",
    location: "Lincoln, CA",
    service: "Kitchen Remodeling",
    quote:
      "Cristian and Carlos are incredible. They transformed our 1990s kitchen into a modern dream. The attention to detail on the tile backsplash was beyond what we expected. They treated our home like it was their own.",
    rating: 5,
    image: IMAGES.happyHomeowner,
  },
  {
    name: "David & Susan Park",
    location: "Rocklin, CA",
    service: "Bathroom Remodeling",
    quote:
      "We had three contractors give us estimates, and Franco & Sons Construction LLC was the most thorough. The custom tile shower they built is absolutely stunning. On time, on budget, and the quality is outstanding.",
    rating: 5,
    image: IMAGES.bathroomVanity,
  },
  {
    name: "James Thompson",
    location: "Roseville, CA",
    service: "ADA Accommodations",
    quote:
      "When my mother needed accessibility modifications, Franco & Sons Construction LLC handled everything with such care and professionalism. The walk-in shower and grab bars they installed look beautiful. They truly care about their clients.",
    rating: 5,
    image: IMAGES.ada,
  },
  {
    name: "Angela & Michael Torres",
    location: "Auburn, CA",
    service: "Home Addition",
    quote:
      "We needed an extra bedroom and bathroom for our growing family. Franco & Sons Construction LLC built an addition that looks like it was always part of the house. The craftsmanship is impeccable and the process was smooth from permit to completion.",
    rating: 5,
    image: IMAGES.homeAddition,
  },
];

export interface LocationData {
  slug: string;
  city: string;
  state: string;
  description: string;
  highlights: string[];
  isPrimary: boolean;
  seoContent?: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "lincoln",
    city: "Lincoln",
    state: "California",
    description:
      "As Lincoln's trusted local contractor, Franco & Sons Construction LLC has been proudly serving this growing community with quality construction and remodeling. We know Lincoln's neighborhoods, building codes, and architectural styles inside and out. From Sun City to the newer developments, we're your neighbors and your builders.",
    highlights: [
      "Based in Lincoln — quick response times",
      "Familiar with local building codes & HOA requirements",
      "Hundreds of projects completed in Lincoln",
      "References available from Lincoln homeowners",
    ],
    isPrimary: true,
    seoContent: [
      {
        heading: "Why Choose Franco & Sons for Lincoln Projects?",
        body: "At Franco & Sons Construction LLC, we are Lincoln's trusted local contractor. We have been proudly serving this growing community with quality construction and remodeling. We know Lincoln's neighborhoods, building codes, and architectural styles inside and out. From Sun City to the newer developments, we're your neighbors and your builders. We offer quick response times, familiarity with local building codes and HOA requirements, hundreds of projects completed in Lincoln, and references available from Lincoln homeowners. Whether you're looking to expand your living space or create a new look, we will bring your vision to life.",
      },
    ],
  },
  {
    slug: "rocklin",
    city: "Rocklin",
    state: "California",
    description:
      "Franco & Sons Construction LLC proudly serves the Rocklin community with premium remodeling and construction services. From Whitney Ranch to Stanford Ranch, we've completed dozens of kitchen and bathroom remodels throughout Rocklin's diverse neighborhoods.",
    highlights: [
      "Extensive experience in Rocklin homes",
      "Knowledge of Rocklin permit requirements",
      "Projects in Whitney Ranch, Stanford Ranch & more",
      "Free on-site estimates for Rocklin homeowners",
    ],
    isPrimary: false,
  },
  {
    slug: "roseville",
    city: "Roseville",
    state: "California",
    description:
      "Roseville homeowners trust Franco & Sons Construction LLC for quality remodeling and construction. Whether you're in West Roseville's new developments or updating a home in older neighborhoods, we deliver consistent excellence. Our featured kitchen remodel for Steven in Roseville is a perfect example of our work.",
    highlights: [
      "Featured projects completed in Roseville",
      "Familiar with Roseville city permits",
      "Projects from Fiddyment Farm to Woodcreek",
      "Same-day estimate scheduling available",
    ],
    isPrimary: false,
  },
  {
    slug: "loomis",
    city: "Loomis",
    state: "California",
    description:
      "Franco & Sons Construction LLC serves the Loomis community with the same dedication and quality craftsmanship we're known for throughout the region. From rural properties to town center homes, we handle kitchen remodels, bathroom renovations, and additions of all sizes.",
    highlights: [
      "Experience with rural & equestrian properties",
      "Knowledge of Loomis building standards",
      "Full-service construction & remodeling",
      "Competitive pricing for Loomis residents",
    ],
    isPrimary: false,
  },
  {
    slug: "newcastle",
    city: "Newcastle",
    state: "California",
    description:
      "Franco & Sons Construction LLC brings expert remodeling services to the Newcastle community. From charming foothill properties to modern homes, our family team delivers the same quality craftsmanship and personal attention that has made us Placer County's trusted contractor.",
    highlights: [
      "Experience with foothill home construction",
      "Familiar with Placer County requirements",
      "Kitchen, bathroom & addition specialists",
      "Free consultations for Newcastle homeowners",
    ],
    isPrimary: false,
  },
  {
    slug: "auburn",
    city: "Auburn",
    state: "California",
    description:
      "From Auburn's historic downtown properties to foothill homes, Franco & Sons Construction LLC brings expert construction and remodeling services to the Auburn community. We understand the unique building challenges of foothill construction and deliver quality results every time.",
    highlights: [
      "Experience with foothill construction",
      "Historic property renovation expertise",
      "Familiar with Placer County requirements",
      "Serving Auburn and surrounding foothills",
    ],
    isPrimary: false,
  },
  {
    slug: "folsom",
    city: "Folsom",
    state: "California",
    description:
      "Franco & Sons Construction LLC serves the Folsom community with premium kitchen remodeling, bathroom renovations, and home additions. Whether you're in Broadstone, Empire Ranch, or Folsom's historic district, we bring the same dedication to quality and craftsmanship on every project.",
    highlights: [
      "Serving Folsom and surrounding areas",
      "Kitchen & bathroom remodel specialists",
      "Familiar with Folsom city requirements",
      "Free in-home consultations available",
    ],
    isPrimary: false,
  },
  {
    slug: "el-dorado-hills",
    city: "El Dorado Hills",
    state: "California",
    description:
      "El Dorado Hills homeowners deserve premium craftsmanship. Franco & Sons Construction LLC delivers high-end remodeling and construction services that match the quality El Dorado Hills homeowners expect, from luxury kitchen remodels to custom bathroom renovations.",
    highlights: [
      "High-end residential specialization",
      "Premium materials & finishes",
      "Experience with luxury home renovations",
      "Professional, respectful service",
    ],
    isPrimary: false,
  },
];

export interface ProcessStep {
  step: number;
  title: "Free Consultation" | "Detailed Estimate" | "Design & Planning" | "Construction" | "Final Walkthrough";
  description: string;
  details: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "We start with a free, no-obligation visit to your home. Cristian will discuss your vision, assess the space, and answer all your questions.",
    details: [
      "Schedule at your convenience",
      "Walk-through of the project area",
      "Discuss your goals and budget",
      "Review material options",
      "No pressure, no obligation",
    ],
  },
  {
    step: 2,
    title: "Detailed Estimate",
    description:
      "You'll receive a detailed written estimate covering the full scope of your project. We believe in transparency — no hidden fees or surprise charges.",
    details: [
      "Clear cost breakdown",
      "Material specifications",
      "Projected timeline",
      "Payment schedule options",
    ],
  },
  {
    step: 3,
    title: "Design & Planning",
    description:
      "Once approved, we finalize designs, select materials, and handle permits when required. You'll know exactly what to expect before we break ground.",
    details: [
      "Material selection assistance",
      "Design finalization",
      "Permit coordination (when required)",
      "Schedule coordination",
      "Pre-construction walkthrough",
    ],
  },
  {
    step: 4,
    title: "Construction",
    description:
      "Our skilled team gets to work. Carlos and Cristian are on the job site personally, maintaining a clean workspace and ensuring quality at every stage.",
    details: [
      "Carlos & Cristian on-site daily",
      "Clean and organized job site",
      "Quality checkpoints throughout",
      "Respectful of your home & family",
      "On-schedule completion goal",
    ],
  },
  {
    step: 5,
    title: "Final Walkthrough",
    description:
      "We don't consider a job done until you're completely satisfied. We walk through every detail together and address any concerns.",
    details: [
      "Comprehensive quality inspection",
      "Touch-ups and final adjustments",
      "Clean-up of work areas",
      "Review of warranties",
      "Your complete satisfaction guaranteed",
    ],
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "How long does a typical kitchen remodel take?",
    answer:
      "A complete kitchen remodel typically takes 4-8 weeks depending on the scope. Simple updates like countertops and backsplash can be completed in 1-2 weeks. We'll provide a detailed timeline during your free consultation.",
    category: "Timeline",
  },
  {
    question: "Do you handle permits?",
    answer:
      "When your project involves structural changes or other work that requires permits, yes — we handle the entire permit process as part of our start-to-finish project management. Not every job requires permits, and we'll let you know upfront what applies to your specific project. We're familiar with building codes and requirements for Lincoln, Rocklin, Roseville, Auburn, Loomis, Newcastle, Folsom, El Dorado Hills, and all surrounding areas.",
    category: "Process",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Franco & Sons Construction LLC is a fully licensed California General Contractor and carries comprehensive general liability and workers' compensation insurance. We're happy to provide proof of insurance upon request.",
    category: "Business",
  },
  {
    question: "Do you offer financing?",
    answer:
      "We can work with you on flexible payment schedules. Typically, we structure payments as a deposit to begin, progress payments at milestones, and a final payment upon completion and your satisfaction.",
    category: "Payment",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Lincoln, California and serve communities within approximately 25 miles, including Rocklin, Roseville, Loomis, Newcastle, Auburn, Folsom, and El Dorado Hills. We're happy to discuss projects within our service area.",
    category: "Service Area",
  },
  {
    question: "Can I live in my home during a remodel?",
    answer:
      "In most cases, yes! We work hard to minimize disruption to your daily life. For kitchen remodels, we'll help you set up a temporary kitchen area. We'll discuss logistics specific to your project during the planning phase.",
    category: "Process",
  },
  {
    question: "Do you provide a warranty on your work?",
    answer:
      "Yes, we stand behind every project. Franco & Sons Construction LLC provides a workmanship warranty on all our construction and remodeling projects. Specific warranty terms are outlined in your contract. Many of our material partners also provide manufacturer warranties.",
    category: "Business",
  },
  {
    question: "How do I get a free consultation?",
    answer:
      "Simply fill out our contact form, call us at (916) 316-2948, or text us. Cristian will schedule a convenient time to visit your home, discuss your project, and provide a detailed estimate — all at no cost and no obligation.",
    category: "Process",
  },
  {
    question: "What makes Franco & Sons Construction LLC different from other contractors?",
    answer:
      "We're a family business with over 30 years of construction experience. Carlos and Cristian Franco work on every project personally — you won't be handed off to subcontractors you've never met. We provide start-to-finish project management, communicate openly, show up when we say we will, and treat your home with respect.",
    category: "Business",
  },
  {
    question: "Do you specialize in ADA-compliant bathroom remodels?",
    answer:
      "Yes! ADA / Accessible bathroom remodeling is one of our primary services. We specialize in low-threshold walk-in showers, grab bar installation, slip-resistant flooring, built-in benches, and other accessibility features — all while maintaining a clean, modern aesthetic. Safe, functional, and built to support independence.",
    category: "Services",
  },
];

export interface BeforeAfterProject {
  id: string;
  title: string;
  category: "Bathroom" | "Kitchen";
  location: string;
  image: string;
  highlights: string[];
}

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: "ba-bath-1",
    title: "Hall Bathroom Remodel",
    category: "Bathroom",
    location: "Placer County, CA", // Placeholder — confirm with client
    image: IMAGES.beforeAfterBath1,
    highlights: [
      "Tub-to-shower conversion with sliding glass door",
      "Modern gray tile surround with accent band",
      "LVP flooring installation",
      "New white shaker vanity & countertop",
    ],
  },
  {
    id: "ba-bath-2",
    title: "Guest Bathroom Renovation",
    category: "Bathroom",
    location: "Placer County, CA", // Placeholder — confirm with client
    image: IMAGES.beforeAfterBath2,
    highlights: [
      "Full shower retile with subway tile to ceiling",
      "Custom mosaic shower floor & niche",
      "New white shaker vanity with quartz top",
      "Marble-look tile flooring throughout",
    ],
  },
  {
    id: "ba-bath-3",
    title: "Powder Room Modernization",
    category: "Bathroom",
    location: "Placer County, CA", // Placeholder — confirm with client
    image: IMAGES.beforeAfterBath3,
    highlights: [
      "Modern espresso vanity with integrated sink",
      "Decorative tile backsplash with framed mirror",
      "Mosaic tile flooring upgrade",
      "Complete fixture replacement",
    ],
  },
  {
    id: "ba-kitchen-1",
    title: "Complete Kitchen Transformation",
    category: "Kitchen",
    location: "Placer County, CA", // Placeholder — confirm with client
    image: IMAGES.beforeAfterKitchen1,
    highlights: [
      "Full cabinet replacement — dark espresso shaker style",
      "Granite countertops with island",
      "Recessed lighting throughout",
      "Complete layout reconfiguration",
    ],
  },
];