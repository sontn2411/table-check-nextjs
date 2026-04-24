'use client'

import React from 'react'
import Image from 'next/image'

interface CuisineCardProps {
  name: string
  image: string
}

export default function CuisineCard({ name, image }: CuisineCardProps) {
  return (
    <div className='group flex flex-col items-center gap-3 cursor-pointer select-none'>
      {/* Circle Image Wrapper */}
      <div className='relative aspect-square rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 w-full p-1'>
        <div className='relative h-full w-full rounded-full overflow-hidden'>
          <Image
            src={image}
            alt={name}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-110'
          />
        </div>
      </div>

      {/* Label underneath */}
      <h3 className='w-full font-bold text-center group-hover:text-primary transition-colors duration-300 line-clamp-1 text-sm md:text-base px-1'>
        {name}
      </h3>
    </div>
  )
}
