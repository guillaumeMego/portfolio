"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Shield, Zap, Users } from "lucide-react";
import TarifFAQ from "@/components/TarifFAQ";

export default function TarifClient() {
  const webServices = [
    {
      title: "Site Vitrine Essentiel",
      subtitle: "Pour les TPE & Artisans",
      description:
        "Idéal pour établir votre présence en ligne et attirer vos premiers clients locaux.",
      features: [
        "Design responsive adapté à votre image",
        "Optimisation SEO locale Angoulême",
        "Formulaire de contact sécurisé",
        "Formation pour gérer vos contenus",
        "Hébergement offert 1 an",
      ],
      price: "990 €",
      delai: "2–3 semaines",
      src: "/images/creation-site-vitrine-angouleme.webp",
      blurSrc: "/images/creation-site-vitrine-angouleme.blur.webp",
      popular: false,
      cta: "Créer mon site vitrine",
      // Offre exceptionnelle
      promoPrice: "500 €",
      promoLabel: "Offre exceptionnelle • Clé en main",
      promoNote: "Offre limitée – se termine bientôt",
    },
    {
      title: "Site Vitrine Premium",
      subtitle: "Pour les PME & Commerces",
      description:
        "Une présence web professionnelle avec stratégie SEO complète pour être visible dès le lancement.",
      features: [
        "Maquette Figma personnalisée",
        "Optimisation SEO avancée",
        "Intégration Google Business",
        "Suivi analytics détaillé",
        "Support technique 6 mois",
      ],
      price: "1 490 €",
      delai: "3–4 semaines",
      src: "/images/vitrine.webp",
      blurSrc: "/images/vitrine.blur.webp",
      popular: true,
      cta: "Choisir l'offre Premium",
    },
    {
      title: "E-commerce Starter",
      subtitle: "Pour les Commerçants",
      description:
        "Votre boutique en ligne sécurisée pour vendre vos produits 24h/24.",
      features: [
        "Catalogue jusqu'à 50 produits",
        "Paiement CB & PayPal sécurisé",
        "Gestion des stocks simple",
        "Formation vendeur 2h",
        "Maintenance 1 an incluse",
      ],
      price: "2 490 €",
      delai: "4–6 semaines",
      src: "/images/ecommerce-woocommerce-charente.webp",
      blurSrc: "/images/ecommerce-woocommerce-charente.blur.webp",
      popular: false,
      cta: "Lancer ma boutique",
    },
    {
      title: "Application Sur-Mesure",
      subtitle: "Pour les Entreprises",
      description:
        "Solutions web personnalisées pour digitaliser vos processus métiers.",
      features: [
        "Développement full-stack Next.js",
        "Back-office administrateur",
        "API & Intégrations externes",
        "Formation équipe incluse",
        "Maintenance évolutive",
      ],
      price: "À partir de 3 500 €",
      delai: "8–12 semaines",
      src: "/images/developpement-webapp-react.webp",
      blurSrc: "/images/developpement-webapp-react.blur.webp",
      popular: false,
      cta: "Discuter de mon projet",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-foreground relative mt-24 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Tarifs création site internet vitrine & e-commerce
          </h1>

          {/* Introduction */}
          <div className="text-left max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En tant que <strong>développeur web freelance à Angoulême</strong>
              , je crois en la transparence totale des prix. Contrairement à
              beaucoup d'agences qui communiquent rarement sur leurs tarifs,
              j'ai choisi d'afficher clairement mes forfaits. Cela permet à
              chaque entrepreneur, artisan, association ou PME de savoir à quoi
              s'attendre dès le départ, sans mauvaise surprise.
            </p>
            <p className="text-base text-gray-600 mb-6">
              Mes <strong>tarifs de création de site internet</strong> incluent
              systématiquement : design responsive, optimisation SEO, sécurité
              renforcée et accompagnement personnalisé. Que vous soyez basé en
              Charente (Angoulême, Cognac, Ruffec, La Rochefoucauld) ou ailleurs
              en France, vous bénéficiez des mêmes prestations de qualité.
            </p>
            <p className="text-sm text-gray-500 italic">
              TVA non applicable, art. 293 B du CGI
            </p>
          </div>
        </motion.div>

        {/* Section : Pourquoi afficher mes tarifs */}
        <motion.section
          className="bg-white rounded-2xl p-8 mb-16 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Pourquoi afficher mes tarifs de création de site internet ?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Beaucoup d'agences web préfèrent garder leurs prix confidentiels.
              Le problème : cela conduit souvent à des devis opaques, remplis de
              frais cachés et difficiles à comparer.
            </p>
            <p className="text-base text-gray-600 mb-6">
              En tant que freelance, je fais le choix inverse : des tarifs
              clairs, affichés en ligne, et adaptés aux besoins réels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#CC5500] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">
                    Vous savez exactement ce que vous payez
                  </p>
                  <p className="text-sm text-gray-600">
                    Transparence totale, sans surprise
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#CC5500] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">
                    Vous gagnez du temps
                  </p>
                  <p className="text-sm text-gray-600">
                    Pas de rendez-vous inutile si le budget ne correspond pas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-[#CC5500] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">
                    Vous êtes rassuré
                  </p>
                  <p className="text-sm text-gray-600">
                    Pas de coûts additionnels imprévus
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-gray-600 mt-6">
              C'est cette approche transparente qui me permet de construire une
              relation de confiance avec mes clients, qu'ils soient artisans,
              commerçants ou PME.
            </p>
          </div>
        </motion.section>

        {/* Section : Différence entre types de sites */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Comprendre la différence entre un site vitrine, e-commerce et
            application web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#CC5500]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#CC5500]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Site Vitrine
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Idéal pour les indépendants, TPE et associations souhaitant
                présenter leurs services, afficher leurs coordonnées et attirer
                des clients locaux via Google.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#CC5500]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#CC5500]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Site E-commerce
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Permet de vendre vos produits en ligne 24h/24, avec une gestion
                simple des commandes, paiements sécurisés et intégration
                d'outils marketing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#CC5500]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#CC5500]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Application Web
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                S'adresse aux entreprises ayant besoin d'outils digitaux
                spécifiques : intranet, CRM, gestion des stocks, réservation en
                ligne, etc.
              </p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            Les tarifs varient donc naturellement selon la complexité du projet
            : de <strong>990 €</strong> pour un site vitrine simple à{" "}
            <strong>3500 €+</strong> pour une application métier personnalisée.
          </p>
        </motion.section>

        {/* Web Services Cards */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {webServices.map((svc, idx) => (
              <motion.div
                key={svc.title}
                className={`relative bg-white rounded-3xl shadow-[0_15px_35px_0_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_0_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col h-full overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                {svc.popular && (
                  <div className="absolute top-6 right-6 bg-[#E67E22] backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-[0_4px_12px_0_rgba(230,126,34,0.3)] z-10">
                    Recommandé
                  </div>
                )}
                <div className="relative h-56 w-full">
                  <Image
                    src={svc.src}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={svc.blurSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{svc.title}</h3>
                    <p className="text-sm font-medium opacity-90">
                      {svc.subtitle}
                    </p>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-8">{svc.description}</p>
                  <div className="space-y-4 mb-8">
                    {svc.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto space-y-6">
                    {svc.promoPrice ? (
                      <div className="flex flex-col items-start gap-2">
                        <div className="inline-flex items-center gap-2">
                          <span className="text-lg text-gray-500 line-through">
                            {svc.price}
                          </span>
                          <span className="text-3xl font-extrabold text-[#CC5500]">
                            {svc.promoPrice}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#CC5500]/10 text-[#CC5500]">
                            {svc.promoLabel}
                          </span>
                          <span className="text-xs text-gray-600">
                            {svc.promoNote}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold text-primary">
                          {svc.price}
                        </span>
                      </div>
                    )}
                    <p className="text-xs text-gray-500 italic mb-2">
                      TVA non applicable, art. 293 B du CGI
                    </p>
                    <p className="text-sm text-gray-600">Délai : {svc.delai}</p>
                    <Link
                      href="/contact/"
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
                    >
                      {svc.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section : ROI - Investissement ou coût */}
        <motion.section
          className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Investir dans un site web : un coût ou un retour sur investissement
            ?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Un site internet n'est pas une dépense, c'est un{" "}
              <strong>investissement rentable</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#CC5500]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#CC5500]">
                    Exemple Site Vitrine
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Investissement :</strong> Site vitrine à{" "}
                    <span className="text-[#CC5500] font-bold text-lg">
                      1 500 €
                    </span>
                  </p>
                  <p className="text-gray-700">
                    <strong>Résultat :</strong> Attire 2 nouveaux clients par
                    mois
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-700 font-bold text-lg">
                      💰 Génère <strong>20 000 € de CA</strong> par an
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#CC5500]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#CC5500]">
                    Exemple E-commerce
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Investissement :</strong> Site e-commerce à{" "}
                    <span className="text-[#CC5500] font-bold text-lg">
                      2 800 €
                    </span>
                  </p>
                  <p className="text-gray-700">
                    <strong>Résultat :</strong> SEO bien travaillé + ventes
                    24h/24
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-700 font-bold text-lg">
                      🚀 Peut rapporter{" "}
                      <strong>plusieurs dizaines de milliers d'euros</strong>{" "}
                      dès la première année
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8">
              Avec mes prestations, vous obtenez non seulement un site web mais
              aussi un <strong>outil de conversion</strong>
              conçu pour booster vos ventes et votre visibilité.
            </p>
          </div>
        </motion.section>

        {/* Section : Freelance vs Agence */}
        <motion.section
          className="bg-white rounded-2xl p-8 mb-16 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Pourquoi me choisir comme freelance plutôt qu'une agence ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#CC5500]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Proximité</h3>
              <p className="text-sm text-gray-600">
                Je suis basé à Angoulême, disponible pour un rendez-vous en 48h.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#CC5500]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">
                Un seul interlocuteur
              </h3>
              <p className="text-sm text-gray-600">
                Vous parlez directement avec le développeur, pas avec un
                commercial.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#CC5500]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">
                Performance garantie
              </h3>
              <p className="text-sm text-gray-600">
                Tous mes sites atteignent 90+ sur Google PageSpeed et chargent
                en moins de 2 secondes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#CC5500]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">
                Tarifs compétitifs
              </h3>
              <p className="text-sm text-gray-600">
                Pas de frais fixes d'agence, vous payez uniquement la valeur
                ajoutée.
              </p>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <TarifFAQ />

        {/* Call-to-action final */}
        <motion.section
          className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            🎯 Vous avez un projet en tête ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Réservez dès maintenant un appel gratuit de 30 minutes :{" "}
            <strong>devis sous 24h garanti</strong>, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="https://calendly.com/guillaume-ganne/30min?background_color=ecf0f1&text_color=0e141a&primary_color=2c3e50"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
            >
              Réserver un appel gratuit
            </a>
          </div>
        </motion.section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Guillaume Ganne - Services Web",
            url: "https://www.guillaumeganne.com/tarif",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Angoulême",
              addressRegion: "Charente",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "45.648377",
              longitude: "0.156237",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services de création web",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Site Vitrine Essentiel",
                    description:
                      "Site vitrine optimisé SEO local pour TPE & Artisans",
                  },
                  price: "500",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Site Vitrine Premium",
                    description:
                      "Site vitrine sur-mesure avec stratégie SEO complète",
                  },
                  price: "1490",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Starter",
                    description: "Boutique en ligne sécurisée avec paiement CB",
                  },
                  price: "2490",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Application Sur-Mesure",
                    description:
                      "Développement full-stack Next.js personnalisé",
                  },
                  price: "3500",
                  priceCurrency: "EUR",
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
