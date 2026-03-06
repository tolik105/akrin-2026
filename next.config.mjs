/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
  async redirects() {
    return [
      {
        source: '/services/managed-it-cloud-infrastructure-japan',
        destination: '/services/cloud-infrastructure',
        permanent: true,
      },
      {
        source: '/ja/services/managed-it-cloud-infrastructure-japan',
        destination: '/ja/services/cloud-infrastructure',
        permanent: true,
      },
      {
        source: '/services/cybersecurity-compliance',
        destination: '/services/cybersecurity',
        permanent: true,
      },
      {
        source: '/ja/services/cybersecurity-compliance',
        destination: '/ja/services/cybersecurity',
        permanent: true,
      },
      {
        source: '/blog/it-relocation-tokyo',
        destination: '/blog/it-relocation-tokyo-checklist',
        permanent: true,
      },
      {
        source: '/ja/blog/it-relocation-tokyo',
        destination: '/ja/blog/it-relocation-tokyo-checklist',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.logo.dev',
      },
    ],
  },
}

export default nextConfig
