"use client"

import { ReactNode } from "react"
import { ShineBorder } from "./shine-border"

interface ShineButtonProps {
  children: ReactNode
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: string | string[]
  className?: string
}

export function ShineButton({
  children,
  borderRadius = 8,
  borderWidth = 2,
  duration = 8,
  color = "hsl(var(--primary))",
  className,
}: ShineButtonProps) {
  return (
    <ShineBorder
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      duration={duration}
      color={color}
      className={`min-w-0 ${className || ""}`}
    >
      {children}
    </ShineBorder>
  )
}
