const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  // distDir: "build",

  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias };
    config.resolve.symlinks = false;
    config.resolve.aliasFields = ["browser"];
    config.resolve.modules = [__dirname, "node_modules"];

    // ✅ Enforce strict case-sensitive file paths
    config.plugins.push(new CaseSensitivePathsPlugin());

    return config;
  },

  // // ✅ Disable file-system-based caching in IIS (fixes case-sensitivity issue)
  // experimental: {
  //   disableOptimizedLoading: true,
  // },
};

module.exports = nextConfig;

