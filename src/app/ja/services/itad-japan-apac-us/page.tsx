import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITADJaClient from './client'

export const metadata: Metadata = {
  title: '東京・日本のITAD（IT資産処分）| Japan / APAC / US',
  description:
    '東京を中心に日本全国、APAC、米国まで対応するIT Asset Disposition（ITAD）。NIST 800-88の考え方に沿ったデータ消去、物理破壊、価値回収、適正リサイクル、監査対応レポートをワンストップで提供します。',
  alternates: {
    canonical: '/ja/services/itad-japan-apac-us',
    languages: {
      en: '/services/itad-japan-apac-us',
      ja: '/ja/services/itad-japan-apac-us',
      'x-default': '/services/itad-japan-apac-us',
    },
  },
  openGraph: {
    title: '東京・日本のITAD（IT資産処分）| Japan / APAC / US',
    description:
      '東京を中心に日本全国、APAC、米国まで対応するIT Asset Disposition（ITAD）。NIST 800-88の考え方に沿ったデータ消去、物理破壊、価値回収、適正リサイクル、監査対応レポートをワンストップで提供します。',
    url: '/ja/services/itad-japan-apac-us',
    type: 'website',
  },
}

export default function ITADJaPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Asset Disposition (ITAD)',
    serviceType: 'IT Asset Disposition (ITAD)',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: ['日本', 'APAC', '米国'],
    url: 'https://akrin.jp/ja/services/itad-japan-apac-us',
    description:
      '東京を中心に日本全国、APAC、米国まで対応するIT Asset Disposition（ITAD）。NIST 800-88の考え方に沿ったデータ消去、物理破壊、価値回収、適正リサイクル、監査対応レポートをワンストップで提供します。',
  }

  return (
    <div className="overflow-x-clip bg-[#F4F3EC]">
      <Navbar />
      <ITADJaClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
