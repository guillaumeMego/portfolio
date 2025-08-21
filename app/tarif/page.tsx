import type { Metadata } from "next";
import TarifClient from "./TarifClient";

export const metadata: Metadata = {
  title:
    "Tarifs création site internet vitrine & e-commerce | Prix transparents",
  description:
    "Tarifs création site internet transparents : site vitrine dès 990€, e-commerce 2490€. Développeur web freelance Angoulême. Devis gratuit 24h, sans frais cachés.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/tarif/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/tarif/",
    title:
      "Tarifs création site internet vitrine & e-commerce | Prix transparents",
    description:
      "Tarifs création site internet transparents : site vitrine dès 990€, e-commerce 2490€. Développeur web freelance Angoulême. Devis gratuit 24h, sans frais cachés.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function Tarif() {
  return <TarifClient />;
}
