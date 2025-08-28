import { metadata } from "./metadata";

import Image from "next/image";
import Script from "next/script";
import {
  Eye,
  EyeOff,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Zap,
  CheckCircle,
  Users,
  Target,
  Mail,
  Calendar,
  ExternalLink,
  Smartphone,
  Monitor,
  Star,
  Gauge,
  Search,
  ShoppingCart,
} from "lucide-react";
import dynamic from "next/dynamic";

const CTASection = dynamic(() => import("@/components/CTASection"), {
  ssr: true,
});

export default function SiteMocheClientsFuient() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte une refonte de site ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un site vitrine moderne et optimisé démarre à 990 €, selon les besoins spécifiques.",
        },
      },
      {
        "@type": "Question",
        name: "Mon site est lent mais pas moche, dois-je refaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Même si le design est correct, la lenteur tue vos conversions et votre SEO.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je garder mon contenu actuel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, mais il doit être optimisé (textes, titres, images). La refonte met en valeur ce que vous avez déjà.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Site moche = clients qui fuient : pourquoi et comment y remédier",
    description:
      "Un site daté ou mal conçu fait fuir vos clients en 3 secondes. Découvrez comment une refonte moderne et optimisée SEO peut doubler vos conversions.",
    image: "/images/vitrine.webp",
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
      "@id": "https://www.guillaumeganne.com/blog/site-moche-clients-fuient/",
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
                🎨 Design moderne
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
                Comme une vitrine sale, un site moche fait fuir tes{" "}
                <span className="text-[#CC5500]">clients</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
                Imagine : tu passes devant une boutique avec une vitrine
                poussiéreuse, mal éclairée, avec des affiches jaunies. 👉
                Rentres-tu ? Non. Tu traverses la rue et vas chez le concurrent.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
                Ton <strong>site web</strong> fonctionne exactement de la même
                façon. En 3 secondes, un visiteur décide si tu es professionnel…
                ou amateur. Et si ton site date encore de 2010, tu leur envoies
                le mauvais signal.
              </p>

              {/* Vidéo YouTube intégrée - utilise une vidéo générique pour l'instant */}
              <div className="max-w-sm mx-auto mb-8">
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CC5500]/20 to-[#CC5500]/10 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-12 h-12 text-[#CC5500] mx-auto mb-2" />
                      <p className="text-[#CC5500] font-semibold">
                        Design moderne
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  L'impact d'un design moderne sur vos conversions
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Audit gratuit de design
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
                  alt="Expert refonte site web - design moderne et conversions optimisées"
                  width={120}
                  height={120}
                  className="absolute -bottom-16 -right-32 hidden md:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Pourquoi ton site repousse les clients */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                ❌ Problèmes design
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pourquoi ton site repousse les{" "}
                <span className="text-[#CC5500]">clients</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Un <strong>site moche</strong> ou daté crée immédiatement de la
                méfiance :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Navigation compliquée
                    </h3>
                    <p className="text-gray-600">→ on part ailleurs</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <EyeOff className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Design vieillot
                    </h3>
                    <p className="text-gray-600">→ entreprise dépassée</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Pas mobile-friendly
                    </h3>
                    <p className="text-gray-600">→ 70% des visiteurs perdus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto mt-8">
                👉 Résultat : peu importe la qualité de ton service, le client
                ne clique même pas sur "contact".
              </p>
            </div>
          </div>
        </section>

        {/* Section Le poids des 3 premières secondes */}
        <section className="relative z-10 bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                ⏱️ Première impression
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Le poids des 3 premières{" "}
                <span className="text-[#CC5500]">secondes</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-[#CC5500]" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  3 secondes
                </h3>
                <p className="text-gray-600">Temps de décision d'un visiteur</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#CC5500]" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  75% des internautes
                </h3>
                <p className="text-gray-600">
                  Jugent la crédibilité sur le design
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  88% des utilisateurs
                </h3>
                <p className="text-gray-600">
                  Ne reviennent jamais après une mauvaise expérience
                </p>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-xl max-w-4xl mx-auto mt-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                💡 Exemple :
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Un artisan à{" "}
                <a
                  href="/creation-site-web-angouleme"
                  className="text-[#CC5500] hover:underline font-medium"
                >
                  Angoulême
                </a>{" "}
                avait un site des années 2000, illisible sur mobile. Après{" "}
                <strong>refonte</strong> : +120% de demandes de devis en 2 mois.
              </p>
            </div>
          </div>
        </section>

        {/* Section Un site moderne double tes conversions */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                📈 Conversions x2
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Un site moderne double tes{" "}
                <span className="text-[#CC5500]">conversions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Contrairement à ce qu'on croit, tu n'as pas besoin de changer
                ton offre. Souvent, il suffit de :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Design épuré
                    </h3>
                    <p className="text-gray-600">
                      Standards actuels, mobile-first
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Vitesse optimisée
                    </h3>
                    <p className="text-gray-600">90+ sur Google PageSpeed</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Avis clients
                    </h3>
                    <p className="text-gray-600">Témoignages et rassurance</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      SEO local
                    </h3>
                    <p className="text-gray-600">
                      Contenu structuré et optimisé
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto mt-8">
                📌 Résultat : ton site inspire confiance et attire des{" "}
                <strong>clients qualifiés</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section La refonte : un investissement rentable */}
        <section className="relative z-10 bg-[#ECF0F1]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                💰 Investissement rentable
              </div>
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
                La refonte : un investissement{" "}
                <span className="text-[#CC5500]">rentable</span>
              </h2>
            </div>

            {/* Ce qu'apporte une refonte */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 text-center">
                Ce qu'apporte une refonte web
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900">
                      Design moderne
                    </h4>
                  </div>
                  <p className="text-gray-600">→ tu parais professionnel</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900">
                      Navigation claire
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    → les gens trouvent vite ce qu'ils cherchent
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900">
                      Optimisation SEO
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    → ton site apparaît sur Google
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900">
                      Mobile fluide
                    </h4>
                  </div>
                  <p className="text-gray-600">→ indispensable en 2025</p>
                </div>
              </div>
            </div>

            {/* Exemple concret */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 text-center">
                Exemple concret
              </h3>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-10 h-10 text-[#CC5500]" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Un commerçant en <strong>Charente</strong> avait un site
                e-commerce lent et daté. Après <strong>refonte moderne</strong>{" "}
                → son taux de conversion a doublé, sans changer ses prix ni ses
                produits.
              </p>
            </div>
          </div>
        </section>

        {/* Section Comment savoir si refonte nécessaire */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🔍 Auto-diagnostic
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Comment savoir si ton site a besoin d'une{" "}
                <span className="text-[#CC5500]">refonte ?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pose-toi ces questions :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Mobile-friendly ?
                    </h3>
                    <p className="text-gray-600">
                      Lisible et rapide sur smartphone
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Design moderne ?
                    </h3>
                    <p className="text-gray-600">Ou encore style années 2010</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      PageSpeed 90+ ?
                    </h3>
                    <p className="text-gray-600">Score Google PageSpeed</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Contacts suffisants ?
                    </h3>
                    <p className="text-gray-600">Reçois-tu assez de demandes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto mt-8">
                👉 Si tu as répondu "oui" à 2 de ces questions, ton{" "}
                <strong>site repousse</strong> probablement tes clients.
              </p>
            </div>
          </div>
        </section>

        {/* Section Ce que je propose */}
        <section className="relative z-10 bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🚀 Mes services
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ce que je <span className="text-[#CC5500]">propose</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que <strong>développeur web freelance</strong> à
                Angoulême, je conçois :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-[#CC5500]" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">
                  Sites vitrines modernes
                </h3>
                <p className="text-gray-600 mb-4">Design épuré et performant</p>
                <div className="text-2xl font-bold text-[#CC5500]">
                  dès 990 €
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-[#CC5500]" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">
                  E-commerce performants
                </h3>
                <p className="text-gray-600 mb-4">
                  Boutiques qui convertissent
                </p>
                <div className="text-2xl font-bold text-[#CC5500]">
                  dès 1490 €
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Refonte complète
                    </h3>
                    <p className="text-gray-600">
                      Niveau des meilleures agences
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
                      SEO local optimisé
                    </h3>
                    <p className="text-gray-600">Angoulême et Charente</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#CC5500]/5 p-8 rounded-xl max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                💬 Ton site date encore de 2010 ? Mets <strong>REFONTE</strong>{" "}
                en commentaire ou contacte-moi → je t'explique comment
                transformer ta <strong>vitrine digitale</strong> en machine à
                clients.
              </p>
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
                FAQ sur la <span className="text-[#CC5500]">refonte web</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Combien coûte une refonte de site ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un <strong>site vitrine moderne</strong> et optimisé démarre à
                  990 €, selon les besoins spécifiques.{" "}
                  <a
                    href="/tarif"
                    className="text-[#CC5500] hover:underline font-medium"
                  >
                    Découvrez mes tarifs pour une refonte moderne
                  </a>
                  .
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Mon site est lent mais pas "moche", dois-je refaire ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui. Même si le <strong>design</strong> est correct, la
                  lenteur tue vos conversions et votre SEO.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Puis-je garder mon contenu actuel ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, mais il doit être optimisé (textes, titres, images). La{" "}
                  <strong>refonte</strong> met en valeur ce que vous avez déjà.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Conclusion */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🎯 Conclusion
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Conclusion
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                👉 Un <strong>site moche</strong> ou daté, c'est comme une
                vitrine sale : tu fais fuir tes clients sans t'en rendre compte.
                Mais une <strong>refonte moderne</strong>, rapide et optimisée
                SEO peut doubler tes conversions sans changer ton offre.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
                <a
                  href="https://pagespeed.web.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Gauge className="w-5 h-5 mr-2" />
                  Tester mon site maintenant
                </a>
                <a
                  href="mailto:guillaumeganne.dev@gmail.com?subject=Audit gratuit - Site moche&body=Bonjour Guillaume, mon site a besoin d'une refonte moderne. Je souhaite un audit gratuit pour améliorer mon design et mes conversions."
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Audit gratuit par email
                </a>
              </div>
              <p className="text-center text-gray-600">
                📩 Contacte-moi aujourd'hui pour ton audit gratuit
                <br />
                🚀 Transforme ton site en machine à clients
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
