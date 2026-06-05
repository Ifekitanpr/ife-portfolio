import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
    ],
  },
}

export default nextConfig
