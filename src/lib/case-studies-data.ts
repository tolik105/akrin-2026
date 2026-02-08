export type CaseStudy = {
  slug: string
  title: {
    en: string
    ja: string
  }
  category: {
    en: string
    ja: string
  }
  excerpt: {
    en: string
    ja: string
  }
  challenge: {
    en: string
    ja: string
  }
  solution: {
    en: string
    ja: string
  }
  outcomes: {
    en: string[]
    ja: string[]
  }
  metrics: {
    label: {
      en: string
      ja: string
    }
    value: string
  }[]
}

const baseMetrics = [
  {
    label: { en: 'SLA attainment', ja: 'SLA達成率' },
    value: '98%+',
  },
  {
    label: { en: 'Incident reduction', ja: '障害削減' },
    value: '30%+',
  },
  {
    label: { en: 'Delivery period', ja: '提供期間' },
    value: '8-12 weeks',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'managed-it-services-cpg-tokyo',
    title: {
      en: 'Consumer Goods Managed IT (Tokyo)',
      ja: '消費財メーカー向けマネージドIT（東京）',
    },
    category: {
      en: 'Managed IT Services',
      ja: 'マネージドITサービス',
    },
    excerpt: {
      en: 'ITIL-aligned service-desk operations and endpoint standardization improved response and reduced repeat incidents.',
      ja: 'ITIL準拠のサービスデスク運用と端末標準化により、対応品質と再発率を改善しました。',
    },
    challenge: {
      en: 'Support operations were fragmented across vendors with inconsistent processes and low reporting visibility.',
      ja: 'サポート運用が複数ベンダーに分散し、プロセスと可視性が不十分でした。',
    },
    solution: {
      en: 'AKRIN unified ticketing, standardization, and escalation governance to stabilize managed operations.',
      ja: 'AKRINはチケット運用、端末標準化、エスカレーション統制を統合し、運用品質を安定化しました。',
    },
    outcomes: {
      en: [
        'Faster first response for critical users',
        'Lower repeat incidents through knowledge operations',
        'Consistent SLA reporting for business stakeholders',
      ],
      ja: [
        '重要ユーザーの一次対応時間を短縮',
        'ナレッジ運用で再発障害を低減',
        '事業部門向けSLA報告を標準化',
      ],
    },
    metrics: baseMetrics,
  },
  {
    slug: 'cloud-migration-manufacturing',
    title: {
      en: 'Cloud Migration for Manufacturing',
      ja: '製造業向けクラウド移行',
    },
    category: {
      en: 'Cloud Infrastructure',
      ja: 'クラウドインフラ',
    },
    excerpt: {
      en: 'A phased migration approach modernized workloads while maintaining continuity and governance.',
      ja: '段階移行アプローチで業務継続性を維持しながらクラウド化を推進しました。',
    },
    challenge: {
      en: 'Legacy systems and dependencies made cutover risk high and timelines uncertain.',
      ja: 'レガシー依存が強く、切替リスクとスケジュール不確実性が高い状態でした。',
    },
    solution: {
      en: 'AKRIN delivered assessment, pilot migration, and phased cutover with rollback-ready controls.',
      ja: 'AKRINはアセスメント、パイロット移行、段階切替をロールバック設計付きで実施しました。',
    },
    outcomes: {
      en: [
        'Reduced migration risk through staged cutover',
        'Improved operational transparency in cloud environments',
        'Enhanced compliance posture for managed workloads',
      ],
      ja: [
        '段階切替で移行リスクを抑制',
        'クラウド運用の可視性を向上',
        '管理対象ワークロードの準拠性を強化',
      ],
    },
    metrics: baseMetrics,
  },
  {
    slug: 'datacenter-relocation-colo-to-colo',
    title: {
      en: 'Datacenter Relocation (Colo to Colo)',
      ja: 'データセンター移設（コロケーション間）',
    },
    category: {
      en: 'Infrastructure Program',
      ja: 'インフラプログラム',
    },
    excerpt: {
      en: 'Planned relocation with controlled migration windows reduced service disruption during move.',
      ja: '計画的な移設と移行ウィンドウ管理により、サービス影響を抑えて移設を完了しました。',
    },
    challenge: {
      en: 'Physical relocation involved high operational risk and strict uptime constraints.',
      ja: '物理移設は運用リスクが高く、厳しい可用性要件がありました。',
    },
    solution: {
      en: 'AKRIN executed phased relocation, dependency mapping, and validation runbooks across all systems.',
      ja: 'AKRINは段階移設、依存関係整理、検証ランブック整備を通じて全体移行を遂行しました。',
    },
    outcomes: {
      en: [
        'Controlled move schedule with predictable impact',
        'Improved readiness through rehearsal and runbooks',
        'Stable service continuity during and after migration',
      ],
      ja: [
        '影響を予測可能な移設計画を実現',
        '事前リハーサルと手順書で準備度を向上',
        '移設期間中・移設後ともに安定運用を維持',
      ],
    },
    metrics: baseMetrics,
  },
  {
    slug: 'itad-tokyo-kobe-consolidation',
    title: {
      en: 'ITAD Consolidation (Tokyo to Kobe)',
      ja: 'ITAD統合（東京・神戸）',
    },
    category: {
      en: 'ITAD Services',
      ja: 'ITADサービス',
    },
    excerpt: {
      en: 'Secure disposition and traceability controls improved governance across regional consolidation.',
      ja: '安全な廃棄とトレーサビリティ管理で、地域統合時のガバナンスを強化しました。',
    },
    challenge: {
      en: 'Large-scale retirements required strict data destruction and auditable evidence management.',
      ja: '大規模な廃棄に対して、厳格なデータ消去と監査証跡管理が必要でした。',
    },
    solution: {
      en: 'AKRIN executed validated destruction workflows and compliance documentation for all assets.',
      ja: 'AKRINは検証可能な消去フローとコンプライアンス文書化を全資産に適用しました。',
    },
    outcomes: {
      en: [
        'Verified disposal process with documented evidence',
        'Reduced risk at end-of-life operations',
        'Improved transparency for compliance reviews',
      ],
      ja: [
        '証跡付きの廃棄プロセスを確立',
        'EOL運用時のリスクを低減',
        'コンプライアンス監査での透明性を向上',
      ],
    },
    metrics: baseMetrics,
  },
  {
    slug: 'nationwide-wifi-30-offices',
    title: {
      en: 'Nationwide Wi-Fi Program (30 Offices)',
      ja: '全国30拠点Wi-Fi展開',
    },
    category: {
      en: 'Wi-Fi Design',
      ja: 'Wi-Fi設計',
    },
    excerpt: {
      en: 'Standardized wireless design and rollout improved consistency across distributed locations.',
      ja: '標準化した無線設計と展開で、複数拠点の品質を均一化しました。',
    },
    challenge: {
      en: 'Inconsistent AP designs and site constraints led to uneven user experience across offices.',
      ja: '拠点ごとの設計ばらつきと現場制約により、利用体験に差が生じていました。',
    },
    solution: {
      en: 'AKRIN applied design standards, phased deployments, and acceptance criteria per site.',
      ja: 'AKRINは設計標準、段階導入、拠点ごとの受け入れ基準を適用しました。',
    },
    outcomes: {
      en: [
        'Consistent coverage and quality across offices',
        'Faster rollout with repeatable implementation templates',
        'Lower post-deployment issue rates',
      ],
      ja: [
        '拠点間で均一なカバレッジ品質を実現',
        'テンプレート活用で導入を高速化',
        '導入後の障害発生率を低減',
      ],
    },
    metrics: baseMetrics,
  },
  {
    slug: 'pentest-fintech-tokyo',
    title: {
      en: 'Fintech Network Penetration Test (Tokyo)',
      ja: 'Fintech向けネットワーク侵入テスト（東京）',
    },
    category: {
      en: 'Network Penetration Testing',
      ja: 'ネットワーク侵入テスト',
    },
    excerpt: {
      en: 'Targeted offensive testing identified critical gaps and accelerated security remediation.',
      ja: '攻撃観点の評価により重要課題を特定し、セキュリティ改善を加速しました。',
    },
    challenge: {
      en: 'Security controls were fragmented and lacked independent validation against realistic attack paths.',
      ja: '防御統制が分散し、現実的な攻撃経路に対する第三者検証が不足していました。',
    },
    solution: {
      en: 'AKRIN conducted scoped penetration testing with prioritized findings and remediation guidance.',
      ja: 'AKRINは範囲定義された侵入テストを実施し、優先度付きの是正提案を提供しました。',
    },
    outcomes: {
      en: [
        'Critical vulnerabilities identified and contained',
        'Clear remediation roadmap by risk priority',
        'Improved confidence in control effectiveness',
      ],
      ja: [
        '重大脆弱性を特定し早期に封じ込め',
        'リスク優先で是正ロードマップを提示',
        '統制有効性に対する信頼性を向上',
      ],
    },
    metrics: baseMetrics,
  },
  {
    slug: 'rack-buildout-9racks-campus',
    title: {
      en: 'Campus Rack Buildout (9 Racks)',
      ja: 'キャンパス向けラック構築（9ラック）',
    },
    category: {
      en: 'Infrastructure Delivery',
      ja: 'インフラ導入',
    },
    excerpt: {
      en: 'Structured rack design and deployment reduced installation rework and improved readiness.',
      ja: '構造化されたラック設計と導入で、手戻りを抑え稼働準備を向上しました。',
    },
    challenge: {
      en: 'Capacity growth required fast buildout with strict quality and cable governance controls.',
      ja: '容量拡大に対し、品質と配線統制を維持した迅速な構築が求められました。',
    },
    solution: {
      en: 'AKRIN delivered standards-based rack architecture, labeling, and validation checklists.',
      ja: 'AKRINは標準化されたラック設計、ラベリング、検証チェックを提供しました。',
    },
    outcomes: {
      en: [
        'Faster readiness for production handover',
        'Reduced deployment rework and troubleshooting time',
        'Improved physical infrastructure governance',
      ],
      ja: [
        '本番引き渡しまでの準備期間を短縮',
        '手戻りと初期トラブル対応を削減',
        '物理インフラ運用の統制を強化',
      ],
    },
    metrics: baseMetrics,
  },
  {
    slug: 'sdwan-insurance-30-sites-japan',
    title: {
      en: 'SD-WAN Rollout (Insurance, 30 Sites)',
      ja: 'SD-WAN展開（保険業、30拠点）',
    },
    category: {
      en: 'Network Transformation',
      ja: 'ネットワーク変革',
    },
    excerpt: {
      en: 'A multi-site SD-WAN rollout improved branch resilience and centralized network control.',
      ja: '複数拠点へのSD-WAN導入で、拠点耐障害性と集中管理を強化しました。',
    },
    challenge: {
      en: 'Branch connectivity depended on complex legacy circuits with inconsistent operational visibility.',
      ja: '拠点接続が複雑な既存回線に依存し、運用可視性が不十分でした。',
    },
    solution: {
      en: 'AKRIN designed and implemented phased SD-WAN migration with policy governance and monitoring.',
      ja: 'AKRINは段階的なSD-WAN移行を設計・実装し、ポリシー統制と監視を整備しました。',
    },
    outcomes: {
      en: [
        'Improved branch performance consistency',
        'Centralized policy control and observability',
        'Lower operational complexity for network teams',
      ],
      ja: [
        '拠点間の通信品質を均一化',
        'ポリシー管理と可観測性を集中化',
        'ネットワーク運用の複雑性を低減',
      ],
    },
    metrics: baseMetrics,
  },
  {
    slug: 'wifi-assessment-retail-tokyo',
    title: {
      en: 'Wi-Fi Assessment for Tokyo Retail',
      ja: '東京小売向けWi-Fiアセスメント',
    },
    category: {
      en: 'Wi-Fi Assessment',
      ja: 'Wi-Fiアセスメント',
    },
    excerpt: {
      en: 'Coverage and interference analysis resolved dead zones and improved customer-facing connectivity.',
      ja: 'カバレッジと干渉分析により、デッドゾーンを解消し接続品質を改善しました。',
    },
    challenge: {
      en: 'High user density and interference caused frequent connectivity issues at peak retail hours.',
      ja: '高密度利用と干渉の影響で、繁忙時間帯の接続不良が発生していました。',
    },
    solution: {
      en: 'AKRIN conducted structured surveys and delivered optimized AP placement recommendations.',
      ja: 'AKRINは構造化サーベイを実施し、最適なAP配置と改善提案を提供しました。',
    },
    outcomes: {
      en: [
        'Improved wireless stability during peak usage',
        'Lower complaint and ticket volume from stores',
        'Clear optimization roadmap for future expansion',
      ],
      ja: [
        '繁忙時間帯の無線安定性を改善',
        '店舗からの問い合わせと障害票を削減',
        '将来拡張に向けた最適化ロードマップを明確化',
      ],
    },
    metrics: baseMetrics,
  },
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
