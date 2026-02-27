import { useState, useEffect, useCallback } from "react";
import { Cookie, Shield, X, ChevronDown, ChevronUp, Settings } from "lucide-react";

/* ─── Cookie category definitions ────────────────────────── */
export interface CookieCategory {
  id: string;
  label: string;
  description: string;
  required: boolean;
}

const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: "essential",
    label: "Strictly Necessary",
    description:
      "These cookies are required for the website to function properly. They enable basic features like page navigation, secure areas, and cookie consent preferences. They cannot be disabled.",
    required: true,
  },
  {
    id: "analytics",
    label: "Analytics & Performance",
    description:
      "These cookies help us understand how visitors interact with our website by collecting anonymous usage information. This helps us improve the site experience for homeowners like you.",
    required: false,
  },
  {
    id: "marketing",
    label: "Marketing & Advertising",
    description:
      "These cookies are used to deliver relevant ads and track campaign effectiveness across platforms like Google Ads and Facebook. They help us reach homeowners in Placer County who are researching remodeling services.",
    required: false,
  },
  {
    id: "functional",
    label: "Functional & Preferences",
    description:
      "These cookies remember your preferences such as form entries, language, and region to provide a more personalized experience when you return to our site.",
    required: false,
  },
];

/* ─── Persistence key ──────────────────────────────────── */
const STORAGE_KEY = "franco_cookie_consent";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  consentDate: string;
}

