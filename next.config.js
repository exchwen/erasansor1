/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Build sırasında ESLint hataları olsa bile devam etmesini sağlar
      ignoreDuringBuilds: true,
    },
  }
  
  module.exports = nextConfig