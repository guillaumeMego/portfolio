"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function AboutFAQ() {
  const items = [
    {
      question:
        "💼 Pourquoi choisir un développeur web freelance plutôt qu'une agence ?",
      answer: (
        <>
          Travailler avec un <strong>développeur web freelance</strong> vous
          garantit un contact direct, sans intermédiaire. Vous bénéficiez d'un
          suivi personnalisé, de tarifs transparents et d'une grande flexibilité
          dans les délais. Contrairement aux agences où vous ne savez jamais qui
          travaille sur votre projet, vous avez un interlocuteur unique qui
          connaît parfaitement vos besoins et votre secteur d'activité.
        </>
      ),
    },
    {
      question:
        "🤝 Comment se déroule la collaboration avec un freelance à Angoulême ?",
      answer: (
        <>
          La collaboration commence par un{" "}
          <strong>échange téléphonique ou en visio</strong> pour définir vos
          besoins précis. Je vous propose ensuite un devis détaillé sous 48h.
          Une fois validé, nous planifions les étapes : maquettes Figma,
          développement, tests et formation. Vous recevez des points
          d'avancement réguliers et pouvez tester le site avant sa mise en
          ligne. Un accompagnement post-livraison est inclus.
        </>
      ),
    },
    {
      question:
        "🎨 Quels types de sites avez-vous déjà créés (vitrine, e-commerce, application) ?",
      answer: (
        <>
          J'ai développé une large gamme de projets :{" "}
          <strong>sites vitrines</strong> pour artisans et PME,
          <strong>boutiques e-commerce</strong> avec WooCommerce et Stripe,{" "}
          <strong>sites associatifs</strong> avec espaces membres, et{" "}
          <strong>applications web sur-mesure</strong> (réservations, outils
          internes). Chaque projet est adapté aux besoins spécifiques du client,
          avec une attention particulière portée à la performance et au
          référencement naturel.
        </>
      ),
    },
    {
      question:
        "🔧 Un freelance peut-il assurer le suivi et la maintenance après livraison ?",
      answer: (
        <>
          Absolument ! Je propose un{" "}
          <strong>accompagnement post-livraison</strong> qui inclut la formation
          à la gestion de votre site, les mises à jour de sécurité, et le
          support technique. Vous pouvez opter pour un contrat de maintenance
          mensuel ou faire appel à moi ponctuellement selon vos besoins.
          L'avantage du freelance : vous gardez le même interlocuteur qui
          connaît parfaitement votre site.
        </>
      ),
    },
  ];

  return (
    <section className="max-w-4xl mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        Questions fréquentes sur le freelance web
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
