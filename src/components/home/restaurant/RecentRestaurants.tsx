'use client'

import React, { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface Restaurant {
  id: string
  name: string
  category: string
  priceRange: string
  rating: number
  image: string
  location: string
  availableSlots: string[]
}

interface RecentRestaurantsProps {
  restaurants: Restaurant[]
}

export default function RecentRestaurants({
  restaurants,
}: RecentRestaurantsProps) {
  const [recentRef, recentApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 2,
    containScroll: 'trimSnaps',
    loop: false,
    dragFree: true,
  })

  const scrollRecentPrev = useCallback(
    () => recentApi?.scrollPrev(),
    [recentApi],
  )
  const scrollRecentNext = useCallback(
    () => recentApi?.scrollNext(),
    [recentApi],
  )

  return (
    <div className='pt-8 border-t border-border/50'>
      <div className='flex items-end justify-between mb-6'>
        <h3 className='text-xl font-bold'>Recently Viewed</h3>
        <div className='flex gap-2'>
          <button
            onClick={scrollRecentPrev}
            className='h-8 w-8 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors'
          >
            <ChevronLeft className='h-4 w-4' />
          </button>
          <button
            onClick={scrollRecentNext}
            className='h-8 w-8 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors text-primary'
          >
            <ChevronRight className='h-4 w-4' />
          </button>
        </div>
      </div>

      <div className='overflow-hidden' ref={recentRef}>
        <div className='flex gap-4'>
          {restaurants.concat(restaurants).map((res, i) => (
            <div
              key={`${res.id}-${i}`}
              className='flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_280px]'
            >
              <div className='flex items-center gap-3 p-3 rounded-xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer'>
                <div className='relative h-16 w-16 shrink-0 rounded-lg overflow-hidden'>
                  <Image
                    src={res.image}
                    alt={res.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h4 className='text-sm font-bold line-clamp-1'>{res.name}</h4>
                  <p className='text-[10px] text-muted-foreground mb-1'>
                    {res.category}
                  </p>
                  {/* <div className='flex items-center gap-1'>
                    <Star className='h-2.5 w-2.5 fill-yellow-400 text-yellow-400' />
                    <span className='text-[10px] font-bold'>{res.rating}</span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
