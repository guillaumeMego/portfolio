"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
        "Formation à la mise à jour",
        "Hébergement offert 1 an",
      ],
      price: "1500€",
      delai: "2-3 semaines",
      src: "/images/creation-site-vitrine-angouleme.webp",
      blurSrc: "/images/creation-site-vitrine-angouleme.blur.webp",
      popular: false,
    },
    {
      title: "Site Vitrine Premium",
      subtitle: "Pour les PME & Commerces",
      description:
        "Une présence web professionnelle avec maquette sur-mesure et stratégie SEO complète.",
      features: [
        "Maquette Figma personnalisée",
        "Optimisation SEO avancée",
        "Intégration Google Business",
        "Suivi analytics détaillé",
        "Support technique 6 mois",
      ],
      price: "2200€",
      delai: "3-4 semaines",
      src: "/images/vitrine.webp",
      blurSrc: "/images/vitrine.blur.webp",
      popular: true,
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
      price: "2800€",
      delai: "4-6 semaines",
      src: "/images/ecommerce-woocommerce-charente.webp",
      blurSrc: "/images/ecommerce-woocommerce-charente.blur.webp",
      popular: false,
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
      price: "3500€",
      delai: "8-12 semaines",
      src: "/images/developpement-webapp-react.webp",
      blurSrc: "/images/developpement-webapp-react.blur.webp",
      popular: false,
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
            Solutions Web Professionnelles
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Des forfaits adaptés à votre budget pour développer votre activité
            en ligne
          </p>
          <p className="text-base text-gray-600">
            Tous mes projets incluent : design responsive, optimisation SEO,
            hébergement sécurisé et support personnalisé
          </p>
        </motion.div>

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
                  <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] z-10">
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
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-primary">
                        {svc.price}
                      </span>
                      <span className="text-sm text-gray-600">HT</span>
                    </div>
                    <p className="text-sm text-gray-600">Délai : {svc.delai}</p>
                    <Link
                      href="/contact"
                      className="w-full inline-block px-10 py-4 text-white rounded-full font-semibold font-montserrat hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30 bg-primary text-center"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
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
                  price: "1500",
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
                  price: "2200",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Starter",
                    description: "Boutique en ligne sécurisée avec paiement CB",
                  },
                  price: "2800",
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
