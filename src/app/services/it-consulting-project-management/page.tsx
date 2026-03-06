import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITConsultingProjectManagementClient from './client'

export const metadata: Metadata = {
  title: 'IT Consulting Services & Project Management | AKRIN K.K.',
  description:
    'End-to-end IT consulting services and project management for enterprise operations in Japan. Infrastructure builds, office relocations, data center projects, and cloud migrations.',
  alternates: {
    canonical: '/services/it-consulting-project-management',
    languages: {
      en: '/services/it-consulting-project-management',
      ja: '/ja/services/it-consulting-project-management',
      'x-default': '/services/it-consulting-project-management',
    },
  },
  openGraph: {
    title: 'IT Consulting Services & Project Management | AKRIN K.K.',
    description:
      'Enterprise IT consulting and project management — infrastructure builds, office relocations, data center migrations, and cloud transformation in Japan.',
    url: '/services/it-consulting-project-management',
    type: 'website',
    images: [
      {
        url: '/images/og/it-consulting-project-management.jpg',
        alt: 'AKRIN IT Consulting & Project Management Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Consulting Services & Project Management | AKRIN K.K.',
    description:
      'Enterprise IT consulting and project management for infrastructure, office relocations, and cloud migrations in Japan.',
    images: ['/images/og/it-consulting-project-management.jpg'],
  },
}

export default function ITConsultingProjectManagementPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'IT Consulting & Project Management Services',
      serviceType: 'IT Consulting and Project Management',
      provider: {
        '@type': 'Organization',
        name: 'AKRIN K.K.',
        url: 'https://akrin.ai',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Japan',
      },
      url: 'https://akrin.ai/services/it-consulting-project-management',
      description:
        'End-to-end IT consulting services and project management for enterprise operations — infrastructure builds, office relocations, data center projects, and cloud migrations.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Consulting & Project Management Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Infrastructure Project Management',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Office Relocation & Workspace Technology',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Data Center Builds & Migrations',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Migration & Digital Transformation',
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
          name: "What does AKRIN's IT consulting cover?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide end-to-end project management for infrastructure builds, office relocations, data center projects, cloud migrations, and technology refresh programs for organizations across Japan.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you assign project managers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We match project managers based on technical background, project complexity, and industry experience. Every project manager holds recognized certifications and has managed enterprise-scale information technology projects.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work outside Tokyo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our consultants travel across Japan, and we offer remote project management support for distributed teams and multi-site business deployments.',
          },
        },
        {
          '@type': 'Question',
          name: 'What tools do you use for project tracking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We use industry-standard solutions including MS Project, Jira, and Asana. We adapt to your preferred platform to ensure seamless integration with existing business workflows.',
          },
        },
        {
          '@type': 'Question',
          name: 'What size projects do you handle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We support projects ranging from 20-seat office moves to enterprise-wide infrastructure transformations spanning multiple sites and hundreds of endpoints.',
          },
        },
      ],
    },
  ]

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <ITConsultingProjectManagementClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
