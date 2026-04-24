'use client'

import React, { useState } from 'react'
import {
  Search,
  SlidersHorizontal,
  X,
  Clock,
  Calendar,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { FilterModal } from './FilterModal'
import { BookingModal } from './BookingModal'

export function SearchSection() {
  const [searchValue, setSearchValue] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className='w-full  mx-auto py-6 space-y-6'>
      {/* Search Input and Filter Container */}
      <div className='flex items-center justify-start gap-4'>
        <div className='relative group flex-1 max-w-sm'>
          <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors duration-200'>
            <Search className='w-5 h-5' />
          </div>

          <input
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search destination...'
            className={cn(
              'w-full pl-12 pr-12 py-3.5 bg-muted/40 border border-transparent rounded-2xl',
              'text-foreground placeholder:text-muted-foreground outline-none',
              'transition-all duration-300 ease-out',
              'focus:bg-background focus:border-border focus:ring-4 focus:ring-primary/10',
              'hover:bg-muted/60',
            )}
          />

          {searchValue && (
            <button
              onClick={() => setSearchValue('')}
              className='absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer'
            >
              <X className='w-4 h-4' />
            </button>
          )}
        </div>

        <button
          onClick={() => setIsBookingOpen(true)}
          className={cn(
            'flex items-center gap-4 px-5 py-3.5 rounded-2xl border border-transparent bg-muted/40 hover:bg-muted/60 text-foreground transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary/20',
          )}
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            <Calendar className='w-4 h-4 text-muted-foreground' />
            <span>Date</span>
          </div>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Clock className='w-4 h-4 text-muted-foreground' />
            <span>Time</span>
          </div>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Users className='w-4 h-4 text-muted-foreground' />
            <span>2 guests</span>
          </div>
        </button>

        <div className='flex justify-end'>
          <button
            onClick={() => setIsFilterOpen(true)}
            className={cn(
              'flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-background border border-border hover:bg-muted transition-all duration-200',
              'text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm hover:shadow',
            )}
          >
            <SlidersHorizontal className='w-4 h-4' />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
      
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  )
}
