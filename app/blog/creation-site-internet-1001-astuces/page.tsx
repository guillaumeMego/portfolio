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
          <div className="w-full md:w-[70%] mx-auto px-[5px] md:px-0">
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

            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
              <h2 className="text-xl font-semibold text-primary mb-4">
                🎯 Objectif de ce guide
              </h2>
              <p className="text-base leading-relaxed">
                Vous aider, en tant qu&apos;entreprise, indépendant ou petite
                entreprise, à créer un site internet professionnel qui attire du
                trafic, convertit des visiteurs en clients, respecte la loi
                (RGPD), tient dans le temps, et reste simple à gérer au
                quotidien grâce aux bons outils (CMS, créateur de sites,
                frameworks) et à une méthode étape par étape.
              </p>
            </div>

            {/* Contenu principal */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Création site internet : définitions, enjeux et vocabulaire
              </h2>
              <p className="text-base mb-6">
                La création site internet recouvre toutes les étapes qui mènent
                d&apos;une idée à un site web en ligne : stratégie, contenu,
                design, développement, hébergement, sécurité, référencement sur
                les moteurs de recherche, mesure et maintenance. Comprendre le
                vocabulaire vous permet de choisir les bonnes options et
                d&apos;évaluer les coûts. Pour approfondir vos connaissances,
                consultez également les{" "}
                <a
                  href="https://www.w3.org/standards/webdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary underline font-medium"
                >
                  standards web du W3C
                </a>
                . Si vous cherchez un{" "}
                <a
                  href="/creation-site-web-angouleme"
                  className="text-secondary underline font-medium"
                >
                  création site internet à Angoulême
                </a>
                , je peux vous accompagner dans votre projet.
              </p>

              {/* Carte vocabulaire */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  📚 Vocabulaire essentiel
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="font-semibold text-green-700">
                        Site :
                      </span>
                      <span className="ml-2">terme générique</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-green-700">
                        Site vitrine :
                      </span>
                      <span className="ml-2">
                        présente l'activité, services, contact
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-green-700">
                        Boutique en ligne :
                      </span>
                      <span className="ml-2">
                        vend des produits avec panier
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="font-semibold text-green-700">
                        Landing page :
                      </span>
                      <span className="ml-2">
                        page unique orientée conversion
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-green-700">
                        Blog :
                      </span>
                      <span className="ml-2">section éditoriale pour SEO</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-green-700">
                        CMS :
                      </span>
                      <span className="ml-2">
                        système de gestion de contenu
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">
                Site, site internet, site web : que disent les mots ?
              </h3>
              <ul className="space-y-2 mb-8">
                <li>
                  <strong>Site</strong> : terme générique (on le précise souvent
                  : site internet).
                </li>
                <li>
                  <strong>Site internet / site web</strong> : même chose en
                  usage courant ; site internet est plus employé en français et
                  capte davantage de recherches.
                </li>
                <li>
                  <strong>Site vitrine</strong> : présente l'activité, les
                  services, l'adresse et un moyen de contact ; pas de vente
                  directe.
                </li>
                <li>
                  <strong>Boutique en ligne (site e‑commerce)</strong> : vend
                  des produits ou des services avec panier, paiement, gestion de
                  commandes.
                </li>
                <li>
                  <strong>Landing page</strong> : page unique très orientée
                  conversion (une offre = un objectif).
                </li>
                <li>
                  <strong>Blog</strong> : section éditoriale qui publie des
                  articles pour répondre aux questions des utilisateurs et
                  améliorer le SEO.
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4">
                Pourquoi un site professionnel aujourd'hui ?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2">
                    1. Crédibilité
                  </h4>
                  <p>
                    Un propre site soigné rassure, surtout s'il présente des
                    preuves (avis, portfolio) et un design propre.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2">
                    2. Acquisition
                  </h4>
                  <p>
                    Un bon SEO + des campagnes (Ads) dirigent un trafic qualifié
                    vers vos pages.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-purple-800 mb-2">
                    3. Contrôle
                  </h4>
                  <p>
                    À la différence d'une simple page sur une plateforme
                    sociale, vous maîtrisez vos données, vos modèles et vos
                    templates.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-orange-800 mb-2">4. Mesure</h4>
                  <p>
                    Vous suivez les conversions (formulaires, email, appels) et
                    optimisez par itération.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">
                Faire soi‑même vs déléguer
              </h2>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">
                  🛠️ Comparaison des solutions
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-orange-700 mb-2">
                      Créateur de sites
                    </h4>
                    <p className="text-sm mb-2">Wix, Squarespace, Webflow</p>
                    <p className="text-sm">
                      ✅ Idéal pour débutants
                      <br />❌ Limites personnalisation
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-orange-700 mb-2">CMS</h4>
                    <p className="text-sm mb-2">WordPress, Shopify</p>
                    <p className="text-sm">
                      ✅ Flexible et puissant
                      <br />
                      ⚠️ Nécessite maintenance
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-orange-700 mb-2">
                      Framework
                    </h4>
                    <p className="text-sm mb-2">Next.js, React</p>
                    <p className="text-sm">
                      ✅ Performance maximale
                      <br />❌ Nécessite développeur
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                <strong>Règle simple</strong> : si votre projet est standard et
                votre budget limité, commencez avec un CMS ; si votre besoin est
                très spécifique (application, intégrations), partez sur un
                framework.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6">
                Comprendre les types de sites internet
              </h2>
              <p className="mb-6">
                Choisir le type de site dès le départ évite des refontes
                coûteuses. Voici les principaux formats.
              </p>

              {/* Types de sites */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    🏢 Site Vitrine
                  </h3>
                  <p className="text-blue-700">
                    Présente votre entreprise, services, adresse et facilite la
                    prise de contact. Format le plus courant pour les petites
                    entreprises locales.{" "}
                    <a
                      href="/creation-site-web-angouleme"
                      className="text-blue-600 underline font-medium"
                    >
                      site vitrine à Angoulême
                    </a>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-green-800 mb-3">
                    🛒 E-commerce
                  </h3>
                  <p className="text-green-700">
                    Permet de vendre des produits, gérer un compte client,
                    suivre les commandes et accepter différents moyens de
                    paiement.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">
                    📝 Blog
                  </h3>
                  <p className="text-purple-700">
                    Répond aux questions des prospects, attire un trafic
                    qualifié via les moteurs de recherche et nourrit les réseaux
                    sociaux.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">
                    🎯 Landing Page
                  </h3>
                  <p className="text-orange-700">
                    Concentre une offre et un objectif (demande de devis, essai,
                    réservation). Page unique très orientée conversion.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    💼 Portfolio
                  </h3>
                  <p className="text-red-700">
                    Montre des cas concrets avec texte, images, design,
                    résultats et services associés. Indispensable pour les
                    métiers créatifs.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-indigo-800 mb-3">
                    ⚡ Application Web
                  </h3>
                  <p className="text-indigo-700">
                    Permet des workflows métiers : espace client, documents,
                    paiements, signatures, prises de rendez-vous.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">
                Création site internet : structurer l'architecture et le contenu
              </h2>
              <p className="mb-6">
                Votre site internet doit répondre à deux exigences : être
                compris par l'humain et par les moteurs de recherche. La
                structure et le contenu font 80 % du résultat.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4">
                L'arborescence de base (8 à 12 pages)
              </h3>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-indigo-800 mb-4">
                  📁 Structure recommandée
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium mr-2">
                        Page
                      </span>
                      <span>Accueil (valeur, preuves, CTA, coordonnées)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium mr-2">
                        Page
                      </span>
                      <span>Services (1 page par service important)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium mr-2">
                        Page
                      </span>
                      <span>À propos (histoire, équipe, activité, images)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium mr-2">
                        Page
                      </span>
                      <span>
                        Tarifs / Devis (transparence, options, forfait)
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium mr-2">
                        Page
                      </span>
                      <span>Blog (guides, études de cas, actualités)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium mr-2">
                        Page
                      </span>
                      <span>
                        Contact (formulaire, adresse, email, téléphone)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium mr-2">
                        Page
                      </span>
                      <span>Pages légales (mentions, politique, cookies)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium mr-2">
                        Option
                      </span>
                      <span>Portfolio, FAQ, landing page dédiée</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">
                Les sections indispensables d'une page d'accueil
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-3">
                    1. Héros clair
                  </h4>
                  <p>Promesse, bénéfice, CTA</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-3">2. Preuves</h4>
                  <p>Logos, chiffres, témoignages, extraits de portfolio</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h4 className="font-bold text-purple-800 mb-3">
                    3. Services
                  </h4>
                  <p>
                    3 à 6 cartes avec titre, fonctionnalités, lien « En savoir
                    plus »
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                  <h4 className="font-bold text-orange-800 mb-3">
                    4. Différenciation
                  </h4>
                  <p>Votre approche, vos outils, vos garanties</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
                  <h4 className="font-bold text-red-800 mb-3">5. FAQ</h4>
                  <p>3 à 5 questions clés</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                  <h4 className="font-bold text-indigo-800 mb-3">6. Contact</h4>
                  <p>Formulaire simple (pas plus de 5 champs)</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">
                Outils recommandés pour créer un site internet
              </h2>
              <p className="mb-6">
                Le choix des outils dépend de vos objectifs, de votre temps et
                de vos connaissances.
              </p>

              {/* Outils recommandés */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  🛠️ Constructeurs de sites web
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">
                      Wix / Squarespace
                    </h4>
                    <p className="text-sm text-gray-600">
                      Éditeurs visuels, templates modernes, hébergement inclus
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Webflow</h4>
                    <p className="text-sm text-gray-600">
                      Plus flexible, proche du design pro, bon contrôle du code
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">Limites</h4>
                    <p className="text-sm text-gray-600">
                      Dépendance plateforme, coûts mensuels, limites SEO
                      avancées
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  📝 CMS (WordPress, Shopify, Joomla)
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-2">WordPress</h4>
                    <p className="text-sm text-gray-600">
                      Le plus répandu, CMS ouvert, énorme écosystème
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-2">Shopify</h4>
                    <p className="text-sm text-gray-600">
                      Commerce en ligne clé en main, performant
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-2">
                      Points d'attention
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sécurité, mises à jour, mot de passe fort
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">
                Nom de domaine, hébergement, sécurité : fondations solides
              </h2>
              <p className="mb-6">
                Sans nom de domaine clair, hébergement fiable et sécurité
                minimale, votre site web ne tiendra pas dans la durée.
              </p>

              {/* Coûts et budget */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">
                  💰 Budget estimé
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-orange-700 mb-2">
                      Coûts de base
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Nom de domaine :</span>
                        <span className="font-semibold">10-15€/an</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hébergement :</span>
                        <span className="font-semibold">5-30€/mois</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Template premium :</span>
                        <span className="font-semibold">
                          50-200€ (optionnel)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-700 mb-2">
                      Coûts additionnels
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Formation :</span>
                        <span className="font-semibold">100-500€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Assistance technique :</span>
                        <span className="font-semibold">50-100€/heure</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maintenance :</span>
                        <span className="font-semibold">50-200€/mois</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">
                SEO : optimiser votre site internet pour les moteurs de
                recherche
              </h2>
              <p className="mb-6">
                Le référencement naturel (SEO) repose sur la pertinence de votre
                contenu, la qualité technique du site, et l'autorité.
              </p>

              {/* SEO Checklist */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-purple-800 mb-4">
                  🔍 Checklist SEO essentielle
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-purple-700 mb-2">On-page</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✅ Title optimisé (≤ 60 caractères)</li>
                      <li>✅ H1 unique et clair</li>
                      <li>✅ H2/H3 riches en mots-clés</li>
                      <li>✅ URLs courtes et descriptives</li>
                      <li>✅ Maillage interne</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-700 mb-2">
                      Technique
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>✅ Vitesse de chargement optimisée</li>
                      <li>✅ Mobile-friendly</li>
                      <li>✅ Sitemap XML</li>
                      <li>✅ Robots.txt</li>
                      <li>✅ Données structurées</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">
                FAQ – Création site internet : prix, gratuité, mise en ligne
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Quel est le prix pour créer un site internet ?
                  </h3>
                  <p>
                    Le coût dépend du type de site et des fonctionnalités. Pour
                    un site vitrine professionnel : entre 1 200 € et 3 000 €
                    selon l'ampleur (nombre de pages, design, contenu, SEO,
                    intégrations). Une boutique en ligne démarre souvent à 3
                    500–6 000 € pour un socle solide (catalogue, paiement,
                    livraison). Ajoutez l'hébergement (5–30 €/mois) et les frais
                    d'outils (emails, analytics premium, plugins).
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Est‑il possible de créer un site internet gratuitement ?
                  </h3>
                  <p>
                    Oui, il existe des sites internet gratuits (édition limitée,
                    sous‑domaine, bandeau). C'est utile pour un prototype ou un
                    projet perso, mais vous rencontrez vite des limites : pas de
                    domaine personnalisé, publicités, peu de fonctionnalités,
                    SEO restreint, difficulté d'export. Pour un usage
                    professionnel, prévoyez au moins un forfait de base (domaine
                    + hébergement + thème propre).
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Combien coûtera la création d'un site Web ?
                  </h3>
                  <p>
                    Pour un site web complet et professionnel, comptez le projet
                    global : création (conception + intégration), contenu
                    (textes, images), hébergement, sécurité, et maintenance
                    annuelle. Un bon ordre de grandeur : 1 200–2 400 € (vitrine
                    5–8 pages) ; 3 500–8 000 € (e‑commerce). Les options
                    (réservation, CRM, API, applications) augmentent le budget.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Est‑ce payant de mettre un site en ligne ?
                  </h3>
                  <p>
                    Oui. Il faut un nom de domaine (~10–20 €/an), un hébergement
                    (5–30 €/mois), et parfois des services additionnels
                    (certificats, CDN, emails pro). Certaines plateformes
                    incluent le tout dans un forfait mensuel. Vérifiez la
                    présence d'un essai sans carte bancaire requise.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">
                Création site internet : checklist de lancement rapide
              </h2>

              {/* Checklist finale */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  ✅ Checklist de lancement
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">
                        1
                      </span>
                      <span>
                        Objectif clair (générer des clients, demandes de devis,
                        vendre en ligne)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">
                        2
                      </span>
                      <span>
                        Arborescence : Accueil, Services, Pages clés, Blog,
                        Contact
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">
                        3
                      </span>
                      <span>
                        Contenu : texte utile, images optimisées, preuves, FAQ
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">
                        4
                      </span>
                      <span>Nom de domaine + hébergement + sécurité</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">
                        5
                      </span>
                      <span>
                        Design : templates propres, modèles cohérents,
                        expérience mobile
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">
                        6
                      </span>
                      <span>
                        SEO : mots-clés, Title/H1/H2/H3, maillage, sitemap
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">
                        7
                      </span>
                      <span>Mesure : conversions, tableaux de bord</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3">
                        8
                      </span>
                      <span>
                        Maintenance : mises à jour, sauvegardes, monitoring
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6">
                Remarques finales
              </h2>
              <p className="mb-8 text-lg">
                Créer un site internet professionnel n&apos;est pas qu&apos;une
                question de logiciel ou de plateforme : c&apos;est un projet de
                communication qui exige une réflexion sur les utilisateurs, le
                contenu, l&apos;expérience, les fonctionnalités, la sécurité et
                le référencement. Avec une méthode réaliste et des outils
                adaptés (du CMS aux outils IA pour gagner du temps), vous
                obtiendrez un site web durable, cohérent, et source régulière de
                clients. Pour découvrir nos{" "}
                <a
                  href="/tarif"
                  className="text-secondary underline font-medium"
                >
                  tarifs détaillés
                </a>{" "}
                et obtenir un devis personnalisé, n&apos;hésitez pas à nous
                contacter.
              </p>

              {/* Call-to-action final */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Prêt à créer votre site web professionnel ?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Contactez-moi pour un accompagnement personnalisé et
                  professionnel.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
