/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.suitdev.com",
        port: "",
        pathname: "/storage/files/**",
      },
    ],
  },
};

export default nextConfig;
