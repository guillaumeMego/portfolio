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
const LocalFAQ = dynamic(() => import("@/components/LocalFAQ"), {
  ssr: true,
});

export default function CreationSiteWebAngouleme() {
  return (
    <div className="min-h-screen pt-28 pb-0 text-foreground relative">
      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(204,85,0,0.1)_0%,transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-6">
              🎯 Expert local Angoulême
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Création de site web à Angoulême –<br />
              <span className="text-[#CC5500]">freelance dès 990 €</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
              🚀 Un expert local pour booster votre visibilité
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              Je suis{" "}
              <strong className="text-[#CC5500]">Guillaume Ganne</strong>,
              développeur web full‑stack et web designer freelance basé à
              Angoulême. J&apos;accompagne les entrepreneurs, artisans et PME de
              la région dans la{" "}
              <strong className="text-[#CC5500]">
                création de site web à Angoulême
              </strong>{" "}
              performante, rapide et optimisée pour le référencement local. Mon
              objectif : concevoir un site qui vous ressemble, qui se charge
              vite et qui vous apporte des{" "}
              <strong className="text-[#CC5500]">contacts qualifiés</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Demander un devis gratuit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Réserver un appel
              </a>
            </div>

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

      {/* Section Expertise locale */}
      <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
              ⭐ Expertise locale
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Une expertise locale au service de votre{" "}
              <span className="text-[#CC5500]">visibilité</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sites sur‑mesure, performance, sécurité et technologies modernes :
              tout est pensé pour votre{" "}
              <strong className="text-[#CC5500]">visibilité à Angoulême</strong>{" "}
              et en Charente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#CC5500]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Sites sur‑mesure
                  </h3>
                  <p className="text-gray-600">
                    Sites vitrines, e‑commerce ou applications web : chaque
                    projet est unique et aligné sur vos objectifs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#CC5500]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Performance garantie
                  </h3>
                  <p className="text-gray-600">
                    Sites rapides, notés 90+ sur Google PageSpeed et optimisés
                    pour Angoulême et la Charente.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#CC5500]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Sécurité & conformité
                  </h3>
                  <p className="text-gray-600">
                    Protection des données, conformité RGPD et mises à jour
                    régulières.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-[#CC5500]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Technologies modernes
                  </h3>
                  <p className="text-gray-600">
                    Next.js, React, WordPress… Des outils puissants pour des
                    sites évolutifs et durables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mes prestations */}
      <section className="relative z-10 bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
              💰 Tarifs transparents
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Tarifs – dès <span className="text-[#CC5500]">990 €</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Site vitrine dès 990 €
              </h3>
              <p className="text-muted-foreground mb-6">
                Un site moderne, rapide et optimisé SEO local pour présenter
                votre activité et générer des contacts.
              </p>
              <div className="text-3xl font-bold text-[#2C3E50]">990 €</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Site e-commerce dès 1 490 €
              </h3>
              <p className="text-muted-foreground mb-6">
                Une boutique en ligne performante avec paiement sécurisé,
                gestion des produits et pages optimisées pour la conversion.
              </p>
              <div className="text-3xl font-bold text-[#2C3E50]">1 490 €</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Application web sur-mesure
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
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-6">
            Chaque projet inclut l’hébergement, le design, l’optimisation SEO
            local et un accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* Section Mes garanties */}
      <section className="relative z-10 bg-[#ECF0F1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
              Mes garanties
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

      {/* Section Ma méthode de travail */}
      <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
              🚀 Ma méthode
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ma méthode de <span className="text-[#CC5500]">travail</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus rodé en 5 étapes pour créer votre site web parfait
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Étapes 1-2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#CC5500] font-bold text-2xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                      Écoute & conseil personnalisé
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      On définit ensemble vos besoins précis lors d&apos;un
                      premier échange. J&apos;analyse votre secteur et vous
                      conseille sur la meilleure approche.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#CC5500] font-bold text-2xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                      Maquettes sur‑mesure (Figma)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Design clair et moderne avant développement. Vous
                      visualisez votre futur site et validez chaque élément.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étapes 3-4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#CC5500] font-bold text-2xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                      Développement & optimisation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Code propre, SEO friendly, 100% responsive. Performance
                      garantie et compatibilité tous appareils.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#CC5500] font-bold text-2xl">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                      Tests & mise en ligne
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vérifications techniques et sécurité complètes. Tests sur
                      tous navigateurs avant la mise en production.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 5 - centrée */}
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300 max-w-md">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#CC5500] font-bold text-2xl">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                      Formation & accompagnement
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Je vous rends autonome pour gérer votre site. Formation
                      complète et support inclus.
                    </p>
                  </div>
                </div>
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
              Témoignages clients
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
                &ldquo;Je recommande à 100 % ! Guillaume a été incroyable du
                début à la fin. Très à l&apos;écoute, professionnel, réactif et
                surtout investi.&rdquo;
              </p>
              <div>
                <p className="font-semibold">Mélanie Le Goff (juin 2024)</p>
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
                &ldquo;Je ne remercierai jamais assez Guillaume pour son
                professionnalisme et ses conseils de qualité. Sans lui, mon site
                ne serait pas aussi performant !&rdquo;
              </p>
              <div>
                <p className="font-semibold">
                  Les Créas de Rose Bleue (février 2024)
                </p>
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
              Zone d&apos;intervention à Angoulême
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
              Intervention à Angoulême et Grand Angoulême, avec possibilité
              d’accompagnement à distance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-4">
                Centre-ville et quartiers
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Saint-Cybard</li>
                <li>La Grand-Font</li>
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
                <li>Gond-Pontouvre</li>
                <li>Ruelle-sur-Touvre</li>
                <li>L’Isle d’Espagnac</li>
              </ul>
            </div>
            <div className="bg-white/80 p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-4">À distance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Charente</li>
                <li>Nouvelle-Aquitaine</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-6">
            Disponible aussi à distance dans toute la Charente et la
            Nouvelle‑Aquitaine.
          </p>
        </div>
      </section>

      {/* Section FAQ */}
      <LocalFAQ />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
