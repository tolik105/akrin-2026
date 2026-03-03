export type ServiceItem = {
  slug: string
  title: {
    en: string
    ja: string
  }
  meta?: {
    en: {
      title: string
      description: string
    }
    ja: {
      title: string
      description: string
    }
  }
  intro: {
    en: string
    ja: string
  }
  keyServices: {
    en: string[]
    ja: string[]
  }
  details?: {
    en: {
      heroTitle?: string
      heroLead?: string
      whatItIsTitle?: string
      whatItIs?: string[]
      whatYouGetTitle?: string
      whatYouGet?: Array<{
        title: string
        description: string
      }>
      whyTitle?: string
      whyBody?: string
      whoTitle?: string
      whoItems?: string[]
      ctaTitle?: string
      ctaBody?: string
      ctaPrimaryLabel?: string
      ctaPrimaryHref?: string
      ctaSecondaryLabel?: string
      ctaSecondaryHref?: string
    }
    ja: {
      heroTitle?: string
      heroLead?: string
      whatItIsTitle?: string
      whatItIs?: string[]
      whatYouGetTitle?: string
      whatYouGet?: Array<{
        title: string
        description: string
      }>
      whyTitle?: string
      whyBody?: string
      whoTitle?: string
      whoItems?: string[]
      ctaTitle?: string
      ctaBody?: string
      ctaPrimaryLabel?: string
      ctaPrimaryHref?: string
      ctaSecondaryLabel?: string
      ctaSecondaryHref?: string
    }
  }
}

