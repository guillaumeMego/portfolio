// app/tarif/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs & Services | Guillaume Ganne",
  description:
    "Découvrez mes services de développement web et production vidéo. Site vitrine à partir de 1500€, vidéos promotionnelles à partir de 300€. Solutions sur mesure pour votre entreprise à Angoulême.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/tarif",
  },
  keywords: [
    "tarifs",
    "services",
    "site vitrine",
    "développement web",
    "production vidéo",
    "création site internet",
    "SEO",
    "Angoulême",
    "prix site web",
    "devis vidéo",
  ],
  openGraph: {
    title: "Tarifs & Services | Guillaume Ganne",
    description:
      "Services de développement web et production vidéo à Angoulême",
    type: "website",
    locale: "fr_FR",
    url: "https://guillaumeganne.com/tarif",
    siteName: "Guillaume Ganne",
    images: [
      {
        url: "/images/lavision.png",
        width: 1200,
        height: 630,
        alt: "Services web et vidéo Guillaume Ganne",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
};

export default function Head() {
  return null;
}
