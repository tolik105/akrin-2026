"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface PremiumCTAProps {
  variant?: "teal" | "dark" | "neutral";
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
  backgroundImage?: string;
}

const variantStyles = {
  teal: {
    background: "bg-gradient-to-br from-[#0A0B19] via-[#0B1F3A] to-[#0A0B19]",
    button: "bg-[#0066CC] text-white hover:bg-[#0052A3]",
    arrow: "text-white"
  },
  dark: {
    background: "bg-gradient-to-br from-[#0A0B19] to-[#1A1B2E]",
    button: "bg-white text-[#0A0B19] hover:bg-gray-100",
    arrow: "text-[#0A0B19]"
  },
  neutral: {
    background: "bg-gradient-to-br from-[#0B1F3A] to-[#0A0B19]",
    button: "bg-[#0066CC] text-white hover:bg-[#0052A3]",
    arrow: "text-white"
  }
};

export function PremiumCTA({
  variant = "dark",
  title,
  description,
  buttonText,
  buttonHref,
  className,
  backgroundImage
}: PremiumCTAProps) {
  const styles = variantStyles[variant];

  return (
    <section className={cn(
      "w-full my-12 md:my-20 relative z-20 max-w-7xl mx-auto sm:rounded-2xl overflow-hidden",
      !backgroundImage && styles.background,
      className
    )}>
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0B19]/80 to-[#0A0B19]/80"></div>
        </div>
      )}

      {/* Premium Gradient Lines - Top */}
      <div className="absolute -top-px right-10 md:right-60 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] h-px to-transparent w-1/2 z-30"></div>
      <div className="absolute -top-px right-10 md:right-40 bg-gradient-to-r from-transparent via-[#0A0B19] h-px to-transparent w-1/2 z-30"></div>
      <div className="absolute -top-px right-10 md:right-80 bg-gradient-to-r from-transparent via-sky-500 h-px to-transparent w-1/2 z-30"></div>

      {/* Noise Background Pattern */}
      <div
        className="absolute inset-0 w-full h-full opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
        }}
      ></div>
      
      {/* Content Container */}
      <div className="relative px-6 md:px-8 z-10">
        <div className="relative px-0 py-10 sm:px-10 sm:py-12 lg:px-10 text-center z-20">
          <h2 className="text-center text-balance text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-center text-base md:text-lg text-neutral-200 leading-relaxed">
            {description}
          </p>

          <Link
            href={buttonHref}
            className={cn(
              "mt-6 inline-flex space-x-2 items-center group text-sm font-semibold px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200",
              styles.button
            )}
          >
            <span>{buttonText}</span>
            <svg 
              className={cn(
                "group-hover:translate-x-1 h-4 w-4 transition-transform duration-200",
                styles.arrow
              )} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Premium Gradient Lines - Bottom */}
      <div className="absolute -bottom-px right-10 md:right-60 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] h-px to-transparent w-1/2 z-30"></div>
      <div className="absolute -bottom-px right-10 md:right-40 bg-gradient-to-r from-transparent via-[#0A0B19] h-px to-transparent w-1/2 z-30"></div>
      <div className="absolute -bottom-px right-10 md:right-80 bg-gradient-to-r from-transparent via-sky-500 h-px to-transparent w-1/2 z-30"></div>
    </section>
  );
}
