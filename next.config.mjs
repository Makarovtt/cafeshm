/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "server.cafeshm.ru",
      },
    ],
  },
};

export default nextConfig;
