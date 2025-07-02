import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création site web à Angoulême | Guillaume Ganne",
  description:
    "Spécialiste de la création de sites web professionnels à Angoulême, optimisés pour le SEO local.",
  openGraph: {
    title: "création site web angoulême et agglomération | Guillaume Ganne",
    description:
      "Besoin d'un site web performant à Angoulême et son agglomération ? Je conçois sites vitrines, e-commerce et apps sur-mesure avec SEO local boosté. Devis gratuit !",
    url: "https://guillaume-ganne.fr/creation-site-web-angouleme",
    images: [
      {
        url: "/images/creation-site-vitrine-angouleme.jpg",
        width: 1200,
        height: 630,
        alt: "création site web angoulême et agglomération – maquette responsive",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "création site web angoulême et agglomération | Guillaume Ganne",
    description:
      "Besoin d'un site web performant à Angoulême et son agglomération ? Je conçois sites vitrines, e-commerce et apps sur-mesure avec SEO local boosté. Devis gratuit !",
    images: ["/images/creation-site-vitrine-angouleme.jpg"],
  },
  keywords: [
    "création site web angoulême",
    "développeur web",
    "web designer",
    "seo local",
    "site vitrine",
    "site professionnel",
    "angoulême",
  ],
  alternates: {
    canonical: "https://www.guillaumeganne.com/creation-site-web-angouleme",
  },
  robots: { index: true, follow: true },
};
