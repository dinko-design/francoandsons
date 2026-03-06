import { BRAND } from "../../data/brandConfig";

const { accent, primary, primaryDark } = BRAND.colors;

/**
 * Corner bracket marks — L-shaped lime brackets at corners of a container.
 * Used on hero sections, cards, video overlays, social media templates.
 * Pass size to control bracket length, strokeWidth for thickness.
 */
export function CornerBrackets({
  size = 24,
  strokeWidth = 2,
  color = accent,
  className = "",
  inset = 0,
}: {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  inset?: number;
}) {
  const style = { position: "absolute" as const, pointerEvents: "none" as const };
  const s = size;
  const sw = strokeWidth;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ inset }}>
      {/* Top-left */}
      <svg style={{ ...style, top: 0, left: 0 }} width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <path d={`M0,${s} L0,0 L${s},0`} stroke={color} strokeWidth={sw} fill="none" />
      </svg>
      {/* Top-right */}
      <svg style={{ ...style, top: 0, right: 0 }} width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <path d={`M0,0 L${s},0 L${s},${s}`} stroke={color} strokeWidth={sw} fill="none" />
      </svg>
      {/* Bottom-left */}
      <svg style={{ ...style, bottom: 0, left: 0 }} width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <path d={`M0,0 L0,${s} L${s},${s}`} stroke={color} strokeWidth={sw} fill="none" />
      </svg>
      {/* Bottom-right */}
      <svg style={{ ...style, bottom: 0, right: 0 }} width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <path d={`M${s},0 L${s},${s} L0,${s}`} stroke={color} strokeWidth={sw} fill="none" />
      </svg>
    </div>
  );
}

/**
 * "F" brand badge — small square monogram mark.
 * Used as watermark on cards, social posts, lower thirds.
 */
export function FBadge({
  size = 32,
  variant = "filled",
  className = "",
}: {
  size?: number;
  variant?: "filled" | "outline" | "dark";
  className?: string;
}) {
  const bg = variant === "filled" ? primary : variant === "dark" ? BRAND.colors.darkBgDeepest : "transparent";
  const border = variant === "outline" ? `1.5px solid ${primary}` : "none";
  const textColor = variant === "outline" ? primary : "#ffffff";

  return (
    <div
      className={`inline-flex items-center justify-center rounded ${className}`}
      style={{
        width: size,
        height: size,
        background: bg,
        border,
        fontFamily: BRAND.fonts.display,
        fontWeight: 700,
        fontSize: size * 0.5,
        color: textColor,
        letterSpacing: "0.02em",
        lineHeight: 1,
      }}
    >
      F
    </div>
  );
}

/**
 * Blueprint grid — the signature brand pattern from Concept D.
 * Layers:
 *   1. Fine grid lines (horizontal + vertical) — very faint
 *   2. Dot intersections at each grid point — slightly brighter
 * Creates the technical-drawing / blueprint graph-paper feel.
 */
let blueprintGridId = 0;
export function DotGrid({
  opacity = 0.12,
  spacing = 32,
  color = accent,
  className = "",
  dotSize = 1,
  showLines = true,
  lineOpacity,
}: {
  opacity?: number;
  spacing?: number;
  color?: string;
  className?: string;
  dotSize?: number;
  showLines?: boolean;
  lineOpacity?: number;
}) {
  const id = `bp-grid-${++blueprintGridId}`;
  const lo = lineOpacity ?? opacity * 0.35;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Layer 1: Grid lines */}
      {showLines && (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={id} x="0" y="0" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
              {/* Vertical line */}
              <line x1={spacing} y1="0" x2={spacing} y2={spacing} stroke={color} strokeWidth="0.5" opacity={lo} />
              {/* Horizontal line */}
              <line x1="0" y1={spacing} x2={spacing} y2={spacing} stroke={color} strokeWidth="0.5" opacity={lo} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      )}
      {/* Layer 2: Dot intersections */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${color} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${spacing}px ${spacing}px`,
          opacity,
        }}
      />
    </div>
  );
}

/**
 * Dashed border card wrapper — matches the blueprint/technical drawing aesthetic.
 */
export function DashedCard({
  children,
  className = "",
  borderColor = `${accent}40`,
  withCorners = true,
  cornerSize = 20,
}: {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  withCorners?: boolean;
  cornerSize?: number;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ border: `1.5px dashed ${borderColor}` }}
    >
      {withCorners && <CornerBrackets size={cornerSize} color={accent} />}
      {children}
    </div>
  );
}

/**
 * Decorative quote marks — large lime quotation marks for testimonials.
 */
export function QuoteMarks({
  size = 20,
  color = accent,
  position = "top-left",
}: {
  size?: number;
  color?: string;
  position?: "top-left" | "bottom-right";
}) {
  const isTop = position === "top-left";
  return (
    <span
      style={{
        fontFamily: BRAND.fonts.display,
        fontSize: size,
        color,
        opacity: 0.6,
        lineHeight: 1,
        display: "block",
        textAlign: isTop ? "left" : "right",
      }}
    >
      {isTop ? "\u201C\u201C" : "\u201D\u201D"}
    </span>
  );
}

/**
 * Section eyebrow label — small accent text with a line prefix.
 * Matches the brand guide pattern: ── LABEL TEXT
 */
export function SectionEyebrow({
  children,
  color = accent,
  lineWidth = 20,
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  lineWidth?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span style={{ width: lineWidth, height: 1, background: color, display: "inline-block" }} />
      <span
        style={{
          color,
          fontSize: "0.75rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontFamily: BRAND.fonts.body,
          fontWeight: 600,
        }}
      >
        {children}
      </span>
    </div>
  );
}

/**
 * Crosshatch/diagonal grid background — subtle angular lines for footer/dark sections.
 */
let crosshatchId = 0;
export function CrosshatchGrid({
  color = accent,
  opacity = 0.06,
  size = 100,
}: {
  color?: string;
  opacity?: number;
  size?: number;
}) {
  const id = `crosshatch-${++crosshatchId}`;
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2={size} y2={size} stroke={color} strokeWidth="0.3" opacity={opacity} />
            <line x1={size} y1="0" x2="0" y2={size} stroke={color} strokeWidth="0.3" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
