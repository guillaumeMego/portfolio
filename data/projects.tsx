export interface Project {
  title: string;
  type:
    | "Client"
    | "Projet Personnel"
    | "Projet Étudiant"
    | "Projet bénévole"
    | "Projet de formation";
  image: {
    src: string;
    width: number;
    height: number;
  };
  description: {
    minidescription: string;
    storytelling: string;
    objectives: string;
    outcomes: string;
  };
  technologies?: string[];
  url?: string;
  date: string; // Format YYYY-MM
  role?: string;
  clientTestimonial?: string;
  slug: string;
}

const standardizeDate = (date: string): string => {
  if (date.includes("/")) {
    const [month, year] = date.split("/");
    return `${year}-${month.padStart(2, "0")}`;
  }
  return date;
};

const sortProjectsByDate = (projects: Project[]): Project[] => {
  return [...projects].sort((a, b) => {
    const dateA = standardizeDate(a.date);
    const dateB = standardizeDate(b.date);
    return dateB.localeCompare(dateA);
  });
};

export const projects: Project[] = sortProjectsByDate([
  {
    title: "Les Créas de Rose Bleue",
    type: "Client",
    image: {
      src: "/images/ecommerce-woocommerce-charente.png",
      width: 1200,
      height: 800,
    },
    description: {
      minidescription: "E-commerce de bougies artisanales bio",
      storytelling:
        "Refonte complète du site de Rose Bleue, créatrice de bougies artisanales bio, pour moderniser son image et optimiser l'expérience utilisateur.",
      objectives:
        "• Développer un site e-commerce performant sous WooCommerce\n" +
        "• Mettre en place un design responsive et une identité visuelle unique\n" +
        "• Optimiser le référencement local pour Angoulême et la performance PageSpeed.",
      outcomes:
        "Site exporté avec un score PageSpeed de 99%, SEO local amélioré, et augmentation du taux de conversion de 25% suite au lancement.",
    },
    technologies: ["WordPress", "WooCommerce", "PHP", "Figma", "Rank Math SEO"],
    url: "https://lescreasderosebleue.com",
    date: "2024-06",
    role: "Développeur Web & Designer",
    clientTestimonial:
      "« Le nouveau site a transformé notre activité en ligne, nous recevons des commandes chaque jour ! » - Rose Bleue",
    slug: "les-creas-de-rose-bleue",
  },
  {
    title: "Pendu Pokémon",
    type: "Projet Étudiant",
    image: {
      src: "/images/developpement-webapp-react.png",
      width: 1200,
      height: 800,
    },
    description: {
      minidescription: "Jeu du pendu interactif en React",
      storytelling:
        "Durant mes études, j'ai conçu 'Pendu Pokémon' pour allier jeu éducatif et univers ludique, créant une interface intuitive en React.",
      objectives:
        "Développer un jeu web interactif en React, accessible et responsive, puis l'étendre en React Native pour mobile.",
      outcomes:
        "Projet disponible sur GitHub, démontrant mes compétences front-end et mobile, et validé par mes formateurs.",
    },
    technologies: ["React", "React Native", "JavaScript", "CSS3"],
    url: "https://guillaumemego.github.io/PenduPokemon-React/",
    date: "2023-05",
    role: "Développeur Front-End",
    clientTestimonial: "",
    slug: "pendu-pokemon",
  },
  {
    title: "Soup' Ô Potes",
    type: "Client",
    image: { src: "/images/soupsite.webp", width: 1200, height: 800 },
    description: {
      minidescription: "Site et identité visuelle pour association solidaire",
      storytelling:
        "Refonte du site de l'association Soup' Ô Potes et création de leur logo pour renforcer leur présence en ligne.",
      objectives:
        "• Concevoir une identité visuelle forte\n" +
        "• Développer un site WordPress clair et accessible\n" +
        "• Optimiser le SEO pour attirer bénévoles et donateurs.",
      outcomes:
        "Visibilité accrue, plus de dons et de bénévoles grâce au nouveau design et au SEO local efficace.",
    },
    technologies: ["WordPress", "PHP", "Figma", "SEO"],
    url: "https://soupopotes.org",
    date: "2024-06",
    role: "Développeur Web & Designer",
    clientTestimonial:
      "« Le site et le logo ont revitalisé notre association, merci pour ce superbe travail ! »",
    slug: "soup-o-potes",
  },
  {
    title: "LibreXpression",
    type: "Client",
    image: {
      src: "/images/librexpression.png",
      width: 1200,
      height: 800,
    },
    description: {
      minidescription:
        "Optimisation sécurité et SEO pour un site d'expression libre",
      storytelling:
        "Le site LibreXpression existait déjà, mais nécessitait une sécurisation avancée et une meilleure visibilité sur le web. J'ai été sollicité pour renforcer la sécurité (headers HTTP, Content Security Policy, protection XSS, etc.) et optimiser le référencement naturel (SEO) avec la mise en place d'un sitemap, de balises meta pertinentes et d'une structure adaptée.",
      objectives:
        "• Sécuriser le site avec des headers stricts (CSP, X-Frame-Options, etc.)\n" +
        "• Mettre en place un sitemap XML et optimiser les balises SEO\n" +
        "• Améliorer la performance et la conformité RGPD.",
      outcomes:
        "Site validé par des audits de sécurité, nette amélioration du positionnement Google et de la confiance des utilisateurs.",
    },
    technologies: ["Wordpress", "SEO", "CSP", "Headers HTTP", "Sitemap"],
    url: "https://librexpression.fr",
    date: "2024-05",
    role: "Consultant Sécurité & SEO",
    clientTestimonial:
      "« Nous avons gagné en sérénité et en visibilité grâce à l'intervention de Guillaume, le site est désormais conforme et performant ! »",
    slug: "librexpression",
  },
  {
    title: "Guillaume Creation - Portfolio Photo",
    type: "Projet Personnel",
    image: {
      src: "/images/guillaumecreation.png",
      width: 1200,
      height: 800,
    },
    description: {
      minidescription:
        "Portfolio photo immersif et animé pour présenter mes créations.",
      storytelling:
        "Passionné de photographie, j'ai voulu créer un site qui me ressemble, à la fois vitrine de mon travail et expérience interactive. J'ai conçu ce portfolio sous Next.js pour offrir une navigation fluide, des animations immersives et une galerie mettant en valeur mes plus beaux clichés. J'ai accordé une attention particulière à la sécurité (headers, CSP, etc.) et au SEO (balises, sitemap, performance) pour garantir visibilité et sérénité.",
      objectives:
        "• Créer une expérience utilisateur unique autour de la photo\n" +
        "• Mettre en avant mes compétences de photographe et de développeur\n" +
        "• Optimiser la sécurité et le référencement naturel.",
      outcomes:
        "Un site personnel qui attire de nouveaux contacts, valorise mon univers créatif et démontre mon savoir-faire technique et artistique.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "SEO",
      "CSP",
      "Headers HTTP",
      "Sitemap",
    ],
    url: "https://guillaumecreation.com",
    date: "2025-05",
    role: "Photographe & Développeur Web",
    clientTestimonial: "",
    slug: "guillaume-creation-portfolio-photo",
  },
]);
