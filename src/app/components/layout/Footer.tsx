import { Link } from "react-router";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS } from "../../data/siteData";
import { BRAND } from "../../data/brandConfig";
import { DotGrid } from "../shared/BrandElements";
import { Logo } from "../shared/Logo";
import { CookieFooterRow } from "../shared/CookieConsent";
import dinkoLogo from "@/assets/dinko-design-logo.png";

export function Footer() {
  const { accent, accentMuted, primary, primaryDark } = BRAND.colors;
  const darkBg = BRAND.colors.darkBgDeepest;
  const footerBg = "#0A1628";

  return (
    <footer className="text-white">
      {/* CTA Banner */}
      <div style={{ background: primary }} className="relative pt-16 pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[2rem] md:text-[2.75rem] text-white mb-4" style={{ fontFamily: BRAND.fonts.display, fontWeight: 700, letterSpacing: "0.02em" }}>
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-white/85 text-[1.05rem] mb-7 max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation estimate. We'll discuss your project and provide a detailed quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="px-8 py-3.5 rounded-md text-[1rem] transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
              style={{ fontFamily: BRAND.fonts.secondary, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" as const, background: accent, color: primary }}
            >
              Get Free Estimate
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="border-2 border-white text-white px-8 py-3.5 rounded-md text-[1rem] font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Angular divider into footer links */}

      {/* Footer content */}
      <div className="relative overflow-hidden" style={{ background: footerBg }}>
        {/* Blueprint dot+grid pattern */}
        <DotGrid opacity={0.1} spacing={28} dotSize={0.8} lineOpacity={0.04} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company info */}
            <div>
              <div className="mb-6">
                <Logo variant="light" linkTo="/" />
              </div>
              <p className="text-gray-400 text-[0.9rem] mb-5 leading-relaxed">
                Family-owned construction and remodeling company proudly serving Lincoln, California and surrounding communities with over {COMPANY.yearsExperience} years of experience.
              </p>
              <div className="space-y-3">
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-gray-400 transition-colors text-[0.9rem]" style={{ ["--hover" as string]: accent }} onMouseEnter={(e) => (e.currentTarget.style.color = accent)} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
                  <Phone className="w-4 h-4 shrink-0" />
                  {COMPANY.phone}
                </a>
                <div className="flex items-center gap-3 text-gray-400 text-[0.9rem]">
                  <MapPin className="w-4 h-4 shrink-0" />
                  {COMPANY.address}
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-[0.9rem]">
                  <Clock className="w-4 h-4 shrink-0" />
                  Mon-Sat: 7am - 6pm
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[1rem] mb-5 text-white" style={{ fontWeight: 600 }}>Our Services</h3>
              <ul className="space-y-2.5">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-gray-400 transition-colors text-[0.875rem]"
                      onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-[1rem] mb-5 text-white" style={{ fontWeight: 600 }}>Service Areas</h3>
              <ul className="space-y-2.5">
                {LOCATIONS.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      to={`/locations/${loc.slug}`}
                      className="text-gray-400 transition-colors text-[0.875rem]"
                      onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {loc.city}, {loc.state}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-[1rem] mb-5 text-white" style={{ fontWeight: 600 }}>Quick Links</h3>
              <ul className="space-y-2.5">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/portfolio", label: "Portfolio" },
                  { to: "/why-us", label: "Why Us" },
                  { to: "/blog", label: "Blog & Resources" },
                  { to: "/packages", label: "Service Packages" },
                  { to: "/process", label: "Our Process" },
                  { to: "/reviews", label: "Reviews" },
                  { to: "/faq", label: "FAQ" },
                  { to: "/get-started", label: "Get Free Estimate" },
                  { to: "/contact", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-gray-400 transition-colors text-[0.875rem]"
                      onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h3 className="text-[1rem] mb-4 text-white" style={{ fontWeight: 600 }}>Free Resources</h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link to="/free/kitchen-remodel-cost-guide" className="transition-colors text-[0.875rem]" style={{ color: accent }} onMouseEnter={(e) => (e.currentTarget.style.color = accentMuted)} onMouseLeave={(e) => (e.currentTarget.style.color = accent)}>
                      Kitchen Cost Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/free/bathroom-remodel-checklist" className="transition-colors text-[0.875rem]" style={{ color: accent }} onMouseEnter={(e) => (e.currentTarget.style.color = accentMuted)} onMouseLeave={(e) => (e.currentTarget.style.color = accent)}>
                      Bathroom Checklist
                    </Link>
                  </li>
                  <li>
                    <Link to="/free/contractor-hiring-guide" className="transition-colors text-[0.875rem]" style={{ color: accent }} onMouseEnter={(e) => (e.currentTarget.style.color = accentMuted)} onMouseLeave={(e) => (e.currentTarget.style.color = accent)}>
                      Contractor Hiring Guide
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-[1rem] mb-4 text-white" style={{ fontWeight: 600 }}>Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10" style={{ background: footerBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[0.8rem]">
            &copy; {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved. {COMPANY.license}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-[0.8rem]">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-[0.8rem]">Terms of Service</a>
          </div>
        </div>
        <CookieFooterRow />
      </div>

      {/* Dinko Design credit */}
      <div className="bg-[#0A1120] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center gap-3">
          <img
            src={dinkoLogo}
            alt="Dinko Design"
            className="w-5 h-5 rounded-[3px] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
          <p className="text-gray-500 text-[0.8rem] tracking-wide">
            <span className="text-gray-500" style={{ fontWeight: 500 }}>
              Contractor Marketing Trust System&#8482;
            </span>
            {" "}by{" "}
            <a
              href="https://www.dinkodesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#8B5CF6] transition-colors duration-300"
              style={{ fontWeight: 600 }}
            >
              Dinko Design
            </a>
            <span className="hidden sm:inline">
              {" "}&middot; Builder & contractor marketing, Sarasota FL | Nationwide
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
