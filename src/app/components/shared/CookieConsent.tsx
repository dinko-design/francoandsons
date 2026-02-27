import { useState, useEffect, useCallback } from "react";
import { Cookie, X, ChevronDown, ChevronUp, Settings } from "lucide-react";

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

  // Cookie UI is now in footer only; never show floating banner
  return null;
}

/* ─── Modal for cookie preferences (used by footer row) ───── */
function CookiePreferencesModal({
  isOpen,
  onClose,
  preferences,
  setPreferences,
  onAcceptAll,
  onRejectNonEssential,
  onSavePreferences,
}: {
  isOpen: boolean;
  onClose: () => void;
  preferences: CookiePreferences;
  setPreferences: React.Dispatch<React.SetStateAction<CookiePreferences>>;
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onSavePreferences: () => void;
}) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const toggleCategory = useCallback((id: string) => {
    setPreferences((prev: CookiePreferences) => ({
      ...prev,
      [id]: !prev[id as keyof CookiePreferences],
    }));
  }, [setPreferences]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-[9998] backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
        <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col pointer-events-auto text-gray-900">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#F8FAFC]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                <Settings className="w-4.5 h-4.5 text-[#1E3A5F]" />
              </div>
              <div>
                <h3 className="text-[0.95rem] font-bold text-gray-900">Cookie Preferences</h3>
                <p className="text-[0.75rem] text-gray-600">Manage how we use cookies on this site</p>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-600 hover:text-gray-900" aria-label="Close preferences">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-y-auto flex-1">
            {COOKIE_CATEGORIES.map((cat) => {
              const isExpanded = expandedCategory === cat.id;
              const isEnabled = preferences[cat.id as keyof CookiePreferences] === true;
              return (
                <div key={cat.id} className="border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between px-6 py-4">
                    <button className="flex items-center gap-3 text-left flex-1 min-w-0 text-gray-900" onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-600 shrink-0" />}
                      <span className="text-[0.875rem] font-semibold text-gray-900">{cat.label}</span>
                      {cat.required && <span className="text-[0.65rem] bg-[#1E3A5F]/10 text-[#1E3A5F] px-2 py-0.5 rounded-full shrink-0 font-semibold">Required</span>}
                    </button>
                    <button
                      onClick={() => !cat.required && toggleCategory(cat.id)}
                      disabled={cat.required}
                      className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ml-3 ${cat.required ? "bg-[#1E3A5F] cursor-not-allowed opacity-70" : isEnabled ? "bg-[#1E3A5F] cursor-pointer" : "bg-gray-300 cursor-pointer hover:bg-gray-400"}`}
                      aria-label={`Toggle ${cat.label}`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${isEnabled || cat.required ? "translate-x-5" : "translate-x-0"}`} />
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="px-6 pb-4 pl-13">
                      <p className="text-[0.8rem] text-gray-700 leading-relaxed pl-7">{cat.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="px-6 py-4 bg-[#F8FAFC] border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button onClick={onRejectNonEssential} className="text-[0.8rem] text-gray-700 hover:text-gray-900 transition-colors underline underline-offset-2 font-medium">
              Reject all non-essential
            </button>
            <div className="flex gap-3">
              <button onClick={onSavePreferences} className="px-5 py-2.5 border border-gray-300 bg-gray-100 text-gray-900 rounded-lg text-[0.8rem] hover:bg-gray-200 transition-colors font-semibold">
                Save My Preferences
              </button>
              <button onClick={onAcceptAll} className="px-5 py-2.5 bg-[#1E3A5F] text-white rounded-lg text-[0.8rem] hover:bg-[#1D4ED8] transition-colors font-semibold">
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Footer cookie row: inline notice + link to preferences ─ */
export function CookieFooterRow() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
    consentDate: "",
  });

  useEffect(() => {
    const stored = loadPreferences();
    setHasConsent(!!stored);
    if (stored) setPreferences(stored);
    const handleUpdate = () => {
      const next = loadPreferences();
      setHasConsent(!!next);
      if (next) setPreferences(next);
    };
    window.addEventListener("cookie-consent-updated", handleUpdate);
    return () => window.removeEventListener("cookie-consent-updated", handleUpdate);
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
    setHasConsent(true);
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
    setHasConsent(true);
  }, []);

  const handleSavePreferences = useCallback(() => {
    const prefs: CookiePreferences = {
      ...preferences,
      essential: true,
      consentDate: new Date().toISOString(),
    };
    savePreferences(prefs);
    setPreferences(prefs);
    setHasConsent(true);
    setShowModal(false);
  }, [preferences]);

  if (hasConsent === null) return null;

  return (
    <>
      <div className="border-t border-white/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-gray-500 text-[0.75rem]">
            <Cookie className="w-3.5 h-3.5 shrink-0" />
            {!hasConsent ? (
              <span>We use cookies to improve your experience and comply with CCPA. Choose your preferences below.</span>
            ) : (
              <span>We use cookies. You can update your preferences at any time.</span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {!hasConsent ? (
              <>
                <button onClick={handleAcceptAll} className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-[0.75rem] transition-colors" style={{ fontWeight: 600 }}>
                  Accept all
                </button>
                <button onClick={handleRejectNonEssential} className="px-3 py-1.5 border border-white/20 text-gray-400 hover:text-white rounded text-[0.75rem] transition-colors">
                  Reject non-essential
                </button>
                <button onClick={() => setShowModal(true)} className="px-3 py-1.5 border border-white/20 text-gray-400 hover:text-white rounded text-[0.75rem] transition-colors flex items-center gap-1">
                  <Settings className="w-3 h-3" /> Preferences
                </button>
              </>
            ) : (
              <button onClick={() => setShowModal(true)} className="text-gray-500 hover:text-[#60A5FA] text-[0.75rem] underline underline-offset-2 transition-colors">
                Cookie preferences
              </button>
            )}
          </div>
        </div>
      </div>
      <CookiePreferencesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        preferences={preferences}
        setPreferences={setPreferences}
        onAcceptAll={() => { handleAcceptAll(); setShowModal(false); }}
        onRejectNonEssential={() => { handleRejectNonEssential(); setShowModal(false); }}
        onSavePreferences={handleSavePreferences}
      />
    </>
  );
}


/* ─── Floating button removed; preferences are in footer ─── */
export function CookieSettingsButton() {
  return null;
}