import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "../data/siteData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AngularDivider, BlueprintLines, GeometricBackground } from "../components/shared/AngularDivider";
import { SEOContentBlock } from "../components/shared/SEOContentBlock";
import { PAGE_SEO_CONTENT } from "../data/seoData";
import { BeforeAfterShowcase } from "../components/shared/BeforeAfterShowcase";

const categories = ["All", "Kitchen", "Bathroom", "ADA Bathroom", "Addition", "Interior", "Flooring"];

const projects = [
  { id: 1, title: "Steven's Kitchen Transformation", location: "Roseville, CA", category: "Kitchen", image: IMAGES.kitchen, description: "Complete kitchen remodel — false ceiling removed, cabinetry extended to full height, layout reconfigured for flow and functionality." },
  { id: 2, title: "Open-Concept Kitchen Remodel", location: "Roseville, CA", category: "Kitchen", image: IMAGES.kitchenOpenConcept, description: "Transformed two separate rooms into a seamless open-concept kitchen — load-bearing wall removed, structural beam fully recessed, custom cherry cabinetry, quartz island, and recessed lighting throughout." },
  { id: 3, title: "Joanne's ADA Bathroom Remodel", location: "Roseville, CA", category: "ADA Bathroom", image: IMAGES.ada, description: "Replaced outdated tub with low-threshold walk-in shower. Built-in bench, slip-resistant tile, and grab bars for safety and comfort." },
  { id: 4, title: "Bathroom Remodel — Tile to Ceiling", location: "Roseville, CA", category: "Bathroom", image: IMAGES.bathroom, description: "Reimagined layout with marble-look tile to ceiling, hexagonal shower floor, recessed towel pantry, pocket door, and refinished vanity — a compact space transformed into a bright, modern bathroom." },
  { id: 5, title: "Double Vanity with LED Mirrors", location: "Roseville, CA", category: "Bathroom", image: IMAGES.bathroomVanity, description: "Refinished sage cabinetry with quartz countertop, dual backlit LED mirrors, and updated fixtures — clean, modern functionality." },
  { id: 6, title: "Two-Story Home Addition", location: "Auburn, CA", category: "Addition", image: IMAGES.homeAddition },
  { id: 7, title: "Open Concept Living Remodel", location: "Lincoln, CA", category: "Interior", image: IMAGES.interiorRemodel },
  { id: 8, title: "Farmhouse Kitchen Remodel", location: "Loomis, CA", category: "Kitchen", image: IMAGES.kitchenBeforeAfter },
  { id: 9, title: "Custom Tile Flooring", location: "Lincoln, CA", category: "Flooring", image: IMAGES.tile },
  { id: 10, title: "Walk-In Shower Conversion", location: "Rocklin, CA", category: "ADA Bathroom", image: IMAGES.ada },
  { id: 11, title: "Interior Living Space Renovation", location: "Roseville, CA", category: "Interior", image: IMAGES.livingRoom },
  { id: 12, title: "Hardwood Floor Installation", location: "Auburn, CA", category: "Flooring", image: IMAGES.tile },
];

