"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
            <p>
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
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <p>
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
            <h2 className="text-2xl font-semibold mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et
              internationale sur le droit d&apos;auteur et la propriété
              intellectuelle. Tous les droits de reproduction sont réservés. La
              reproduction de tout ou partie de ce site sur quelque support que
              ce soit est formellement interdite sauf autorisation expresse de
              Guillaume Ganne.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Protection des données personnelles
            </h2>
            <p>
              Les informations recueillies via le formulaire de contact sont
              destinées à Guillaume Ganne pour répondre à vos demandes. Elles
              sont conservées pendant 1 an et sont destinées à Guillaume Ganne
              uniquement. Conformément au RGPD, vous pouvez exercer votre droit
              d&apos;accès aux données vous concernant et les faire rectifier en
              contactant : contact@guillaumeganne.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p>
              Ce site n&apos;utilise que des cookies techniques essentiels au
              fonctionnement du site. Aucun cookie de tracking ou publicitaire
              n&apos;est utilisé.
            </p>
          </section>
        </article>
      </motion.div>
    </div>
  );
}
