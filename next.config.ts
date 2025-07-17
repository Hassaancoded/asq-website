import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // ✅ Required for static export
  basePath: '/asq-website', // ✅ Your repo name
  assetPrefix: '/asq-website/', // ✅ Ensure assets load correctly
};

export default nextConfig;
