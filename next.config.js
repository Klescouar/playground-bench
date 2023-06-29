const plugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withOffline = require('next-offline');
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag|ps)$/,
      exclude: /node_modules/,
      use: ['raw-loader'],
    });

    return config;
  },
};

module.exports = plugins([[withOffline], withBundleAnalyzer], nextConfig);
