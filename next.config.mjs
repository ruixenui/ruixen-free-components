/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com", "cdn.dribbble.com", "images.unsplash.com", "images.pexels.com", "github.com"], // Add the domain here
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
}

export default nextConfig
