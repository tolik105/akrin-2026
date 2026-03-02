'use client'

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from 'react'
import { clsx } from 'clsx'
import {
  motion,
  useInView,
  type Variant,
} from 'framer-motion'

/* ─────────────────────────────────────────────────────────────
   SPRING CONFIGS  –  matching fin.ai's Framer Motion feel
   ───────────────────────────────────────────────────────────── */

const SPRING_SMOOTH = { type: 'spring' as const, stiffness: 80, damping: 20, mass: 0.8 }
const SPRING_SNAPPY = { type: 'spring' as const, stiffness: 120, damping: 24, mass: 0.6 }

/* ─────────────────────────────────────────────────────────────
   1.  STAGGERED REVEAL  –  Framer Motion orchestrated container
   ───────────────────────────────────────────────────────────── */

type RevealVariant = 'blur-scale' | 'fade-up' | 'clip-up' | 'slide-left' | 'slide-right'

const variantMap: Record<RevealVariant, { hidden: Variant; visible: Variant }> = {
  'blur-scale': {
    hidden: { opacity: 0, filter: 'blur(10px)', scale: 0.95, y: 12 },
    visible: { opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 },
  },
  'fade-up': {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  'clip-up': {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
}

export function StaggeredReveal({
  children,
  className,
  staggerMs = 80,
  as = 'div',
  variant = 'blur-scale',
  threshold = 0.12,
}: {
  children: ReactNode
  className?: string
  staggerMs?: number
  as?: 'div' | 'ul' | 'ol' | 'dl'
  variant?: RevealVariant
  threshold?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold, margin: '0px 0px -40px 0px' })
  const Tag = motion[as]

  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerMs / 1000,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {children}
    </Tag>
  )
}

/* ─────────────────────────────────────────────────────────────
   2.  STAGGER ITEM  –  individual animated child
   ───────────────────────────────────────────────────────────── */

export function StaggerItem({
  children,
  className,
  index,
  as = 'div',
  variant = 'blur-scale',
}: {
  children: ReactNode
  className?: string
  index: number
  as?: 'div' | 'li' | 'article' | 'dd' | 'dt'
  variant?: RevealVariant
}) {
  const Tag = motion[as]
  const v = variantMap[variant]

  return (
    <Tag
      className={className}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: SPRING_SMOOTH,
        },
      }}
    >
      {children}
    </Tag>
  )
}

/* ─────────────────────────────────────────────────────────────
   3.  TEXT REVEAL  –  word-by-word mask animation (like fin.ai)
       Each word slides up from behind a clip mask with spring physics.
   ───────────────────────────────────────────────────────────── */

export function TextReveal({
  text,
  as: Tag = 'h2',
  className,
  staggerMs = 45,
  threshold = 0.3,
}: {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  staggerMs?: number
  threshold?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: threshold,
    margin: '0px 0px -20px 0px',
  })

  const words = text.split(' ')

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={clsx(className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.08em]"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : { y: '110%' }}
            transition={{
              ...SPRING_SNAPPY,
              delay: i * (staggerMs / 1000),
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  )
}

/* ─────────────────────────────────────────────────────────────
   4.  LINE GROW  –  decorative line that animates width on scroll
   ───────────────────────────────────────────────────────────── */

export function LineGrow({
  className,
  direction = 'right',
}: {
  className?: string
  direction?: 'right' | 'left'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={clsx('h-px', direction === 'left' && 'ml-auto', className)}
      initial={{ width: '0%' }}
      animate={isInView ? { width: '100%' } : { width: '0%' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: direction === 'left' ? 'right' : 'left' }}
    />
  )
}

/* ─────────────────────────────────────────────────────────────
   5.  NUMBER ROLL  –  counter with spring physics
   ───────────────────────────────────────────────────────────── */

export function NumberRoll({
  value,
  suffix = '',
  className,
}: {
  value: number
  suffix?: string
  className?: string
}) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const duration = 1800
    const steps = 60
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current++
      const progress = current / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(eased * value))

      if (current >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [hasStarted, value])

  return (
    <span ref={containerRef} className={clsx('tabular-nums', className)}>
      {displayValue}
      {suffix}
    </span>
  )
}

/* ─────────────────────────────────────────────────────────────
   6.  FADE IN  –  simple single-element reveal with spring
   ───────────────────────────────────────────────────────────── */

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15, margin: '0px 0px -40px 0px' })

  const dirMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...dirMap[direction] }}
      transition={{ ...SPRING_SMOOTH, delay }}
    >
      {children}
    </motion.div>
  )
}
