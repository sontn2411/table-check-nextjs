'use client'
import Link from 'next/link'
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
  MapPin,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className='bg-muted/50 border-t border-border/50 pt-16 pb-8'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          {/* Brand and Mission */}
          <div className='flex flex-col gap-6'>
            <span className='text-2xl font-extrabold tracking-tighter text-primary'>
              TableCheck
            </span>
            <p className='text-sm text-muted-foreground leading-relaxed max-w-xs'>
              TableCheck is the leading restaurant booking platform in Japan and
              Southeast Asia, connecting diners with extraordinary dining
              experiences.
            </p>
            <div className='flex items-center gap-4'>
              <div className='h-9 w-9 rounded-full bg-background border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer'>
                <Facebook className='h-4 w-4' />
              </div>
              <div className='h-9 w-9 rounded-full bg-background border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer'>
                <Instagram className='h-4 w-4' />
              </div>
              <div className='h-9 w-9 rounded-full bg-background border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer'>
                <Twitter className='h-4 w-4' />
              </div>
              <div className='h-9 w-9 rounded-full bg-background border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer'>
                <Youtube className='h-4 w-4' />
              </div>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className='font-bold mb-6'>For Diners</h4>
            <ul className='flex flex-col gap-4 text-sm text-muted-foreground'>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Search for Restaurants
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Popular Areas
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Cuisines
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className='font-bold mb-6'>For Restaurateurs</h4>
            <ul className='flex flex-col gap-4 text-sm text-muted-foreground'>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  TableCheck Connect
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  TableCheck Insight
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary transition-colors'>
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Apps and Support */}
          <div>
            <h4 className='font-bold mb-6'>Join Us</h4>
            <div className='flex flex-col gap-4'>
              <button className='w-full h-12 rounded-xl bg-foreground text-background font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity'>
                Download on App Store
              </button>
              <button className='w-full h-12 rounded-xl bg-foreground text-background font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity'>
                Get it on Google Play
              </button>
              <div className='mt-4 flex items-center gap-2 text-xs text-muted-foreground'>
                <Globe className='h-3 w-3' />
                <span>English (United Kingdom)</span>
              </div>
              <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                <MapPin className='h-3 w-3' />
                <span>Singapore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest'>
          <div>© 2026 TABLECHECK INC. ALL RIGHTS RESERVED.</div>
          <div className='flex gap-8'>
            <Link href='#' className='hover:text-primary transition-colors'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-primary transition-colors'>
              Terms of Service
            </Link>
            <Link href='#' className='hover:text-primary transition-colors'>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
