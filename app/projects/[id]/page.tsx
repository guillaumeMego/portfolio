// @ts-nocheck

import { projects } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id.toString() }));
}

export default function ProjectPage(props: any) {
  // récupération de l'id (on force en string pour éviter Promise<string>…)
  const id = String(props.params.id);
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h1 className="text-center mt-32">Projet introuvable</h1>;
  }

  return <ProjectDetail project={project} />;
}
