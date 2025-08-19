import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site web à Angoulême dès 990 € | Guillaume Ganne",
  description:
    "Développeur web freelance à Angoulême. Création de sites vitrines, e-commerce et applications dès 990 €. Performance, SEO local et design moderne.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/creation-site-web-angouleme/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/creation-site-web-angouleme/",
    title: "Création de site web à Angoulême dès 990 € | Guillaume Ganne",
    description:
      "Développeur web freelance à Angoulême. Création de sites vitrines, e-commerce et applications dès 990 €. Performance, SEO local et design moderne.",
    siteName: "Guillaume Ganne",
    images: [
      {
        url: "/images/creation-site-vitrine-angouleme.jpg",
        width: 1200,
        height: 630,
        alt: "création site web angoulême et agglomération – maquette responsive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de site web à Angoulême dès 990 € | Guillaume Ganne",
    description:
      "Développeur web freelance à Angoulême. Création de sites vitrines, e-commerce et applications dès 990 €. Performance, SEO local et design moderne.",
  },
};
