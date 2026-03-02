import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#0a4d7a] from-28% via-[#0e7490] via-70% to-[#155e75] sm:bg-linear-145',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-linear-115 from-[#0a4d7a] from-28% via-[#0e7490] via-70% to-[#155e75]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}

/** Radiant-style blurred glow orbs for the hero section */
export function HeroGradientOrbs({ className }: { className?: string }) {
  return (
    <div className={clsx('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {/* Primary teal orb — top right */}
      <div
        className="absolute -top-24 -right-32 h-[420px] w-[600px] rotate-[-10deg] rounded-full opacity-40 blur-3xl transform-gpu lg:h-[500px] lg:w-[800px]"
        style={{
          background: 'linear-gradient(115deg, #0d9488 28%, #0891b2 70%, #0284c7 100%)',
        }}
      />
      {/* Secondary blue orb — bottom left */}
      <div
        className="absolute -bottom-32 -left-24 h-[350px] w-[500px] rotate-[8deg] rounded-full opacity-30 blur-3xl transform-gpu lg:h-[400px] lg:w-[650px]"
        style={{
          background: 'linear-gradient(135deg, #0369a1 20%, #0e7490 60%, #14b8a6 100%)',
        }}
      />
      {/* Subtle center accent */}
      <div
        className="absolute top-1/2 left-1/3 hidden h-[200px] w-[400px] -translate-y-1/2 rounded-full opacity-20 blur-3xl transform-gpu lg:block"
        style={{
          background: 'radial-gradient(ellipse, #06b6d4 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
