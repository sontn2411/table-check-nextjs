'use client'

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface Promotion {
  id: string
  title: string
  restaurant: string
  discount: string
  image: string
  description: string
}

interface ActivePromotionProps {
  activePromo: Promotion
}

export default function ActivePromotion({ activePromo }: ActivePromotionProps) {
  return (
    <div className='lg:col-span-8 relative rounded-xl overflow-hidden group'>
      <div className='absolute inset-0 z-0'>
        <Image
          src={activePromo.image}
          alt={activePromo.title}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent' />
      </div>

      <div className='relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white'>
        <div
          className='animate-in fade-in slide-in-from-bottom-4 duration-500'
          key={activePromo.id}
        >
          <div className='flex items-center gap-2 mb-4'>
            <span className='px-3 py-1 bg-primary rounded-full text-xs font-bold uppercase'>
              Hot Deal
            </span>
            <div className='flex items-center gap-1 text-yellow-400'>
              <Star className='h-3 w-3 fill-current' />
              <Star className='h-3 w-3 fill-current' />
              <Star className='h-3 w-3 fill-current' />
              <Star className='h-3 w-3 fill-current' />
              <Star className='h-3 w-3 fill-current' />
            </div>
          </div>
          <h3 className='text-3xl md:text-5xl font-extrabold mb-4 leading-tight'>
            {activePromo.title}
          </h3>
          <p className='text-lg text-white/80 mb-8 max-w-xl line-clamp-2'>
            {activePromo.description}
          </p>
          <button className='bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]'>
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  )
}
