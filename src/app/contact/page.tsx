import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { ContactSection } from './contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with AKRIN K.K. — your trusted IT consulting partner in Tokyo, Japan.',
  alternates: {
    canonical: '/contact',
    languages: {
      en: '/contact',
      ja: '/ja/contact',
      'x-default': '/contact',
    },
  },
}

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <ContactSection locale="en" />
      <Footer />
    </main>
  )
}