const cloudInfrastructureDetails = {
  en: {
    heroTitle: 'Cloud Infrastructure Tokyo: Migration & Managed Services',
    heroLead:
      'Stop wrestling with cloud complexity. AKRIN designs, migrates, and manages cloud infrastructure that just works-so your team can focus on building, not babysitting servers.',
    whatItIsTitle: 'What It Is',
    whatItIs: [
      'Cloud infrastructure is the foundation of modern IT: servers, storage, networking, and services running on platforms like AWS, Microsoft Azure, and Google Cloud Platform. But getting it right in Japan means more than just spinning up instances. It means navigating data residency requirements, integrating with Japanese vendors, and ensuring your global headquarters and local Tokyo operations stay perfectly synced.',
      'AKRIN delivers end-to-end cloud infrastructure services-from initial architecture design through migration to ongoing 24/7 management. We handle the technical complexity while you focus on your business.',
    ],
    whatYouGetTitle: 'What You Get',
    whatYouGet: [
      {
        title: 'Zero-Downtime Cloud Migration',
        description:
          'Move from on-premises or between clouds without disrupting operations. Our proven methodology ensures business continuity throughout the transition.',
      },
      {
        title: 'Multi-Cloud Architecture Design',
        description:
          'AWS, Azure, or GCP-we design optimal architectures using the right platform for each workload. No vendor lock-in, just smart decisions.',
      },
      {
        title: '24/7 Bilingual Cloud Operations',
        description:
          'English-speaking engineers available around the clock. No more lost-in-translation incidents during critical outages.',
      },
      {
        title: 'Cost Optimization & FinOps',
        description:
          'Continuous monitoring and right-sizing to control cloud spend. Typical clients see 20-30% cost reduction within six months.',
      },
      {
        title: 'Japan Compliance Integration',
        description:
          "Built-in support for APPI (Act on Protection of Personal Information), data localization requirements, and industry-specific regulations.",
      },
      {
        title: 'Disaster Recovery & Business Continuity',
        description:
          'Automated backups, geo-redundancy, and tested recovery procedures. Sleep soundly knowing your data is protected.',
      },
    ],
    whyTitle: 'Why AKRIN',
    whyBody:
      "We're not another systems integrator that treats cloud as just virtualization with a different logo. AKRIN was built for international companies operating in Japan-so we understand the unique challenge of maintaining global standards while meeting local requirements. Our engineers are certified across all major platforms and speak both English and Japanese fluently. When you call at 2 AM with a production issue, you'll get a native English speaker who understands your environment, not a ticket queue.",
    whoTitle: "Who It's For",
    whoItems: [
      'International companies establishing or expanding Tokyo operations',
      'Organizations struggling with cloud cost overruns',
      'Businesses needing to meet Japanese data residency requirements',
      'Companies with limited in-house cloud expertise',
      'Organizations requiring 24/7 coverage across time zones',
    ],
    ctaTitle: 'Ready for Cloud Infrastructure That Just Works?',
    ctaBody:
      'Stop letting cloud complexity slow you down. Contact AKRIN today for a free cloud readiness assessment and migration roadmap.',
    ctaPrimaryLabel: 'Contact Us',
    ctaPrimaryHref: '/contact?service=cloud-infrastructure',
    ctaSecondaryLabel: 'Schedule a Consultation',
    ctaSecondaryHref: '/contact?service=cloud-infrastructure',
  },
  ja: {
    heroTitle: 'クラウドインフラ 東京：移行・運用支援',
    heroLead:
      'クラウドの複雑さに悩まされる必要はありません。AKRINは、設計から移行、運用管理まで、確実に機能するクラウドインフラを提供します-あなたのチームはサーバーの管理ではなく、本業に集中できます。',
    whatItIsTitle: 'サービス概要',
    whatItIs: [
      'クラウドインフラは、現代ITの基盤です。AWS、Microsoft Azure、Google Cloud Platformなどで動作するサーバー、ストレージ、ネットワーク、サービスを指します。しかし、日本で成功させるには、インスタンスを起動するだけでは不十分です。データローカリゼーション要件への対応、日本のベンダーとの統合、グローバル本社と東京の現地運用の完璧な同期が必要です。',
      'AKRINは、初期アーキテクチャ設計から移行、継続的な24時間運用管理まで、エンドツーエンドのクラウドインフラサービスを提供します。技術的な複雑さは私たちが処理し、あなたはビジネスに集中できます。',
    ],
    whatYouGetTitle: '提供サービス',
    whatYouGet: [
      {
        title: 'ゼロダウンタイムクラウド移行',
        description:
          'オンプレミスからの移行、またはクラウド間の移行も、業務を中断することなく実現。実績ある手法で、移行中のビジネス継続性を確保します。',
      },
      {
        title: 'マルチクラウドアーキテクチャ設計',
        description:
          'AWS、Azure、GCP-各ワークロードに最適なプラットフォームを使用した最適なアーキテクチャを設計。ベンダーロックインなし、賢明な選択のみ。',
      },
      {
        title: '24時間バイリンガルクラウド運用',
        description:
          '英語対応エンジニアが24時間体制でサポート。重要な障害時に「翻訳が通じない」事態はもうありません。',
      },
      {
        title: 'コスト最適化とFinOps',
        description:
          '継続的な監視と適正サイジングでクラウドコストを管理。一般的なクライアントは6か月以内に20〜30%のコスト削減を実現しています。',
      },
      {
        title: '日本のコンプライアンス統合',
        description:
          'APPI（個人情報保護法）、データローカリゼーション要件、業界特有の規制への対応を内包。',
      },
      {
        title: '災害対策と事業継続性',
        description:
          '自動バックアップ、地理冗長性、テスト済みの復旧手順。データが保護されていることを確信して、安心して休めます。',
      },
    ],
    whyTitle: 'なぜAKRINか',
    whyBody:
      '私たちは、クラウドを「ロゴが違う仮想化」として扱うシステムインテグレーターではありません。AKRINは、日本で事業を展開する国際企業のために設立されました-グローバル基準を維持しながら現地要件を満たすという独特の課題を理解しています。当社のエンジニアは、主要プラットフォームすべてで認定を取得し、英語と日本語を流暢に話します。深夜2時に本番環境の問題で電話しても、チケットキューではなく、あなたの環境を理解した英語ネイティブの対応が得られます。',
    whoTitle: 'こんな企業に最適',
    whoItems: [
      '東京での事業立ち上げまたは拡大を検討している国際企業',
      'クラウドコストの超過に悩む組織',
      '日本のデータローカリゼーション要件への対応が必要な企業',
      '社内のクラウド専門知識が限られている企業',
      'タイムゾーンをまたがる24時間カバレッジが必要な組織',
    ],
    ctaTitle: '確実に機能するクラウドインフラを準備できましたか？',
    ctaBody:
      'クラウドの複雑さに業務を遅らせるのはやめましょう。今すぐAKRINに連絡して、無料のクラウド準備状況評価と移行ロードマップをご入手ください。',
    ctaPrimaryLabel: 'お問い合わせ',
    ctaPrimaryHref: '/ja/contact?service=cloud-infrastructure',
    ctaSecondaryLabel: '相談予約',
    ctaSecondaryHref: '/ja/contact?service=cloud-infrastructure',
  },
}

