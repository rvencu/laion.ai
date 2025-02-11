/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "/laion.ai/",
  publicRuntimeConfig: {
    basePath: "/laion.ai",
  },
  basePath: "/laion.ai",
  images: {
    loader: "akamai",

    path: `/laion.ai/_next/image`,
  },
};

module.exports = nextConfig;
