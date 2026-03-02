'use client'

import Image from 'next/image'
import { Link } from '@/components/link'

type CaseStudy = {
  title: string
  summary: string
  href: string
  image?: string
}

type Props = {
  study: CaseStudy
  studyIdx: number
  locale: 'en' | 'ja'
}

export function HomeCaseStudyParallaxCard({ study, studyIdx, locale }: Props) {
  return (
    <Link href={study.href} className="group">
      {/* Thumbnail card */}
      <div className="relative overflow-hidden rounded-lg border border-[#E2E5EF] bg-white transition-colors duration-200 group-hover:border-[#0066CC]/30">
        {study.image ? (
          <div className="relative aspect-[16/10]">
            <Image
              alt={study.title}
              src={study.image}
              fill
              loading="lazy"
              quality={70}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="aspect-[16/10] bg-[#F7F7FC]" />
        )}
      </div>
      {/* Title + summary below card */}
      <h3 className="mt-3 text-[14px] font-medium leading-[1.3] text-[#0A0B19] sm:text-[15px]">
        {locale === 'en' && study.href === '/case-studies/managed-it-services-cpg-tokyo' ? (
          <>
            Managed IT for <abbr title="Consumer Packaged Goods">CPG</abbr> (Tokyo)
          </>
        ) : (
          study.title
        )}
      </h3>
      <p className="mt-1 text-[12px] leading-[1.5] text-[#6B6D7C] sm:text-[13px]">
        {study.summary}
      </p>
    </Link>
  )
}
