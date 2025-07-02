import React from "react";

export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 pt-40">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Politique de confidentialité
      </h1>
      <p className="mb-4">
        Votre vie privée est importante. Ce site ne collecte aucune donnée
        personnelle sans votre consentement. Les seules informations recueillies
        sont celles que vous fournissez via le formulaire de contact, utilisées
        uniquement pour répondre à votre demande.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-2">Formulaire de contact</h2>
      <p className="mb-4">
        Les informations envoyées via le formulaire de contact (nom, email,
        message) sont utilisées uniquement pour vous répondre. Elles ne sont
        jamais transmises à des tiers.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-2">Cookies</h2>
      <p className="mb-4">
        Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des
        cookies techniques nécessaires au fonctionnement du site peuvent être
        utilisés.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-2">Vos droits</h2>
      <p className="mb-4">
        Conformément au RGPD, vous pouvez demander la consultation, la
        modification ou la suppression de vos données en écrivant à l'adresse
        indiquée dans les mentions légales.
      </p>
      <p className="mt-8 text-sm text-gray-500">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>
    </main>
  );
}

export const metadata = {
  title: "Politique de confidentialité | Guillaume Ganne",
  description:
    "Comment vos données personnelles sont collectées, utilisées et protégées sur guillaumeganne.com.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/politique-confidentialite",
  },
  keywords: [
    "politique de confidentialité",
    "données personnelles",
    "guillaume ganne",
  ],
};
