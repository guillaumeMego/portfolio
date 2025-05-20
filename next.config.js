/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const cspValue = isProd
  ? `
    default-src 'self';
    script-src 'self' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    object-src 'none';
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim()
  : `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    object-src 'none';
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim();

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Protège contre clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },

          // Empêche le browser de deviner les types MIME
          { key: "X-Content-Type-Options", value: "nosniff" },

          // Réduit les infos de referrer envoyées
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Désactive l'accès à certaines API navigateur
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },

          // Protection XSS (exemple de CSP simple à adapter)
          {
            key: "Content-Security-Policy",
            value: cspValue,
          },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  optimizeFonts: true,
  trailingSlash: false,
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'guillaumeganne.com' },
        ],
        destination: 'https://www.guillaumeganne.com/:path*',
        permanent: true,
      },
      {
        source: '/projects/3',
        destination: '/projects/soup-o-potes',
        permanent: true,
      },
      {
        source: '/projects/2',
        destination: '/projects/pendu-pokemon',
        permanent: true,
      },
      {
        source: '/projects/1',
        destination: '/projects/les-creas-de-rose-bleue',
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