import React from 'react'
import Image from 'next/image'
import { Star, MapPin, Utensils } from 'lucide-react'
import { MOCK_RESTAURANTS } from '@/data/restaurants'

function getRating(id: number) {
  return (4 + ((id * 7) % 10) / 10).toFixed(1)
}

function getReviewCount(id: number) {
  return 50 + ((id * 137) % 500)
}

function getPriceLevel(id: number) {
  return '$'.repeat(2 + (id % 3))
}

export function RestaurantList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between mb-2'>
        <h2 className='text-xl font-bold'>Restaurants in Japan</h2>
        <span className='text-sm text-muted-foreground'>
          {MOCK_RESTAURANTS.length} found
        </span>
      </div>
      {MOCK_RESTAURANTS.map((r) => (
        <div
          key={r.id}
          className='group flex gap-4 p-3 rounded-2xl bg-background border border-border/30 hover:bg-muted/30 hover:border-border/80 transition-all duration-300 cursor-pointer'
        >
          <div className='relative w-28 h-28 shrink-0 rounded-lg overflow-hidden'>
            <Image
              src={
                r.image ||
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop'
              }
              alt={r.name}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-500'
            />
            {/* Optional badge */}
            <div className='absolute top-2 left-2 bg-background/90 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-semibold'>
              Promoted
            </div>
          </div>
          <div className='flex flex-col flex-1 min-w-0'>
            <div className='flex justify-between items-start gap-2'>
              <h3 className='font-bold text-lg leading-tight truncate group-hover:text-primary transition-colors'>
                {r.name}
              </h3>
            </div>

            <p className='text-muted-foreground text-sm flex items-center gap-1.5 mt-1 truncate'>
              <Utensils className='w-3.5 h-3.5 shrink-0' />
              <span className='truncate'>{r.cuisine}</span>
            </p>

            <div className='flex items-center gap-1.5 text-xs text-muted-foreground mt-1'>
              <MapPin className='w-3 h-3 shrink-0' />
              <span className='truncate'>
                Tokyo, {r.name.split(' ')[0]} Area
              </span>
            </div>

            <div className='mt-auto pt-3 flex items-center justify-between'>
              <div className='flex items-center gap-1 text-sm font-medium'>
                <Star className='w-4 h-4 fill-amber-400 text-amber-400 shrink-0' />
                <span>{getRating(r.id)}</span>
                <span className='text-muted-foreground font-normal'>
                  ({getReviewCount(r.id)})
                </span>
              </div>
              <p className='font-semibold text-sm'>{getPriceLevel(r.id)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
