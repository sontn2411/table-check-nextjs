'use client'
import LeftHero from './LeftHero'
import japanCity from '@/assets/icons/japan-city.svg'
import moon from '@/assets/icons/moon.svg'
import RightHero from './RightHero'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className='relative w-full min-h-[80vh] flex items-center pt-20   '
      style={{
        background:
          'radial-gradient(circle at 75% 50%, rgba(124, 58, 237, 0.15), transparent 40%)',
      }}
    >
      {/* <div className='absolute bottom-[-10%] left-[-5%] max-w-[400px] w-full max-h-[400px] h-full bg-primary/10 rounded-full blur-[100px] pointer-events-none z-20' /> */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-background pointer-events-none z-0' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 '>
          <LeftHero />
          <RightHero />
        </div>
      </div>
      <div className='absolute bottom-0 left-0 z-0 pointer-events-none'>
        <Image
          src={japanCity}
          alt='japanCity'
          className='w-[600px] h-auto opacity-10'
          style={{ opacity: 0.05 }}
        />
      </div>

      <div
        className='absolute top-0  z-0 pointer-events-none'
        style={{ left: '10%' }}
      >
        <Image
          src={moon}
          alt='moon'
          className='w-full h-auto opacity-10'
          style={{ opacity: 0.05 }}
        />
      </div>
    </section>
  )
}
