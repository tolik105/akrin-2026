import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { ContactSection } from '@/app/contact/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'AKRINへのお問い合わせ、無料相談、サービス相談はこちらから。',
  alternates: {
    canonical: '/ja/contact',
    languages: {
      en: '/contact',
      ja: '/ja/contact',
      'x-default': '/contact',
    },
  },
}

export default function JapaneseContactPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <ContactSection locale="ja" />
      <Footer />
    </main>
  )
}
