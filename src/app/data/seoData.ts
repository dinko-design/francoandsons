import type { SEOSection } from "../components/shared/SEOContentBlock";

/**
 * Rich SEO content blocks for service pages.
 * These provide substantial, keyword-dense content with cross-linking opportunities.
 * Edit these blocks to optimize each service page for its target keywords.
 */
export const SERVICE_SEO_CONTENT: Record<string, SEOSection[]> = {
  "kitchen-remodeling": [
    {
      heading: "Kitchen Remodeling Services in Lincoln, CA & Surrounding Areas",
      body: "Franco & Sons Construction LLC is a family-owned general contractor providing complete kitchen remodeling services to homeowners throughout Lincoln, Rocklin, Roseville, Loomis, Newcastle, Auburn, Folsom, and El Dorado Hills, California. With over 30 years of construction experience, father-and-son team Carlos and Cristian Franco personally manage every kitchen remodel — from the initial design consultation through final walkthrough. Whether you're looking to open up a cramped layout, replace outdated cabinets, install modern countertops, or create a fully custom kitchen, we handle every detail in-house with start-to-finish project management.",
      bullets: [
        "Custom cabinet design, fabrication, and installation to fit your space and style",
        "Granite, quartz, and marble countertop selection and installation",
        "Open-concept wall removal to create bright, spacious kitchens",
        "Kitchen island design and construction for additional workspace and seating",
        "Tile backsplash installation with custom patterns and designs",
        "Complete plumbing and electrical upgrades integrated into your remodel",
        "Flooring replacement — tile, hardwood, and luxury vinyl plank options",
        "Lighting design including recessed, pendant, and under-cabinet lighting",
      ],
      links: [
        { text: "See Our Kitchen Portfolio", to: "/portfolio" },
        { text: "View Our Process", to: "/process" },
        { text: "Read Kitchen Remodel Reviews", to: "/reviews" },
      ],
    },
    {
      heading: "What to Expect During Your Kitchen Remodel",
      body: "A kitchen remodel with Franco & Sons Construction LLC starts with a free, no-obligation in-home consultation. Cristian will visit your home, discuss your goals, take measurements, and walk you through design options and material choices. Within days, you'll receive a detailed written estimate — transparent, itemized, and with no hidden fees. Once you approve the scope, we finalize your design, coordinate material orders, and handle permits when your project requires them. Most complete kitchen remodels take 4 to 8 weeks, and we provide a projected timeline before work begins so you can plan accordingly. Throughout construction, Carlos and Cristian are on your job site personally — not subcontractors you've never met.",
      links: [
        { text: "How Our Process Works", to: "/process" },
        { text: "Get a Free Kitchen Estimate", to: "/get-started" },
      ],
    },
    {
      heading: "Kitchen Remodeling Costs & Investment",
      body: "Kitchen remodeling costs vary depending on the size of your kitchen, the scope of work, and the materials you choose. At Franco & Sons Construction LLC, we believe in complete transparency — you'll receive a detailed written estimate before any work begins, with a clear breakdown of all costs. We never use high-pressure sales tactics, and there are never hidden fees or surprise charges. Whether your budget is $15,000 for a focused refresh or $50,000+ for a complete transformation, we'll help you maximize your investment and increase your home's value. Our free cost guide provides additional budgeting guidance to help you plan your project.",
      links: [
        { text: "Download Free Kitchen Cost Guide", to: "/free/kitchen-remodel-cost-guide" },
        { text: "Request Your Free Estimate", to: "/get-started" },
      ],
    },
  ],

  "bathroom-remodeling": [
    {
      heading: "Bathroom Remodeling Services in Lincoln, CA & Placer County",
      body: "Franco & Sons Construction LLC provides expert bathroom remodeling services to homeowners in Lincoln, Rocklin, Roseville, and throughout Placer County, California. Whether you're updating a powder room, renovating a guest bathroom, or creating a spa-like master bath retreat, our family team delivers beautiful results with expert tile work, custom showers, modern fixtures, and meticulous attention to detail. With over 30 years of construction experience, Carlos and Cristian Franco manage every bathroom remodel personally — ensuring quality craftsmanship and a smooth process from start to finish.",
      bullets: [
        "Custom tile showers and surrounds with designer patterns",
        "Walk-in shower conversions and bathtub-to-shower transformations",
        "Vanity and cabinet installation with custom storage solutions",
        "Heated flooring systems for comfort and luxury",
        "Modern plumbing fixture upgrades for efficiency and style",
        "Ventilation and lighting improvements for safety and ambiance",
        "Expert waterproofing and drainage systems guaranteed to last",
        "ADA-compliant bathroom options available for accessibility needs",
      ],
      links: [
        { text: "See Custom Shower Options", to: "/services/custom-showers" },
        { text: "ADA-Accessible Bathrooms", to: "/services/ada-accessible-remodeling" },
        { text: "View Bathroom Portfolio", to: "/portfolio" },
      ],
    },
    {
      heading: "Bathroom Remodeling Process & Timeline",
      body: "A typical bathroom remodel with Franco & Sons Construction LLC takes 2 to 5 weeks depending on the scope. Simple updates like fixture replacements and vanity swaps can be completed in just a few days. Complete gut-and-rebuild bathroom renovations — including tile work, plumbing, and layout changes — typically take 3 to 5 weeks. We start with a free in-home consultation, provide a detailed written estimate with no hidden fees, and handle permits when your project requires them. Throughout the project, we maintain a clean, organized work area and communicate progress regularly so you always know what's happening.",
      links: [
        { text: "How Our Process Works", to: "/process" },
        { text: "Get a Free Bathroom Estimate", to: "/get-started" },
      ],
    },
  ],

  "ada-accessible-remodeling": [
    {
      heading: "ADA-Compliant Bathroom Remodeling in Lincoln & Placer County",
      body: "Franco & Sons Construction LLC specializes in ADA-compliant and accessible bathroom remodeling for homeowners in Lincoln, Rocklin, Roseville, and throughout Placer County. We understand that accessibility modifications are about more than just function — they're about maintaining dignity, independence, and confidence in your own home. Our team designs and builds accessible bathrooms that are both safe and beautiful, never institutional-looking. Whether you're planning for aging in place, recovering from an injury, or accommodating a family member with mobility challenges, we approach every project with compassion and expertise.",
      bullets: [
        "Low-threshold walk-in shower conversions with slip-resistant tile",
        "Built-in shower bench seating for comfort and stability",
        "Strategically placed grab bars that blend with your bathroom design",
        "Doorway widening for wheelchair and walker accessibility",
        "Comfort-height toilets and accessible vanity modifications",
        "Non-slip flooring throughout for safety on wet surfaces",
        "Roll-under sinks and lever-handle faucets for easy operation",
        "Proper lighting and contrast for visibility and safety",
      ],
      links: [
        { text: "Standard Bathroom Remodeling", to: "/services/bathroom-remodeling" },
        { text: "View ADA Project Examples", to: "/portfolio" },
        { text: "Get a Free Accessibility Estimate", to: "/get-started" },
      ],
    },
    {
      heading: "Aging in Place — Safe, Comfortable Home Modifications",
      body: "Many of our ADA-accessible bathroom remodels are for homeowners who want to stay in their homes safely as they age. Franco & Sons Construction LLC helps Lincoln, Rocklin, and Roseville families create bathrooms that support long-term independence without sacrificing style. Our accessible designs maintain a clean, modern aesthetic — with thoughtful touches like built-in niches, decorative tile patterns, and coordinated fixtures that make your bathroom look great while keeping you safe. We treat every client with respect and take the time to understand their specific needs, mobility challenges, and design preferences before creating a custom plan.",
      links: [
        { text: "Contact Us to Discuss Your Needs", to: "/contact" },
        { text: "Read What Our Clients Say", to: "/reviews" },
      ],
    },
  ],

  "home-additions": [
    {
      heading: "Home Additions & Room Additions in Lincoln, CA",
      body: "When your family needs more space, Franco & Sons Construction LLC builds home additions in Lincoln and throughout Placer County that look like they were always part of your original home. We handle every aspect of the addition process — from architectural planning and permit coordination to foundation work, framing, electrical, plumbing, and finish carpentry. Whether you need an extra bedroom, a family room expansion, a sunroom, an in-law suite, or an ADU (Accessory Dwelling Unit), our team delivers seamless additions that blend with your existing structure and increase your home's value.",
      bullets: [
        "Room additions and home extensions that match your existing architecture",
        "Second-story additions for maximum space without expanding your footprint",
        "Garage conversions into living space, home offices, or guest suites",
        "ADU (Accessory Dwelling Unit) design and construction",
        "Sunroom and patio enclosures for year-round enjoyment",
        "Structural modifications and load-bearing wall removal",
        "Full permit acquisition, planning, and code compliance",
        "Foundation work including footings, slabs, and crawl spaces",
      ],
      links: [
        { text: "Interior Remodeling Services", to: "/services/interior-remodeling" },
        { text: "View Addition Examples", to: "/portfolio" },
        { text: "Get a Free Addition Estimate", to: "/get-started" },
      ],
    },
    {
      heading: "Home Addition Costs & Planning in Placer County",
      body: "Home addition costs in the Lincoln and Placer County area vary widely based on the type and size of addition, structural complexity, and finish level. A simple room addition might start around $30,000, while a full second-story addition or ADU can range from $75,000 to $150,000+. Franco & Sons Construction LLC provides detailed written estimates for every project — with a clear breakdown of materials, labor, permits, and timeline. We never use high-pressure tactics, and our estimates include everything so there are no surprise costs. Many homeowners find that building an addition is significantly more cost-effective than selling and buying a larger home, especially in today's market.",
      links: [
        { text: "Request Your Free Estimate", to: "/get-started" },
        { text: "Learn About Our Process", to: "/process" },
      ],
    },
  ],

  "interior-remodeling": [
    {
      heading: "Interior Remodeling Services in Lincoln & Placer County",
      body: "Franco & Sons Construction LLC provides complete interior remodeling services for homeowners in Lincoln, Rocklin, Roseville, and throughout Placer County, California. From open-concept floor plan conversions and living room renovations to ceiling height modifications and complete room transformations, our family team handles every aspect of your interior remodel with expert craftsmanship and personal attention. Your home should evolve with your lifestyle — and we help make that happen with thoughtful designs, quality materials, and start-to-finish project management.",
      bullets: [
        "Open-concept floor plan conversions — remove walls and open up your living space",
        "Living room and family room renovations for modern comfort",
        "Ceiling removal and height modifications for an airier feel",
        "Wall relocation and structural modifications with proper engineering",
        "Built-in shelving, cabinetry, and custom storage solutions",
        "Trim work, molding, and finish carpentry throughout",
        "Drywall installation, repair, and texture work",
        "Complete room makeovers from design to finished product",
      ],
      links: [
        { text: "Kitchen Remodeling", to: "/services/kitchen-remodeling" },
        { text: "Bathroom Remodeling", to: "/services/bathroom-remodeling" },
        { text: "Interior Painting", to: "/services/interior-painting" },
        { text: "Flooring Installation", to: "/services/flooring-installation" },
      ],
    },
  ],

  "custom-showers": [
    {
      heading: "Custom Shower Design & Installation in Lincoln, CA",
      body: "A custom shower is the centerpiece of any great bathroom. Franco & Sons Construction LLC designs and installs stunning custom showers for homeowners in Lincoln, Rocklin, Roseville, and throughout Placer County. From frameless glass enclosures and walk-in designs to multi-head rain shower systems and intricate tile work, every shower we build reflects expert craftsmanship and attention to detail. Our waterproofing systems are guaranteed to protect your home — because a beautiful shower must also be a safe one.",
      bullets: [
        "Frameless glass shower enclosures for a clean, modern look",
        "Custom tile design including subway, mosaic, large-format, and natural stone",
        "Walk-in shower construction — no doors, no barriers, just luxury",
        "Multi-head and rain shower systems with precise plumbing",
        "Built-in niches, shelving, and corner caddies for storage",
        "Bench seating — decorative, functional, and ADA-compliant options",
        "Professional waterproofing and drainage systems",
        "Steam shower preparation for the ultimate spa experience",
      ],
      links: [
        { text: "Bathroom Remodeling", to: "/services/bathroom-remodeling" },
        { text: "ADA-Accessible Showers", to: "/services/ada-accessible-remodeling" },
        { text: "View Shower Portfolio", to: "/portfolio" },
      ],
    },
  ],

  "flooring-installation": [
    {
      heading: "Flooring Installation Services in Lincoln & Placer County",
      body: "Beautiful floors are the foundation of every great room. Franco & Sons Construction LLC provides expert flooring installation services for homeowners in Lincoln, Rocklin, Roseville, and throughout Placer County. We work with all flooring materials — ceramic and porcelain tile, natural stone, hardwood, luxury vinyl plank (LVP), and more — to create the perfect surface for your space. Whether you're installing new floors as part of a larger remodel or as a standalone project, our skilled installers deliver flawless results with precision cutting, proper subfloor preparation, and meticulous attention to detail.",
      bullets: [
        "Ceramic and porcelain tile installation for kitchens, bathrooms, and entryways",
        "Natural stone flooring — marble, travertine, slate, and limestone",
        "Hardwood floor installation — solid and engineered options",
        "Luxury vinyl plank (LVP) for durability and water resistance",
        "Custom tile patterns, borders, and decorative inlays",
        "Floor leveling and subfloor preparation for a flawless finish",
        "Grout sealing and waterproofing for long-lasting protection",
        "Heated floor (radiant heat) systems for comfort",
      ],
      links: [
        { text: "Kitchen Remodeling", to: "/services/kitchen-remodeling" },
        { text: "Bathroom Remodeling", to: "/services/bathroom-remodeling" },
        { text: "Interior Remodeling", to: "/services/interior-remodeling" },
      ],
    },
  ],

  "electrical-plumbing": [
    {
      heading: "Electrical & Plumbing Upgrades for Remodels in Lincoln, CA",
      body: "Every great remodel needs solid infrastructure behind the walls. Franco & Sons Construction LLC handles electrical and plumbing upgrades as part of our comprehensive remodeling services for homeowners in Lincoln, Rocklin, Roseville, and throughout Placer County, California. From panel upgrades and new circuit installation to pipe rerouting and fixture replacement, we ensure your home's systems are safe, efficient, and up to code. All electrical and plumbing work is performed by licensed professionals and integrated seamlessly into your remodel plan.",
      bullets: [
        "Electrical panel upgrades to support modern appliances and circuits",
        "New circuit installation for kitchens, bathrooms, and additions",
        "Lighting fixture installation — recessed, pendant, under-cabinet, and more",
        "Outlet and switch upgrades including GFCI protection",
        "Plumbing fixture replacement — faucets, sinks, toilets, and showers",
        "Pipe rerouting for kitchen and bathroom layout changes",
        "Water heater upgrades and installation",
        "Code compliance updates to meet current California standards",
      ],
      links: [
        { text: "Kitchen Remodeling", to: "/services/kitchen-remodeling" },
        { text: "Bathroom Remodeling", to: "/services/bathroom-remodeling" },
        { text: "Home Additions", to: "/services/home-additions" },
      ],
    },
  ],

  "interior-painting": [
    {
      heading: "Professional Interior Painting in Lincoln & Placer County",
      body: "A fresh coat of paint is one of the most impactful and affordable upgrades you can make to your home. Franco & Sons Construction LLC provides professional interior painting services to homeowners in Lincoln, Rocklin, Roseville, and throughout Placer County with thorough surface preparation, premium paints, and the attention to detail that transforms rooms from tired to beautiful. Whether you're painting a single accent wall or refreshing every room in your house, we deliver clean, crisp results that last.",
      bullets: [
        "Full interior painting — walls, ceilings, and trim",
        "Accent wall design and feature wall painting",
        "Cabinet and trim painting for a refreshed look without replacement",
        "Ceiling painting and texturing — smooth, knockdown, and more",
        "Professional color consultation to help you choose the right palette",
        "Thorough surface preparation — sanding, patching, and priming",
        "Drywall repair, patching, and touch-ups before painting",
        "Clean, protective masking for floors, fixtures, and furniture",
      ],
      links: [
        { text: "Interior Remodeling", to: "/services/interior-remodeling" },
        { text: "Exterior Improvements", to: "/services/exterior-improvements" },
        { text: "Get a Free Painting Estimate", to: "/get-started" },
      ],
    },
  ],

  "exterior-improvements": [
    {
      heading: "Exterior Home Improvement Services in Lincoln & Placer County",
      body: "Your home's exterior is the first impression visitors see and your primary protection from the elements. Franco & Sons Construction LLC provides expert exterior improvement services to homeowners in Lincoln, Rocklin, Roseville, and throughout Placer County that boost curb appeal, increase property value, and keep your home looking its best for years to come. From siding repair and deck construction to exterior painting and window installation, our team delivers quality results with materials built to withstand California's climate.",
      bullets: [
        "Siding repair and replacement — wood, vinyl, and fiber cement",
        "Exterior trim, fascia, and soffit work",
        "Deck construction, repair, and refinishing",
        "Patio and outdoor living area design and construction",
        "Exterior painting with premium, weather-resistant paints",
        "Window and door installation and replacement",
        "Gutter and drainage improvements for water management",
        "Fence construction, repair, and staining",
      ],
      links: [
        { text: "Interior Painting", to: "/services/interior-painting" },
        { text: "Home Additions", to: "/services/home-additions" },
        { text: "View Our Portfolio", to: "/portfolio" },
      ],
    },
  ],
};

