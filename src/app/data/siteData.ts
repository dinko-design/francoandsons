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

// Additional kitchen gallery imports
import jamesKitchen01 from '@/assets/gallery/kitchen/318-james-drive/318-james-kitchen-01.jpg';
import jamesKitchen02 from '@/assets/gallery/kitchen/318-james-drive/318-james-kitchen-02.jpg';
import crazyWoodKitchen01 from '@/assets/gallery/kitchen/crazy-wood/crazy-wood-kitchen-01.jpg';
import crazyWoodKitchen02 from '@/assets/gallery/kitchen/crazy-wood/crazy-wood-kitchen-02.jpg';

// Additional bathroom gallery imports
import bathMisc01 from '@/assets/gallery/bathroom/bathroom-misc-01.jpg';
import bathMisc02 from '@/assets/gallery/bathroom/bathroom-misc-02.jpg';
import bathMisc03 from '@/assets/gallery/bathroom/bathroom-misc-03.jpg';
import roseville2Bath01 from '@/assets/gallery/bathroom/roseville-2/roseville-bathroom-2-01.jpg';
import roseville2Bath02 from '@/assets/gallery/bathroom/roseville-2/roseville-bathroom-2-02.jpg';
import bathRemodel3_01 from '@/assets/gallery/bathroom/bathroom-remodel-3/bathroom-remodel-3-01.jpg';

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
  name: "Franco and Sons Construction LLC",
  fullName: "Franco and Sons Construction LLC",
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
  // ── Kitchen images ──
  kitchen: realKitchenIsland,
  kitchenCabinets: realKitchenCabinets,
  kitchenCooktop: realKitchenCooktop,
  kitchenOpenConcept: realKitchenOpenConcept,
  kitchenIslandClose: jamesKitchen01,
  kitchenJames: jamesKitchen02,
  kitchenCrazyWood: crazyWoodKitchen01,
  kitchenCrazyWood2: crazyWoodKitchen02,
  // ── Bathroom images ──
  bathroom: rosevilleBathHero,
  bathroomVanity: roseville2Bath01,
  bathroomShower: roseville2Bath02,
  bathroomMisc1: bathMisc01,
  bathroomMisc2: bathMisc02,
  bathroomMisc3: bathMisc03,
  bathroomRemodel3: bathRemodel3_01,
  // ── Service-specific images ──
  homeAddition: constructionImage,
  tile: tileImage,
  ada: joanneAdaHero,
  customShower: bathMisc01,
  interiorRemodel: houseImage1,
  electricalPlumbing: houseImage3,
  painting: houseImage2,
  exteriorImprovements: houseImage1,
  contractor: teamImage,
  homeExterior: houseImage1,
  // ── Team photos ──
  carlosOnSite: teamCarlosOnSite,
  carlosCristianKitchen: teamCarlosCristianKitchen,
  cristianMeasuring: teamCristianMeasuring,
  carlosWithClient: teamCarlosWithClient,
  carlosInKitchen: teamCarlosInKitchen,
  cristianBlueprints: teamCristianBlueprints,
  brandedTrucks: teamBrandedTrucks,
  // ── Location images ──
  lincoln: houseImage1,
  folsom: houseImage2,
  elDoradoHills: houseImage3,
  newcastle: newcastleKitchenHero,
  // ── Before & After ──
  kitchenBeforeAfter: beforeAfterKitchen1Img,
  beforeAfterBath1: baBeforeAfterBath1,
  beforeAfterBath2: baBeforeAfterBath2,
  beforeAfterBath3: baBeforeAfterBath3,
  beforeAfterKitchen1: baBeforeAfterKitchen1,
  galleryRosevilleBath: rosevilleBathHero,
  galleryJoanneAda: joanneAdaHero,
  galleryNewcastleKitchen: newcastleKitchenHero,
  // ── Misc ──
  happyHomeowner: teamImage,
  livingRoom: houseImage1,
};

