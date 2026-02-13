'use client'

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState, type FormEvent } from 'react'

type ContactLocale = 'en' | 'ja'

const contactCopy = {
  en: {
    heading: 'Get in touch',
    description:
      "Have a project in mind or need IT consulting expertise? We'd love to hear from you. Reach out to our team and let's discuss how AKRIN can help your business grow.",
    success: "Thank you for reaching out! We'll get back to you soon.",
    fallbackError: 'Something went wrong. Please try again.',
    networkError: 'Network error. Please check your connection and try again.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone number',
    message: 'Message',
    sending: 'Sending...',
    submit: 'Send message',
    srAddress: 'Address',
    srPhone: 'Telephone',
    srEmail: 'Email',
  },
  ja: {
    heading: 'お問い合わせ',
    description:
      'IT課題のご相談、プロジェクトのご依頼、運用改善のご要望などお気軽にご連絡ください。AKRINのチームが最適な進め方をご提案します。',
    success: 'お問い合わせありがとうございます。担当者より順次ご連絡します。',
    fallbackError: '送信に失敗しました。時間をおいて再度お試しください。',
    networkError:
      'ネットワークエラーが発生しました。接続を確認して再度お試しください。',
    firstName: '名',
    lastName: '姓',
    email: 'メールアドレス',
    phone: '電話番号',
    message: 'お問い合わせ内容',
    sending: '送信中...',
    submit: '送信する',
    srAddress: '住所',
    srPhone: '電話番号',
    srEmail: 'メール',
  },
} as const

export function ContactSection({ locale = 'en' }: { locale?: ContactLocale }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const copy = contactCopy[locale]

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone-number') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || copy.fallbackError)
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage(copy.networkError)
    }
  }

  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="contact-pattern"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#contact-pattern)" width="100%" height="100%" strokeWidth={0} />
              </svg>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              {copy.heading}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              {copy.description}
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{copy.srAddress}</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  〒107-0062 Tokyo, Minato City
                  <br />
                  Minami Aoyama 2-4-15 4F
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{copy.srPhone}</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+81-3-6821-1223" className="hover:text-gray-900">
                    +81-3-6821-1223
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{copy.srEmail}</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:support@akrin.jp" className="hover:text-gray-900">
                    support@akrin.jp
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            {/* Success message */}
            {status === 'success' && (
              <div className="mb-6 rounded-md bg-[#FAFAF7] p-4">
                <p className="text-sm font-medium text-[#17100E]/80">
                  {copy.success}
                </p>
              </div>
            )}

            {/* Error message */}
            {status === 'error' && (
              <div className="mb-6 rounded-md bg-red-50 p-4">
                <p className="text-sm font-medium text-red-800">{errorMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                  {copy.firstName}
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#3462BD] focus:outline-none focus:ring-2 focus:ring-[#3462BD]/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                  {copy.lastName}
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#3462BD] focus:outline-none focus:ring-2 focus:ring-[#3462BD]/30"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  {copy.email}
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#3462BD] focus:outline-none focus:ring-2 focus:ring-[#3462BD]/30"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                  {copy.phone}
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#3462BD] focus:outline-none focus:ring-2 focus:ring-[#3462BD]/30"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                  {copy.message}
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#3462BD] focus:outline-none focus:ring-2 focus:ring-[#3462BD]/30"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-md bg-[#17100E] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#2A2523] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17100E] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'loading' ? copy.sending : copy.submit}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
