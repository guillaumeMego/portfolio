"use client";

import dynamic from "next/dynamic";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Zap, Users, TrendingUp, Leaf } from "lucide-react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

// Import dynamique des composants lourds
const Features = dynamic(
  () =>
    import("@/components/Feature").then((mod) => ({ default: mod.Features })),
  {
    ssr: true,
    loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />,
  }
);

const ProcessSection = dynamic(() => import("@/components/ProcessSection"), {
  ssr: true,
  loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-lg" />,
});

const CTASection = dynamic(() => import("@/components/CTASection"), {
  ssr: true,
  loading: () => <div className="h-32 bg-gray-50 animate-pulse rounded-lg" />,
});

export default function HomeClient() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    // Sticky CTA mobile : affiché après passage de la section why-angouleme
    // Optimisation : utiliser IntersectionObserver au lieu de getBoundingClientRect
    const section = document.getElementById("why-angouleme");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // CTA visible quand la section sort du viewport par le haut
          setShowStickyCTA(
            !entry.isIntersecting && entry.boundingClientRect.top < 0
          );
        });
      },
      {
        rootMargin: "0px 0px -100% 0px", // Trigger quand la section sort complètement
        threshold: 0,
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-28 pb-8 text-foreground relative">
      <Hero />

      {/* Bandeau offre exceptionnelle */}
      <section className="bg-gradient-to-r from-[#CC5500]/10 to-[#D35400]/10 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#CC5500] text-white">
              Offre exceptionnelle
            </span>
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <span className="text-gray-500 line-through">990 €</span>
              <span className="font-extrabold text-[#CC5500] text-2xl md:text-3xl">
                500 €
              </span>
              <span className="text-gray-700">site vitrine clé en main</span>
            </div>
            <span className="text-xs text-gray-600">
              Offre limitée – se termine bientôt
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white pt-24 pb-12">
        <Features />
      </section>

      {/* Section Comparatif Freelance vs Agence */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              <span className="text-[#CC5500]">Freelance</span> vs Agence :
              pourquoi me choisir ?
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              En tant que <strong>développeur web freelance à Angoulême</strong>
              , je vous offre tous les avantages d'une agence avec la proximité
              et la transparence en plus.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  🚀 Freelance (moi)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>Prix transparent</strong> : tarifs clairs dès 990
                      €
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>Réactivité locale</strong> : rendez-vous à
                      Angoulême sous 48h
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>Suivi humain</strong> : un seul interlocuteur du
                      début à la fin
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>Performance 90+</strong> : PageSpeed et sécurité
                      garantis
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>
                      <strong>Sur-mesure</strong> : chaque projet adapté à vos
                      besoins
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  🏢 Agence classique
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span>
                      <strong>Prix opaques</strong> : devis complexes, frais
                      cachés
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span>
                      <strong>Délais longs</strong> : processus bureaucratique
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span>
                      <strong>Multiples interlocuteurs</strong> : commercial,
                      dev, designer...
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">~</span>
                    <span>
                      <strong>Performance variable</strong> : selon l'équipe
                      assignée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">~</span>
                    <span>
                      <strong>Solutions standardisées</strong> : moins de
                      personnalisation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section Pourquoi Angoulême */}
      <section
        id="why-angouleme"
        className="relative z-10 bg-white overflow-hidden"
        aria-label="Pourquoi confier votre site web à un créateur basé à Angoulême ?"
      >
        {/* Effet de fond décoratif */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2980B9] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#CC5500] rounded-full blur-3xl"></div>
        </div>
        <h2 className="text-3xl md:text-4xl text-center pt-16 font-extrabold text-[#2C3E50] mb-8 tracking-tight leading-tight">
          Pourquoi confier votre site web à un créateur basé à Angoulême ?
        </h2>
        <div className="pb-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
            {/* Illustration Angoulême avec effets visuels */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
              <div className="relative group">
                {/* Fond décoratif animé */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#CC5500]/30 via-[#2980B9]/20 to-[#CC5500]/30 rounded-3xl blur-2xl group-hover:blur-3xl opacity-70 animate-pulse"></div>

                {/* Container principal */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-[#CC5500]/20">
                  <Image
                    src="/images/mascotte/carte-angouleme-france.webp"
                    alt="Carte stylisée Angoulême France"
                    width={600}
                    height={600}
                    className="w-80 h-80 md:w-full md:max-w-[600px] md:h-auto object-contain drop-shadow-2xl"
                    sizes="(max-width: 767px) 320px, 600px"
                    loading="lazy"
                  />

                  {/* Badge expertise locale */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#CC5500] to-[#D35400] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                    🎯 Expertise Locale
                  </div>

                  {/* Badge Charente */}
                  <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-[#2980B9] to-[#3498DB] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    📍 Charente 16
                  </div>
                </div>

                {/* Éléments décoratifs */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#CC5500]/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#2980B9]/15 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/2 -left-6 w-8 h-8 bg-[#CC5500]/20 rounded-full animate-ping"></div>
              </div>
            </div>
            {/* Texte */}
            <div className="w-full md:w-3/5 md:pl-8 md:pr-4 py-6">
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
                    vivant ici depuis toujours, j'intègre ces spécificités dans
                    le contenu, le design et la stratégie SEO. Mon expertise en{" "}
                    <strong>concepteur de site internet Angoulême</strong> me
                    permet d'adapter chaque projet aux réalités locales.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Réactivité et proximité</strong> : Besoin d'un brief
                    express ou d'une séance photo ? Je suis à dix minutes. Cette
                    proximité réduit les aller-retours et accélère les mises en
                    ligne. Contrairement aux agences web, vous avez un contact
                    direct avec votre{" "}
                    <strong>développeur web freelance à Angoulême</strong> pour
                    un suivi personnalisé.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Réseau charentais solide</strong> : Graphistes,
                    imprimeurs, vidéastes, hébergeurs locaux… Je collabore avec
                    un écosystème éprouvé pour orchestrer l'ensemble de votre
                    projet. Ce réseau local garantit une cohérence parfaite
                    entre votre <strong>site e-commerce Charente</strong> et vos
                    supports de communication print.
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

              <div className="mt-6 relative z-10">
                <a
                  href="#process"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
                >
                  Voir la méthode
                </a>
              </div>

              <a
                href="https://www.google.com/search?q=Guillaume+Ganne+avis+Angoul%C3%AAme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 flex items-center gap-2 hover:text-[#CC5500] transition-colors"
              >
                <span>+++ Ils m&apos;ont fait confiance</span>
                {/* Logos clients (placeholders) */}
                <div className="flex gap-2 ml-2">
                  <Image
                    src="/images/logo/logo-client-soupe-o-potes.png"
                    alt="Logo client 1"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-contain"
                    loading="lazy"
                  />
                  <Image
                    src="/images/logo/logo-client-2.svg"
                    alt="Logo client 2"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-contain"
                    style={{ height: "auto" }}
                    loading="lazy"
                  />
                  <Image
                    src="/images/logo/logo-client-3.svg"
                    alt="Logo client 3"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-contain"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto space-y-20 z-10">
          {/* Titre épuré pour les projets */}

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight text-[#2C3E50]">
            Projets récents
          </h2>
          <p className="text-center text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Découvrez quelques réalisations de{" "}
            <strong>création site internet Angoulême</strong> : sites vitrines
            et e-commerce qui génèrent des résultats concrets pour mes clients
            charentais.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-green-800 mb-2">
                Les Créas de Rose Bleue
              </h4>
              <p className="text-sm text-green-700">
                🚀 <strong>Premières ventes en 1 semaine</strong> grâce au SEO
                local optimisé. Score PageSpeed 99/100 et top 5 Google sur
                "bougies artisanales bio".
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-800 mb-2">Soup'Ô Potes</h4>
              <p className="text-sm text-blue-700">
                📈 <strong>Adhésions doublées</strong> après la refonte.
                Nouvelle identité moderne et espace membre sécurisé pour 200+
                bénévoles.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.slice(0, 2).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/projets/"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
            >
              Voir tous les projets
            </a>
          </div>
        </div>
      </div>

      {/* Section Preuves sociales */}
      <motion.section
        className="relative bg-white py-16 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Effet de fond décoratif */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute top-10 right-20 w-64 h-64 bg-[#CC5500] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#2980B9] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              Ils m'ont fait confiance
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-8">
              <strong>15+ clients satisfaits</strong> à Angoulême et en Charente
              depuis 2019. J'ai accompagné artisans, associations et PME locales
              avec des sites performants, sécurisés et visibles sur Google. Mon
              expertise en <strong>création site vitrine Angoulême</strong> et{" "}
              <strong>site e-commerce Charente</strong> leur a permis d'attirer
              de nouveaux clients et de développer leur activité.
            </p>

            {/* Témoignages clients courts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CC5500]/10">
                <div className="flex items-center mb-3">
                  <div className="flex text-[#CC5500] text-lg">⭐⭐⭐⭐⭐</div>
                  <span className="ml-2 text-sm font-semibold text-gray-600">
                    5/5
                  </span>
                </div>
                <p className="text-gray-700 italic mb-3">
                  "Je recommande à 100% ! Guillaume a été incroyable du début à
                  la fin. Très à l'écoute, professionnel, réactif et surtout
                  investi."
                </p>
                <div className="text-sm font-semibold text-[#2C3E50]">
                  — Mélanie Le Goff
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#2980B9]/10">
                <div className="flex items-center mb-3">
                  <div className="flex text-[#CC5500] text-lg">⭐⭐⭐⭐⭐</div>
                  <span className="ml-2 text-sm font-semibold text-gray-600">
                    5/5
                  </span>
                </div>
                <p className="text-gray-700 italic mb-3">
                  "Sans lui, mon site ne serait pas aussi performant ! Ses
                  conseils de qualité ont fait toute la différence."
                </p>
                <div className="text-sm font-semibold text-[#2C3E50]">
                  — Les Créas de Rose Bleue
                </div>
              </div>
            </div>

            {/* Lien vers les avis Google */}
            <div className="text-center mb-12 relative z-10">
              <a
                href="https://www.google.com/search?sca_esv=f59e2138defda713&tbm=lcl&q=Guillaume+Cr%C3%A9ation+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MTExN7UwNjIyNTY1MzE0NbEw3sDI-IpRwr00MycnsTQ3VcG56PDKxJLM_DwFx7LM4kWsOKUAnU8o11AAAAA&rldimm=4447583225356415483&hl=fr-FR&sa=X&ved=2ahUKEwjA5-DC15uPAxWlQ6QEHVdmOlwQ9fQKegQIUhAF&biw=1421&bih=849&dpr=2#lkt=LocalPoiReviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300 relative z-10"
              >
                <span>📍</span>
                Voir tous les avis Google
              </a>
            </div>
          </div>
          {/* Logos clients statiques */}
          <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/logo/logo-client-soupe-o-potes.png"
                alt="Logo Soup'Ô Potes"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium text-gray-700">
                Soup'Ô Potes
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/logo/logo-client-2.svg"
                alt="Logo client artisan"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium text-gray-700">
                Artisan local
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/images/logo/logo-client-3.svg"
                alt="Logo PME Charente"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-contain"
                loading="lazy"
              />
              <span className="text-sm font-medium text-gray-700">
                PME Charente
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#CC5500]/10 flex items-center justify-center">
                <span className="text-[#CC5500] font-bold">+</span>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Et bien d'autres...
              </span>
            </div>
          </div>
        </div>
      </motion.section>
      <ProcessSection />
      {/* FAQ Section moderne accordéon + JSON-LD SEO */}
      <section id="faq" className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
            Questions fréquentes sur la création de site web à Angoulême
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "💰 Quel budget pour un site web à Angoulême ?",
                answer: (
                  <>
                    Un site vitrine professionnel démarre à partir de{" "}
                    <strong>990 €</strong> en freelance. Le tarif varie selon
                    vos besoins : nombre de pages, design personnalisé, SEO
                    local ou e-commerce. Contrairement aux agences, je propose
                    des prix transparents adaptés aux artisans et PME en
                    Charente.{" "}
                    <a
                      href="/tarif/"
                      className="text-[#CC5500] underline hover:text-[#B8440F] transition-colors font-semibold"
                    >
                      👉 Voir mes forfaits détaillés
                    </a>
                    .
                  </>
                ),
              },
              {
                question: "🌍 Comment être visible localement à Angoulême ?",
                answer: (
                  <>
                    Le référencement local repose sur plusieurs leviers :
                    optimisation des balises, vitesse du site, mais aussi la
                    fiche Google Business Profile. En tant que{" "}
                    <strong>développeur web freelance basé à Angoulême</strong>,
                    j&apos;intègre directement ces optimisations pour que votre
                    entreprise ressorte sur des recherches comme "artisan
                    Angoulême" ou "commerce Charente".
                  </>
                ),
              },
              {
                question: "🛒 Combien coûte un site e-commerce en Charente ?",
                answer: (
                  <>
                    Un <strong>site e-commerce</strong> clé en main pour
                    commerçants charentais démarre autour de{" "}
                    <strong>2 500 €</strong>. Il inclut un catalogue produits,
                    paiement sécurisé (CB/PayPal), gestion des stocks et
                    formation vendeur. Chaque projet est optimisé pour générer
                    des ventes dès les premières semaines grâce au SEO local.{" "}
                    <a
                      href="/tarif/"
                      className="text-[#CC5500] underline hover:text-[#B8440F] transition-colors font-semibold"
                    >
                      👉 Découvrez l&apos;offre e-commerce
                    </a>
                    .
                  </>
                ),
              },
              {
                question: "🕒 Quels délais pour créer un site internet ?",
                answer: (
                  <>
                    Un <strong>site vitrine</strong> simple peut être livré en{" "}
                    <strong>2 à 3 semaines</strong>, tandis qu&apos;un
                    e-commerce demande <strong>4 à 6 semaines</strong>. En
                    travaillant avec un freelance local, vous gagnez en
                    réactivité et réduisez les allers-retours, car je suis basé
                    à 10 minutes d&apos;Angoulême.
                  </>
                ),
              },
              {
                question: "🔐 Le site sera-t-il sécurisé et rapide ?",
                answer: (
                  <>
                    <strong>Oui ✅</strong> Tous mes sites atteignent{" "}
                    <strong>90+ sur Google PageSpeed</strong>, sont protégés en
                    HTTPS, et optimisés pour un chargement en moins de 2
                    secondes. Je mets en place des sauvegardes automatiques, un
                    pare-feu et une maintenance proactive, un niveau de sécurité
                    comparable aux grandes agences.
                  </>
                ),
              },
              {
                question:
                  "🧑‍💻 Pourquoi choisir un freelance plutôt qu'une agence ?",
                answer: (
                  <>
                    Avec un <strong>freelance local</strong>, vous bénéficiez :
                    d&apos;un prix clair et sans frais cachés ; d&apos;un seul
                    interlocuteur du début à la fin ; d&apos;une proximité
                    locale (rendez-vous rapide à Angoulême) ; d&apos;une
                    expertise complète : design, développement, SEO, sécurité.{" "}
                    <strong>👉 Résultat</strong> : un site sur-mesure, pensé
                    pour votre activité, qui convertit vos visiteurs en clients.
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
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quel est un budget raisonnable pour un site web à Angoulême ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pour un site vitrine de 5 pages optimisé SEO local, prévoyez entre 1 200 € et 2 000 €...",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le tarif d'hébergement d'un site internet ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un hébergement mutualisé performant en France coûte environ 6 € HT par mois...",
                },
              },
              {
                "@type": "Question",
                name: "Quels sont les types de sites web et lequel me convient ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Site vitrine, site e-commerce ou application web...",
                },
              },
              {
                "@type": "Question",
                name: "Quel contenu doit comporter un site web professionnel ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un message clair, design cohérent, CTA visibles, témoignages...",
                },
              },
              {
                "@type": "Question",
                name: "Où puis-je voir des exemples de sites que vous avez créés ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rendez-vous sur guillaumeganne.com/projets pour voir un portfolio complet...",
                },
              },
              {
                "@type": "Question",
                name: "Comment accéder à mon site après la livraison ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous recevez un accès admin WordPress ou un dépôt Git...",
                },
              },
              {
                "@type": "Question",
                name: "Comment se connecter à l'interface d'administration ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Via /wp-admin avec MFA et un guide PDF pas-à-pas...",
                },
              },
              {
                "@type": "Question",
                name: "Quelle est la différence entre le web et l'internet ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "L'Internet est l'infrastructure ; le Web est l'un de ses services...",
                },
              },
            ],
          }),
        }}
      />
      <CTASection />
    </div>
  );
}
