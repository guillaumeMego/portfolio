import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site lent = perte de clients | Guillaume Ganne",
  description:
    "Chaque seconde de chargement = 20% de clients perdus. Découvrez pourquoi un site lent détruit vos ventes et comment atteindre 90+ PageSpeed.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/blog/site-lent-perte-clients/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: "https://www.guillaumeganne.com/blog/site-lent-perte-clients/",
    title: "Site lent = perte de clients | Guillaume Ganne",
    description:
      "Chaque seconde de chargement = 20% de clients perdus. Découvrez pourquoi un site lent détruit vos ventes et comment atteindre 90+ PageSpeed.",
    siteName: "Guillaume Ganne",
    images: [
      {
        url: "/images/developpement-webapp-react.webp",
        width: 1200,
        height: 630,
        alt: "Site lent - Impact sur les ventes et le référencement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site lent = perte de clients | Guillaume Ganne",
    description:
      "Chaque seconde de chargement = 20% de clients perdus. Découvrez pourquoi un site lent détruit vos ventes et comment atteindre 90+ PageSpeed.",
  },
};
