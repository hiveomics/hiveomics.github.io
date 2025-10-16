/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // GitHub Pages Configuration
  // For user/organization pages (username.github.io), keep basePath commented out
  // For project pages (username.github.io/repo-name), uncomment and set to '/repo-name'
  // basePath: '/hivesite',

  images: {
    unoptimized: true, // Required for static export
  },

  trailingSlash: true, // Ensures proper routing on GitHub Pages
};

module.exports = nextConfig;
