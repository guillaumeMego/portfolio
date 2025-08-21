"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code, Palette, ChevronRight } from "lucide-react";
import AboutFAQ from "@/components/AboutFAQ";

export default function AboutClient() {
  return (
    <>
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 relative my-24">
        <motion.div
          className="max-w-7xl mx-auto relative z-10 space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Introduction SEO-rich */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-5xl text-center font-extrabold text-primary mb-8 mt-8">
              Guillaume Ganne – Développeur web freelance à Angoulême
            </h1>
            <p className="text-base md:text-lg leading-relaxed font-normal">
              Basé à Angoulême, je suis <strong>Guillaume Ganne</strong>,
              développeur web full stack et designer UX/UI, passionné par la
              création de solutions digitales performantes. Avec plusieurs
              années d&apos;expérience, j&apos;accompagne artisans, PME et
              créateurs dans la réalisation de sites internet sur-mesure,
              optimisés pour le SEO local et la conversion client.
            </p>

            {/* Boutons d'action stylisés */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
              <Link
                href="/projets"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
              >
                Voir mon portfolio
              </Link>
              <Link
                href="/tarif"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
              >
                Consulter mes tarifs
              </Link>
            </div>
          </section>

          {/* Section Bio & Image */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/guillaume-ganne-portrait.webp"
                  alt="Développeur web freelance à Angoulême – Guillaume Ganne"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center italic">
                Guillaume, concepteur de sites web en Charente depuis 2019
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4 leading-relaxed">
                  Depuis mes débuts, j&apos;ai travaillé sur des sites vitrines,
                  boutiques en ligne et applications métier. Je maîtrise
                  Next.js, React et WordPress, en appliquant les standards
                  Opquast pour garantir accessibilité et performance. Spécialisé
                  dans la création site web à Angoulême, j'interviens aussi dans
                  toute la région.
                </p>
                <p className="leading-relaxed mb-6">
                  Mon objectif : transformer votre idée en un site unique, qui
                  reflète votre identité et génère des résultats concrets
                  (trafic, leads, ventes).
                </p>

                {/* Boutons d'action dans la bio */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/creation-site-web-angouleme"
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
                  >
                    Création site Angoulême
                  </Link>
                  <a
                    href="/contact/"
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-colors duration-300"
                  >
                    Discutons de votre projet
                  </a>
                </div>
              </div>
            </div>

            {/* Services détaillés */}
            <div className="space-y-8">
              {/* Service 1 */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-8 w-8 text-secondary" />
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Conception web sur-mesure
                  </h2>
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Je conçois des sites vitrines et e-commerce adaptés à votre
                  marque : design personnalisé, structure SEO-first, et
                  intégration WordPress ou CMS headless.
                </p>
                <div className="space-y-2 text-sm text-foreground">
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Analyse des besoins et UX research pour un parcours
                    utilisateur optimisé
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Maquettes Figma interactives validées étape par étape
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Développement front-end performant et back-end sécurisé
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Formation pour prise en main autonome du site
                  </p>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="h-8 w-8 text-secondary" />
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Design UX/UI avancé
                  </h2>
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Création d&apos;interfaces intuitives et esthétiques, basées
                  sur une méthodologie centrée utilisateur et conforme aux
                  normes accessibilité Opquast.
                </p>
                <div className="space-y-2 text-sm text-foreground">
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Wireframes et prototypes clairs pour valider chaque
                    fonctionnalité
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Design system modulable pour maintenir la consistance
                    visuelle
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Tests utilisateurs et ajustements itératifs
                  </p>
                  <p className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    Documents de style et guidelines pour votre équipe
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section Preuves */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-primary mb-8 mt-8">
              Pourquoi me faire confiance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  stat: "99%",
                  title: "Performance PageSpeed",
                  description:
                    "Sites ultra-rapides pour un SEO et UX optimaux.",
                },
                {
                  stat: "100%",
                  title: "Accessibilité Opquast",
                  description:
                    "Conformité pour tous les utilisateurs, mobile et desktop.",
                },
                {
                  stat: "48h",
                  title: "Délai de livraison",
                  description:
                    "Devis sous 48h et un seul interlocuteur dédié pour votre projet.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                >
                  <div className="text-4xl font-extrabold text-secondary mb-2">
                    {p.stat}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ spécifique À propos */}
          <AboutFAQ />
        </motion.div>
      </div>
    </>
  );
}
