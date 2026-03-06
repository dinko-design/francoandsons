import { ImageResponse } from "@vercel/og";
import type { VercelRequest } from "@vercel/node";

export const config = {
  runtime: "edge",
};

/**
 * Dynamic OG image generator for Franco and Sons Construction LLC.
 *
 * Usage: /api/og?title=Kitchen+Remodeling&subtitle=Lincoln,+CA&type=service
 *
 * Query params:
 *   title     — Main heading text (required)
 *   subtitle  — Secondary text (optional)
 *   type      — Page type: "home" | "service" | "location" | "blog" | "legal" | "default"
 */
export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Franco and Sons Construction LLC";
  const subtitle = searchParams.get("subtitle") || "";
  const type = searchParams.get("type") || "default";

  // Brand colors
  const primaryDark = "#111c2e";
  const primary = "#1E2D4A";
  const accent = "#8BC34A";
  const accentDark = "#6A9E2A";

  // Type-specific accent bar widths and layout
  const isHome = type === "home";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          background: primaryDark,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blueprint grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage: `radial-gradient(circle, ${accent}18 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Diagonal accent lines */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <line x1="0" y1="630" x2="400" y2="0" stroke={accent} strokeWidth="1" opacity="0.08" />
          <line x1="200" y1="630" x2="600" y2="0" stroke={accent} strokeWidth="0.5" opacity="0.06" />
          <line x1="800" y1="630" x2="1200" y2="100" stroke={accent} strokeWidth="1" opacity="0.08" />
          <line x1="1000" y1="630" x2="1200" y2="300" stroke={accent} strokeWidth="0.5" opacity="0.06" />
        </svg>

        {/* Corner brackets */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Top-left */}
          <path d="M40,90 L40,40 L90,40" stroke={accent} strokeWidth="2.5" fill="none" />
          {/* Top-right */}
          <path d="M1110,40 L1160,40 L1160,90" stroke={accent} strokeWidth="2.5" fill="none" />
          {/* Bottom-left */}
          <path d="M40,540 L40,590 L90,590" stroke={accent} strokeWidth="2.5" fill="none" />
          {/* Bottom-right */}
          <path d="M1110,590 L1160,590 L1160,540" stroke={accent} strokeWidth="2.5" fill="none" />
        </svg>

        {/* Top section: Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
          {/* Pentagon logo mark */}
          <svg width="52" height="50" viewBox="0 0 260 245" fill="none">
            <polygon
              points="130,10 254,87 254,240 6,240 6,87"
              stroke={accent}
              strokeWidth="3"
              fill="none"
              strokeDasharray="7 3.5"
            />
            <text
              x="130"
              y="135"
              fontSize="72"
              fontWeight="700"
              fill="white"
              textAnchor="middle"
              fontFamily="system-ui"
            >
              F
            </text>
            <line x1="20" y1="147" x2="240" y2="147" stroke={accent} strokeWidth="2" />
            <text
              x="130"
              y="178"
              fontSize="30"
              fontWeight="600"
              fill={accent}
              textAnchor="middle"
              fontFamily="system-ui"
              letterSpacing="6"
            >
              & SONS
            </text>
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "white",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                lineHeight: 1,
              }}
            >
              FRANCO{" "}
              <span style={{ color: accent }}>AND</span>{" "}
              SONS
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                lineHeight: 1.6,
              }}
            >
              CONSTRUCTION LLC
            </span>
          </div>
        </div>

        {/* Middle: Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
          {/* Accent bar */}
          <div
            style={{
              width: isHome ? "100px" : "60px",
              height: "4px",
              background: accent,
              borderRadius: "2px",
            }}
          />

          {/* Subtitle / eyebrow */}
          {subtitle && (
            <span
              style={{
                color: accent,
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {subtitle}
            </span>
          )}

          {/* Title */}
          <h1
            style={{
              color: "white",
              fontSize: isHome ? "64px" : title.length > 40 ? "44px" : "54px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Bottom: Info bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Lincoln, California
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: "14px",
              }}
            >
              |
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              (916) 316-2948
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: "14px",
              }}
            >
              |
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              CA Licensed General Contractor
            </span>
          </div>

          {/* Accent dot */}
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: accent,
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