const itConsultingDetails = {
  en: {
    heroTitle: 'IT Consulting & Project Management Tokyo',
    heroLead:
      "Your IT initiatives shouldn't get lost in translation. AKRIN delivers bilingual consulting and project management that bridges the gap between global strategy and Japanese execution.",
    whatItIsTitle: 'What It Is',
    whatItIs: [
      'IT consulting and project management is the discipline of planning, executing, and delivering technology initiatives on time and on budget. In Japan, this requires more than technical expertise-it demands fluency in both languages and business cultures. International companies frequently struggle with projects that stall due to communication gaps, misunderstood requirements, or vendor coordination failures.',
      'AKRIN provides end-to-end project leadership: from strategic planning and vendor selection through implementation and handover. We speak English and Japanese, understand both global enterprise standards and local business practices, and keep your projects moving forward.',
    ],
    whatYouGetTitle: 'What You Get',
    whatYouGet: [
      {
        title: 'Strategic IT Planning',
        description:
          'Technology roadmaps aligned with business objectives. We help you prioritize investments, plan for scale, and avoid costly missteps.',
      },
      {
        title: 'Bilingual Project Management',
        description:
          'Dedicated PMs who speak both English and Japanese fluently. No more requirements lost in translation or status meetings that leave half the room confused.',
      },
      {
        title: 'Vendor Selection & Negotiation',
        description:
          'Expert guidance choosing and contracting with Japanese IT vendors. We know the market, the players, and how to get fair terms.',
      },
      {
        title: 'Complex Implementation Leadership',
        description:
          'From cloud migrations to ERP deployments to office relocations, we manage the details so your team stays focused on business.',
      },
      {
        title: 'Risk Management & Issue Resolution',
        description:
          'Proactive identification of risks before they become blockers. When issues arise, we escalate effectively and drive resolution.',
      },
      {
        title: 'Status Reporting & Stakeholder Communication',
        description:
          'Clear, regular reporting in the language your stakeholders prefer. Keep global HQ informed and local teams aligned.',
      },
    ],
    whyTitle: 'Why AKRIN',
    whyBody:
      "Most consulting firms in Japan are either Japanese-only SIers that don't understand global standards, or international firms that don't understand Japan. AKRIN was built specifically for companies like yours-international businesses operating in Tokyo that need both world-class methodology and local market expertise. Our project managers are certified (PMP, PRINCE2, Agile) and experienced across industries including finance, technology, manufacturing, and professional services.",
    whoTitle: "Who It's For",
    whoItems: [
      'International companies launching or expanding Japan operations',
      'Organizations struggling with "lost in translation" project failures',
      'Businesses without dedicated in-house IT project management',
      'Companies facing complex multi-vendor implementations',
      'Organizations needing interim IT leadership during transitions',
    ],
    ctaTitle: "Let's Deliver Your Next IT Project Successfully",
    ctaBody:
      "Don't let another initiative stall due to communication gaps or coordination failures. Contact AKRIN for a free project assessment and proposal.",
    ctaPrimaryLabel: 'Contact Us',
    ctaPrimaryHref: '/contact?service=it-consulting-project-management',
    ctaSecondaryLabel: 'Discuss Your Project',
    ctaSecondaryHref: '/contact?service=it-consulting-project-management',
  },
  ja: {
    heroTitle: 'ITコンサルティング・プロジェクト管理 東京',
    heroLead:
      'IT initiativesが「翻訳の迷子」になるべきではありません。AKRINは、グローバル戦略と日本の実行のギャップを埋める、バイリンガルコンサルティングとプロジェクト管理を提供します。',
    whatItIsTitle: 'サービス概要',
    whatItIs: [
      'ITコンサルティングとプロジェクト管理は、技術イニシアチブを予算内・期限内に計画、実行、デリバリーする技術です。日本では、技術的専門知識だけでなく、両方の言語とビジネス文化への習熟が求められます。国際企業は、コミュニケーションギャップ、誤解された要件、またはベンダー調整の失敗により停滞するプロジェクトに頻繁に苦労しています。',
      'AKRINは、戦略計画とベンダー選定から実装、引き渡しまで、エンドツーエンドのプロジェクトリーダーシップを提供します。英語と日本語を話し、グローバル企業基準と現地のビジネス慣行の両方を理解し、プロジェクトを前進させ続けます。',
    ],
    whatYouGetTitle: '提供サービス',
    whatYouGet: [
      {
        title: '戦略的IT計画',
        description:
          'ビジネス目標に合致したテクノロジーロードマップ。投資の優先順位付け、スケール計画、高価な失敗の回避を支援します。',
      },
      {
        title: 'バイリンガルプロジェクト管理',
        description:
          '英語と日本語を流暢に話す専任PM。翻訳で失われる要件や、部屋の半分を混乱させるステータス会議はもうありません。',
      },
      {
        title: 'ベンダー選定・交渉',
        description:
          '日本のITベンダーの選択と契約に関する専門的ガイダンス。市場、プレイヤー、公正な条件の獲得方法を熟知しています。',
      },
      {
        title: '複雑な実装リーダーシップ',
        description:
          'クラウド移行からERP導入、オフィス移転まで、詳細を管理し、チームがビジネスに集中できるようにします。',
      },
      {
        title: 'リスク管理・問題解決',
        description:
          'ブロッカーになる前にリスクを事前に特定。問題が発生した場合、効果的にエスカレートし、解決を推進します。',
      },
      {
        title: 'ステータス報告・ステークホルダーコミュニケーション',
        description:
          'ステークホルダーが好む言語での明確で定期的な報告。グローバル本社を情報提供し、現地チームを連携させます。',
      },
    ],
    whyTitle: 'なぜAKRINか',
    whyBody:
      '日本のほとんどのコンサルティング会社は、グローバル基準を理解しない日本語のみのSIerか、日本を理解しない国際企業のいずれかです。AKRINは、まさにあなたのような企業のために設立されました-世界クラスの方法論と現地市場の専門知識の両方が必要な、東京で事業を展開する国際企業です。当社のプロジェクトマネージャーは、金融、テクノロジー、製造、プロフェッショナルサービスなど、業界をまたがって認定（PMP、PRINCE2、アジャイル）と経験を持っています。',
    whoTitle: 'こんな企業に最適',
    whoItems: [
      '日本での事業立ち上げまたは拡大を検討している国際企業',
      '「翻訳の迷子」によるプロジェクト失敗に悩む組織',
      '専任の社内ITプロジェクト管理がない企業',
      '複雑なマルチベンダー実装に直面している企業',
      '移行期間中の暫定ITリーダーシップが必要な組織',
    ],
    ctaTitle: '次のITプロジェクトを成功させましょう',
    ctaBody:
      'コミュニケーションギャップや調整失敗により、さらにイニシアチブが停滞させないでください。無料のプロジェクト評価と提案のためにAKRINにご連絡ください。',
    ctaPrimaryLabel: 'お問い合わせ',
    ctaPrimaryHref: '/ja/contact?service=it-consulting-project-management',
    ctaSecondaryLabel: 'プロジェクトを相談する',
    ctaSecondaryHref: '/ja/contact?service=it-consulting-project-management',
  },
}

