export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Guillaume Ganne",
  url: "https://guillaume-ganne.fr/creation-site-web-angouleme",
  areaServed: [
    {
      "@type": "City",
      name: "Angoulême",
    },
    {
      "@type": "City",
      name: "L'Isle d'Espagnac",
    },
    {
      "@type": "City",
      name: "Soyaux",
    },
    {
      "@type": "City",
      name: "La Couronne",
    },
    {
      "@type": "City",
      name: "Saint-Yrieix",
    },
    {
      "@type": "City",
      name: "Gond-Pontouvre",
    },
    {
      "@type": "City",
      name: "Ruelle-sur-Touvre",
    },
  ],
  image: "https://guillaume-ganne.fr/images/guillaume.png",
  description:
    "Création de sites web à Angoulême et son agglomération : sites vitrines, e-commerce, apps sur-mesure, SEO local.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Angoulême",
    addressRegion: "Nouvelle-Aquitaine",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@guillaume-ganne.fr",
  },
};
