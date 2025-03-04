import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias };
    config.resolve.symlinks = false;
    config.resolve.modules = ["node_modules"];

    // Case-sensitive paths
    config.plugins.push(new CaseSensitivePathsPlugin());

    // Disable Webpack caching (try this if the issue persists)
    config.cache = false;

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://fix.ambeautyboutique.com/api/:path*", // Replace with actual backend URL
      },
    ];
  },
};

export default nextConfig;
