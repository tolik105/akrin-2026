import Image from 'next/image'
import { Link } from '@/components/link'

const timeline = [
  {
    name: 'ビジネスパートナーシップ',
    description:
      'アカウントマネージャーの伝言ゲームなし。シニアエンジニアに直接アクセスでき、ビジネスと技術の両面を深く理解します。',
    date: '柱 01',
    dateTime: '2025-01',
  },
  {
    name: '継続的な信頼性',
    description:
      '24時間365日の監視、2時間以内のSLA対応、99.9%の稼働率保証。止まらないインフラで、止まらないビジネスを。',
    date: '柱 02',
    dateTime: '2025-02',
  },
  {
    name: '体系的な成長',
    description:
      'ビジネスの成長に合わせて拡張できるソリューション。スタートアップからエンタープライズまで、成功を支えるインフラ基盤を提供します。',
    date: '柱 03',
    dateTime: '2025-03',
  },
  {
    name: 'オートメーションファースト',
    description:
      '標準化された運用と自動復旧により、品質とコンプライアンスを維持しながら復旧時間を短縮します。',
    date: '柱 04',
    dateTime: '2025-04',
  },
]

const serviceItems = [
  {
    id: 1,
    title: 'マネージドIT・クラウド',
    href: '/ja/services/managed-it-cloud-infrastructure-japan',
    description:
      'Microsoft 365、Azure、AWS、ハイブリッド環境における設計・移行・24時間運用までを一気通貫で提供。',
    detail: '日本・APACをカバー',
  },
  {
    id: 2,
    title: 'ネットワークエンジニアリング',
    href: '/ja/services/wifi-design',
    description:
      '有線／無線ネットワークの設計・構築・最適化。拠点間WANからオフィス内Wi-Fiサイトサーベイまで対応。',
    detail: 'オフィス・データセンター・拠点展開',
  },
  {
    id: 3,
    title: 'プロジェクトマネジメント・デリバリー',
    href: '/ja/services/it-consulting-project-management',
    description:
      'PMPに基づくフレームワークで、複雑なロールアウトを納期・予算・ドキュメントの面で確実に遂行。',
    detail: '可視化された進行管理と報告',
  },
  {
    id: 4,
    title: 'カスタムAIソリューション',
    href: '/ja/services/it-consulting-project-management',
    description:
      '業務ドメインに特化したチャットボット、ワークフロー自動化、データコパイロットを、貴社のスタックに合わせて構築。',
    detail: '自社プラットフォームの知見を還元',
  },
  {
    id: 5,
    title: 'サイバーセキュリティ・コンプライアンス',
    href: '/ja/services/cybersecurity-compliance',
    description:
      'ハードニング、リアルタイム監視、インシデント対応、ISO 27001等のフレームワーク取得に向けた実践的支援。',
    detail: '運用セキュリティと監査対応',
  },
]

const coreValues = [
  {
    value: '99.9%',
    title: '稼働率保証',
    description: '業務を止めないためのインフラ信頼性。',
    className: 'bg-[#FAFAF7] text-gray-900',
    bodyClassName: 'text-gray-600',
  },
  {
    value: '< 2h',
    title: 'SLA初動対応',
    description: '営業日2時間以内の責任あるサポート。',
    className: 'bg-[#F4F3EC] text-[#17100E]',
    bodyClassName: 'text-[#17100E]/60',
  },
  {
    value: '40%',
    title: 'MTTR短縮',
    description: '自動化により復旧時間を大幅に短縮。',
    className: 'bg-[#F4F3EC] text-[#17100E]',
    bodyClassName: 'text-[#17100E]/60',
  },
]

