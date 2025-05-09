import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "À Propos | Guillaume Ganne – Développeur Web Freelance & Designer UX/UI à Angoulême",
  description:
    "En savoir plus sur Guillaume Ganne, développeur web freelance & designer UX/UI basé à Angoulême. Expert en création de sites sur-mesure, optimisation SEO local et accessibilité Opquast.",
  keywords: [
    "développeur web freelance Angoulême",
    "designer UX UI Angoulême",
    "création site web Angoulême",
    "WordPress Angoulême",
    "SEO local Angoulême",
    "Opquast",
    "Next.js",
    "React",
    "TypeScript",
  ],
  openGraph: {
    title: "À Propos | Guillaume Ganne",
    description:
      "Découvrez mon parcours en tant que développeur web freelance & designer UX/UI à Angoulême. Création de sites sur-mesure et SEO local optimisé.",
    type: "website",
    locale: "fr_FR",
    url: "https://guillaumeganne.com/a-propos",
    siteName: "Guillaume Ganne",
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | Guillaume Ganne",
    description:
      "Guillaume Ganne, développeur web freelance & designer UX/UI à Angoulême. Création de sites sur-mesure et SEO local optimisé.",
  },
};

export default function Head() {
  return null; // Next injecte automatiquement
}
