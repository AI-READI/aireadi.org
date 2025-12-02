/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'storage.googleapis.com',
      'storage.tally.so',
      'images.unsplash.com',
      'fairdataihub.org',
      'i.imgur.com',
      'cdn.aireadi.org',
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

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
