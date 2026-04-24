import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { Header } from '@/components/shared/Header'
import { BottomNav } from '@/components/shared/BottomNav'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TableCheck',
  description: 'Restaurant booking platform',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export async function generateStaticParams() {
  const languages = ['en', 'jp', 'vi']

  const params = []
  for (const lang of languages) {
    params.push({ lang })
  }
  return params
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <main className='flex-1 pb-16 md:pb-0 mt-20'>{children}</main>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  )
}
