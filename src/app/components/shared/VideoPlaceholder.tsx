import { Play, Video } from "lucide-react";
import { BRAND } from "../../data/brandConfig";

interface VideoPlaceholderProps {
  title?: string;
  subtitle?: string;
  thumbnailSrc?: string;
  aspectRatio?: string;
  variant?: "light" | "dark" | "overlay";
}

export function VideoPlaceholder({
  title = "Project Walkthrough Video",
  subtitle = "Coming Soon",
  thumbnailSrc,
  aspectRatio = "16/9",
  variant = "light",
}: VideoPlaceholderProps) {
  const isDark = variant === "dark";
  const isOverlay = variant === "overlay";

  return (
    <div
      className={`relative rounded-xl overflow-hidden group cursor-pointer ${
        isOverlay ? "" : isDark ? "" : "bg-gray-100 border border-border"
      }`}
      style={{ aspectRatio, ...(isDark && !isOverlay ? { backgroundColor: BRAND.colors.primaryDark } : {}) }}
    >
      {/* Thumbnail or gradient background */}
      {thumbnailSrc ? (
        <>
          <img src={thumbnailSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
        </>
      ) : (
        <div
          className={`absolute inset-0 ${
            isDark || isOverlay
              ? ""
              : "bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100"
          }`}
          style={isDark || isOverlay ? { background: `linear-gradient(to bottom right, ${BRAND.colors.primaryDark}, #1E293B, ${BRAND.colors.primaryDark})` } : undefined}
        >
          {/* Blueprint grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="video-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="30" y2="0" stroke={BRAND.colors.accent} strokeWidth="1" />
                <line x1="0" y1="0" x2="0" y2="30" stroke={BRAND.colors.accent} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#video-grid)" />
          </svg>
        </div>
      )}

      {/* Center play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-all group-hover:scale-110 mb-4">
          <Play className="w-8 h-8 text-white ml-1" />
        </div>
        <div className={`text-center ${thumbnailSrc || isDark || isOverlay ? "text-white" : "text-foreground"}`}>
          <div className="text-[0.95rem]" style={{ fontWeight: 600 }}>
            {title}
          </div>
          <div
            className={`text-[0.8rem] mt-1 flex items-center gap-1.5 justify-center ${
              thumbnailSrc || isDark || isOverlay ? "text-white/60" : "text-muted-foreground"
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            {subtitle}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-primary/30" />
    </div>
  );
}