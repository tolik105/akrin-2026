import { Button } from '@/components/button'
import { SimplePageShell } from '@/components/simple-page-shell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '相談予約',
  description:
    'AKRINの無料相談予約ページです。現状課題に合わせた最適な進め方をご提案します。',
  alternates: {
    canonical: '/ja/book-consultation',
    languages: {
      en: '/book-consultation',
      ja: '/ja/book-consultation',
      'x-default': '/book-consultation',
    },
  },
}

export default function JapaneseBookConsultationPage() {
  return (
    <SimplePageShell
      eyebrow="相談"
      title="AKRINへの相談予約"
      description="現状の課題や要件を共有いただき、最適な技術支援プランをご提案します。"
    >
      <Button href="/ja/contact">お問い合わせへ</Button>
    </SimplePageShell>
  )
}