function loadPreferences(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function savePreferences(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  // Notify other components (e.g. CookieSettingsButton) about the change
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

/* ─── Component ─────────────────────────────────────────── */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
    consentDate: "",
  });

  // Check on mount if consent already given
  useEffect(() => {
    const stored = loadPreferences();
    if (stored) {
      setPreferences(stored);
      setVisible(false);
    } else {
      // Small delay so banner doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for re-open events (from CookieSettingsButton)
  useEffect(() => {
    const handleReopen = () => {
      const stored = loadPreferences();
      if (!stored) {
        setPreferences({
          essential: true,
          analytics: false,
          marketing: false,
          functional: false,
          consentDate: "",
        });
        setVisible(true);
      }
    };
    window.addEventListener("cookie-consent-updated", handleReopen);
    return () => window.removeEventListener("cookie-consent-updated", handleReopen);
  }, []);

  const handleAcceptAll = useCallback(() => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
      consentDate: new Date().toISOString(),
    };
    savePreferences(prefs);
    setPreferences(prefs);
    setVisible(false);
    setShowCustomize(false);
  }, []);

  const handleRejectNonEssential = useCallback(() => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
      consentDate: new Date().toISOString(),
    };
    savePreferences(prefs);
    setPreferences(prefs);
    setVisible(false);
    setShowCustomize(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    const prefs: CookiePreferences = {
      ...preferences,
      essential: true, // Always on
      consentDate: new Date().toISOString(),
    };
    savePreferences(prefs);
    setPreferences(prefs);
    setVisible(false);
    setShowCustomize(false);
  }, [preferences]);

  const toggleCategory = useCallback((id: string) => {
    setPreferences((prev) => ({
      ...prev,
      [id]: !prev[id as keyof CookiePreferences],
    }));
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop for customize panel */}
      {showCustomize && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998] backdrop-blur-sm"
          onClick={() => setShowCustomize(false)}
        />
      )}

      {/* Main banner */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[9999] transform transition-transform duration-500 ease-out"
        style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
      >
        {/* Customize panel (slides up from banner) */}
        {showCustomize && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-0">
            <div className="bg-white rounded-t-2xl shadow-2xl border border-border border-b-0 overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-[#F8FAFC]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Settings className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[0.95rem]" style={{ fontWeight: 700 }}>
                      Cookie Preferences
                    </h3>
                    <p className="text-[0.75rem] text-muted-foreground">
                      Manage how we use cookies on this site
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  aria-label="Close preferences"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Categories */}
              <div className="max-h-[50vh] overflow-y-auto">
                {COOKIE_CATEGORIES.map((cat) => {
                  const isExpanded = expandedCategory === cat.id;
                  const isEnabled =
                    preferences[cat.id as keyof CookiePreferences] === true;

                  return (
                    <div
                      key={cat.id}
                      className="border-b border-border last:border-b-0"
                    >
                      <div className="flex items-center justify-between px-6 py-4">
                        <button
                          className="flex items-center gap-3 text-left flex-1 min-w-0"
                          onClick={() =>
                            setExpandedCategory(isExpanded ? null : cat.id)
                          }
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                          )}
                          <span className="text-[0.875rem]" style={{ fontWeight: 600 }}>
                            {cat.label}
                          </span>
                          {cat.required && (
                            <span className="text-[0.65rem] bg-primary/10 text-primary px-2 py-0.5 rounded-full shrink-0" style={{ fontWeight: 600 }}>
                              Required
                            </span>
                          )}
                        </button>

                        {/* Toggle switch */}
                        <button
                          onClick={() => !cat.required && toggleCategory(cat.id)}
                          disabled={cat.required}
                          className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ml-3 ${
                            cat.required
                              ? "bg-primary cursor-not-allowed opacity-70"
                              : isEnabled
                                ? "bg-primary cursor-pointer"
                                : "bg-gray-300 cursor-pointer hover:bg-gray-400"
                          }`}
                          aria-label={`Toggle ${cat.label}`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                              isEnabled || cat.required
                                ? "translate-x-5"
                                : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expanded description */}
                      {isExpanded && (
                        <div className="px-6 pb-4 pl-13">
                          <p className="text-[0.8rem] text-muted-foreground leading-relaxed pl-7">
                            {cat.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Panel footer */}
              <div className="px-6 py-4 bg-[#F8FAFC] border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  onClick={handleRejectNonEssential}
                  className="text-[0.8rem] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                  style={{ fontWeight: 500 }}
                >
                  Reject all non-essential
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="px-5 py-2.5 border border-border rounded-lg text-[0.8rem] hover:bg-gray-50 transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Save My Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-5 py-2.5 bg-primary text-white rounded-lg text-[0.8rem] hover:bg-[#1D4ED8] transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom bar */}
        <div className="bg-[#0F172A] border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              {/* Icon + text */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-[#D4A853]/15 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5 text-[#D4A853]" />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-[0.875rem]" style={{ fontWeight: 600 }}>
                    We value your privacy
                  </p>
                  <p className="text-gray-400 text-[0.8rem] leading-relaxed mt-0.5">
                    We use cookies to improve your browsing experience, serve personalized content, and analyze our traffic. As a California business, we comply with the{" "}
                    <span className="text-[#60A5FA]">California Consumer Privacy Act (CCPA)</span>.
                    You have the right to opt out of non-essential cookies at any time.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto">
                <button
                  onClick={() => setShowCustomize(!showCustomize)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 border border-white/20 text-white rounded-lg text-[0.8rem] hover:bg-white/10 transition-colors flex-1 lg:flex-initial"
                  style={{ fontWeight: 500 }}
                >
                  <Settings className="w-3.5 h-3.5" />
                  Customize
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="px-4 py-2.5 border border-white/20 text-white rounded-lg text-[0.8rem] hover:bg-white/10 transition-colors flex-1 lg:flex-initial"
                  style={{ fontWeight: 500 }}
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 bg-[#D4A853] text-[#0F172A] rounded-lg text-[0.8rem] hover:bg-[#B8922E] transition-colors flex-1 lg:flex-initial"
                  style={{ fontWeight: 700 }}
                >
                  Accept All
                </button>
              </div>
            </div>

            {/* CCPA rights link */}
            <div className="flex items-center gap-2 mt-3 lg:mt-2">
              <Shield className="w-3 h-3 text-gray-500" />
              <button
                onClick={() => setShowCustomize(true)}
                className="text-[0.7rem] text-gray-500 hover:text-[#60A5FA] transition-colors underline underline-offset-2"
              >
                Do Not Sell or Share My Personal Information
              </button>
              <span className="text-gray-600 text-[0.65rem]">|</span>
              <span className="text-[0.7rem] text-gray-500">
                CCPA / CPRA Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Small floating button to re-open preferences ─────── */
export function CookieSettingsButton() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const stored = loadPreferences();
    setHasConsent(!!stored);

    // Listen for consent changes
    const handleStorage = () => {
      const updated = loadPreferences();
      setHasConsent(!!updated);
    };
    window.addEventListener("storage", handleStorage);
    // Custom event for same-tab updates
    window.addEventListener("cookie-consent-updated", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("cookie-consent-updated", handleStorage);
    };
  }, []);

  if (!hasConsent) return null;

  return (
    <button
      onClick={() => {
        localStorage.removeItem(STORAGE_KEY);
        setHasConsent(false);
        // Dispatch custom event so CookieConsent re-appears
        window.dispatchEvent(new Event("cookie-consent-updated"));
      }}
      className="fixed bottom-4 left-4 z-[9990] w-10 h-10 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full shadow-lg flex items-center justify-center transition-colors group"
      aria-label="Cookie settings"
      title="Manage cookie preferences"
    >
      <Cookie className="w-4.5 h-4.5 group-hover:text-[#D4A853] transition-colors" />
    </button>
  );
}