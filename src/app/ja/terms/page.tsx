import { SimplePageShell } from '@/components/simple-page-shell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約',
  description: 'AKRINサービスの利用規約をご確認いただけます。',
  alternates: {
    canonical: '/ja/terms',
    languages: {
      en: '/terms',
      ja: '/ja/terms',
      'x-default': '/terms',
    },
  },
}

export default function JapaneseTermsPage() {
  return (
    <SimplePageShell
      eyebrow="法務情報"
      title="利用規約"
      description="AKRINサービスおよびWebサイト利用に関する規約を掲載します。法務最終版の反映に合わせて全文を更新可能です。"
    />
  )
}
