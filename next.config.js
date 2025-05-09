/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig;