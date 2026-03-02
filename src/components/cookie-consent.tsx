'use client'

import { useEffect, useState } from 'react'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import '@/styles/cookie-consent.css'

/**
 * CookieConsent component using vanilla-cookieconsent (v3).
 * Handles GDPR/APPI compliant cookie consent with bilingual support (EN/JA).
 * Blocks GA4 and other analytics cookies until the user provides consent.
 */
export function CookieConsent() {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    // Detect language from URL path
    const isJapanese = window.location.pathname.startsWith('/ja')
    setLang(isJapanese ? 'ja' : 'en')

    const initConsent = async () => {
      const { run, acceptedCategory } = await import('vanilla-cookieconsent')

      // Set default Google Consent Mode to denied
      window.dataLayer = window.dataLayer || []
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }
      gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted',
      })

      run({
        guiOptions: {
          consentModal: {
            layout: 'box inline',
            position: 'bottom left',
          },
          preferencesModal: {
            layout: 'box',
          },
        },

        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {
            autoClear: {
              cookies: [
                { name: /^_ga/ },
                { name: '_gid' },
                { name: '_gat' },
              ],
            },
            services: {
              ga4: {
                label: 'Google Analytics 4',
                onAccept: () => {
                  // Update Google Consent Mode
                  gtag('consent', 'update', {
                    analytics_storage: 'granted',
                  })

                  // Load GA4 script if not already loaded
                  if (!document.querySelector('script[src*="googletagmanager.com/gtag"]')) {
                    const script = document.createElement('script')
                    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6YTE9HVKEE'
                    script.async = true
                    document.head.appendChild(script)

                    script.onload = () => {
                      gtag('js', new Date())
                      gtag('config', 'G-6YTE9HVKEE', {
                        cookie_domain: 'akrin.jp',
                      })
                    }
                  }
                },
                onReject: () => {
                  gtag('consent', 'update', {
                    analytics_storage: 'denied',
                  })
                },
              },
            },
          },
          functionality: {
            enabled: false,
            readOnly: false,
          },
        },

        language: {
          default: isJapanese ? 'ja' : 'en',
          autoDetect: 'document',
          translations: {
            en: {
              consentModal: {
                title: 'We use cookies',
                description:
                  'We use cookies to analyze website traffic and improve your experience. You can choose which cookies to allow. For details, see our <a href="/cookies">Cookie Policy</a>.',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                showPreferencesBtn: 'Manage preferences',
              },
              preferencesModal: {
                title: 'Cookie Preferences',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                savePreferencesBtn: 'Save preferences',
                closeIconLabel: 'Close',
                sections: [
                  {
                    title: 'Cookie Usage',
                    description:
                      'We use cookies to ensure the basic functionality of the website and to enhance your online experience. You can choose to opt in or out of each category whenever you want. For more details about cookies and personal data, please read our <a href="/privacy">Privacy Policy</a>.',
                  },
                  {
                    title: 'Strictly Necessary Cookies',
                    description:
                      'These cookies are essential for the website to function properly. They enable basic features like page navigation and security. The website cannot function without these cookies.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Analytics Cookies',
                    description:
                      'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics 4 for this purpose.',
                    linkedCategory: 'analytics',
                    cookieTable: {
                      headers: {
                        name: 'Name',
                        domain: 'Provider',
                        description: 'Description',
                        expiration: 'Expiration',
                      },
                      body: [
                        {
                          name: '_ga',
                          domain: 'Google Analytics',
                          description: 'Distinguishes unique users by assigning a randomly generated ID.',
                          expiration: '2 years',
                        },
                        {
                          name: '_ga_*',
                          domain: 'Google Analytics',
                          description: 'Maintains session state and tracks interactions across pages.',
                          expiration: '2 years',
                        },
                        {
                          name: '_gid',
                          domain: 'Google Analytics',
                          description: 'Stores a unique value for each page visited to count pageviews.',
                          expiration: '24 hours',
                        },
                      ],
                    },
                  },
                  {
                    title: 'Functional Cookies',
                    description:
                      'These cookies remember your preferences such as language selection and display settings to enhance your experience.',
                    linkedCategory: 'functionality',
                  },
                  {
                    title: 'More Information',
                    description:
                      'For questions about our cookie policy, please <a href="/contact">contact us</a>.',
                  },
                ],
              },
            },
            ja: {
              consentModal: {
                title: 'Cookieの使用について',
                description:
                  '当サイトでは、ウェブサイトのトラフィック分析やユーザー体験の向上のためにCookieを使用しています。許可するCookieを選択できます。詳細は<a href="/ja/cookies">Cookieポリシー</a>をご覧ください。',
                acceptAllBtn: 'すべて許可',
                acceptNecessaryBtn: 'すべて拒否',
                showPreferencesBtn: '設定を管理',
              },
              preferencesModal: {
                title: 'Cookieの設定',
                acceptAllBtn: 'すべて許可',
                acceptNecessaryBtn: 'すべて拒否',
                savePreferencesBtn: '設定を保存',
                closeIconLabel: '閉じる',
                sections: [
                  {
                    title: 'Cookieの利用について',
                    description:
                      '当サイトでは、基本的な機能の確保とオンライン体験の向上のためにCookieを使用しています。各カテゴリのCookieをいつでもオプトインまたはオプトアウトできます。Cookieと個人データの詳細については、<a href="/ja/privacy">プライバシーポリシー</a>をご覧ください。',
                  },
                  {
                    title: '必須Cookie',
                    description:
                      'これらのCookieは、ウェブサイトが正常に機能するために不可欠です。ページナビゲーションやセキュリティなどの基本機能を有効にします。これらのCookieなしではウェブサイトは機能しません。',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: '分析Cookie',
                    description:
                      'これらのCookieは、匿名で情報を収集・報告することにより、訪問者がウェブサイトとどのようにやり取りしているかを理解するのに役立ちます。この目的のためにGoogle Analytics 4を使用しています。',
                    linkedCategory: 'analytics',
                    cookieTable: {
                      headers: {
                        name: '名前',
                        domain: 'プロバイダー',
                        description: '説明',
                        expiration: '有効期限',
                      },
                      body: [
                        {
                          name: '_ga',
                          domain: 'Google Analytics',
                          description: 'ランダムに生成されたIDを割り当てて、ユニークユーザーを区別します。',
                          expiration: '2年間',
                        },
                        {
                          name: '_ga_*',
                          domain: 'Google Analytics',
                          description: 'セッション状態を維持し、ページ間のインタラクションを追跡します。',
                          expiration: '2年間',
                        },
                        {
                          name: '_gid',
                          domain: 'Google Analytics',
                          description: '訪問したページごとに一意の値を保存し、ページビューをカウントします。',
                          expiration: '24時間',
                        },
                      ],
                    },
                  },
                  {
                    title: '機能Cookie',
                    description:
                      'これらのCookieは、言語選択や表示設定などの設定を記憶し、ユーザー体験を向上させます。',
                    linkedCategory: 'functionality',
                  },
                  {
                    title: '詳細情報',
                    description:
                      'Cookieポリシーに関するご質問は、<a href="/ja/contact">お問い合わせ</a>ください。',
                  },
                ],
              },
            },
          },
        },
      })
    }

    initConsent()
  }, [])

  return null // The library renders its own UI
}

// Extend Window type for dataLayer
declare global {
  interface Window {
    dataLayer: unknown[]
  }
}
