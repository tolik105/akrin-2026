import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import CybersecurityClient from './client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cybersecurity Services in Japan',
  description:
    'Managed cybersecurity services for organizations in Japan, including monitoring, threat response, risk reviews, and compliance support.',
  alternates: {
    canonical: '/services/cybersecurity',
    languages: {
      en: '/services/cybersecurity',
      ja: '/ja/services/cybersecurity',
      'x-default': '/services/cybersecurity',
    },
  },
  openGraph: {
    title: 'Cybersecurity Services | Managed Security Solutions | AKRIN',
    description:
      'Enterprise cybersecurity services including 24/7 SOC monitoring, managed detection and response, vulnerability assessments, and compliance consulting for organizations in Japan.',
    url: '/services/cybersecurity',
    type: 'website',
  },
}

export default function CybersecurityServicePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cybersecurity Services',
    serviceType: 'Cybersecurity',
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: 'https://akrin.jp',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: 'https://akrin.jp/services/cybersecurity',
    description:
      'Enterprise cybersecurity services including 24/7 SOC monitoring, managed detection and response, vulnerability assessments, and compliance consulting.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cybersecurity Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Security Operations Center (SOC)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Managed Detection and Response',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Endpoint and Network Security',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vulnerability Assessment and Penetration Testing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Compliance and Governance',
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
        name: 'What cybersecurity services does AKRIN provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AKRIN provides managed security services including 24/7 security operations center monitoring, managed detection and response, endpoint and network security, vulnerability assessments, penetration testing, compliance consulting, and incident response for organizations operating in Japan.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a SOC and MDR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A security operations center provides continuous monitoring and alert management, while managed detection and response goes further with active threat hunting, automated containment, and hands-on incident response. Many organizations use both as part of a layered security strategy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide cybersecurity services for small business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our managed cybersecurity services are designed to scale — from small and mid-market organizations to large enterprises. Small business clients benefit from shared SOC resources and packaged security services at predictable monthly costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does AKRIN handle a security incident?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our incident response process follows established frameworks: detection and triage by our security operations center, investigation and containment by our managed detection and response team, eradication and recovery, followed by post-incident review with recommendations to strengthen defenses.',
        },
      },
      {
        '@type': 'Question',
        name: 'What compliance frameworks do you support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We support ISO 27001, SOC 2, PCI DSS, GDPR, and Japan-specific regulatory requirements. Our compliance services include gap assessments, policy development, audit preparation, and continuous monitoring to maintain compliance posture.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AKRIN provide bilingual cybersecurity services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All cybersecurity services are delivered in both English and Japanese — from security dashboards and incident alerts to executive reporting and compliance documentation.',
        },
      },
    ],
  }

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <CybersecurityClient />
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
