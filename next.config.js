/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/technology', destination: '/products', permanent: true },
    ];
  },
};

module.exports = nextConfig;
