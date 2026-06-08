/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true, // VERY IMPORTANT for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;