'use client'

import React from 'react'
import CuisineGrid from './CuisineGrid'
import AreaGrid from './AreaGrid'

export default function Categories() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <CuisineGrid />
        <AreaGrid />
      </div>
    </section>
  )
}
