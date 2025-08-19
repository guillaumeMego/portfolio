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
  CheckCircle,
  Calendar,
  Mail,
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
              création de site web à angoulême dès 990 €
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              un expert local pour booster votre visibilité
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
              Basé à Angoulême, je suis développeur web freelance spécialisé
              dans la création de sites internet performants pour les
              entrepreneurs, artisans et PME de la région.
              <br />
              Mon objectif est simple : vous aider à attirer de nouveaux clients
              grâce à un site qui vous ressemble et qui vous fait gagner en
              visibilité locale.
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

      {/* Section Pourquoi choisir un freelance local */}
      <section className="relative z-10 bg-[#ECF0F1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
              pourquoi choisir un freelance local plutôt qu'une agence ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Contrairement à une agence impersonnelle, je vous propose :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Users className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Un accompagnement humain et personnalisé
                  </h3>
                  <p className="text-muted-foreground">
                    Un seul interlocuteur du début à la fin.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Des tarifs accessibles
                  </h3>
                  <p className="text-muted-foreground">
                    Des sites vitrines professionnels dès 990 €.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Code className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Une expertise polyvalente
                  </h3>
                  <p className="text-muted-foreground">
                    Design, développement, référencement, optimisation.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Une proximité géographique
                  </h3>
                  <p className="text-muted-foreground">
                    Rendez-vous rapides à Angoulême et son agglomération.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mes prestations */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
              mes prestations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                site vitrine dès 990 €
              </h3>
              <p className="text-muted-foreground mb-6">
                Un site moderne, rapide, optimisé pour présenter votre activité
                et générer des contacts.
              </p>
              <div className="text-3xl font-bold text-[#2C3E50]">990 €</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                site e-commerce dès 1800 €
              </h3>
              <p className="text-muted-foreground mb-6">
                Une boutique en ligne performante avec paiement sécurisé et
                gestion des produits.
              </p>
              <div className="text-3xl font-bold text-[#2C3E50]">1800 €</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                application web sur-mesure
              </h3>
              <p className="text-muted-foreground mb-6">
                Solutions personnalisées pour des besoins spécifiques
                (réservations, espace membre, outils internes).
              </p>
              <div className="text-lg font-semibold text-[#2C3E50]">
                Sur devis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mes garanties */}
      <section className="relative z-10 bg-[#ECF0F1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
              mes garanties
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
              <div>
                <strong>Performance garantie</strong>
                <p className="text-muted-foreground">
                  90+ sur Google PageSpeed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
              <div>
                <strong>SEO local optimisé</strong>
                <p className="text-muted-foreground">
                  Pour apparaître sur Google à Angoulême et alentours.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
              <div>
                <strong>Sécurité & conformité RGPD</strong>
                <p className="text-muted-foreground">
                  Vos données et celles de vos clients sont protégées.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Laptop className="w-6 h-6 text-[#AD5100] flex-shrink-0 mt-1" />
              <div>
                <strong>Design moderne et responsive</strong>
                <p className="text-muted-foreground">
                  Compatible mobile, tablette et ordinateur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Ma méthode en 5 étapes */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
              ma méthode en 5 étapes
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Écoute & conseil</h3>
                <p className="text-sm text-muted-foreground">
                  on définit ensemble vos objectifs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Maquettes Figma</h3>
                <p className="text-sm text-muted-foreground">
                  aperçu visuel avant développement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Développement optimisé</h3>
                <p className="text-sm text-muted-foreground">
                  Next.js, React, WordPress.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Tests & mise en ligne</h3>
                <p className="text-sm text-muted-foreground">
                  validation qualité et performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  5
                </div>
                <h3 className="font-semibold mb-2">
                  Formation & accompagnement
                </h3>
                <p className="text-sm text-muted-foreground">
                  vous prenez la main facilement.
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
      </section>

      {/* Section Témoignages */}
      <section className="relative z-10 bg-[#ECF0F1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
              témoignages clients
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
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                &ldquo;Je recommande à 100% ! Très à l'écoute, réactif et
                professionnel. Mon site attire enfin de nouveaux clients.&rdquo;
              </p>
              <div>
                <p className="font-semibold">Mélanie L., Angoulême</p>
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
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">
                &ldquo;Guillaume a su me conseiller et développer un site
                e-commerce rapide et optimisé. Un vrai plus pour mon
                activité.&rdquo;
              </p>
              <div>
                <p className="font-semibold">Les Créas de Rose Bleue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Zone d'intervention */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
              zone d'intervention
            </h2>
            <Image
              src="/images/mascotte/carte-angouleme-france.webp"
              alt="Mascotte avec un drapeau français"
              width={100}
              height={100}
              className="absolute -top-10 -left-20 hidden md:block"
            />
          </div>
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              Je travaille avec des clients sur tout le Grand Angoulême :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-4">Centre-ville</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Saint-Cybard</li>
                <li>Ma Campagne</li>
                <li>Bel-Air</li>
              </ul>
            </div>
            <div className="bg-white/80 p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-4">Agglomération</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Soyaux</li>
                <li>La Couronne</li>
                <li>Saint-Yrieix</li>
              </ul>
            </div>
            <div className="bg-white/80 p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-4">Périphérie</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Gond-Pontouvre</li>
                <li>Ruelle-sur-Touvre</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="relative z-10 bg-[#ECF0F1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
              prêt à lancer votre site web à angoulême ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Ne perdez plus de temps avec un site lent ou mal référencé.
              Boostez votre activité avec un site professionnel dès 990 €.
            </p>
            <p className="text-lg font-semibold text-[#2C3E50] mb-8">
              👉 Réservez votre créneau en ligne ou contactez-moi dès maintenant
              :
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/guillaume-ganne/30min?background_color=ecf0f1&text_color=0e141a&primary_color=2c3e50"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Réserver sur Calendly
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                Envoyer un message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
