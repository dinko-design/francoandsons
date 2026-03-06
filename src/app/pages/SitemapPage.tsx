import { Link } from "react-router";
import { Home, Wrench, MapPin, FileText, HelpCircle, Camera, Star, Phone, Gift, BookOpen, ChevronRight } from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS } from "../data/siteData";
import { BLOG_POSTS } from "../data/blogData";
import { BRAND } from "../data/brandConfig";

export function SitemapPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[120px] lg:pb-[140px] bg-accent overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
              Navigation
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Site Map
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              Find everything on our website. Browse all pages, services, locations, and resources from {COMPANY.name}.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "80px" }}>
            <polygon points="0,30 0,80 1440,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* Main Pages */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Home className="w-4.5 h-4.5" />
                </div>
                <h2 className="text-[1.15rem]" style={{ fontWeight: 700 }}>Main Pages</h2>
              </div>
              <ul className="space-y-2.5">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "All Services" },
                  { to: "/portfolio", label: "Portfolio" },
                  { to: "/process", label: "Our Process" },
                  { to: "/why-us", label: "Why Choose Us" },
                  { to: "/packages", label: "Service Packages" },
                  { to: "/reviews", label: "Client Reviews" },
                  { to: "/faq", label: "FAQ" },
                  { to: "/contact", label: "Contact Us" },
                  { to: "/get-started", label: "Get a Free Estimate" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors text-[0.925rem] flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Wrench className="w-4.5 h-4.5" />
                </div>
                <h2 className="text-[1.15rem]" style={{ fontWeight: 700 }}>Services</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                {SERVICES.map((service) => (
                  <div key={service.slug}>
                    <Link to={`/services/${service.slug}`} className="text-[0.95rem] hover:text-primary transition-colors flex items-center gap-2" style={{ fontWeight: 600 }}>
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40" />
                      {service.title}
                    </Link>
                    {service.subPages && service.subPages.length > 0 && (
                      <ul className="mt-2 ml-5 space-y-1.5">
                        {service.subPages.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              to={`/services/${service.slug}/${sub.slug}`}
                              className="text-muted-foreground hover:text-primary transition-colors text-[0.85rem] flex items-center gap-1.5"
                            >
                              <span className="w-1 h-1 rounded-full bg-primary/30 shrink-0" />
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <h2 className="text-[1.15rem]" style={{ fontWeight: 700 }}>Service Areas</h2>
              </div>
              <ul className="space-y-2.5">
                {LOCATIONS.map((loc) => (
                  <li key={loc.slug}>
                    <Link to={`/locations/${loc.slug}`} className="text-muted-foreground hover:text-primary transition-colors text-[0.925rem] flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40" />
                      {loc.city}, {loc.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <h2 className="text-[1.15rem]" style={{ fontWeight: 700 }}>Blog & Resources</h2>
              </div>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/blog" className="text-[0.95rem] hover:text-primary transition-colors flex items-center gap-2" style={{ fontWeight: 600 }}>
                    <ChevronRight className="w-3.5 h-3.5 text-primary/40" />
                    All Blog Posts
                  </Link>
                </li>
                {BLOG_POSTS.map((post) => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`} className="text-muted-foreground hover:text-primary transition-colors text-[0.85rem] flex items-center gap-2 ml-1">
                      <span className="w-1 h-1 rounded-full bg-primary/30 shrink-0" />
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Free Resources */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Gift className="w-4.5 h-4.5" />
                </div>
                <h2 className="text-[1.15rem]" style={{ fontWeight: 700 }}>Free Resources</h2>
              </div>
              <ul className="space-y-2.5">
                {[
                  { to: "/free/kitchen-remodel-cost-guide", label: "Kitchen Remodel Cost Guide" },
                  { to: "/free/bathroom-remodel-checklist", label: "Bathroom Remodel Checklist" },
                  { to: "/free/contractor-hiring-guide", label: "Contractor Hiring Guide" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-muted-foreground hover:text-primary transition-colors text-[0.925rem] flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Legal */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <h2 className="text-[1.15rem]" style={{ fontWeight: 700 }}>Legal</h2>
                </div>
                <ul className="space-y-2.5">
                  <li>
                    <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-[0.925rem] flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-[0.925rem] flex items-center gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/40" />
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
