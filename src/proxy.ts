import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'jp', 'vi'];
const locations = ['jp', 'sg'];
const defaultLocale = 'en';
const defaultLocation = 'jp';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameIsMissingSegments = !locales.some(
    (locale) => {
      return locations.some(
        (location) => {
          return pathname.startsWith(`/${locale}/${location}/`) || pathname === `/${locale}/${location}`;
        }
      );
    }
  );

  if (pathnameIsMissingSegments) {
    const savedLocale = request.cookies.get('NEXT_LANG')?.value || defaultLocale;
    const savedLocation = request.cookies.get('NEXT_LOCATION')?.value || defaultLocation;

    const finalLang = locales.includes(savedLocale) ? savedLocale : defaultLocale;
    const finalLoc = locations.includes(savedLocation) ? savedLocation : defaultLocation;

    const url = request.nextUrl.clone();
    url.pathname = `/${finalLang}/${finalLoc}${pathname === '/' ? '' : pathname}`;
    
    return NextResponse.redirect(url);
  }

  const segments = pathname.split('/');
  const currentLang = segments[1];
  const currentLocation = segments[2];

  const response = NextResponse.next();
  
  if (request.cookies.get('NEXT_LANG')?.value !== currentLang) {
    response.cookies.set('NEXT_LANG', currentLang, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  }
  if (request.cookies.get('NEXT_LOCATION')?.value !== currentLocation) {
    response.cookies.set('NEXT_LOCATION', currentLocation, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next|api|.*\\..*|favicon.ico).*)',
  ],
};
