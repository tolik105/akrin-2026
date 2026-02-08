'use client'

import dynamic from 'next/dynamic'
import { type ComponentProps } from 'react'

const RiveComponent = dynamic(
  () => import('@rive-app/react-canvas'),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-16 w-16 animate-pulse rounded-full bg-gray-200/50" />
      </div>
    ),
  },
)

type RiveAnimationProps = {
  src: string
  artboard?: string
  animations?: string | string[]
  stateMachines?: string | string[]
  className?: string
} & Omit<ComponentProps<'canvas'>, 'ref'>

export function RiveAnimation({
  src,
  artboard,
  animations,
  stateMachines,
  className,
  ...rest
}: RiveAnimationProps) {
  return (
    <div className={className}>
      <RiveComponent
        src={src}
        artboard={artboard}
        animations={animations}
        stateMachines={stateMachines}
        shouldResizeCanvasToContainer
        {...rest}
      />
    </div>
  )
}

