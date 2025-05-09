"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DotPattern from "@/components/ui/dot-pattern";
import { Code, Palette } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-background relative my-24">
        <DotPattern className="absolute inset-0 opacity-50 z-0" />
        <motion.div
          className="max-w-7xl mx-auto relative z-10 space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Introduction SEO-rich */}
          <section className="space-y-6">
            <h1 className="text-4xl font-extrabold text-primary">
              À propos de moi
            </h1>
            <p className="text-base md:text-lg leading-relaxed font-normal">
              Basé à Angoulême, je suis <strong>Guillaume Ganne</strong>,
              développeur web full stack et designer UX/UI, passionné par la
              création de
              <br className="hidden md:block" /> solutions digitales
              performantes. Avec plusieurs années d&apos;expérience,
              j&apos;accompagne artisans, PME et créateurs dans la réalisation
              de sites internet sur-mesure, optimisés pour le SEO local et la
              conversion client.
            </p>
          </section>

          {/* Section Bio & Image */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/guillaume.png"
                  alt="Portrait de Guillaume Ganne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4 leading-relaxed">
                  Depuis mes débuts, j&apos;ai travaillé sur des sites vitrines,
                  boutiques en ligne et applications métier. Je maîtrise
                  Next.js, React et WordPress, en appliquant les standards
                  Opquast pour garantir accessibilité et performance.
                </p>
                <p className="leading-relaxed">
                  Mon objectif : transformer votre idée en un site unique, qui
                  reflète votre identité et génère des résultats concrets
                  (trafic, leads, ventes).
                </p>
                <Link
                  href="/contact"
                  className="mt-6 bg-primary inline-block px-10 py-4 text-white rounded-full hover:bg-primary/80 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-primary/50 hover:shadow-primary/30"
                >
                  Discutons de votre projet
                </Link>
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
                  <h2 className="text-2xl font-semibold text-foreground">
                    Conception web sur-mesure
                  </h2>
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Je conçois des sites vitrines et e-commerce adaptés à votre
                  marque : design personnalisé, structure SEO-first, et
                  intégration WordPress ou CMS headless.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground ml-4">
                  <li>
                    Analyse des besoins et UX research pour un parcours
                    utilisateur optimisé
                  </li>
                  <li>Maquettes Figma interactives validées étape par étape</li>
                  <li>
                    Développement front-end performant et back-end sécurisé
                  </li>
                  <li>Formation pour prise en main autonome du site</li>
                </ul>
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
                  <h2 className="text-2xl font-semibold text-foreground">
                    Design UX/UI avancé
                  </h2>
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Création d&apos;interfaces intuitives et esthétiques, basées
                  sur une méthodologie centrée utilisateur et conforme aux
                  normes accessibilité Opquast.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-foreground ml-4">
                  <li>
                    Wireframes et prototypes clairs pour valider chaque
                    fonctionnalité
                  </li>
                  <li>
                    Design system modulable pour maintenir la consistance
                    visuelle
                  </li>
                  <li>Tests utilisateurs et ajustements itératifs</li>
                  <li>Documents de style et guidelines pour votre équipe</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Section Preuves */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-primary">
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
        </motion.div>
      </div>
    </>
  );
}
