import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création site web Angoulême – Freelance dès 990 €",
  description:
    "Développeur web freelance à Angoulême. Sites vitrines, e-commerce & apps sur-mesure dès 990 €. Performance, SEO local, sécurité.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/creation-site-web-angouleme/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/creation-site-web-angouleme/",
    title: "Création site web Angoulême – Freelance dès 990 €",
    description:
      "Développeur web freelance à Angoulême. Sites vitrines, e-commerce & apps sur-mesure dès 990 €. Performance, SEO local, sécurité.",
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
    title: "Création site web Angoulême – Freelance dès 990 €",
    description:
      "Développeur web freelance à Angoulême. Sites vitrines, e-commerce & apps sur-mesure dès 990 €. Performance, SEO local, sécurité.",
  },
};
