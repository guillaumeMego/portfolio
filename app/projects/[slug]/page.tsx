// @ts-nocheck

import { projects } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage(props: any) {
  const slug = String(props.params.slug);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1 className="text-center mt-32">Projet introuvable</h1>;
  }

  return <ProjectDetail project={project} />;
}
