import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Générer les chemins des images
  const webpSrc = project.image.src.endsWith(".webp")
    ? project.image.src
    : project.image.src.replace(/\.(png|jpg|jpeg)$/, ".webp");
  const blurSrc =
    project.image.blurDataURL || webpSrc.replace(".webp", ".blur.webp");

  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch={false}
      aria-label={`Voir les détails du projet : ${project.title}`}
    >
      <article className="group rounded-lg overflow-hidden cursor-pointer shadow-xl min-h-[460px] h-full border border-[#AD5100]/20 flex flex-col">
        <div className="relative w-full h-[300px] flex items-center justify-center">
          <Image
            src={webpSrc}
            alt={project.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain transition-transform duration-500"
            placeholder="blur"
            blurDataURL={blurSrc}
          />
        </div>
        <div className="p-6 bg-background flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground font-normal mb-3 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3 mb-0 grow items-end">
            {project.technologies?.map((t, idx) => (
              <span
                key={t + "-" + idx}
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