export interface SubServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroDescription: string;
  sections: {
    heading: string;
    body: string;
  }[];
  features: string[];
  faqs: { q: string; a: string }[];
}

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
  subPages?: SubServicePage[];
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
      "From cramped to captivating. We specialize in complete kitchen transformations — removing walls, opening layouts, and creating bright, spacious kitchens our clients love. Whether you're dreaming of more space, a modern design, or a complete home makeover, Franco and Sons Construction LLC will bring your vision to life.",
    image: IMAGES.kitchenOpenConcept,
    galleryImages: [
      IMAGES.kitchenOpenConcept,
      IMAGES.kitchen,
      IMAGES.kitchenCabinets,
      IMAGES.kitchenCooktop,
      IMAGES.kitchenIslandClose,
      IMAGES.kitchenJames,
      IMAGES.kitchenCrazyWood,
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
        heading: "Why Choose Franco and Sons Construction LLC for Kitchen Remodeling?",
        body: "At Franco and Sons Construction LLC, we understand that your kitchen is more than just a room — it's the heart of your home. Our team specializes in complete kitchen transformations, from removing walls to opening layouts and creating bright, spacious kitchens that our clients love. Whether you're dreaming of more space, a modern design, or a complete home makeover, we will bring your vision to life. Our expertise in custom cabinetry, modern countertops, and thoughtful layouts ensures that your kitchen is designed for how your family lives.",
      },
    ],
    subPages: [
      {
        slug: "small-kitchen-remodel",
        title: "Small Kitchen Remodel Ideas",
        metaTitle: "Small Kitchen Remodel Ideas | Lincoln & Roseville CA | Franco and Sons Construction LLC",
        metaDescription: "Maximize your small kitchen with smart layouts, custom storage, and space-saving designs. Franco and Sons Construction LLC specializes in small kitchen remodels in Lincoln, Roseville, and Placer County.",
        heroHeading: "Small Kitchen Remodel Ideas for Lincoln and Placer County Homes",
        heroDescription: "A small kitchen doesn't mean small possibilities. Franco and Sons Construction LLC specializes in transforming compact kitchens into bright, functional spaces with smart layouts, vertical storage, and design tricks that make every square foot count.",
        sections: [
          { heading: "Maximizing Space in a Small Kitchen", body: "The key to a successful small kitchen remodel is thoughtful planning. We focus on opening sightlines, using light colors and reflective surfaces, and choosing slim-profile appliances that deliver full performance. Wall-mounted shelving, pull-out pantry systems, and corner solutions ensure no space goes to waste." },
          { heading: "Smart Layout Changes That Transform Small Kitchens", body: "Sometimes the biggest improvement is rethinking the layout entirely. Removing a non-load-bearing wall, relocating the refrigerator, or converting a peninsula into an island with seating can dramatically change how your kitchen feels and functions. We handle structural modifications, plumbing rerouting, and electrical updates as part of our full-service remodeling approach." },
          { heading: "Cost-Effective Upgrades That Make a Big Impact", body: "Not every small kitchen remodel requires a complete gut renovation. Refacing cabinets, upgrading countertops, installing under-cabinet lighting, and adding a tile backsplash can refresh the entire look for a fraction of the cost. We'll help you prioritize the changes that deliver the most value." },
        ],
        features: ["Custom cabinetry to maximize vertical space", "Space-saving appliance recommendations", "Open-concept wall removal", "Under-cabinet and recessed lighting", "Pull-out pantry and corner storage solutions", "Light-reflecting countertop and backsplash materials"],
        faqs: [
          { q: "How much does a small kitchen remodel cost in Lincoln, CA?", a: "Small kitchen remodels in the Lincoln and Roseville area typically range from $15,000 to $45,000 depending on scope. We provide free, detailed estimates so you know exactly what to expect before any work begins." },
          { q: "Can you make a small kitchen feel bigger without adding square footage?", a: "Absolutely. Removing upper cabinets on one wall, installing open shelving, using light colors, adding under-cabinet lighting, and choosing reflective countertop materials all create the illusion of a larger space." },
          { q: "How long does a small kitchen remodel take?", a: "Most small kitchen remodels take 3-6 weeks depending on the scope of work. We provide a detailed timeline before starting and keep you updated throughout the process." },
        ],
      },
      {
        slug: "open-concept-kitchen",
        title: "Open Concept Kitchen Remodeling",
        metaTitle: "Open Concept Kitchen Remodeling | Lincoln & Roseville CA | Franco and Sons Construction LLC",
        metaDescription: "Transform your closed-off kitchen into a bright, open living space. Franco and Sons Construction LLC specializes in wall removal, structural beam work, and open concept kitchen remodels in Placer County.",
        heroHeading: "Open Concept Kitchen Remodeling in Lincoln, California",
        heroDescription: "Closed-off kitchens are the number one complaint we hear from homeowners. Franco and Sons Construction LLC specializes in removing walls, installing structural beams, and creating seamless open-concept kitchens that connect your cooking, dining, and living spaces.",
        sections: [
          { heading: "Why Open Concept Kitchens Are So Popular", body: "An open floor plan creates better flow for entertaining, allows parents to keep an eye on kids, and fills the space with natural light. Removing the wall between your kitchen and living area is one of the highest-impact renovations you can make — both for daily living and resale value." },
          { heading: "Structural Considerations and Load-Bearing Walls", body: "Many kitchen walls are load-bearing, which means they support the structure above. Our team works with structural engineers to design properly sized beams that replace the wall's function while opening up the space. We handle permits, inspections, and all structural work in-house." },
          { heading: "Designing the Perfect Open Kitchen Layout", body: "Once the wall is gone, the layout possibilities expand dramatically. We help you plan island placement, traffic flow, appliance positioning, and sight lines so the new space works beautifully for cooking and living. Every open-concept project we do includes a detailed design phase before any demolition begins." },
        ],
        features: ["Load-bearing wall removal with structural beam installation", "Kitchen island design and construction", "Unified flooring transitions", "Recessed lighting layout for open spaces", "Electrical and plumbing rerouting", "Full permit acquisition and engineering"],
        faqs: [
          { q: "Can any kitchen wall be removed for an open concept layout?", a: "Most walls can be opened up, but load-bearing walls require structural support (typically a beam) to replace them. We assess every project with structural calculations and handle all engineering and permits." },
          { q: "How much does an open concept kitchen remodel cost?", a: "Open concept kitchen remodels in the Placer County area typically range from $35,000 to $85,000 depending on whether walls are load-bearing, the extent of kitchen updates, and finish selections." },
          { q: "Will I need permits for an open concept remodel?", a: "Yes — any structural modification requires permits and inspections. We handle the entire permit process as part of our service, so you don't have to worry about it." },
        ],
      },
      {
        slug: "kitchen-cabinets",
        title: "Kitchen Cabinet Installation and Refacing",
        metaTitle: "Kitchen Cabinet Installation & Refacing | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Custom kitchen cabinet installation, refacing, and replacement in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC delivers expert cabinetry with quality materials and precise craftsmanship.",
        heroHeading: "Kitchen Cabinet Installation and Refacing in Lincoln, CA",
        heroDescription: "Cabinets define your kitchen's look, storage, and functionality. Whether you need full custom cabinet installation or cost-effective refacing to refresh your existing layout, Franco and Sons Construction LLC delivers precise craftsmanship with materials built to last.",
        sections: [
          { heading: "Custom Cabinet Installation vs. Refacing", body: "Full cabinet replacement gives you complete control over layout, size, and style — ideal for kitchen remodels that change the floor plan. Cabinet refacing keeps your existing boxes and replaces doors, drawer fronts, and hardware for a fresh look at roughly half the cost. We help you decide which approach makes the most sense for your goals and budget." },
          { heading: "Cabinet Styles and Materials We Work With", body: "From shaker-style to flat-panel modern, from solid wood to premium thermofoil, we install cabinets in every style and price range. We source from trusted manufacturers and can also build fully custom pieces for unique spaces. Soft-close hinges and full-extension drawers come standard on every project." },
          { heading: "Maximizing Storage With Smart Cabinet Design", body: "The best kitchens have a place for everything. We design cabinet layouts with pull-out spice racks, lazy Susans, deep drawer organizers, tray dividers, and built-in trash pull-outs. Our goal is a kitchen that looks clean and organized every day — not just on move-in day." },
        ],
        features: ["Full custom cabinet installation", "Cabinet refacing and door replacement", "Soft-close hinges and full-extension drawers", "Pull-out organizers and storage accessories", "Crown molding and trim finishing", "Under-cabinet lighting integration"],
        faqs: [
          { q: "How much do new kitchen cabinets cost?", a: "Kitchen cabinet costs depend on material, style, and kitchen size. Stock cabinets start around $5,000-$10,000 installed, while semi-custom and fully custom options range from $15,000-$40,000+. We provide detailed estimates based on your specific kitchen." },
          { q: "Is cabinet refacing worth it?", a: "If your cabinet boxes are in good structural condition and you're happy with the layout, refacing can save 40-50% compared to full replacement while giving your kitchen a completely new look." },
          { q: "How long does cabinet installation take?", a: "Cabinet installation typically takes 2-5 days depending on kitchen size and complexity. If we're replacing cabinets as part of a larger remodel, it's coordinated within the overall project timeline." },
        ],
      },
      {
        slug: "kitchen-countertops",
        title: "Kitchen Countertop Installation",
        metaTitle: "Kitchen Countertops (Granite, Quartz, Marble) | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Expert kitchen countertop installation in Lincoln and Roseville — granite, quartz, marble, and butcher block. Franco and Sons Construction LLC delivers precision templating and flawless installation.",
        heroHeading: "Kitchen Countertop Installation in Lincoln and Placer County",
        heroDescription: "Your countertops are the workhorse and centerpiece of your kitchen. Franco and Sons Construction LLC installs granite, quartz, marble, and butcher block countertops with precision templating, seamless seams, and expert finishing that elevates your entire kitchen.",
        sections: [
          { heading: "Choosing the Right Countertop Material", body: "Quartz offers durability and low maintenance with consistent color patterns. Granite provides natural beauty with unique veining in every slab. Marble delivers timeless elegance for those willing to maintain it. Butcher block adds warmth and character. We help you weigh the pros and cons of each material based on how you use your kitchen." },
          { heading: "Our Countertop Installation Process", body: "Every countertop project starts with precise digital templating after cabinets are set. We work with local fabricators to cut your slabs to exact specifications, including cutouts for sinks, cooktops, and outlets. Installation day is fast and clean — most countertops are installed in a single day." },
          { heading: "Edge Profiles, Backsplashes, and Finishing Details", body: "The edge profile you choose changes the entire look of your countertops. From classic eased edges to dramatic waterfall islands, we offer every profile option. We also coordinate countertop installation with backsplash tile work for a cohesive, finished design." },
        ],
        features: ["Granite, quartz, marble, and butcher block", "Precision digital templating", "Waterfall edge island installation", "Undermount and farmhouse sink cutouts", "Backsplash coordination", "Same-day installation on most projects"],
        faqs: [
          { q: "What is the best countertop material for a busy kitchen?", a: "Quartz is the most popular choice for busy kitchens — it's non-porous, scratch-resistant, and never needs sealing. Granite is another excellent choice that offers natural beauty with strong durability." },
          { q: "How much do kitchen countertops cost?", a: "Countertop costs vary by material: laminate starts around $20-$40/sq ft installed, quartz runs $50-$100/sq ft, and natural stone (granite, marble) ranges from $60-$150/sq ft. We provide exact quotes based on your kitchen dimensions." },
          { q: "How long does countertop installation take?", a: "Templating takes about an hour, fabrication typically takes 1-2 weeks, and installation is usually completed in one day." },
        ],
      },
      {
        slug: "kitchen-island-design",
        title: "Kitchen Island Design and Build",
        metaTitle: "Custom Kitchen Island Design & Build | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Custom kitchen island design and construction in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC builds functional islands with seating, storage, and integrated appliances.",
        heroHeading: "Custom Kitchen Island Design and Build in Lincoln, CA",
        heroDescription: "A kitchen island transforms how you cook, entertain, and live. Franco and Sons Construction LLC designs and builds custom islands with integrated seating, storage, prep sinks, and power — tailored to your kitchen's exact dimensions and your family's needs.",
        sections: [
          { heading: "Designing an Island That Works for Your Kitchen", body: "Not every kitchen can support an island, and not every island needs to be massive. We assess your floor plan, traffic flow, and work triangle to design an island that improves function without creating bottlenecks. The ideal island has at least 36-42 inches of clearance on all sides." },
          { heading: "Features That Make Your Island the Hub of Your Kitchen", body: "The best kitchen islands pull double or triple duty. We integrate prep sinks, dishwashers, wine fridges, power outlets, USB ports, open shelving, and deep drawers based on how you actually use your kitchen. Breakfast bar seating turns your island into the family gathering spot." },
          { heading: "Materials and Finishes for Your Custom Island", body: "Your island can match your existing cabinetry or stand out as a contrasting statement piece. We build with the same quality materials as your perimeter cabinets — solid wood, premium hardware, and stone or butcher block countertops. Waterfall edges, decorative panels, and integrated lighting add the finishing touches." },
        ],
        features: ["Custom island design for any kitchen layout", "Integrated prep sinks and dishwashers", "Breakfast bar seating with overhang support", "Built-in power outlets and USB charging", "Waterfall countertop edges", "Matching or contrasting cabinetry options"],
        faqs: [
          { q: "How big does my kitchen need to be for an island?", a: "Generally, you need at least 10 feet of clear width in your kitchen to accommodate an island with proper clearance. We can also design narrower carts or peninsulas for smaller spaces." },
          { q: "Can you add an island to an existing kitchen?", a: "Yes — if your floor plan allows for proper clearance, we can add an island to your existing kitchen. This may involve extending flooring, adding plumbing or electrical, and potentially modifying the layout." },
          { q: "How much does a custom kitchen island cost?", a: "Custom kitchen islands typically range from $3,000 for a simple freestanding unit to $15,000+ for a fully integrated island with plumbing, electrical, and premium countertops." },
        ],
      },
      {
        slug: "kitchen-lighting",
        title: "Kitchen Lighting and Electrical",
        metaTitle: "Kitchen Lighting Design & Electrical Upgrades | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Professional kitchen lighting design and electrical upgrades in Lincoln and Roseville. Franco and Sons Construction LLC installs recessed lighting, pendant fixtures, under-cabinet lights, and panel upgrades.",
        heroHeading: "Kitchen Lighting and Electrical Upgrades in Lincoln, California",
        heroDescription: "Great lighting transforms a kitchen from functional to beautiful. Franco and Sons Construction LLC designs and installs layered lighting systems — recessed cans, pendant fixtures, under-cabinet task lighting, and dimmer controls — along with the electrical upgrades to support modern kitchens.",
        sections: [
          { heading: "The Three Layers of Kitchen Lighting", body: "Professional kitchen lighting uses three layers: ambient (recessed cans or flush mounts for overall illumination), task (under-cabinet lights focused on work surfaces), and accent (pendants over islands, in-cabinet lighting). We design all three layers to work together with independent controls." },
          { heading: "Electrical Upgrades for Modern Kitchens", body: "Modern kitchens demand more power than homes built 20-30 years ago. We handle panel upgrades, dedicated circuits for high-draw appliances, GFCI outlet installation, and strategically placed outlets so you never run out of power where you need it. All work is done to current electrical code." },
          { heading: "Choosing the Right Fixtures", body: "From sleek recessed cans to statement pendant lights over your island, fixture selection sets the tone for your kitchen's design. We help you choose fixtures that complement your cabinet style, countertop colors, and overall aesthetic while providing the right amount of light for every task." },
        ],
        features: ["Recessed lighting layout and installation", "Pendant light installation over islands and bars", "Under-cabinet LED task lighting", "Dimmer switch and smart control systems", "Electrical panel upgrades", "GFCI outlet installation to code"],
        faqs: [
          { q: "How many recessed lights do I need in my kitchen?", a: "A common rule of thumb is one recessed light every 4-6 feet, but proper placement depends on your kitchen layout, ceiling height, and other light sources. We create a detailed lighting plan specific to your space." },
          { q: "Can you add recessed lighting to an existing kitchen ceiling?", a: "Yes — we can add recessed lighting to most existing ceilings. For flat ceilings, it's straightforward. For vaulted or cathedral ceilings, we use angled housings designed for sloped installations." },
          { q: "Do I need an electrical panel upgrade for my kitchen remodel?", a: "If your home has an older panel (100 amps or less) and you're adding high-draw appliances like a double oven, induction cooktop, or multiple circuits, a panel upgrade may be necessary. We assess your electrical needs during the planning phase." },
        ],
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
    galleryImages: [
      IMAGES.bathroom,
      IMAGES.bathroomVanity,
      IMAGES.bathroomShower,
      IMAGES.bathroomMisc1,
      IMAGES.bathroomMisc2,
      IMAGES.bathroomRemodel3,
    ],
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
        heading: "Why Choose Franco and Sons Construction LLC for Bathroom Remodeling?",
        body: "At Franco and Sons Construction LLC, we believe that your bathroom should be a sanctuary. Our team creates beautiful, functional bathrooms with expert tile work, custom showers, soaking tubs, and premium fixtures. From powder rooms to master baths, every detail matters. We offer ADA-compliant options to ensure safety and accessibility, and our waterproofing guarantees ensure peace of mind. Whether you're looking to create a spa-like retreat or simply update your daily routine, we will bring your vision to life.",
      },
    ],
    subPages: [
      {
        slug: "walk-in-shower-conversion",
        title: "Walk-In Shower Conversions",
        metaTitle: "Walk-In Shower Conversion | Lincoln & Roseville CA | Franco and Sons Construction LLC",
        metaDescription: "Convert your bathtub to a beautiful walk-in shower. Franco and Sons Construction LLC specializes in tub-to-shower conversions with custom tile, frameless glass, and expert waterproofing in Placer County.",
        heroHeading: "Walk-In Shower Conversions in Lincoln and Placer County",
        heroDescription: "Bathtubs you never use are wasting valuable bathroom space. Franco and Sons Construction LLC converts outdated tubs into stunning walk-in showers with custom tile, frameless glass enclosures, and built-in storage — giving you a bathroom that fits how you actually live.",
        sections: [
          { heading: "Why Homeowners Are Replacing Bathtubs With Walk-In Showers", body: "Most homeowners use their tub shower for standing showers — never actually taking a bath. A walk-in shower conversion reclaims that space with a larger, more accessible shower that's easier to clean and more visually striking. It's one of the most popular bathroom upgrades we do." },
          { heading: "Custom Tile and Waterproofing", body: "Every walk-in shower we build starts with a fully waterproofed substrate using Schluter or equivalent membrane systems. We then install custom tile — floor-to-ceiling if you want — with precision cuts around niches, benches, and fixtures. Our waterproofing carries a lifetime guarantee against leaks." },
          { heading: "Frameless Glass Enclosures", body: "Frameless glass panels are the finishing touch that makes a walk-in shower feel open, modern, and luxurious. We work with local glass companies to deliver custom-fit enclosures that complement your tile and hardware selections." },
        ],
        features: ["Bathtub removal and disposal", "Custom tile shower installation", "Frameless glass enclosure", "Built-in niches and bench seating", "Linear drain installation", "Full waterproofing with lifetime guarantee"],
        faqs: [
          { q: "How much does a tub-to-shower conversion cost?", a: "Walk-in shower conversions in the Lincoln and Roseville area typically range from $8,000 to $20,000 depending on size, tile selection, and features like benches and glass enclosures. We provide detailed estimates for every project." },
          { q: "Will removing a bathtub hurt my home's resale value?", a: "As long as your home retains at least one bathtub (typically in the hall bath), converting a second tub to a walk-in shower is considered a value-adding upgrade by most real estate professionals." },
          { q: "How long does a shower conversion take?", a: "Most tub-to-shower conversions take 2-3 weeks from demolition to completion, including tile curing time and glass installation." },
        ],
      },
      {
        slug: "bathtub-to-shower",
        title: "Bathtub to Shower Conversion",
        metaTitle: "Bathtub to Shower Conversion | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Professional bathtub to shower conversions in Lincoln, Roseville, and Rocklin. Franco and Sons Construction LLC handles plumbing, tile, waterproofing, and glass for a complete transformation.",
        heroHeading: "Bathtub to Shower Conversion in Lincoln, California",
        heroDescription: "That old tub-shower combo deserves an upgrade. Franco and Sons Construction LLC removes outdated bathtubs and builds beautiful, modern showers in their place — with updated plumbing, premium tile, and a design that makes your bathroom feel twice the size.",
        sections: [
          { heading: "The Complete Conversion Process", body: "We start by carefully removing the existing tub and inspecting the subfloor and wall framing for any water damage. Plumbing is rerouted as needed, the shower pan is installed with proper slope and waterproofing, and then we build your new shower from the ground up — tile, fixtures, glass, and all." },
          { heading: "Design Options for Your New Shower", body: "From classic subway tile to large-format porcelain, from rain showerheads to multi-jet body sprays, the design possibilities are endless. We help you choose materials and layouts that match your style and budget. Popular options include built-in niches for storage, bench seating, and frameless glass panels." },
          { heading: "Aging in Place Considerations", body: "Many bathtub-to-shower conversions are motivated by safety and accessibility. We offer low-threshold or zero-threshold entries, grab bars that integrate with your design, built-in bench seats, and hand-held shower fixtures — all installed without looking institutional." },
        ],
        features: ["Complete tub removal and subfloor inspection", "Plumbing rerouting and valve upgrades", "Custom tile from floor to ceiling", "Low-threshold and zero-threshold options", "Grab bars and safety features", "Premium shower fixtures and hardware"],
        faqs: [
          { q: "Can you convert any bathtub into a shower?", a: "Yes — standard tub alcoves, corner tubs, garden tubs, and even jacuzzi tubs can all be converted to walk-in showers. The size and shape of the existing space determines the shower layout options." },
          { q: "Do I need a permit for a bathtub-to-shower conversion?", a: "If plumbing is being relocated or the shower footprint changes, a permit is typically required. We handle all permit requirements as part of our service." },
          { q: "What happens to the floor where the tub was?", a: "We install a new shower pan (either tiled or prefabricated) with proper drainage and waterproofing. The surrounding floor is repaired and matched to your existing bathroom flooring." },
        ],
      },
      {
        slug: "bathroom-tile-installation",
        title: "Bathroom Tile Installation",
        metaTitle: "Bathroom Tile Installation | Lincoln & Roseville CA | Franco and Sons Construction LLC",
        metaDescription: "Expert bathroom tile installation in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC installs shower tile, floor tile, backsplashes, and custom mosaic patterns with precision craftsmanship.",
        heroHeading: "Bathroom Tile Installation in Lincoln and Placer County",
        heroDescription: "Tile is the defining element of any great bathroom. Franco and Sons Construction LLC delivers expert tile installation — shower walls, floors, backsplashes, and accent features — with precision cuts, level layouts, and waterproofing that stands the test of time.",
        sections: [
          { heading: "Shower and Tub Surround Tile", body: "Shower tile installation requires expert-level waterproofing and precision. We use Schluter-DITRA or equivalent membrane systems beneath every tile surface, ensure proper slope on shower floors, and cut tiles to fit perfectly around fixtures, niches, and corners. The result is a shower that's beautiful and completely leak-proof." },
          { heading: "Bathroom Floor Tile", body: "From classic hexagonal mosaics to large-format porcelain, bathroom floor tile sets the foundation for your entire design. We ensure proper substrate preparation, level installation, and sealed grout lines. For heated floor systems, we install tile over electric radiant mats for warm feet year-round." },
          { heading: "Tile Materials and Design Trends", body: "Porcelain and ceramic remain the most popular choices for their durability and variety. Natural stone (marble, travertine, slate) adds luxury and character. Large-format tiles create a modern, seamless look with fewer grout lines. We help you navigate material choices and create a design that's both beautiful and practical." },
        ],
        features: ["Shower wall and floor tile installation", "Custom mosaic patterns and accents", "Large-format tile with minimal grout lines", "Heated floor tile installation", "Waterproof membrane systems", "Precision cuts around fixtures and niches"],
        faqs: [
          { q: "How much does bathroom tile installation cost?", a: "Bathroom tile installation typically costs $8-$25 per square foot for labor, plus the cost of tile materials. A full shower surround with floor tile usually ranges from $3,000-$8,000 depending on tile selection and complexity." },
          { q: "What tile is best for bathroom showers?", a: "Porcelain tile is the most popular choice for showers due to its low water absorption rate and durability. Natural stone is also excellent but requires sealing. We recommend smaller tiles (2x2 or mosaic) for shower floors to improve grip and drainage slope." },
          { q: "How long does bathroom tile installation take?", a: "A typical shower tile installation takes 3-5 days including waterproofing, setting tile, grouting, and curing time. Full bathroom tile (floors + shower) typically takes 5-7 days." },
        ],
      },
      {
        slug: "bathroom-vanity-installation",
        title: "Bathroom Vanity and Cabinet Installation",
        metaTitle: "Bathroom Vanity & Cabinet Installation | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Custom bathroom vanity and cabinet installation in Lincoln, Roseville, and Rocklin. Single vanities, double vanities, floating vanities, and built-in storage by Franco and Sons Construction LLC.",
        heroHeading: "Bathroom Vanity and Cabinet Installation in Lincoln, CA",
        heroDescription: "The right vanity anchors your bathroom's design and provides essential storage. Franco and Sons Construction LLC installs single and double vanities, floating vanities, custom built-ins, and medicine cabinets — with plumbing connections, countertop fitting, and finish work handled seamlessly.",
        sections: [
          { heading: "Choosing the Right Vanity for Your Bathroom", body: "A vanity needs to fit your space, match your style, and provide enough storage for daily use. We help you choose between freestanding, wall-mounted (floating), and custom built-in options. Double vanities are ideal for shared bathrooms, while single vanities maximize floor space in smaller rooms." },
          { heading: "Vanity Countertops and Sinks", body: "We install vanity tops in quartz, granite, marble, and solid surface materials with undermount, vessel, or integrated sink options. Every countertop is precisely templated and cut to fit, with clean silicone seals and proper plumbing connections." },
          { heading: "Storage Solutions and Accessories", body: "Beyond the vanity itself, we install matching medicine cabinets, linen towers, recessed wall cabinets, and built-in shelving to keep your bathroom organized. Soft-close drawers, pull-out organizers, and built-in electrical outlets inside cabinets are popular upgrades." },
        ],
        features: ["Single and double vanity installation", "Floating (wall-mounted) vanity mounting", "Quartz, granite, and marble vanity tops", "Undermount and vessel sink installation", "Medicine cabinet and storage installation", "Plumbing connections and fixture upgrades"],
        faqs: [
          { q: "How much does bathroom vanity installation cost?", a: "Vanity installation labor typically runs $300-$800, plus the cost of the vanity itself (ranging from $500 for stock options to $3,000+ for custom). If plumbing needs to be modified, additional costs apply. We provide all-inclusive estimates." },
          { q: "Can you install a double vanity where a single vanity was?", a: "In most cases, yes — as long as the wall space allows it. We handle the plumbing extension to add a second sink connection, including hot and cold water lines and drainage." },
          { q: "What height should a bathroom vanity be?", a: "Standard vanity height is 30-32 inches, while 'comfort height' vanities are 34-36 inches — similar to kitchen counter height. Comfort height is increasingly popular and is better for taller adults and aging in place." },
        ],
      },
      {
        slug: "master-bathroom-remodel",
        title: "Master Bathroom Remodeling",
        metaTitle: "Master Bathroom Remodel | Lincoln & Roseville CA | Franco and Sons Construction LLC",
        metaDescription: "Complete master bathroom remodeling in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC creates spa-like master baths with walk-in showers, freestanding tubs, and premium finishes.",
        heroHeading: "Master Bathroom Remodeling in Lincoln and Placer County",
        heroDescription: "Your master bathroom should be a private retreat — a place that starts and ends your day beautifully. Franco and Sons Construction LLC designs and builds complete master bathroom renovations with walk-in showers, freestanding soaking tubs, dual vanities, and spa-quality finishes.",
        sections: [
          { heading: "Planning Your Master Bathroom Remodel", body: "A master bath remodel is one of the most personal projects you'll undertake. We start with a detailed design consultation to understand how you use the space, what frustrates you about the current layout, and what your dream bathroom looks like. From there, we create a plan that balances beauty, function, and budget." },
          { heading: "Popular Master Bathroom Features", body: "The most requested features in master bathroom remodels include oversized walk-in showers with multiple showerheads, freestanding soaking tubs, double vanities with ample counter space, heated tile floors, and built-in linen storage. We design layouts that accommodate your wish list within your existing footprint — or expand the space if needed." },
          { heading: "Luxury Finishes and Materials", body: "Master bathrooms are where homeowners tend to splurge on finishes. Natural stone tile, frameless glass shower enclosures, matte black or brushed gold fixtures, quartz vanity tops, and backlit LED mirrors are all popular choices. We source materials from trusted suppliers and install everything with the craftsmanship these premium finishes deserve." },
        ],
        features: ["Complete master bathroom gut renovation", "Walk-in shower with frameless glass", "Freestanding tub installation", "Double vanity with premium countertops", "Heated tile floor systems", "Custom lighting and ventilation"],
        faqs: [
          { q: "How much does a master bathroom remodel cost?", a: "Master bathroom remodels in the Placer County area typically range from $25,000 to $65,000 depending on size, layout changes, and finish selections. We provide detailed, line-item estimates so you know exactly where every dollar goes." },
          { q: "How long does a master bathroom remodel take?", a: "Most master bathroom remodels take 4-8 weeks from demolition to completion. Complex projects involving layout changes or structural modifications may take longer. We provide a detailed timeline before starting." },
          { q: "Can you expand my master bathroom?", a: "Yes — we can expand into adjacent closets, hallways, or unused spaces to create a larger master bath. This involves structural modifications, plumbing extension, and careful integration with the existing home." },
        ],
      },
      {
        slug: "guest-bathroom-remodel",
        title: "Guest Bathroom Remodeling",
        metaTitle: "Guest Bathroom Remodel | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Guest bathroom and hall bathroom remodeling in Lincoln, Roseville, and Rocklin. Franco and Sons Construction LLC delivers functional, stylish guest bath renovations on any budget.",
        heroHeading: "Guest Bathroom Remodeling in Lincoln, California",
        heroDescription: "Your guest bathroom makes an impression on every visitor — and it's often the bathroom your kids use daily. Franco and Sons Construction LLC remodels guest and hall bathrooms with smart layouts, durable materials, and stylish designs that work for everyday family use and hosting alike.",
        sections: [
          { heading: "Making the Most of a Smaller Space", body: "Guest bathrooms are typically smaller than master baths, which means every design decision matters more. We specialize in space-efficient layouts that feel open and organized — from pedestal sinks and wall-mounted vanities to pocket doors and recessed medicine cabinets that save floor space." },
          { heading: "Durable Materials for High-Traffic Bathrooms", body: "Guest and hall bathrooms often see more daily traffic than master baths, especially with kids. We recommend porcelain tile floors (slip-resistant), quartz countertops (stain-proof), and quality fixtures that stand up to heavy use while looking great for years." },
          { heading: "Budget-Friendly Updates That Transform the Space", body: "A guest bathroom remodel doesn't have to break the bank. Strategic updates like new tile in the tub surround, a modern vanity, updated fixtures, fresh paint, and a new mirror can completely change the look and feel of the room for a fraction of a full gut renovation." },
        ],
        features: ["Full guest bathroom renovation", "Tub surround tile installation", "Space-efficient vanity and storage", "Updated fixtures and hardware", "Flooring replacement", "Lighting and ventilation upgrades"],
        faqs: [
          { q: "How much does a guest bathroom remodel cost?", a: "Guest bathroom remodels typically range from $10,000 to $25,000 for a complete renovation. Budget-focused updates (vanity, fixtures, paint) can refresh the space for $3,000-$7,000." },
          { q: "Should I keep the bathtub in my guest bathroom?", a: "If this is the only bathroom in your home with a tub, we strongly recommend keeping it — it's important for families with young children and for resale value. We can update the tub surround with new tile for a fresh look." },
          { q: "How long does a guest bathroom remodel take?", a: "Most guest bathroom remodels take 2-4 weeks depending on scope. Simple updates (vanity, fixtures, paint) can be completed in under a week." },
        ],
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
      "From tenant improvements to office and retail build-outs, Franco and Sons Construction LLC brings the same quality and reliability we're known for in residential work to your commercial project. We work with business owners, property managers, and tenants to complete build-outs and renovations on schedule and within budget. Licensed, insured, and experienced in commercial permitting and code requirements.",
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
        heading: "Why Choose Franco and Sons Construction LLC for Commercial Remodeling?",
        body: "Franco and Sons Construction LLC offers commercial build-outs, tenant improvements, and office or retail renovations throughout Lincoln and Placer County. We bring the same family-owned reliability and quality craftsmanship to commercial projects — with clear communication, on-schedule delivery, and full compliance with commercial building codes. Whether you're opening a new location, refreshing an existing space, or need tenant improvements, we'll work with you to minimize downtime and maximize results.",
      },
    ],
    subPages: [
      {
        slug: "tenant-improvements",
        title: "Tenant Improvements (TI)",
        metaTitle: "Tenant Improvements (TI) | Lincoln & Placer County | Franco and Sons Construction LLC",
        metaDescription: "Professional tenant improvement construction in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC delivers TI build-outs on schedule with full permit management and code compliance.",
        heroHeading: "Tenant Improvement Construction in Lincoln and Placer County",
        heroDescription: "Whether you're a property owner preparing a space for new tenants or a business moving into a shell space, Franco and Sons Construction LLC delivers tenant improvements that meet your specifications, timeline, and budget — with full permit management and code compliance.",
        sections: [
          { heading: "What Are Tenant Improvements?", body: "Tenant improvements (TI) are modifications made to a commercial rental space to meet the needs of a specific tenant. This can range from cosmetic updates like paint and flooring to full build-outs including walls, electrical, plumbing, HVAC, and ADA-compliant restrooms. We handle every level of TI work." },
          { heading: "Working With Landlords and Tenants", body: "We understand the three-way dynamic between landlords, tenants, and contractors. We communicate clearly with all parties, work within TI allowance budgets, and deliver spaces that satisfy both the tenant's operational needs and the landlord's property standards." },
          { heading: "Permits, Inspections, and Code Compliance", body: "Commercial TI work in Placer County requires building permits, plan review, and inspections. We manage the entire process — from initial plan submission through final inspection and certificate of occupancy — so your space is ready for business on schedule." },
        ],
        features: ["Full shell-to-suite build-outs", "Interior wall framing and drywall", "Commercial electrical and plumbing", "HVAC modification and ductwork", "ADA-compliant restroom construction", "Permit management and inspections"],
        faqs: [
          { q: "How long do tenant improvements typically take?", a: "Timeline depends on scope — cosmetic TI work can be completed in 2-4 weeks, while full build-outs from shell condition typically take 6-12 weeks including permit processing." },
          { q: "Who pays for tenant improvements?", a: "This varies by lease agreement. Some landlords provide a TI allowance ($ per square foot), some tenants fund their own improvements, and some agreements split the cost. We work within whatever arrangement you have." },
          { q: "Do you handle commercial permits in Placer County?", a: "Yes — we manage the entire permit process including plan preparation, submission, plan review responses, and scheduling inspections through final sign-off." },
        ],
      },
      {
        slug: "office-buildouts",
        title: "Office Build-Outs",
        metaTitle: "Office Build-Outs & Renovation | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Custom office build-outs and renovations in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC creates productive workspaces with private offices, conference rooms, and modern amenities.",
        heroHeading: "Office Build-Outs and Renovation in Lincoln, California",
        heroDescription: "Your office should support how your team works. Franco and Sons Construction LLC builds and renovates offices with private workspaces, open collaboration areas, conference rooms, break rooms, and the infrastructure your business needs — from data cabling to HVAC zoning.",
        sections: [
          { heading: "Designing Productive Workspaces", body: "Modern offices need to balance private focused work with collaborative spaces. We build private offices, open work areas, huddle rooms, conference rooms, and break rooms based on your team's workflow. Acoustics, lighting, and traffic flow are all considered in the design." },
          { heading: "Infrastructure for Modern Businesses", body: "Behind the walls, your office needs robust infrastructure. We install structured data cabling, dedicated circuits for server rooms, HVAC zoning for comfort control, and security system rough-ins. Everything is built to support your technology and operations from day one." },
          { heading: "Minimizing Disruption to Your Business", body: "If you're renovating an occupied office, we create phased construction plans that keep your team working while we transform the space. Weekend and after-hours work is available for noise-sensitive phases. Clear communication and daily cleanup are standard." },
        ],
        features: ["Private office and conference room construction", "Open-plan workspace build-out", "Server room and data closet construction", "Break room and kitchen build-out", "ADA-compliant restrooms and access", "Phased construction for occupied spaces"],
        faqs: [
          { q: "How much does an office build-out cost per square foot?", a: "Office build-out costs in the Placer County area typically range from $50-$150 per square foot depending on finish level, complexity, and infrastructure needs. We provide detailed estimates based on your specific requirements." },
          { q: "Can you renovate our office while we continue working?", a: "Yes — we regularly phase construction to minimize disruption. We can work in sections, schedule noisy work during off-hours, and maintain clean, safe access to occupied areas throughout the project." },
          { q: "Do you handle data cabling and low-voltage work?", a: "We coordinate structured cabling (Cat6, fiber) and low-voltage systems (security, A/V) as part of our build-out services, working with licensed low-voltage contractors as needed." },
        ],
      },
      {
        slug: "retail-renovation",
        title: "Retail Space Renovation",
        metaTitle: "Retail Space Renovation & Build-Out | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Retail space renovation and build-out in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC creates inviting storefronts and retail environments that drive customer engagement.",
        heroHeading: "Retail Space Renovation in Lincoln and Placer County",
        heroDescription: "Your retail space is your brand's physical presence. Franco and Sons Construction LLC designs and builds retail environments that attract customers, support your operations, and create memorable shopping experiences — from storefront renovations to complete interior build-outs.",
        sections: [
          { heading: "Creating a Customer-First Retail Experience", body: "Great retail design guides customers through your space naturally, highlights your products, and creates an atmosphere that reflects your brand. We work with your vision to build display areas, fitting rooms, checkout counters, and storage that optimize both customer experience and operational efficiency." },
          { heading: "Storefront and Exterior Upgrades", body: "Your storefront is your first impression. We handle exterior renovations including new entrances, signage preparation, window displays, lighting, and facade improvements that make your business stand out on the street and meet ADA accessibility requirements." },
          { heading: "Fast-Track Construction for Retail", body: "In retail, every day your doors are closed is lost revenue. We offer fast-track construction schedules with extended hours and tight coordination between trades to get your space open as quickly as possible without sacrificing quality." },
        ],
        features: ["Complete retail interior build-out", "Storefront and facade renovation", "Custom display and fixture areas", "Fitting room and checkout counter construction", "ADA-compliant entrances and restrooms", "Fast-track construction scheduling"],
        faqs: [
          { q: "How long does a retail build-out take?", a: "Most retail build-outs take 4-8 weeks depending on size and complexity. Fast-track schedules can compress this timeline with extended work hours and parallel trade scheduling." },
          { q: "Can you work around our store's operating hours?", a: "Yes — for renovations to existing stores, we offer after-hours and overnight work to minimize impact on your business operations." },
          { q: "Do you handle signage installation?", a: "We prepare the building for signage — electrical connections, backing, and structural supports — and coordinate with your sign company for final installation." },
        ],
      },
      {
        slug: "restaurant-buildout",
        title: "Restaurant and Hospitality Build-Outs",
        metaTitle: "Restaurant Build-Out & Renovation | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "Restaurant and hospitality construction in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC builds commercial kitchens, dining rooms, and bar areas with full code compliance.",
        heroHeading: "Restaurant and Hospitality Build-Outs in Lincoln, CA",
        heroDescription: "Restaurant construction requires specialized knowledge of health codes, ventilation, grease traps, and commercial kitchen requirements. Franco and Sons Construction LLC builds and renovates restaurants, cafes, and hospitality spaces with the expertise and attention to code compliance that this industry demands.",
        sections: [
          { heading: "Commercial Kitchen Construction", body: "A commercial kitchen build-out involves heavy-duty ventilation hoods, grease trap installation, commercial plumbing, fire suppression systems, and surfaces that meet health department requirements. We build kitchens that pass inspection the first time and support your menu's production needs." },
          { heading: "Dining Room and Bar Areas", body: "The front-of-house sets the tone for your guests' experience. We build custom bar areas, banquette seating, room dividers, host stations, and lighting systems that create the atmosphere you envision. Acoustics, traffic flow, and ADA compliance are integrated into every design." },
          { heading: "Health Code and Permit Requirements", body: "Restaurant construction in Placer County involves health department review, fire marshal approval, ABC (Alcohol Beverage Control) requirements for bars, and standard building permits. We navigate all regulatory requirements and coordinate inspections so your opening isn't delayed." },
        ],
        features: ["Commercial kitchen construction", "Ventilation hood and grease trap installation", "Bar area and custom millwork", "Health department compliant surfaces", "Fire suppression system coordination", "ABC and health permit coordination"],
        faqs: [
          { q: "How much does a restaurant build-out cost?", a: "Restaurant build-outs are among the most complex commercial projects. Costs typically range from $100-$250 per square foot depending on kitchen complexity, finish level, and equipment. We provide detailed estimates after reviewing your plans." },
          { q: "How long does a restaurant build-out take?", a: "Most restaurant build-outs take 8-16 weeks depending on size and complexity. The commercial kitchen, ventilation, and fire suppression work typically drives the timeline." },
          { q: "Can you help with the health department inspection process?", a: "Yes — we build to health department standards and coordinate the inspection process. Our experience with Placer County health department requirements helps ensure you pass inspection efficiently." },
        ],
      },
      {
        slug: "commercial-ada-compliance",
        title: "Commercial ADA Compliance",
        metaTitle: "Commercial ADA Compliance Remodeling | Lincoln CA | Franco and Sons Construction LLC",
        metaDescription: "ADA compliance renovation for commercial spaces in Lincoln, Roseville, and Placer County. Franco and Sons Construction LLC brings your business into compliance with accessible restrooms, ramps, and entrances.",
        heroHeading: "Commercial ADA Compliance Remodeling in Placer County",
        heroDescription: "ADA compliance isn't just a legal requirement — it's about making your business welcoming to everyone. Franco and Sons Construction LLC renovates commercial spaces to meet current ADA standards with accessible restrooms, entrances, ramps, and interior modifications that integrate seamlessly with your existing design.",
        sections: [
          { heading: "Common ADA Compliance Issues in Commercial Spaces", body: "The most common ADA deficiencies we address include restrooms that don't meet clearance requirements, entrances without ramp access, non-compliant door hardware, insufficient signage, and counters or service areas that aren't accessible. We perform thorough assessments and prioritize the modifications that bring you into compliance." },
          { heading: "ADA-Compliant Restroom Construction", body: "Commercial restroom ADA compliance involves specific requirements for stall dimensions, grab bar placement, sink height, mirror positioning, and floor clearances. We build and renovate restrooms that meet all current ADA guidelines while maintaining a clean, professional appearance." },
          { heading: "Entrances, Ramps, and Interior Access", body: "Accessible entrances require proper ramp slopes, landing dimensions, door widths, and hardware. Interior access includes hallway widths, threshold heights, and clear floor space at service counters. We modify existing structures to meet these requirements with minimal disruption to your building's appearance." },
        ],
        features: ["ADA compliance assessment and planning", "Accessible restroom construction", "Ramp and entrance modifications", "Door widening and hardware upgrades", "Counter and service area accessibility", "Signage and wayfinding installation"],
        faqs: [
          { q: "Is my business required to be ADA compliant?", a: "Yes — the ADA applies to all places of public accommodation (businesses open to the public) and commercial facilities. Requirements vary based on building age and type, but all businesses must remove barriers to access where readily achievable." },
          { q: "How much does commercial ADA compliance cost?", a: "Costs vary widely based on the scope of modifications needed. Simple updates like door hardware and grab bars may cost a few thousand dollars, while restroom renovations and ramp construction can range from $10,000-$50,000+." },
          { q: "Will ADA modifications look institutional?", a: "Not at all — modern ADA-compliant fixtures and materials are designed to blend with contemporary commercial interiors. We select materials and designs that maintain your space's aesthetic while meeting all requirements." },
        ],
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
        heading: "Why Choose Franco and Sons Construction LLC for ADA-Compliant Bathroom Remodeling?",
        body: "At Franco and Sons Construction LLC, we specialize in ADA-compliant bathroom remodels that maintain a clean, modern look while prioritizing accessibility. Our team replaces outdated tubs with low-threshold walk-in showers designed for safety and long-term comfort. By opening up layouts, we create better flow and accessibility in compact spaces — with built-in benches, slip-resistant tile, and strategically placed grab bars for stability and confidence. We offer ADA-compliant design expertise, safe and functional solutions built for independence, and maintain a clean, modern aesthetic. Whether you're looking to create a safe and comfortable space for yourself or a loved one, we will bring your vision to life.",
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
      "Need more space? Franco and Sons Construction LLC builds home additions that look like they were always part of your original home. From extra bedrooms and family rooms to sunrooms and in-law suites, we handle every aspect of construction with start-to-finish project management.",
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
        heading: "Why Choose Franco and Sons Construction LLC for Home Additions?",
        body: "At Franco and Sons Construction LLC, we understand that sometimes you need more space. Our team builds home additions that look like they were always part of your original home. From extra bedrooms and family rooms to sunrooms and in-law suites, we handle every aspect of construction with start-to-finish project management. We offer full permit and planning support, seamless architectural integration, and the ability to add square footage to your home without the cost of moving. Whether you're looking to expand your living space or create a new suite for a loved one, we will bring your vision to life.",
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
      "Your home should evolve with your lifestyle. Franco and Sons Construction LLC provides complete interior remodeling services — from opening up floor plans and modernizing living areas to converting unused rooms into functional spaces your family will love.",
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
        heading: "Why Choose Franco and Sons Construction LLC for Interior Remodeling?",
        body: "At Franco and Sons Construction LLC, we believe that your home should evolve with your lifestyle. Our team provides complete interior remodeling services — from opening up floor plans and modernizing living areas to converting unused rooms into functional spaces your family will love. We offer modernize dated interiors, improve flow and functionality, increase property value, and custom designs for your lifestyle. Whether you're looking to refresh your living spaces or create a new layout, we will bring your vision to life.",
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
      "A custom shower is the centerpiece of any great bathroom. Franco and Sons Construction LLC designs and installs stunning walk-in showers, frameless glass enclosures, and multi-head shower systems with expert tile work and waterproofing that stands the test of time.",
    image: IMAGES.customShower,
    galleryImages: [IMAGES.customShower, IMAGES.bathroomShower, IMAGES.bathroomMisc2, IMAGES.bathroomMisc3],
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
        heading: "Why Choose Franco and Sons Construction LLC for Custom Showers?",
        body: "At Franco and Sons Construction LLC, we believe that a custom shower is the centerpiece of any great bathroom. Our team designs and installs stunning walk-in showers, frameless glass enclosures, and multi-head shower systems with expert tile work and waterproofing that stands the test of time. We offer luxury finishes at fair prices, expert waterproofing guaranteed, precision tile craftsmanship, and custom designs for any space. Whether you're looking to create a spa-like retreat or simply update your daily routine, we will bring your vision to life.",
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
        heading: "Why Choose Franco and Sons Construction LLC for Flooring Installation?",
        body: "At Franco and Sons Construction LLC, we believe that beautiful floors are the foundation of every great room. Our team brings precision and artistry to every installation. We work with all materials and styles to create the perfect surface for your space. We offer expert material recommendations, precision cutting and layout, long-lasting installations, and a wide selection of materials. Whether you're looking to refresh your living spaces or create a new look, we will bring your vision to life.",
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
      "Every great remodel needs solid infrastructure behind the walls. Franco and Sons Construction LLC handles electrical and plumbing upgrades as part of our comprehensive remodeling services — ensuring your home's systems are safe, up to code, and ready for modern living.",
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
        heading: "Why Choose Franco and Sons Construction LLC for Electrical & Plumbing Upgrades?",
        body: "At Franco and Sons Construction LLC, we believe that every great remodel needs solid infrastructure behind the walls. Our team handles electrical and plumbing upgrades as part of our comprehensive remodeling services — ensuring your home's systems are safe, up to code, and ready for modern living. We offer licensed and code-compliant work, support for modern appliances, energy efficiency improvements, and integration with your remodel plan. Whether you're looking to update your home's systems or ensure safety and compliance, we will bring your vision to life.",
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
      "A fresh coat of paint is one of the most impactful upgrades you can make. Franco and Sons Construction LLC provides professional interior painting with thorough surface preparation, premium paints, and the attention to detail that transforms rooms from tired to beautiful.",
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
        heading: "Why Choose Franco and Sons Construction LLC for Interior Home Painting?",
        body: "At Franco and Sons Construction LLC, we believe that a fresh coat of paint is one of the most impactful upgrades you can make. Our team provides professional interior painting with thorough surface preparation, premium paints, and the attention to detail that transforms rooms from tired to beautiful. We offer refresh any room affordably, premium paints and materials, meticulous prep for lasting results, and clean, professional workmanship. Whether you're looking to refresh your living spaces or create a new look, we will bring your vision to life.",
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
      "Your home's exterior is the first impression and your primary protection from the elements. Franco and Sons Construction LLC provides expert exterior improvement services that boost curb appeal, increase property value, and keep your home looking its best for years to come.",
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
        heading: "Why Choose Franco and Sons Construction LLC for Exterior Home Improvements?",
        body: "At Franco and Sons Construction LLC, we believe that your home's exterior is the first impression and your primary protection from the elements. Our team provides expert exterior improvement services that boost curb appeal, increase property value, and keep your home looking its best for years to come. We offer boost curb appeal and home value, protect your home from elements, quality materials built to last, and expert craftsmanship throughout. Whether you're looking to refresh your living spaces or create a new look, we will bring your vision to life.",
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
      "Franco and Sons Construction LLC completely transformed our cramped kitchen into a bright, spacious, and functional space we absolutely love. They removed the false ceiling, moved walls, and opened up the entire layout. The craftsmanship and attention to detail exceeded our expectations.",
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
      "We had three contractors give us estimates, and Franco and Sons Construction LLC was the most thorough. The custom tile shower they built is absolutely stunning. On time, on budget, and the quality is outstanding.",
    rating: 5,
    image: IMAGES.bathroomVanity,
  },
  {
    name: "James Thompson",
    location: "Roseville, CA",
    service: "ADA Accommodations",
    quote:
      "When my mother needed accessibility modifications, Franco and Sons Construction LLC handled everything with such care and professionalism. The walk-in shower and grab bars they installed look beautiful. They truly care about their clients.",
    rating: 5,
    image: IMAGES.ada,
  },
  {
    name: "Angela & Michael Torres",
    location: "Auburn, CA",
    service: "Home Addition",
    quote:
      "We needed an extra bedroom and bathroom for our growing family. Franco and Sons Construction LLC built an addition that looks like it was always part of the house. The craftsmanship is impeccable and the process was smooth from permit to completion.",
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
      "As Lincoln's trusted local contractor, Franco and Sons Construction LLC has been proudly serving this growing community with quality construction and remodeling. We know Lincoln's neighborhoods, building codes, and architectural styles inside and out. From Sun City to the newer developments, we're your neighbors and your builders.",
    highlights: [
      "Based in Lincoln — quick response times",
      "Familiar with local building codes & HOA requirements",
      "Hundreds of projects completed in Lincoln",
      "References available from Lincoln homeowners",
    ],
    isPrimary: true,
    seoContent: [
      {
        heading: "Why Choose Franco and Sons Construction LLC for Lincoln Projects?",
        body: "At Franco and Sons Construction LLC, we are Lincoln's trusted local contractor. We have been proudly serving this growing community with quality construction and remodeling. We know Lincoln's neighborhoods, building codes, and architectural styles inside and out. From Sun City to the newer developments, we're your neighbors and your builders. We offer quick response times, familiarity with local building codes and HOA requirements, hundreds of projects completed in Lincoln, and references available from Lincoln homeowners. Whether you're looking to expand your living space or create a new look, we will bring your vision to life.",
      },
    ],
  },
  {
    slug: "rocklin",
    city: "Rocklin",
    state: "California",
    description:
      "Franco and Sons Construction LLC proudly serves the Rocklin community with premium remodeling and construction services. From Whitney Ranch to Stanford Ranch, we've completed dozens of kitchen and bathroom remodels throughout Rocklin's diverse neighborhoods.",
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
      "Roseville homeowners trust Franco and Sons Construction LLC for quality remodeling and construction. Whether you're in West Roseville's new developments or updating a home in older neighborhoods, we deliver consistent excellence. Our featured kitchen remodel for Steven in Roseville is a perfect example of our work.",
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
      "Franco and Sons Construction LLC serves the Loomis community with the same dedication and quality craftsmanship we're known for throughout the region. From rural properties to town center homes, we handle kitchen remodels, bathroom renovations, and additions of all sizes.",
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
      "Franco and Sons Construction LLC brings expert remodeling services to the Newcastle community. From charming foothill properties to modern homes, our family team delivers the same quality craftsmanship and personal attention that has made us Placer County's trusted contractor.",
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
      "From Auburn's historic downtown properties to foothill homes, Franco and Sons Construction LLC brings expert construction and remodeling services to the Auburn community. We understand the unique building challenges of foothill construction and deliver quality results every time.",
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
      "Franco and Sons Construction LLC serves the Folsom community with premium kitchen remodeling, bathroom renovations, and home additions. Whether you're in Broadstone, Empire Ranch, or Folsom's historic district, we bring the same dedication to quality and craftsmanship on every project.",
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
      "El Dorado Hills homeowners deserve premium craftsmanship. Franco and Sons Construction LLC delivers high-end remodeling and construction services that match the quality El Dorado Hills homeowners expect, from luxury kitchen remodels to custom bathroom renovations.",
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
      "Absolutely. Franco and Sons Construction LLC is a fully licensed California General Contractor and carries comprehensive general liability and workers' compensation insurance. We're happy to provide proof of insurance upon request.",
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
      "Yes, we stand behind every project. Franco and Sons Construction LLC provides a workmanship warranty on all our construction and remodeling projects. Specific warranty terms are outlined in your contract. Many of our material partners also provide manufacturer warranties.",
    category: "Business",
  },
  {
    question: "How do I get a free consultation?",
    answer:
      "Simply fill out our contact form, call us at (916) 316-2948, or text us. Cristian will schedule a convenient time to visit your home, discuss your project, and provide a detailed estimate — all at no cost and no obligation.",
    category: "Process",
  },
  {
    question: "What makes Franco and Sons Construction LLC different from other contractors?",
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