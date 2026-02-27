import { Helmet } from "react-helmet-async";
import type { PageMeta } from "../../data/metaData";
import { SITE_URL } from "../../data/metaData";

interface DocumentHeadProps extends PageMeta {
  /** Optional article publish date for blog (ISO string) */
  articlePublishedTime?: string;
  /** Optional article modified date (ISO string) */
  articleModifiedTime?: string;
}

/** Ensure image URL is absolute for OG/Twitter (crawlers require full URL). */
function toAbsoluteImageUrl(image: string | undefined): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  const path = image.startsWith("/") ? image : `/${image}`;
  return `${SITE_URL.replace(/\/$/, "")}${path}`;
}

export function DocumentHead({
  title,
  description,
  canonical,
  image,
  noindex,
  articlePublishedTime,
  articleModifiedTime,
}: DocumentHeadProps) {
  const ogImage = toAbsoluteImageUrl(image);
  const canonicalUrl = canonical || undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={articlePublishedTime ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Franco & Sons Construction LLC" />
      <meta property="og:locale" content="en_US" />
      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
}
