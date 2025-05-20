// app/a-propos/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Guillaume Ganne",
  description:
    "Mentions légales et informations juridiques concernant le site web de Guillaume Ganne, développeur web et vidéaste à Angoulême. RGPD, cookies et droits d'auteur.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/mentions-legales",
  },
  keywords: [
    "mentions légales",
    "RGPD",
    "cookies",
    "droits auteur",
    "Guillaume Ganne",
    "Angoulême",
  ],
  openGraph: {
    title: "Mentions Légales | Guillaume Ganne",
    description: "Informations légales et juridiques",
    type: "website",
    locale: "fr_FR",
    url: "https://guillaumeganne.com/mentions-legales",
    siteName: "Guillaume Ganne",
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
  },
};

export default function Head() {
  return null; // Next injecte automatiquement
}
