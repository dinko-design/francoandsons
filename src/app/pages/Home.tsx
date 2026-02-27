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
  BookOpen,
  Download,
} from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS, TESTIMONIALS, IMAGES } from "../data/siteData";
import { LeadCaptureForm } from "../components/shared/LeadCaptureForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AngularDivider, BlueprintLines, GeometricBackground } from "../components/shared/AngularDivider";
import { BLOG_POSTS } from "../data/blogData";
import { GuaranteeStrip } from "../components/shared/PromotionBanner";
import { BeforeAfterShowcase } from "../components/shared/BeforeAfterShowcase";
import { TrustBadges } from "../components/shared/TrustBadges";
import { SEOContentBlock } from "../components/shared/SEOContentBlock";
import { PAGE_SEO_CONTENT } from "../data/seoData";

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
};

export function HomePage() {
  return (
    <div>
      {/* Hero Section - Enhanced with Roofline Pattern */}
      <section className="relative min-h-[650px] lg:min-h-[750px] flex items-center pb-[100px]">
        <div className="absolute inset-0">
          <img src={IMAGES.kitchenOpenConcept} alt="Beautiful kitchen remodel by Franco & Sons Construction LLC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#1E3A5F]/75 to-[#0A1628]/50" />
          <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0A1628]/90 to-transparent" />
          {/* Architectural roofline pattern overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <svg className="absolute bottom-0 left-0 w-full h-48" viewBox="0 0 1440 180" preserveAspectRatio="none">
              {/* Multiple roofline peaks */}
              <path d="M0,180 L200,80 L400,180" stroke="#C77D3A" strokeWidth="2" fill="none" />
              <path d="M350,180 L550,90 L750,180" stroke="#C77D3A" strokeWidth="3" fill="none" />
              <path d="M700,180 L900,70 L1100,180" stroke="#C77D3A" strokeWidth="2" fill="none" />
              <path d="M1050,180 L1250,85 L1440,180" stroke="#C77D3A" strokeWidth="2" fill="none" />
              {/* Accent lines */}
              <line x1="0" y1="140" x2="1440" y2="100" stroke="#1E3A5F" strokeWidth="1" opacity="0.5" />
              <line x1="0" y1="100" x2="1440" y2="140" stroke="#1E3A5F" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-[#C77D3A] fill-[#C77D3A]" />
                ))}
              </div>
              <span className="text-white/90 text-[0.9rem] font-medium">5.0 Rating | Lincoln's Trusted Contractor</span>
            </div>
            <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] text-white mb-6 font-bold leading-[1.05] tracking-tight">
              Crafting Quality,{" "}
              <span className="text-[#C77D3A] relative inline-block">
                Building Trust
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,4 Q50,0 100,4 T200,4" stroke="#C77D3A" strokeWidth="2" fill="none" opacity="0.6" />
                </svg>
              </span>
            </h1>
            <p className="text-white/85 text-[1.15rem] mb-9 leading-relaxed max-w-xl font-normal">
              Family-owned construction and remodeling serving Lincoln, California and the greater Placer County area. {COMPANY.yearsExperience}+ years of precision craftsmanship and dedicated service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started" className="bg-[#C77D3A] text-white px-9 py-4 rounded-md text-[1.05rem] font-semibold hover:bg-[#A25E2A] transition-all shadow-lg shadow-[#C77D3A]/30 inline-flex items-center justify-center gap-2 group">
                Get Your Free Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="border-2 border-white/80 text-white px-9 py-4 rounded-md text-[1.05rem] font-semibold hover:bg-white/15 hover:border-white transition-all inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#0A1628" to="#ffffff" variant="roof-valley" />

      {/* Trust Bar - Blends with Background */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-5 h-5 text-[#1E3A5F]" />, label: "Licensed & Insured", sub: COMPANY.license },
              { icon: <Clock className="w-5 h-5 text-[#1E3A5F]" />, label: `${COMPANY.yearsExperience}+ Years Experience`, sub: "Family Tradition" },
              { icon: <Star className="w-5 h-5 text-[#C77D3A]" />, label: "5-Star Rated", sub: "100+ Happy Clients" },
              { icon: <Users className="w-5 h-5 text-[#1E3A5F]" />, label: "Family Owned", sub: "Father & Son Team" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#F1F4F7] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1E3A5F] transition-colors duration-300">
                  <div className="group-hover:[&>svg]:text-white transition-colors duration-300">{item.icon}</div>
                </div>
                <div>
                  <div className="text-[0.9rem] font-semibold text-[#0A1628]">{item.label}</div>
                  <div className="text-[0.8rem] text-[#5A6B7D] font-medium">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#0A1628" variant="roof-steep" />

      {/* Branded Fleet - Redesigned */}
      <section className="relative min-h-[550px] lg:min-h-[600px] overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0">
          <ImageWithFallback src={IMAGES.brandedTrucks} alt="Franco & Sons Construction LLC branded fleet" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#1E3A5F]/85 to-[#0A1628]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-transparent to-[#0A1628]/50" />
          {/* Roofline accent */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] opacity-15">
            <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
              <path d="M0,200 L300,100 L600,200 L900,80 L1200,200 L1440,120 L1440,200 Z" fill="url(#gradient-roof)" />
              <defs>
                <linearGradient id="gradient-roof" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#C77D3A", stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: "#C77D3A", stopOpacity: 0 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[550px] lg:min-h-[600px]">
          <div className="max-w-2xl py-20">
            <div className="w-16 h-1 bg-[#C77D3A] mb-7" />
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] text-white mb-5 font-bold leading-tight">
              Professional Service, <span className="text-[#C77D3A]">Personal Dedication</span>
            </h2>
            <p className="text-white/85 text-[1.075rem] leading-relaxed mb-8">
              When our branded fleet arrives at your home, you know exactly who's doing the work. Carlos and Cristian Franco — the same father-and-son team from your first consultation to the final walkthrough. No subcontractors, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started" className="bg-[#C77D3A] text-white px-7 py-3.5 rounded-md text-[0.975rem] font-semibold hover:bg-[#A25E2A] transition-all shadow-lg shadow-[#C77D3A]/20 inline-flex items-center justify-center gap-2 group">
                Get Your Free Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="border-2 border-white/60 text-white px-7 py-3.5 rounded-md text-[0.975rem] font-semibold hover:bg-white/10 hover:border-white transition-all inline-flex items-center justify-center gap-2">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#0A1628" to="#FAFBFC" variant="roof-asymmetric" />

      {/* Trust Strip */}
      <TrustBadges variant="strip" />

      {/* Services Section - Enhanced */}
      <GeometricBackground>
        <section className="py-24 lg:py-28 bg-[#FAFBFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#C77D3A] text-[0.875rem] tracking-widest uppercase font-semibold">Our Services</span>
              <h2 className="text-[2rem] md:text-[2.5rem] mt-3 mb-5 font-bold text-[#0A1628] leading-tight">Expert Construction & Remodeling</h2>
              <p className="text-[#5A6B7D] text-[1.05rem] leading-relaxed">From kitchen remodels to home additions, Franco & Sons Construction LLC delivers precision craftsmanship on every project.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {SERVICES.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="group bg-white rounded-lg border border-[#E8EBF0] overflow-hidden hover:shadow-xl hover:shadow-[#1E3A5F]/10 transition-all duration-300 hover:border-[#1E3A5F]/30 hover:-translate-y-1">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <ImageWithFallback src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Roofline divider overlay */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <svg viewBox="0 0 400 35" preserveAspectRatio="none" className="w-full block" style={{ height: "35px" }}>
                        <path d="M0,35 L200,5 L400,35 Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#F1F4F7] rounded-lg flex items-center justify-center text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white transition-colors duration-300">{iconMap[service.icon]}</div>
                      <h3 className="text-[1.075rem] font-semibold text-[#0A1628] group-hover:text-[#1E3A5F] transition-colors">{service.title}</h3>
                    </div>
                    <p className="text-[#5A6B7D] text-[0.9rem] leading-relaxed mb-4">{service.description}</p>
                    <span className="text-[#C77D3A] text-[0.9rem] inline-flex items-center gap-1 group-hover:gap-2 transition-all font-semibold">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </GeometricBackground>

      <AngularDivider from="#FAFBFC" to="#ffffff" variant="roof-shallow" />

      {/* Why Franco & Sons Construction LLC - Enhanced */}
      <section className="py-24 lg:py-28 bg-white relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#C77D3A] text-[0.875rem] tracking-widest uppercase font-semibold">Why Choose Us</span>
              <h2 className="text-[2rem] md:text-[2.5rem] mt-3 mb-6 font-bold text-[#0A1628] leading-tight">A Family Business Built on Trust</h2>
              <p className="text-[#5A6B7D] text-[1.05rem] mb-9 leading-relaxed">
                When you hire Franco & Sons Construction LLC, you're not getting a faceless corporation. Carlos and Cristian Franco work on every project personally — from your initial consultation to the final walkthrough.
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
                    <CheckCircle className="w-5 h-5 text-[#C77D3A] mt-0.5 shrink-0" />
                    <span className="text-[0.95rem] text-[#0A1628] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#1E3A5F] text-[1rem] font-semibold hover:gap-3 hover:text-[#C77D3A] transition-all group">
                Meet the Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl relative border-2 border-[#E8EBF0]">
                <ImageWithFallback src={IMAGES.carlosCristianKitchen} alt="Carlos and Cristian Franco" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />
              </div>
              {/* Roofline accent badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#1E3A5F] text-white p-7 rounded-lg shadow-2xl hidden md:block">
                <div className="text-[2.25rem] font-bold leading-none mb-1">{COMPANY.yearsExperience}+</div>
                <div className="text-[0.875rem] text-white/90 font-medium">Years of Excellence</div>
                {/* Small roofline decoration */}
                <svg className="absolute -top-3 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,10 L50,0 L100,10 Z" fill="#C77D3A" />
                </svg>
              </div>
              {/* Architectural corner accent */}
              <div className="absolute -top-5 -right-5 w-28 h-28 hidden lg:block">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M0,0 L100,0 L100,100" stroke="#C77D3A" strokeWidth="3" fill="none" opacity="0.3" />
                  <path d="M10,0 L100,0 L100,90" stroke="#1E3A5F" strokeWidth="2" fill="none" opacity="0.2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#FAFBFC" variant="roof-multi" />

      {/* Featured Projects */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>Our Work</span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>Featured Projects</h2>
            <p className="text-muted-foreground text-[1rem]">See the quality and craftsmanship that has made Franco & Sons Construction LLC the go-to contractor in Lincoln, California.</p>
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
              <div key={project.label} className="group relative rounded-xl overflow-hidden cursor-pointer">
                <ImageWithFallback src={project.img} alt={project.label} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-[0.9rem]" style={{ fontWeight: 600 }}>{project.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg text-[0.95rem] hover:bg-[#1E293B] transition-colors" style={{ fontWeight: 600 }}>
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <AngularDivider from="#F8FAFC" to="#ffffff" variant="zigzag" />

      {/* Before & After Teaser */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#D4A853] text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
              Real Results
            </span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>
              Before & After
            </h2>
            <p className="text-muted-foreground text-[1rem]">
              See the transformations for yourself. Real projects, real results, all by Franco & Sons Construction LLC.
            </p>
          </div>
          <BeforeAfterShowcase variant="teaser" limit={2} />
        </div>
      </section>

      <AngularDivider from="#ffffff" to="#F8FAFC" variant="slant-right" />

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-background relative overflow-hidden">
        <BlueprintLines />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>Testimonials</span>
            <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>What Our Clients Say</h2>
            <p className="text-muted-foreground text-[1rem]">Don't just take our word for it. Here's what homeowners throughout Placer County have to say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-background rounded-xl border border-border p-6 hover:shadow-md hover:shadow-primary/5 transition-all">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div className="border-t border-border pt-4">
                  <div className="text-[0.9rem]" style={{ fontWeight: 600 }}>{t.name}</div>
                  <div className="text-[0.8rem] text-muted-foreground">{t.service} - {t.location}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-primary text-[0.95rem] hover:gap-3 transition-all" style={{ fontWeight: 600 }}>
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <AngularDivider from="#F8FAFC" to="#F8FAFC" variant="slant-right" />

      {/* Service Areas */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>Service Areas</span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2 mb-4" style={{ fontWeight: 700 }}>Proudly Serving Lincoln & Surrounding Communities</h2>
              <p className="text-muted-foreground text-[1rem] mb-8 leading-relaxed">Based in Lincoln, California, we serve homeowners throughout the greater Placer County area.</p>
              <div className="grid grid-cols-2 gap-3">
                {LOCATIONS.map((loc) => (
                  <Link key={loc.slug} to={`/locations/${loc.slug}`} className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors ${loc.isPrimary ? "bg-primary text-white border-primary" : "bg-white border-border hover:border-primary hover:text-primary"}`}>
                    <MapPinIcon className="w-4 h-4 shrink-0" />
                    <span className="text-[0.9rem]" style={{ fontWeight: 500 }}>{loc.city}, CA</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <ImageWithFallback src={IMAGES.lincoln} alt="Lincoln, California neighborhood" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-primary/20 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      <AngularDivider from="#F8FAFC" to="#ffffff" variant="slant-left" />

      {/* Blog & Resources Teaser */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-primary text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600 }}>
                Blog & Resources
              </span>
              <h2 className="text-[1.75rem] md:text-[2.25rem] mt-2" style={{ fontWeight: 700 }}>
                Expert Tips & Guides
              </h2>
            </div>
            <Link to="/blog" className="text-primary text-[0.9rem] inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ fontWeight: 600 }}>
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.filter((p) => p.featured).slice(0, 3).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[0.75rem] text-muted-foreground mb-2">
                    <span className="text-primary" style={{ fontWeight: 600 }}>{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-[0.95rem] mb-2 group-hover:text-primary transition-colors" style={{ fontWeight: 700 }}>{post.title}</h3>
                  <p className="text-muted-foreground text-[0.8rem] leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* Free resources bar */}
          <div className="mt-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-primary shrink-0" />
              <div>
                <div className="text-[0.9rem]" style={{ fontWeight: 700 }}>Free Kitchen Remodel Cost Guide</div>
                <div className="text-[0.8rem] text-muted-foreground">Real pricing for Lincoln & Placer County — not national averages</div>
              </div>
            </div>
            <Link to="/free/kitchen-remodel-cost-guide" className="text-primary text-[0.85rem] flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap" style={{ fontWeight: 600 }}>
              Download Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuaranteeStrip variant="icons-only" />
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContentBlock
            sections={PAGE_SEO_CONTENT.home}
            showRelatedServices
            showServiceAreas
          />
        </div>
      </section>

      <AngularDivider from="#FAFBFC" to="#0A1628" variant="roof-valley" />

      {/* Lead Capture Section */}
      <section className="py-20 lg:py-24 bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="darkgrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="#2563EB" strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#darkgrid)" />
          </svg>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10" style={{ background: "linear-gradient(225deg, #2563EB 0%, transparent 60%)", clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[1.75rem] md:text-[2.25rem] text-white mb-4" style={{ fontWeight: 700 }}>Start Your Project Today</h2>
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
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0 mt-0.5">
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

      <AngularDivider from="#0F172A" to="#2563EB" variant="slant-right" />
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