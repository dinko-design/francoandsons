import { Link } from "react-router";
import { ArrowLeft, Home } from "lucide-react";
import { BRAND } from "../data/brandConfig";

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      {/* Blueprint lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="notfoundgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="60" y2="60" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.06" />
              <line x1="60" y1="0" x2="0" y2="60" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#notfoundgrid)" />
        </svg>
      </div>
      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        <div className="text-[5rem] text-primary mb-4" style={{ fontWeight: 700 }}>404</div>
        <h1 className="text-[1.5rem] mb-3" style={{ fontWeight: 700 }}>Page Not Found</h1>
        <p className="text-muted-foreground text-[0.95rem] mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-[0.95rem] hover:opacity-90 transition-opacity"
            style={{ fontWeight: 600 }}
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg text-[0.95rem] hover:bg-secondary transition-colors"
            style={{ fontWeight: 600 }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}