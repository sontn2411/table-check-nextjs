'use client'

import React from 'react'
import JapanMap from '@/components/shared/map/Japan'
import SingaporeMap from '@/components/shared/map/Singapore'
import { JAPAN_MAP_DATA } from '@/data/mock-home'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const CARD_POSITIONS = [
  {
    desktop: { top: '-8%', left: '-12%' },
    mobile: { top: '0%', left: '0%' },
    animDelay: '0s',
  },
  {
    desktop: { top: '2%', right: '-18%' },
    mobile: { top: '5%', right: '5%' },
    animDelay: '1.2s',
  },
  {
    desktop: { top: '38%', left: '-22%' },
    mobile: { top: '35%', left: '2%' },
    animDelay: '2.5s',
  },
  {
    desktop: { top: '50%', right: '-18%' },
    mobile: { bottom: '25%', right: '2%' },
    animDelay: '0.6s',
  },
  {
    desktop: { bottom: '-5%', left: '10%' },
    mobile: { bottom: '5%', left: '15%' },
    animDelay: '1.8s',
  },
]

const RightHero = () => {
  const params = useParams()
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className='w-full lg:w-2/5 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200'>
      <div className='relative z-10 w-full max-w-[320px] md:max-w-[420px] lg:max-w-[500px] mx-auto'>
        {params.location === 'sg' && <SingaporeMap />}
        {params.location === 'jp' && <JapanMap />}

        {JAPAN_MAP_DATA.map((item, index) => {
          const posConfig = CARD_POSITIONS[index % CARD_POSITIONS.length]
          const { animDelay, desktop, mobile } = posConfig
          const position = isMobile ? mobile : desktop

          return (
            <div
              key={item.id}
              className={`absolute z-20 group `}
              style={{
                ...position,
                animation: `floatCard 4s ease-in-out ${animDelay} infinite`,
              }}
            >
              <div className='flex items-center gap-0 cursor-pointer group/item relative'>
                <div className='relative w-20 h-20 lg:w-28 lg:h-28 rounded-md md:rounded-lg overflow-hidden shrink-0 ring-1 ring-border/30 z-0'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 56px, (max-width: 1024px) 80px, 112px'
                  />
                </div>
                <div className='absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 min-w-[100px] md:min-w-[140px] lg:min-w-[170px] max-w-[130px] md:max-w-[170px] lg:max-w-[200px] px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-3 rounded-lg md:rounded-xl bg-card/75 backdrop-blur-sm border border-white/20 shadow-xl shadow-black/10 transition-all duration-500 group-hover/item:scale-105 group-hover/item:shadow-primary/30 group-hover/item:border-primary/50 z-10 overflow-hidden'>
                  {/* Glass Shine Effect */}
                  <div className='absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/item:animate-shine' />

                  <p className='text-xs md:text-sm font-bold text-foreground truncate leading-tight'>
                    {item.name}
                  </p>
                  <p className='text-xs text-muted-foreground truncate leading-tight mt-0.5'>
                    {item.category.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className='absolute -inset-4 bg-primary/5 rounded-full blur-3xl -z-10 opacity-60' />

      <style jsx>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          50% {
            transform: translateX(200%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        :global(.animate-shine) {
          animation: shine 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default RightHero
