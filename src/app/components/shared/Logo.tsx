import { Link } from "react-router";
import { BRAND } from "../../data/brandConfig";
import { COMPANY } from "../../data/siteData";

interface LogoProps {
  variant?: "dark" | "light";
  linkTo?: string;
  size?: "default" | "small" | "large";
}

/**
 * Brand logo — pentagon house with dashed outline, crosshair corners.
 * Colors and fonts driven by brandConfig.ts for easy re-skinning.
 */
function LogoMark({ variant, scale = 1 }: { variant: "dark" | "light"; scale?: number }) {
  const isDark = variant === "dark";
  const { accent, primary } = BRAND.colors;
  const textFill = isDark ? primary : "#ffffff";
  const subFill = isDark ? `${primary}66` : "rgba(255,255,255,0.45)";
  const accentDash = isDark ? `${accent}4D` : `${accent}59`;
  const dashed = BRAND.style.dashedBorders;

  const w = Math.round(52 * scale);
  const h = Math.round(50 * scale);

  return (
    <svg width={w} height={h} viewBox="0 0 260 245" fill="none">
      <polygon
        points="130,10 254,87 254,240 6,240 6,87"
        stroke={accent}
        strokeWidth="2.5"
        fill="none"
        strokeDasharray={dashed ? "7 3.5" : undefined}
      />
      <polygon
        points="130,22 244,92 244,230 16,230 16,92"
        stroke={accentDash}
        strokeWidth="1"
        fill="none"
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      {BRAND.style.cornerBrackets && (
        <>
          <line x1="6" y1="79" x2="6" y2="95" stroke={accent} strokeWidth="2.5" />
          <line x1="-2" y1="87" x2="14" y2="87" stroke={accent} strokeWidth="2.5" />
          <line x1="254" y1="79" x2="254" y2="95" stroke={accent} strokeWidth="2.5" />
          <line x1="246" y1="87" x2="262" y2="87" stroke={accent} strokeWidth="2.5" />
        </>
      )}
      <text x="130" y="132" fontFamily={BRAND.fonts.display} fontSize="70" fontWeight="700" fill={textFill} textAnchor="middle" letterSpacing="3">FRANCO</text>
      <line x1="20" y1="141" x2="240" y2="141" stroke={accent} strokeWidth="2" />
      <text x="130" y="174" fontFamily={BRAND.fonts.display} fontSize="36" fontWeight="600" fill={accent} textAnchor="middle" letterSpacing="6">AND SONS</text>
      <line x1="20" y1="183" x2="240" y2="183" stroke={isDark ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.12)"} strokeWidth="1" />
      <text x="130" y="215" fontFamily={BRAND.fonts.secondary} fontSize="18" fontWeight="600" fill={subFill} textAnchor="middle" letterSpacing="4">CONSTRUCTION LLC</text>
    </svg>
  );
}

export function Logo({ variant = "dark", linkTo = "/", size = "default" }: LogoProps) {
  let scale = 1;
  if (size === "small") scale = 0.8;
  if (size === "large") scale = 1.3;

  const isDark = variant === "dark";
  const { accent, primary } = BRAND.colors;
  const textColor = isDark ? primary : "#ffffff";
  const subColor = isDark ? `${primary}66` : "rgba(255,255,255,0.45)";

  const content = (
    <div className="flex items-center gap-3">
      <LogoMark variant={variant} scale={scale} />
      <div className="hidden sm:flex flex-col leading-none">
        <span style={{ fontFamily: BRAND.fonts.display, fontSize: `${Math.round(22 * scale)}px`, fontWeight: 700, color: textColor, letterSpacing: "0.05em", lineHeight: 1 }}>
          {COMPANY.name.split(" ")[0].toUpperCase()} <span style={{ color: accent }}>&</span> {COMPANY.name.includes("Sons") ? "SONS" : COMPANY.name.split(" ").slice(1).join(" ").toUpperCase()}
        </span>
        <span style={{ fontFamily: BRAND.fonts.secondary, fontSize: `${Math.round(10 * scale)}px`, fontWeight: 600, color: subColor, letterSpacing: "0.2em", lineHeight: 1.4 }}>
          CONSTRUCTION LLC
        </span>
      </div>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="shrink-0 block">
        {content}
      </Link>
    );
  }

  return <div className="shrink-0">{content}</div>;
}
