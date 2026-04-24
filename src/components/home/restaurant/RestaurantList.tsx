'use client'

import React from 'react'
import { RESTAURANTS } from '@/data/mock-home'
import AvailableRestaurants from './AvailableRestaurants'
import RecentRestaurants from './RecentRestaurants'

export default function RestaurantList() {
  return (
    <section className='py-12 bg-background'>
      <div className='container mx-auto px-4 md:px-6'>
        <AvailableRestaurants restaurants={RESTAURANTS} />
        <RecentRestaurants restaurants={RESTAURANTS} />
      </div>
    </section>
  )
}
