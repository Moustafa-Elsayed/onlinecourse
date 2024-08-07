/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Ensure this is configured if you're serving images from a domain
    domains: ['localhost'],
    // Use this option if you need to allow images from certain paths
    // You might not need this if images are served from the public directory
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '3000',
    //     pathname: '/uploads/**',
    //   },
    // ],
  },
};

export default nextConfig;
