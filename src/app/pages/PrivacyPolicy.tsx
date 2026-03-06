import { Link } from "react-router";
import { COMPANY } from "../data/siteData";
import { BRAND } from "../data/brandConfig";

export function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 pb-[120px] lg:pb-[140px] bg-accent overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[0.85rem] tracking-wider uppercase" style={{ fontWeight: 600, color: BRAND.colors.accent }}>
              Legal
            </span>
            <h1 className="text-[2rem] md:text-[2.75rem] text-white mt-2 mb-5" style={{ fontWeight: 700, lineHeight: 1.15 }}>
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              Your privacy matters to us. This policy explains how {COMPANY.name} collects, uses, and protects your information.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "80px" }}>
            <polygon points="0,30 0,80 1440,80" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-10">
            <p className="text-muted-foreground text-[0.9rem]">
              <strong>Last Updated:</strong> March 6, 2026
            </p>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>1. Information We Collect</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-4">
                {COMPANY.name} collects information that you voluntarily provide when using our website or requesting our services. This includes:
              </p>
              <ul className="space-y-2 text-muted-foreground text-[0.95rem] leading-relaxed list-disc pl-5">
                <li><strong>Contact Information:</strong> Name, phone number, email address, and property address submitted through our contact forms or estimate request forms.</li>
                <li><strong>Project Information:</strong> Details about your remodeling project, including service type, budget range, timeline preferences, and project descriptions.</li>
                <li><strong>Communications:</strong> Messages, emails, and phone call records related to your project inquiries and consultations.</li>
                <li><strong>Website Usage Data:</strong> Pages visited, time spent on site, browser type, device information, and referring URLs collected through standard web analytics.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>2. How We Use Your Information</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 text-muted-foreground text-[0.95rem] leading-relaxed list-disc pl-5">
                <li>To respond to your inquiries and provide project estimates.</li>
                <li>To schedule and manage consultations.</li>
                <li>To communicate about your remodeling project, including updates and follow-ups.</li>
                <li>To improve our website and services based on usage patterns.</li>
                <li>To send occasional updates about our services, promotions, or educational content (only with your consent).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>3. Information Sharing</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-4">
                {COMPANY.name} does not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 text-muted-foreground text-[0.95rem] leading-relaxed list-disc pl-5">
                <li><strong>Service Providers:</strong> We may share limited information with trusted service providers who assist with website hosting, analytics, or form processing (e.g., Vercel, Sanity CMS). These providers are bound by their own privacy policies.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, subpoena, or legal process.</li>
                <li><strong>Business Protection:</strong> We may share information to protect the rights, property, or safety of {COMPANY.name}, our clients, or others.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>4. Cookies and Tracking</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-4">
                Our website uses cookies and similar technologies to enhance your browsing experience. These include:
              </p>
              <ul className="space-y-2 text-muted-foreground text-[0.95rem] leading-relaxed list-disc pl-5">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality such as form submissions.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website so we can improve it. We use standard web analytics tools that collect anonymized usage data.</li>
                <li><strong>Preference Cookies:</strong> Remember your choices (such as cookie consent) to provide a personalized experience.</li>
              </ul>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mt-4">
                You can control cookie preferences through your browser settings. Disabling certain cookies may limit website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>5. Data Security</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. Our website uses HTTPS encryption for all data transmission. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>6. Your Rights (California Residents)</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-4">
                Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground text-[0.95rem] leading-relaxed list-disc pl-5">
                <li>Know what personal information we collect and how it is used.</li>
                <li>Request deletion of your personal information.</li>
                <li>Opt out of the sale of personal information (we do not sell your data).</li>
                <li>Non-discrimination for exercising your privacy rights.</li>
              </ul>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mt-4">
                To exercise any of these rights, contact us at <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a> or call <a href={`tel:${COMPANY.phone}`} className="text-primary hover:underline">{COMPANY.phone}</a>.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>7. Third-Party Links</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                Our website may contain links to third-party websites (such as social media platforms or review sites). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>8. Children's Privacy</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                Our website and services are not directed at individuals under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>9. Changes to This Policy</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>10. Contact Us</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                If you have questions about this Privacy Policy or how we handle your information, contact us:
              </p>
              <div className="mt-4 bg-secondary rounded-xl p-6 border border-border text-[0.95rem] space-y-2">
                <p style={{ fontWeight: 600 }}>{COMPANY.fullName}</p>
                <p className="text-muted-foreground">{COMPANY.address}</p>
                <p className="text-muted-foreground">Phone: <a href={`tel:${COMPANY.phone}`} className="text-primary hover:underline">{COMPANY.phone}</a></p>
                <p className="text-muted-foreground">Email: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/terms-of-service" className="text-primary hover:underline text-[0.95rem]" style={{ fontWeight: 500 }}>
              View our Terms of Service &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
