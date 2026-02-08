import { SimplePageShell } from '@/components/simple-page-shell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    'AKRINにおける個人情報の取得・利用・保護に関する方針を掲載します。',
  alternates: {
    canonical: '/ja/privacy',
    languages: {
      en: '/privacy',
      ja: '/ja/privacy',
      'x-default': '/privacy',
    },
  },
}

export default function JapanesePrivacyPage() {
  return (
    <SimplePageShell
      eyebrow="法務情報"
      title="プライバシーポリシー"
      description="個人情報の取り扱い、保存期間、利用目的、お問い合わせ窓口を本ページで明示します。"
    />
  )
}
