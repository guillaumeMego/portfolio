import Link from "next/link";
import Image from "next/image";
import { Code, Film } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.category === "dev" ? Code : Film;
  return (
    <Link href={`/projects/${project.id}`} prefetch={false}>
      <article className="group rounded-lg overflow-hidden cursor-pointer shadow-xl min-h-[460px]">
        <div className="relative w-full h-[300px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index < 2}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 bg-background">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              {project.title}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-normal">
            {project.description.minidescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies?.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
