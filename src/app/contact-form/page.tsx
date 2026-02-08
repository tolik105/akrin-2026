import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { ContactSection } from '@/app/contact/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Form',
  description:
    'Submit your inquiry to AKRIN. Our team will respond as soon as possible.',
  alternates: {
    canonical: '/contact-form',
    languages: {
      en: '/contact-form',
      ja: '/ja/contact-form',
      'x-default': '/contact-form',
    },
  },
}

export default function ContactFormPage() {
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
