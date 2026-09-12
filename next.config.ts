import type { NextConfig } from 'next';

import withVercelToolbar from '@vercel/toolbar/plugins/next';

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '10.0.0.167',
  ],
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  images: {
    qualities: [
      75,
      90,
    ],
    remotePatterns: [
      {
        hostname: 'api.dicebear.com',
        protocol: 'https',
      },
    ],
  },
};

export default withVercelToolbar()(nextConfig);
