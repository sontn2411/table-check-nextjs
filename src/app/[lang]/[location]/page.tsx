import { Locale } from '@/lib/get-dictionary'
import { notFound } from 'next/navigation'
import Hero from '@/components/home/heroSection/Hero'
import Promotions from '@/components/home/promotions/Promotions'
import RestaurantList from '@/components/home/restaurant/RestaurantList'
import PopularLists from '@/components/home/popular/PopularLists'
import Categories from '@/components/home/categories/Categories'
import { Footer } from '@/components/shared/Footer'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string; location: string }>
}) {
  const { lang, location } = await params

  const supportedLocales: Locale[] = ['en', 'jp', 'vi']
  const supportedLocations = ['jp', 'sg']

  if (
    !supportedLocales.includes(lang as Locale) ||
    !supportedLocations.includes(location)
  ) {
    notFound()
  }

  return (
    <div className='flex  flex-col min-h-[200vh] bg-background font-sans selection:bg-primary/30 selection:text-primary-foreground'>
      <main className='flex-1 flex flex-col'>
        <Hero />

        <Promotions />

        <RestaurantList />

        <PopularLists />

        <Categories />
      </main>

      <Footer />
    </div>
  )
}
