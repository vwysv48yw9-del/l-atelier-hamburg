import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 430, 768, 1024, 1280, 1920],
    minimumCacheTTL: 31536000, // 1 Jahr
  },
  compress: true,
}

export default nextConfig
