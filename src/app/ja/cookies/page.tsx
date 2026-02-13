import { LegalMarkdown } from '@/components/legal-markdown'
import { SimplePageShell } from '@/components/simple-page-shell'
import { getLegalDocument } from '@/lib/legal-documents'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookieポリシー',
  description: 'AKRINサイトで使用されるCookieおよび関連設定を説明します。',
  alternates: {
    canonical: '/ja/cookies',
    languages: {
      en: '/cookies',
      ja: '/ja/cookies',
      'x-default': '/cookies',
    },
  },
}

export default async function JapaneseCookiesPage() {
  const markdown = await getLegalDocument('cookie-policy-ja.md')

  return (
    <SimplePageShell
      eyebrow="法務情報"
      title="Cookieポリシー"
      description="Cookieの利用目的、分類、管理方法について本ページでご案内します。"
    >
      <LegalMarkdown markdown={markdown} />
    </SimplePageShell>
  )
}
