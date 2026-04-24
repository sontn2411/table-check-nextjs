'use client'

import React, { useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'

interface Promotion {
  id: string
  title: string
  restaurant: string
  discount: string
  image: string
  description: string
}

interface PromotionListProps {
  promotions: Promotion[]
  activeIndex: number
  onSelect: (index: number) => void
}

export default function PromotionList({
  promotions,
  activeIndex,
  onSelect,
}: PromotionListProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: 'y',
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      breakpoints: {
        '(max-width: 1024px)': { axis: 'x' },
      },
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  )

  const onSelectEmbla = useCallback(() => {
    if (!emblaApi) return
    const selectedIndex = emblaApi.selectedScrollSnap()
    if (selectedIndex !== activeIndex) {
      onSelect(selectedIndex)
    }
  }, [emblaApi, activeIndex, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelectEmbla)
    return () => {
      emblaApi.off('select', onSelectEmbla)
    }
  }, [emblaApi, onSelectEmbla])

  useEffect(() => {
    if (emblaApi && emblaApi.selectedScrollSnap() !== activeIndex) {
      emblaApi.scrollTo(activeIndex)
    }
  }, [emblaApi, activeIndex])

  return (
    <div className='lg:col-span-4 h-auto lg:h-[520px] relative group'>
      <div className='overflow-hidden h-full' ref={emblaRef}>
        <div className='flex flex-row lg:flex-col h-full'>
          {promotions.map((promo, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={promo.id}
                className='flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_25%] py-1.5 px-2 lg:px-1'
              >
                <div
                  onClick={() => onSelect(index)}
                  className={cn(
                    'cursor-pointer p-4 h-full rounded-xl border transition-all duration-300 relative overflow-hidden group/item select-none',
                    isActive
                      ? 'bg-primary/20 border-transparent shadow-lg shadow-primary/5'
                      : 'bg-muted/30 border-border hover:bg-muted/50',
                  )}
                >
                  <div className='flex items-start gap-4'>
                    <div className='relative h-16 w-16 shrink-0 rounded-xl overflow-hidden'>
                      <Image
                        src={promo.image}
                        alt={promo.title}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3
                        className={cn(
                          'font-bold leading-tight group-hover/item:text-primary transition-colors text-sm md:text-base truncate',
                          isActive ? 'text-primary' : '',
                        )}
                      >
                        {promo.title}
                      </h3>
                      <p className='text-xs text-muted-foreground mt-1 line-clamp-2'>
                        {promo.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar for Active Item */}
                  {isActive && (
                    <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-primary/10'>
                      <div
                        key={activeIndex}
                        className='h-full bg-primary animate-progress'
                        style={{ animationDuration: '5000ms' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
