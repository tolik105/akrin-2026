import { LegalMarkdown } from '@/components/legal-markdown'
import { SimplePageShell } from '@/components/simple-page-shell'
import { getLegalDocument } from '@/lib/legal-documents'
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

export default async function JapaneseTermsPage() {
  const markdown = await getLegalDocument('terms-of-service-ja.md')

  return (
    <SimplePageShell
      eyebrow="法務情報"
      title="利用規約"
      description="AKRINサービスおよびWebサイト利用に関する規約を掲載します。法務最終版の反映に合わせて全文を更新可能です。"
    >
      <LegalMarkdown markdown={markdown} />
    </SimplePageShell>
  )
}
