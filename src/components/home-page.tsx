import {
  GlobeAltIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import homePageBannerImage from '../assets/images/home-page-banner/hero-home-page-1920.avif'
import homePageBannerMobile from '../assets/images/home-page-banner/hero-home-page-mobile.avif'
import sidekickImage from '../assets/images/services/japan-ekahau-wireless-surveys/sidekick-2.avif'
import { Footer } from '@/components/footer'
import { HomeCaseStudyParallaxCard } from '@/components/HomeCaseStudyParallaxCard'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { SectionNav } from '@/components/SectionNav'
import { StaggeredReveal, StaggerItem, TextReveal, LineGrow, NumberRoll } from '@/components/StaggeredReveal'

type Locale = 'en' | 'ja'

type HomeCopy = {
  heroTitle: string
  heroSubtitle: string
  heroCta: string
  servicesTitle: string
  servicesIntro: string
  services: {
    category: string
    title: string
    description: string
    href: string
    details?: string[]
    highlights?: string[]
    investment?: string
  }[]
  whyTitle: string
  whyDescription: string
  caseStudiesTitle: string
  caseStudies: { title: string; summary: string; href: string; image?: string }[]
  industryTitle: string
  industryDescription: string
  industries: { pct: number; sector: string }[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  insightsTitle: string
  insights: { title: string; category: string; href: string }[]
  ctaTitle: string
  ctaDescription: string
  ctaButton: string
}

const LOGO_DEV_TOKEN = 'pk_d8Z_HxM_QPiOQOaIT9GqIg'
const SITE_URL = 'https://akrin.jp'

const logoCloud = [
  { name: 'BitRaser', domain: 'bitraser.com', alt: 'BitRaser data erasure partner logo' },
  { name: 'Blancco', domain: 'blancco.com', alt: 'Blancco certified data destruction partner' },
  { name: 'Microsoft', domain: 'microsoft.com', alt: 'Microsoft partner for cloud services' },
  { name: 'Cisco', domain: 'cisco.com', alt: 'Cisco networking solutions partner' },
  { name: 'Panduit', domain: 'panduit.com', alt: 'Panduit infrastructure solutions' },
  { name: 'ServiceNow', domain: 'servicenow.com', alt: 'ServiceNow ITSM platform partner' },
  { name: 'Ekahau', domain: 'ekahau.com', alt: 'Ekahau WiFi assessment certification' },
  { name: 'Cloudflare', domain: 'cloudflare.com', alt: 'Cloudflare security partner' },
  { name: 'OpenAI', domain: 'openai.com', alt: 'OpenAI technology partner' },
  { name: 'Anthropic', domain: 'anthropic.com', alt: 'Anthropic AI partner' },
].map((logo) => ({
  ...logo,
  src: `https://img.logo.dev/${logo.domain}?token=${LOGO_DEV_TOKEN}&format=png`,
}))

const serviceVisuals = [
  {
    src: '/images/banners/itad/itad.avif',
    alt: 'Secure IT asset disposition process with certified handling',
  },
  {
    src: '/images/banners/it-consulting-project-management/hero-banner.avif',
    alt: 'IT asset lifecycle planning and management operations',
  },
  {
    src: '/images/banners/it-managed-services/banner.avif',
    alt: 'Managed IT services operations with proactive infrastructure support',
  },
  {
    src: '/images/banners/it-consulting-project-management/hero-banner.avif',
    alt: 'Strategic IT project delivery and enterprise transformation planning',
  },
  {
    src: sidekickImage,
    alt: 'Ekahau Sidekick wireless survey tool',
  },
]

const content: Record<Locale, HomeCopy> = {
  en: {
    heroTitle: 'Managed IT Services Across Japan',
    heroSubtitle:
      'AKRIN is a managed IT service provider delivering 24/7 infrastructure support, cybersecurity, cloud services, and certified asset disposition for enterprises in Japan — with bilingual engineering and compliance-first delivery aligned with APPI, ISO 27001, and GDPR.',
    heroCta: 'Schedule Free Consultation',
    servicesTitle: 'End-to-End IT Lifecycle Management for Businesses in Japan',
    servicesIntro:
      "From secure asset disposition to always-on managed support, AKRIN provides full IT lifecycle management for enterprises operating in Tokyo and across Japan. Whether you\u2019re a multinational needing English-Japanese IT coordination or an enterprise managing APPI, FISC, ISO 27001, and GDPR compliance, our bilingual team delivers global best practices with deep Japan market expertise.",
    services: [
      {
        category: 'Asset disposition',
        title: 'ITAD Services in Japan',
        description:
          'Certified end-of-life asset disposition with verified data destruction, chain-of-custody documentation, and full audit compliance. AKRIN handles secure logistics, physical destruction, and certified erasure using Blancco and BitRaser \u2014 ensuring every decommissioned device is handled to NIST 800-88 and ISO 27001 standards.',
        href: '/services/itad-japan-apac-us',
        highlights: [
          'Certified data erasure using Blancco and BitRaser technologies',
          'Physical destruction for devices that cannot be sanitized',
          'Secure asset transportation and logistics across Japan',
          'Complete chain-of-custody documentation designed for audits',
        ],
      },
      {
        category: 'Lifecycle management',
        title: 'IT Asset Management in Tokyo',
        description:
          'Track, optimize, and control your IT assets from procurement through retirement. AKRIN\u2019s IT asset management service gives you serial-level visibility, proactive refresh planning, software license compliance, and audit-ready reporting \u2014 reducing total cost of ownership and eliminating shadow IT across your Japan operations.',
        href: '/services/it-asset-management',
        highlights: [
          'Procurement planning based on usage analytics and total cost of ownership',
          'Deployment tracking with serial-level inventory and user assignment records',
          'Maintenance scheduling with proactive warranty and refresh alerts',
          'Software license compliance and audit-readiness reporting',
        ],
      },
      {
        category: 'Operational support',
        title: 'Managed IT Services \u2014 24/7 Support Across Japan',
        description:
          '24/7 monitoring, proactive incident response, and bilingual help desk support to keep your teams productive and your systems stable. AKRIN manages on-prem and multi-cloud environments with structured SLA response targets and security operations coverage \u2014 including Japanese holidays and after-hours escalation.',
        href: '/services/it-managed-services',
        highlights: [
          '24/7 monitoring and operations center coverage',
          'Bilingual help desk with structured severity response targets',
          'Infrastructure management across on-prem and multi-cloud environments',
          'Security operations with threat monitoring and incident response',
        ],
      },
      {
        category: 'Strategic advisory',
        title: 'IT Project Management & Digital Transformation',
        description:
          'From cloud migration to infrastructure modernization, AKRIN manages complex IT transformation programs with senior advisory support and structured delivery. We align execution with governance frameworks including ITIL, ensuring every initiative is completed on time, within scope, and with clear stakeholder communication in English and Japanese.',
        href: '/services/it-consulting-project-management',
        highlights: [
          'Cloud migration planning and phased execution for AWS, Azure, and Google Cloud',
          'Infrastructure modernization and hybrid architecture programs',
          'System integration across ITSM, ERP, CRM, and line-of-business applications',
          'IT governance and service management optimization aligned with ITIL practices',
        ],
      },
      {
        category: 'Wireless networks',
        title: 'Japan Ekahau WiFi Survey & Wireless Design',
        description:
          'Professional wireless network assessment and design using Ekahau-certified methodology. AKRIN delivers predictive surveys, on-site spectrum analysis, and AP placement planning to eliminate dead zones, improve capacity, and validate roaming performance \u2014 purpose-built for high-density office, retail, and enterprise environments across Japan.',
        href: '/services/japan-ekahau-wireless-surveys',
        highlights: [
          'Ekahau predictive survey and AP placement planning',
          'On-site wireless assessment and spectrum analysis',
          'Coverage, capacity, and roaming validation',
          'Interference detection and remediation guidance',
        ],
      },
    ],
    whyTitle: 'Why Businesses in Japan Choose AKRIN',
    whyDescription:
      'Operating in Japan requires more than technical capability \u2014 it requires understanding of local regulations, bilingual coordination across headquarters and local teams, and service levels that hold up under audit. AKRIN combines global IT service standards with practical Japan market expertise, delivering managed IT services that reduce operational costs, support compliance, and free your teams to focus on core business objectives.',
    caseStudiesTitle: 'Real Results for Businesses Operating in Japan',
    caseStudies: [
      {
        title: 'Managed IT for CPG (Tokyo)',
        summary:
          'Unified service desk and endpoint standardization delivered measurable SLA improvements for a consumer goods company operating across Tokyo.',
        href: '/case-studies/managed-it-services-cpg-tokyo',
        image: '/images/case-studies/managed-it-services-cpg-tokyo/managed-it.avif',
      },
      {
        title: 'Cloud Migration (Manufacturing)',
        summary:
          'Phased Azure migration with zero production downtime and controlled risk handover for a Japanese manufacturing enterprise.',
        href: '/case-studies/cloud-migration-manufacturing',
        image: '/images/case-studies/cloud-migration-manufacturing/cloud-migration.avif',
      },
      {
        title: 'ITAD Consolidation (Tokyo\u2013Kobe)',
        summary:
          'Secure multi-site asset disposition with full chain-of-custody documentation across a regional office consolidation spanning Tokyo and Kobe.',
        href: '/case-studies/itad-tokyo-kobe-consolidation',
        image: '/images/case-studies/itad-tokyo-kobe-consolidation/e-waste.avif',
      },
      {
        title: 'Wi-Fi Assessment (Tokyo Retail)',
        summary:
          'Coverage and capacity redesign for a high-density Tokyo retail chain, eliminating dead zones and improving throughput across all floors.',
        href: '/case-studies/wifi-assessment-retail-tokyo',
        image: '/images/case-studies/wifi-assessment-retail-tokyo/wifi-assessment.avif',
      },
    ],
    industryTitle: 'Industry Expertise That Drives Measurable Results',
    industryDescription:
      'AKRIN serves regulated and high-growth sectors with compliance expertise tailored to each industry\u2019s operational and regulatory requirements in Japan.',
    industries: [
      { pct: 40, sector: 'Financial Services' },
      { pct: 25, sector: 'Healthcare & Life Sciences' },
      { pct: 20, sector: 'Manufacturing & Retail' },
      { pct: 15, sector: 'Technology & Telecom' },
    ],
    faqTitle: 'Frequently Asked Questions About Managed IT Services in Japan',
    faqs: [
      {
        q: 'What IT services does AKRIN provide in Japan?',
        a: 'AKRIN provides five core managed IT services in Tokyo and across Japan: certified ITAD for secure asset disposition, IT Asset Management for lifecycle tracking and cost optimization, Managed IT Services for 24/7 operational support, IT Project Management for complex technology transformation, and Japan Ekahau Wireless Surveys for professional WiFi design and assessment.',
      },
      {
        q: 'How quickly can AKRIN deploy on-site engineers?',
        a: 'Our bilingual engineers are based in Tokyo and provide same-day on-site response across Kanto. For clients outside Kanto, we offer rapid nationwide deployment \u2014 typically within 24 to 48 hours depending on location and scope.',
      },
      {
        q: 'Does AKRIN provide 24/7 monitoring and support?',
        a: 'Yes. All managed services clients receive round-the-clock monitoring and incident response, including coverage during Japanese public holidays. Our operations center maintains structured severity response targets with full escalation paths.',
      },
      {
        q: 'Can AKRIN support bilingual business environments?',
        a: 'Yes. AKRIN operates entirely in English and Japanese \u2014 covering all helpdesk tickets, technical documentation, project reporting, vendor coordination, and executive stakeholder communication. This is core to how we serve multinational enterprises in Japan.',
      },
      {
        q: 'What compliance frameworks does AKRIN support?',
        a: 'AKRIN designs its services around APPI, FISC, ISO 27001, GDPR, and NIST 800-88 \u2014 providing documentation, process controls, and audit-ready reporting aligned to each framework. We currently have ISO 27001:2022 certification in progress.',
      },
      {
        q: 'What industries does AKRIN serve?',
        a: 'We serve financial services, healthcare and life sciences, manufacturing and retail, and technology companies \u2014 with compliance-aware service delivery tailored to the specific regulatory environment of each sector operating in Japan.',
      },
    ],
    insightsTitle: 'Featured Insights',
    insights: [
      { title: 'Cybersecurity Best Practices for Japanese Enterprises in 2025', category: 'Security', href: '/blog/cybersecurity-best-practices-2025' },
      { title: 'How AI is Transforming IT Support Services in Japan', category: 'Innovation', href: '/blog/ai-transforming-it-support' },
      { title: 'Complete Guide to Remote Work Security', category: 'Security', href: '/blog/remote-work-security-guide' },
    ],
    ctaTitle: 'Ready to Transform Your IT Operations in Japan?',
    ctaDescription:
      'Get a customized managed IT service plan designed around your business goals, compliance requirements, and operational environment \u2014 starting with a free consultation with our bilingual team in Tokyo.',
    ctaButton: 'Schedule Free Consultation',
  },
  ja: {
    heroTitle: '日本全国対応のマネージドITサービス',
    heroSubtitle:
      'AKRINは、24/7インフラサポート、サイバーセキュリティ、クラウドサービス、認定IT資産廃棄を提供するマネージドITサービスプロバイダーです。バイリンガルエンジニアリングとAPPI・ISO 27001・GDPR準拠のコンプライアンス重視のデリバリーで日本の企業を支援します。',
    heroCta: '無料相談を予約',
    servicesTitle: '\u4E3B\u8981\u30B5\u30FC\u30D3\u30B9',
    servicesIntro:
      'AKRIN\u306F\u3001IT\u8CC7\u7523\u51E6\u5206\u304B\u308924\u6642\u9593365\u65E5\u306E\u904B\u7528\u652F\u63F4\u307E\u3067\u3001\u6771\u4EAC\u304A\u3088\u3073\u65E5\u672C\u5168\u56FD\u306E\u4F01\u696D\u5411\u3051\u306BIT\u30E9\u30A4\u30D5\u30B5\u30A4\u30AF\u30EB\u5168\u4F53\u3092\u4E00\u6C17\u901A\u8CAB\u3067\u652F\u63F4\u3057\u307E\u3059\u3002',
    services: [
      {
        category: '\u8CC7\u7523\u51E6\u5206',
        title: 'ITAD\u30B5\u30FC\u30D3\u30B9',
        description:
          '\u5B89\u5168\u306A\u30C7\u30FC\u30BF\u6D88\u53BB\u3068\u8A3C\u8DE1\u7BA1\u7406\u306B\u3088\u308A\u3001IT\u8CC7\u7523\u306E\u9069\u6B63\u51E6\u5206\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002',
        href: '/ja/services/itad-japan-apac-us',
        highlights: [
          'Blancco\u30FBBitRaser\u306B\u3088\u308B\u8A8D\u5B9A\u30C7\u30FC\u30BF\u6D88\u53BB',
          '\u7269\u7406\u7834\u58CA\u5BFE\u5FDC',
          '\u65E5\u672C\u5168\u56FD\u306E\u5B89\u5168\u306A\u8F38\u9001\u30FB\u7269\u6D41',
          '\u76E3\u67FB\u5BFE\u5FDC\u306E\u5B8C\u5168\u306A\u8A3C\u8DE1\u6587\u66F8',
        ],
      },
      {
        category: '\u30E9\u30A4\u30D5\u30B5\u30A4\u30AF\u30EB\u7BA1\u7406',
        title: 'IT\u8CC7\u7523\u7BA1\u7406',
        description:
          '\u8ABF\u9054\u304B\u3089\u5EC3\u68C4\u307E\u3067\u3001IT\u8CC7\u7523\u306E\u30E9\u30A4\u30D5\u30B5\u30A4\u30AF\u30EB\u5168\u4F53\u3092\u53EF\u8996\u5316\u30FB\u6700\u9069\u5316\u3057\u307E\u3059\u3002',
        href: '/ja/services/it-asset-management',
        highlights: [
          '\u4F7F\u7528\u72B6\u6CC1\u5206\u6790\u306B\u57FA\u3065\u304F\u8ABF\u9054\u8A08\u753B',
          '\u30B7\u30EA\u30A2\u30EB\u30EC\u30D9\u30EB\u306E\u5728\u5EAB\u8FFD\u8DE1',
          '\u4FDD\u8A3C\u30FB\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u30A2\u30E9\u30FC\u30C8',
          '\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u30E9\u30A4\u30BB\u30F3\u30B9\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9',
        ],
      },
      {
        category: '\u904B\u7528\u652F\u63F4',
        title: '\u30DE\u30CD\u30FC\u30B8\u30C9IT\u30B5\u30FC\u30D3\u30B9',
        description:
          '24\u6642\u9593365\u65E5\u306E\u904B\u7528\u652F\u63F4\u3068\u30D7\u30ED\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u7BA1\u7406\u306B\u3088\u308A\u3001\u5B89\u5B9A\u3057\u305FIT\u74B0\u5883\u3092\u7DAD\u6301\u3057\u307E\u3059\u3002',
        href: '/ja/services/it-managed-services',
        highlights: [
          '24\u6642\u9593365\u65E5\u306E\u76E3\u8996\u3068\u904B\u7528\u30BB\u30F3\u30BF\u30FC',
          '\u30D0\u30A4\u30EA\u30F3\u30AC\u30EB\u30D8\u30EB\u30D7\u30C7\u30B9\u30AF',
          '\u30AA\u30F3\u30D7\u30EC\u30DF\u30B9\u30FB\u30DE\u30EB\u30C1\u30AF\u30E9\u30A6\u30C9\u74B0\u5883\u306E\u30A4\u30F3\u30D5\u30E9\u7BA1\u7406',
          '\u8105\u5A01\u76E3\u8996\u3068\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u5BFE\u5FDC',
        ],
      },
      {
        category: '\u6226\u7565\u30A2\u30C9\u30D0\u30A4\u30B6\u30EA\u30FC',
        title: 'IT\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406',
        description:
          '\u8907\u96D1\u306AIT\u5909\u9769\u3092\u6210\u529F\u306B\u5C0E\u304F\u305F\u3081\u306E\u6226\u7565\u652F\u63F4\u3068\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u63A8\u9032\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002',
        href: '/ja/services/it-consulting-project-management',
        highlights: [
          'AWS\u3001Azure\u3001Google Cloud\u3078\u306E\u30AF\u30E9\u30A6\u30C9\u79FB\u884C',
          '\u30A4\u30F3\u30D5\u30E9\u8FD1\u4EE3\u5316\u3068\u30CF\u30A4\u30D6\u30EA\u30C3\u30C9\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3',
          'ITSM\u30FBERP\u30FBCRM\u306E\u30B7\u30B9\u30C6\u30E0\u7D71\u5408',
          'ITIL\u306B\u6CBF\u3063\u305FIT\u30AC\u30D0\u30CA\u30F3\u30B9\u6700\u9069\u5316',
        ],
      },
      {
        category: '\u7121\u7DDA\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF',
        title: 'Japan Ekahau Wireless Surveys',
        description:
          'WiFi\u8A2D\u8A08\u3068WiFi\u30A2\u30BB\u30B9\u30E1\u30F3\u30C8\u3092\u7D71\u5408\u3057\u305FEkahau\u7121\u7DDA\u30B5\u30FC\u30D9\u30A4\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002',
        href: '/ja/services/japan-ekahau-wireless-surveys',
        highlights: [
          'Ekahau\u4E88\u6E2C\u30B5\u30FC\u30D9\u30A4\u3068AP\u914D\u7F6E\u8A08\u753B',
          '\u30AA\u30F3\u30B5\u30A4\u30C8\u7121\u7DDA\u8A55\u4FA1\u3068\u30B9\u30DA\u30AF\u30C8\u30EB\u5206\u6790',
          '\u30AB\u30D0\u30EC\u30C3\u30B8\u30FB\u5BB9\u91CF\u30FB\u30ED\u30FC\u30DF\u30F3\u30B0\u691C\u8A3C',
          '\u5E72\u6E09\u691C\u51FA\u3068\u6539\u5584\u30AC\u30A4\u30C0\u30F3\u30B9',
        ],
      },
    ],
    whyTitle: '\u65E5\u672C\u4F01\u696D\u304CAKRIN\u3092\u9078\u3076\u7406\u7531',
    whyDescription:
      'AKRIN\u306F\u3001\u65E5\u82F1\u30D0\u30A4\u30EA\u30F3\u30AC\u30EB\u5BFE\u5FDC\u3068\u30B0\u30ED\u30FC\u30D0\u30EB\u6A19\u6E96\u306E\u904B\u7528\u54C1\u8CEA\u3092\u7D44\u307F\u5408\u308F\u305B\u3001\u30B3\u30B9\u30C8\u6700\u9069\u5316\u3068\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u7DAD\u6301\u3092\u4E21\u7ACB\u3059\u308BIT\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002',
    caseStudiesTitle: '\u5C0E\u5165\u4E8B\u4F8B',
    caseStudies: [
      {
        title: '\u6D88\u8CBB\u8CA1\u30DE\u30CD\u30FC\u30B8\u30C9IT\uFF08\u6771\u4EAC\uFF09',
        summary:
          '\u30B5\u30FC\u30D3\u30B9\u30C7\u30B9\u30AF\u7D71\u5408\u3068\u7AEF\u672B\u6A19\u6E96\u5316\u3067SLA\u3068\u904B\u7528\u54C1\u8CEA\u3092\u6539\u5584\u3002',
        href: '/ja/case-studies/managed-it-services-cpg-tokyo',
        image: '/images/case-studies/managed-it-services-cpg-tokyo/managed-it.avif',
      },
      {
        title: '\u88FD\u9020\u696D\u5411\u3051\u30AF\u30E9\u30A6\u30C9\u79FB\u884C',
        summary:
          '\u6BB5\u968E\u79FB\u884C\u3068\u904B\u7528\u8A2D\u8A08\u3067\u30EA\u30B9\u30AF\u3092\u6291\u3048\u306A\u304C\u3089\u79FB\u884C\u3092\u5B9F\u65BD\u3002',
        href: '/ja/case-studies/cloud-migration-manufacturing',
        image: '/images/case-studies/cloud-migration-manufacturing/cloud-migration.avif',
      },
      {
        title: 'ITAD\u7D71\u5408\uFF08\u6771\u4EAC\u30FB\u795E\u6238\uFF09',
        summary:
          '\u5B89\u5168\u306A\u5EC3\u68C4\u3068\u30C8\u30EC\u30FC\u30B5\u30D3\u30EA\u30C6\u30A3\u3067\u5730\u57DF\u7D71\u5408\u6642\u306E\u30AC\u30D0\u30CA\u30F3\u30B9\u3092\u5F37\u5316\u3002',
        href: '/ja/case-studies/itad-tokyo-kobe-consolidation',
        image: '/images/case-studies/itad-tokyo-kobe-consolidation/e-waste.avif',
      },
      {
        title: '\u6771\u4EAC\u5C0F\u58F2\u5411\u3051Wi-Fi\u30A2\u30BB\u30B9\u30E1\u30F3\u30C8',
        summary:
          '\u9AD8\u5BC6\u5EA6\u74B0\u5883\u306E\u96FB\u6CE2\u54C1\u8CEA\u3092\u6700\u9069\u5316\u3057\u3001\u63A5\u7D9A\u5B89\u5B9A\u6027\u3092\u5411\u4E0A\u3002',
        href: '/ja/case-studies/wifi-assessment-retail-tokyo',
        image: '/images/case-studies/wifi-assessment-retail-tokyo/wifi-assessment.avif',
      },
    ],
    industryTitle: '\u696D\u754C\u5225\u306E\u5B9F\u7E3E',
    industryDescription:
      '\u5404\u696D\u754C\u306E\u898F\u5236\u8981\u4EF6\u3068\u904B\u7528\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u305F\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u5BFE\u5FDC\u306EIT\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002',
    industries: [
      { pct: 40, sector: '\u91D1\u878D\u30B5\u30FC\u30D3\u30B9' },
      { pct: 25, sector: '\u30D8\u30EB\u30B9\u30B1\u30A2\u30FB\u30E9\u30A4\u30D5\u30B5\u30A4\u30A8\u30F3\u30B9' },
      { pct: 20, sector: '\u88FD\u9020\u30FB\u5C0F\u58F2' },
      { pct: 15, sector: '\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u30FB\u901A\u4FE1' },
    ],
    faqTitle: '\u3088\u304F\u3042\u308B\u8CEA\u554F',
    faqs: [
      {
        q: 'AKRIN\u306F\u65E5\u672C\u3067\u3069\u306E\u3088\u3046\u306AIT\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F',
        a: 'ITAD\u3001IT\u8CC7\u7523\u7BA1\u7406\u3001\u30DE\u30CD\u30FC\u30B8\u30C9IT\u30B5\u30FC\u30D3\u30B9\u3001IT\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406\u3001Japan Ekahau Wireless Surveys\u306E5\u3064\u306E\u30B3\u30A2\u30B5\u30FC\u30D3\u30B9\u3092\u6771\u4EAC\u304A\u3088\u3073\u65E5\u672C\u5168\u56FD\u3067\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002',
      },
      {
        q: '\u30AA\u30F3\u30B5\u30A4\u30C8\u5BFE\u5FDC\u306F\u3069\u306E\u304F\u3089\u3044\u65E9\u304F\u53EF\u80FD\u3067\u3059\u304B\uFF1F',
        a: '\u6771\u4EAC\u62E0\u70B9\u30C1\u30FC\u30E0\u304C\u95A2\u6771\u570F\u3067\u5F53\u65E5\u5BFE\u5FDC\u3001\u5168\u56FD\u3067\u308224\uFF5E48\u6642\u9593\u4EE5\u5185\u306B\u8FC5\u901F\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002',
      },
      {
        q: '24\u6642\u9593365\u65E5\u306E\u76E3\u8996\u30FB\u30B5\u30DD\u30FC\u30C8\u306F\u3042\u308A\u307E\u3059\u304B\uFF1F',
        a: '\u306F\u3044\u3002\u65E5\u672C\u306E\u795D\u65E5\u3092\u542B\u3081\u3001\u5E38\u6642\u76E3\u8996\u3068\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u5BFE\u5FDC\u3092\u5B9F\u65BD\u3057\u3066\u3044\u307E\u3059\u3002',
      },
      {
        q: '\u82F1\u8A9E\u3068\u65E5\u672C\u8A9E\u306E\u4E21\u65B9\u3067\u5BFE\u5FDC\u3067\u304D\u307E\u3059\u304B\uFF1F',
        a: '\u306F\u3044\u3002\u30C1\u30B1\u30C3\u30C8\u3001\u30EC\u30DD\u30FC\u30C8\u3001\u4F1A\u8B70\u3092\u65E5\u82F1\u4E21\u8A00\u8A9E\u3067\u63D0\u4F9B\u53EF\u80FD\u3067\u3059\u3002',
      },
      {
        q: '\u3069\u306E\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F',
        a: 'APPI\u3001FISC\u3001ISO 27001\u3001GDPR\u3001NIST 800-88\u306B\u5BFE\u5FDC\u3057\u305F\u6587\u66F8\u5316\u3001\u30D7\u30ED\u30BB\u30B9\u7BA1\u7406\u3001\u76E3\u67FB\u5BFE\u5FDC\u30EC\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002',
      },
      {
        q: '\u3069\u306E\u696D\u754C\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F',
        a: '\u91D1\u878D\u30B5\u30FC\u30D3\u30B9\u3001\u30D8\u30EB\u30B9\u30B1\u30A2\u30FB\u30E9\u30A4\u30D5\u30B5\u30A4\u30A8\u30F3\u30B9\u3001\u88FD\u9020\u30FB\u5C0F\u58F2\u3001\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u4F01\u696D\u306B\u5BFE\u5FDC\u3057\u3001\u5404\u696D\u754C\u306E\u898F\u5236\u74B0\u5883\u306B\u5408\u308F\u305B\u305F\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u5BFE\u5FDC\u306E\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002',
      },
    ],
    insightsTitle: '\u6700\u65B0\u30A4\u30F3\u30B5\u30A4\u30C8',
    insights: [
      { title: '2025\u5E74\u306E\u65E5\u672C\u4F01\u696D\u5411\u3051\u30B5\u30A4\u30D0\u30FC\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30D9\u30B9\u30C8\u30D7\u30E9\u30AF\u30C6\u30A3\u30B9', category: '\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3', href: '/ja/blog/cybersecurity-best-practices-2025' },
      { title: 'AI\u304CIT\u30B5\u30DD\u30FC\u30C8\u30B5\u30FC\u30D3\u30B9\u3092\u3069\u3046\u5909\u9769\u3059\u308B\u304B', category: '\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3', href: '/ja/blog/ai-transforming-it-support' },
      { title: '\u30EA\u30E2\u30FC\u30C8\u30EF\u30FC\u30AF\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\uFF1A\u5305\u62EC\u7684\u306A\u30AC\u30A4\u30C9', category: '\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3', href: '/ja/blog/remote-work-security-guide' },
    ],
    ctaTitle: 'IT\u30A4\u30F3\u30D5\u30E9\u306E\u5909\u9769\u3092\u59CB\u3081\u307E\u305B\u3093\u304B\uFF1F',
    ctaDescription:
      '\u8AB2\u984C\u306B\u5408\u308F\u305B\u305F\u6700\u9069\u306A\u9032\u3081\u65B9\u3092\u3001\u5C02\u9580\u30C1\u30FC\u30E0\u304C\u5177\u4F53\u7684\u306B\u3054\u63D0\u6848\u3057\u307E\u3059\u3002',
    ctaButton: '\u76F8\u8AC7\u3092\u4E88\u7D04',
  },
}

function SectionLabel({
  label,
  tone = 'dark',
}: {
  label: string
  tone?: 'dark' | 'cream' | 'light'
}) {
  const dotClass = tone === 'light' ? 'bg-white' : 'bg-[#0A0B19]'
  const textClass = tone === 'light' ? 'text-white/60' : 'text-[#0A0B19]/55'

  return (
    <div className="mb-5 flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`inline-block h-1.5 w-1.5 rounded-full ${dotClass}`}
      />
      <span className={`font-mono text-[11px] uppercase tracking-[0.18em] ${textClass}`}>
        {label}
      </span>
    </div>
  )
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale]
  const contactHref = locale === 'ja' ? '/ja/contact' : '/contact'
  const caseStudiesHref = locale === 'ja' ? '/ja/case-studies' : '/case-studies'
  const servicesHref = locale === 'ja' ? '/ja/services' : '/services'
  const homeSectionNavItems =
    locale === 'ja'
      ? [
          { id: 'services', num: '01', label: 'サービス' },
          { id: 'why-akrin', num: '02', label: 'AKRINの強み' },
          { id: 'case-studies', num: '03', label: '導入事例' },
          { id: 'expertise', num: '04', label: '専門領域' },
          { id: 'faq', num: '05', label: 'FAQ' },
        ]
      : [
          { id: 'services', num: '01', label: 'Services' },
          { id: 'why-akrin', num: '02', label: 'Why Akrin' },
          { id: 'case-studies', num: '03', label: 'Case Studies' },
          { id: 'expertise', num: '04', label: 'Expertise' },
          { id: 'faq', num: '05', label: 'FAQ' },
        ]
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
  const serviceSchemas = copy.services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'AKRIN K.K.',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    url: `${SITE_URL}${service.href}`,
  }))
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'AKRIN K.K.',
    url: locale === 'ja' ? `${SITE_URL}/ja` : SITE_URL,
    telephone: '+81-3-6821-1223',
    email: 'support@akrin.jp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2-4-15 Minami Aoyama 4F',
      addressLocality: 'Minato City',
      addressRegion: 'Tokyo',
      postalCode: '107-0062',
      addressCountry: 'JP',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'ja' ? '\u30DB\u30FC\u30E0' : 'Home',
        item: locale === 'ja' ? `${SITE_URL}/ja` : SITE_URL,
      },
    ],
  }

  return (
    <div className="bg-[#F7F7FC]">
      <Navbar />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {serviceSchemas.map((schema) => (
          <script
            key={schema.url}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* ── Mobile / Tablet hero (WWT style: image top, gradient blend, text below) ── */}
        <section id="hero" className="relative overflow-hidden bg-[#02304F] lg:hidden">
          {/* Full-bleed background image */}
          <div className="absolute inset-0">
            <Image
              src={homePageBannerMobile}
              alt={locale === 'ja' ? 'AKRIN \u30DB\u30FC\u30E0\u30D0\u30CA\u30FC' : 'AKRIN home banner'}
              fill
              priority
              unoptimized
              className="object-cover object-[65%_45%]"
            />
          </div>
          {/* Bottom gradient overlay — image clear on top, solid dark on bottom for text */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 20%, rgba(2,48,79,0.4) 40%, rgb(2,48,79) 58%)',
            }}
          />
          {/* Content — spacer pushes text to bottom half */}
          <div className="relative z-10 flex min-h-[520px] flex-col justify-end px-5 pb-7 sm:min-h-[560px] sm:px-8 sm:pb-9">
            <SectionLabel label={locale === 'ja' ? 'マネージドITサービスプロバイダー' : 'Managed IT Service Provider in Japan'} tone="light" />
            <TextReveal
              text={copy.heroTitle}
              as="h1"
              className="font-serif text-[24px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px]"
              staggerMs={50}
            />
            <p className="mt-3 max-w-md text-[13px] leading-[1.65] text-white/65 sm:text-[14px]">
              {copy.heroSubtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100"
              >
                {copy.heroCta}
              </Link>
              <Link
                href={caseStudiesHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-[13px] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
              >
                {locale === 'ja' ? '\u5C0E\u5165\u4E8B\u4F8B\u3092\u898B\u308B' : 'View Case Studies'}
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Desktop hero (full-bleed WWT style) ── */}
        <section id="hero-desktop" className="relative hidden h-[500px] overflow-hidden bg-[#02304F] lg:block">
          <div className="absolute inset-0">
            <Image
              src={homePageBannerImage}
              alt={locale === 'ja' ? 'AKRIN \u30DB\u30FC\u30E0\u30D0\u30CA\u30FC' : 'AKRIN home banner'}
              fill
              priority
              unoptimized
              className="object-cover object-[50%_30%]"
            />
          </div>
          {/* Strong left-side gradient: solid dark on the left for text, fading to transparent on right to reveal photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgb(2,48,79) 0%, rgb(2,48,79) 30%, rgba(2,48,79,0.85) 45%, rgba(2,48,79,0.5) 60%, rgba(2,48,79,0.15) 75%, transparent 90%)',
            }}
          />
          <div className="relative flex h-[500px] items-center">
            <div className="mx-auto w-full max-w-[1047px] px-12">
              <div className="max-w-lg xl:max-w-xl">
                <SectionLabel label={locale === 'ja' ? 'マネージドITサービスプロバイダー' : 'Managed IT Service Provider in Japan'} tone="light" />
                <TextReveal
                  text={copy.heroTitle}
                  as="h1"
                  className="font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-white xl:text-[40px]"
                  staggerMs={50}
                />
                <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/70">
                  {copy.heroSubtitle}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href={contactHref}
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                  >
                    {copy.heroCta}
                  </Link>
                  <Link
                    href={caseStudiesHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-[14px] font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                  >
                    {locale === 'ja' ? '\u5C0E\u5165\u4E8B\u4F8B\u3092\u898B\u308B' : 'View Case Studies'}
                    <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionNav
          variant="ribbon"
          ariaLabel="Page sections"
          items={homeSectionNavItems}
        />

        <section id="trust" className="bg-[#F7F7FC] py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0B19]/45">
              {locale === 'ja'
                ? '\u79C1\u305F\u3061\u304C\u9023\u643A\u3059\u308B\u30D1\u30FC\u30C8\u30CA\u30FC\u4F01\u696D'
                : 'Trusted technology partners'}
            </p>
            <div className="marquee mt-10">
              <div className="marquee-track">
                {logoCloud.map((logo) => (
                  <img
                    key={`primary-${logo.name}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={165}
                    height={32}
                    className="h-8 w-auto opacity-70 transition-opacity hover:opacity-100"
                  />
                ))}
                {logoCloud.map((logo) => (
                  <img
                    key={`duplicate-${logo.name}`}
                    src={logo.src}
                    alt=""
                    aria-hidden="true"
                    width={165}
                    height={32}
                    className="h-8 w-auto opacity-70 transition-opacity hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div
          className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent"
          aria-hidden="true"
        />

        {/* CSS Grid wrapper — mirrors Tailwind Plus: [1fr gutter content gutter 1fr] */}
        <div className="grid flex-1 grid-cols-[1fr_var(--gutter-w)_minmax(0,1400px)_var(--gutter-w)_1fr] [--gutter-w:24px] lg:[--gutter-w:40px]">
          {/* Left hatching gutter */}
          <div
            aria-hidden="true"
            className="col-start-2 row-span-full row-start-1 hidden border-x border-[#0A0B19]/[0.08] sm:block"
            style={{ background: 'repeating-linear-gradient(315deg, rgba(10,11,25,0.07) 0px, rgba(10,11,25,0.07) 1px, transparent 0px, transparent 50%)', backgroundSize: '10px 10px', backgroundAttachment: 'fixed' }}
          />
          {/* Right hatching gutter */}
          <div
            aria-hidden="true"
            className="col-start-4 row-span-full row-start-1 hidden border-x border-[#0A0B19]/[0.08] sm:block"
            style={{ background: 'repeating-linear-gradient(315deg, rgba(10,11,25,0.07) 0px, rgba(10,11,25,0.07) 1px, transparent 0px, transparent 50%)', backgroundSize: '10px 10px', backgroundAttachment: 'fixed' }}
          />
          {/* Main content column */}
          <div className="col-start-3">
              <section id="services" className="bg-[#F7F7FC]">
                <RevealOnScroll>
                  <div className="py-12 sm:py-16">
                    <SectionLabel label="CORE SERVICES" tone="cream" />
                    <TextReveal
                      text={copy.servicesTitle}
                      as="h2"
                      className="font-serif text-[24px] font-light leading-[1.1] tracking-[-0.04em] text-[#0A0B19] sm:text-[32px] lg:text-[38px]"
                      staggerMs={55}
                    />
                    <LineGrow className="mt-6 bg-[#0A0B19]/10" />
                    <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-[#0A0B19]/65">
                      {copy.servicesIntro}
                    </p>
                    <div className="mt-16 space-y-10">
                        {copy.services.map((service, idx) => {
                          const hasHighlights = Boolean(service.highlights?.length)
                          const visibleHighlights = service.highlights?.slice(0, 4) ?? []
                          const visual = serviceVisuals[idx % serviceVisuals.length]
                          const isWirelessSurvey = service.href.endsWith('/japan-ekahau-wireless-surveys')
                          const visualClassName = isWirelessSurvey
                            ? 'object-contain object-center p-3 sm:p-4'
                            : 'object-cover'

                          return (
                            <article
                              id={`service-chapter-${idx + 1}`}
                              key={service.href}
                              className="group relative scroll-mt-32 overflow-hidden rounded-3xl bg-white ring-1 ring-[#0A0B19]/10 shadow-sm transition-all duration-300 hover:ring-[#0A0B19]/20 hover:shadow-md"
                            >
                              <div className="grid grid-cols-1 gap-y-10 p-8 sm:p-10 lg:grid-cols-12 lg:gap-x-12 lg:p-12">
                                {/* Left: Main content */}
                                <div className={hasHighlights ? 'lg:col-span-5' : 'lg:col-span-12'}>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <span className="font-mono text-[11px] tracking-[0.15em] text-[#0A0B19]/45">
                                      {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="inline-flex items-center rounded-md border border-[#0A0B19]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#0A0B19]/70">
                                      {service.category}
                                    </span>
                                  </div>
                                  <div aria-hidden="true" className="mt-6 h-px w-full bg-[#0A0B19]/[0.08]" />
                                  <h3 className="mt-7 font-serif text-[28px] font-light leading-[1.1] tracking-[-0.03em] text-[#0A0B19] sm:text-[34px] lg:text-[40px]">
                                    {service.href.endsWith('/itad-japan-apac-us') ? (
                                      <>
                                        <abbr title="IT Asset Disposition">ITAD</abbr> Services in Japan
                                      </>
                                    ) : (
                                      service.title
                                    )}
                                  </h3>
                                  <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-[#0A0B19]/70">
                                    {service.description}
                                  </p>
                                  {!hasHighlights ? (
                                    <div className="mt-7 overflow-hidden rounded-2xl border border-[#0A0B19]/10 bg-[#0A0B19]/5">
                                      <div className="relative aspect-[16/9]">
                                        <Image
                                          src={visual.src}
                                          alt={visual.alt}
                                          fill
                                          sizes="(max-width: 1024px) 100vw, 58vw"
                                          className={visualClassName}
                                        />
                                      </div>
                                    </div>
                                  ) : null}
                                  <div className="mt-9">
                                    <Link
                                      href={service.href}
                                      aria-label={
                                        locale === 'ja'
                                          ? `${service.title}\u306E\u8A73\u7D30\u3092\u898B\u308B`
                                          : `Learn more about ${service.title}`
                                      }
                                      className="inline-flex items-center gap-2 rounded-lg border border-[#0A0B19]/15 bg-white px-5 py-2.5 text-[14px] font-medium text-[#0A0B19] transition-all duration-300 hover:border-[#0A0B19]/25 hover:bg-[#0A0B19]/[0.03]"
                                    >
                                      {locale === 'ja' ? '\u8A73\u7D30\u3092\u898B\u308B' : 'Explore service'}
                                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                    </Link>
                                  </div>
                                </div>

                                {/* Right: Highlights */}
                                {hasHighlights ? (
                                  <div className="lg:col-span-7">
                                    <div className="rounded-2xl border border-[#0A0B19]/10 bg-[#FAFAFC] p-6 sm:p-8">
                                      <div className="overflow-hidden rounded-xl border border-[#0A0B19]/10 bg-[#0A0B19]/5">
                                        <div className="relative aspect-[16/9]">
                                          <Image
                                            src={visual.src}
                                            alt={visual.alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 34vw"
                                            className={visualClassName}
                                          />
                                        </div>
                                      </div>
                                      <h4 className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#0A0B19]/65">
                                        {locale === 'ja' ? '\u5BFE\u5FDC\u5185\u5BB9' : 'What\u2019s included'}
                                      </h4>
                                      <ul className="mt-6 divide-y divide-[#0A0B19]/10">
                                        {visibleHighlights.map((item, hIdx) => (
                                          <li key={`${service.href}-h-${hIdx}`} className="grid grid-cols-[auto_1fr] items-start gap-x-3 py-3 first:pt-0 last:pb-0">
                                            <CheckCircleIcon className="mt-0.5 h-4 w-4 text-[#0A0B19]/45" />
                                            <span className="text-[14px] leading-[1.65] text-[#0A0B19]/75">
                                              {item}
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </article>
                          )
                        })}
                    </div>

                  </div>
                </RevealOnScroll>
              </section>

              <div className="py-4" aria-hidden="true" />

              <section id="why-akrin" className="bg-[#F7F7FC]">
                <RevealOnScroll>
                  <div className="py-10 sm:py-14">
                    <div className="max-w-2xl">
                      <SectionLabel label="WHY AKRIN" tone="cream" />
                      <TextReveal
                        text={copy.whyTitle}
                        as="h2"
                        className="font-serif text-[20px] font-light leading-[1.15] tracking-[-0.04em] text-[#0A0B19] sm:text-[24px] lg:text-[28px]"
                        staggerMs={55}
                      />
                      <p className="mt-3 text-[13px] leading-[1.6] text-[#0A0B19]/65">
                        {copy.whyDescription}
                      </p>
                    </div>

                    {(() => {
                      const features = locale === 'ja'
                        ? [
                            { icon: GlobeAltIcon, title: '\u30D0\u30A4\u30EA\u30F3\u30AC\u30EB\u5BFE\u5FDC', subtitle: '\u30D8\u30EB\u30D7\u30C7\u30B9\u30AF\u3001\u30EC\u30DD\u30FC\u30C8\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3001\u30B9\u30C6\u30FC\u30AF\u30DB\u30EB\u30C0\u30FC\u5BFE\u5FDC\u307E\u3067\u65E5\u82F1\u4E21\u8A9E\u3067\u5B8C\u5168\u30AB\u30D0\u30FC' },
                            { icon: ClockIcon, title: '24\u6642\u9593365\u65E5\u76E3\u8996', subtitle: '\u65E5\u672C\u306E\u795D\u65E5\u3092\u542B\u308024\u6642\u9593\u4F53\u5236\u306E\u76E3\u8996\u3068\u30D7\u30ED\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u30A4\u30F3\u30B7\u30C7\u30F3\u30C8\u5BFE\u5FDC' },
                            { icon: ShieldCheckIcon, title: '\u30B3\u30F3\u30D7\u30E9\u30A4\u30A2\u30F3\u30B9\u5BFE\u5FDC', subtitle: 'APPI\u3001FISC\u3001ISO 27001\u3001GDPR\u3001NIST\u306B\u5BFE\u5FDC\u3057\u305F\u7BA1\u7406\u4F53\u5236\u3068\u76E3\u67FB\u5BFE\u5FDC\u30EC\u30DD\u30FC\u30C6\u30A3\u30F3\u30B0' },
                            { icon: BanknotesIcon, title: '\u30B3\u30B9\u30C8\u4E88\u6E2C\u53EF\u80FD', subtitle: '\u30B5\u30D6\u30B9\u30AF\u30EA\u30D7\u30B7\u30E7\u30F3\u578B\u306E\u30DE\u30CD\u30FC\u30B8\u30C9\u30B5\u30FC\u30D3\u30B9\u3067\u6700\u590730%\u306E\u30B3\u30B9\u30C8\u524A\u6E1B' },
                            { icon: MapPinIcon, title: '\u5F53\u65E5\u30AA\u30F3\u30B5\u30A4\u30C8\u5BFE\u5FDC', subtitle: '\u6771\u4EAC\u62E0\u70B9\u306E\u30D0\u30A4\u30EA\u30F3\u30AC\u30EB\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u95A2\u6771\u570F\u3067\u5F53\u65E5\u5BFE\u5FDC\u3001\u5168\u56FD\u3078\u306E\u8FC5\u901F\u6D3E\u9063\u3082\u53EF\u80FD' },
                            { icon: ArrowPathRoundedSquareIcon, title: '\u30EF\u30F3\u30B9\u30C8\u30C3\u30D7IT\u30D1\u30FC\u30C8\u30CA\u30FC', subtitle: '\u8ABF\u9054\u30FB\u5C0E\u5165\u304B\u3089\u30DE\u30CD\u30FC\u30B8\u30C9\u30B5\u30DD\u30FC\u30C8\u3001\u8A8D\u5B9A\u6E08\u307F\u5EC3\u68C4\u307E\u3067IT\u30E9\u30A4\u30D5\u30B5\u30A4\u30AF\u30EB\u5168\u4F53\u3092\u30AB\u30D0\u30FC' },
                          ]
                        : [
                            { icon: GlobeAltIcon, title: 'Native Japanese & English Support', subtitle: 'End-to-end bilingual coverage across helpdesk, reporting, documentation, and stakeholder communication.' },
                            { icon: ClockIcon, title: '24/7 Monitoring with Guaranteed SLA', subtitle: 'Round-the-clock monitoring and proactive incident response including Japanese holidays.' },
                            { icon: ShieldCheckIcon, title: 'NIST, ISO 27001, APPI & GDPR Aligned', subtitle: 'Documented controls and audit-ready reporting designed for regulated industries in Japan.' },
                            { icon: BanknotesIcon, title: 'Up to 30% Cost Savings', subtitle: 'Subscription-based managed services with predictable monthly billing and no surprise costs.' },
                            { icon: MapPinIcon, title: 'Same-Day Tokyo Response', subtitle: 'Tokyo-based bilingual engineers available for same-day Kanto deployment and rapid nationwide dispatch.' },
                            { icon: ArrowPathRoundedSquareIcon, title: 'Full IT Lifecycle Coverage', subtitle: 'From procurement and deployment to managed support and certified end-of-life disposition.' },
                          ]

                      return (
                        <StaggeredReveal className="mt-10 grid max-w-2xl grid-cols-1 gap-8 text-[14px] leading-[1.6] text-[#6B6D7C] sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-x-16" staggerMs={90} variant="clip-up">
                          {features.map((feature, featureIdx) => (
                            <StaggerItem
                              key={feature.title}
                              index={featureIdx}
                            >
                              <div className="relative pl-8">
                                <dt className="inline text-[14px] font-semibold text-[#0A0B19]">
                                  <feature.icon aria-hidden="true" className="absolute top-0.5 left-0 h-5 w-5 stroke-[1.5] text-[#0066CC]" />
                                  {feature.title}
                                </dt>{' '}
                                <dd className="inline">{feature.subtitle}</dd>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggeredReveal>
                      )
                    })()}
                  </div>
                </RevealOnScroll>
              </section>

              <div className="py-4" aria-hidden="true" />

              <section id="case-studies" className="bg-[#F7F7FC]">
                <RevealOnScroll>
                  <div className="py-10 sm:py-14">
                    <SectionLabel label="CASE STUDIES" tone="cream" />
                    <TextReveal
                      text={copy.caseStudiesTitle}
                      as="h2"
                      className="font-serif text-[20px] font-light leading-[1.1] tracking-[-0.04em] text-[#0A0B19] sm:text-[24px] lg:text-[28px]"
                      staggerMs={55}
                    />
                    <StaggeredReveal className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerMs={100} variant="slide-left">
                      {copy.caseStudies.map((study, studyIdx) => (
                        <StaggerItem key={study.href} index={studyIdx}>
                          <HomeCaseStudyParallaxCard study={study} studyIdx={studyIdx} locale={locale} />
                        </StaggerItem>
                      ))}
                    </StaggeredReveal>
                  </div>
                </RevealOnScroll>
              </section>

              <div
                className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent"
                aria-hidden="true"
              />

              <section id="expertise" className="bg-[#F7F7FC]">
                <RevealOnScroll>
                  <div className="py-10 sm:py-14">
                    <SectionLabel label="INDUSTRY EXPERTISE" tone="cream" />
                    <TextReveal
                      text={copy.industryTitle}
                      as="h2"
                      className="font-serif text-[20px] font-light leading-[1.1] tracking-[-0.04em] text-[#0A0B19] sm:text-[24px] lg:text-[28px]"
                      staggerMs={55}
                    />
                    <p className="mt-3 max-w-3xl text-[13px] leading-[1.6] text-[#0A0B19]/65">
                      {copy.industryDescription}
                    </p>

                    <StaggeredReveal className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#0A0B19]/[0.06] bg-[#0A0B19]/[0.06] lg:grid-cols-4" staggerMs={120} variant="clip-up">
                      {copy.industries.map((industry, industryIdx) => (
                        <StaggerItem key={industry.sector} index={industryIdx}>
                          <div className="flex h-full flex-col bg-[#F7F7FC] p-5 sm:p-6">
                            <NumberRoll
                              value={industry.pct}
                              suffix="%"
                              className="font-serif text-[32px] font-light leading-[1] tracking-[-0.04em] text-[#0A0B19]"
                            />
                            <span className="mt-2 text-[12px] leading-[1.5] text-[#0A0B19]/60">
                              {industry.sector}
                            </span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggeredReveal>
                  </div>
                </RevealOnScroll>
              </section>

              <div
                className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent"
                aria-hidden="true"
              />

              <section id="faq" className="bg-[#F7F7FC]">
                <RevealOnScroll>
                  <div className="py-10 sm:py-14">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                      <div className="lg:col-span-5">
                        <SectionLabel label="FAQ" tone="cream" />
                        <TextReveal
                          text={copy.faqTitle}
                          as="h2"
                          className="font-serif text-[20px] font-light leading-[1.1] tracking-[-0.04em] text-[#0A0B19] sm:text-[28px]"
                          staggerMs={55}
                        />
                        <p className="mt-4 text-base/7 text-[#0A0B19]/70">
                          {locale === 'ja' ? (
                            <>
                              探している回答が見つからない場合は、{' '}
                              <Link
                                href={contactHref}
                                className="font-semibold text-[#0A0B19] hover:text-[#0A0B19]/80"
                              >
                                サポートチーム
                              </Link>{' '}
                              までお問い合わせください。
                            </>
                          ) : (
                            <>
                              Can&apos;t find the answer you&apos;re looking for? Reach
                              out to our{' '}
                              <Link
                                href={contactHref}
                                className="font-semibold text-[#0A0B19] hover:text-[#0A0B19]/80"
                              >
                                customer support
                              </Link>{' '}
                              team.
                            </>
                          )}
                        </p>
                      </div>
                      <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="divide-y divide-[#0A0B19]/[0.06]">
                          {copy.faqs.map((faq, faqIdx) => (
                            <div key={faq.q} className="py-5 first:pt-0 last:pb-0">
                              <dt className="flex items-start gap-3">
                                <span className="font-mono text-[10px] tracking-[0.15em] text-[#0A0B19]/30">
                                  {String(faqIdx + 1).padStart(2, '0')}
                                </span>
                                <span className="font-serif text-[15px] font-light leading-[1.3] tracking-[-0.02em] text-[#0A0B19]">
                                  {faq.q}
                                </span>
                              </dt>
                              <dd className="mt-2 pl-8 text-[13px] leading-[1.6] text-[#0A0B19]/60">
                                {faq.a}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </section>
          </div>
        </div>

        <section className="bg-[#F7F7FC]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0B19]/45">
              {copy.insightsTitle}
            </p>
            <nav aria-label={copy.insightsTitle} className="mt-6 divide-y divide-[#0A0B19]/[0.06]">
              {copy.insights.map((insight, idx) => (
                <Link
                  key={insight.href}
                  href={insight.href}
                  className="group flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-[#0A0B19]/25">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-[#0A0B19] transition-colors group-hover:text-[#0A0B19]/70">
                      {insight.title}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#0A0B19]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#0A0B19]/50">
                    {insight.category}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <div
          className="h-px bg-gradient-to-r from-transparent via-[#0A0B19]/[0.05] to-transparent"
          aria-hidden="true"
        />

        <section id="cta" className="bg-[#F7F7FC]">
          <div className="px-6 py-8 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="relative overflow-hidden rounded-2xl bg-[#0A0B19] px-6 py-10 sm:px-12 sm:py-14 lg:rounded-3xl lg:py-16">
                {/* Subtle radial gradient for depth */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,_transparent_60%)]"
                />
                {/* Corner brackets */}
                <div className="pointer-events-none absolute top-6 left-6 h-6 w-6 border-t border-l border-white/10 sm:top-8 sm:left-8" aria-hidden="true" />
                <div className="pointer-events-none absolute top-6 right-6 h-6 w-6 border-t border-r border-white/10 sm:top-8 sm:right-8" aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-6 left-6 h-6 w-6 border-b border-l border-white/10 sm:bottom-8 sm:left-8" aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-b border-r border-white/10 sm:bottom-8 sm:right-8" aria-hidden="true" />
                <div className="relative text-center">
                  <TextReveal
                    text={copy.ctaTitle}
                    as="h2"
                    className="mx-auto max-w-3xl font-serif text-[22px] font-light leading-[1.15] tracking-[-0.04em] text-white sm:text-[28px] lg:text-[34px]"
                    staggerMs={55}
                  />
                  <p className="mx-auto mt-3 max-w-xl text-[13px] leading-[1.6] text-white/45">
                    {copy.ctaDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href={contactHref}
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0A0B19] transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                    >
                      {copy.ctaButton}
                    </Link>
                    <Link
                      href={servicesHref}
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:text-white"
                    >
                      {locale === 'ja' ? '\u30B5\u30FC\u30D3\u30B9\u4E00\u89A7' : 'View Our Services'}
                      <span aria-hidden="true" className="ml-2">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
