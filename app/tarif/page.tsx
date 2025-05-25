"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Tarif() {
  const webServices = [
    {
      title: "Site Vitrine Essentiel",
      description:
        "Site vitrine jusqu'à 5 pages avec contenu basique : présentations, galeries, contact. Idéal pour établir votre présence en ligne rapidement.",
      features: [
        "Design responsive et accessible",
        "Structure SEO-first pour indexation rapide",
        "Formulaire de contact intégré",
      ],
      price: "À partir de 1500€",
      src: "/images/creation-site-vitrine-angouleme.jpg",
    },
    {
      title: "Site Vitrine + Maquette & SEO",
      description:
        "Pack complet incluant une maquette Figma personnalisée et optimisation SEO : mots-clés, balises meta, chargement rapide.",
      features: [
        "Maquette interactive sous Figma",
        "Analyse et recherche de mots-clés locaux",
        "Optimisation performance et accessibilité Opquast",
      ],
      price: "À partir de 2200€",
      src: "/images/soupsite.webp",
    },
    {
      title: "Boutique E-commerce",
      description:
        "Boutique en ligne clé en main jusqu'à 20 produits : configuration WooCommerce, paiement sécurisé et gestion de catalogue.",
      features: [
        "Installation et configuration de WooCommerce",
        "Gestion des produits, stock et commandes",
        "Passerelle de paiement et sécurité HTTPS",
      ],
      price: "À partir de 2800€",
      src: "/images/ecommerce-woocommerce-charente.png",
    },
    {
      title: "Application Web Sur-Mesure",
      description:
        "Développement d'applications métiers avancées avec back-office, API et fonctionnalités spécifiques adaptées à votre modèle.",
      features: [
        "Architecture full-stack (Next.js, Node.js)",
        "Intégrations API externes",
        "Interface d'administration sécurisée",
      ],
      price: "À partir de 3500€",
      src: "/images/developpement-webapp-react.png",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-foreground relative mt-24">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Mes Services Web & Tarifs
          </h1>
          <p className="text-lg text-muted-foreground">
            Des solutions digitales adaptées à vos objectifs, de la vitrine
            simple à l&apos;application métier.
          </p>
        </motion.div>

        {/* Web Services Cards */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary text-center mb-8">
            Offres Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {webServices.map((svc, idx) => (
              <motion.div
                key={svc.title}
                className="bg-[#ECF0F1] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={svc.src}
                    alt={svc.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {svc.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed text-muted-foreground">
                  {svc.description}
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground ml-4 mb-4">
                  {svc.features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
                <p className="text-base font-semibold text-primary mb-4">
                  {svc.price}
                </p>
                <Link
                  href="/contact"
                  className="mt-auto inline-block px-10 py-4 text-white rounded-full bg-primary text-primary-foreground font-medium text-center hover:bg-primary/80 transition"
                >
                  Contactez-moi
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
