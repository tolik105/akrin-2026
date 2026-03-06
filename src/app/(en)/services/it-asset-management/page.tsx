import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ItAssetManagementClient } from './client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Asset Management Services',
  description:
    'IT asset management for procurement, inventory, software compliance, lifecycle control, and secure retirement in Japan.',
  alternates: {
    canonical: '/services/it-asset-management',
    languages: {
      en: '/services/it-asset-management',
      ja: '/ja/services/it-asset-management',
      'x-default': '/services/it-asset-management',
    },
  },
  openGraph: {
    title: 'IT Asset Management Services | ITAM Lifecycle Solutions | AKRIN',
    description:
      'Enterprise IT asset management services covering the full asset lifecycle — from procurement and software asset management to ITAD retirement. ITAM solutions for Japan.',
    url: '/services/it-asset-management',
    type: 'website',
  },
}

export default function ItAssetManagementServicePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Asset Management Services',
    serviceType: 'IT Asset Management',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/services/it-asset-management',
    description:
      'Enterprise IT asset management services covering the full asset lifecycle — from procurement and software asset management to ITAD retirement.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Asset Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Asset Discovery & Inventory',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Software Asset Management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Asset Lifecycle Management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ITAM Platform Configuration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Asset Management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Compliance & Risk Reduction',
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
        name: 'What is IT asset management and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IT asset management is the process of tracking, managing, and optimizing IT assets throughout their entire lifecycle. It helps organizations reduce costs, ensure compliance, improve operational efficiency, and make informed decisions about technology investments.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of IT assets does AKRIN manage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AKRIN manages all categories of IT assets including endpoints, servers, network equipment, mobile devices, peripherals, software licenses, cloud assets, and other IT assets across the entire asset lifecycle.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does ITAM software integrate with existing systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ITAM software integrates with core IT service management platforms, ticketing systems, procurement tools, and directory services. The configuration management database serves as the central repository connecting all asset information.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AKRIN support multi-location operations in Japan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our IT asset management process supports distributed offices, remote users, and centralized reporting across Japan. Bilingual service delivery ensures seamless operations management for both Japanese and international stakeholders.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does asset lifecycle management connect to ITAD?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Asset lifecycle management naturally transitions into IT asset disposition when assets reach end-of-life. AKRIN connects these workflows so retirement, secure data destruction, and compliance evidence are managed in sequence.',
        },
      },
      {
        '@type': 'Question',
        name: 'What reporting and asset tracking is provided?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide lifecycle, utilization, compliance, and optimization reporting tailored for IT leadership and business stakeholders. Our asset tracking systems deliver up-to-date information on every managed IT asset.',
        },
      },
    ],
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <ItAssetManagementClient />
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
