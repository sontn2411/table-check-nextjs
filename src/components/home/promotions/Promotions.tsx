'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { PROMOTIONS } from '@/data/mock-home'
import PromotionList from './PromotionList'
import ActivePromotion from './ActivePromotion'

export default function Promotions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePromo = PROMOTIONS[activeIndex]

  return (
    <section className='py-20 bg-background mt-10 '>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between mb-10'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>
              Featured Promotions
            </h2>
            <p className='text-muted-foreground mt-2'>
              Exclusive deals only at TableCheck
            </p>
          </div>
          <button className='flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all'>
            View all <ArrowRight className='h-4 w-4' />
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[450px]'>
          <PromotionList
            promotions={PROMOTIONS}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />

          <ActivePromotion activePromo={activePromo} />
        </div>
      </div>
    </section>
  )
}
