import Image from 'next/image'
import { Link } from '@/components/link'

const timeline = [
  {
    name: '対応するのは営業ではなく、エンジニアです',
    description:
      'お電話に出るのは、問題を解決するエンジニア本人です。チケットのたらい回しや伝言リレーはありません。シニアエンジニアがお客様の環境を一貫して担当します。',
    date: '柱 01',
    dateTime: '2025-01',
  },
  {
    name: '問題は、お客様が気づく前に解決します',
    description:
      '24時間365日の監視と自動復旧により、ほとんどのインシデントはお客様に届く前に対処されます。万が一の場合も、2時間以内に対応 — 2営業日後ではありません。',
    date: '柱 02',
    dateTime: '2025-02',
  },
  {
    name: 'お客様の成長に、インフラが追いつきます',
    description:
      '現在だけでなく、将来を見据えた設計を行います。30名の東京オフィスでも、2,000席のAPAC展開でも、入れ替え不要でスケールする仕組みを構築します。',
    date: '柱 03',
    dateTime: '2025-03',
  },
  {
    name: '人を増やすのではなく、自動化する',
    description:
      '他社が手作業で行うことを、私たちはスクリプトで解決します。IaC、自動プロビジョニング、標準化された復旧手順 — より速く、ミスなく、低コストに。',
    date: '柱 04',
    dateTime: '2025-04',
  },
]

const serviceItems = [
  {
    id: 1,
    title: 'マネージドIT・クラウド',
    href: '/ja/services/it-managed-services',
    description:
      'Microsoft 365、Azure、AWSのフルスタック管理。移行、日常運用、ユーザーサポート、セキュリティ強化まで — お客様はビジネスに集中し、インフラは私たちにお任せください。',
    detail: '日本・APACをカバー',
  },
  {
    id: 2,
    title: 'Wi-Fiサーベイ＆ワイヤレス設計',
    href: '/ja/services/japan-ekahau-wireless-surveys',
    description:
      'Ekahau予測サイトサーベイ、ヒートマップ、スペクトラム解析、無線ネットワーク設計。アクセスポイントを設置する前に、Wi-Fiが確実に機能することを保証します。',
    detail: 'Ekahau認定エンジニア',
  },
  {
    id: 3,
    title: 'ネットワークエンジニアリング',
    href: '/ja/services/japan-ekahau-wireless-surveys',
    description:
      '有線・無線インフラ — 構造化配線、スイッチ、ファイアウォール、マルチサイトWAN展開。東京の1フロアから全国の拠点ロールアウトまで対応。',
    detail: 'オフィス・データセンター・拠点ネットワーク',
  },
  {
    id: 4,
    title: 'オフィス移転・ITリロケーション',
    href: '/ja/services/it-consulting-project-management',
    description:
      'オフィス移転のエンドツーエンドIT計画。ネットワーク設計、配線、ハードウェア設置、クラウド準備、初日からの接続性確保 — チームが出社した瞬間からすべてが稼働します。',
    detail: 'ゼロダウンタイム移行',
  },
  {
    id: 5,
    title: 'プロジェクトマネジメント・デリバリー',
    href: '/ja/services/it-consulting-project-management',
    description:
      'PMP認定のプロジェクトリードが複雑なITロールアウトをエンドツーエンドで管理。クラウド移行、セキュリティ刷新、インフラアップグレード — 納期厳守、全工程ドキュメント化。',
    detail: '構造化された実行と完全なドキュメント',
  },
  {
    id: 6,
    title: 'サイバーセキュリティ・コンプライアンス',
    href: '/ja/services/cybersecurity',
    description:
      'ペネトレーションテスト、脆弱性診断、24時間365日監視、ISO 27001・APPI・SOC 2のコンプライアンスガイダンス。チェックリストではなく、実践的なセキュリティを。',
    detail: 'セキュリティ運用とコンプライアンス対応',
  },
]

