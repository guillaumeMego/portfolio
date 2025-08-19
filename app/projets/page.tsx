import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-0 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-12 mt-8">
        Tous les projets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </main>
  );
}

export const metadata = {
  title: "Projets web & réalisations | Guillaume Ganne",
  description:
    "Découvrez mes réalisations web : sites vitrines, e-commerce, applications sur-mesure pour PME et entrepreneurs à Angoulême.",
  alternates: { canonical: "https://www.guillaumeganne.com/projets" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/projets",
    title: "Projets web & réalisations | Guillaume Ganne",
    description:
      "Découvrez mes réalisations web : sites vitrines, e-commerce, applications sur-mesure pour PME et entrepreneurs à Angoulême.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};
