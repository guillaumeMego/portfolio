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
      {
        source: "/:path*",
        has: [{ type: "host", value: "guillaumeganne.com" }],
        destination: "https://www.guillaumeganne.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;