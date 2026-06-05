import type { NextConfig } from "next"
import path from "path"

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
  turbopack: {
    root: path.join(__dirname),
  },
}

export default nextConfig
