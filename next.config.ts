import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  typescript: {
    // !! WARN !!
    // Only use this option if you need to temporarily bypass type checking
    ignoreBuildErrors: true,
  },
});

export default nextConfig;
