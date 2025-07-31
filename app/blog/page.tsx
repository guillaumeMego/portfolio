import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Guillaume Ganne - Webdesigner Angoulême",
  description:
    "Articles et conseils sur la création de sites internet, le développement web et l'optimisation SEO.",
  openGraph: {
    title: "Blog - Guillaume Ganne - Webdesigner Angoulême",
    description:
      "Articles et conseils sur la création de sites internet, le développement web et l'optimisation SEO.",
    url: "https://www.guillaumeganne.com/blog",
    siteName: "Guillaume Ganne - Webdesigner Angoulême",
  },
};

const articles = [
  {
    slug: "creation-site-internet-1001-astuces",
    title: "La création de site internet ! Trouves les 1001 astuces",
    description:
      "Création de site internet : 1001 astuces pratiques pour choisir vos outils, optimiser SEO et vitesse, sécuriser votre site et convertir davantage de visiteurs.",
    date: "2024-01-15",
    readTime: "15 min",
    image: "/images/creation-site-vitrine-angouleme.webp",
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

        <div className="grid gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
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
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {article.description}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 underline font-medium"
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
