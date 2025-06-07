
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    allowedDevOrigins: ['*.replit.dev']
  }
}

module.exports = nextConfig
