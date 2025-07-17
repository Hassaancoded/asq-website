import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 
  images: {
    unoptimized: true // Required for static export with images
  }
};

export default nextConfig;
