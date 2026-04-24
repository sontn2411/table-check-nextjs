'use client'

import React from 'react'
import { COLLECTIONS } from '@/data/mock-home'
import CollectionCard from './CollectionCard'

export default function PopularLists() {
  return (
    <section className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-end justify-between mb-10'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>
              Popular Collections
            </h2>
            <p className='text-muted-foreground mt-2'>
              Handpicked guides to the best dining experiences
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 lg:overflow-x-auto pb-8 lg:snap-x no-scrollbar'>
          {COLLECTIONS.slice(0, 3).map((coll) => (
            <CollectionCard key={coll.id} collection={coll} />
          ))}
        </div>
      </div>
    </section>
  )
}
