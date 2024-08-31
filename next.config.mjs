/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "onlinecourses.up.railway.app",
      "ibb.co",
      "i.ibb.co",
      "testapi-tau-nine.vercel.app",
    ],
    // Uncomment and configure this if you need to allow images from specific paths
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'onlinecourses.up.railway.app',
    //     port: '',
    //     pathname: '/uploads/**',
    //   },
    // ],
  },
};

export default nextConfig;
