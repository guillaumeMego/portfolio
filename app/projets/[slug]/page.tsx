// @ts-nocheck

import { projects } from "@/data/projects";
import React from "react";
import ProjectDetail from "./ProjectDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata-helpers";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return generatePageMetadata({
    title: project.title,
    description: project.description,
    pathname: `/projets/${project.slug}`,
    type: "article",
    keywords: [
      "création site web angoulême",
      "développeur web freelance",
      "seo local",
      ...project.technologies.map((t) => t.toLowerCase()),
    ],
    image: {
      url: project.image.src,
      width: project.image.width,
      height: project.image.height,
      alt: project.image.alt,
    },
  });
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  // Détermine le type de projet
  const isEcommerce = project.technologies.includes("WooCommerce");
  const isWebApp =
    project.technologies.includes("React") ||
    project.technologies.includes("Next.js");
  const isWebsite = !isEcommerce && !isWebApp;

  // Schema.org JSON-LD adapté selon le type de projet
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.schema.name,
    url: project.schema.url,
    creator: {
      "@type": "Person",
      name: "Guillaume Ganne",
      jobTitle: "Développeur Web Freelance",
      url: "https://www.guillaumeganne.com",
    },
    inLanguage: "fr",
    datePublished: `${project.date}-01`,
    description: project.description,
    ...(isEcommerce && {
      about: {
        "@type": "Thing",
        name: "E-commerce",
      },
    }),
    ...(isWebApp && {
      about: {
        "@type": "Thing",
        name: "Application Web",
      },
    }),
    ...(isWebsite && {
      about: {
        "@type": "Thing",
        name: project.h1,
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetail project={project} />
    </>
  );
}

// Génération statique des routes
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
