/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dkf3vfz08/image/upload/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Static assets: cache for 1 year (they're content-hashed by Next.js)
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        // Public folder assets (images, fonts)
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      {
        // Pages: serve instantly from cache, revalidate in background every 10 min
        source: '/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=600, stale-while-revalidate=3600' }],
      },
    ]
  },
};

module.exports = nextConfig;