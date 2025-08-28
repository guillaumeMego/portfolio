import { metadata } from "./metadata";

import Image from "next/image";
import Script from "next/script";
import {
  Clock,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Zap,
  CheckCircle,
  Users,
  ShoppingCart,
  Search,
  Gauge,
  Target,
  Mail,
  Calendar,
  ExternalLink,
} from "lucide-react";
import dynamic from "next/dynamic";

const CTASection = dynamic(() => import("@/components/CTASection"), {
  ssr: true,
});

export default function SiteLentPerteClients() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Est-ce que mon site peut être lent même s'il est beau ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Un design peut paraître moderne, mais si derrière le code est lourd, Google pénalise la lenteur malgré un design attractif.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que je dois changer de site pour être rapide ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pas forcément. Parfois, une optimisation technique suffit : compression des images, cache, hébergeur performant.",
        },
      },
      {
        "@type": "Question",
        name: "Google pénalise vraiment les sites lents ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Depuis 2021, la vitesse fait partie des Core Web Vitals, un facteur officiel de ranking Google.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte une optimisation de site ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un audit peut être gratuit, et une optimisation sérieuse commence dès 300–500 €.",
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Pourquoi un site lent tue vos ventes",
    description:
      "Chaque seconde de chargement = 20% de clients perdus. Découvrez pourquoi un site lent détruit vos ventes et comment atteindre 90+ PageSpeed.",
    image: "/images/developpement-webapp-react.webp",
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
      "@id": "https://www.guillaumeganne.com/blog/site-lent-perte-clients/",
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
                ⚡ Performance web
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
                Pourquoi un site lent tue vos{" "}
                <span className="text-[#CC5500]">ventes</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
                👉 Un restaurateur m'a dit récemment : "Mon site est joli mais
                personne ne me trouve." Quand je l'ai analysé, j'ai vu qu'il
                mettait 6 secondes à charger. Résultat ? 70 % de ses
                réservations partaient… chez ses concurrents.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
                Dans le monde du web, la vitesse, c'est de l'argent. Chaque
                seconde de trop, c'est un client en moins.
              </p>

              {/* Vidéo YouTube intégrée */}
              <div className="max-w-sm mx-auto mb-8">
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/ccWBsmYLnEg"
                    title="Site lent - Impact sur les ventes"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Découvrez l'impact réel d'un site lent sur vos ventes
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#CC5500] border border-transparent rounded-xl shadow-lg hover:bg-[#B8440F] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Audit gratuit de votre site
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
                  alt="Expert optimisation site lent - audit gratuit performance web"
                  width={120}
                  height={120}
                  className="absolute -bottom-16 -right-32 hidden md:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Ce que disent les chiffres */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                📊 Les chiffres parlent
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ce que disent les chiffres{" "}
                <span className="text-[#CC5500]">(et Google)</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      1 seconde de trop
                    </h3>
                    <p className="text-gray-600">= –20 % de conversions</p>
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
                      3 secondes
                    </h3>
                    <p className="text-gray-600">
                      = la moitié de vos visiteurs abandonnent
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      6 secondes
                    </h3>
                    <p className="text-gray-600">= 70 % des prospects perdus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Google le sait : depuis les <strong>Core Web Vitals</strong>, la{" "}
                <strong>vitesse site web</strong> est un facteur clé de
                référencement.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                👉 Si votre <strong>site lent Google</strong> vous met derrière
                vos concurrents, même si votre contenu est meilleur.
              </p>
            </div>
          </div>
        </section>

        {/* Section Pourquoi les sites sont lents */}
        <section className="relative z-10 bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🔍 Diagnostic
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pourquoi les sites sont{" "}
                <span className="text-[#CC5500]">lents</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beaucoup d'entreprises pensent que "ça ira". Mais en réalité :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Templates surchargés
                    </h3>
                    <p className="text-gray-600">
                      WordPress non optimisé avec des thèmes lourds
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Images non compressées
                    </h3>
                    <p className="text-gray-600">
                      JPEG de 2 Mo au lieu de 100 Ko
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Hébergement low-cost
                    </h3>
                    <p className="text-gray-600">Serveurs lents et partagés</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#CC5500] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#CC5500]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#CC5500]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Plugins inutiles
                    </h3>
                    <p className="text-gray-600">
                      20 installés, 5 seulement utilisés
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto mt-8">
                Résultat : un site joli, mais un poids énorme qui fait fuir
                Google et vos clients.
              </p>
            </div>
          </div>
        </section>

        {/* Section Conséquences business */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                💰 Impact business
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Les conséquences business{" "}
                <span className="text-[#CC5500]">réelles</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                👉 Ce n'est pas qu'un détail technique. Un{" "}
                <strong>site lent perte clients</strong> touche directement :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Vos ventes e-commerce
                </h3>
                <p className="text-gray-600">Abandon de panier x2</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Vos prises de rendez-vous
                </h3>
                <p className="text-gray-600">
                  Prospects qui ferment avant le formulaire
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Votre image
                </h3>
                <p className="text-gray-600">
                  Un site lent = une entreprise pas sérieuse
                </p>
              </div>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Exemple concret :
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Un artisan local m'a confié qu'il avait perdu 2 gros contrats
                simplement parce que ses clients n'arrivaient pas à ouvrir son
                devis en ligne rapidement.
              </p>
            </div>
          </div>
        </section>

        {/* Section Comment savoir si votre site est lent */}
        <section className="relative z-10 bg-[#ECF0F1]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🔍 Test gratuit
              </div>
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
                Comment savoir si votre site est{" "}
                <span className="text-[#CC5500]">lent</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vous pouvez tester en 2 clics :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#CC5500]" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">
                  PageSpeed Insights
                </h3>
                <p className="text-gray-600 mb-4">L'outil officiel de Google</p>
                <a
                  href="https://pagespeed.web.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#CC5500] rounded-lg hover:bg-[#B8440F] transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Tester mon site
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#CC5500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-8 h-8 text-[#CC5500]" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-4">
                  GTMetrix
                </h3>
                <p className="text-gray-600 mb-4">Analyse détaillée gratuite</p>
                <a
                  href="https://gtmetrix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#CC5500] rounded-lg hover:bg-[#B8440F] transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Analyser gratuitement
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium">
                👉 Si votre score est en dessous de 90/100, vous perdez déjà des
                clients.
              </p>
            </div>
          </div>
        </section>

        {/* Section Comment corriger */}
        <section className="relative z-10 bg-gradient-to-b from-white to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                🚀 Solutions
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Comment corriger et booster la{" "}
                <span className="text-[#CC5500]">vitesse site web</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques solutions simples (et efficaces) pour{" "}
                <strong>optimisation PageSpeed</strong> :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Compresser vos images
                    </h3>
                    <p className="text-gray-600">
                      Format WebP pour des images 80% plus légères
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
                      Hébergement performant
                    </h3>
                    <p className="text-gray-600">LiteSpeed, Cloudflare CDN</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Code propre
                    </h3>
                    <p className="text-gray-600">
                      Limiter les plugins → privilégier du code optimisé
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
                      Technologies modernes
                    </h3>
                    <p className="text-gray-600">
                      Next.js ou thème WordPress léger
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-xl max-w-4xl mx-auto mt-8">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Mon exemple :
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mon propre site charge en 1,2 seconde en 3G, et obtient 99/100
                sur
                <strong>PageSpeed</strong>. C'est ce que je livre à chaque
                client pour <strong>améliorer performance site</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Cas client */}
        <section className="relative z-10 bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-[#CC5500]/10 rounded-full text-[#CC5500] font-semibold text-sm mb-4">
                📈 Cas client
              </div>
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">
                Cas client (storytelling)
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
                    Restaurateur d'Angoulême
                  </a>
                </h3>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Problème :</strong> "Mon site est beau, mais personne
                  ne réserve."
                </p>
                <p>
                  <strong>Diagnostic :</strong> Temps de chargement de 6
                  secondes
                </p>
                <p>
                  <strong>Solution :</strong> Optimisation complète → 1,3
                  seconde
                </p>
                <div className="bg-green-50 p-8 rounded-xl text-center">
                  <p className="text-2xl font-bold text-green-600 mb-2">
                    +52% de réservations
                  </p>
                  <p className="text-gray-600">en seulement 2 mois</p>
                </div>
                <p className="text-center font-medium">
                  Preuve que la vitesse transforme un site en machine à clients.
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
                FAQ sur les sites <span className="text-[#CC5500]">lents</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Est-ce que mon site peut être lent même s'il est beau ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui. Un design peut paraître moderne, mais si derrière le code
                  est lourd, Google pénalise.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Est-ce que je dois changer de site pour être rapide ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pas forcément. Parfois, une optimisation technique suffit
                  (images, cache, hébergeur).
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Google pénalise vraiment les sites lents ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui. Depuis 2021, la vitesse fait partie des Core Web Vitals,
                  un facteur officiel de ranking.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-bold text-xl text-gray-900 mb-4">
                  💡 Combien coûte une optimisation de site ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un audit peut être gratuit, et une optimisation sérieuse
                  commence dès 300–500 €.{" "}
                  <a
                    href="/tarif"
                    className="text-[#CC5500] hover:underline font-medium"
                  >
                    Découvrez mes tarifs pour créer un site rapide
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
                Conclusion et appel à{" "}
                <span className="text-[#CC5500]">l'action</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                👉 Chaque seconde de <strong>temps de chargement site</strong>{" "}
                en plus = des clients en moins. Un
                <strong>site lent</strong>, c'est une boutique dont la porte
                reste fermée.
              </p>
              <p className="text-lg text-gray-600 mb-10">
                🎯 Testez dès maintenant votre site avec{" "}
                <strong>Google PageSpeed</strong>. Si vous êtes en dessous de
                90/100, contactez-moi pour un <strong>audit gratuit</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
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
                  href="mailto:guillaumeganne.dev@gmail.com?subject=Audit gratuit - Site lent&body=Bonjour Guillaume, je souhaite un audit gratuit de mon site web pour améliorer sa vitesse de chargement."
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#CC5500] bg-white border-2 border-[#CC5500] rounded-xl shadow-lg hover:bg-[#CC5500] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC5500] transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Audit gratuit par email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
