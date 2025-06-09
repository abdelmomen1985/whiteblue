
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    allowedDevOrigins: ['*.replit.dev']
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/graphql',
        destination: 'http://34.56.54.244:48085/graphql',
      },
    ];
  },
};

module.exports = nextConfig;
