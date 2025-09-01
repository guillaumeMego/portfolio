import { Metadata } from "next";
import { generateCanonicalUrl } from "./canonical";

interface PageMetadataOptions {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
}

/**
 * Génère des métadonnées complètes et cohérentes pour une page
 * Assure que toutes les URLs (canonical, og:url, twitter) sont identiques
 */
export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    pathname,
    keywords = [],
    type = "website",
    publishedTime,
    modifiedTime,
    image,
  } = options;

  // URL canonique normalisée
  const canonicalUrl = generateCanonicalUrl(pathname);

  // Image par défaut si non fournie
  const defaultImage = {
    url: "https://www.guillaumeganne.com/images/guillaume-ganne-portrait.webp",
    width: 1200,
    height: 630,
    alt: "Guillaume Ganne - Développeur web freelance Angoulême",
  };

  const finalImage = image || defaultImage;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Guillaume Ganne" }],
    creator: "Guillaume Ganne",
    publisher: "Guillaume Ganne - Webdesigner Angoulême",

    // 🎯 URL canonique auto-référente
    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Open Graph - URL doit correspondre à la canonique
    openGraph: {
      type,
      locale: "fr_FR",
      url: canonicalUrl, // ✅ Même URL que la canonique
      title,
      description,
      siteName: "Guillaume Ganne",
      images: [
        {
          url: finalImage.url,
          width: finalImage.width,
          height: finalImage.height,
          alt: finalImage.alt,
        },
      ],
      ...(type === "article" &&
        publishedTime && {
          publishedTime,
          modifiedTime: modifiedTime || publishedTime,
          authors: ["Guillaume Ganne"],
          section: "Développement Web",
        }),
    },

    // Twitter Card - URL doit correspondre à la canonique
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [finalImage.url],
      creator: "@guillaume_ganne",
      site: "@guillaume_ganne",
    },

    // Métadonnées additionnelles pour les articles
    ...(type === "article" &&
      publishedTime && {
        category: "Développement Web",
        classification: "Article",
        other: {
          "article:published_time": publishedTime,
          "article:modified_time": modifiedTime || publishedTime,
          "article:author": "Guillaume Ganne",
          "article:section": "Développement Web",
        },
      }),
  };
}

/**
 * Métadonnées par défaut pour les pages sans métadonnées spécifiques
 */
export function getDefaultMetadata(pathname: string): Metadata {
  return generatePageMetadata({
    title: "Guillaume Ganne – Développeur web & web designer",
    description:
      "Sites vitrines & e-commerce performants. SEO, vitesse, sécurité. Devis en 24 h.",
    pathname,
    keywords: [
      "développeur web freelance",
      "création site internet",
      "web designer angoulême",
      "sites vitrines",
      "e-commerce",
      "SEO",
    ],
  });
}
