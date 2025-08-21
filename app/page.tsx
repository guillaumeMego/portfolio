import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Développeur web freelance Charente | Guillaume Ganne - Sites performants",
  description:
    "Développeur web freelance en Charente : création sites vitrines & e-commerce sur-mesure. Expert Next.js, React, WordPress. Performance garantie, SEO optimisé. Devis gratuit 24h.",
  alternates: { canonical: "https://www.guillaumeganne.com" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/",
    title:
      "Développeur web freelance Charente | Guillaume Ganne - Sites performants",
    description:
      "Développeur web freelance en Charente : création sites vitrines & e-commerce sur-mesure. Expert Next.js, React, WordPress. Performance garantie, SEO optimisé. Devis gratuit 24h.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function Home() {
  return <HomeClient />;
}
