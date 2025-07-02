import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de Guillaume Ganne | Développeur web & designer à Angoulême",
  description:
    "Découvrez le parcours, les valeurs et l'expertise de Guillaume Ganne, créateur de sites web à Angoulême. Expert en création de sites sur-mesure, optimisation SEO local et accessibilité Opquast.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/a-propos",
  },
  keywords: [
    "guillaume ganne",
    "développeur web",
    "designer",
    "parcours",
    "angoulême",
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
