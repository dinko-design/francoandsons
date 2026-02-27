import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Home as HomeIcon,
  Users,
  Award,
  Star,
  HelpCircle,
  Mail,
  FolderOpen,
  BookOpen,
  Download,
  ChefHat,
  Bath,
  Building2,
  MapPin,
  Accessibility,
  Grid3X3,
  Zap,
  Paintbrush,
  TreePine,
  Droplets,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS } from "../../data/siteData";
import { Logo } from "../shared/Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActivePrefix = (prefix: string) => location.pathname.startsWith(prefix);

  // Secondary nav items (upper row)
  const secondaryNav = [
    { to: "/about", label: "About", icon: <Users className="w-3.5 h-3.5" /> },
    { to: "/why-us", label: "Why Us", icon: <Award className="w-3.5 h-3.5" /> },
    { to: "/portfolio", label: "Portfolio", icon: <FolderOpen className="w-3.5 h-3.5" /> },
    { to: "/reviews", label: "Reviews", icon: <Star className="w-3.5 h-3.5" /> },
    { to: "/blog", label: "Blog", icon: <BookOpen className="w-3.5 h-3.5" /> },
    { to: "/faq", label: "FAQ", icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { to: "/contact", label: "Contact", icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <>
      {/* ══════════════════════════════════ */}
      {/* Top utility bar                    */}
      {/* ══════════════════════════════════ */}
      <div className="bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <span className="text-[0.8rem] opacity-80 hidden sm:inline">{COMPANY.license}</span>
          </div>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-[0.85rem] hover:text-[#60A5FA] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY.phone}</span>
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════ */}
      {/* Secondary nav row (upper)          */}
      {/* ══════════════════════════════════ */}
      <div className="bg-white border-b border-border hidden lg:block sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <nav className="flex items-center gap-0.5">
              {secondaryNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[0.75rem] transition-colors ${
                    isActive(item.to)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                to="/free/kitchen-remodel-cost-guide"
                className="flex items-center gap-1.5 text-primary text-[0.75rem] hover:text-[#1D4ED8] transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Download className="w-3.5 h-3.5" />
                Free Cost Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════ */}
      {/* Primary nav row (main buckets)     */}
      {/* ══════════════════════════════════ */}
      <header className="bg-white sticky top-0 lg:top-9 z-50 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            {/* Logo */}
            <Logo variant="dark" linkTo="/" />

            {/* Desktop primary nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Kitchens bucket */}
              <Link
                to="/services/kitchen-remodeling"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[0.9rem] transition-all ${
                  location.pathname === "/services/kitchen-remodeling"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-primary/5 hover:text-primary"
                }`}
                style={{ fontWeight: 600 }}
              >
                <ChefHat className="w-4.5 h-4.5 text-primary" />
                Kitchens
              </Link>

              {/* Baths bucket */}
              <Link
                to="/services/bathroom-remodeling"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[0.9rem] transition-all ${
                  location.pathname === "/services/bathroom-remodeling" || location.pathname === "/services/custom-showers" || location.pathname === "/services/ada-accessible-remodeling"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-primary/5 hover:text-primary"
                }`}
                style={{ fontWeight: 600 }}
              >
                <Bath className="w-4.5 h-4.5 text-primary" />
                Baths
              </Link>

              {/* Commercial bucket */}
              <Link
                to="/services/commercial-remodeling"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[0.9rem] transition-all ${
                  location.pathname === "/services/commercial-remodeling"
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-primary/5 hover:text-primary"
                }`}
                style={{ fontWeight: 600 }}
              >
                <Building2 className="w-4.5 h-4.5 text-primary" />
                Commercial
              </Link>

              {/* Divider */}
              <div className="w-px h-6 bg-border mx-1" />

              {/* All Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[0.85rem] transition-colors ${
                    isActivePrefix("/services") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  All Services
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white border border-border rounded-xl shadow-xl py-2 z-50">
                    <div className="px-4 py-1.5 text-[0.7rem] tracking-wider uppercase text-primary" style={{ fontWeight: 700 }}>
                      Primary Services
                    </div>
                    {SERVICES.filter((s) => s.tier === "primary").map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-[0.875rem] hover:bg-primary/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="text-primary">{getServiceIcon(service.icon)}</span>
                        {service.title}
                      </Link>
                    ))}
                    <div className="border-t border-border my-1" />
                    <div className="px-4 py-1.5 text-[0.7rem] tracking-wider uppercase text-muted-foreground" style={{ fontWeight: 600 }}>
                      Additional Services
                    </div>
                    {SERVICES.filter((s) => s.tier !== "primary").map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-[0.875rem] hover:bg-primary/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="text-primary/60">{getServiceIcon(service.icon)}</span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[0.85rem] transition-colors ${
                    isActivePrefix("/locations") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Areas
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {locationsOpen && (
                  <div className="absolute top-full right-0 w-56 bg-white border border-border rounded-xl shadow-xl py-2 z-50">
                    {LOCATIONS.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/locations/${loc.slug}`}
                        className="flex items-center gap-2 px-4 py-2.5 text-[0.875rem] hover:bg-primary/5 transition-colors"
                        onClick={() => setLocationsOpen(false)}
                      >
                        <MapPin className={`w-3.5 h-3.5 ${loc.isPrimary ? "text-primary" : "text-muted-foreground"}`} />
                        {loc.city}, {loc.state}
                        {loc.isPrimary && (
                          <span className="text-[0.6rem] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full ml-auto" style={{ fontWeight: 700 }}>
                            HQ
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/get-started"
                className="hidden lg:inline-flex bg-primary hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-lg text-[0.9rem] transition-colors items-center gap-2"
                style={{ fontWeight: 700 }}
              >
                Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════ */}
        {/* Mobile menu                        */}
        {/* ══════════════════════════════════ */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {/* Primary buckets */}
              <div className="pb-3 mb-3 border-b border-border">
                <div className="text-[0.7rem] text-primary tracking-wider uppercase mb-2 px-2" style={{ fontWeight: 700 }}>
                  Main Services
                </div>
                <Link
                  to="/services/kitchen-remodeling"
                  className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setMobileOpen(false)}
                >
                  <ChefHat className="w-5 h-5 text-primary" />
                  <span className="text-[0.95rem]" style={{ fontWeight: 600 }}>Kitchens</span>
                </Link>
                <Link
                  to="/services/bathroom-remodeling"
                  className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setMobileOpen(false)}
                >
                  <Bath className="w-5 h-5 text-primary" />
                  <span className="text-[0.95rem]" style={{ fontWeight: 600 }}>Baths</span>
                </Link>
                <Link
                  to="/services/commercial-remodeling"
                  className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setMobileOpen(false)}
                >
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-[0.95rem]" style={{ fontWeight: 600 }}>Commercial</span>
                </Link>
              </div>

              {/* All Services expandable */}
              <div>
                <button
                  className="w-full flex items-center justify-between py-2.5 text-[0.95rem]"
                  style={{ fontWeight: 500 }}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  All Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-2 py-2 text-[0.875rem] text-muted-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-primary/60">{getServiceIcon(service.icon, "w-4 h-4")}</span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas expandable */}
              <div>
                <button
                  className="w-full flex items-center justify-between py-2.5 text-[0.95rem]"
                  style={{ fontWeight: 500 }}
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                >
                  Service Areas
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileLocationsOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {LOCATIONS.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/locations/${loc.slug}`}
                        className="flex items-center gap-2 py-2 text-[0.875rem] text-muted-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        <MapPin className="w-3.5 h-3.5 text-primary/60" />
                        {loc.city}, {loc.state}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Secondary links */}
              <div className="pt-3 mt-3 border-t border-border">
                {secondaryNav.filter((n) => n.to !== "/").map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-3 py-2.5 text-[0.95rem]"
                    style={{ fontWeight: 500 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-muted-foreground">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link
                to="/get-started"
                className="block bg-primary text-white text-center px-5 py-3.5 rounded-lg text-[0.95rem] mt-4"
                style={{ fontWeight: 700 }}
                onClick={() => setMobileOpen(false)}
              >
                Get Your Free Estimate
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

// Helper for service icons in dropdowns
function getServiceIcon(iconName: string, size = "w-4 h-4") {
  const icons: Record<string, React.ReactNode> = {
    ChefHat: <ChefHat className={size} />,
    Bath: <Bath className={size} />,
    Home: <HomeIcon className={size} />,
    Grid3X3: <Grid3X3 className={size} />,
    Accessibility: <Accessibility className={size} />,
    LayoutDashboard: <LayoutDashboard className={size} />,
    Droplets: <Droplets className={size} />,
    Zap: <Zap className={size} />,
    Paintbrush: <Paintbrush className={size} />,
    TreePine: <TreePine className={size} />,
  };
  return icons[iconName] || null;
}
