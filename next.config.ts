import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "1";
const basePath = isPages ? "/blackistechpresentation" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