/**
 * Rich SEO content blocks for location/service area pages.
 * These provide substantial location-specific content for local SEO.
 */
export const LOCATION_SEO_CONTENT: Record<string, SEOSection[]> = {
  lincoln: [
    {
      heading: "Why Lincoln Homeowners Choose Franco & Sons Construction LLC",
      body: "As Lincoln's trusted local contractor, Franco & Sons Construction LLC has been proudly serving this growing community for years. We're based right here in Lincoln, which means faster response times, familiarity with local building codes, and a deep understanding of the architectural styles found throughout Lincoln's diverse neighborhoods — from Sun City Lincoln Hills and Lincoln Crossing to Del Webb and the newer developments along Twelve Bridges. When you hire us, you're hiring your neighbors.",
      bullets: [
        "Based in Lincoln — we're your local neighbors and builders",
        "Deep knowledge of Lincoln building codes, HOA requirements, and permit processes",
        "Hundreds of completed projects throughout Lincoln neighborhoods",
        "References available from Lincoln homeowners you may know",
        "Quick response times and reliable scheduling for Lincoln residents",
      ],
      links: [
        { text: "Kitchen Remodeling in Lincoln", to: "/services/kitchen-remodeling" },
        { text: "Bathroom Remodeling in Lincoln", to: "/services/bathroom-remodeling" },
        { text: "Home Additions in Lincoln", to: "/services/home-additions" },
      ],
    },
    {
      heading: "Construction & Remodeling Services Available in Lincoln, CA",
      body: "Franco & Sons Construction LLC offers a full range of residential construction and remodeling services to Lincoln homeowners. Whether you're planning a complete kitchen transformation, a bathroom renovation, an ADA-accessible modification, a home addition, or any other improvement, our father-and-son team personally manages every project from consultation through final walkthrough. We provide detailed written estimates, handle permits when required, and maintain a clean, organized job site throughout the construction process. Over 30 years of construction experience means you can trust our craftsmanship, our process, and our commitment to your satisfaction.",
      links: [
        { text: "View All Services", to: "/#services" },
        { text: "Read Our Reviews", to: "/reviews" },
        { text: "Get a Free Estimate", to: "/get-started" },
      ],
    },
  ],

  rocklin: [
    {
      heading: "Trusted Contractor Serving Rocklin, California",
      body: "Franco & Sons Construction LLC proudly serves the Rocklin community with premium remodeling and construction services. From Whitney Ranch and Stanford Ranch to Sunset West and Spring Valley, we've completed dozens of kitchen and bathroom remodels throughout Rocklin's diverse neighborhoods. We're familiar with Rocklin's permit requirements, building standards, and the unique characteristics of homes across the city — from newer construction to established communities that need updating. Our Lincoln-based team provides fast, reliable service to Rocklin homeowners.",
      bullets: [
        "Extensive experience remodeling Rocklin homes across all neighborhoods",
        "Knowledge of Rocklin city permit requirements and building codes",
        "Completed projects in Whitney Ranch, Stanford Ranch, Spring Valley, and more",
        "Free on-site estimates for all Rocklin homeowners",
        "Licensed, insured, and committed to quality craftsmanship",
      ],
      links: [
        { text: "Kitchen Remodeling in Rocklin", to: "/services/kitchen-remodeling" },
        { text: "Bathroom Remodeling in Rocklin", to: "/services/bathroom-remodeling" },
        { text: "Get a Free Estimate", to: "/get-started" },
      ],
    },
  ],

  roseville: [
    {
      heading: "Roseville's Trusted Remodeling Contractor",
      body: "Roseville homeowners trust Franco & Sons Construction LLC for quality remodeling and construction. Whether you're in West Roseville's newer developments, updating a home in established neighborhoods like Woodcreek or Fiddyment Farm, or renovating a property near historic downtown Roseville, we deliver consistent excellence. Our featured kitchen remodel for Steven in Roseville — where we removed walls, opened the layout, and transformed a cramped kitchen into a bright, spacious dream space — is a perfect example of the transformations we deliver throughout the Roseville community.",
      bullets: [
        "Featured kitchen and bathroom projects completed in Roseville",
        "Familiar with Roseville city permits and building requirements",
        "Projects from Fiddyment Farm and West Roseville to Woodcreek and beyond",
        "Same-day estimate scheduling available for Roseville homeowners",
        "Licensed, insured, and backed by 30+ years of experience",
      ],
      links: [
        { text: "See Steven's Kitchen Remodel", to: "/portfolio" },
        { text: "All Roseville Services", to: "/#services" },
        { text: "Request Your Free Estimate", to: "/get-started" },
      ],
    },
  ],

  loomis: [
    {
      heading: "Construction & Remodeling Services in Loomis, CA",
      body: "Franco & Sons Construction LLC serves the Loomis community with the same dedication and quality craftsmanship we're known for throughout the region. From rural properties and equestrian estates to homes in the town center, we handle kitchen remodels, bathroom renovations, home additions, and interior improvements of all sizes. Our team understands the unique character of Loomis homes — including older properties that require careful renovation and newer construction that benefits from modern upgrades. As your local Placer County contractor, we provide fast response times and personalized service.",
      links: [
        { text: "Kitchen Remodeling in Loomis", to: "/services/kitchen-remodeling" },
        { text: "Bathroom Remodeling in Loomis", to: "/services/bathroom-remodeling" },
        { text: "Get a Free Estimate", to: "/get-started" },
      ],
    },
  ],

  newcastle: [
    {
      heading: "Remodeling Contractor Serving Newcastle, California",
      body: "Franco & Sons Construction LLC brings expert remodeling services to the Newcastle community in the Placer County foothills. From charming foothill properties and ranch-style homes to modern residences, our family team delivers the same quality craftsmanship and personal attention that has made us Placer County's trusted contractor. We understand the unique building challenges of foothill construction — including terrain considerations, older home structures, and the blend of architectural styles found throughout Newcastle. Whether you're updating a kitchen, renovating a bathroom, or adding space to your foothill home, we handle every detail.",
      links: [
        { text: "View All Services", to: "/#services" },
        { text: "Contact Us", to: "/contact" },
      ],
    },
  ],

  auburn: [
    {
      heading: "Auburn, CA — Expert Construction & Remodeling Services",
      body: "From Auburn's historic Old Town properties to foothill homes and newer developments, Franco & Sons Construction LLC brings expert construction and remodeling services to the Auburn community. We understand the unique building challenges of foothill construction — including steep lots, older home structures, and the diverse architectural styles found throughout Auburn and surrounding areas. Our team has extensive experience renovating both historic properties that require careful, respectful updates and modern homes that benefit from contemporary design upgrades. As a licensed, insured California general contractor with over 30 years of experience, we deliver quality results on every Auburn project.",
      links: [
        { text: "Kitchen Remodeling", to: "/services/kitchen-remodeling" },
        { text: "Home Additions", to: "/services/home-additions" },
        { text: "Get a Free Estimate", to: "/get-started" },
      ],
    },
  ],

  folsom: [
    {
      heading: "Folsom, CA — Premium Remodeling & Construction Services",
      body: "Franco & Sons Construction LLC serves the Folsom community with premium kitchen remodeling, bathroom renovations, and home additions. Whether you're in Broadstone, Empire Ranch, Folsom Ranch, or Folsom's historic district near Sutter Street, we bring the same dedication to quality and craftsmanship on every project. Folsom homeowners appreciate our transparent pricing, detailed written estimates, and the fact that Carlos and Cristian Franco personally manage every project. We're familiar with Folsom's city permit requirements, building codes, and the expectations of Folsom homeowners who demand quality results.",
      links: [
        { text: "Kitchen Remodeling in Folsom", to: "/services/kitchen-remodeling" },
        { text: "Bathroom Remodeling in Folsom", to: "/services/bathroom-remodeling" },
        { text: "Request Your Free Estimate", to: "/get-started" },
      ],
    },
  ],

  "el-dorado-hills": [
    {
      heading: "El Dorado Hills — High-End Remodeling & Construction",
      body: "El Dorado Hills homeowners deserve premium craftsmanship that matches the quality of their homes and community. Franco & Sons Construction LLC delivers high-end remodeling and construction services throughout El Dorado Hills — from luxury kitchen remodels with custom cabinetry and premium countertops to spa-like bathroom renovations with designer tile and fixtures. Our team understands the elevated expectations of El Dorado Hills homeowners and delivers results that exceed them. With over 30 years of construction experience and a reputation for integrity, we're the trusted choice for discerning homeowners who want their project done right.",
      bullets: [
        "High-end residential remodeling specialization",
        "Premium materials and luxury finishes",
        "Experience with upscale home renovations throughout El Dorado Hills",
        "Professional, respectful service that protects your home and property",
        "Detailed written estimates with transparent, honest pricing",
      ],
      links: [
        { text: "Luxury Kitchen Remodeling", to: "/services/kitchen-remodeling" },
        { text: "Custom Shower Design", to: "/services/custom-showers" },
        { text: "View Our Portfolio", to: "/portfolio" },
      ],
    },
  ],
};

