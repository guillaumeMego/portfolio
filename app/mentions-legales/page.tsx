import type { Metadata } from "next";
import MentionsLegalesClient from "./MentionsLegalesClient";

export const metadata: Metadata = {
  title: "Mentions légales | Guillaume Ganne",
  description:
    "Informations légales, RGPD et droits d'auteur du site guillaumeganne.com.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/mentions-legales",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/mentions-legales",
    title: "Mentions légales | Guillaume Ganne",
    description:
      "Informations légales, RGPD et droits d'auteur du site guillaumeganne.com.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function LegalPage() {
  return <MentionsLegalesClient />;
}
