import { HERO_DATA } from '@/data/mock-home'
import { Search, MapPin } from 'lucide-react'

const LeftHero = () => {
  return (
    <div className='w-full lg:w-3/5 text-left animate-in fade-in slide-in-from-left-8 duration-1000'>
      <h1 className='text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-[1.1] tracking-tight'>
        {HERO_DATA.title.split(' ').map((word, i) => (
          <span key={i} className={i === 1 ? 'text-primary' : ''}>
            {word}{' '}
          </span>
        ))}
      </h1>

      <p className='text-xl text-muted-foreground mb-10 max-w-xl font-medium leading-relaxed'>
        {HERO_DATA.subtitle}
      </p>

      {/* Advanced Search Bar */}
      <div className='w-full max-w-2xl bg-card/40 backdrop-blur-xl border border-border/50 p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 shadow-2xl shadow-primary/5 group transition-all hover:border-primary/40'>
        <div className='flex items-center flex-1 px-4 py-3 w-full'>
          <Search className='text-muted-foreground mr-3 h-5 w-5 group-focus-within:text-primary transition-colors' />
          <input
            type='text'
            placeholder='Restaurant, cuisine, or area...'
            className='bg-transparent border-none focus:ring-0 outline-none text-foreground placeholder:text-muted-foreground/60 w-full text-base font-medium font-sans'
          />
        </div>

        <div className='hidden md:flex items-center border-l border-border/50 h-10 self-center' />

        <div className='flex items-center px-4 py-3 w-full md:w-auto cursor-pointer group/item'>
          <MapPin className='text-muted-foreground mr-3 h-5 w-5 group-hover/item:text-primary transition-colors' />
          <span className='text-foreground/80 text-sm whitespace-nowrap font-semibold'>
            Japan
          </span>
        </div>

        <button className='w-full md:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-primary/25 flex items-center justify-center gap-2'>
          <span>Find a Table</span>
        </button>
      </div>

      {/* Quick Filter Tags */}
      <div className='mt-8 flex flex-wrap gap-3 animate-in fade-in zoom-in duration-1000 delay-300'>
        {['Sushi', 'Italian', 'Rooftop', 'Family Friendly'].map((tag) => (
          <button
            key={tag}
            className='px-4 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground text-xs font-semibold hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all'
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LeftHero
