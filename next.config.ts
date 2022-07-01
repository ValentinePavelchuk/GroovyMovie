/**
 * @type {import("next").NextConfig}
 */
module.exports = {
  webpack5: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
export {};
