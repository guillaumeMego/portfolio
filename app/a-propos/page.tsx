import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de Guillaume Ganne | Développeur web & designer à Angoulême",
  description:
    "Découvrez mon parcours, mes compétences et ma passion pour la création de sites web performants à Angoulême.",
  alternates: { canonical: "https://www.guillaumeganne.com/a-propos" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/a-propos",
    title:
      "À propos de Guillaume Ganne | Développeur web & designer à Angoulême",
    description:
      "Découvrez mon parcours, mes compétences et ma passion pour la création de sites web performants à Angoulême.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function About() {
  return <AboutClient />;
}
