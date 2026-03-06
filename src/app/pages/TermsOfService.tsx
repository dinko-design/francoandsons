import { Link } from "react-router";
import { COMPANY } from "../data/siteData";
import { BRAND } from "../data/brandConfig";

export function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-gray-300 text-[1.1rem] leading-relaxed">
              Please review the terms and conditions that govern your use of the {COMPANY.name} website.
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
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>1. Acceptance of Terms</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                By accessing and using the {COMPANY.name} website ("Site"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use the Site. These terms apply to all visitors, users, and anyone who accesses the Site.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>2. Services Description</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                {COMPANY.name} is a licensed general contractor based in {COMPANY.address}, providing residential and commercial remodeling services including kitchen remodeling, bathroom remodeling, home additions, ADA-accessible remodeling, and related construction services across Placer County and surrounding areas. This website provides information about our services, allows you to request estimates, and offers educational content about home remodeling.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>3. Estimates and Pricing</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-4">
                Information on this website, including pricing ranges, project timelines, and service descriptions, is provided for general informational purposes only. Actual project costs and timelines depend on the specific scope of work, materials selected, site conditions, and other factors.
              </p>
              <ul className="space-y-2 text-muted-foreground text-[0.95rem] leading-relaxed list-disc pl-5">
                <li>All estimates provided through this website or in person are non-binding until a formal written contract is signed by both parties.</li>
                <li>Final pricing is determined through an in-home consultation and detailed project assessment.</li>
                <li>We reserve the right to adjust pricing based on material costs, scope changes, or unforeseen site conditions discovered during the project.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>4. Website Content and Accuracy</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-4">
                We strive to keep the information on our website accurate and up to date. However:
              </p>
              <ul className="space-y-2 text-muted-foreground text-[0.95rem] leading-relaxed list-disc pl-5">
                <li>Photos and project images are representative of our work but may not reflect the exact outcome of your specific project.</li>
                <li>Blog posts, guides, and educational content are for informational purposes and should not be considered professional advice for your specific situation.</li>
                <li>Service availability may vary. Contact us to confirm we serve your area and offer the specific services you need.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>5. User Submissions</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                When you submit information through our website forms (contact forms, estimate requests, or other submission methods), you agree that: the information you provide is accurate and complete; you consent to {COMPANY.name} contacting you regarding your inquiry via phone, email, or text message; and your submission does not create a contractual obligation or client relationship until a formal written agreement is signed.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>6. Intellectual Property</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                All content on this website — including text, images, photography, logos, graphics, and design elements — is the property of {COMPANY.name} or its content providers and is protected by copyright and trademark laws. You may not reproduce, distribute, modify, or republish any content from this Site without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>7. Limitation of Liability</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                {COMPANY.name} provides this website and its content on an "as-is" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site, reliance on information provided, or inability to access the Site. This limitation does not affect any liability that cannot be excluded under applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>8. Licensing and Insurance</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                {COMPANY.name} is a California Licensed General Contractor. We maintain all required licenses, insurance, and bonding as mandated by the State of California Contractors State License Board (CSLB). Proof of licensure and insurance is available upon request.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>9. Construction Contracts</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                All construction and remodeling work performed by {COMPANY.name} is governed by a separate written contract between the company and the client. That contract, not these website terms, defines the scope of work, pricing, payment terms, warranties, timelines, and dispute resolution procedures for your specific project.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>10. External Links</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                Our website may link to third-party websites or resources. These links are provided for convenience only. {COMPANY.name} does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>11. Governing Law</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of the State of California. Any disputes arising from these terms or your use of the Site shall be resolved in the courts of Placer County, California.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>12. Changes to These Terms</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                We reserve the right to update or modify these Terms of Service at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the Site after any changes constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-[1.35rem] mb-4" style={{ fontWeight: 700 }}>13. Contact Us</h2>
              <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                If you have questions about these Terms of Service, please contact us:
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
            <Link to="/privacy-policy" className="text-primary hover:underline text-[0.95rem]" style={{ fontWeight: 500 }}>
              View our Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
