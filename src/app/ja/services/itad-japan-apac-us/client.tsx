'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Link } from '@/components/link'
import { SectionNav } from '@/components/SectionNav'

type SectionItem = {
  id: string
  label: string
  num: string
}

const itadSectionItems: SectionItem[] = [
  { id: 'overview', label: '提供価値', num: '01' },
  { id: 'services', label: 'サービス', num: '02' },
  { id: 'compliance', label: 'コンプライアンス', num: '03' },
  { id: 'coverage', label: '対応地域', num: '04' },
  { id: 'process', label: '標準フロー', num: '05' },
  { id: 'equipment', label: '対応機器', num: '06' },
  { id: 'assurance', label: '安心', num: '07' },
  { id: 'faq', label: 'FAQ', num: '08' },
]

const faqItems = [
  {
    q: '回収はどれくらい早く手配できますか？',
    a: '東京圏では、現場アクセスと梱包要件が整えば数営業日で手配できるケースが多いです。大規模/セキュア施設の場合は、変更管理（Change Calendar）に合わせて計画します。',
  },
  {
    q: 'オンサイト（現地）でデータ破壊できますか？',
    a: 'はい。即時にリスク除去が必要な案件では、オンサイト破壊や立会い処理に対応します。オンサイト必須でない場合は、セキュア施設での処理の方がコスト効率が良い場合があります。',
  },
  {
    q: '価値回収（買取/再販）もできますか？',
    a: '消去・検証後に、再利用可能な資産はグレーディングし、再販/再利用の選択肢を提示します。再利用/再販とリサイクルの内訳、精算モデルに基づく結果をレポートします。',
  },
  {
    q: '複数国・複数拠点の案件に対応できますか？',
    a: 'はい。プロジェクトマネージャーを一本化し、テンプレートを統一した上で、Japan / APAC / US を集約レポートにまとめます。',
  },
  {
    q: 'セキュア施設（入退館が厳しい現場）でも作業できますか？',
    a: 'はい。エスコート、時間制限、梱包ルール、署名/確認手順など現場ルールに従い、監査で説明できる受け渡し設計にします。',
  },
]

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-sm bg-[#3462BD]" />
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#17100E]/40">{label}</span>
    </div>
  )
}

function ImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex min-h-[240px] items-center justify-center rounded-2xl border border-white/20 bg-white/[0.04] ${className}`}
      aria-hidden="true"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
        IMAGE PLACEHOLDER
      </span>
    </div>
  )
}

export default function ITADJaClient() {
  return (
    <main className="bg-[#F4F3EC]">
      <section className="relative overflow-hidden bg-[#17100E] pt-28 sm:pt-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,138,196,0.28)_0%,transparent_55%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
          <nav className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
            <Link href="/ja/services" className="transition-colors hover:text-white">
              サービス
            </Link>{' '}
            <span className="px-1 text-white/45">&gt;</span>{' '}
            <span className="text-white">ITAD Japan / APAC / US</span>
          </nav>

          <div className="mt-8 max-w-5xl">
            <h1 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
              東京・日本のITAD（IT資産処分）: 安全・適正・監査対応（Japan / APAC / US）
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-100 sm:text-xl/8">
              AKRINは、PC・サーバー・ネットワーク機器・ストレージ媒体などの退役（廃棄/再利用）を、<strong>セキュリティ</strong>・<strong>法令/社内ポリシー</strong>・<strong>環境配慮</strong>の観点から整理し、<strong>証跡（エビデンス）付き</strong>で完了まで支援する <strong>IT Asset Disposition（ITAD）</strong> を提供します。
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg/7">
              <strong>こんなケースに最適：</strong>オフィス移転、リプレース/リフレッシュ、データセンター更改、回収（リターン）プログラム、複数拠点の同時撤去 など
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/ja/contact?service=itad"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-base font-medium text-[#17100E] transition-colors hover:bg-gray-100"
              >
                ITADプロジェクトを開始
              </Link>
              <Link
                href="/ja/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/80 bg-transparent px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          <div className="mt-12 max-w-4xl">
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] overflow-visible px-6 lg:px-8">
        <div className="overflow-visible lg:flex lg:items-start lg:gap-12">
          <SectionNav items={itadSectionItems} />

          <div className="min-w-0 flex-1">
            <section id="overview" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="提供価値" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">提供価値（アウトカム）</h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">チェーン・オブ・カストディ：</strong>ラベル管理・封緘・受け渡し記録の整備
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">証明できるデータ破壊/消去：</strong>シリアル単位のログと証明書（CoD等）
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">価値回収：</strong>再利用/再販可否の判定、評価、レポート
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">適正リサイクル：</strong>再利用不可資産の環境配慮型処理
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80 md:col-span-2">
              <strong className="text-[#17100E]">監査対応パッケージ：</strong>インベントリ、証明書、最終報告（例外含む）
            </li>
          </ul>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="services" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="ITADサービス" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">ITADサービス内容</h2>

          <div className="mt-10 space-y-10">
            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">1) 退役作業・回収/物流（Decommissioning &amp; Logistics）</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>現地回収（単一拠点/複数拠点）</li>
                <li>資産ラベル付与・シリアル取得（または台帳との突合）</li>
                <li>セキュア梱包（必要に応じて改ざん防止封緘）</li>
                <li>入退館/搬出ルール対応（立会い、時間制限、写真証跡オプション等）</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">2) データ消去/破壊（オンサイト/オフサイト）</h3>
              <p className="mt-4 text-base/8 text-[#17100E]/80">リスク・社内規程・媒体特性に応じて、最適な方式を選定します。</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>
                  <strong className="text-[#17100E]">ソフトウェア消去 / 暗号化消去（検証レポート付き）</strong><br />
                  <strong className="text-[#17100E]">NIST SP 800-88 Rev.1</strong> の考え方（Clear / Purge / Destroy）に沿って方式を整理します。
                </li>
                <li><strong className="text-[#17100E]">物理破壊（破砕/圧壊 等）：</strong>高リスク媒体、消去不可機器、要件が厳しいケースに</li>
                <li><strong className="text-[#17100E]">立会い/即時リスク除去：</strong>オンサイト破壊・立会い処理（要件に応じて）</li>
              </ul>
              <p className="mt-4 text-base/8 text-[#17100E]/80">
                <strong className="text-[#17100E]">成果物：</strong>データ消去/破壊証明書（CoD）＋媒体シリアル・処理ログ（案件要件に合わせて）
              </p>
            </article>

            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">3) 監査向けインベントリ・再利用/再販（Refurbishment &amp; Remarketing）</h3>
              <p className="mt-4 text-base/8 text-[#17100E]/80">再利用可能な資産（状態・スペック等に依存）について：</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>動作確認・グレーディング</li>
                <li>再利用/再販のルート設計（必要に応じて）</li>
                <li>価値回収レポート（合意した精算モデルに基づく）</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">4) 適正リサイクル（E-waste）</h3>
              <p className="mt-4 text-base/8 text-[#17100E]/80">再利用不可の資産は：</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>材料分別・適正な下流処理</li>
                <li>最終処理/リサイクルの証跡（証明書/処分確認 等、案件要件に合わせて）</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#17100E]">5) レポート・証明書（Reporting &amp; Certificates）</h3>
              <p className="mt-4 text-base/8 text-[#17100E]/80">代表的な成果物：</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
                <li>シリアル付きインベントリ（CSV/PDF）</li>
                <li>受け渡し記録（チェーン・オブ・カストディ）</li>
                <li>証明書（データ消去/破壊、リサイクル、処分 等）</li>
                <li>最終サマリーレポート（数量、結果、例外、推奨対応）</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="why-itad" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="なぜ今ITADが重要か" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
            なぜ今ITADが重要か
          </h2>
          <div className="mt-8 rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
            <p className="text-base leading-relaxed text-[#17100E]/80">
              世界の電子廃棄物（E-waste）は増加傾向にあり、<strong className="text-[#17100E]">2022年は約6,200万トンが発生し、正式に回収・リサイクルとして記録されたのは約22.3%</strong>に留まると報告されています。2030年に向けて増加が見込まれており、企業には<strong className="text-[#17100E]">「適正処分の証跡」と「データ破壊の証明」</strong>が強く求められています。
            </p>
            <p className="mt-4 text-sm text-[#17100E]/60">出典：ITU/UNITAR Global E-waste Monitor 2024（要約）</p>
          </div>
        </div>
      </section>

      <section id="compliance" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24 lg:px-8">
          <SectionLabel label="コンプライアンス" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
            日本向けコンプライアンス観点（実務ベース）
          </h2>
          <div className="mt-8 rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
            <ul className="list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
              <li><strong className="text-[#17100E]">適正処理と証跡：</strong>案件要件に応じた処理フローと文書化</li>
              <li><strong className="text-[#17100E]">産業廃棄物の追跡管理：</strong>マニフェスト相当の考え方を含め、追跡可能な運用に整理</li>
              <li><strong className="text-[#17100E]">下流パートナーの選定/確認：</strong>許認可・処理工程・最終処理の説明可能性</li>
              <li><strong className="text-[#17100E]">情報保護：</strong>露出期間の最小化、シリアル単位のエビデンス</li>
              <li><strong className="text-[#17100E]">例外管理：</strong>ロック/故障/消去不可媒体は例外として明確に記録し、推奨処置を提示</li>
            </ul>
            <p className="mt-4 text-base/8 text-[#17100E]/80">
              お客様指定の書式（例：「処分証明書」の文言要件等）がある場合は、提出物をテンプレートに合わせて統一します。
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="coverage" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="対応地域" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">
            対応地域：日本 / APAC / 米国
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-[#17100E]">日本（東京・全国）</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#17100E]/80">
                <li>東京圏から全国の案件をプロジェクト管理</li>
                <li>オフィス移転、倉庫整理、データセンター更改に対応</li>
                <li>日英バイリンガルコミュニケーション可（必要に応じて）</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-[#17100E]">APAC</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#17100E]/80">
                <li>現地パートナー連携による地域展開</li>
                <li>インベントリ/証明書フォーマットの統一</li>
                <li>HQ向けに集約した監査パックを提供</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[#17100E]/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-[#17100E]">米国</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm/7 text-[#17100E]/80">
                <li>米国内の退役/回収プログラム支援</li>
                <li>監査で求められやすい文書を整理</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F3EC] pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="h-56 rounded-2xl border border-[#17100E]/10 bg-white" aria-hidden="true" />
            <div className="h-56 rounded-2xl border border-[#17100E]/10 bg-white" aria-hidden="true" />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="process" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="標準フロー" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">進め方（標準フロー）</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">1. 要件整理</strong>
              <p className="mt-2">資産リスト、データ要件、現場制約、期限の確認</p>
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">2. 回収設計</strong>
              <p className="mt-2">ラベル/梱包/搬出ルール、受け渡し記録の設計</p>
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">3. 処理</strong>
              <p className="mt-2">消去/破壊、再利用可否判定、再利用不可はリサイクルへ</p>
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">4. 報告</strong>
              <p className="mt-2">台帳突合、例外一覧、証明書、サマリー</p>
            </li>
            <li className="rounded-xl border border-[#17100E]/10 bg-white px-5 py-4 text-sm/7 text-[#17100E]/80">
              <strong className="text-[#17100E]">5. クローズ</strong>
              <p className="mt-2">最終監査パック提出、価値回収の結果報告（該当時）</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="equipment" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24 lg:px-8">
          <SectionLabel label="対応機器" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">対応機器例</h2>
          <div className="mt-8 rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
            <ul className="grid gap-2 text-base/8 text-[#17100E]/80 sm:grid-cols-2 lg:grid-cols-3">
              <li>• ノートPC / デスクトップ / ワークステーション</li>
              <li>• サーバー / ストレージ / NAS / SAN部品</li>
              <li>• HDD / SSD / リムーバブル媒体</li>
              <li>• ネットワーク機器：スイッチ、ルーター、FW、AP 等</li>
              <li>• モニター、周辺機器、ドック、アクセサリ（案件範囲により）</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="assurance" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24 lg:px-8">
          <SectionLabel label="安心のための考え方" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">安心のための考え方（Assurance）</h2>
          <div className="mt-8 rounded-2xl border border-[#17100E]/10 bg-white p-6 sm:p-8">
            <ul className="list-disc space-y-2 pl-6 text-base/8 text-[#17100E]/80">
              <li><strong className="text-[#17100E]">NIST SP 800-88 Rev.1 の考え方に沿った方式整理</strong>（方式選定＋検証）</li>
              <li><strong className="text-[#17100E]">監査前提のチェーン・オブ・カストディ</strong></li>
              <li><strong className="text-[#17100E]">例外の明確化</strong>（消去失敗/ロック/破損 等）と推奨対応</li>
              <li><strong className="text-[#17100E]">ESGに配慮：</strong>安全に可能な範囲で再利用を優先、難しいものは適正リサイクル</li>
            </ul>
            <p className="mt-4 text-sm/7 text-[#17100E]/70">
              注意：標準・ベストプラクティスに沿った運用設計を行います。調達要件で特定の認証が必須の場合は、案件ごとに可否を確認します。
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#17100E]/[0.05] to-transparent" />

      <section id="faq" className="bg-[#F4F3EC]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <SectionLabel label="FAQ" />
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#17100E] sm:text-5xl">よくある質問（FAQ）</h2>

          <dl className="mt-16 divide-y divide-[#17100E]/10">
            {faqItems.map((faq) => (
              <Disclosure
                key={faq.q}
                as="div"
                className="py-6 first:pt-0 last:pb-0 -mx-4 rounded-lg px-4 transition-colors duration-200 hover:bg-white/40"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-[#17100E]">
                    <span className="text-base/7 font-semibold">{faq.q}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 text-[#17100E]/40 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 text-[#17100E]/40 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-[#17100E]/70">{faq.a}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </section>

          </div>
        </div>
      </div>

      <section id="cta" className="bg-[#F4F3EC] pb-20 pt-4 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-[#17100E]/10 bg-white px-6 py-12 text-center sm:px-10 sm:py-14">
            <h2 className="font-serif text-3xl font-normal tracking-tight text-[#17100E] sm:text-4xl">
              まずは資産リストをお送りください
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#17100E]/80">
              資産リスト（またはエクスポート）を共有いただければ、推奨するデータ消去/破壊方式、回収/物流の進め方、成果物（証明書・レポート）の構成、目安のスケジュールと費用内訳をご提案します。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ja/contact?service=itad"
                className="inline-flex items-center justify-center rounded-md bg-[#17100E] px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#2A2523]"
              >
                相談を予約
              </Link>
              <Link
                href="/ja/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#17100E] bg-transparent px-5 py-2.5 text-base font-medium text-[#17100E] transition-colors hover:bg-black/5"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
