/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_WP_IMAGES_URL || ''],
  },
}

module.exports = nextConfig
