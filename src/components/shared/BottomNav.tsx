'use client'

import React from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { Home, Search, Calendar, User } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BottomNav() {
  const params = useParams()
  const pathname = usePathname()
  
  const lang = (params?.lang as string) || 'en'
  const location = (params?.location as string) || 'jp'

  const navItems = [
    {
      label: 'Home',
      icon: Home,
      href: `/${lang}/${location}`,
    },
    {
      label: 'Explore',
      icon: Search,
      href: `/${lang}/${location}/search`,
    },
    {
      label: 'Bookings',
      icon: Calendar,
      href: `/${lang}/${location}/bookings`, // Giả định đường dẫn
    },
    {
      label: 'Profile',
      icon: User,
      href: '/login', // Giả định đường dẫn hoặc modal
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block md:hidden">
      <div className="bg-background/80 backdrop-blur-xl border-t border-border/40 pb-[env(safe-area-inset-bottom)] px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-200",
                  isActive ? "text-primary scale-110" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "fill-current/10")} />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute top-0 w-8 h-1 bg-primary rounded-b-full shadow-[0_0_10px_rgba(142,74,231,0.5)]" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
