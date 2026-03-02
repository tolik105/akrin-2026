import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import JapanEkahauWirelessSurveysClient from './client'

export const metadata: Metadata = {
  title: 'Ekahau Wireless Site Survey Services Japan | Wi-Fi Survey & Cable Testing — AKRIN',
  description:
    'Professional Ekahau wireless site surveys in Japan — predictive design, active validation, passive RF analysis, spectrum assessment, and FLUKE-certified structured cabling services for enterprise wifi networks.',
  alternates: {
    canonical: '/services/japan-ekahau-wireless-surveys',
    languages: {
      en: '/services/japan-ekahau-wireless-surveys',
      ja: '/ja/services/japan-ekahau-wireless-surveys',
      'x-default': '/services/japan-ekahau-wireless-surveys',
    },
  },
  openGraph: {
    title: 'Ekahau Wireless Site Survey Services — AKRIN Japan',
    description:
      'Professional wifi site surveys powered by Ekahau AI Pro & Sidekick. Predictive, active, passive surveys plus FLUKE cable testing for enterprise wireless networks.',
    url: '/services/japan-ekahau-wireless-surveys',
    type: 'website',
  },
}

export default function JapanEkahauWirelessSurveysPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ekahau Wireless Site Survey Services Japan',
    serviceType: 'Wireless Site Survey & Structured Cabling Services',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/services/japan-ekahau-wireless-surveys',
    description:
      'Professional Ekahau wireless site surveys including predictive design, active network validation, passive RF assessment, spectrum analysis, and FLUKE-certified structured cabling services for enterprise environments in Japan.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Wireless Survey & Cabling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Predictive Wireless Site Survey',
            description: 'Pre-deployment wifi network design using Ekahau AI Pro with floor plan modeling and access point placement optimization.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Active Wireless Site Survey',
            description: 'Post-deployment wifi network validation using Ekahau Sidekick for signal strength, throughput, and roaming testing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Passive RF Site Survey',
            description: 'RF environment analysis detecting neighboring networks, rogue access points, and channel interference.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Spectrum Analysis',
            description: 'Deep RF interference investigation identifying non-wifi interference sources across 2.4 GHz, 5 GHz, and 6 GHz bands.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'FLUKE Cable Testing & Certification',
            description: 'Professional structured cabling certification using Fluke Networks DSX CableAnalyzer for copper and fiber optic runs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Structured Cabling Design & Installation',
            description: 'Complete structured cabling design, installation, and certification for Cat6, Cat6A, Cat7, Cat8, and fiber optic infrastructure.',
          },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does an Ekahau wireless site survey take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A single-floor office site survey can often be completed in one day. Multi-floor or multi-building facilities usually require multiple days of on-site data collection based on scope, coverage areas, and network complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a pre-deployment and post-deployment site survey?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pre-deployment site survey uses predictive modeling to design access point placement and coverage before installation. A post-deployment site survey validates real-world wifi network performance, signal strength, and data rates after the network is live.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the Ekahau Sidekick improve site survey accuracy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Ekahau Sidekick is a dedicated wifi site survey measurement device with built-in dual-band radios and spectrum analyzer. It collects data points on signal strength, noise level, RF interference, and channel utilization simultaneously — providing more accurate and comprehensive results than a standard wireless adapter.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you need floor plans for a wifi site survey?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Accurate floor plans with wall materials and room layouts significantly improve predictive survey modeling and reporting precision. If needed, we can help prepare usable survey layouts from your existing documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What wifi standards and access point types do you support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support Wi-Fi 6, Wi-Fi 6E, and legacy standards. Our Ekahau wireless survey methodology is vendor-neutral, working with any access point brand or model.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the wireless survey disrupt current network operations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Active surveys connect to your live wifi network for data collection but do not modify settings. Passive surveys and spectrum analysis collect data without connecting at all. All survey activities are designed to avoid operational disruption.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is FLUKE cable testing available with wireless surveys?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide FLUKE-certified structured cabling testing alongside wireless site surveys to ensure both wireless and wired infrastructure meet performance standards.',
        },
      },
    ],
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <JapanEkahauWirelessSurveysClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </div>
  )
}
