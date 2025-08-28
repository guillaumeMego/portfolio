import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Guillaume Ganne - Webdesigner Angoulême",
  description:
    "Articles et conseils sur la création de sites internet, le développement web et l'optimisation SEO.",
  alternates: { canonical: "https://www.guillaumeganne.com/blog/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/blog",
    title: "Blog - Guillaume Ganne - Webdesigner Angoulême",
    description:
      "Articles et conseils sur la création de sites internet, le développement web et l'optimisation SEO.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

const articles = [
  {
    slug: "site-moche-clients-fuient",
    title: "Site moche = clients qui fuient : pourquoi et comment y remédier",
    description:
      "Un site daté ou mal conçu fait fuir vos clients en 3 secondes. Découvrez comment une refonte moderne et optimisée SEO peut doubler vos conversions.",
    date: "2024-12-20",
    readTime: "8 min",
    image: "/images/beau.png",
  },
  {
    slug: "site-joli-mais-invisible",
    title:
      "Ton site est joli mais invisible ? Voici pourquoi et comment y remédier",
    description:
      "Un beau site ne suffit pas. Découvrez pourquoi votre site reste invisible et comment booster votre visibilité sur Google.",
    date: "2024-12-20",
    readTime: "10 min",
    image: "/images/vitrine.png",
  },
  {
    slug: "site-lent-perte-clients",
    title: "Pourquoi un site lent tue vos ventes (et comment l'éviter)",
    description:
      "Chaque seconde de chargement en plus = 20% de clients en moins. Découvrez pourquoi Google déteste les sites lents et comment sauver vos ventes.",
    date: "2024-12-20",
    readTime: "12 min",
    image: "/images/google_speed.png",
  },
  {
    slug: "creation-site-internet-1001-astuces",
    title: "La création de site internet ! Trouves les 1001 astuces",
    description:
      "Création de site internet : 1001 astuces pratiques pour choisir vos outils, optimiser SEO et vitesse, sécuriser votre site et convertir davantage de visiteurs.",
    date: "2024-01-15",
    readTime: "15 min",
    image: "/images/astuce.png",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-36 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Articles et conseils sur la création de sites internet, le
          développement web et l'optimisation SEO.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col"
            >
              <div className="h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span>
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{article.readTime} de lecture</span>
                </div>
                <h2 className="text-xl font-bold text-primary mb-3">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-4 flex-1">
                  {article.description}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 underline font-medium mt-auto"
                >
                  Lire l'article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Aucun article disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
