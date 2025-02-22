/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ✅ Ensures App Router works
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;

