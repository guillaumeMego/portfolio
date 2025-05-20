export interface Project {
  id: number;
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
    id: 1,
    title: "Les Créas de Rose Bleue",
    type: "Client",
    image: { src: "/images/creas.png", width: 1200, height: 800 },
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
  },
  {
    id: 2,
    title: "Pendu Pokémon",
    type: "Projet Étudiant",
    image: { src: "/images/pokemon.png", width: 1200, height: 800 },
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
  },
  {
    id: 3,
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
  },
]);
