/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure public path for Leaflet assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    });
    return config;
  },
};

export default nextConfig; 