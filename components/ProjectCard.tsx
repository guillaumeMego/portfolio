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
      href={`/projets/${project.slug}`}
      prefetch={false}
      aria-label={`Voir les détails du projet : ${project.title}`}
    >
      <article className="group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#CC5500]/20 min-h-[460px] h-full border border-[#CC5500]/20 hover:border-[#CC5500]/40 flex flex-col transform hover:scale-[1.02] transition-all duration-500 hover:-translate-y-2">
        <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
          <Image
            src={webpSrc}
            alt={project.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain transition-transform duration-700 group-hover:scale-110"
            placeholder="blur"
            blurDataURL={blurSrc}
          />
          {/* Overlay au hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#CC5500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 bg-background flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-[#CC5500] transition-colors duration-300">
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