const itSecurityDetails = {
  en: {
    heroTitle: 'IT Security Tokyo: Practical Risk Reduction',
    heroLead:
      "Security shouldn't be about fear-it should be about smart business decisions. AKRIN delivers practical IT security programs that reduce real risk without draining your budget or paralyzing your operations.",
    whatItIsTitle: 'What It Is',
    whatItIs: [
      'IT security is the practice of protecting your systems, data, and operations from digital threats. But too often, security becomes a checkbox exercise or a source of fear-mongering that produces bloated budgets and frustrated users. The reality? Effective security is about understanding your actual risks, implementing appropriate controls, and maintaining continuous vigilance.',
      'AKRIN provides practical security services tailored to your business size, industry, and risk profile. We focus on what actually protects you-not what looks impressive in a vendor demo. From risk assessments and compliance programs to ongoing security management, we help you build security that works.',
    ],
    whatYouGetTitle: 'What You Get',
    whatYouGet: [
      {
        title: 'Security Risk Assessment',
        description:
          'Clear-eyed evaluation of your actual vulnerabilities and threat exposure. No scare tactics-just prioritized risks ranked by business impact.',
      },
      {
        title: 'Compliance Program Development',
        description:
          "Structured programs to meet APPI (Japan's data protection law), industry regulations, and international standards. Auditors love our documentation.",
      },
      {
        title: 'Security Policy & Procedure Creation',
        description:
          'Practical, enforceable security policies your team can actually follow. We write in plain language, not legalese.',
      },
      {
        title: 'Security Awareness Training',
        description:
          'Employee training that actually changes behavior. Phishing simulations, best practices, and clear guidance-no death by PowerPoint.',
      },
      {
        title: 'Security Control Implementation',
        description:
          'Firewalls, endpoint protection, email security, access controls-we select and deploy the right tools for your environment.',
      },
      {
        title: 'Ongoing Security Management',
        description:
          "Continuous monitoring, threat intelligence, and incident response. Security isn't a project; it's a practice.",
      },
    ],
    whyTitle: 'Why AKRIN',
    whyBody:
      "We're not a \"security boutique\" that sells fear and complexity. AKRIN takes a pragmatic approach: identify real risks, implement proportional controls, and maintain continuous improvement. Our clients include international companies that need to satisfy both global security standards and Japanese regulatory requirements. We speak the language of business (and Japanese, and English) so security becomes an enabler, not a blocker.",
    whoTitle: "Who It's For",
    whoItems: [
      'Businesses that need security without enterprise-level budgets',
      'Organizations facing APPI or industry compliance requirements',
      'Companies that have experienced security incidents and need systematic improvement',
      'International businesses needing to align global and Japan security practices',
      'Organizations without dedicated in-house security expertise',
    ],
    ctaTitle: "Let's Reduce Your Real Security Risks",
    ctaBody:
      'Stop guessing about security. Contact AKRIN for a free initial risk assessment and practical recommendations.',
    ctaPrimaryLabel: 'Contact Us',
    ctaPrimaryHref: '/contact?service=it-security',
    ctaSecondaryLabel: 'Get a Security Assessment',
    ctaSecondaryHref: '/contact?service=it-security',
  },
  ja: {
    heroTitle: 'ITセキュリティ 東京：実践的リスク低減',
    heroLead:
      'セキュリティは恐怖ではなく、賢明なビジネス判断であるべきです。AKRINは、予算を消耗したり業務を麻痺させたりすることなく、実際のリスクを低減する実践的なITセキュリティプログラムを提供します。',
    whatItIsTitle: 'サービス概要',
    whatItIs: [
      'ITセキュリティは、システム、データ、業務をデジタル脅威から保護する実践です。しかし、セキュリティがチェックボックスの演習になったり、肥大化した予算と不満を抱くユーザーを生み出す恐怖扇動の源になったりすることがよくあります。現実は？効果的なセキュリティは、実際のリスクを理解し、適切な統制を実装し、継続的な警戒を維持することです。',
      'AKRINは、企業規模、業界、リスクプロファイルに合わせた実践的なセキュリティサービスを提供します。ベンダーデモで印象的に見えるものではなく、実際に保護するものに焦点を当てています。リスク評価やコンプライアンスプログラムから継続的なセキュリティ管理まで、機能するセキュリティの構築を支援します。',
    ],
    whatYouGetTitle: '提供サービス',
    whatYouGet: [
      {
        title: 'セキュリティリスク評価',
        description:
          '実際の脆弱性と脅威暴露の冷静な評価。恐怖戦術なし-ビジネス影響でランク付けされた優先リスクのみ。',
      },
      {
        title: 'コンプライアンスプログラム開発',
        description:
          'APPI（日本のデータ保護法）、業界規制、国際基準を満たすための構造化プログラム。監査人は当社のドキュメントを評価します。',
      },
      {
        title: 'セキュリティポリシー・手順作成',
        description:
          'チームが実際に遵守できる実践的で実行可能なセキュリティポリシー。法律用語ではなく、平易な言葉で記述します。',
      },
      {
        title: 'セキュリティ意識向上トレーニング',
        description:
          '実際に行動を変える従業員トレーニング。フィッシングシミュレーション、ベストプラクティス、明確なガイダンス-退屈なパワーポイントではありません。',
      },
      {
        title: 'セキュリティ統制実装',
        description:
          'ファイアウォール、エンドポイント保護、メールセキュリティ、アクセス制御-環境に適したツールを選択して展開します。',
      },
      {
        title: '継続的セキュリティ管理',
        description:
          '継続的な監視、脅威インテリジェンス、インシデント対応。セキュリティはプロジェクトではなく、実践です。',
      },
    ],
    whyTitle: 'なぜAKRINか',
    whyBody:
      '私たちは、恐怖と複雑さを販売する「セキュリティブティック」ではありません。AKRINは実用的なアプローチを採用します：実際のリスクを特定し、比例した統制を実装し、継続的な改善を維持します。当社のクライアントには、グローバルセキュリティ基準と日本の規制要件の両方を満たす必要がある国際企業が含まれます。私たちはビジネスの言語（そして日本語、英語）を話すので、セキュリティはブロッカーではなく、エナブラーになります。',
    whoTitle: 'こんな企業に最適',
    whoItems: [
      'エンタープライズレベルの予算なしにセキュリティが必要な企業',
      'APPIや業界コンプライアンス要件に直面している組織',
      'セキュリティインシデントを経験し、体系的な改善が必要な企業',
      'グローバルと日本のセキュリティプラクティスを連携させる必要がある国際企業',
      '専任の社内セキュリティ専門知識がない組織',
    ],
    ctaTitle: '実際のセキュリティリスクを低減しましょう',
    ctaBody:
      'セキュリティを推測するのはやめましょう。無料の初期リスク評価と実践的な推奨事項のためにAKRINにご連絡ください。',
    ctaPrimaryLabel: 'お問い合わせ',
    ctaPrimaryHref: '/ja/contact?service=it-security',
    ctaSecondaryLabel: 'セキュリティ評価を受ける',
    ctaSecondaryHref: '/ja/contact?service=it-security',
  },
}

