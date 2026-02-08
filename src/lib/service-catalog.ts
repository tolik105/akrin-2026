export type ServiceItem = {
  slug: string
  title: {
    en: string
    ja: string
  }
  intro: {
    en: string
    ja: string
  }
  keyServices: {
    en: string[]
    ja: string[]
  }
}

export const serviceCatalog: ServiceItem[] = [
  {
    slug: 'cloud-infrastructure',
    title: {
      en: 'Cloud Infrastructure',
      ja: 'クラウドインフラストラクチャ',
    },
    intro: {
      en: 'Cloud architecture, migration, and operations services for secure, resilient, and cost-efficient platforms.',
      ja: '安全性・可用性・コスト効率を両立するクラウド設計、移行、運用サービスを提供します。',
    },
    keyServices: {
      en: [
        'Cloud Migration',
        'Cloud Management',
        'Multi-cloud Strategy',
        'Cost Optimization',
      ],
      ja: [
        'クラウド移行',
        'クラウド運用管理',
        'マルチクラウド戦略',
        'コスト最適化',
      ],
    },
  },
  {
    slug: 'cybersecurity',
    title: {
      en: 'Cybersecurity',
      ja: 'サイバーセキュリティ',
    },
    intro: {
      en: 'End-to-end security programs to protect infrastructure, endpoints, and business-critical data.',
      ja: 'インフラ、エンドポイント、重要データを守るための包括的なセキュリティ対策を提供します。',
    },
    keyServices: {
      en: [
        'Security Assessment',
        'Threat Detection & Response',
        'Security Operations',
        'Compliance Management',
      ],
      ja: [
        'セキュリティ診断',
        '脅威検知と対応',
        'セキュリティ運用',
        'コンプライアンス管理',
      ],
    },
  },
  {
    slug: 'it-consulting-project-management',
    title: {
      en: 'IT Consulting & Project Management',
      ja: 'ITコンサルティング・プロジェクト管理',
    },
    intro: {
      en: 'Strategic advisory and delivery management for complex IT transformation initiatives.',
      ja: '複雑なIT変革を成功に導くための戦略支援とプロジェクト推進を提供します。',
    },
    keyServices: {
      en: [
        'IT Strategy',
        'Project Management',
        'Digital Transformation',
        'Technology Roadmap',
      ],
      ja: [
        'IT戦略策定',
        'プロジェクト管理',
        'デジタルトランスフォーメーション',
        'テクノロジーロードマップ',
      ],
    },
  },
  {
    slug: 'it-managed-services',
    title: {
      en: 'IT Managed Services',
      ja: 'マネージドITサービス',
    },
    intro: {
      en: '24/7 operational support and proactive IT management to keep your teams productive and systems stable.',
      ja: '24時間365日の運用支援とプロアクティブな管理により、安定したIT環境を維持します。',
    },
    keyServices: {
      en: [
        'Help Desk Support',
        'Infrastructure Management',
        'Cloud Operations',
        'Security & Compliance',
        'Strategic IT Planning & Governance',
      ],
      ja: [
        'ヘルプデスクサポート',
        'インフラ管理',
        'クラウド運用',
        'セキュリティとコンプライアンス',
        'IT戦略計画とガバナンス',
      ],
    },
  },
  {
    slug: 'it-security',
    title: {
      en: 'IT Security',
      ja: 'ITセキュリティ',
    },
    intro: {
      en: 'Practical security controls and risk reduction programs for modern hybrid IT environments.',
      ja: 'ハイブリッドIT環境に対応した実践的な防御策とリスク低減施策を提供します。',
    },
    keyServices: {
      en: [
        'Endpoint Security',
        'Network Security',
        'Policy Enforcement',
        'Security Monitoring',
      ],
      ja: [
        'エンドポイントセキュリティ',
        'ネットワークセキュリティ',
        'ポリシー運用',
        'セキュリティ監視',
      ],
    },
  },
  {
    slug: 'itad-japan-apac-us',
    title: {
      en: 'ITAD Services',
      ja: 'ITADサービス',
    },
    intro: {
      en: 'Secure end-of-life asset disposition with verified data destruction and compliance documentation.',
      ja: '安全なデータ消去と証跡管理により、IT資産の適正処分を実現します。',
    },
    keyServices: {
      en: [
        'Asset Recovery',
        'Data Destruction',
        'Recycling',
        'Compliance Documentation',
      ],
      ja: [
        '資産回収',
        'データ消去',
        'リサイクル',
        'コンプライアンス文書化',
      ],
    },
  },
  {
    slug: 'network-penetration-testing',
    title: {
      en: 'Network Penetration Testing',
      ja: 'ネットワークペネトレーションテスト',
    },
    intro: {
      en: 'Identify exploitable weaknesses before attackers do, with controlled offensive testing.',
      ja: '攻撃者に先んじて脆弱性を可視化するための統制された侵入テストを提供します。',
    },
    keyServices: {
      en: [
        'Vulnerability Assessment',
        'Penetration Testing',
        'Security Audit',
        'Compliance Testing',
      ],
      ja: [
        '脆弱性評価',
        '侵入テスト',
        'セキュリティ監査',
        'コンプライアンス検証',
      ],
    },
  },
  {
    slug: 'wifi-assessment',
    title: {
      en: 'WiFi Assessment',
      ja: 'WiFiアセスメント',
    },
    intro: {
      en: 'Measure wireless quality and reliability with structured surveys and optimization recommendations.',
      ja: '調査と分析に基づき、無線品質と安定性の改善ポイントを明確化します。',
    },
    keyServices: {
      en: [
        'Site Survey',
        'Coverage Analysis',
        'Performance Testing',
        'Recommendations',
      ],
      ja: [
        'サイトサーベイ',
        'カバレッジ分析',
        '性能試験',
        '改善提案',
      ],
    },
  },
  {
    slug: 'wifi-design',
    title: {
      en: 'WiFi Design',
      ja: 'WiFi設計',
    },
    intro: {
      en: 'Design enterprise-grade wireless networks for scale, performance, and operational continuity.',
      ja: '拡張性・性能・運用継続性を備えたエンタープライズ無線ネットワークを設計します。',
    },
    keyServices: {
      en: [
        'Network Design',
        'Capacity Planning',
        'Implementation',
        'Optimization',
      ],
      ja: [
        'ネットワーク設計',
        '容量計画',
        '導入',
        '最適化',
      ],
    },
  },
]

export const extraServices: ServiceItem[] = [
  {
    slug: 'it-asset-management',
    title: {
      en: 'IT Asset Management & Lifecycle Tracking',
      ja: 'IT資産管理・ライフサイクルトラッキング',
    },
    intro: {
      en: 'Track and optimize IT assets from procurement to retirement with complete lifecycle visibility.',
      ja: '調達から廃棄まで、IT資産のライフサイクル全体を可視化・最適化します。',
    },
    keyServices: {
      en: [
        'Inventory Visibility',
        'Lifecycle Planning',
        'Compliance Support',
        'ITAD Integration',
      ],
      ja: ['資産可視化', 'ライフサイクル計画', 'コンプライアンス対応', 'ITAD連携'],
    },
  },
]

export const allServices = [...serviceCatalog, ...extraServices]

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug)
}
