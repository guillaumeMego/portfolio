import { metadata } from "./metadata";

import Image from "next/image";
import Script from "next/script";
import {
  Eye,
  EyeOff,
  Search,
  TrendingUp,
  AlertTriangle,
  Zap,
  CheckCircle,
  Users,
  Target,
  Mail,
  Calendar,
  ExternalLink,
  FileText,
  Globe,
  Star,
  Gauge,
} from "lucide-react";
import dynamic from "next/dynamic";

const CTASection = dynamic(() => import("@/components/CTASection"), {
  ssr: true,
});

export default function SiteJoliMaisInvisible() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Un beau site suffit-il à attirer des clients ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Sans optimisation SEO, votre site reste invisible sur Google, peu importe le design.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi mon site n'apparaît pas sur Google ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Souvent à cause du manque de contenu, d'optimisation technique ou d'absence de SEO local.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte une refonte optimisée SEO ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "À partir de 990 € pour un site vitrine performant et optimisé localement.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Ton site est joli mais invisible ? Voici pourquoi et comment y remédier",
    description:
      "Un beau site ne suffit pas. Découvrez pourquoi votre site reste invisible et comment booster votre visibilité sur Google.",
    image: "/images/creation-site-vitrine-angouleme.webp",
    author: {
      "@type": "Person",
      name: "Guillaume Ganne",
      url: "https://www.guillaumeganne.com",
    },
    publisher: {
      "@type": "Person",
      name: "Guillaume Ganne",
    },
    datePublished: "2024-12-20",
    dateModified: "2024-12-20",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.guillaumeganne.com/blog/site-joli-mais-invisible/",
    },
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="min-h-screen pt-28 pb-0 text-foreground relative">
        {/* Hero Section */}
        <section className="relative z-10 bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(204,85,0,0.1)_0%,transparent_50%)]"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-6">
                👀 Visibilité web
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
                Ton site est joli… mais personne ne te{" "}
                <span className="text-[#CC5500]">trouve ?</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
                Un restaurateur m'a dit un jour : « Mon site est superbe, mais
                personne ne me trouve sur Google. » C'est une erreur que je vois
                tous les jours chez les artisans, commerçants et entrepreneurs.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
                👉 La vérité : un beau site sans visibilité est comme une
                boutique dans une ruelle sombre. Tu peux avoir la plus belle
                vitrine, mais si personne ne passe devant, tu ne vends rien.
              </p>

              {/* Vidéo YouTube intégrée */}
              <div className="max-w-sm mx-auto mb-8">
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/pA-1fZ2gYwI"
                    title="Site invisible sur Google - Solutions SEO"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Découvrez pourquoi votre site reste invisible
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Audit gratuit de visibilité
                </a>
                <a
                  href="https://calendly.com/guillaume-ganne/30min?background_color=ecf0f1&text_color=0e141a&primary_color=2c3e50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Réserver un appel
                </a>
              </div>

              <div className="relative inline-block">
                <Image
                  src="/images/mascotte/mascotte-portable-guillaume-ganne.webp"
                  alt="Expert SEO et visibilité web - audit gratuit site invisible"
                  width={120}
                  height={120}
                  className="absolute -bottom-16 -right-32 hidden md:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Le piège du site vitrine esthétique */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🎨 Piège esthétique
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Le piège du "site vitrine" esthétique mais{" "}
                <span className="text-[#CC5500]">vide</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                La plupart des <strong>sites invisibles</strong> que je croise à
                Angoulême ou ailleurs se ressemblent :
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <EyeOff className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  Une belle bannière avec une photo stock
                </li>
                <li className="flex items-start gap-3">
                  <EyeOff className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  3 phrases génériques : "Bienvenue, nous sommes professionnels,
                  contactez-nous"
                </li>
                <li className="flex items-start gap-3">
                  <EyeOff className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  Une page contact avec un formulaire
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-xl max-w-4xl mx-auto mb-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Le problème :
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Google ne comprend pas</strong> ce que fait ton site.
                Pas de mots-clés, pas de structure claire, pas de contenu utile.
                Résultat : il n'apparaît jamais sur les{" "}
                <strong>recherches locales</strong> des clients.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                📌 Exemple :
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un coiffeur met juste "Bienvenue dans mon salon de coiffure".
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                👉 Mais personne ne tape ça dans Google. Les gens cherchent{" "}
                <strong>"coiffeur Angoulême avis"</strong> ou{" "}
                <strong>"coiffure mariage Charente"</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Google ne référence pas le beau */}
        <section className="relative z-10 bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🔍 Réalité Google
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Google ne référence pas le "beau", mais le{" "}
                <span className="text-[#CC5500]">"clair"</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Vitesse de chargement
                    </h3>
                    <p className="text-gray-600">
                      90+ sur PageSpeed = indispensable
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Mots-clés bien placés
                    </h3>
                    <p className="text-gray-600">
                      Titres, textes, balises optimisés
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Contenu pertinent
                    </h3>
                    <p className="text-gray-600">
                      Répondre aux vraies questions des clients
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Liens entrants
                    </h3>
                    <p className="text-gray-600">
                      Autres sites qui parlent du tien
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto mt-8">
                Un design moderne aide pour rassurer le client, mais ce n'est
                pas ce qui fait que tu es trouvé. 👉 Ce qui compte, c'est le{" "}
                <strong>SEO</strong> et l'
                <strong>expérience utilisateur</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Chaque seconde perdue */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                ⏱️ Performance critique
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Chaque seconde perdue = des clients en{" "}
                <span className="text-[#CC5500]">moins</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      4 secondes de chargement
                    </h3>
                    <p className="text-gray-600">= 60% des visiteurs perdus</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Site mal structuré
                    </h3>
                    <p className="text-gray-600">
                      = retour immédiat vers la concurrence
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-xl max-w-4xl mx-auto mt-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                💡 Étude :
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• 1 seconde de chargement en plus = –20% de conversions</li>
                <li>• 6 secondes = tu perds 70% de tes prospects</li>
              </ul>
              <p className="text-lg text-gray-700 font-medium mt-4">
                👉 Moralité : un beau site lent et <strong>invisible</strong> ne
                sert à rien.
              </p>
            </div>
          </div>
        </section>

        {/* Section Solutions pour rendre visible */}
        <section className="relative z-10 bg-[#ECF0F1]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🚀 Solutions efficaces
              </div>
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
                Les solutions pour rendre ton site{" "}
                <span className="text-[#CC5500]">visible</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Voici ce que je mets en place pour mes clients à{" "}
                <strong>Angoulême</strong> et en <strong>Charente</strong> :
              </p>
            </div>

            {/* Optimiser le contenu */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 text-center">
                a) Optimiser le contenu
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Contenu riche
                  </h4>
                  <p className="text-gray-600 text-sm">
                    600 à 1500 mots par page
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Mots-clés locaux
                  </h4>
                  <p className="text-gray-600 text-sm">
                    "création site internet Angoulême"
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Structure H1-H3
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Pour que Google comprenne
                  </p>
                </div>
              </div>
            </div>

            {/* Booster la vitesse */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 text-center">
                b) Booster la vitesse
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Sites rapides
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Next.js / WordPress optimisé
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Score 90+
                  </h4>
                  <p className="text-gray-600 text-sm">PageSpeed garanti</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Hébergement
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sécurisé et performant
                  </p>
                </div>
              </div>
            </div>

            {/* SEO local et machine à clients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 text-center">
                  c) Travailler le SEO local
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-gray-700">
                      • Fiche <strong>Google Business</strong> optimisée
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-gray-700">
                      • <strong>Avis clients</strong> intégrés au site
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-gray-700">
                      • Liens depuis des <strong>sites locaux</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 text-center">
                  d) Machine à clients
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-gray-700">
                      • <strong>CTA clairs</strong> : "Demander un devis"
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-gray-700">
                      • Suivi <strong>Google Analytics</strong>
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-gray-700">
                      • <strong>Stratégie de contenu</strong> : blog, vidéos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Cas client */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                📈 Cas client
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Cas concret : un artisan à{" "}
                <span className="text-[#CC5500]">Angoulême</span>
              </h2>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-[#CC5500]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <a
                    href="/creation-site-web-angouleme"
                    className="text-[#CC5500] hover:underline"
                  >
                    Artisan à Angoulême
                  </a>
                </h3>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Problème :</strong> Site magnifique, mais introuvable
                  sur Google
                </p>
                <p>
                  <strong>Diagnostic :</strong> Aucun contenu optimisé, pas de{" "}
                  <strong>mots-clés locaux</strong>
                </p>
                <p>
                  <strong>Solution :</strong> Réécriture des pages +
                  optimisation technique + <strong>SEO local</strong>
                </p>
                <div className="bg-green-50 p-8 rounded-xl text-center">
                  <p className="text-2xl font-bold text-green-600 mb-2">
                    De 0 → 12 nouveaux clients
                  </p>
                  <p className="text-gray-600">en seulement 2 mois</p>
                </div>
                <p className="text-center font-medium">
                  Position top 3 sur "artisan [métier] Angoulême"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="relative z-10 bg-[#ECF0F1]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                ❓ FAQ
              </div>
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
                FAQ sur la{" "}
                <span className="text-[#CC5500]">visibilité web</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Un beau site suffit-il à attirer des clients ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Non. Sans <strong>optimisation SEO</strong>, votre site reste
                  invisible sur Google, peu importe le design.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Pourquoi mon site n'apparaît pas sur Google ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Souvent à cause du manque de contenu, d'optimisation technique
                  ou d'absence de <strong>SEO local</strong>.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Combien coûte une refonte optimisée SEO ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  À partir de 990 € pour un <strong>site vitrine</strong>{" "}
                  performant et optimisé localement.{" "}
                  <a
                    href="/tarif"
                    className="text-[#CC5500] hover:underline font-medium"
                  >
                    Découvrez mes tarifs pour créer un site visible
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Conclusion et CTA */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🎯 Conclusion
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Conclusion & appel à{" "}
                <span className="text-[#CC5500]">l'action</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                👉 Un <strong>site joli mais invisible</strong> est un piège
                pour ton business. Tu crois avoir investi dans ton image, mais
                tu passes à côté de dizaines de clients chaque mois.
              </p>
              <p className="text-lg text-gray-600 mb-10">
                La bonne nouvelle ? Tu peux corriger ça rapidement. Je crée des{" "}
                <strong>sites rapides</strong>, optimisés SEO et pensés pour
                convertir.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="https://search.google.com/search-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Vérifier ma visibilité
                </a>
                <a
                  href="mailto:guillaumeganne.dev@gmail.com?subject=Audit gratuit - Site invisible&body=Bonjour Guillaume, mon site est joli mais personne ne me trouve sur Google. Je souhaite un audit gratuit de visibilité."
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Audit gratuit par email
                </a>
              </div>
              <p className="text-center text-gray-600 mt-6">
                📩 Demande ton audit gratuit aujourd'hui → réponse en 24h
                <br />
                🚀 Transforme ton site vitrine en machine à clients
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