const networkPenTestDetails = {
  en: {
    heroTitle: 'Network Penetration Testing Tokyo',
    heroLead:
      'Find your vulnerabilities before someone else does. AKRIN provides professional network penetration testing that identifies real, exploitable weaknesses-then tells you exactly how to fix them.',
    whatItIsTitle: 'What It Is',
    whatItIs: [
      'Network penetration testing is authorized, simulated cyberattack against your infrastructure to identify security weaknesses. Unlike automated vulnerability scans that produce long lists of theoretical issues, penetration testing actually attempts to exploit vulnerabilities to determine what a real attacker could access, steal, or damage.',
      'AKRIN conducts comprehensive network penetration testing including external (internet-facing) infrastructure, internal networks, and wireless environments. We follow industry-standard methodologies (PTES, OWASP, NIST) and provide actionable reports-not just raw scan results.',
    ],
    whatYouGetTitle: 'What You Get',
    whatYouGet: [
      {
        title: 'External Penetration Testing',
        description:
          'Assessment of internet-facing systems: websites, VPNs, email servers, firewalls. We attempt to breach your perimeter from the outside, just like a real attacker would.',
      },
      {
        title: 'Internal Penetration Testing',
        description:
          'Evaluation of internal network security. Could a compromised user account or malicious insider access sensitive systems? We find out-safely and controlled.',
      },
      {
        title: 'Wireless Penetration Testing',
        description:
          "Assessment of WiFi security: encryption strength, access controls, rogue access point detection. Critical for Tokyo's dense wireless environments.",
      },
      {
        title: 'Social Engineering Testing',
        description:
          'Phishing simulations and pretexting attacks to test your human defenses. Technical security means nothing if employees give away the keys.',
      },
      {
        title: 'Detailed Remediation Reports',
        description:
          'Clear, prioritized findings with specific fix instructions. Technical details for your IT team, executive summaries for leadership.',
      },
      {
        title: 'Re-Testing & Validation',
        description:
          'After you fix the issues, we verify the fixes actually work. No charge for re-testing within scope.',
      },
    ],
    whyTitle: 'Why AKRIN',
    whyBody:
      "We're not \"hackers for hire\" chasing headlines. AKRIN provides disciplined, professional penetration testing focused on reducing your actual business risk. Our testers hold industry certifications (OSCP, CEH, GPEN) and follow strict rules of engagement. We understand that the goal isn't to prove how clever we are-it's to help you build a more secure organization. All testing is conducted with proper authorization, defined scope, and clear communication throughout.",
    whoTitle: "Who It's For",
    whoItems: [
      'Organizations required to conduct penetration testing for compliance (PCI DSS, ISO 27001, etc.)',
      'Businesses that have experienced security incidents and need to verify fixes',
      'Companies preparing for security audits or insurance renewals',
      'Organizations wanting to validate security controls before major initiatives',
      'Security-conscious businesses that believe in proactive verification',
    ],
    ctaTitle: "Let's Find Your Weaknesses Before Attackers Do",
    ctaBody:
      "Don't wait for a breach to discover your vulnerabilities. Contact AKRIN today to schedule your penetration test.",
    ctaPrimaryLabel: 'Contact Us',
    ctaPrimaryHref: '/contact?service=network-penetration-testing',
    ctaSecondaryLabel: 'Schedule Penetration Test',
    ctaSecondaryHref: '/contact?service=network-penetration-testing',
  },
  ja: {
    heroTitle: 'ネットワークペネトレーションテスト 東京',
    heroLead:
      '他の誰かに先立って脆弱性を見つけましょう。AKRINは、実際に悪用可能な脆弱性を特定し、修正方法を正確に示す、プロフェッショナルなネットワークペネトレーションテストを提供します。',
    whatItIsTitle: 'サービス概要',
    whatItIs: [
      'ネットワークペネトレーションテストは、セキュリティの弱点を特定するために、インフラに対して承認された模擬サイバー攻撃を行うものです。理論的な問題の長いリストを生成する自動脆弱性スキャンとは異なり、ペネトレーションテストは、実際の攻撃者がアクセス、窃取、または損害を与える可能性があるものを判断するために、脆弱性の悪用を実際に試みます。',
      'AKRINは、外部（インターネット向け）インフラ、内部ネットワーク、無線環境を含む包括的なネットワークペネトレーションテストを実施します。業界標準の方法論（PTES、OWASP、NIST）に従い、生のスキャン結果ではなく、実行可能なレポートを提供します。',
    ],
    whatYouGetTitle: '提供サービス',
    whatYouGet: [
      {
        title: '外部ペネトレーションテスト',
        description:
          'インターネット向けシステムの評価：Webサイト、VPN、メールサーバー、ファイアウォール。実際の攻撃者と同様に、外部から境界を突破しようと試みます。',
      },
      {
        title: '内部ペネトレーションテスト',
        description:
          '内部ネットワークセキュリティの評価。侵害されたユーザーアカウントや悪意のある内部者が機密システムにアクセスできるか？安全かつ管理された方法で確認します。',
      },
      {
        title: '無線ペネトレーションテスト',
        description:
          'WiFiセキュリティの評価：暗号化の強度、アクセス制御、不正アクセスポイントの検出。東京の密集した無線環境に不可欠です。',
      },
      {
        title: 'ソーシャルエンジニアリングテスト',
        description:
          'フィッシングシミュレーションや偽装攻撃により、人的防御をテスト。従業員が鍵を渡してしまえば、技術的なセキュリティは意味がありません。',
      },
      {
        title: '詳細な修復レポート',
        description:
          '具体的な修正手順を含む、明確で優先順位付けされた調査結果。ITチーム向けの技術的詳細、リーダーシップ向けのエグゼクティブサマリー。',
      },
      {
        title: '再テストと検証',
        description:
          '問題を修正した後、修正が実際に機能することを確認します。スコープ内の再テストに料金はかかりません。',
      },
    ],
    whyTitle: 'なぜAKRINか',
    whyBody:
      '私たちは、見出しを追いかける「ハッカーfor hire」ではありません。AKRINは、実際のビジネスリスクの低減に焦点を当てた、規律あるプロフェッショナルなペネトレーションテストを提供します。当社のテスターは業界認定（OSCP、CEH、GPEN）を保持し、厳格な交戦規則に従います。私たちは、自分たちがどれだけ賢いかを証明することが目的ではなく-より安全な組織の構築を支援することが目的であることを理解しています。すべてのテストは、適切な承認、定義されたスコープ、および明確なコミュニケーションをもって実施されます。',
    whoTitle: 'こんな企業に最適',
    whoItems: [
      'コンプライアンスのためにペネトレーションテストの実施が必要な組織（PCI DSS、ISO 27001など）',
      'セキュリティインシデントを経験し、修正を確認する必要がある企業',
      'セキュリティ監査や保険更新の準備をしている企業',
      '主要なイニシアチブの前にセキュリティ統制を検証したい企業',
      '予防的な検証を信じるセキュリティ意識の高い企業',
    ],
    ctaTitle: '攻撃者に先立って弱点を見つけましょう',
    ctaBody:
      '脆弱性を発見するために侵害を待つのはやめましょう。今すぐAKRINに連絡して、ペネトレーションテストをスケジュールしてください。',
    ctaPrimaryLabel: 'お問い合わせ',
    ctaPrimaryHref: '/ja/contact?service=network-penetration-testing',
    ctaSecondaryLabel: 'ペネトレーションテストを予約する',
    ctaSecondaryHref: '/ja/contact?service=network-penetration-testing',
  },
}

