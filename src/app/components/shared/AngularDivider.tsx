import { BRAND } from "../../data/brandConfig";

interface AngularDividerProps {
  from?: string;
  to?: string;
  variant?:
    | "sharp"
    | "zigzag"
    | "slant-left"
    | "slant-right"
    | "arrow-down"
    | "double"
    | "roof-peak"
    | "roof-valley"
    | "roof-asymmetric"
    | "roof-multi"
    | "roof-steep"
    | "roof-shallow";
  flip?: boolean;
  className?: string;
}

/**
 * AngularDivider — creates angular/geometric transitions between sections.
 *
 * How it works:
 * - The container uses a 50/50 background gradient of `from` (top) and `to` (bottom)
 *   as a safety net so that even sub-pixel gaps never show the page background through.
 * - The SVG renders the actual angular shape on top.
 * - Negative margins (-6px) overlap adjacent sections to eliminate seams.
 */
export function AngularDivider({
  from = "#F8FAFC",
  to = "#ffffff",
  variant = "sharp",
  flip = false,
  className = "",
}: AngularDividerProps) {
  const transform = flip ? "scale(1, -1)" : undefined;

  // Safety-net background: top half = from, bottom half = to
  const safetyBackground = `linear-gradient(to bottom, ${from} 50%, ${to} 50%)`;

  const containerStyle: React.CSSProperties = {
    marginTop: -6,
    marginBottom: -6,
    background: safetyBackground,
    lineHeight: 0,
    fontSize: 0,
  };

  const svgBase: React.CSSProperties = {
    transform,
    display: "block",
    position: "relative" as const,
    zIndex: 1,
  };

  if (variant === "sharp") {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "80px" }}
        >
          <rect width="1440" height="80" fill={to} />
          <polygon points="0,0 1440,0 1440,20 720,80 0,20" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "zigzag") {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "60px" }}
        >
          <rect width="1440" height="60" fill={to} />
          <polygon points="0,0 1440,0 1440,10 1080,60 720,10 360,60 0,10" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "slant-left") {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "80px" }}
        >
          <rect width="1440" height="80" fill={to} />
          <polygon points="0,0 1440,0 1440,30 0,80" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "slant-right") {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "80px" }}
        >
          <rect width="1440" height="80" fill={to} />
          <polygon points="0,0 1440,0 1440,80 0,30" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "arrow-down") {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "70px" }}
        >
          <rect width="1440" height="70" fill={to} />
          <polygon points="0,0 1440,0 1440,10 780,70 660,70 0,10" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "double") {
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "80px" }}
        >
          <rect width="1440" height="80" fill={to} />
          <polygon points="0,0 1440,0 1440,20 960,60 720,30 480,60 0,20" fill={from} />
        </svg>
      </div>
    );
  }

  // ── New Roof-Inspired Variants ──

  if (variant === "roof-peak") {
    // Classic roof peak - sharp upward V (inverted valley)
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "100px" }}
        >
          <rect width="1440" height="100" fill={to} />
          <polygon points="0,100 720,0 1440,100" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "roof-valley") {
    // Classic roof valley - sharp downward V
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "90px" }}
        >
          <rect width="1440" height="90" fill={to} />
          <polygon points="0,0 1440,0 1440,15 720,90 0,15" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "roof-asymmetric") {
    // Asymmetric roof - different angles on each side
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "95px" }}
        >
          <rect width="1440" height="95" fill={to} />
          <polygon points="0,0 1440,0 1440,20 900,95 0,40" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "roof-multi") {
    // Multiple roof peaks - like row houses
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "85px" }}
        >
          <rect width="1440" height="85" fill={to} />
          <polygon
            points="0,0 1440,0 1440,15 1200,70 1080,15 840,70 720,15 480,70 360,15 120,70 0,15"
            fill={from}
          />
        </svg>
      </div>
    );
  }

  if (variant === "roof-steep") {
    // Steep roof angle - dramatic V
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "120px" }}
        >
          <rect width="1440" height="120" fill={to} />
          <polygon points="0,0 1440,0 1440,25 720,120 0,25" fill={from} />
        </svg>
      </div>
    );
  }

  if (variant === "roof-shallow") {
    // Shallow roof angle - subtle V
    return (
      <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ ...svgBase, height: "50px" }}
        >
          <rect width="1440" height="50" fill={to} />
          <polygon points="0,0 1440,0 1440,10 720,50 0,10" fill={from} />
        </svg>
      </div>
    );
  }

  return null;
}

export function GeometricBackground({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Angular line accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(135deg, ${BRAND.colors.accent} 1px, transparent 1px),
              linear-gradient(225deg, ${BRAND.colors.accent} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Diagonal accent line */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.04]"
          style={{
            background: `linear-gradient(135deg, ${BRAND.colors.accent} 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 opacity-[0.04]"
          style={{
            background: `linear-gradient(315deg, ${BRAND.colors.accent} 0%, transparent 50%)`,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function BlueprintLines({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="60" y2="60" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.06" />
            <line x1="60" y1="0" x2="0" y2="60" stroke={BRAND.colors.accent} strokeWidth="0.5" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint)" />
      </svg>
    </div>
  );
}