import type { Metadata } from "next";
import TarifClient from "./TarifClient";

export const metadata: Metadata = {
  title: "Tarifs création site web | Guillaume Ganne",
  description:
    "Forfaits clairs pour sites vitrines, e-commerce et solutions sur-mesure. Développeur web freelance à Angoulême. TVA non applicable, art. 293 B du CGI.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/tarif/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/tarif/",
    title: "Tarifs création site web | Guillaume Ganne",
    description:
      "Forfaits clairs pour sites vitrines, e-commerce et solutions sur-mesure. Développeur web freelance à Angoulême. TVA non applicable, art. 293 B du CGI.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function Tarif() {
  return <TarifClient />;
}
