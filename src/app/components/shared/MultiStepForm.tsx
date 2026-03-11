import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ChefHat,
  Bath,
  Home,
  Building2,
  HelpCircle,
  Clock,
  DollarSign,
  User,
  Accessibility,
} from "lucide-react";
import { COMPANY } from "../../data/siteData";
import { BRAND } from "../../data/brandConfig";
import { SecureFormNotice } from "./TrustBadges";

interface MultiStepFormProps {
  defaultService?: string;
  defaultLocation?: string;
  source?: string;
  campaignId?: string;
  variant?: "light" | "dark";
  onComplete?: (data: Record<string, string>) => void;
}

interface StepConfig {
  id: string;
  question: string;
  subtitle?: string;
  type: "select" | "input-group";
  options?: { label: string; value: string; icon?: React.ReactNode; description?: string }[];
  fields?: { name: string; placeholder: string; type: string; required: boolean }[];
}

const STEPS: StepConfig[] = [
  {
    id: "project-type",
    question: "What type of project are you planning?",
    subtitle: "Select the option that best describes your project",
    type: "select",
    options: [
      { label: "Kitchen Remodel", value: "kitchen-remodeling", icon: <ChefHat className="w-6 h-6" />, description: "Cabinets, countertops, layouts" },
      { label: "Bathroom Remodel", value: "bathroom-remodeling", icon: <Bath className="w-6 h-6" />, description: "Showers, vanities, tile work" },
      { label: "ADA / Accessible", value: "ada-accessible-remodeling", icon: <Accessibility className="w-6 h-6" />, description: "Safety & accessibility upgrades" },
      { label: "Home Addition", value: "home-additions", icon: <Home className="w-6 h-6" />, description: "Extra rooms, ADUs, expansions" },
      { label: "Commercial Work", value: "commercial-remodeling", icon: <Building2 className="w-6 h-6" />, description: "Build-outs, renovations, TI" },
      { label: "Something Else", value: "other", icon: <HelpCircle className="w-6 h-6" />, description: "Flooring, painting, electrical" },
    ],
  },
  {
    id: "scope",
    question: "What's the scope of your project?",
    subtitle: "This helps us prepare for your consultation",
    type: "select",
    options: [
      { label: "Full Remodel", value: "full", description: "Complete gut and rebuild" },
      { label: "Partial Update", value: "partial", description: "Key upgrades to existing space" },
      { label: "Repair / Fix", value: "repair", description: "Fix specific issues or damage" },
      { label: "Not Sure Yet", value: "unsure", description: "I need guidance on options" },
    ],
  },
  {
    id: "timeline",
    question: "When are you looking to start?",
    subtitle: "We'll match you with available project slots",
    type: "select",
    options: [
      { label: "ASAP", value: "asap", icon: <Clock className="w-5 h-5" />, description: "Within the next 2 weeks" },
      { label: "1–3 Months", value: "1-3-months", description: "Planning ahead" },
      { label: "3–6 Months", value: "3-6-months", description: "Future project" },
      { label: "Just Exploring", value: "exploring", description: "Researching options & costs" },
    ],
  },
  {
    id: "budget",
    question: "Do you have a budget range in mind?",
    subtitle: "No pressure — helps us tailor recommendations",
    type: "select",
    options: [
      { label: "Under $15,000", value: "under-15k", icon: <DollarSign className="w-5 h-5" /> },
      { label: "$15,000 – $30,000", value: "15k-30k", icon: <DollarSign className="w-5 h-5" /> },
      { label: "$30,000 – $50,000", value: "30k-50k", icon: <DollarSign className="w-5 h-5" /> },
      { label: "$50,000+", value: "50k-plus", icon: <DollarSign className="w-5 h-5" /> },
      { label: "Not Sure Yet", value: "unsure", icon: <HelpCircle className="w-5 h-5" /> },
    ],
  },
  {
    id: "contact",
    question: "Almost done! Where should we send your estimate?",
    subtitle: "Cristian will personally follow up within 24 hours",
    type: "input-group",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text", required: true },
      { name: "phone", placeholder: "Phone Number", type: "tel", required: true },
      { name: "email", placeholder: "Email Address", type: "email", required: false },
      { name: "city", placeholder: "City or Zip Code", type: "text", required: false },
    ],
  },
];

