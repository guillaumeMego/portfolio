// app/a-propos/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Guillaume Ganne",
  description:
    "Informations légales, RGPD et droits d'auteur du site guillaumeganne.com.",
  alternates: {
    canonical: "https://guillaumeganne.com/mentions-legales",
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
