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
import { BRAND } from "../../data/brandConfig";
import { Logo } from "../shared/Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const location = useLocation();

  const { accent, accentDark, accentMuted, primary, primaryDark } = BRAND.colors;
  const darkest = BRAND.colors.darkBgDeepest;
  const darkAlt = primaryDark;

  const isActive = (path: string) => location.pathname === path;
  const isActivePrefix = (prefix: string) => location.pathname.startsWith(prefix);

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
      {/* Top utility bar — darkest */}
      <div style={{ background: darkest }} className="text-white border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <span className="text-[0.8rem] text-white/40 hidden sm:inline">{COMPANY.license}</span>
          </div>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 text-[0.85rem] text-white/70 transition-colors"
            style={{ ["--hover-color" as string]: accent }}
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY.phone}</span>
          </a>
        </div>
      </div>

      {/* Secondary nav row — dark */}
      <div style={{ background: darkAlt }} className="border-b border-white/[0.06] hidden lg:block sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <nav className="flex items-center gap-0.5">
              {secondaryNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[0.75rem] transition-colors"
                  style={{
                    fontWeight: 500,
                    color: isActive(item.to) ? accent : undefined,
                    background: isActive(item.to) ? "rgba(255,255,255,0.06)" : undefined,
                  }}
                  {...(!isActive(item.to) && {
                    className: "flex items-center gap-1.5 px-2.5 py-1 rounded text-[0.75rem] transition-colors text-white/40 hover:text-white/80 hover:bg-white/[0.04]",
                  })}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                to="/free/kitchen-remodel-cost-guide"
                className="flex items-center gap-1.5 text-[0.75rem] transition-colors"
                style={{ fontWeight: 600, color: accent }}
              >
                <Download className="w-3.5 h-3.5" />
                Free Cost Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Primary nav row — brand primary */}
      <header style={{ background: primary }} className="sticky top-0 lg:top-9 z-50 border-b border-white/[0.08] shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            <Logo variant="light" linkTo="/" />

            {/* Desktop primary nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { to: "/services/kitchen-remodeling", icon: <ChefHat className="w-4.5 h-4.5" style={{ color: accent }} />, label: "Kitchens", match: ["/services/kitchen-remodeling"] },
                { to: "/services/bathroom-remodeling", icon: <Bath className="w-4.5 h-4.5" style={{ color: accent }} />, label: "Baths", match: ["/services/bathroom-remodeling", "/services/custom-showers", "/services/ada-accessible-remodeling"] },
                { to: "/services/commercial-remodeling", icon: <Building2 className="w-4.5 h-4.5" style={{ color: accent }} />, label: "Commercial", match: ["/services/commercial-remodeling"] },
              ].map((item) => {
                const active = item.match.includes(location.pathname);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[0.9rem] transition-all ${
                      active
                        ? "bg-white/10"
                        : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                    style={{ fontWeight: 600, ...(active ? { color: accent } : {}) }}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}

              <div className="w-px h-6 bg-white/10 mx-1" />

              {/* All Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-[0.85rem] transition-colors"
                  style={{ fontWeight: 500, color: isActivePrefix("/services") ? accent : "rgba(255,255,255,0.4)" }}
                >
                  All Services
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-72 border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 z-50" style={{ background: primary }}>
                    <div className="px-4 py-1.5 text-[0.7rem] tracking-wider uppercase" style={{ fontWeight: 700, color: accent }}>
                      Primary Services
                    </div>
                    {SERVICES.filter((s) => s.tier === "primary").map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-[0.875rem] text-white/70 hover:bg-white/[0.06] hover:text-white transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span style={{ color: accent }}>{getServiceIcon(service.icon)}</span>
                        {service.title}
                      </Link>
                    ))}
                    <div className="border-t border-white/[0.06] my-1" />
                    <div className="px-4 py-1.5 text-[0.7rem] tracking-wider uppercase text-white/30" style={{ fontWeight: 600 }}>
                      Additional Services
                    </div>
                    {SERVICES.filter((s) => s.tier !== "primary").map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-[0.875rem] text-white/50 hover:bg-white/[0.06] hover:text-white transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span style={{ color: `${accent}99` }}>{getServiceIcon(service.icon)}</span>
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
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-[0.85rem] transition-colors"
                  style={{ fontWeight: 500, color: isActivePrefix("/locations") ? accent : "rgba(255,255,255,0.4)" }}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Areas
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {locationsOpen && (
                  <div className="absolute top-full right-0 w-56 border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 z-50" style={{ background: primary }}>
                    {LOCATIONS.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/locations/${loc.slug}`}
                        className="flex items-center gap-2 px-4 py-2.5 text-[0.875rem] text-white/70 hover:bg-white/[0.06] hover:text-white transition-colors"
                        onClick={() => setLocationsOpen(false)}
                      >
                        <MapPin className="w-3.5 h-3.5" style={{ color: loc.isPrimary ? accent : "rgba(255,255,255,0.3)" }} />
                        {loc.city}, {loc.state}
                        {loc.isPrimary && (
                          <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full ml-auto" style={{ fontWeight: 700, background: `${accent}33`, color: accent }}>
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
                className="hidden lg:inline-flex px-5 py-2.5 rounded-lg text-[0.9rem] transition-colors items-center gap-2"
                style={{ fontWeight: 800, fontFamily: BRAND.fonts.secondary, letterSpacing: "0.05em", textTransform: "uppercase" as const, background: accent, color: primary }}
              >
                Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/[0.06] max-h-[80vh] overflow-y-auto" style={{ background: darkAlt }}>
            <div className="px-4 py-4 space-y-1">
              <div className="pb-3 mb-3 border-b border-white/[0.06]">
                <div className="text-[0.7rem] tracking-wider uppercase mb-2 px-2" style={{ fontWeight: 700, color: accent }}>
                  Main Services
                </div>
                {[
                  { to: "/services/kitchen-remodeling", icon: <ChefHat className="w-5 h-5" style={{ color: accent }} />, label: "Kitchens" },
                  { to: "/services/bathroom-remodeling", icon: <Bath className="w-5 h-5" style={{ color: accent }} />, label: "Baths" },
                  { to: "/services/commercial-remodeling", icon: <Building2 className="w-5 h-5" style={{ color: accent }} />, label: "Commercial" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-3 py-3 px-2 rounded-lg text-white/80 hover:bg-white/[0.04]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.icon}
                    <span className="text-[0.95rem]" style={{ fontWeight: 600 }}>{item.label}</span>
                  </Link>
                ))}
              </div>

              <div>
                <button
                  className="w-full flex items-center justify-between py-2.5 text-[0.95rem] text-white/70"
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
                        className="flex items-center gap-2 py-2 text-[0.875rem] text-white/40 hover:text-white/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span style={{ color: `${accent}80` }}>{getServiceIcon(service.icon, "w-4 h-4")}</span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="w-full flex items-center justify-between py-2.5 text-[0.95rem] text-white/70"
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
                        className="flex items-center gap-2 py-2 text-[0.875rem] text-white/40 hover:text-white/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        <MapPin className="w-3.5 h-3.5" style={{ color: `${accent}80` }} />
                        {loc.city}, {loc.state}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 mt-3 border-t border-white/[0.06]">
                {secondaryNav.filter((n) => n.to !== "/").map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-3 py-2.5 text-[0.95rem] text-white/60 hover:text-white/80"
                    style={{ fontWeight: 500 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-white/30">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/get-started"
                className="block text-center px-5 py-3.5 rounded-lg text-[0.95rem] mt-4 transition-colors"
                style={{ fontWeight: 800, fontFamily: BRAND.fonts.secondary, letterSpacing: "0.05em", textTransform: "uppercase" as const, background: accent, color: primary }}
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
