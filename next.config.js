/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.tally.so',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'fairdataihub.org',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.aireadi.org',
      },
      {
        protocol: 'https',
        hostname: 'ai-readi.b-cdn.net',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/data',
        destination: '/comingsoon',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
