'use client'

import React, { useState } from 'react'
import {
  Utensils,
  ChevronDown,
  Store,
  ShoppingBag,
  CircleDollarSign,
  Check,
  X,
} from 'lucide-react'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'

interface QuickFiltersProps {
  className?: string
}

interface ModalPortalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

function ModalPortal({ isOpen, onClose, title, children }: ModalPortalProps) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6'>
      <div
        className='absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300'
        onClick={onClose}
      />

      <div className='relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-card shadow-2xl border border-border animate-in zoom-in-95 duration-300'>
        <div className='flex items-center justify-between border-b border-border/50 p-6'>
          <h2 className='text-xl font-bold text-card-foreground'>{title}</h2>
          <button
            onClick={onClose}
            className='rounded-full p-2.5 text-muted-foreground hover:bg-muted transition-colors border border-border/50'
          >
            <X className='h-5 w-5' />
          </button>
        </div>

        <div className='p-6'>{children}</div>
      </div>
    </div>
  )
}

export function QuickFilters({ className }: QuickFiltersProps) {
  const [activeDining, setActiveDining] = useState<string | null>(null)
  const [selectedCuisine, setSelectedCuisine] = useState<string>('Cuisine')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [isPriceOpen, setIsPriceOpen] = useState(false)
  const [isCuisineOpen, setIsCuisineOpen] = useState(false)

  const cuisines = [
    'All',
    'Japanese',
    'Italian',
    'French',
    'Vietnamese',
    'Chinese',
    'Korean',
  ]

  useEffect(() => {
    if (isPriceOpen || isCuisineOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isPriceOpen, isCuisineOpen])

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {/* Price Range Filter */}
      <div className='relative'>
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all duration-200 text-sm font-medium',
            isPriceOpen
              ? 'border-primary bg-primary/5 text-primary'
              : 'border-border/40 bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground',
          )}
        >
          <CircleDollarSign className='w-4 h-4' />
          <span>Budget</span>
          <ChevronDown
            className={cn(
              'w-3.5 h-3.5 transition-transform',
              isPriceOpen && 'rotate-180',
            )}
          />
        </button>

        <ModalPortal
          isOpen={isPriceOpen}
          onClose={() => setIsPriceOpen(false)}
          title='Budget Select'
        >
          <div className='space-y-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <span className='text-xs text-muted-foreground uppercase font-bold tracking-wider'>
                  Min Budget
                </span>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm'>
                    $
                  </span>
                  <input
                    type='number'
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className='w-full pl-7 pr-4 py-3 bg-muted/40 border border-border/60 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 transition-all font-medium'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <span className='text-xs text-muted-foreground uppercase font-bold tracking-wider'>
                  Max Budget
                </span>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm'>
                    $
                  </span>
                  <input
                    type='number'
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className='w-full pl-7 pr-4 py-3 bg-muted/40 border border-border/60 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20 transition-all font-medium'
                  />
                </div>
              </div>
            </div>

            <div className='flex gap-3 pt-2'>
              <button
                onClick={() => {
                  setPriceRange([0, 1000])
                  setIsPriceOpen(false)
                }}
                className='flex-1 py-3.5 border border-border text-foreground rounded-2xl text-sm font-bold hover:bg-muted transition-colors'
              >
                Reset
              </button>
              <button
                onClick={() => setIsPriceOpen(false)}
                className='flex-[2] py-3.5 bg-primary text-primary-foreground rounded-2xl text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20'
              >
                Apply Filters
              </button>
            </div>
          </div>
        </ModalPortal>
      </div>

      {/* Cuisine Filter */}
      <div className='relative'>
        <button
          onClick={() => setIsCuisineOpen(!isCuisineOpen)}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all duration-200 text-sm font-medium',
            isCuisineOpen || selectedCuisine !== 'Cuisine'
              ? 'border-primary bg-primary/5 text-primary'
              : 'border-border/40 bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground',
          )}
        >
          <Utensils className='w-4 h-4' />
          <span>{selectedCuisine}</span>
          <ChevronDown
            className={cn(
              'w-3.5 h-3.5 transition-transform',
              isCuisineOpen && 'rotate-180',
            )}
          />
        </button>

        <ModalPortal
          isOpen={isCuisineOpen}
          onClose={() => setIsCuisineOpen(false)}
          title='Select Cuisine'
        >
          <div className='grid grid-cols-2 gap-2'>
            {cuisines.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setSelectedCuisine(c === 'All' ? 'Cuisine' : c)
                  setIsCuisineOpen(false)
                }}
                className={cn(
                  'px-4 py-3 rounded-2xl text-sm font-medium transition-all flex items-center justify-between border',
                  selectedCuisine === c ||
                    (c === 'All' && selectedCuisine === 'Cuisine')
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border/50 hover:border-primary/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground',
                )}
              >
                {c}
                {(selectedCuisine === c ||
                  (c === 'All' && selectedCuisine === 'Cuisine')) && (
                  <Check className='w-4 h-4 text-primary' />
                )}
              </button>
            ))}
          </div>
        </ModalPortal>
      </div>

      <div className='h-6 w-px bg-border/40 mx-1 hidden sm:block' />

      {/* Dining Options */}
      <div className='flex items-center gap-2'>
        <button
          onClick={() =>
            setActiveDining(activeDining === 'dine-in' ? null : 'dine-in')
          }
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all duration-200 text-sm font-medium',
            activeDining === 'dine-in'
              ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_15px_rgba(142,74,231,0.3)]'
              : 'border-border/40 bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground',
          )}
        >
          <Store className='w-4 h-4' />
          <span>Dine-in</span>
        </button>

        <button
          onClick={() =>
            setActiveDining(activeDining === 'pickup' ? null : 'pickup')
          }
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-2xl border transition-all duration-200 text-sm font-medium',
            activeDining === 'pickup'
              ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_15px_rgba(142,74,231,0.3)]'
              : 'border-border/40 bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground',
          )}
        >
          <ShoppingBag className='w-4 h-4' />
          <span>Pickup</span>
        </button>
      </div>
    </div>
  )
}