export default function AboutClient() {
  return (
    <main className="isolate overflow-hidden bg-white pt-20">
      <section id="about-intro" className="relative isolate -z-10 overflow-hidden bg-linear-to-b from-[#3462BD]/10 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-[#3462BD]/10 ring-[#3462BD]/10 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              AKRINについて
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                AKRINは2025年、経験豊富なインフラエンジニアにより東京で設立。15年以上の大規模IT運用の知見を、無駄のないオートメーションファーストの考え方と融合させています。
              </p>
              <p className="mt-4 text-base/7 text-gray-600">エンタープライズ級の信頼性、スタートアップの俊敏性。</p>
              <div className="mt-8">
                <Link
                  href="/ja/contact"
                  className="rounded-md bg-[#17100E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2A2523]"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <Image
              alt="AKRIN チーム"
              src="/company/1.jpg"
              width={1280}
              height={1066}
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-28"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </section>

      <section id="pillars" className="mx-auto -mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name} className="relative">
              <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-[#3462BD]">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-3 -z-10 ml-2 h-px w-screen bg-[#1F1E1D]/10 lg:static lg:z-auto lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{item.name}</p>
              <p className="mt-2 text-base/7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="mx-auto mt-24 max-w-7xl px-6 sm:mt-28 lg:px-8">
        <div className="rounded-3xl bg-[#F4F3EC] px-6 py-20 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-[#17100E] sm:text-4xl">
            主要プラットフォームと技術パートナー
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-[#17100E]/60">
            AKRINはクラウドやコラボレーション基盤を横断し、設計・運用・セキュリティを統合的に支援します。
          </p>
          <div className="mx-auto mt-14 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:max-w-4xl lg:grid-cols-5">
            <Image alt="Transistor" src="/logo-cloud/transistor.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
            <Image alt="Laravel" src="/logo-cloud/laravel.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
            <Image alt="Tuple" src="/logo-cloud/tuple.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
            <Image alt="SavvyCal" src="/logo-cloud/savvycal.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
            <Image alt="Statamic" src="/logo-cloud/statamic.svg" width={158} height={48} className="max-h-12 w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="mt-24 overflow-hidden sm:mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-12 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">私たちについて</h2>
              <p className="mt-6 text-xl/8 text-gray-700">
                私たちの使命は明確です。日本の成長企業に、フォーチュン500が享受する稼働率・セキュリティ・イノベーションを、適正なコストで提供すること。
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                エンジニア主導のサービス、オートメーションファースト、ジャパン・グローバルブリッジ。日本現場の実行力とグローバル基準を両立します。
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  alt="AKRIN オフィス"
                  src="/company/2.jpg"
                  width={1152}
                  height={822}
                  className="aspect-7/5 w-148 max-w-none rounded-2xl bg-[#FAFAF7] object-cover max-sm:w-120"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                  <Image
                    alt="AKRIN 導入現場"
                    src="/company/3.jpg"
                    width={768}
                    height={604}
                    className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-[#FAFAF7] object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    alt="AKRIN 連携"
                    src="/company/4.jpg"
                    width={1152}
                    height={842}
                    className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-[#FAFAF7] object-cover max-sm:w-120"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    alt="AKRIN エンジニアリング"
                    src="/company/5.jpg"
                    width={768}
                    height={604}
                    className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-[#FAFAF7] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="mx-auto mt-24 max-w-7xl px-6 sm:mt-28 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            私たちは、仕組みをより良くするために働きます
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            明瞭さ、スピード、責任、パートナーシップ。AKRINはこの価値観を運用と提案の中心に据えています。
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {coreValues.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:flex-row-reverse sm:items-end lg:flex-1 lg:flex-col lg:items-start ${item.className}`}
            >
              <p className="flex-none text-3xl font-bold tracking-tight">{item.value}</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight">{item.title}</p>
                <p className={`mt-2 text-base/7 ${item.bodyClassName}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="offerings" className="mx-auto mt-24 max-w-7xl px-6 pb-24 sm:mt-28 lg:px-8 lg:pb-28">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">提供サービス</h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              日本・APAC向けに、セキュリティ、可用性、拡張性を重視したエンドツーエンドのITサービスを提供します。
            </p>
            <Image
              alt="AKRIN 対応エリア"
              src="/map.png"
              width={1344}
              height={1104}
              className="mt-12 aspect-6/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 lg:aspect-auto lg:h-138"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <ul className="-my-8 divide-y divide-gray-100">
              {serviceItems.map((item) => (
                <li key={item.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <Link href={item.href}>
                        {item.title}
                        <span aria-hidden="true" className="absolute inset-0" />
                      </Link>
                    </dd>
                    <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">{item.description}</dd>
                    <dd className="mt-4 text-base/7 font-semibold text-gray-900">主要対応</dd>
                    <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500">
                      <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 flex-none fill-gray-300">
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      {item.detail}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <Link href="/ja/services" className="text-sm/6 font-semibold text-[#3462BD] hover:text-[#2A4F99]">
                サービス一覧を見る <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
