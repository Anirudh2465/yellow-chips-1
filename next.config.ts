import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Three.js to run client-side only without SSR errors
  transpilePackages: ['three'],

  // Image domains for WooCommerce product images + Cloudinary
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yellowchips.in',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  // Turbopack config (Next.js 16 default)
  // GLSL files are loaded as raw strings
  turbopack: {
    rules: {
      '*.{glsl,vert,frag}': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
