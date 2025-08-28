import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site joli mais invisible ? Voici pourquoi | Guillaume Ganne",
  description:
    "Un beau site ne suffit pas. Découvrez pourquoi votre site reste invisible et comment booster votre visibilité sur Google.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/blog/site-joli-mais-invisible/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: "https://www.guillaumeganne.com/blog/site-joli-mais-invisible/",
    title: "Site joli mais invisible ? Voici pourquoi | Guillaume Ganne",
    description:
      "Un beau site ne suffit pas. Découvrez pourquoi votre site reste invisible et comment booster votre visibilité sur Google.",
    siteName: "Guillaume Ganne",
    images: [
      {
        url: "/images/creation-site-vitrine-angouleme.webp",
        width: 1200,
        height: 630,
        alt: "Site invisible sur Google - Solutions SEO et visibilité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site joli mais invisible ? Voici pourquoi | Guillaume Ganne",
    description:
      "Un beau site ne suffit pas. Découvrez pourquoi votre site reste invisible et comment booster votre visibilité sur Google.",
  },
};
