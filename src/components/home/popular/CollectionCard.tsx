'use client'

import React from 'react'
import Image from 'next/image'
import {
  Heart,
  Users,
  ChevronRight,
  Bookmark,
  Crown,
  Compass,
  Briefcase,
  Map,
} from 'lucide-react'

interface RestaurantReference {
  name: string
  category: string
  image: string
}

interface Collection {
  id: string
  title: string
  description: string
  icon: string
  restaurants: RestaurantReference[]
}

const IconMap = {
  Heart: Heart,
  Users: Users,
  Crown: Crown,
  Compass: Compass,
  Briefcase: Briefcase,
  Map: Map,
}

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const Icon = IconMap[collection.icon as keyof typeof IconMap] || Bookmark

  return (
    <div className='w-full lg:min-w-[400px] lg:max-w-[450px] snap-start bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500'>
      {/* Header Section */}
      <div className='p-8 bg-linear-to-br from-primary/5 to-transparent border-b border-border/30'>
        <div className='flex items-center gap-4'>
          <div className='h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary self-start'>
            <Icon className='h-6 w-6' />
          </div>
          <h3 className='text-2xl font-bold'>{collection.title}</h3>
        </div>
        <p className='text-sm text-muted-foreground leading-relaxed line-clamp-2 mt-2'>
          {collection.description}
        </p>
      </div>

      {/* Vertical List Section */}
      <div className='p-6 flex-1 flex flex-col gap-5'>
        {collection.restaurants.map((res, i) => (
          <div key={i} className='flex items-center gap-4 group cursor-pointer'>
            <div className='relative h-16 w-16 shrink-0 rounded-xl overflow-hidden'>
              <Image
                src={res.image}
                alt={res.name}
                fill
                className='object-cover group-hover:scale-110 transition-transform duration-500'
              />
            </div>
            <div className='flex-1 border-b border-border/30 pb-4 group-last:border-none group-last:pb-0'>
              <h4 className='font-bold group-hover:text-primary transition-colors'>
                {res.name}
              </h4>
              <p className='text-xs text-muted-foreground'>{res.category}</p>
            </div>
            <ChevronRight className='h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all' />
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className='px-6 pb-8'>
        <button className='w-full py-4 rounded-xl bg-muted font-bold text-sm hover:bg-primary hover:text-white transition-all'>
          See more restaurants
        </button>
      </div>
    </div>
  )
}
