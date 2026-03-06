/**
 * ═══════════════════════════════════════════════════════════════
 * BRAND CONFIGURATION — Single source of truth for the entire site.
 *
 * Change these values to re-skin the site for a different client.
 * All colors, fonts, and brand tokens flow from this file.
 *
 * USAGE:
 *   import { BRAND } from '@/app/data/brandConfig';
 *   <div style={{ color: BRAND.colors.accent }}>...</div>
 *   <h1 style={{ fontFamily: BRAND.fonts.display }}>...</h1>
 *
 * CSS VARIABLES:
 *   The theme.css file reads from CSS custom properties.
 *   Update the :root block in theme.css to match these values,
 *   OR use the injectBrandCSS() utility to apply at runtime.
 * ═══════════════════════════════════════════════════════════════
 */

// ── PRESET PALETTES ─────────────────────────────────────────
// Switch activePreset to change the entire color scheme.

const PRESETS = {
  slateLime: {
    name: "Slate Blue & Lime",
    primary: "#1E2D4A",          // Main brand color (nav, badges, headings)
    primaryLight: "#2E4473",     // Lighter shade
    primaryDark: "#111c2e",      // Darkest shade (hero overlays, footer)
    accent: "#8BC34A",           // Pop color (CTAs, highlights, borders)
    accentDark: "#6A9E2A",      // Hover/active state
    accentMuted: "#C5E1A5",     // Soft tint (light backgrounds)
    accentLight: "#E8F5C8",     // Very light tint
    tertiary: "#4A90D9",        // Optional third color (info, links)
    tertiaryLight: "#A8CCF0",   // Light tertiary
    warmWhite: "#eef3e8",       // Warm off-white for reversed logos
  },
  navyOrange: {
    name: "Navy & Orange",
    primary: "#0D2545",
    primaryLight: "#1A3A6B",
    primaryDark: "#071628",
    accent: "#F47C20",
    accentDark: "#D4691A",
    accentMuted: "#F5C89A",
    accentLight: "#FEF0E0",
    tertiary: "#4A90D9",
    tertiaryLight: "#A8CCF0",
    warmWhite: "#F5F0E8",
  },
  blueYellow: {
    name: "Blue & Yellow",
    primary: "#1455A4",
    primaryLight: "#1A6BC4",
    primaryDark: "#0C1F3D",
    accent: "#F5C025",
    accentDark: "#D4A31E",
    accentMuted: "#F5E6A0",
    accentLight: "#FEF9E0",
    tertiary: "#0D3D7A",
    tertiaryLight: "#89B4E8",
    warmWhite: "#F5F6F8",
  },
  steelRed: {
    name: "Steel Blue & Red",
    primary: "#1A3F72",
    primaryLight: "#2B5A9E",
    primaryDark: "#0F2A4F",
    accent: "#C0392B",
    accentDark: "#962D22",
    accentMuted: "#E8A9A2",
    accentLight: "#F8E5E3",
    tertiary: "#4A6FA5",
    tertiaryLight: "#A8C0E0",
    warmWhite: "#F0F2F5",
  },
} as const;

// ── ACTIVE PRESET — Change this ONE line to re-skin the whole site ──
const activePreset: keyof typeof PRESETS = "slateLime";

// ── FONT STACKS ─────────────────────────────────────────────
// Swap font families per-client. All fonts must be loaded in fonts.css.

const FONT_STACKS = {
  modern: {
    display: "'Teko', sans-serif",
    secondary: "'Barlow Condensed', sans-serif",
    body: "'DM Sans', system-ui, sans-serif",
  },
  classic: {
    display: "'Bebas Neue', sans-serif",
    secondary: "'Barlow Condensed', sans-serif",
    body: "'DM Sans', system-ui, sans-serif",
  },
  bold: {
    display: "'Oswald', sans-serif",
    secondary: "'Barlow Condensed', sans-serif",
    body: "'DM Sans', system-ui, sans-serif",
  },
} as const;

const activeFontStack: keyof typeof FONT_STACKS = "modern";

// ── EXPORTED BRAND CONFIG ───────────────────────────────────

export const BRAND = {
  // Active color palette
  colors: {
    ...PRESETS[activePreset],
    // Semantic aliases (these names are used in components)
    background: "#FAFBFC",
    foreground: "#0A1628",
    cardBg: "#ffffff",
    mutedText: "#5A6B7D",
    border: "rgba(10, 22, 40, 0.12)",
    // Dark section colors (hero, footer, etc.)
    darkBg: PRESETS[activePreset].primaryDark,
    darkBgAlt: PRESETS[activePreset].primary,
    darkBgDeepest: "#0a0f1a",
  },

  // Active font stack
  fonts: {
    ...FONT_STACKS[activeFontStack],
  },

  // Decorative options
  style: {
    /** Use dashed borders (blueprint feel) vs solid */
    dashedBorders: true,
    /** Show dot grid pattern on dark sections */
    dotGridPattern: true,
    /** Show corner bracket marks */
    cornerBrackets: true,
    /** Border radius base */
    radius: "0.375rem",
  },

  // Metadata for easy access
  preset: activePreset,
  presetName: PRESETS[activePreset].name,
  allPresets: PRESETS,
  allFontStacks: FONT_STACKS,
} as const;

// ── CSS VARIABLE GENERATOR ──────────────────────────────────
// Call this once at app init to sync CSS variables with the brand config.

export function getBrandCSSVariables(): Record<string, string> {
  const c = BRAND.colors;
  return {
    "--primary": c.primary,
    "--primary-light": c.primaryLight,
    "--primary-dark": c.primaryDark,
    "--primary-foreground": "#ffffff",
    "--gold": c.accent,
    "--gold-dark": c.accentDark,
    "--gold-light": c.accentLight,
    "--gold-muted": c.accentMuted,
    "--ring": c.primary,
    "--background": c.background,
    "--foreground": c.foreground,
    "--accent": c.foreground,
    "--accent-foreground": "#ffffff",
    "--border": c.border,
  };
}