export function MultiStepForm({
  defaultService,
  defaultLocation,
  source = "website",
  campaignId,
  variant = "light",
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(defaultService ? 1 : 0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    "project-type": defaultService || "",
    scope: "",
    timeline: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    city: defaultLocation || "",
    source,
    campaignId: campaignId || "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isDark = variant === "dark";
  const step = STEPS[currentStep];
  const totalSteps = STEPS.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);
    if (currentStep < totalSteps - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 200);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const serviceLabel = STEPS[0].options?.find((o) => o.value === answers["project-type"])?.label || answers["project-type"];
    const scopeLabel = STEPS[1].options?.find((o) => o.value === answers.scope)?.label || answers.scope;
    const timelineLabel = STEPS[2].options?.find((o) => o.value === answers.timeline)?.label || answers.timeline;
    const budgetLabel = STEPS[3].options?.find((o) => o.value === answers.budget)?.label || answers.budget;

    const messageParts = [
      scopeLabel && `Scope: ${scopeLabel}`,
      timelineLabel && `Timeline: ${timelineLabel}`,
      budgetLabel && `Budget: ${budgetLabel}`,
      answers.source && `Source: ${answers.source}`,
      answers.campaignId && `Campaign: ${answers.campaignId}`,
    ].filter(Boolean);

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name,
          phone: answers.phone,
          email: answers.email,
          service: serviceLabel,
          city: answers.city,
          message: messageParts.join(" | "),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us directly.");
      }
    } catch {
      setError("Something went wrong. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const canGoBack = currentStep > (defaultService ? 1 : 0);

  if (submitted) {
    return (
      <div className={`rounded-xl p-8 text-center ${isDark ? "bg-white/5" : "bg-secondary"}`}>
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className={`text-[1.35rem] mb-2 ${isDark ? "text-white" : ""}`} style={{ fontWeight: 700 }}>
          You're All Set!
        </h3>
        <p className={`text-[0.95rem] mb-4 ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
          Cristian will personally review your project details and follow up within 24 hours to schedule your free
          in-home consultation.
        </p>
        <div className={`inline-flex items-center gap-2 text-[0.9rem] ${isDark ? "text-white/50" : "text-muted-foreground"}`}>
          <User className="w-4 h-4" />
          <span>
            Can't wait? Call Cristian directly at{" "}
            <a href={`tel:${COMPANY.phone}`} className="text-primary" style={{ fontWeight: 600 }}>
              {COMPANY.phone}
            </a>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-[0.75rem] ${isDark ? "text-white/50" : "text-muted-foreground"}`}>
            Step {currentStep + 1} of {totalSteps}
          </span>
          {canGoBack && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className={`flex items-center gap-1 text-[0.8rem] hover:opacity-80 transition-opacity ${isDark ? "text-white/60" : "text-muted-foreground"}`}
            >
              <ArrowLeft className="w-3 h-3" /> Back
            </button>
          )}
        </div>
        <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-gray-200"}`}>
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3
          className={`text-[1.15rem] md:text-[1.25rem] mb-1 ${isDark ? "text-white" : ""}`}
          style={{ fontWeight: 700 }}
        >
          {step.question}
        </h3>
        {step.subtitle && (
          <p className={`text-[0.85rem] ${isDark ? "text-white/60" : "text-muted-foreground"}`}>{step.subtitle}</p>
        )}
      </div>

      {/* Options */}
      {step.type === "select" && (
        <div className={`grid gap-3 ${(step.options?.length || 0) > 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
          {step.options?.map((option) => {
            const isSelected = answers[step.id] === option.value;
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                  isSelected
                    ? isDark
                      ? "border-primary bg-primary/10 text-white"
                      : "border-primary bg-primary/5"
                    : isDark
                    ? "border-white/10 hover:border-white/30 text-white"
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                {option.icon && (
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-primary/20 text-primary" : isDark ? "bg-white/10 text-white/70" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {option.icon}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="text-[0.95rem]" style={{ fontWeight: 600 }}>
                    {option.label}
                  </div>
                  {option.description && (
                    <div className={`text-[0.8rem] ${isDark ? "text-white/50" : "text-muted-foreground"}`}>
                      {option.description}
                    </div>
                  )}
                </div>
                {isSelected && <CheckCircle className="w-5 h-5 text-primary ml-auto shrink-0" />}
              </button>
            );
          })}
        </div>
      )}

      {/* Input fields */}
      {step.type === "input-group" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {step.fields?.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder + (field.required ? " *" : "")}
              required={field.required}
              value={answers[field.name] || ""}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={`w-full px-4 py-3.5 rounded-xl text-[0.95rem] transition-colors ${
                isDark
                  ? "bg-white/10 border-2 border-white/20 text-white placeholder-white/40 focus:border-primary focus:outline-none"
                  : "bg-white border-2 border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
              }`}
            />
          ))}
          {error && (
            <p className="text-red-500 text-[0.85rem] text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full text-white px-6 py-4 rounded-xl text-[1rem] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            style={{ backgroundColor: BRAND.colors.accent, fontWeight: 700 }}
            onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = BRAND.colors.accentDark; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BRAND.colors.accent; }}
          >
            {submitting ? "Submitting…" : "Get My Free Estimate"}
            {!submitting && <ArrowRight className="w-5 h-5" />}
          </button>
          <p className={`text-[0.75rem] text-center ${isDark ? "text-white/40" : "text-muted-foreground"}`}>
            No obligation. No spam. Cristian follows up personally.
          </p>
          <SecureFormNotice variant={isDark ? "dark" : "light"} />
        </form>
      )}
    </div>
  );
}
