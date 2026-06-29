'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// SVG Icons (Heroicons outline)
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16c.012.307.012.617 0 .924Z" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export default function Navbar({ dict, lang }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const getTogglePath = () => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    if (segments[1] === 'ar') segments[1] = 'en'
    else if (segments[1] === 'en') segments[1] = 'ar'
    else return `/${lang === 'ar' ? 'en' : 'ar'}`
    return segments.join('/')
  }

  const togglePath = getTogglePath()
  const toggleLabel = lang === 'ar' ? 'English' : 'العربية'

  const menuItems = [
    { label: dict.nav.home,        href: `/${lang}` },
    { label: dict.nav.about,       href: `/${lang}/about` },
    { label: dict.nav.services,    href: `/${lang}/fuel-services` },
    { label: dict.nav.fleet,       href: `/${lang}/fleet` },
    { label: dict.nav.contracting, href: `/${lang}/contracting` },
    { label: dict.nav.safety,      href: `/${lang}/safety` },
    { label: dict.nav.contact,     href: `/${lang}/contact` },
  ]

  const isActive = (href) => {
    if (!pathname) return false
    if (href === `/${lang}`) return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between" style={{ height: 60 }}>

        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2.5 text-decoration-none navbar-brand" style={{ flexShrink: 0 }}>
          <div className="navbar-logo-wrap">
            <img
              src="/assets/logo_icon.svg"
              alt="Sky Star Logo"
              className="navbar-logo-img"
            />
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">{dict.common.companyName}</span>
            <span className="navbar-brand-sub">{dict.common.companySub}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: '2px' }}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(item.href) ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="#"
            className="lang-btn text-decoration-none"
            title={lang === 'ar' ? 'بوابة العملاء' : 'Client Portal'}
            aria-label={lang === 'ar' ? 'بوابة العملاء' : 'Client Portal'}
            style={{ padding: '0 12px', width: 'auto', display: 'flex', gap: 6, fontSize: '0.8125rem', minHeight: 44 }}
          >
            <UserIcon />
            <span className="hidden xl:inline">{lang === 'ar' ? 'بوابة العملاء' : 'Client Portal'}</span>
          </Link>

          <Link
            href={togglePath}
            className="lang-btn text-decoration-none"
            title={toggleLabel}
            aria-label={toggleLabel}
          >
            <GlobeIcon />
          </Link>

          <Link
            href={`/${lang}/contact`}
            className="btn btn-accent text-decoration-none navbar-cta"
            style={{ height: 44, padding: '0 20px', fontSize: '0.8125rem', borderRadius: 8, display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <PhoneIcon />
            {dict.common.requestSupply}
          </Link>
        </div>

        {/* Mobile Toggler */}
        <div className="flex lg:hidden items-center gap-1.5">
          <Link
            href="#"
            className="lang-btn text-decoration-none"
            style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title={lang === 'ar' ? 'بوابة العملاء' : 'Client Portal'}
            aria-label={lang === 'ar' ? 'بوابة العملاء' : 'Client Portal'}
          >
            <UserIcon />
          </Link>

          <Link
            href={togglePath}
            className="lang-btn text-decoration-none"
            style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title={toggleLabel}
            aria-label={toggleLabel}
          >
            <GlobeIcon />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: '8px',
              border: '1px solid var(--nav-border)',
              background: 'transparent',
              color: 'var(--nav-text)',
              cursor: 'pointer',
              transition: 'all 0.18s',
            }}
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — side drawer, not full-width */}
      {isOpen && (
        <>
          <div
            className="mobile-menu-backdrop lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-menu lg:hidden" role="dialog" aria-modal="true">
            <div className="flex flex-col" style={{ padding: '8px 0 16px' }}>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-decoration-none flex items-center justify-between mobile-menu-link"
                  style={{
                    color: isActive(item.href) ? 'var(--color-primary)' : 'var(--color-charcoal)',
                    backgroundColor: isActive(item.href) ? 'rgba(19,117,187,0.05)' : 'transparent',
                  }}
                >
                  {item.label}
                  <ChevronRightIcon />
                </Link>
              ))}
              <div style={{ padding: '14px 18px 0' }}>
                <Link
                  href={`/${lang}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary w-full text-decoration-none text-center"
                  style={{ borderRadius: 10, fontSize: '0.85rem' }}
                >
                  <PhoneIcon />
                  {dict.common.requestSupply}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
