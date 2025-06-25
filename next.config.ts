import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: [
    //   'images.unsplash.com',
    //   'your-other-image-host.com' // Add other domains as needed
    // ],
    // OR use remotePatterns for more control:
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
