/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable strict domain checking
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
   
    unoptimized: true, 
  },
};

export default nextConfig;
