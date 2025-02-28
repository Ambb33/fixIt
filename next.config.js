/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone", // Enables Next.js standalone mode (better for hosting)
    reactStrictMode: true, 
    trailingSlash: true, // Ensures proper routing with static files
    compress: true, // Enables gzip compression
    poweredByHeader: false, // Removes 'X-Powered-By: Next.js' header for security
  
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
      };
      config.resolve.symlinks = false;
      config.resolve.aliasFields = ["browser"];
      return config;
    },
  };
  
  module.exports = nextConfig;  