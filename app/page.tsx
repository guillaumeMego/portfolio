import HomeClient from "./HomeClient";

export const metadata = {
  title: "Création site web à Angoulême | Guillaume Ganne, dev & designer",
  description:
    "Création de sites web à Angoulême : vitrines, e-commerce, apps sur-mesure, SEO local. Devis gratuit en 24h.",
  keywords: [
    "création site web angoulême",
    "développeur web",
    "web designer",
    "site vitrine",
    "site professionnel",
    "SEO local",
    "angoulême",
  ],
  alternates: { canonical: "https://www.guillaumeganne.com/" },
  robots: { index: true, follow: true },
};

export default function Home() {
  return <HomeClient />;
}
