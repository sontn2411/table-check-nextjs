'use client'

import React, { useCallback } from 'react'
import { CUISINES } from '@/data/mock-home'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import CuisineCard from './CuisineCard'

export default function CuisineGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 2,
    containScroll: 'trimSnaps',
    loop: false,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className='mb-24'>
      <div className='flex items-end justify-between mb-10'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight'>
            Browse by Cuisine
          </h2>
          <p className='text-muted-foreground mt-2'>
            Find your favorite taste from around the world
          </p>
        </div>
        <div className='flex items-center gap-6'>
          <div className='flex gap-2'>
            <button
              onClick={scrollPrev}
              className='h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <button
              onClick={scrollNext}
              className='h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors text-primary'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-5'>
          {CUISINES.map((item) => (
            <div
              key={item.name}
              className='flex-[0_0_65%] sm:flex-[0_0_35%] lg:flex-[0_0_15.5%] min-w-0'
            >
              <CuisineCard name={item.name} image={item.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
