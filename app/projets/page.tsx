import ProjectCard from "@/components/ProjectCard";
import ProjectsFAQ from "@/components/ProjectsFAQ";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-0 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-8 mt-8">
        Portfolio de Guillaume Ganne – Développeur web freelance
      </h1>

      {/* Introduction enrichie */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Découvrez mon <strong>portfolio développeur web freelance</strong> à
          travers une sélection de projets variés qui illustrent mon
          savoir-faire technique et créatif. De la création de sites vitrines
          élégants aux plateformes e-commerce performantes, en passant par les
          applications web sur-mesure et les sites associatifs, chaque
          réalisation témoigne d'une approche personnalisée et d'un engagement
          qualité. Ces <em>exemples site vitrine e-commerce</em> et autres
          <em>projets web freelance France</em> reflètent ma capacité à
          transformer vos idées en solutions digitales concrètes et efficaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {/* Section "Ils m'ont fait confiance" */}
      <section className="bg-muted/30 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
          Ils m'ont fait confiance
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Ces <strong>réalisations création site web</strong> témoignent de la
            diversité de mes collaborations : artisans passionnés, associations
            engagées, commerçants ambitieux, PME innovantes et entrepreneurs
            visionnaires. Chaque projet reflète une approche sur-mesure, adaptée
            aux besoins spécifiques de mes clients, qu'ils soient basés en
            Charente ou partout en France.
          </p>
          <p className="text-muted-foreground">
            Cette polyvalence me permet d'accompagner des secteurs variés
            (artisanat, culture, commerce, associatif, tech) avec la même
            exigence de qualité et le même souci du détail, pour des résultats
            qui dépassent les attentes.
          </p>
        </div>
      </section>

      {/* Contenu SEO éditorial */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Pourquoi consulter un portfolio développeur web freelance ?
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p>
            Un <strong>portfolio développeur web freelance</strong> de qualité
            vous permet d'évaluer concrètement les compétences et le style d'un
            prestataire avant de lui confier votre projet. Contrairement aux
            grandes agences où vous ne savez jamais qui travaillera réellement
            sur votre site, consulter mes{" "}
            <em>réalisations création site web</em> vous donne une vision claire
            de ce que je peux accomplir pour vous.
          </p>
          <p>
            Chaque projet présenté dans ce portfolio illustre une approche
            méthodique : analyse des besoins, conception UX/UI réfléchie,
            développement technique maîtrisé et optimisation SEO poussée. Que
            vous recherchiez des <em>exemples site vitrine e-commerce</em> ou
            des applications plus complexes, vous trouverez ici la preuve d'un
            savoir-faire polyvalent et d'une expertise technique solide.
          </p>
          <p>
            Travailler avec un développeur web freelance présente de nombreux
            avantages : flexibilité dans les délais, communication directe sans
            intermédiaire, tarifs transparents et personnalisation maximale de
            votre projet. Mes <em>projets web freelance France</em> démontrent
            cette capacité d'adaptation à tous types de secteurs et de budgets,
            avec un suivi humain et professionnel du début à la livraison.
          </p>
          <p>
            L'importance d'un <strong>portfolio création site internet</strong>{" "}
            réside aussi dans la diversité des technologies maîtrisées et des
            défis relevés. Performance, sécurité, référencement naturel,
            responsive design : chaque aspect technique est documenté pour vous
            rassurer sur la qualité des prestations proposées et vous aider à
            faire le meilleur choix pour votre projet digital.
          </p>
        </div>
      </section>

      {/* FAQ spécifique projets */}
      <ProjectsFAQ />
    </main>
  );
}

export const metadata = {
  title: "Portfolio développeur web freelance | Projets & réalisations",
  description:
    "Portfolio développeur web freelance : découvrez mes réalisations création site web, exemples site vitrine e-commerce et projets web freelance France.",
  alternates: { canonical: "https://www.guillaumeganne.com/projets/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/projets/",
    title: "Portfolio développeur web freelance | Projets & réalisations",
    description:
      "Portfolio développeur web freelance : découvrez mes réalisations création site web, exemples site vitrine e-commerce et projets web freelance France.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};
