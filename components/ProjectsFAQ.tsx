"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function ProjectsFAQ() {
  const items = [
    {
      question: "🚀 Quels types de projets web réalises-tu ?",
      answer: (
        <>
          Je développe une large gamme de solutions web : sites vitrines
          modernes, boutiques e-commerce performantes, applications métier
          sur-mesure, sites associatifs et institutionnels. Chaque projet est
          adapté aux besoins spécifiques du client, avec une attention
          particulière portée à l'expérience utilisateur, la performance et le
          référencement naturel.
        </>
      ),
    },
    {
      question: "🛒 Puis-je voir des exemples de sites e-commerce créés ?",
      answer: (
        <>
          Absolument ! Mon portfolio comprend plusieurs réalisations e-commerce
          comme <strong>"Les Créas de Rose Bleue"</strong> (bougies artisanales
          bio) avec des scores PageSpeed excellents et des systèmes de paiement
          sécurisés. Chaque boutique est optimisée pour la conversion et intègre
          les meilleures pratiques du commerce en ligne : gestion de stock,
          variations produits, parcours d'achat fluide.
        </>
      ),
    },
    {
      question:
        "🌍 Est-ce que tu travailles uniquement en Charente ou partout en France ?",
      answer: (
        <>
          Bien qu'implanté à <strong>Angoulême</strong>, je travaille avec des
          clients dans toute la France grâce aux outils de collaboration
          digitale. Mes projets s'étendent de la région Nouvelle-Aquitaine
          jusqu'aux grandes métropoles françaises. La distance n'est pas un
          frein : visioconférences, partage d'écran et suivi projet en ligne
          permettent un accompagnement aussi efficace qu'en présentiel.
        </>
      ),
    },
    {
      question: "⏰ Combien de temps dure un projet type ?",
      answer: (
        <>
          Les délais varient selon la complexité : <strong>2-3 semaines</strong>{" "}
          pour un site vitrine, <strong>4-6 semaines</strong> pour un
          e-commerce, jusqu'à <strong>8-12 semaines</strong> pour une
          application complexe. Chaque projet inclut les phases de conception,
          développement, tests et optimisation. Je privilégie la qualité à la
          rapidité, avec des livrables intermédiaires pour valider l'avancement
          et ajuster si nécessaire.
        </>
      ),
    },
    {
      question: "📋 Comment suivre l'avancée de mon projet ?",
      answer: (
        <>
          Je privilégie une <strong>communication transparente</strong> avec des
          points réguliers par email, téléphone ou visio selon vos préférences.
          Vous recevez des captures d'écran de l'avancement, accès aux versions
          de développement pour tests, et un planning détaillé avec les étapes
          clés. Cette approche collaborative garantit que le résultat final
          correspond parfaitement à vos attentes.
        </>
      ),
    },
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
        Questions fréquentes sur mes projets
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
