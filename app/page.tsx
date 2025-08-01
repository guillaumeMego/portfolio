import HomeClient from "./HomeClient";

export const metadata = {
  title: "Guillaume Ganne – Développeur web & web designer",
  description:
    "Sites vitrines & e-commerce performants. SEO, vitesse, sécurité. Devis en 24 h.",
  alternates: { canonical: "https://www.guillaumeganne.com/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/",
    title: "Guillaume Ganne – Développeur web & web designer",
    description:
      "Sites vitrines & e-commerce performants. SEO, vitesse, sécurité. Devis en 24 h.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function Home() {
  return <HomeClient />;
}
