import React, { useState } from 'react'
import { X, Store, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([])
  const [selectedAmbience, setSelectedAmbience] = useState<string[]>([])
  const [diningOption, setDiningOption] = useState<string>('dine-in')

  if (!isOpen) return null

  const toggleSelection = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    currentSelection: string[],
    item: string,
  ) => {
    setter(
      currentSelection.includes(item)
        ? currentSelection.filter((i) => i !== item)
        : [...currentSelection, item],
    )
  }

  const cuisineOptions = [
    'Japanese',
    'Italian',
    'French',
    'Vietnamese',
    'Chinese',
    'Korean',
    'Cafe',
    'Bar',
  ]
  const ambienceOptions = [
    'Romantic',
    'Casual',
    'Business',
    'Family-friendly',
    'Lively',
  ]

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50'>
      {/* Click outside to close */}
      <div className='absolute inset-0' onClick={onClose} />

      <div className='relative w-full max-w-md max-h-[90vh] flex flex-col bg-background rounded-lg shadow-lg'>
        {/* Header */}
        <div className='flex items-center justify-between px-5 py-4 border-b border-border'>
          <h2 className='text-lg font-medium text-foreground'>Filters</h2>
          <button
            onClick={onClose}
            className='p-1 rounded-md text-muted-foreground hover:bg-secondary transition-colors'
            aria-label='Close filters'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        <div className='flex-1 overflow-y-auto p-5 space-y-8'>
          {/* Dining Options */}
          <section>
            <h3 className='text-sm font-medium text-foreground mb-3 uppercase tracking-wide'>
              Dining Options
            </h3>
            <div className='flex gap-3'>
              <button
                onClick={() => setDiningOption('dine-in')}
                className={cn(
                  'flex-1 py-2.5 px-3 rounded-md border text-sm flex items-center justify-center gap-2 transition-colors',
                  diningOption === 'dine-in'
                    ? 'border-foreground bg-foreground text-background font-medium'
                    : 'border-input hover:border-foreground',
                )}
              >
                <Store className='w-4 h-4' />
                Dine In
              </button>
              <button
                onClick={() => setDiningOption('pick-up')}
                className={cn(
                  'flex-1 py-2.5 px-3 rounded-md border text-sm flex items-center justify-center gap-2 transition-colors',
                  diningOption === 'pick-up'
                    ? 'border-foreground bg-foreground text-background font-medium'
                    : 'border-input hover:border-foreground',
                )}
              >
                <ShoppingBag className='w-4 h-4' />
                Pick Up
              </button>
            </div>
          </section>

          {/* Cuisine */}
          <section>
            <h3 className='text-sm font-medium text-foreground mb-3 uppercase tracking-wide'>
              Cuisine
            </h3>
            <div className='flex flex-wrap gap-2'>
              {cuisineOptions.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() =>
                    toggleSelection(
                      setSelectedCuisine,
                      selectedCuisine,
                      cuisine,
                    )
                  }
                  className={cn(
                    'px-3 py-1.5 rounded-md text-sm transition-colors border',
                    selectedCuisine.includes(cuisine)
                      ? 'border-foreground bg-foreground text-background font-medium'
                      : 'border-input bg-transparent text-foreground hover:border-foreground cursor-pointer',
                  )}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </section>

          {/* Ambience */}
          <section>
            <h3 className='text-sm font-medium text-foreground mb-3 uppercase tracking-wide'>
              Ambience
            </h3>
            <div className='flex flex-wrap gap-2'>
              {ambienceOptions.map((ambience) => (
                <button
                  key={ambience}
                  onClick={() =>
                    toggleSelection(
                      setSelectedAmbience,
                      selectedAmbience,
                      ambience,
                    )
                  }
                  className={cn(
                    'px-3 py-1.5 rounded-md text-sm transition-colors border',
                    selectedAmbience.includes(ambience)
                      ? 'border-foreground bg-foreground text-background font-medium'
                      : 'border-input bg-transparent text-foreground hover:border-foreground cursor-pointer',
                  )}
                >
                  {ambience}
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className='p-5 border-t border-border flex justify-end items-center gap-4 bg-background rounded-b-lg'>
          <button
            onClick={() => {
              setSelectedCuisine([])
              setSelectedAmbience([])
              setDiningOption('dine-in')
            }}
            className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className='px-6 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors'
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
