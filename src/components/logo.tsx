'use client'

import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 125 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'w-auto')}
    >
      {/* Teal triangle shape */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.383 26.821H21.226L14.1175 39.037H0.499L7.383 26.821Z"
        fill="#3462BD"
        fillOpacity="0.9"
      />
      {/* Black A shape */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.75 0.4875L44.049 38.964H28.4845L13.968 14.0935L21.75 0.4875Z"
        fill="currentColor"
      />
      {/* KRIN text */}
      <path
        d="M49.483 39.78V16.508H55.8015V25.917H56.1195L63.1195 16.508H70.483L62.6195 26.8715L70.665 39.78H63.1195L57.8925 31.053L55.8015 33.78V39.78H49.483ZM72.358 39.78V16.508H82.4035C84.131 16.508 85.6425 16.822 86.938 17.451C88.2335 18.0795 89.241 18.985 89.9605 20.167C90.68 21.3485 91.04 22.7655 91.04 24.417C91.04 26.0835 90.669 27.489 89.9265 28.633C89.1915 29.7765 88.1575 30.6405 86.824 31.2235C85.4985 31.807 83.949 32.0985 82.1765 32.0985H76.1765V27.1895H80.9035C81.646 27.1895 82.2785 27.0985 82.8015 26.917C83.3315 26.7275 83.737 26.428 84.0175 26.019C84.305 25.61 84.449 25.076 84.449 24.417C84.449 23.75 84.305 23.2085 84.0175 22.792C83.737 22.3675 83.3315 22.057 82.8015 21.86C82.2785 21.6555 81.646 21.553 80.9035 21.553H78.6765V39.78H72.358ZM85.9945 29.0985L91.813 39.78H84.949L79.2675 29.0985H85.9945ZM100.052 16.508V39.78H93.733V16.508H100.052ZM123.182 16.508V39.78H117.91L109.501 27.553H109.364V39.78H103.046V16.508H108.41L116.682 28.6895H116.864V16.508H123.182Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Teal triangle shape */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.383 26.821H21.226L14.1175 39.037H0.499L7.383 26.821Z"
        fill="#3462BD"
        fillOpacity="0.9"
      />
      {/* Black A shape */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.75 0.4875L44.049 38.964H28.4845L13.968 14.0935L21.75 0.4875Z"
        fill="currentColor"
      />
    </svg>
  )
}
