const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  distDir: "build",

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    config.resolve.symlinks = false;
    config.resolve.aliasFields = ["browser"];

    // ✅ Enforce case-sensitive imports (Windows IIS is case-insensitive)
    config.resolve.modules = [__dirname, "node_modules"];
    config.resolve.enforceExtension = false;

    // ✅ Add a plugin to detect case-sensitivity issues
    const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
    config.plugins.push(new CaseSensitivePathsPlugin());

    return config;
  },
};

module.exports = nextConfig;
