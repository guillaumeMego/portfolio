"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 pt-40">
      <h1 className="text-3xl font-bold text-primary mb-8">Mentions Légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">Éditeur du site</h2>
        <p className="mb-4">
          Guillaume Ganne
          <br />
          Angoulême, France
          <br />
          Téléphone : 06 62 82 69 51
          <br />
          Email : contact@guillaumeganne.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">Hébergement</h2>
        <p className="mb-4">
          OVH
          <br />
          2 rue Kellermann
          <br />
          59100 Roubaix
          <br />
          France
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">
          Propriété intellectuelle
        </h2>
        <p className="mb-4">
          L&apos;ensemble de ce site relève de la législation française et
          internationale sur le droit d&apos;auteur et la propriété
          intellectuelle. Tous les droits de reproduction sont réservés. La
          reproduction de tout ou partie de ce site sur quelque support que ce
          soit est formellement interdite sauf autorisation expresse de
          Guillaume Ganne.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">
          Protection des données personnelles
        </h2>
        <p className="mb-4">
          Les informations recueillies via le formulaire de contact sont
          destinées à Guillaume Ganne pour répondre à vos demandes. Elles sont
          conservées pendant 1 an et sont destinées à Guillaume Ganne
          uniquement. Conformément au RGPD, vous pouvez exercer votre droit
          d&apos;accès aux données vous concernant et les faire rectifier en
          contactant : contact@guillaumeganne.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">Cookies</h2>
        <p className="mb-4">
          Ce site n&apos;utilise que des cookies techniques essentiels au
          fonctionnement du site. Aucun cookie de tracking ou publicitaire
          n&apos;est utilisé.
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-500">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>
    </main>
  );
}
