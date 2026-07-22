/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode catches subtle bugs early — keep on in every environment.
  reactStrictMode: true,

  // We author every image with next/image, so let Next.js own optimization,
  // caching and responsive sizing instead of shipping raw <img> tags.
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Add remote hosts here only when a real external image source exists.
      // Kept empty on purpose — this project ships with local/self-hosted
      // assets only, which is the fastest and most predictable setup.
    ],
  },

  // Strips the "X-Powered-By: Next.js" header for a slightly smaller
  // response and one less thing that leaks stack details.
  poweredByHeader: false,

  // Gzip/Brotli compression at the platform level; this just ensures
  // Next's own static output plays nicely with it.
  compress: true,

  experimental: {
    // Optimizes barrel-file imports from icon/utility packages so a single
    // `import { Icon } from "lucide-react"` doesn't pull the whole library
    // into every route's bundle. Critical once we're at 500+ tool pages.
    optimizePackageImports: ["lucide-react"],
  },

  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
