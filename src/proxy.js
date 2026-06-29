import { NextResponse } from 'next/server'

let locales = ['ar', 'en']
let defaultLocale = 'ar'

function getLocale(request) {
  const acceptLang = request.headers.get('accept-language')
  if (acceptLang) {
    if (acceptLang.toLowerCase().includes('en')) {
      return 'en'
    }
  }
  return defaultLocale
}

export function proxy(request) {
  const { pathname } = request.nextUrl
  
  // Check if pathname already starts with /ar or /en
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return NextResponse.next()
  
  // Skip static assets, favicon, _next internal folder, and api paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }
  
  const locale = getLocale(request)
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url)
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: [
    // Match all request paths except _next, assets, api, favicon.ico
    '/((?!_next|assets|api|favicon.ico).*)',
  ],
}
