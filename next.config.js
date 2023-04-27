/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}



module.exports = {
  webpack: (config, { isServer }) => {
    // Add the Python loader
    config.module.rules.push({
      test: /\.py$/,
      use: ['raw-loader', './python-loader.js'],
    });

    // Other configuration options...
    
    return config;
  },
};
