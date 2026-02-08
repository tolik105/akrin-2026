import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '料金プラン',
  description:
    'AKRINの運用支援・プロジェクト支援・アドバイザリーの提供形態をご案内します。',
  alternates: {
    canonical: '/ja/pricing',
    languages: {
      en: '/pricing',
      ja: '/ja/pricing',
      'x-default': '/pricing',
    },
  },
}

const tiers = [
  {
    name: '運用支援プラン',
    description:
      '24時間365日の監視・障害対応・運用ガバナンスを継続的に提供します。',
    fit: '日々の安定運用と迅速なサポートを重視する企業向け。',
  },
  {
    name: 'プロジェクト推進プラン',
    description:
      'クラウド移行、ネットワーク刷新、セキュリティ強化などの導入案件に対応。',
    fit: '期限と成果物を明確にした変革プロジェクト向け。',
  },
  {
    name: 'アドバイザリー契約',
    description:
      'IT戦略、アーキテクチャレビュー、技術意思決定を継続支援します。',
    fit: '中長期の技術計画と意思決定支援が必要な企業向け。',
  },
]

export default function JapanesePricingPage() {
  return (
    <div className="overflow-hidden bg-white">
      <Navbar />
      <main>
        <Container className="py-20 sm:py-28">
          <p className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
            料金
          </p>
          <Heading as="h1" className="mt-2 max-w-4xl">
            お客様の運用体制に合わせた提供モデル。
          </Heading>
          <p className="mt-8 max-w-3xl text-lg/8 text-gray-700">
            現在の課題、運用規模、リスク要件に合わせて、最適な契約形態をご提案します。
          </p>
        </Container>

        <Container className="pb-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {tiers.map((tier) => (
              <section
                key={tier.name}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <h2 className="text-xl font-semibold tracking-tight text-gray-950">
                  {tier.name}
                </h2>
                <p className="mt-3 text-sm/7 text-gray-700">{tier.description}</p>
                <p className="mt-3 text-sm/7 text-gray-600">{tier.fit}</p>
              </section>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/ja/contact">提案を依頼する</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
