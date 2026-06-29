'use client'

import Link from 'next/link'
import Image from 'next/image'

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16c.012.307.012.617 0 .924Z" />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer({ dict, lang }) {
  const year = new Date().getFullYear()
  const isAr = lang === 'ar'

  const navLinks = [
    { label: dict.nav.home, href: `/${lang}` },
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.services, href: `/${lang}/fuel-services` },
    { label: dict.nav.fleet, href: `/${lang}/fleet` },
    { label: dict.nav.safety, href: `/${lang}/safety` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ]

  const contacts = [
    { label: dict.contactPage?.ceo || (isAr ? 'الرئيس التنفيذي' : 'CEO'), value: '059 312 3813', href: 'tel:+966593123813' },
    { label: dict.contactPage?.gm || (isAr ? 'المدير العام' : 'General Manager'), value: '050 701 0703', href: 'tel:+966507010703' },
    { label: dict.common.email, value: 'info@skystar-ksa.com', href: 'mailto:info@skystar-ksa.com' },
  ]

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span>{isAr ? 'جاهز لتنسيق التوريد؟' : 'Ready to coordinate supply?'}</span>
            <h2>{isAr ? 'أرسل احتياج موقعك وخلي الفريق يرتب التفاصيل.' : 'Send your site needs and let the team coordinate the details.'}</h2>
          </div>
          <Link href={`/${lang}/contact`} className="btn btn-accent text-decoration-none">
            {dict.common.requestSupply}
            <ArrowIcon />
          </Link>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <Image src="/assets/images/logo_icon.png" alt="Sky Star" width={40} height={40} />
              <div>
                <strong>{dict.common.companyName}</strong>
                <span>{dict.common.companySub}</span>
              </div>
            </div>
            <p>
              {isAr
                ? 'موقع يعرض خدمات توريد ونقل الوقود بطريقة واضحة ومهنية للشركات والمنشآت والمشاريع.'
                : 'A clear professional presentation of fuel supply and transport services for companies, facilities, and projects.'}
            </p>
          </div>

          <div className="footer-links">
            <h3>{isAr ? 'التنقل' : 'Navigation'}</h3>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>

          <div className="footer-links">
            <h3>{isAr ? 'الخدمات' : 'Services'}</h3>
            <Link href={`/${lang}/fuel-services`}>{isAr ? 'بنزين 91 و 95' : 'Petrol 91 & 95'}</Link>
            <Link href={`/${lang}/fuel-services`}>{isAr ? 'ديزل للمعدات' : 'Diesel for equipment'}</Link>
            <Link href={`/${lang}/fleet`}>{isAr ? 'نقل بالصهاريج' : 'Tanker transport'}</Link>
            <Link href={`/${lang}/contracting`}>{dict.nav.contracting}</Link>
          </div>

          <div className="footer-contact-card">
            <h3>{isAr ? 'تواصل مباشر' : 'Direct Contact'}</h3>
            {contacts.map((item) => (
              <a key={item.href} href={item.href}>
                <span>{item.href.startsWith('mailto') ? <MailIcon /> : <PhoneIcon />}</span>
                <div>
                  <small>{item.label}</small>
                  <strong dir={item.href.startsWith('tel') ? 'ltr' : undefined}>{item.value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} {dict.common.companyName}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link href={`/${lang}/privacy`}>{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
            <Link href={`/${lang}/terms`}>{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</Link>
            <button suppressHydrationWarning onClick={scrollToTop} aria-label={isAr ? 'العودة للأعلى' : 'Back to top'}>
              <ArrowUpIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
