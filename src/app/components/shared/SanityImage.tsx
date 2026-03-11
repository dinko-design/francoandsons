import { sanityImageUrl, type SanityImageRef } from "../../lib/sanity";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const WIDTHS = [400, 800, 1200, 1600];

interface SanityImageProps {
  /** Sanity image reference (from a GROQ query). If missing, falls back to staticSrc. */
  image?: SanityImageRef | null;
  /** Static fallback image URL (e.g. from IMAGES.*) */
  staticSrc?: string;
  alt: string;
  /** Intrinsic width for CLS prevention (browser reserves space) */
  width?: number;
  /** Intrinsic height for CLS prevention */
  height?: number;
  /** CSS sizes attribute for responsive loading (defaults to 100vw) */
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  /** LCP / above-fold image — eagerly loaded and preloaded */
  priority?: boolean;
}

export function SanityImage({
  image,
  staticSrc,
  alt,
  width,
  height,
  sizes = "100vw",
  className,
  style,
  priority,
}: SanityImageProps) {
  if (image?.asset) {
    const src = sanityImageUrl(image).auto("format").quality(80).width(1200).url();

    const srcSet = WIDTHS.map(
      (w) => `${sanityImageUrl(image).auto("format").quality(80).width(w).url()} ${w}w`,
    ).join(", ");

    return (
      <ImageWithFallback
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        alt={image.alt || alt}
        className={className}
        style={style}
        priority={priority}
      />
    );
  }

  return (
    <ImageWithFallback
      src={staticSrc}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style}
      priority={priority}
    />
  );
}
