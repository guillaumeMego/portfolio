import React from "react";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

const articles = [
  {
    slug: "bienvenue",
    title: "Bienvenue sur le blog !",
    date: "2024-06-01",
    content: `Bienvenue sur mon blog ! Ici, je partagerai mes conseils, retours d'expérience et tutoriels sur le web, le SEO, la photo et la création digitale. Restez connectés pour de nouveaux articles chaque semaine !`,
  },
];

interface BlogArticlePageProps {
  params: { slug: string };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-foreground">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
        {article.title}
      </h1>
      <p className="text-sm text-muted-foreground mb-8 text-center">
        {article.date}
      </p>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </div>
  );
}
