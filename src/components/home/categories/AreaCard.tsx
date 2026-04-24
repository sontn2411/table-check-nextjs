'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AreaCardProps {
  name: string
  image: string
  className?: string
}

export default function AreaCard({ name, image, className }: AreaCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500',
        className,
      )}
    >
      <Image
        src={image}
        alt={name}
        fill
        className='object-cover transition-transform duration-700 group-hover:scale-110'
      />
      <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center transition-colors duration-500'>
        <h3 className='text-white font-extrabold drop-shadow-lg text-xl uppercase tracking-widest text-center px-4 transform group-hover:scale-110 transition-transform duration-500'>
          {name}
        </h3>
      </div>
    </div>
  )
}
