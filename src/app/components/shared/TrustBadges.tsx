import { Shield, Lock, Star, Award, CheckCircle, ShieldCheck, Users } from "lucide-react";
import { COMPANY } from "../../data/siteData";

interface TrustBadgesProps {
  variant?: "inline" | "strip" | "compact" | "hero";
  showSecureNotice?: boolean;
}

export function TrustBadges({ variant = "inline", showSecureNotice = false }: TrustBadgesProps) {
  if (variant === "hero") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-white text-[0.7rem]" style={{ fontWeight: 600 }}>5.0 Rating</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
          <Shield className="w-3 h-3 text-[#60A5FA]" />
          <span className="text-white text-[0.7rem]" style={{ fontWeight: 600 }}>Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
          <Award className="w-3 h-3 text-[#60A5FA]" />
          <span className="text-white text-[0.7rem]" style={{ fontWeight: 600 }}>{COMPANY.yearsExperience}+ Years</span>
        </div>
      </div>
    );
  }

  if (variant === "strip") {
    return (
      <div className="bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { icon: <Shield className="w-4 h-4" />, label: "Licensed & Insured" },
              { icon: <Lock className="w-4 h-4" />, label: "Your Info Is Secure" },
              { icon: <Star className="w-4 h-4" />, label: "5-Star Rated" },
              { icon: <Award className="w-4 h-4" />, label: `${COMPANY.yearsExperience}+ Years Experience` },
              { icon: <Users className="w-4 h-4" />, label: "Family-Owned & Operated" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <span className="text-[#C77D3A]">{badge.icon}</span>
                <span className="text-[0.875rem] text-[#1E3A5F] font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center gap-4">
        {[
          { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "Licensed & Insured" },
          { icon: <Lock className="w-3.5 h-3.5" />, label: "Info Secure" },
          { icon: <Star className="w-3.5 h-3.5" />, label: "5-Star Reviews" },
        ].map((badge) => (
          <div key={badge.label} className="flex items-center gap-1.5 text-muted-foreground">
            <span className="text-primary">{badge.icon}</span>
            <span className="text-[0.75rem]" style={{ fontWeight: 500 }}>{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  // Default: inline
  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-2">
        {[
          { icon: <ShieldCheck className="w-4 h-4" />, label: "Licensed & Insured" },
          { icon: <Lock className="w-4 h-4" />, label: "Your Information Is Secure" },
          { icon: <Star className="w-4 h-4" />, label: "5-Star Rated" },
          { icon: <Award className="w-4 h-4" />, label: `${COMPANY.yearsExperience}+ Years` },
        ].map((badge) => (
          <div key={badge.label} className="flex items-center gap-1.5">
            <span className="text-primary">{badge.icon}</span>
            <span className="text-[0.8rem] text-muted-foreground" style={{ fontWeight: 500 }}>{badge.label}</span>
          </div>
        ))}
      </div>
      {showSecureNotice && (
        <p className="text-[0.7rem] text-muted-foreground flex items-center gap-1">
          <Lock className="w-3 h-3" />
          Your personal information is never shared or sold. We only use it to contact you about your project.
        </p>
      )}
    </div>
  );
}

/** Small secure-info notice for beneath forms */
export function SecureFormNotice({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className={`flex items-start gap-2 mt-3 ${isDark ? "text-white/40" : "text-muted-foreground"}`}>
      <Lock className="w-3 h-3 mt-0.5 shrink-0" />
      <p className="text-[0.7rem]">
        Your information is 100% secure and never shared or sold. We use it only to follow up on your project request.
      </p>
    </div>
  );
}