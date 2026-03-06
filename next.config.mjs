/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
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
      {
        source: '/services/wifi-assessment',
        destination: '/services/japan-ekahau-wireless-surveys',
        permanent: true,
      },
      {
        source: '/ja/services/wifi-assessment',
        destination: '/ja/services/japan-ekahau-wireless-surveys',
        permanent: true,
      },
    ]
  },
  outputFileTracingIncludes: {
    '/*': [
      './docs/content/services/AKRIN_SITE_CONTENT_EN_JA.md',
      './docs/content/blog/AKRIN_Blog_Content_Combined.md',
      './docs/archive/content/AKRIN_SITE_CONTENT_EN_JA.md.backup',
      './docs/archive/content/AKRIN_Blog_Content_Combined.md.backup',
    ],
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
