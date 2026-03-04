import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import CloudInfrastructureClient from './client'

export const metadata: Metadata = {
  title: 'Cloud Infrastructure Services: Migration, Management & Optimization | AKRIN K.K.',
  description:
    'End-to-end cloud infrastructure services — cloud migration, managed cloud operations, cost optimization, and multi-cloud management. AWS, Azure & hybrid cloud solutions in Japan.',
  alternates: {
    canonical: '/services/cloud-infrastructure',
    languages: {
      en: '/services/cloud-infrastructure',
      ja: '/ja/services/cloud-infrastructure',
      'x-default': '/services/cloud-infrastructure',
    },
  },
  openGraph: {
    title: 'Cloud Infrastructure Services: Migration, Management & Optimization | AKRIN K.K.',
    description:
      'Cloud readiness assessment, secure migration, 24/7 managed operations, and cost optimization for enterprise cloud environments.',
    url: '/services/cloud-infrastructure',
    type: 'website',
    images: [
      {
        url: '/images/og/cloud-infrastructure-service.jpg',
        alt: 'AKRIN Cloud Infrastructure Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Infrastructure Services | AKRIN K.K.',
    description:
      'Cloud migration, managed operations & optimization. AWS, Azure & hybrid cloud solutions for enterprises in Japan.',
    images: ['/images/og/cloud-infrastructure-service.jpg'],
  },
}

export default function CloudInfrastructurePage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Cloud Infrastructure Services',
      serviceType: 'Cloud Infrastructure Services',
      provider: {
        '@type': 'Organization',
        name: 'AKRIN K.K.',
        url: 'https://akrin.ai',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Japan',
      },
      url: 'https://akrin.ai/services/cloud-infrastructure',
      description:
        'End-to-end cloud infrastructure services including cloud migration, managed cloud operations, cost optimization, and multi-cloud management.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Cloud Infrastructure Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Readiness Assessment & TCO Analysis',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Migration Services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Managed Cloud Operations 24/7',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Cost Optimization',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Security & Compliance',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Multi-Cloud Management',
            },
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What cloud platforms do you support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We manage cloud environments across AWS, Microsoft Azure, Google Cloud, and private cloud infrastructure. Our team designs hybrid cloud and multi-cloud architectures tailored to your workload and compliance needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a typical cloud migration take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cloud migration timelines vary by scope. A single-application migration may complete in weeks, while enterprise-wide migration projects typically span 3 to 12 months depending on data volume, application dependencies, and compliance requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you manage cloud infrastructure we already have in place?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our managed cloud services cover existing cloud environments. We perform a cloud readiness assessment, identify optimization opportunities, and transition into ongoing 24/7 monitoring and management.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you handle cloud security and compliance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cloud security is built into every layer — identity and access management, network segmentation, encryption, and continuous monitoring. We align cloud environments with frameworks including ISO 27001, SOC 2, and Japan-specific data residency requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does cloud cost optimization include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cloud cost optimization covers reserved instance planning, rightsizing, unused resource cleanup, storage tiering, and automated scaling policies. Most organizations reduce cloud spend by 20-35% after a structured optimization review.',
          },
        },
      ],
    },
  ]

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <CloudInfrastructureClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
