'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import RestaurantCard from './RestaurantCard'

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

interface AvailableRestaurantsProps {
  restaurants: Restaurant[]
}

export default function AvailableRestaurants({
  restaurants,
}: AvailableRestaurantsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    loop: false,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className='mb-16'>
      <div className='flex items-end justify-between mb-8'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight'>
            Available in Your Area
          </h2>
          <p className='text-muted-foreground mt-2'>
            Instant booking for popular tables today
          </p>
        </div>
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

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-6'>
          {restaurants.map((res) => (
            <div
              key={res.id}
              className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_48%] lg:flex-[0_0_24%]'
            >
              <RestaurantCard restaurant={res} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
