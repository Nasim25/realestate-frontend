import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myhome3.tangiblewp.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "d1csarkz8obe9u.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.magnific.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
