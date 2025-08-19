import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de Guillaume Ganne | Développeur web & designer à Angoulême",
  description:
    "Découvrez le parcours, les valeurs et l'expertise de Guillaume Ganne, créateur de sites web à Angoulême.",
  keywords: [
    "guillaume ganne",
    "développeur web",
    "designer",
    "parcours",
    "angoulême",
  ],
  alternates: {
    canonical: "https://www.guillaumeganne.com/a-propos/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "À Propos | Guillaume Ganne",
    description:
      "Découvrez mon parcours en tant que développeur web freelance & designer UX/UI à Angoulême. Création de sites sur-mesure et SEO local optimisé.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.guillaumeganne.com/a-propos/",
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
