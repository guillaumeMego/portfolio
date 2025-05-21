// app/contact/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact | Guillaume Création – Développeur Web & Vidéaste à Angoulême",
  description:
    "Contactez Guillaume Création, développeur web full-stack et vidéaste à Angoulême, pour un devis rapide sur vos projets de site internet, d'identité visuelle ou de production vidéo.",
  alternates: {
    canonical: "https://guillaumeganne.com/contact",
  },
  keywords: [
    "contact guillaume création",
    "devis site internet angoulême",
    "développeur web freelance",
    "vidéaste angoulême",
    "demande de devis web",
    "production vidéo",
    "design UI UX",
    "SEO local angoulême",
  ],
  openGraph: {
    title: "Contact | Guillaume Création",
    description:
      "Discutons de votre projet web ou vidéo avec Guillaume Création, freelance à Angoulême.",
    type: "website",
    locale: "fr_FR",
    url: "https://guillaumecreation.com/contact",
    siteName: "Guillaume Création",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contactez Guillaume Création",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Guillaume Création",
    description:
      "Prenez contact avec Guillaume Création pour vos besoins en développement web, design UX/UI ou vidéo à Angoulême.",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function Head() {
  return null; // Next injecte automatiquement
}
