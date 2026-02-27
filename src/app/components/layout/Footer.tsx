import { Link } from "react-router";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { COMPANY, SERVICES, LOCATIONS } from "../../data/siteData";
import { AngularDivider } from "../shared/AngularDivider";
import { Logo } from "../shared/Logo";

// Placeholder: replace with your preferred "made by" logo
const dinkoLogo = "https://placehold.co/32x32/e2e8f0/64748b?text=DD";

export function Footer() {
  return (
    <footer className="text-white">
      {/* CTA Banner */}
      <div className="bg-[#1E3A5F] relative overflow-hidden pt-20 pb-16">
        {/* Subtle roofline decoration at top */}
        <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,80 L360,10 L720,80 L1080,10 L1440,80 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>

        {/* Angular geometric pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <line x1="0" y1="200" x2="400" y2="0" stroke="white" strokeWidth="1.5" />
            <line x1="200" y1="200" x2="600" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="700" y1="200" x2="1100" y2="0" stroke="white" strokeWidth="1.5" />
            <line x1="1000" y1="200" x2="1440" y2="20" stroke="white" strokeWidth="0.5" />
          </svg>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
            style={{
              background: "linear-gradient(225deg, white 0%, transparent 60%)",
              clipPath: "polygon(100% 0, 40% 0, 100% 60%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[1.75rem] md:text-[2.25rem] text-white mb-4 font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/85 text-[1.05rem] mb-7 max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation estimate from Lincoln's most trusted contractor. We'll visit your home and provide a detailed quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="bg-white text-[#1E3A5F] px-8 py-3.5 rounded-md text-[1rem] font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Request Free Estimate
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
      <AngularDivider from="#1E3A5F" to="#0A1628" variant="roof-shallow" />

      {/* Footer content */}
      <div className="relative overflow-hidden bg-[#0A1628]">
        {/* Subtle angular lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footergrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#2563EB" strokeWidth="0.3" opacity="0.06" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#2563EB" strokeWidth="0.3" opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footergrid)" />
          </svg>
        </div>

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
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-[#60A5FA] transition-colors text-[0.9rem]">
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
                      className="text-gray-400 hover:text-[#60A5FA] transition-colors text-[0.875rem]"
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
                      className="text-gray-400 hover:text-[#60A5FA] transition-colors text-[0.875rem]"
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
                  { to: "/why-us", label: "Why Franco & Sons Construction LLC" },
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
                      className="text-gray-400 hover:text-[#60A5FA] transition-colors text-[0.875rem]"
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
                    <Link to="/free/kitchen-remodel-cost-guide" className="text-[#D4A853] hover:text-[#F5E6C8] transition-colors text-[0.875rem]">
                      Kitchen Cost Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/free/bathroom-remodel-checklist" className="text-[#D4A853] hover:text-[#F5E6C8] transition-colors text-[0.875rem]">
                      Bathroom Checklist
                    </Link>
                  </li>
                  <li>
                    <Link to="/free/contractor-hiring-guide" className="text-[#D4A853] hover:text-[#F5E6C8] transition-colors text-[0.875rem]">
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
      <div className="border-t border-white/10 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[0.8rem]">
            &copy; {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved. {COMPANY.license}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-[0.8rem]">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-[0.8rem]">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Dinko Design credit */}
      <div className="bg-[#0A1120] border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-2.5">
          <img
            src={dinkoLogo}
            alt="Dinko Design"
            className="w-4 h-4 rounded-[3px] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
          <p className="text-gray-600 text-[0.7rem] tracking-wide">
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