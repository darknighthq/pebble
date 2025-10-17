import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/homarr-labs/dashboard-icons@main/svg/**",
      },
    ],
  },
};

export default nextConfig;
