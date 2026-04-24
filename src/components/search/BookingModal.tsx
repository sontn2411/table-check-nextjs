import React, { useState } from 'react'
import { X, Calendar, Clock, Users } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [partyCount, setPartyCount] = useState(2)

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50'>
      <div className='absolute inset-0' onClick={onClose} />
      <div className='relative w-full max-w-md flex flex-col bg-background rounded-lg shadow-lg'>
        <div className='flex items-center justify-between px-5 py-4 border-b border-border'>
          <h2 className='text-lg font-medium text-foreground'>
            Date, Time & Guests
          </h2>
          <button
            onClick={onClose}
            className='p-1 rounded-md text-muted-foreground hover:bg-secondary transition-colors'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        <div className='flex-1 p-5 space-y-6'>
          {/* Date */}
          <section>
            <label className='flex items-center gap-2 text-sm font-medium text-foreground mb-3 tracking-wide uppercase'>
              <Calendar className='w-4 h-4 text-primary' /> Date
            </label>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='w-full border border-input rounded-md px-3 py-2.5 text-sm text-foreground bg-background outline-none hover:border-foreground focus:border-foreground transition-colors cursor-pointer'
            />
          </section>

          {/* Time */}
          <section>
            <label className='flex items-center gap-2 text-sm font-medium text-foreground mb-3 tracking-wide uppercase'>
              <Clock className='w-4 h-4 text-primary' /> Time
            </label>
            <input
              type='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className='w-full border border-input rounded-md px-3 py-2.5 text-sm text-foreground bg-background outline-none hover:border-foreground focus:border-foreground transition-colors cursor-pointer'
            />
          </section>

          {/* Party Size */}
          <section>
            <label className='flex items-center gap-2 text-sm font-medium text-foreground mb-3 tracking-wide uppercase'>
              <Users className='w-4 h-4 text-primary' /> Guests
            </label>
            <div className='flex items-center justify-between border border-input rounded-md px-4 py-2 bg-background hover:border-foreground transition-colors'>
              <button
                onClick={() => setPartyCount(Math.max(1, partyCount - 1))}
                className='w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground text-xl rounded-md hover:bg-secondary transition-colors'
                aria-label='Decrease guests'
              >
                -
              </button>
              <span className='text-sm font-medium text-foreground'>
                {partyCount} {partyCount === 1 ? 'person' : 'people'}
              </span>
              <button
                onClick={() => setPartyCount(partyCount + 1)}
                className='w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground text-xl rounded-md hover:bg-secondary transition-colors'
                aria-label='Increase guests'
              >
                +
              </button>
            </div>
          </section>
        </div>

        <div className='p-5 border-t border-border flex justify-end bg-background rounded-b-lg'>
          <button
            onClick={onClose}
            className='w-full py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors shadow-sm'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}
