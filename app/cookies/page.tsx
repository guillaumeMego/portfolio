import React from "react";

export default function Cookies() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 pt-40">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Politique de cookies
      </h1>
      <p className="mb-4">
        Ce site n'utilise pas de cookies de suivi, publicitaires ou analytiques.
        Seuls des cookies techniques nécessaires au bon fonctionnement du site
        peuvent être déposés sur votre appareil.
      </p>
      <p className="mb-4">
        Vous n'avez donc aucune bannière de consentement à accepter sur ce site.
      </p>
      <p className="mt-8 text-sm text-gray-500">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>
    </main>
  );
}

export const metadata = {
  title: "Politique de cookies | Guillaume Ganne",
  description:
    "Politique de cookies du site guillaumeganne.com. Ce site n'utilise pas de cookies de suivi ou publicitaires.",
  alternates: { canonical: "https://www.guillaumeganne.com/cookies" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/cookies",
    title: "Politique de cookies | Guillaume Ganne",
    description:
      "Politique de cookies du site guillaumeganne.com. Ce site n'utilise pas de cookies de suivi ou publicitaires.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};
