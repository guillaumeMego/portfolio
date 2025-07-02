import { metadata } from "./metadata";

import Image from "next/image";
import {
  MapPin,
  Star,
  Zap,
  Users,
  TrendingUp,
  Leaf,
  Code,
  Shield,
  Laptop,
} from "lucide-react";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import dynamic from "next/dynamic";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const CTASection = dynamic(() => import("@/components/CTASection"), {
  ssr: true,
});

export default function CreationSiteWebAngouleme() {
  return (
    <div className="min-h-screen pt-28 pb-0 text-foreground relative">
      {/* Hero Section */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8">
              création de sites web à angoulême
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Développeur freelance spécialisé dans la création de sites web
              performants pour les entreprises d&apos;Angoulême et son
              agglomération.
            </p>
            <div className="relative inline-block">
              <Image
                src="/images/mascotte/mascotte-portable-guillaume-ganne.webp"
                alt="Mascotte avec un ordinateur portable"
                width={120}
                height={120}
                className="absolute -bottom-16 -right-32 hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section className="relative z-10 bg-[#ECF0F1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
                Une expertise locale au service de votre visibilité
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Sites sur-mesure</strong>
                    <p>
                      Vitrines, e-commerce ou applications web, chaque projet
                      est unique et adapté à vos objectifs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Performance garantie</strong>
                    <p>
                      Sites rapides notés 90+ sur Google PageSpeed, optimisés
                      pour le référencement local.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Sécurité & Conformité</strong>
                    <p>
                      Protection des données, conformité RGPD et mises à jour
                      régulières.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Laptop className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Technologies modernes</strong>
                    <p>
                      Next.js, React, WordPress... Des outils puissants pour des
                      sites performants.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/mascotte/mascotte-figma-guillaume-ganne.webp"
                  alt="Mascotte avec Figma"
                  width={100}
                  height={100}
                  className="absolute -bottom-16 -left-24 hidden md:block"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Ma méthode</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      1
                    </span>
                    <span>Écoute & conseil personnalisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      2
                    </span>
                    <span>Maquettes sur-mesure (Figma)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      3
                    </span>
                    <span>Développement & optimisation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      4
                    </span>
                    <span>Tests & mise en ligne</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      5
                    </span>
                    <span>Formation & accompagnement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Avantages locaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Proximité & réactivité</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Réseau de professionnels locaux</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>SEO local optimisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    <span>Engagement durable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
              Ils me font confiance
            </h2>
            <Image
              src="/images/mascotte/mascotte-cafe-guillaume-ganne.webp"
              alt="Mascotte avec un café"
              width={100}
              height={100}
              className="absolute -top-10 -right-20 hidden md:block"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Avis 1 - Mélanie */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  Il y a 2 semaines
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                &ldquo;Je recommande à 100% ! Il a été incroyable du début à la
                fin. Très à l&apos;écoute, professionnel, réactif et surtout
                investi...&rdquo;
              </p>
              <div>
                <p className="font-semibold">Mélanie Le Goff</p>
                <p className="text-sm text-gray-500">Juin 2024</p>
              </div>
            </div>

            {/* Avis 2 - Les créas de Rose Bleue */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  Il y a 6 semaines
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                &ldquo;Je ne remercierais jamais assez Guillaume pour son
                professionnalisme et ses conseils de qualités. Sans lui, mon
                site ne...&rdquo;
              </p>
              <div>
                <p className="font-semibold">Les créas de Rose Bleue</p>
                <p className="text-sm text-gray-500">Février 2024</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://g.co/kgs/UWrvhD9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Voir tous les avis Google</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section Zone d'intervention */}
      <section className="relative z-10 bg-[#ECF0F1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
              Zone d&apos;intervention
            </h2>
            <Image
              src="/images/mascotte/carte-angouleme-france.webp"
              alt="Mascotte avec un drapeau français"
              width={100}
              height={100}
              className="absolute -top-10 -left-20 hidden md:block"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Angoulême Centre et Quartiers
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Centre-ville</li>
                <li>Saint-Cybard</li>
                <li>La Grand-Font</li>
                <li>Ma Campagne</li>
                <li>Bel-Air/La Grand-Font</li>
              </ul>
            </div>
            <div className="bg-white/80 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Agglomération
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>L&apos;Isle d&apos;Espagnac</li>
                <li>Soyaux</li>
                <li>La Couronne</li>
                <li>Saint-Yrieix</li>
                <li>Gond-Pontouvre</li>
                <li>Ruelle-sur-Touvre</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
