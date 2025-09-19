/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { testProxy: true },
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;