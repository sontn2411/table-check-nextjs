'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import logoLight from '@/assets/images/logo/logo-light.svg'

import { MapPin, Globe, HelpCircle, Building2 } from 'lucide-react'
import { SettingsModal } from './SettingsModal'
import { cn } from '@/lib/utils'

export function Header() {
  // Logic theo dõi trạng thái cuộn
  const [isScrolled, setIsScrolled] = useState(false)

  const [modalState, setModalState] = useState<{
    isOpen: boolean
    activeTab: 'location' | 'language'
  }>({
    isOpen: false,
    activeTab: 'location',
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const params = useParams()

  const lang = (params?.lang as string) || 'en'
  const location = (params?.location as string) || 'jp'

  const openModal = (tab: 'location' | 'language') => {
    setModalState({ isOpen: true, activeTab: tab })
  }

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <>
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ease-in-out',
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-sm'
            : 'bg-transparent',
        )}
      >
        <div className='pt-[env(safe-area-inset-top)]'>
          <div className='h-20 container mx-auto flex items-center justify-between px-4 md:px-6'>
            <div className='flex items-center'>
              <Link
                href={`/${lang}/${location}`}
                className='flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]'
              >
                <Image
                  src={logoLight}
                  alt='TableCheck Logo'
                  width={140}
                  height={32}
                  className='block'
                  priority
                />
              </Link>
            </div>

            <div className='flex items-center gap-2 md:gap-4'>
              <div className='hidden sm:flex items-center gap-4 mr-2 border-r border-border/50 pr-4'>
                <Link
                  href='/business'
                  className='flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary hover:opacity-80 transition-opacity'
                >
                  <Building2 className='h-3.5 w-3.5' />
                  <span>For Restaurateurs</span>
                </Link>
                <Link
                  href='/help'
                  className='flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors'
                >
                  <HelpCircle className='h-3.5 w-3.5' />
                  <span>Help</span>
                </Link>
              </div>

              <div className='flex items-center gap-2 md:gap-3'>
                <div className='flex items-center bg-muted/30 hover:bg-muted/50 border border-border/40 rounded-full p-0.5 transition-colors'>
                  <button
                    onClick={() => openModal('location')}
                    className='flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-bold hover:bg-background hover:shadow-xs transition-all text-muted-foreground hover:text-foreground'
                  >
                    <MapPin className='h-3.5 w-3.5' />
                    <span className='uppercase'>{location}</span>
                  </button>

                  <div className='w-px h-3 bg-border/40' />

                  <button
                    onClick={() => openModal('language')}
                    className='flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-bold hover:bg-background hover:shadow-xs transition-all text-muted-foreground hover:text-foreground'
                  >
                    <Globe className='h-3.5 w-3.5' />
                    <span className='uppercase'>{lang}</span>
                  </button>
                </div>

                <div className='flex items-center gap-2'>
                  <Link
                    href='/login'
                    className='group relative hidden sm:flex items-center justify-center gap-2 h-10 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(142,74,231,0.4)] hover:scale-[1.05] active:scale-[0.95] overflow-hidden'
                  >
                    <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]' />
                    <span className='relative z-10'>Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SettingsModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        activeTab={modalState.activeTab}
        onTabChange={(tab) =>
          setModalState((prev) => ({ ...prev, activeTab: tab }))
        }
      />
    </>
  )
}