export const serviceCatalog: ServiceItem[] = [
  {
    slug: 'cloud-infrastructure',
    title: {
      en: 'Cloud Infrastructure',
      ja: 'クラウドインフラストラクチャ',
    },
    meta: {
      en: {
        title: 'Cloud Infrastructure Tokyo | Migration & Managed Services | AKRIN',
        description:
          'Expert cloud infrastructure services in Tokyo. Zero-downtime migration to AWS, Azure, GCP. 24/7 bilingual management. Japan compliance-ready.',
      },
      ja: {
        title: 'クラウドインフラ 東京 | 移行・運用支援 | AKRIN株式会社',
        description:
          '東京のクラウドインフラ専門企業。AWS、Azure、GCPへのゼロダウンタイム移行。24時間バイリンガル運用管理。日本のコンプライアンス対応。',
      },
    },
    intro: {
      en: 'AKRIN designs, migrates, and manages cloud infrastructure for international businesses in Tokyo, with 24/7 bilingual operations and Japan-ready compliance support.',
      ja: 'AKRINは、東京で事業を展開する国際企業向けに、24時間バイリンガル運用と日本対応コンプライアンスを備えたクラウド設計・移行・運用を提供します。',
    },
    keyServices: {
      en: [
        'Zero-Downtime Cloud Migration',
        'Multi-Cloud Architecture Design (AWS, Azure, GCP)',
        '24/7 Bilingual Cloud Operations',
        'Cost Optimization & FinOps',
        'Japan Compliance Integration (APPI, Data Localization)',
        'Disaster Recovery & Business Continuity',
      ],
      ja: [
        'ゼロダウンタイムクラウド移行',
        'マルチクラウドアーキテクチャ設計（AWS、Azure、GCP）',
        '24時間バイリンガルクラウド運用',
        'コスト最適化とFinOps',
        '日本のコンプライアンス統合（APPI・データローカリゼーション）',
        '災害対策と事業継続性',
      ],
    },
    details: cloudInfrastructureDetails,
  },
  {
    slug: 'cybersecurity',
    title: {
      en: 'Cybersecurity',
      ja: 'サイバーセキュリティ',
    },
    meta: {
      en: {
        title: 'IT Security Tokyo | Practical Risk Reduction | AKRIN',
        description:
          'Practical IT security services in Tokyo. Risk assessment, compliance programs, and security controls for businesses that need results, not fear.',
      },
      ja: {
        title: 'ITセキュリティ 東京 | 実践的リスク低減 | AKRIN株式会社',
        description:
          '東京の実践的ITセキュリティサービス。リスク評価、コンプライアンスプログラム、セキュリティ統制。恐怖ではなく結果を重視する企業向け。',
      },
    },
    intro: {
      en: 'AKRIN delivers practical cybersecurity programs in Tokyo that reduce real business risk through assessment, controls, compliance, and continuous security management.',
      ja: 'AKRINは、評価・統制・コンプライアンス・継続運用を通じて、実際のビジネスリスクを低減する実践的なサイバーセキュリティを東京で提供します。',
    },
    keyServices: {
      en: [
        'Security Risk Assessment',
        'Compliance Program Development (APPI and Global Standards)',
        'Security Policy & Procedure Creation',
        'Security Awareness Training',
        'Security Control Implementation',
        'Ongoing Security Management',
      ],
      ja: [
        'セキュリティリスク評価',
        'コンプライアンスプログラム開発（APPI・国際基準）',
        'セキュリティポリシー・手順作成',
        'セキュリティ意識向上トレーニング',
        'セキュリティ統制実装',
        '継続的セキュリティ管理',
      ],
    },
    details: itSecurityDetails,
  },
  {
    slug: 'it-consulting-project-management',
    title: {
      en: 'IT Consulting & Project Management',
      ja: 'ITコンサルティング・プロジェクト管理',
    },
    meta: {
      en: {
        title: 'IT Consulting & Project Management Tokyo | AKRIN',
        description:
          'Bilingual IT consulting and project management in Tokyo. Strategic advisory, complex delivery, and vendor coordination for international companies.',
      },
      ja: {
        title: 'ITコンサルティング・プロジェクト管理 東京 | AKRIN株式会社',
        description:
          '東京のバイリンガルITコンサルティング。戦略立案、複雑なプロジェクト実行、ベンダー調整。外資系企業の日本展開を支援。',
      },
    },
    intro: {
      en: 'AKRIN provides bilingual IT consulting and project management in Tokyo, bridging global strategy and local Japanese execution for complex initiatives.',
      ja: 'AKRINは、グローバル戦略と日本の実行をつなぐ、東京のバイリンガルITコンサルティング・プロジェクト管理を提供します。',
    },
    keyServices: {
      en: [
        'Strategic IT Planning',
        'Bilingual Project Management',
        'Vendor Selection & Negotiation',
        'Complex Implementation Leadership',
        'Risk Management & Issue Resolution',
        'Status Reporting & Stakeholder Communication',
      ],
      ja: [
        '戦略的IT計画',
        'バイリンガルプロジェクト管理',
        'ベンダー選定・交渉',
        '複雑な実装リーダーシップ',
        'リスク管理・問題解決',
        'ステータス報告・ステークホルダーコミュニケーション',
      ],
    },
    details: itConsultingDetails,
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
    meta: {
      en: {
        title: 'IT Security Tokyo | Practical Risk Reduction | AKRIN',
        description:
          'Practical IT security services in Tokyo. Risk assessment, compliance programs, and security controls for businesses that need results, not fear.',
      },
      ja: {
        title: 'ITセキュリティ 東京 | 実践的リスク低減 | AKRIN株式会社',
        description:
          '東京の実践的ITセキュリティサービス。リスク評価、コンプライアンスプログラム、セキュリティ統制。恐怖ではなく結果を重視する企業向け。',
      },
    },
    intro: {
      en: 'AKRIN delivers practical IT security programs in Tokyo that reduce real business risk through assessment, controls, compliance, and continuous security management.',
      ja: 'AKRINは、評価・統制・コンプライアンス・継続運用を通じて、実際のビジネスリスクを低減する実践的なITセキュリティを東京で提供します。',
    },
    keyServices: {
      en: [
        'Security Risk Assessment',
        'Compliance Program Development (APPI and Global Standards)',
        'Security Policy & Procedure Creation',
        'Security Awareness Training',
        'Security Control Implementation',
        'Ongoing Security Management',
      ],
      ja: [
        'セキュリティリスク評価',
        'コンプライアンスプログラム開発（APPI・国際基準）',
        'セキュリティポリシー・手順作成',
        'セキュリティ意識向上トレーニング',
        'セキュリティ統制実装',
        '継続的セキュリティ管理',
      ],
    },
    details: itSecurityDetails,
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
    meta: {
      en: {
        title: 'Network Penetration Testing Tokyo | AKRIN Security',
        description:
          'Professional network penetration testing in Tokyo. Identify exploitable vulnerabilities before attackers do. External, internal, and wireless testing.',
      },
      ja: {
        title: 'ネットワークペネトレーションテスト 東京 | AKRINセキュリティ',
        description:
          '東京のプロフェッショナルネットワークペネトレーションテスト。攻撃者に先立って悪用可能な脆弱性を特定。外部、内部、無線テスト対応。',
      },
    },
    intro: {
      en: 'AKRIN provides professional network penetration testing in Tokyo to identify real, exploitable weaknesses across external, internal, and wireless environments.',
      ja: 'AKRINは、東京で外部・内部・無線環境を対象に、実際に悪用可能な弱点を特定するプロフェッショナルなネットワークペネトレーションテストを提供します。',
    },
    keyServices: {
      en: [
        'External Penetration Testing',
        'Internal Penetration Testing',
        'Wireless Penetration Testing',
        'Social Engineering Testing',
        'Detailed Remediation Reports',
        'Re-Testing & Validation',
      ],
      ja: [
        '外部ペネトレーションテスト',
        '内部ペネトレーションテスト',
        '無線ペネトレーションテスト',
        'ソーシャルエンジニアリングテスト',
        '詳細な修復レポート',
        '再テストと検証',
      ],
    },
    details: networkPenTestDetails,
  },
  {
    slug: 'japan-ekahau-wireless-surveys',
    title: {
      en: 'Japan Ekahau Wireless Surveys',
      ja: 'Japan Ekahauワイヤレスサーベイ',
    },
    intro: {
      en: 'Combine predictive WiFi design and on-site assessment into one Ekahau-certified wireless survey service for reliable enterprise coverage across Japan.',
      ja: 'WiFi設計と現地アセスメントを統合し、Ekahau認定の無線サーベイで日本全国のエンタープライズ環境に最適なカバレッジを実現します。',
    },
    keyServices: {
      en: [
        'Site Survey',
        'Coverage Analysis',
        'Predictive Network Design',
        'Capacity Planning',
      ],
      ja: [
        'サイトサーベイ',
        'カバレッジ分析',
        'ネットワーク設計',
        '容量計画',
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
