import { useState } from "react";
import { Send, CheckCircle, Lock, Loader2 } from "lucide-react";
import { SERVICES } from "../../data/siteData";

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  compact?: boolean;
  variant?: "light" | "dark";
}

export function LeadCaptureForm({
  title = "Get Your Free Estimate",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  defaultService = "",
  compact = false,
  variant = "light",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDark = variant === "dark";
  const inputClasses = isDark
    ? "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[0.9rem]"
    : "w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[0.9rem]";

  if (submitted) {
    return (
      <div className={`rounded-xl p-8 text-center ${isDark ? "bg-white/5" : "bg-secondary"}`}>
        <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${isDark ? "text-green-400" : "text-green-600"}`} />
        <h3 className={`text-[1.25rem] mb-2 ${isDark ? "text-white" : ""}`} style={{ fontWeight: 600 }}>
          Thank You!
        </h3>
        <p className={`text-[0.95rem] ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
          We've received your request and will contact you within 24 hours to schedule your free estimate.
        </p>
      </div>
    );
  }

  return (
    <div>
      {!compact && (
        <div className="mb-6">
          <h3 className={`text-[1.35rem] mb-2 ${isDark ? "text-white" : ""}`} style={{ fontWeight: 600 }}>
            {title}
          </h3>
          <p className={`text-[0.9rem] ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={compact ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select a Service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
        <input
          type="text"
          name="city"
          placeholder="City / Zip Code"
          value={formData.city}
          onChange={handleChange}
          className={inputClasses}
        />
        {!compact && (
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />
        )}
        {error && (
          <p className="text-red-400 text-[0.85rem]">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-lg text-[0.95rem] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
          style={{ fontWeight: 600 }}
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Request Free Estimate
            </>
          )}
        </button>
        <p className={`text-[0.75rem] text-center ${isDark ? "text-white/40" : "text-muted-foreground"}`}>
          No obligation. No spam. Just a fair estimate.
        </p>
        <div className={`flex items-start gap-2 mt-2 ${isDark ? "text-white/40" : "text-muted-foreground"}`}>
          <Lock className="w-3 h-3 mt-0.5 shrink-0" />
          <p className="text-[0.7rem]">
            Your information is 100% secure and never shared or sold.
          </p>
        </div>
      </form>
    </div>
  );
}
