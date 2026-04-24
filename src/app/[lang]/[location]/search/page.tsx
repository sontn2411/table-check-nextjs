'use client'

import React from 'react'
import { Search } from 'lucide-react'
import { QuickFilters } from '@/components/search/QuickFilters'

export default function SearchPage() {
  return (
    <div className='bg-background h-[calc(100vh-80px)] flex flex-col overflow-hidden '>
      <main className='p-4 md:p-6 lg:p-8'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-4 mb-6'>
          {/* Search Input Area */}
          <div className='w-full lg:max-w-md'>
            <div className='relative group'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <Search className='h-4.5 w-4.5 text-muted-foreground group-focus-within:text-primary transition-all duration-300' />
              </div>
              <input
                type='text'
                placeholder='Search restaurants, cuisines...'
                className='block w-full pl-11 pr-4 py-3 bg-muted/30 border border-border/40 rounded-2xl text-sm placeholder:text-muted-foreground/70 focus:outline-hidden focus:bg-background focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all duration-300 shadow-sm'
              />
            </div>
          </div>

          {/* Quick Filters Area */}
          <QuickFilters className='w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide' />
        </div>
      </main>
    </div>
  )
}