const coreValues = [
  {
    value: '99.9%',
    title: '稼働率',
    description: '約束ではなく、実測値。全マネージド環境での実績。',
    className: 'bg-[#FAFAFC] text-gray-900',
    bodyClassName: 'text-gray-600',
  },
  {
    value: '< 2h',
    title: '応答時間',
    description: '営業時間内の重大障害に対して。全契約に明記。',
    className: 'bg-[#F7F7FC] text-[#0A0B19]',
    bodyClassName: 'text-[#0A0B19]/60',
  },
  {
    value: '40%',
    title: 'MTTR短縮',
    description: '業界平均比。自動化ファーストの復旧アプローチによる実績。',
    className: 'bg-[#F7F7FC] text-[#0A0B19]',
    bodyClassName: 'text-[#0A0B19]/60',
  },
]

export default function AboutClient() {
  return (
    <main className="isolate overflow-hidden bg-white pt-20">
      <section id="about-intro" className="relative isolate -z-10 overflow-hidden bg-linear-to-b from-[#0A0B19]/10 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-[#0A0B19]/10 ring-[#0A0B19]/10 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              AKRINについて
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                東京を拠点とするインフラエンジニアリング企業です。日本で15年以上にわたり、ダウンタイムが許されない企業のエンタープライズIT環境を構築・運用してきました。
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                AKRINを立ち上げた理由 — 日本のIT市場は二極化しています。グローバルMSPはエンタープライズ料金を請求しながらオフショアヘルプデスクに丸投げ。ローカルベンダーは市場を知っていても、複雑なマルチサイトインフラに対応できない。私たちは、その両方を提供します。
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#0066CC]">
                エンジニア主導のIT運用 — 日本全国対応
              </p>
              <div className="mt-8">
                <Link
                  href="/ja/contact"
                  className="rounded-md bg-[#0066CC] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0052A3]"
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
              <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-[#0A0B19]">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-3 -z-10 ml-2 h-px w-screen bg-[#0A0B19]/10 lg:static lg:z-auto lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{item.name}</p>
              <p className="mt-2 text-base/7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="mx-auto mt-24 max-w-7xl px-6 sm:mt-28 lg:px-8">
        <div className="rounded-3xl bg-[#F7F7FC] px-6 py-20 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-[#0A0B19] sm:text-4xl">
            主要プラットフォームと技術パートナー
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-[#0A0B19]/60">
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
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">お客様がAKRINを選ぶ理由</h2>
              <p className="mt-6 text-xl/8 text-gray-700">
                日本のIT企業の多くは、契約を結んだらヘルプデスクに引き継ぎます。私たちのやり方は違います。AKRINの全案件は、Microsoft 365、Azure、AWS、Ciscoネットワーキング、エンドポイントセキュリティ、日本国内のオフィス展開に精通したシニアエンジニアが主導します。
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                日本語でのベンダー交渉、APPIや古物商許可などの国内コンプライアンス対応、そしてお客様がロンドン、ニューヨーク、シンガポールのオフィスで使用するのと同じSLAフレームワークでの納品。両方を理解する一つのチームとして対応します。
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  alt="AKRIN オフィス"
                  src="/company/2.jpg"
                  width={1152}
                  height={822}
                  className="aspect-7/5 w-148 max-w-none rounded-2xl bg-[#FAFAFC] object-cover max-sm:w-120"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                  <Image
                    alt="AKRIN 導入現場"
                    src="/company/3.jpg"
                    width={768}
                    height={604}
                    className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-[#FAFAFC] object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    alt="AKRIN 連携"
                    src="/company/4.jpg"
                    width={1152}
                    height={842}
                    className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-[#FAFAFC] object-cover max-sm:w-120"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    alt="AKRIN エンジニアリング"
                    src="/company/5.jpg"
                    width={768}
                    height={604}
                    className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-[#FAFAFC] object-cover"
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
            私たちが守る基準
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            これらは目標ではありません。お客様が毎月私たちを評価する実績数値です。
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
              日本・APACで事業を展開する企業向けに構築された、インフラ、ネットワーキング、セキュリティサービス。
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
              <Link href="/ja/services" className="text-sm/6 font-semibold text-[#0A0B19] hover:text-[#1A1B2E]">
                サービス一覧を見る <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