/**
 * SEO content blocks for static pages (Home, About, Why Us, Portfolio, Process).
 * These add rich content that can be optimized for target keywords.
 */
export const PAGE_SEO_CONTENT: Record<string, SEOSection[]> = {
  home: [
    {
      heading: "Lincoln's Trusted Family-Owned General Contractor",
      body: "Franco & Sons Construction LLC is a family-owned general contractor based in Lincoln, California, serving homeowners throughout Placer County and the greater Sacramento region. Founded by Carlos Franco — with over 30 years of hands-on construction experience — and now run alongside his son Cristian, we specialize in residential kitchen remodeling, bathroom renovations, ADA-accessible modifications, home additions, and a full range of interior and exterior improvements. When you hire Franco & Sons, you're hiring a family that cares about your home as much as you do.",
      links: [
        { text: "Meet Our Family", to: "/about" },
        { text: "Why Choose Us", to: "/why-us" },
        { text: "View Our Work", to: "/portfolio" },
      ],
    },
    {
      heading: "Serving Lincoln, Rocklin, Roseville & Surrounding Communities",
      body: "From our home base in Lincoln, we serve homeowners throughout the region including Rocklin, Roseville, Loomis, Newcastle, Auburn, Folsom, and El Dorado Hills. We know the neighborhoods, the building codes, and the architectural styles across Placer County — and we bring the same commitment to quality and personal service to every community we serve. Whether you're in Sun City Lincoln Hills or the foothills of Auburn, Franco & Sons Construction LLC is your local, trusted contractor.",
      links: [
        { text: "Lincoln", to: "/locations/lincoln" },
        { text: "Rocklin", to: "/locations/rocklin" },
        { text: "Roseville", to: "/locations/roseville" },
        { text: "Auburn", to: "/locations/auburn" },
        { text: "Folsom", to: "/locations/folsom" },
        { text: "El Dorado Hills", to: "/locations/el-dorado-hills" },
      ],
    },
  ],

  about: [
    {
      heading: "A Family Business Built on Experience & Integrity",
      body: "Franco & Sons Construction LLC isn't a franchise or a large corporate operation — we're a real family business. Carlos Franco brings over 30 years of hands-on construction experience to every project, and his son Cristian works alongside him as co-owner, managing client relationships, project coordination, and day-to-day operations. When you hire us, Carlos and Cristian are personally on your job site — not subcontractors you've never met. That's the Franco & Sons difference: real accountability, real expertise, and a genuine commitment to doing excellent work for our neighbors.",
      links: [
        { text: "Our Remodeling Process", to: "/process" },
        { text: "Why Homeowners Choose Us", to: "/why-us" },
        { text: "Read Client Reviews", to: "/reviews" },
      ],
    },
  ],

  "why-us": [
    {
      heading: "What Makes Franco & Sons Construction LLC Different",
      body: "In an industry where homeowners often struggle to find a contractor they can trust, Franco & Sons Construction LLC stands apart. We don't use high-pressure sales tactics, we don't have hidden fees, and we don't disappear mid-project. Carlos and Cristian Franco are personally on your job site every day — managing quality, communicating progress, and ensuring your project meets the highest standards. With over 30 years of construction experience, a 5-star rating from homeowners across Placer County, and a commitment to transparency at every step, we've built our reputation one project at a time.",
      bullets: [
        "Father and son personally on every job — never handed off to strangers",
        "Detailed written estimates with no hidden fees or surprise charges",
        "Licensed, insured, and code-compliant California general contractor",
        "Over 30 years of hands-on construction experience",
        "5-star rated by homeowners across Lincoln, Rocklin, Roseville, and beyond",
        "Start-to-finish project management from consultation through final walkthrough",
        "Clean, organized job sites — we respect your home and family",
        "Satisfaction guaranteed on every project we complete",
      ],
      links: [
        { text: "Read Client Reviews", to: "/reviews" },
        { text: "View Our Portfolio", to: "/portfolio" },
        { text: "See Our Process", to: "/process" },
      ],
    },
  ],

  portfolio: [
    {
      heading: "Our Work — Kitchen, Bathroom & Home Remodeling Projects",
      body: "The portfolio below showcases real projects completed by Franco & Sons Construction LLC for homeowners throughout Lincoln, Rocklin, Roseville, and Placer County. From complete kitchen transformations and custom bathroom renovations to ADA-accessible modifications and home additions, every project reflects our commitment to quality craftsmanship, attention to detail, and client satisfaction. We invite you to browse our before-and-after photos and see the kind of results we deliver. If you'd like to discuss a similar project for your home, contact us for a free, no-obligation consultation.",
      links: [
        { text: "Kitchen Remodeling Services", to: "/services/kitchen-remodeling" },
        { text: "Bathroom Remodeling Services", to: "/services/bathroom-remodeling" },
        { text: "Get a Free Estimate", to: "/get-started" },
      ],
    },
  ],

  process: [
    {
      heading: "How Our Remodeling Process Works — From Consultation to Completion",
      body: "At Franco & Sons Construction LLC, we believe a great remodel starts with a great process. We've refined our approach over 30 years and hundreds of projects to minimize stress, maximize quality, and keep you informed at every step. From your initial free consultation through design, construction, and final walkthrough, Carlos and Cristian Franco personally manage your project. There's no confusing handoffs, no disappearing contractors, and no surprises. Below is a step-by-step look at what you can expect when you work with our family.",
      links: [
        { text: "Get Started With a Free Consultation", to: "/get-started" },
        { text: "View Our Completed Projects", to: "/portfolio" },
        { text: "Read Client Testimonials", to: "/reviews" },
      ],
    },
  ],
};
