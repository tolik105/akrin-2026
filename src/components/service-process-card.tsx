'use client'

import { motion } from 'framer-motion'

interface ServiceProcessCardProps {
  step: number
  title: string
  description: string
  index?: number
}

export function ServiceProcessCard({
  step,
  title,
  description,
  index = 0,
}: ServiceProcessCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#20B2AA] text-sm font-bold text-white">
          {step}
        </span>
        <h3 className="text-lg font-semibold text-[#2C2C2C]">{title}</h3>
      </div>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </motion.article>
  )
}
