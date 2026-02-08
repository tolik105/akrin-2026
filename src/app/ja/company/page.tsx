import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会社情報',
  description:
    'AKRIN株式会社のミッション、提供方針、サービス提供体制をご紹介します。',
  alternates: {
    canonical: '/ja/company',
    languages: {
      en: '/company',
      ja: '/ja/company',
      'x-default': '/company',
    },
  },
}

export default function JapaneseCompanyPage() {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <Container className="py-20 sm:py-28">
          <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
            会社情報
          </p>
          <Heading as="h1" className="mt-2 max-w-4xl">
            AKRIN株式会社
          </Heading>
          <p className="mt-8 max-w-3xl text-lg/8 text-gray-700">
            東京を拠点に、クラウド、セキュリティ、インフラ運用を中心とした
            ITサービスを日英バイリンガルで提供しています。
          </p>
        </Container>

        <Container className="pb-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-semibold text-gray-950">ミッション</h2>
              <p className="mt-3 text-sm/7 text-gray-700">
                成長企業に、信頼性の高いIT基盤をわかりやすく、素早く提供すること。
              </p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-semibold text-gray-950">提供方針</h2>
              <p className="mt-3 text-sm/7 text-gray-700">
                エンジニア主導、運用自動化、透明性の高いレポーティングを重視します。
              </p>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-semibold text-gray-950">対応範囲</h2>
              <p className="mt-3 text-sm/7 text-gray-700">
                東京本社を中心に、全国の拠点・多拠点プロジェクトへ対応可能です。
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
