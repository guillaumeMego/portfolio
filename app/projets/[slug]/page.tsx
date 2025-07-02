// @ts-nocheck

import { projects } from "@/data/projects";
import React from "react";
import Head from "next/head";
import ProjectDetail from "./ProjectDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://www.guillaumeganne.com/projets/${project.slug}`,
    },
    keywords: [
      "création site web angoulême",
      "développeur web freelance",
      "seo local",
      ...project.technologies.map((t) => t.toLowerCase()),
    ],
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: `https://www.guillaumeganne.com/projets/${project.slug}`,
      title: project.title,
      description: project.description,
      siteName: "Guillaume Ganne",
      images: [
        {
          url: project.image.src,
          width: project.image.width,
          height: project.image.height,
          alt: project.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image.src],
    },
  };
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
    "@type": isEcommerce
      ? "WebSite"
      : isWebApp
      ? "SoftwareApplication"
      : "WebSite",
    name: project.schema.name,
    url: project.schema.url,
    creator: {
      "@type": "Person",
      name: "Guillaume Ganne",
      jobTitle: "Développeur Web Freelance",
      url: "https://www.guillaumeganne.com",
    },
    inLanguage: "fr",
    datePublished: project.date + "-01",
    description: project.description,
    ...(isEcommerce && {
      "@type": "WebSite",
      potentialAction: {
        "@type": "SearchAction",
        target: `${project.schema.url}/shop?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    }),
    ...(isWebApp && {
      applicationCategory: "Game",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
    }),
    ...(isWebsite && {
      "@type": "WebSite",
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
      <Head>
        <title>{project.title} | Portfolio Guillaume Ganne</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image.src} />
        <meta
          property="og:url"
          content={`https://guillaumeganne.com/projets/${project.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
