import React from "react";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { metadata } from "../metadata";
import { schema } from "../schema";
import ShareButtons from "@/components/blog/ShareButtons";
import CanonicalHead from "@/components/CanonicalHead";

export { metadata };

export default function CreationSiteInternetGuide() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {/* Canonical URL */}
      <CanonicalHead path="/blog/creation-site-internet-1001-astuces" />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="w-full py-36 px-4">
          <div className="w-[70%] mx-auto">
            {/* Titre principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-center">
              Création site internet : guide complet pour un site optimisé
            </h1>

            {/* Date */}
            <p className="text-center text-muted-foreground mb-8 text-base">
              {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {/* Vidéo YouTube */}
            <div className="w-full max-w-4xl mx-auto mb-8">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/4QuqWmbPIpQ?si=zvxSIOfHXYkCjQmm"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Section Partage Social */}
            <div className="w-full max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Temps de lecture et date */}
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>15 min de lecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        {new Date().toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Boutons de partage */}
                  <ShareButtons />
                </div>
              </div>
            </div>

            {/* Contenu de l'article */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Découvrez les 1001 astuces essentielles pour créer un site
                internet performant, optimisé pour le SEO et qui convertit vos
                visiteurs en clients. Ce guide complet vous accompagne de la
                conception à la mise en ligne de votre projet web.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6">
                1. Choisir les bons outils pour votre projet
              </h2>

              <p className="mb-6">
                La première étape cruciale est de sélectionner les technologies
                adaptées à vos besoins. Voici les options principales :
              </p>

              <h3 className="text-xl font-semibold mb-4">CMS populaires</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>WordPress</strong> : Idéal pour les blogs et sites
                  vitrines
                </li>
                <li>
                  <strong>Wix</strong> : Solution drag-and-drop intuitive
                </li>
                <li>
                  <strong>Webflow</strong> : Design avancé sans code
                </li>
                <li>
                  <strong>Shopify</strong> : Spécialisé e-commerce
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Frameworks modernes
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Next.js</strong> : Performance et SEO optimisés
                </li>
                <li>
                  <strong>React</strong> : Interface utilisateur dynamique
                </li>
                <li>
                  <strong>Vue.js</strong> : Apprentissage progressif
                </li>
                <li>
                  <strong>Angular</strong> : Applications complexes
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6">
                2. Optimisation SEO : les fondamentaux
              </h2>

              <p className="mb-6">
                Un bon référencement naturel commence par une structure
                technique solide :
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Métadonnées essentielles
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Titre de page optimisé (50-60 caractères)</li>
                <li>Meta description attractive (150-160 caractères)</li>
                <li>URLs propres et descriptives</li>
                <li>Structure des balises H1, H2, H3 cohérente</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Performance technique
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Vitesse de chargement optimisée</li>
                <li>Design responsive mobile-first</li>
                <li>HTTPS obligatoire</li>
                <li>Schema.org pour les données structurées</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6">
                3. Sécurité : protéger votre site
              </h2>

              <p className="mb-6">
                La sécurité web est primordiale pour protéger vos données et
                celles de vos utilisateurs :
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Certificat SSL</strong> : Chiffrement des données
                </li>
                <li>
                  <strong>Mots de passe forts</strong> : Complexité requise
                </li>
                <li>
                  <strong>Sauvegardes régulières</strong> : Prévention des
                  pertes
                </li>
                <li>
                  <strong>Mises à jour</strong> : Corrections de sécurité
                </li>
                <li>
                  <strong>RGPD</strong> : Conformité européenne
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6">
                4. Conversion : transformer les visiteurs en clients
              </h2>

              <p className="mb-6">
                L'objectif final est de convertir vos visiteurs. Voici les
                éléments clés :
              </p>

              <h3 className="text-xl font-semibold mb-4">UX/UI optimisée</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Navigation intuitive et claire</li>
                <li>Call-to-action visibles et attractifs</li>
                <li>Formulaires simplifiés</li>
                <li>Design cohérent avec votre marque</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Stratégies de conversion
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Landing pages optimisées</li>
                <li>Pop-ups intelligents et non intrusifs</li>
                <li>Social proof (témoignages, avis)</li>
                <li>Offres limitées dans le temps</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6">
                5. Maintenance et évolution
              </h2>

              <p className="mb-6">
                Un site web nécessite un suivi régulier pour rester performant :
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Analytics et suivi des performances</li>
                <li>Tests A/B pour optimiser la conversion</li>
                <li>Veille technologique et mises à jour</li>
                <li>Contenu frais et régulier</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  💡 Conseil d'expert
                </h3>
                <p className="text-blue-700">
                  Commencez simple et évoluez progressivement. Un site bien
                  conçu et optimisé dès le départ sera plus facile à maintenir
                  et à faire évoluer.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">
                Conclusion
              </h2>

              <p className="mb-6">
                Créer un site internet performant demande de la planification,
                des connaissances techniques et une approche centrée sur
                l'utilisateur. En suivant ces 1001 astuces, vous disposez d'un
                guide complet pour réussir votre projet web.
              </p>

              <p className="text-lg font-medium">
                Besoin d'aide pour votre projet ? Contactez-moi pour un
                accompagnement personnalisé !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
