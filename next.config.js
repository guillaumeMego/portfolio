/** @type {import('next').NextConfig} */
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

          // Désactive l’accès à certaines API navigateur
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },

          // Protection XSS (exemple de CSP simple à adapter)
          {
            key: "Content-Security-Policy",
            value: `
        default-src 'self';
        script-src 'self' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        object-src 'none';
        frame-ancestors 'none';
      `.replace(/\s{2,}/g, ' ').trim(),
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
  trailingSlash: false,
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
  }
};

module.exports = nextConfig;