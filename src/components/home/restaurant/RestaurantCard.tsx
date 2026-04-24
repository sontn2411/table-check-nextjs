'use client'

import React from 'react'
import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'

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

interface RestaurantCardProps {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className='group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full cursor-pointer'>
      {/* Image Section */}
      <div className='relative h-48 w-full overflow-hidden'>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        {/* <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm'>
          <Star className='h-3 w-3 fill-yellow-400 text-yellow-400' />
          <span className='text-xs font-bold'>{restaurant.rating}</span>
        </div> */}
      </div>

      {/* Info Section */}
      <div className='p-5 flex flex-col flex-1'>
        <div className='mb-auto'>
          <div className='flex items-center justify-between gap-2 mb-1'>
            <span className='text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded'>
              {restaurant.category}
            </span>
            {/* <span className='text-xs font-semibold text-muted-foreground'>
              {restaurant.priceRange}
            </span> */}
          </div>
          <h3 className='text-lg font-bold group-hover:text-primary transition-colors line-clamp-1'>
            {restaurant.name}
          </h3>
          <div className='flex items-center gap-1 text-muted-foreground mt-1'>
            <MapPin className='h-3 w-3' />
            <span className='text-xs line-clamp-1'>{restaurant.location}</span>
          </div>
        </div>

        {/* Available Times */}
        <div className='mt-4 pt-4 border-t border-border/50'>
          <p className='text-[10px] font-bold text-muted-foreground uppercase mb-2 flex items-center gap-1'>
            <Clock className='h-3 w-3' /> Next Availability
          </p>
          <div className='flex flex-wrap gap-2'>
            {restaurant.availableSlots.map((slot) => (
              <button
                key={slot}
                className='px-3 py-1.5 rounded-lg bg-muted text-xs font-semibold hover:bg-primary hover:text-white transition-colors'
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
