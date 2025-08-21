import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de Guillaume Ganne | Développeur web freelance Angoulême",
  description:
    "Développeur web freelance passionné basé à Angoulême. Parcours, expertise technique (Next.js, React, WordPress) et méthode de travail pour créer vos sites performants.",
  alternates: { canonical: "https://www.guillaumeganne.com/a-propos/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/a-propos",
    title: "À propos de Guillaume Ganne | Développeur web freelance Angoulême",
    description:
      "Développeur web freelance passionné basé à Angoulême. Parcours, expertise technique (Next.js, React, WordPress) et méthode de travail pour créer vos sites performants.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function About() {
  return <AboutClient />;
}
