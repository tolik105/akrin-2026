import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: '/',
      ja: '/ja',
      'x-default': '/',
    },
  },
}

export default function JapaneseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div lang="ja">{children}</div>
}
