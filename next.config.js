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
    value: "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com; style-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'none';",
  },
];

const nextConfig = {
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  optimizeFonts: true,
  trailingSlash: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      // Redirections avec host pour les domaines
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'guillaumeganne.com',
          },
        ],
        destination: 'https://www.guillaumeganne.com/:path*',
        permanent: true,
      },

      // Redirections /projects/ vers /projets/
      {
        source: '/projects/:slug*',
        destination: '/projets/:slug*',
        permanent: true,
      },

      // Redirections avec trailing slash vers sans trailing slash
      {
        source: '/tarif/',
        destination: '/tarif',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/a-propos/',
        destination: '/a-propos',
        permanent: true,
      },
      {
        source: '/mentions-legales/',
        destination: '/mentions-legales',
        permanent: true,
      },
      {
        source: '/politique-confidentialite/',
        destination: '/politique-confidentialite',
        permanent: true,
      },
      {
        source: '/cookies/',
        destination: '/cookies',
        permanent: true,
      },
      {
        source: '/creation-site-web-angouleme/',
        destination: '/creation-site-web-angouleme',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/blog',
        permanent: true,
      },

      // Redirections spécifiques pour les anciens projets
      {
        source: '/projects/1',
        destination: '/projets/creation-boutique-bougies-bio',
        permanent: true,
      },
      {
        source: '/projects/1/',
        destination: '/projets/creation-boutique-bougies-bio',
        permanent: true,
      },
      {
        source: '/projects/2',
        destination: '/projets/refonte-site-association-soupopotes',
        permanent: true,
      },
      {
        source: '/projects/2/',
        destination: '/projets/refonte-site-association-soupopotes',
        permanent: true,
      },
      {
        source: '/projects/3',
        destination: '/projets/audit-securite-seo-librexpression',
        permanent: true,
      },
      {
        source: '/projects/3/',
        destination: '/projets/audit-securite-seo-librexpression',
        permanent: true,
      },
      {
        source: '/projects/les-creas-de-rose-bleue',
        destination: '/projets/creation-boutique-bougies-bio',
        permanent: true,
      },
      {
        source: '/projects/soup-o-potes',
        destination: '/projets/refonte-site-association-soupopotes',
        permanent: true,
      },
      {
        source: '/projects/soup-o-potes/',
        destination: '/projets/refonte-site-association-soupopotes',
        permanent: true,
      },
      {
        source: '/projects/pendu-pokemon',
        destination: '/projets/jeu-pendu-pokemon-react',
        permanent: true,
      },

      // Redirections pour les pages 404 signalées
      {
        source: '/gallery',
        destination: '/projets',
        permanent: true,
      },
      {
        source: '/accessibilite',
        destination: '/mentions-legales',
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