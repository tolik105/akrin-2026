const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dev and production artifacts separate to avoid chunk-manifest
  // corruption when `next dev` and `next build` are run in the same workspace.
  distDir: isProduction ? '.next' : '.next-dev',
  experimental: {
    devtoolSegmentExplorer: false,
  },
}

export default nextConfig
