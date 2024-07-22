/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "server.cafeshm.ru",
      },
      {
        hostname: "server.kolkheti.ru",
      },
    ],
  },
};

export default nextConfig;
