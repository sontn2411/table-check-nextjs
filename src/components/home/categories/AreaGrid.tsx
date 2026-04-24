'use client'

import React from 'react'
import { AREAS } from '@/data/mock-home'
import AreaCard from './AreaCard'

export default function AreaGrid() {
  return (
    <div>
      <div className='flex items-end justify-between mb-10'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight'>Popular Areas</h2>
          <p className='text-muted-foreground mt-2'>
            Explore restaurants in the best neighborhoods
          </p>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {AREAS.map((item) => (
          <AreaCard
            key={item.name}
            name={item.name}
            image={item.image}
            className='aspect-video'
          />
        ))}
      </div>
    </div>
  )
}
