// app/projects/[id]/metadata.ts
import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface ProjectDetailsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectDetailsProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  const canonicalUrl = `https://guillaumeganne.com/projects/${params.slug}`;

  if (!project) {
    return {
      title: "Projet non trouvé | Guillaume Ganne",
      description: "Ce projet n'existe pas ou a été déplacé.",
      robots: {
        index: false,
        follow: false,
      },
      alternates: { canonical: canonicalUrl },
    };
  }

  return {
    title: `${project.title} | Portfolio de Guillaume Ganne`,
    description: project.description.storytelling.slice(0, 155) + "...",
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      "portfolio",
      "projet",
      project.type,
      ...(project.technologies ?? []),
    ],
    openGraph: {
      title: project.title,
      description: project.description.minidescription,
      type: "article",
      locale: "fr_FR",
      url: `https://guillaumeganne.com/projects/${project.slug}`,
      siteName: "Guillaume Ganne",
      images: [
        {
          url:
            typeof project.image === "string"
              ? project.image
              : project.image.src,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    authors: [{ name: "Guillaume Ganne" }],
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export default function Head() {
  return null; // Next injecte automatiquement
}
