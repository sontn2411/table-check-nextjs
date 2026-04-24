import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Danh sách các SVG đặc biệt không có trong lucide-react.
 * Bạn có thể thêm các mã SVG mới vào đây.
 */
export const ICONS_MAP = {
  // Ví dụ: Logo TableCheck đặc biệt hoặc các icon custom khác
  'table-check-mini': (
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  ),
  // Bạn hãy dán mã SVG của bạn vào đây dưới dạng <path /> hoặc các element SVG
} as const

export type IconName = keyof typeof ICONS_MAP

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number | string
  className?: string
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const iconContent = ICONS_MAP[name]

  if (!iconContent) {
    console.warn(`Icon "${name}" does not exist in ICONS_MAP`)
    return null
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block shrink-0', className)}
      {...props}
    >
      {iconContent}
    </svg>
  )
}
