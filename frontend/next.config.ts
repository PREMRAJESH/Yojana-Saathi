import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      }
    }
    return config;
  },
  turbopack: {}
};

export default nextConfig;
