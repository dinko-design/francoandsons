import { IMAGES } from "./siteData";

export type BlogCategory =
  | "Remodeling Tips"
  | "Before & After"
  | "Home Value"
  | "Design Inspiration"
  | "Industry News"
  | "Contractor Advice";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  content: string[];
  tags: string[];
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Remodeling Tips",
  "Before & After",
  "Home Value",
  "Design Inspiration",
  "Industry News",
  "Contractor Advice",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "kitchen-remodel-cost-lincoln-ca-2026",
    title: "How Much Does a Kitchen Remodel Cost in Lincoln, CA in 2026?",
    excerpt:
      "A breakdown of real kitchen remodel costs in the Lincoln and Placer County area — from budget refreshes to full luxury gut jobs. No vague ranges or national averages.",
    category: "Remodeling Tips",
    image: IMAGES.kitchen,
    author: "Cristian Franco",
    date: "2026-02-10",
    readTime: "8 min",
    featured: true,
    tags: ["kitchen", "cost", "lincoln", "budget"],
    content: [
      "If you're Googling 'kitchen remodel cost' right now, you're probably getting national averages that mean nothing for Lincoln, CA. Here's what kitchen remodels actually cost in our area based on our real project data.",
      "**Budget Refresh ($12,000–$20,000):** New countertops, updated backsplash, refaced or painted cabinets, new fixtures. You keep the existing layout and footprint. Great for homes that have 'good bones' but need a cosmetic update.",
      "**Mid-Range Remodel ($25,000–$45,000):** New custom or semi-custom cabinets, quartz or granite countertops, updated flooring, new lighting, and possibly reconfigured layout. This is our most popular tier — it transforms the look AND function of your kitchen.",
      "**Full Luxury Gut ($50,000–$80,000+):** Everything is new. Walls come down, layouts change, high-end materials throughout. Custom cabinetry, premium appliances, designer tile work. This is the 'dream kitchen' level.",
      "**What drives cost up:** Structural changes (removing walls), electrical panel upgrades, plumbing rerouting, premium materials like natural stone, and custom millwork. We always break these out clearly so you see exactly where every dollar goes.",
      "**The Franco & Sons Construction LLC difference:** We don't give you a vague range and then hit you with change orders. Our estimates are detailed and written. If we discover something unexpected (like old plumbing behind a wall), we stop, show you, and discuss options before any additional work.",
    ],
  },
  {
    slug: "bathroom-remodel-timeline-what-to-expect",
    title: "Bathroom Remodel Timeline: What to Actually Expect",
    excerpt:
      "A realistic week-by-week breakdown of what happens during a bathroom remodel — from demo day to final walkthrough.",
    category: "Remodeling Tips",
    image: IMAGES.bathroom,
    author: "Cristian Franco",
    date: "2026-02-03",
    readTime: "6 min",
    featured: false,
    tags: ["bathroom", "timeline", "process"],
    content: [
      "One of the most common questions we get: 'How long will my bathroom remodel take?' Here's a realistic timeline based on hundreds of bathroom projects we've completed.",
      "**Week 1: Demo & Rough-In.** We protect your home, demo the old bathroom, and handle any plumbing/electrical rough-in. This is when we discover any hidden issues (water damage, outdated wiring). If we find something, we stop and discuss it with you immediately.",
      "**Week 2: Waterproofing & Tile.** This is the most critical phase. Proper waterproofing prevents thousands of dollars in future damage. We never rush this step. Custom tile work begins — showers, floors, accent walls.",
      "**Week 3: Fixtures & Finishing.** Vanity installation, plumbing connections, lighting, mirrors, accessories. The bathroom starts coming together and looking amazing.",
      "**Week 4: Final Details & Walkthrough.** Touch-ups, caulking, final cleaning, and your walkthrough. We don't leave until you're 100% happy.",
      "**Pro tip:** The best time to start a bathroom remodel is 6-8 weeks before you need it done. Don't wait until the last minute — good contractors book out.",
    ],
  },
  {
    slug: "questions-to-ask-contractor-before-hiring",
    title: "10 Questions You Must Ask Before Hiring a Contractor",
    excerpt:
      "Protect yourself from bad contractors with these 10 critical questions. Most homeowners skip #7 and regret it.",
    category: "Contractor Advice",
    image: IMAGES.carlosWithClient,
    author: "Carlos Franco",
    date: "2026-01-27",
    readTime: "7 min",
    featured: true,
    tags: ["contractor", "hiring", "advice", "tips"],
    content: [
      "Hiring a contractor is one of the biggest financial decisions you'll make as a homeowner. Here are 10 questions that separate the professionals from the problems.",
      "**1. Are you licensed and insured?** Ask to see their actual license and insurance certificates. Verify them. An unlicensed contractor means zero consumer protection if something goes wrong.",
      "**2. Who will be on the job site daily?** If the answer is 'our crew' with no names, that's a red flag. You should know exactly who is working in your home.",
      "**3. Can I see a detailed written estimate?** Vague estimates lead to change orders. A detailed, written estimate is the sign of a professional who has nothing to hide.",
      "**4. Do you pull permits when required?** If a project involves structural work and they suggest skipping permits to save money, run. Unpermitted structural work can tank your home value and create liability nightmares.",
      "**5. What's your payment schedule?** Never pay more than 10-15% upfront. Progress payments tied to milestones are standard. 100% upfront? Walk away.",
      "**6. Can I talk to recent clients?** Not references from 5 years ago — recent ones. Call them. Ask if the project was on time, on budget, and if they'd hire again.",
      "**7. What happens when you find a surprise?** Every remodel has surprises. The question is: does the contractor stop and discuss it with you, or just add it to your bill?",
      "**8. How do you handle change orders?** Changes happen. A good contractor documents them in writing with cost and timeline impact before proceeding.",
      "**9. What warranty do you provide?** Get it in writing. Workmanship warranty plus manufacturer warranties on materials.",
      "**10. Will you be working on other projects simultaneously?** A contractor juggling 5 jobs will disappear for days. Ask how much of their attention your project will get.",
    ],
  },
  {
    slug: "ada-bathroom-remodel-guide-aging-in-place",
    title: "ADA Bathroom Remodel Guide: Safe, Beautiful & Built to Last",
    excerpt:
      "How to create an accessible bathroom that's safe AND beautiful. No institutional look — just smart design that supports independence.",
    category: "Design Inspiration",
    image: IMAGES.ada,
    author: "Cristian Franco",
    date: "2026-01-20",
    readTime: "9 min",
    featured: false,
    tags: ["ada", "accessible", "aging-in-place", "bathroom"],
    content: [
      "An accessible bathroom doesn't have to look like a hospital room. Modern ADA-compliant design combines safety features with beautiful aesthetics. Here's how we approach it at Franco & Sons Construction LLC.",
      "**Walk-in showers over bathtubs.** A low-threshold or zero-threshold walk-in shower is the single most impactful upgrade. It eliminates the #1 fall risk in the bathroom while looking sleek and modern.",
      "**Built-in bench seating.** A tiled bench inside the shower provides a safe seating option that looks intentional, not medical. We custom-build these to match your tile and design.",
      "**Grab bars that look like design elements.** Modern grab bars come in brushed nickel, matte black, and designer finishes. Strategically placed, they look like towel bars while providing critical support.",
      "**Slip-resistant tile.** Beautiful porcelain and natural stone tiles are available with slip-resistant ratings. You don't have to sacrifice style for safety.",
      "**Comfort-height everything.** Raised toilets, accessible vanity heights, lever handles on faucets — small changes that make a huge daily difference.",
      "At Franco & Sons Construction LLC, we've completed dozens of ADA bathroom remodels across Placer County. Every one looks beautiful, functions safely, and supports independent living. Because everyone deserves to feel confident in their own home.",
    ],
  },
  {
    slug: "kitchen-remodel-roi-home-value-2026",
    title: "Does a Kitchen Remodel Increase Home Value? The 2026 Numbers",
    excerpt:
      "Real ROI data on kitchen remodels in the Sacramento/Placer County market. What to invest in and what to skip.",
    category: "Home Value",
    image: IMAGES.kitchenOpenConcept,
    author: "Cristian Franco",
    date: "2026-01-13",
    readTime: "5 min",
    featured: false,
    tags: ["kitchen", "roi", "home-value", "investment"],
    content: [
      "Planning to sell in the next 5 years? A kitchen remodel is consistently the highest-ROI home improvement. Here's what the 2026 data says for our area.",
      "**National average ROI: 72%.** But in the Sacramento/Placer County market, well-executed kitchen remodels are returning 75-85% of investment at resale. Hot market areas like El Dorado Hills and Folsom see even higher returns.",
      "**Highest ROI upgrades:** Quartz countertops (buyers expect them), soft-close cabinets, modern lighting, and open-concept layouts. These have become 'baseline expectations' for buyers in our area.",
      "**Skip these for ROI:** Ultra-high-end appliances (buyers won't pay a premium for them), extremely trendy designs that may date quickly, and over-the-top luxury in a mid-range neighborhood.",
      "**The sweet spot:** A $30K-$45K kitchen remodel in a $450K-$650K Placer County home typically adds $25K-$38K in value while making your home sell faster. That's before you factor in the years of enjoyment you get from living in it.",
      "Bottom line: remodel your kitchen because you want to love your home. The ROI is the bonus.",
    ],
  },
  {
    slug: "roseville-kitchen-remodel-before-after-steven",
    title: "Before & After: Steven's Roseville Kitchen Transformation",
    excerpt:
      "See the complete transformation of a cramped 1990s Roseville kitchen into a bright, open-concept space the whole family loves.",
    category: "Before & After",
    image: IMAGES.kitchenOpenConcept,
    author: "Cristian Franco",
    date: "2026-01-06",
    readTime: "4 min",
    featured: true,
    tags: ["before-after", "kitchen", "roseville", "case-study"],
    content: [
      "Steven came to us with a common problem: a closed-off, dark kitchen in a 1990s Roseville home. The kitchen was functional but felt cramped, outdated, and disconnected from the rest of the house.",
      "**The challenge:** Outdated oak cabinets, tile countertops, a closed-off layout with a wall separating the kitchen from the living area, and a dropped ceiling that made everything feel smaller.",
      "**What we did:** Removed the wall between kitchen and living room (after proper structural engineering). Vaulted the ceiling by removing the soffit. Installed new custom shaker cabinets, quartz countertops, subway tile backsplash, and a kitchen island with bar seating.",
      "**The result:** A bright, spacious, open-concept kitchen that's now the heart of the home. Steven's words: 'Franco & Sons Construction LLC completely transformed our cramped kitchen into a bright, spacious, and functional space we absolutely love.'",
      "**Project details:** Timeline: 6 weeks. Budget: Mid-range. Location: Roseville, CA.",
      "This is what happens when a family-owned contractor treats your home like their own. Every cut, every seam, every detail — done right.",
    ],
  },
  {
    slug: "how-to-survive-living-through-kitchen-remodel",
    title: "How to Survive Living Through a Kitchen Remodel",
    excerpt:
      "Practical tips from homeowners who've been through it — how to set up a temporary kitchen, manage dust, and keep your sanity.",
    category: "Remodeling Tips",
    image: IMAGES.kitchenCabinets,
    author: "Cristian Franco",
    date: "2025-12-30",
    readTime: "5 min",
    featured: false,
    tags: ["kitchen", "tips", "living-through-remodel"],
    content: [
      "Living through a kitchen remodel sounds daunting, but with the right prep, it's totally manageable. Here's how our clients handle it.",
      "**Set up a temporary kitchen.** A folding table, a microwave, a coffee maker, and a mini-fridge. Put them in the dining room or garage. You'll eat more takeout than usual, but having coffee and basic meal prep helps a lot.",
      "**Dust barriers are your friend.** We hang professional-grade plastic barriers to contain dust, but you should also cover furniture in adjacent rooms and keep bedroom doors closed.",
      "**Plan meals ahead.** Stock up on easy meals, paper plates, and disposable utensils. A slow cooker is your best friend during a remodel.",
      "**Communicate with your contractor.** We provide daily updates so you know exactly what's happening, when crews will be there, and what to expect. No surprises.",
      "**Remember why you're doing this.** The temporary inconvenience is worth it. In 4-8 weeks, you'll have the kitchen you've always wanted — and you'll forget all about the microwave meals.",
    ],
  },
  {
    slug: "commercial-remodeling-lincoln-placer-county",
    title: "Commercial Remodeling in Lincoln & Placer County: What Business Owners Need to Know",
    excerpt:
      "Planning a commercial build-out or renovation? Here's what's different about commercial construction and why you need a contractor who gets it.",
    category: "Industry News",
    image: IMAGES.interiorRemodel,
    author: "Carlos Franco",
    date: "2025-12-23",
    readTime: "6 min",
    featured: false,
    tags: ["commercial", "lincoln", "business", "build-out"],
    content: [
      "Commercial remodeling is a different animal than residential. Different codes, different timelines, different stakes. Here's what business owners in Lincoln and Placer County should know.",
      "**ADA compliance is mandatory.** Commercial spaces must meet ADA requirements. This affects everything from doorway widths to restroom design to counter heights. Getting this wrong means failing inspection — and failing inspection means delays and added cost.",
      "**Fire codes change everything.** Commercial fire codes dictate materials, layouts, egress routes, and sprinkler systems. Your contractor needs to know these cold before drawing a single line.",
      "**Timing matters more.** Every day your business is under construction is a day you're not generating revenue. The construction schedule needs to be tight, realistic, and executed flawlessly.",
      "**Permits take longer.** Commercial permits in Placer County involve more agencies, more inspections, and more paperwork. Start the permit process early.",
      "Franco & Sons Construction LLC handles commercial build-outs, tenant improvements, and renovations throughout the Lincoln and Placer County area. We understand the unique demands of commercial construction and deliver on time, on budget, and up to code.",
    ],
  },
];