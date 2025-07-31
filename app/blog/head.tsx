import { metadata } from "./metadata";
import { schema } from "./schema";

export default function Head() {
  return (
    <>
      <title>{metadata.title as string}</title>
      <meta name="description" content={metadata.description as string} />
      <meta
        name="keywords"
        content={(metadata.keywords as string[]).join(", ")}
      />
      <meta name="author" content="Guillaume Ganne" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={metadata.openGraph?.title as string} />
      <meta
        property="og:description"
        content={metadata.openGraph?.description as string}
      />
      <meta property="og:url" content={metadata.openGraph?.url as string} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content="/images/creation-site-vitrine-angouleme.webp"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta
        property="og:site_name"
        content="Guillaume Ganne - Webdesigner Angoulême"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.twitter?.title as string} />
      <meta
        name="twitter:description"
        content={metadata.twitter?.description as string}
      />
      <meta
        name="twitter:image"
        content="/images/creation-site-vitrine-angouleme.webp"
      />
      <meta name="twitter:creator" content="@guillaume_ganne" />

      {/* Canonical */}
      <link
        rel="canonical"
        href="https://guillaume-ganne.fr/blog/creation-site-internet-1001-astuces"
      />

      {/* Article specific meta */}
      <meta
        property="article:published_time"
        content="2024-01-15T10:00:00.000Z"
      />
      <meta
        property="article:modified_time"
        content="2024-01-15T10:00:00.000Z"
      />
      <meta property="article:author" content="Guillaume Ganne" />
      <meta property="article:section" content="Développement Web" />
      <meta
        property="article:tag"
        content="création site internet, développement web, SEO, optimisation"
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Additional SEO meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#2C3E50" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://www.w3.org" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  );
}
