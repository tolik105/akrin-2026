import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { ContactSection } from '@/app/contact/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせフォーム',
  description:
    'AKRINへのお問い合わせはこちらから送信できます。担当者より順次ご連絡します。',
  alternates: {
    canonical: '/ja/contact-form',
    languages: {
      en: '/contact-form',
      ja: '/ja/contact-form',
      'x-default': '/contact-form',
    },
  },
}

export default function JapaneseContactFormPage() {
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
