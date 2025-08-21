"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function TarifFAQ() {
  const items = [
    {
      question: "💰 Quel est le prix d'un site vitrine professionnel ?",
      answer: (
        <>
          Un site vitrine professionnel coûte en moyenne entre{" "}
          <strong>1 000 € et 2 000 €</strong>. Mes forfaits débutent à{" "}
          <strong>990 €</strong>, incluant design responsive, SEO local et
          formation pour la mise à jour du contenu. Ce tarif comprend également
          l'hébergement offert la première année et un accompagnement
          personnalisé pour vous rendre autonome.
        </>
      ),
    },
    {
      question: "🛒 Combien coûte un site e-commerce en 2025 ?",
      answer: (
        <>
          Le tarif d'un site e-commerce varie selon le nombre de produits et les
          fonctionnalités. En moyenne, comptez{" "}
          <strong>2 500 € à 4 000 €</strong>. Mon forfait e-commerce à
          <strong>2 490 €</strong> couvre jusqu'à 50 produits et inclut paiement
          sécurisé, gestion des stocks, formation vendeur et maintenance 1 an.
          Un investissement rapidement rentabilisé grâce aux ventes en ligne
          24h/24.
        </>
      ),
    },
    {
      question: "⚖️ Pourquoi un freelance coûte moins cher qu'une agence ?",
      answer: (
        <>
          Une agence supporte des coûts fixes importants : locaux, commerciaux,
          gestionnaires de projet. En tant que <strong>freelance</strong>, je
          réduis ces frais et peux proposer des prix
          <strong>30 à 40 % inférieurs</strong>, tout en assurant un suivi
          personnalisé et une meilleure réactivité. Vous parlez directement avec
          le développeur, sans intermédiaire.
        </>
      ),
    },
    {
      question: "🌍 Les tarifs sont-ils valables uniquement à Angoulême ?",
      answer: (
        <>
          Non, j'accompagne des clients <strong>partout en France</strong>.
          Toutefois, être basé en Charente me permet d'offrir un service de
          proximité aux entreprises locales (Angoulême, Cognac, La Couronne,
          Soyaux...). Les tarifs restent identiques, que vous soyez en local ou
          à distance, grâce aux outils de collaboration moderne.
        </>
      ),
    },
    {
      question: "📆 Comment savoir quel forfait est adapté à mon projet ?",
      answer: (
        <>
          Lors d'un <strong>appel découverte gratuit</strong>, j'analyse vos
          besoins et vous oriente vers la solution la plus adaptée : vitrine,
          e-commerce ou application sur-mesure. Je vous explique les
          différences, les avantages de chaque option et vous remets un
          <strong>devis détaillé sous 24h</strong>, sans engagement.
        </>
      ),
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        FAQ – Tarifs création site internet
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <Disclosure key={item.question}>
            {({ open }) => (
              <div className="border border-primary/20 rounded-xl bg-white/80">
                <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5 text-lg font-semibold text-primary focus:outline-none">
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-5 pt-0 text-base text-foreground/90">
                  {item.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
