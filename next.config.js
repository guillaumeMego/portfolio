/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Protège contre le clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Empêche le navigateur de deviner les types MIME
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Contrôle les informations de referrer envoyées
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  // Active la protection XSS des navigateurs
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Politique de sécurité du contenu
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; img-src 'self' data: https://*.ytimg.com https://*.youtube.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com https://*.youtube.com https://*.ytimg.com; style-src 'self' 'unsafe-inline' https://*.youtube.com https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; object-src 'none'; frame-src 'self' https://*.youtube.com https://www.youtube.com; frame-ancestors 'none';",
  },
];

const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,

  // 🎯 CONVENTION URL : Forcer le trailing slash partout pour la cohérence
  trailingSlash: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Cache agressif pour les assets statiques Next.js
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache pour les images optimisées
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache pour les assets publics
      {
        source: "/(favicon|manifest|robots|sitemap).(ico|webmanifest|txt|xml)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    // Formats d'images supportés pour l'optimisation (AVIF en priorité pour de meilleures performances)
    formats: ["image/avif", "image/webp"],

    // Tailles d'écrans pour l'optimisation responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

    // Tailles d'images pour l'optimisation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache des images optimisées (1 an) - réduit les erreurs 400
    minimumCacheTTL: 31536000,

    // Autoriser les SVG (nécessaire pour les logos)
    dangerouslyAllowSVG: true,

    // Politique de sécurité pour les images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Configuration du domaine d'hébergement pour éviter les erreurs 400
    domains: ["www.guillaumeganne.com"],

    // Configuration des loaders d'images (par défaut)
    loader: "default",

    // Gestion des erreurs d'optimisation
    contentDispositionType: "attachment",
  },

  optimizeFonts: true,

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "@radix-ui/react-avatar", "@radix-ui/react-dropdown-menu", "framer-motion"],
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB"],
    serverComponentsExternalPackages: ["sharp"],
  },

  // Configuration webpack pour l'optimisation
  webpack: (config, { dev, isServer }) => {
    // Optimisations de build uniquement en production
    if (!dev && !isServer) {
      // Optimisation des chunks
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: -10,
              chunks: 'all',
            },
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react',
              priority: 10,
              chunks: 'all',
            },
            framer: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              priority: 5,
              chunks: 'all',
            },
          },
        },
      };
    }

    // Optimisation des images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },

  async redirects() {
    return [
      // 🚀 REDIRECTIONS DE NORMALISATION DES URLS

      // 1) Redirection des paramètres ?C= vers la page sans paramètres
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'C' }],
        destination: '/:path*/',
        permanent: true,
      },

      // 2) Redirections avec host pour les domaines (non-www → www)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'guillaumeganne.com',
          },
        ],
        destination: 'https://www.guillaumeganne.com/:path*/',
        permanent: true,
      },

      // 3) Redirections /projects/ vers /projets/ (avec trailing slash)
      {
        source: '/projects/:slug*',
        destination: '/projets/:slug*/',
        permanent: true,
      },

      // 4) Redirections spécifiques pour les anciens projets (avec trailing slash)
      {
        source: '/projects/1',
        destination: '/projets/creation-boutique-bougies-bio/',
        permanent: true,
      },
      {
        source: '/projects/1/',
        destination: '/projets/creation-boutique-bougies-bio/',
        permanent: true,
      },
      {
        source: '/projects/2',
        destination: '/projets/refonte-site-association-soupopotes/',
        permanent: true,
      },
      {
        source: '/projects/2/',
        destination: '/projets/refonte-site-association-soupopotes/',
        permanent: true,
      },
      {
        source: '/projects/3',
        destination: '/projets/audit-securite-seo-librexpression/',
        permanent: true,
      },
      {
        source: '/projects/les-creas-de-rose-bleue',
        destination: '/projets/creation-boutique-bougies-bio/',
        permanent: true,
      },
      {
        source: '/projects/soup-o-potes',
        destination: '/projets/refonte-site-association-soupopotes/',
        permanent: true,
      },
      {
        source: '/projects/soup-o-potes/',
        destination: '/projets/refonte-site-association-soupopotes/',
        permanent: true,
      },
      {
        source: '/projects/pendu-pokemon',
        destination: '/projets/jeu-pendu-pokemon-react/',
        permanent: true,
      },

      // 5) Redirections pour les pages 404 signalées (avec trailing slash)
      {
        source: '/gallery',
        destination: '/projets/',
        permanent: true,
      },
      {
        source: '/accessibilite',
        destination: '/mentions-legales/',
        permanent: true,
      },
      {
        source: '/plan-du-site-guillaume-ganne',
        destination: '/',
        permanent: true,
      },
      {
        source: '/plan-du-site-guillaume-ganne/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;