const featuredImages = [
  { src: IMAGES.kitchen, alt: "Kitchen island with granite countertops and breakfast bar seating" },
  { src: IMAGES.kitchenCabinets, alt: "White shaker cabinets with double wall oven and granite backsplash" },
  { src: IMAGES.kitchenCooktop, alt: "Full kitchen view with cooktop area, floor-to-ceiling cabinetry, and stainless appliances" },
  { src: IMAGES.kitchenOpenConcept, alt: "Open-concept cherry cabinet kitchen with large island and bar seating" },
  { src: IMAGES.kitchenIslandClose, alt: "Cherry cabinetry island detail with quartz countertops and stainless appliances" },
];

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [featuredIdx, setFeaturedIdx] = useState(0);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const nextFeatured = () => setFeaturedIdx((i) => (i + 1) % featuredImages.length);
  const prevFeatured = () => setFeaturedIdx((i) => (i - 1 + featuredImages.length) % featuredImages.length);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[100px] lg:pb-[120px] bg-accent overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="portfoliogrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#portfoliogrid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Portfolio
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Our Work Speaks for Itself
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              Browse our portfolio of completed projects throughout Lincoln, Rocklin, Roseville, and the greater Placer County area. Every project showcases the quality and craftsmanship that Franco & Sons Construction LLC is known for.
            </p>
          </div>
        </div>
        {/* Angular shape integrated into hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
            style={{ height: "60px" }}
          >
            <polygon points="0,10 360,60 720,10 1080,60 1440,10 1440,60 0,60" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Featured Project
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              Kitchen Remodel — Roseville, CA
            </h2>
            <p className="text-muted-foreground text-[1rem] leading-relaxed">
              A complete kitchen transformation showcasing the quality craftsmanship and attention to detail that defines every Franco & Sons Construction LLC project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image carousel */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl border border-border">
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={featuredImages[featuredIdx].src}
                    alt={featuredImages[featuredIdx].alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Navigation arrows */}
                  <button
                    onClick={prevFeatured}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5 text-accent" />
                  </button>
                  <button
                    onClick={nextFeatured}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5 text-accent" />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {featuredImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setFeaturedIdx(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === featuredIdx ? "bg-white scale-110 shadow" : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`View photo ${i + 1}`}
                      />
                    ))}
                  </div>
                  {/* Angular bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full block" style={{ height: "20px" }}>
                      <polygon points="0,20 400,20 400,5 250,0 150,10 0,5" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {featuredImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setFeaturedIdx(i)}
                    className={`flex-1 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                      i === featuredIdx
                        ? "border-primary shadow-md shadow-primary/20"
                        : "border-border hover:border-primary/40 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project details */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-[0.9rem]">Roseville, California</span>
              </div>
              <h3 className="text-[1.35rem] md:text-[1.5rem] mb-4" style={{ fontWeight: 700 }}>
                From Cramped to Captivating
              </h3>
              <div className="space-y-4 text-[0.95rem] text-muted-foreground leading-relaxed">
                <p>
                  What was once a cramped and segmented space has transformed into a bright, open, and highly functional kitchen. By removing the false ceiling, we extended the cabinetry to the full height of the room, which not only increased storage but also created a seamless and elevated finish.
                </p>
                <p>
                  The layout was reconfigured to enhance flow and cohesiveness, ensuring that the space perfectly aligns with the client's daily needs and lifestyle. As part of a comprehensive home remodel, every design decision was made with a focus on continuity and functionality.
                </p>
                <p>
                  The result is a spacious and modern living environment that showcases thoughtful craftsmanship and reflects the clients' genuine love for their new home.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Custom white shaker cabinetry",
                  "Granite countertops & backsplash",
                  "Kitchen island with seating",
                  "Double wall oven installation",
                  "Recessed lighting throughout",
                  "New flooring throughout",
                  "False ceiling removal",
                  "Full layout reconfiguration",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-[0.85rem]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 bg-primary/5 rounded-lg px-4 py-3 border border-primary/10">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[0.85rem] text-muted-foreground italic">
                  "Franco & Sons Construction LLC completely transformed our cramped kitchen into a bright, spacious, and functional space we absolutely love."
                </p>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[0.8rem] text-muted-foreground">— Steven, Roseville CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angular divider: featured to before/after */}
      <AngularDivider from="#ffffff" to="#F8FAFC" variant="slant-left" />

      {/* Before & After Showcase */}
      <GeometricBackground>
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#D4A853] text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                Real Results
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
                Before & After
              </h2>
              <p className="text-muted-foreground text-[1rem] leading-relaxed">
                Nothing tells the story like side-by-side results. Browse real transformations completed by Franco & Sons Construction LLC throughout Placer County.
              </p>
            </div>
            <BeforeAfterShowcase variant="full" />
          </div>
        </section>
      </GeometricBackground>

      {/* Angular divider: before/after to gallery */}
      <AngularDivider from="#F8FAFC" to="#ffffff" variant="arrow-down" />

      {/* Gallery */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              All Projects
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              Project Gallery
            </h2>
            <p className="text-muted-foreground text-[1rem]">
              Every project reflects the same dedication to quality, from kitchens and bathrooms to additions and accessibility remodels.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-lg text-[0.875rem] transition-colors ${
                  activeFilter === cat
                    ? "bg-primary text-white"
                    : "bg-white border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
                style={{ fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Angular overlay */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full block" style={{ height: "20px" }}>
                      <polygon points="0,20 400,20 400,5 250,0 150,10 0,5" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-primary text-[0.75rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                    {project.category}
                  </span>
                  <h3 className="text-[1rem] mt-1 mb-1" style={{ fontWeight: 600 }}>{project.title}</h3>
                  <p className="text-muted-foreground text-[0.85rem]">{project.location}</p>
                  {project.description && (
                    <p className="text-muted-foreground text-[0.8rem] mt-2 leading-relaxed">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Angular divider */}
      <AngularDivider from="#ffffff" to="#EFF6FF" variant="sharp" />

      {/* SEO Content Block */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContentBlock
            sections={PAGE_SEO_CONTENT.portfolio}
            showRelatedServices
            showServiceAreas
          />
        </div>
      </section>

      {/* Angular divider: to footer */}
      <AngularDivider from="#EFF6FF" to="#2563EB" variant="slant-right" />
    </div>
  );
}