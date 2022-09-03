/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dkstatics-public.digikala.com"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
