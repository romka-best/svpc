import type { NextConfig } from 'next';

import withVercelToolbar from '@vercel/toolbar/plugins/next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'api.dicebear.com',
        protocol: 'https',
      },
    ],
  },
};

export default withVercelToolbar()(nextConfig);
