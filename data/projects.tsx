export interface Project {
  title: string; // Titre SEO optimisé (≤ 60 caractères)
  slug: string; // URL optimisée sans stop-words
  description: string; // Meta description (≤ 160 caractères)
  h1: string; // H1 de la page
  date: string; // Format YYYY-MM
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
  };
  content: {
    context: string; // Contexte client (50 mots)
    objectives: string; // Objectifs chiffrés (100 mots)
    process: string; // Process (UX, dev, SEO) (250 mots)
    results: string; // Résultats & KPI (150 mots)
  };
  testimonial?: {
    text: string;
    author: string;
  };
  technologies: string[]; // Liste des technologies utilisées
  links: {
    website: string; // URL du site client
    services: string; // Lien vers la page service correspondante
  };
  schema: {
    name: string; // Nom du site pour Schema.org
    url: string; // URL du site pour Schema.org
  };
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
    const dateComparison = dateB.localeCompare(dateA);

    // Si les dates sont identiques, trier par titre
    if (dateComparison === 0) {
      return a.title.localeCompare(b.title);
    }

    return dateComparison;
  });
};

export const projects: Project[] = sortProjectsByDate([
  {
    title: "création e-commerce bougies bio | les créas de rose bleue",
    slug: "creation-boutique-bougies-bio",
    description:
      "Création d'un site e-commerce WooCommerce (99 PSI) avec une stratégie de lancement pour générer les premières ventes.",
    h1: "Les Créas de Rose Bleue : e-commerce de bougies bio",
    date: "2024-06",
    image: {
      src: "/images/projects/crea/creas.webp",
      alt: "Création d'un site e-commerce pour des bougies bio",
      width: 1200,
      height: 630,
      blurDataURL: "/images/projects/crea/creas.blur.webp",
    },
    content: {
      context: `Rose Bleue souhaitait créer un site de vente pour ses bougies artisanales bio. L'objectif était de construire une expérience d'achat fluide tout en valorisant l'aspect artisanal et écologique de ses créations.`,

      objectives: `• Lancer la boutique et générer les premières ventes
• Optimiser le référencement sur "bougies artisanales bio"
• Atteindre un score PageSpeed > 90
• Mettre en place une gestion simple des commandes et du stock
• Intégrer un système de paiement sécurisé`,

      process: `1. Identité Visuelle & Design
• Création du logo, de la charte graphique et des cartes de visite
• Conception des visuels pour les réseaux sociaux
• Maquettes Figma validées en 3 itérations
• Parcours d'achat optimisé mobile-first

2. Développement
• Installation WooCommerce personnalisée
• Intégration Stripe pour les paiements
• Configuration des variations produits
• Optimisation des images WebP

3. SEO & Performance
• Structure Schema.org e-commerce
• Balises meta & contenu optimisés
• Cache LiteSpeed + CDN
• Score PageSpeed 99/100`,

      results: `🚀 Lancement réussi et premières ventes en ligne
⚡ Score PageSpeed 99 mobile
🔎 Top 5 sur "bougies artisanales bio"
📱 Taux de rebond mobile -35%
💳 Panier moyen +15%`,
    },
    testimonial: {
      text: "Je ne remercierais jamais assez Guillaume pour son professionnalisme et ses conseils de qualités. Sans lui, mon site ne...",
      author: "Sabrina, fondatrice",
    },
    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Rank Math SEO",
      "Stripe API",
      "LiteSpeed Cache",
    ],
    links: {
      website: "https://www.lescreasderosebleue.com",
      services: "/services/ecommerce",
    },
    schema: {
      name: "Les Créas de Rose Bleue",
      url: "https://www.lescreasderosebleue.com",
    },
  },
  {
    title: "refonte site associatif & identité | soup' ô potes",
    slug: "refonte-site-association-soupopotes",
    description:
      "Refonte complète du site et du logo. Nouvelle identité graphique, espace membre, formation WordPress, visibilité locale et réseaux sociaux.",
    h1: "Soup' Ô Potes : refonte site associatif & identité visuelle",
    date: "2024-06",
    image: {
      src: "/images/soupsite.webp",
      alt: "Refonte du site et du logo de l'association Soup' Ô Potes",
      width: 1200,
      height: 630,
      blurDataURL: "/images/soupsite.blur.webp",
    },
    content: {
      context:
        "L'association Soup' Ô Potes souhaitait moderniser toute sa communication digitale : refonte du logo, nouvelle charte graphique, et création d'un site web moderne pour informer, fédérer les bénévoles et toucher plus de bénéficiaires.",
      objectives: `• Refonte moderne du logo et de l'identité visuelle
• Créer un site clair, accessible et attractif
• Mettre en place un espace membre pour l'association
• Former l'équipe à la création d'articles sur WordPress
• Booster la visibilité locale et la communication sur Facebook`,
      process: `1. Identité & Design
• Refonte du logo en gardant l'ADN de l'association
• Nouvelle charte graphique (couleurs, typographies, pictos)
• Maquettes Figma validées avec l'équipe

2. Développement
• Site WordPress sur-mesure, responsive
• Espace membre sécurisé pour l'association
• Pages d'information, agenda, actualités

3. Formation & Communication
• Formation à la création d'articles sur WordPress
• Accompagnement à la gestion Facebook
• Conseils pour la communication locale`,
      results: `📈 Forte visibilité locale (site + Facebook)
👥 + de bénévoles et de bénéficiaires informés
🔒 Espace membre simple d'accès
🎨 Identité visuelle modernisée et reconnue
📝 Équipe autonome sur WordPress`,
    },
    testimonial: {
      text: "Le site a revitalisé notre association, merci !",
      author: "Fabrice, Président",
    },
    technologies: ["WordPress", "PHP", "SEO Local", "Elementor"],
    links: {
      website: "https://soupopotes.org",
      services: "/services/associations",
    },
    schema: {
      name: "Soup' Ô Potes",
      url: "https://soupopotes.org",
    },
  },
  {
    title: "audit sécurité & visibilité google | librexpression",
    slug: "audit-securite-seo-librexpression",
    description:
      "Audit complet sécurité + SEO technique. Firewall, headers, sitemap, Search Console, indexation Google.",
    h1: "LibreXpression : audit sécurité & visibilité Google",
    date: "2024-05",
    image: {
      src: "/images/librexpression.png",
      alt: "Audit sécurité et SEO pour LibreXpression",
      width: 1200,
      height: 630,
    },
    content: {
      context:
        "LibreXpression souhaitait renforcer la sécurité de son site et améliorer sa visibilité sur Google. L'objectif était d'assurer une protection maximale des données et une indexation optimale de toutes les pages.",
      objectives: `• Réaliser un audit de sécurité complet (serveur, CMS, plugins)
• Mettre en place un firewall et des headers de sécurité stricts
• Optimiser la visibilité Google (SEO technique, sitemap, Search Console)
• Indexer toutes les pages importantes du site
• Garantir la conformité RGPD et la tranquillité de l'équipe`,
      process: `1. Audit & Sécurisation
• Analyse complète du serveur et du site (vulnérabilités, failles)
• Mise en place d'un firewall applicatif et de headers HTTP stricts (CSP, HSTS, X-Frame...)
• Mises à jour et durcissement des accès admin

2. Optimisation SEO technique
• Création et soumission du sitemap XML à Google Search Console
• Correction des erreurs d'indexation
• Optimisation des balises meta, titres, robots.txt
• Vérification de la couverture et de l'indexation de toutes les pages

3. Suivi & Formation
• Rapport détaillé remis à l'équipe
• Conseils pour la gestion future de la sécurité et du SEO`,
      results: `🔒 Site sécurisé à tous les niveaux (serveur, CMS, plugins)
📈 Toutes les pages importantes indexées sur Google
⚡ Aucune faille détectée lors du dernier scan
🗺️ Sitemap et Search Console opérationnels
✅ Équipe rassurée et autonome sur la gestion sécurité/SEO
💯 Performance, accessibilité et SEO : scores 100/100 (Lighthouse)
👍 Bonnes pratiques web respectées`,
    },
    testimonial: {
      text: "Audit très pro, site sécurisé et bien référencé. On dort tranquille !",
      author: "Responsable LibreXpression",
    },
    technologies: [
      "WordPress",
      "Firewall",
      "Headers sécurité",
      "Google Search Console",
      "SEO technique",
    ],
    links: {
      website: "https://librexpression.fr",
      services: "/services/audit-securite-seo",
    },
    schema: {
      name: "LibreXpression",
      url: "https://librexpression.fr",
    },
  },
  {
    title: "jeu du pendu pokémon en react | projet étudiant",
    slug: "jeu-pendu-pokemon-react",
    description:
      "Application React ludique et éducative. Interface responsive, animations fluides, et déploiement sur GitHub Pages.",
    h1: "Pendu Pokémon : jeu éducatif en React",
    date: "2023-05",
    image: {
      src: "/images/pokemon.webp",
      alt: "Interface du jeu du pendu version Pokémon en React",
      width: 1200,
      height: 630,
      blurDataURL: "/images/pokemon.blur.webp",
    },
    content: {
      context:
        "Projet étudiant visant à créer un jeu éducatif et ludique en React, alliant apprentissage et univers Pokémon pour une expérience engageante.",
      objectives: `• Développer une interface intuitive et responsive
• Créer une logique de jeu sans bugs
• Implémenter des animations fluides
• Assurer la compatibilité mobile
• Déployer sur GitHub Pages`,
      process: `1. Conception
• Architecture React avec hooks personnalisés
• Design mobile-first et responsive
• Gestion d'état optimisée

2. Développement
• Logique de jeu robuste
• Animations CSS fluides
• Tests utilisateurs
• Version React Native

3. Déploiement
• Tests d'intégration
• Mise en ligne GitHub Pages
• Documentation complète`,
      results: `🎮 +200 utilisateurs actifs
⭐ Note de 4.8/5 en tests
📱 100% compatible mobile
🚀 Temps de chargement < 2s`,
    },
    technologies: ["React", "React Native", "JavaScript", "CSS3"],
    links: {
      website: "https://guillaumemego.github.io/PenduPokemon-React/",
      services: "/services/applications",
    },
    schema: {
      name: "Pendu Pokémon",
      url: "https://guillaumemego.github.io/PenduPokemon-React/",
    },
  },
  {
    title: "Guillaume Creation - Portfolio Photo",
    slug: "guillaume-creation-portfolio-photo",
    description:
      "Portfolio photo personnel présentant mes réalisations photographiques et mes projets web. Site vitrine développé avec Next.js et optimisé pour le SEO.",
    h1: "Guillaume Creation - Portfolio Photo",
    date: "2022-12",
    image: {
      src: "/images/guillaumecreation.png",
      alt: "Portfolio photo Guillaume Creation",
      width: 1200,
      height: 800,
    },
    content: {
      context:
        "Création de mon propre portfolio photo pour présenter mes réalisations et expérimenter de nouvelles technologies web.",
      objectives:
        "• Mettre en valeur mes photos et projets\n• Développer un site rapide et responsive\n• Optimiser le SEO pour attirer de nouveaux clients",
      process:
        "1. Design & Branding\n• Maquettes Figma pour l'ergonomie\n• Design minimaliste et responsive\n\n2. Développement\n• Next.js et optimisation des images\n• Galerie photo dynamique\n• Blog intégré\n\n3. SEO & Performance\n• Optimisation des balises\n• Suivi avec Google Analytics\n• Sitemap optimisé",
      results:
        "🎨 Design minimaliste et responsive\n⚡ Optimisation des images\n📈 +300 visites/mois\n🖼️ +50 photos dans le portfolio",
    },
    technologies: ["Next.js", "React", "Figma", "SEO"],
    links: {
      website: "https://guillaumecreation.com",
      services: "/services/applications",
    },
    schema: {
      name: "Guillaume Creation - Portfolio Photo",
      url: "https://guillaumecreation.com",
    },
  },
]);
