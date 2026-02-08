import { Button } from '@/components/button'
import { SimplePageShell } from '@/components/simple-page-shell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Consultation',
  description:
    'Book a consultation with AKRIN to evaluate your IT priorities and next steps.',
  alternates: {
    canonical: '/book-consultation',
    languages: {
      en: '/book-consultation',
      ja: '/ja/book-consultation',
      'x-default': '/book-consultation',
    },
  },
}

export default function BookConsultationPage() {
  return (
    <SimplePageShell
      eyebrow="Consultation"
      title="Book a consultation with AKRIN."
      description="Share your requirements and our team will prepare a focused technical consultation."
    >
      <Button href="/contact">Go to Contact</Button>
    </SimplePageShell>
  )
}
