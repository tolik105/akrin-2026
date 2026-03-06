import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import NetworkPenetrationTestingClient from './client'

export const metadata: Metadata = {
  title: 'Network Penetration Testing',
  description:
    'External and internal penetration testing, vulnerability assessment, and remediation guidance for businesses in Japan.',
  alternates: {
    canonical: '/services/network-penetration-testing',
    languages: {
      en: '/services/network-penetration-testing',
      ja: '/ja/services/network-penetration-testing',
      'x-default': '/services/network-penetration-testing',
    },
  },
  openGraph: {
    title: 'Network Penetration Testing Services: External & Internal Pen Testing | AKRIN K.K.',
    description:
      'Professional network penetration testing services combining external and internal pen testing, vulnerability assessment, and security audit for enterprises in Japan.',
    url: '/services/network-penetration-testing',
    type: 'website',
  },
}

export default function NetworkPenetrationTestingPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Network Penetration Testing Services',
      serviceType: 'Network Penetration Testing and Security Assessment Services',
      provider: {
        '@type': 'Organization',
        name: 'AKRIN K.K.',
        url: 'https://akrin.jp',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Japan',
      },
      url: 'https://akrin.jp/services/network-penetration-testing',
      description:
        'Professional network penetration testing services including external and internal pen testing, vulnerability assessment, and security audit for enterprises in Japan.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Network Penetration Testing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'External Network Penetration Testing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Internal Penetration Testing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Black Box and Gray Box Testing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Vulnerability Assessment & Reporting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Compliance-Driven Penetration Testing',
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
          name: 'What is network penetration testing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Network penetration testing is an authorized simulated attack on your IT infrastructure conducted by certified ethical hackers. The goal is to identify exploitable security vulnerabilities, test your security controls, and provide remediation guidance before real attackers gain access to your systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should penetration testing be performed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most compliance frameworks require annual penetration testing at minimum. We recommend testing after significant network changes, before major deployments, and at least annually to maintain a strong security posture.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between external and internal penetration testing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'External penetration testing evaluates your internet-facing assets from an outsider perspective, while internal testing simulates an attacker already inside your network. A comprehensive security assessment includes both.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between black box and gray box testing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Black box testing gives pen testers no prior knowledge of your systems, simulating a real external attacker. Gray box testing provides limited information like credentials or network maps, enabling deeper exploration of specific areas.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a network pen test take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A typical network penetration testing engagement takes one to three weeks depending on scope, complexity, and the number of target systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'What deliverables are included?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every engagement concludes with a comprehensive network pen test report containing executive summaries, detailed technical findings, proof-of-concept evidence, risk ratings, and prioritized remediation guidance.',
          },
        },
      ],
    },
  ]

  return (
    <div className="overflow-x-clip bg-[#F7F7FC]">
      <Navbar />
      <NetworkPenetrationTestingClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Footer />
    </div>
  )
}
