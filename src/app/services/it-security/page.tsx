import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import ITSecurityClient from './client'

export const metadata: Metadata = {
  title: 'IT Security Services: Managed Security, Consulting & Audit | AKRIN K.K.',
  description:
    'Managed IT security services, information security consulting, and audit services for enterprises in Japan. 24/7 monitoring, ISO 27001 alignment, and rapid incident response.',
  alternates: {
    canonical: '/services/it-security',
    languages: {
      en: '/services/it-security',
      ja: '/ja/services/it-security',
      'x-default': '/services/it-security',
    },
  },
  openGraph: {
    title: 'IT Security Services: Managed Security, Consulting & Audit | AKRIN K.K.',
    description:
      'Managed IT security services combining security consulting, managed security operations, and continuous monitoring to reduce risk and protect enterprise systems.',
    url: '/services/it-security',
    type: 'website',
  },
}

export default function ITSecurityPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'IT Security Services',
      serviceType: 'IT Security and Information Security Services',
      provider: {
        '@type': 'Organization',
        name: 'AKRIN K.K.',
        url: 'https://akrin.jp',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Japan',
      },
      url: 'https://akrin.jp/services/it-security',
      description:
        'Managed IT security services, information security consulting, and IT security audit services for enterprises in Japan.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Security Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Managed IT Security Services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Information Security Consulting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Security Audit Services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Endpoint & Network Security',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Incident Response & Threat Management',
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
          name: 'What types of security threats do IT security services protect against?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our IT security services protect against malware, ransomware, phishing, data breaches, insider threats, and advanced persistent threats using a multi-layered managed security approach with early detection and rapid response capabilities.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do managed security services differ from in-house security?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Managed security services provide 24/7 monitoring, specialized security expertise, and advanced threat detection systems that most organizations cannot maintain internally. Our managed security service model delivers enterprise-grade information security at predictable costs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What compliance frameworks do your security consulting services cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Our security consulting covers ISO 27001, PCI DSS, SOC 2, GDPR, Japan's Personal Information Protection Act, and industry-specific standards.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can you secure remote work environments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We implement comprehensive remote work security including VPN configuration, endpoint protection, zero-trust access, cloud security controls, and mobile device management.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does an information security audit include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An information security audit examines network devices, access controls, data protection, incident response procedures, and compliance posture. We deliver a comprehensive report with prioritized findings and remediation guidance.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can you respond to security incidents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our managed security services include defined response SLAs with rapid response capabilities. We provide immediate threat containment, forensic investigation, and recovery support.',
          },
        },
      ],
    },
  ]

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <ITSecurityClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
