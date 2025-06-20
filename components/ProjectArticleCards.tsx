import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Section {
  type: "image" | "texte";
  title: string;
  content?: string;
  image?: string;
  description?: string;
  colSpan?: number; // 1 à 4
  rowSpan?: number; // 1 à 2
}

export default function ProjectArticleCards({
  sections,
}: {
  sections: Section[];
}) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 grid gap-2 md:grid-cols-4">
        {sections.map((section, i) => {
          const colSpan = section.colSpan || 1;
          const rowSpan = section.rowSpan || 1;
          // Génère dynamiquement les classes col-span et row-span
          const cardClass = [
            "bg-card text-card-foreground shadow-lg",
            colSpan > 1 ? `md:col-span-${colSpan}` : "",
            rowSpan > 1 ? `md:row-span-${rowSpan}` : "",
          ].join(" ");
          return section.type === "image" ? (
            <Card key={i} className={`flex flex-col items-center ${cardClass}`}>
              <CardHeader>
                <h3 className="text-xl font-bold mb-2 text-primary text-center">
                  {section.title}
                </h3>
              </CardHeader>
              <CardContent>
                {section.image && (
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg mb-4 mx-auto"
                    style={{ maxHeight: 200, objectFit: "contain" }}
                  />
                )}
                {section.description && (
                  <p className="text-muted-foreground text-center text-base mt-2">
                    {section.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card key={i} className={cardClass}>
              <CardHeader>
                <h3 className="text-xl font-bold mb-2 text-primary text-center">
                  {section.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-foreground whitespace-pre-line">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
