// app/tarif/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs création site web | Guillaume Ganne",
  description:
    "Consultez les tarifs pour la création de sites web, e-commerce et prestations vidéo à Angoulême.",
  keywords: [
    "tarifs site web",
    "prix création site",
    "angoulême",
    "guillaume ganne",
  ],
  alternates: {
    canonical: "https://www.guillaumeganne.com/tarif",
  },
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
