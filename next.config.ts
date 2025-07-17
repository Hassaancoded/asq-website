import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // No basePath, no assetPrefix for Vercel
  images: {
    unoptimized: true // Optional for now, safe to keep
  }
};

export default nextConfig;
