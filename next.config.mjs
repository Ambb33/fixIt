import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  // useFileSystemPublicRoutes: false,//do not use this it will not allow the page to render !!!!

  // distDir: "build",

  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias };
    config.resolve.symlinks = false;
    config.resolve.modules = [ 'node_modules'];

    // ✅ Enforce strict case-sensitive file paths
    config.plugins.push(new CaseSensitivePathsPlugin());

    return config;
  },

  // experimental: {
  //   disableOptimizedLoading: true,
  // },
};

export default nextConfig;
