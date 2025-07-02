"use client";

import dynamic from "next/dynamic";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Zap, Users, TrendingUp, Leaf } from "lucide-react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Features } from "@/components/Feature";
import Hero from "@/components/Hero";

// Import dynamique des composants lourds
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), {
  ssr: true,
});
const CTASection = dynamic(() => import("@/components/CTASection"), {
  ssr: true,
});

export default function HomeClient() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    // Sticky CTA mobile : affiché après passage de la section why-angouleme
    const handleScroll = () => {
      const section = document.getElementById("why-angouleme");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setShowStickyCTA(rect.top <= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-0 text-foreground relative">
      <Hero />

      <section className="bg-white pt-24 pb-12">
        <Features />
      </section>

      {/* Section Pourquoi Angoulême */}
      <section
        id="why-angouleme"
        className="relative z-10 bg-[#ECF0F1]"
        aria-label="Pourquoi confier votre site web à un créateur basé à Angoulême ?"
      >
        <h2 className="text-3xl md:text-4xl text-center pt-16 font-extrabold text-[#2C3E50] mb-8 tracking-tight leading-tight">
          Pourquoi confier votre site web à un créateur basé à Angoulême ?
        </h2>
        <div className="pb-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
            {/* Illustration Angoulême */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/images/mascotte/france.webp"
                alt="Carte stylisée Angoulême France"
                width={500}
                height={500}
                className="w-60 h-60 md:w-[95%] md:max-w-[500px] md:h-auto object-contain"
                sizes="(max-width: 767px) 240px, 500px"
              />
            </div>
            {/* Texte */}
            <div className="w-full md:w-1/2 md:pl-12 md:pr-4 py-6">
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                Vous cherchez un expert en{" "}
                <strong>création de site web à Angoulême</strong> capable de
                transformer vos visiteurs en clients ? Être implanté au cœur de
                la Charente change tout :
              </p>
              <ul className="space-y-5 mb-8 text-base">
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Compréhension fine du marché local</strong> : Les
                    entreprises angoumoisines ont leurs propres défis (Festival
                    de la BD, studios d'animation, TPE industrielles…). En
                    vivant ici, j'intègre ces spécificités dans le contenu, le
                    design et la stratégie SEO.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Réactivité et proximité</strong> : Besoin d'un brief
                    express ou d'une séance photo ? Je suis à dix minutes. Cette
                    proximité réduit les aller-retours et accélère les mises en
                    ligne.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Réseau charentais solide</strong> : Graphistes,
                    imprimeurs, vidéastes, hébergeurs locaux… Je collabore avec
                    un écosystème éprouvé pour orchestrer l'ensemble de votre
                    projet.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Boost SEO local immédiat</strong> : Google
                    privilégie la proximité. J'optimise chaque balise et votre
                    fiche Google Business pour verrouiller le positionnement «
                    création site web Angoulême ».
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Engagement éthique & développement durable</strong>{" "}
                    : Performance web sobre, accessibilité, hébergement vert… Je
                    m'aligne sur les valeurs écoresponsables locales.
                  </span>
                </li>
              </ul>
              <a
                href="#process"
                className="bg-primary inline-block px-10 py-4 text-white rounded-full font-semibold font-montserrat hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30 mb-4"
              >
                Voir la méthode
              </a>
              <a
                href="https://www.google.com/search?q=Guillaume%20Cr%C3%A9ation%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MTExN7UwNjIyNTY1MzE0NbEw3sDI-IpRwr00MycnsTQ3VcG56PDKxJLM_DwFx7LM4kWsOKUAnU8o11AAAAA&rldimm=4447583225356415483&tbm=lcl&hl=fr&sa=X&ved=0CAgQ5foLahcKEwjouYrppemNAxUAAAAAHQAAAAAQCg&biw=1884&bih=946&dpr=2#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VLMk8wZXZBN19TbzB3RRAB"
                className="mt-6 text-sm text-gray-700 flex items-center gap-2"
              >
                <span>+++ Ils m&apos;ont fait confiance</span>
                {/* Logos clients (placeholders) */}
                <div className="flex gap-2 ml-2">
                  <Image
                    src="/images/logo/soupe.png"
                    alt="Logo client 1"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-contain"
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="Logo client 2"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-contain"
                    style={{ height: "auto" }}
                  />
                  <Image
                    src="/images/logo/temps.svg"
                    alt="Logo client 3"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto space-y-20 z-10 py-20">
        {/* Titre épuré pour les projets */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight text-[#2C3E50]">
          Projets récents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/projets"
            className="bg-primary inline-block px-10 py-4 text-white rounded-full font-semibold font-montserrat hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30"
          >
            Voir tous les projets
          </a>
        </div>
      </div>
      <ProcessSection />
      {/* FAQ Section moderne accordéon + JSON-LD SEO */}
      <section id="faq" className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Questions fréquentes sur la création de site web à Angoulême
        </h2>
        <div className="space-y-4">
          {[
            {
              question:
                "Quel est un budget raisonnable pour un site web à Angoulême ?",
              answer: (
                <>
                  Pour un site vitrine de 5 pages optimisé SEO local, prévoyez
                  entre <strong>1 200 € et 2 000 € HT</strong>. Les sites
                  e-commerce avec paiement en ligne débutent à 2 500 €. Tous mes
                  devis incluent maquettes Figma, développement
                  WordPress/Next.js, optimisation « création site web Angoulême
                  » et formation d&apos;une heure.{" "}
                  <a href="/mes-tarifs">Voir les détails de mes tarifs</a>.
                </>
              ),
            },
            {
              question: "Quel est le tarif d'hébergement d'un site internet ?",
              answer: (
                <>
                  Un hébergement mutualisé performant en France coûte ≈ 6 €
                  HT/mois.
                  <br />
                  Pour les boutiques ou applications à fort trafic, je
                  recommande un VPS ou hébergement cloud (10 – 30 € HT/mois)
                  pour garantir un temps de chargement &lt; 2 s. Je configure et
                  sécurise l&apos;hébergement pour vous.
                </>
              ),
            },
            {
              question:
                "Quels sont les types de sites web et lequel me convient ?",
              answer: (
                <>
                  <strong>Site vitrine</strong> : présenter vos services.
                  <br />
                  <strong>Site e-commerce</strong> : vendre en ligne via
                  WooCommerce ou Stripe.
                  <br />
                  <strong>Application web</strong> : fonctionnalités sur-mesure
                  (réservations, intranet).
                  <br />
                  Lors d&apos;un <a href="#cta">rendez-vous Calendly gratuit</a>
                  , nous déterminons la meilleure solution selon vos objectifs
                  et votre budget.
                </>
              ),
            },
            {
              question:
                "Quel contenu doit comporter un site web professionnel ?",
              answer: (
                <>
                  Un message clair (proposition de valeur), un design cohérent,
                  des appels à l&apos;action visibles, des témoignages, un blog
                  pour le référencement et l&apos;aspect légal (mentions, RGPD).
                  Je fournis une check-list complète pendant la phase de
                  co-création.
                </>
              ),
            },
            {
              question:
                "Où puis-je voir des exemples de sites que vous avez créés ?",
              answer: (
                <>
                  Consultez mes <a href="/projets">projets récents</a> :
                  portfolio photo animé, e-commerce de bougies bio « Les Créas
                  de Rose Bleue », etc. Chaque fiche détaille les technologies
                  et les résultats obtenus.
                </>
              ),
            },
            {
              question: "Comment accéder à mon site après la livraison ?",
              answer: (
                <>
                  Vous recevez un accès administrateur WordPress ou un dépôt Git
                  Hub/Bitbucket. Une vidéo tutoriel explique la mise à jour des
                  textes et images. Support Hotline 30 jours inclus.
                </>
              ),
            },
            {
              question: "Comment se connecter à l'interface d'administration ?",
              answer: (
                <>
                  Depuis <code>/wp-admin</code> ou un sous-domaine sécurisé,
                  avec un login MFA (double authentification). Un guide PDF
                  pas-à-pas est fourni lors du lancement.
                </>
              ),
            },
            {
              question: "Quelle est la différence entre le web et l'internet ?",
              answer: (
                <>
                  L&apos;<em>Internet</em> est l&apos;infrastructure (réseau
                  mondial) ; le <em>Web</em> est un des services qui
                  l&apos;exploitent via des sites et navigateurs. Vos visiteurs
                  utilisent le web pour accéder à votre site hébergé sur
                  Internet — voilà pourquoi un hébergement fiable est crucial.
                </>
              ),
            },
          ].map((item, idx) => (
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
   "@context": "https://schema.org",
   "@type": "FAQPage",
   "mainEntity": [
     {
       "@type": "Question",
       "name": "Quel est un budget raisonnable pour un site web à Angoulême ?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "Pour un site vitrine de 5 pages optimisé SEO local, pr'evoyez entre 1 200 € et 2 000 €..."
       }
     },
     {
       "@type": "Question",
       "name": "Quel est le tarif d'hébergement d'un site internet ?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "Un hébergement mutualisé performant en France coûte environ 6 € HT par mois..."
       }
     },
     {
       "@type": "Question",
       "name": "Quels sont les types de sites web et lequel me convient ?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "Site vitrine, site e-commerce ou application web..."
       }
     },
     {
       "@type": "Question",
       "name": "Quel contenu doit comporter un site web professionnel ?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "Un message clair, design cohérent, CTA visibles, témoignages..."
       }
     },
     {
       "@type": "Question",
       "name": "Où puis-je voir des exemples de sites que vous avez créés ?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "Rendez-vous sur guillaumeganne.com/projets pour voir un portfolio complet..."
       }
     },
     {
       "@type": "Question",
       "name": "Comment accéder à mon site après la livraison ?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "Vous recevez un accès admin WordPress ou un dépôt Git..."
       }
     },
     {
       "@type": "Question",
       "name": "Comment se connecter à l'interface d'administration ?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "Via /wp-admin avec MFA et un guide PDF pas-à-pas..."
       }
     },
     {
       "@type": "Question",
       "name": "Quelle est la différence entre le web et l'internet ?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "L'Internet est l'infrastructure ; le Web est l'un de ses services..."
       }
     }
   ]
 }`,
        }}
      />
      <CTASection />
    </div>
  );
}
