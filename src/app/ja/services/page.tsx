import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { generatePageMetadata } from '@/lib/metadata-helpers'
import { allServices } from '@/lib/service-catalog'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'ITサービス | AKRIN株式会社 - 包括的なテクノロジーソリューション',
  description:
    '現代のビジネスに向けたAKRIN株式会社の包括的なITサービス。マネージドサービス、サイバーセキュリティ、クラウドソリューション、ITコンサルティング、24時間365日サポートを提供しています。',
  keywords: [
    'ITサービス 日本',
    'マネージドITサービス',
    'サイバーセキュリティサービス',
    'クラウドソリューション',
    'ITコンサルティング',
    'ネットワークセキュリティ',
    'IT資産処分',
    'ワイヤレス評価',
    'ITサポート 東京',
    'AKRIN サービス',
  ],
  path: '/ja/services',
})

const breadcrumbData = [
  { name: 'ホーム', url: 'https://akrin.jp/ja' },
  { name: 'サービス', url: 'https://akrin.jp/ja/services' },
]

export default function JapaneseServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbData)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'AKRIN サービス',
            itemListElement: allServices.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.title.ja,
                url: `https://akrin.jp/ja/services/${service.slug}`,
                description: service.intro.ja,
              },
            })),
          }),
        }}
      />
      <div className="overflow-hidden bg-white">
        <Navbar />
        <main>
          <section className="border-b border-gray-200 bg-gray-50">
            <Container className="py-16 sm:py-24">
              <Subheading>サービス</Subheading>
              <Heading as="h1" className="mt-3 max-w-4xl">
                プロフェッショナルITサービス
              </Heading>
              <p className="mt-6 max-w-3xl text-lg/8 text-gray-700">
                日本およびグローバル企業向けに設計された、堅牢・拡張可能・安全なITサービスを提供します。
              </p>
            </Container>
          </section>

          <section>
            <Container className="py-16 sm:py-20">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {allServices.map((service) => (
                  <article
                    key={service.slug}
                    className="rounded-2xl border border-gray-200 bg-white p-6"
                  >
                    <h2 className="text-lg font-semibold text-gray-950">
                      {service.title.ja}
                    </h2>
                    <p className="mt-3 text-sm/7 text-gray-700">{service.intro.ja}</p>
                    <ul className="mt-5 list-disc space-y-1 pl-5 text-sm/6 text-gray-700">
                      {service.keyServices.ja.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button href={`/ja/services/${service.slug}`} variant="outline">
                        詳細を見る
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
