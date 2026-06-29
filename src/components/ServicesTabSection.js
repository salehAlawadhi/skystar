'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// SVG Icons
const FuelDropIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
)

const TruckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 4v4h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const StarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export default function ServicesTabSection({ dict, lang }) {
  const [activeTab, setActiveTab] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef(null)

  const tabs = [
    {
      id: 'petrol91',
      label: lang === 'ar' ? 'بنزين 91' : 'Petrol 91',
      icon: <FuelDropIcon />,
      badge: { text: lang === 'ar' ? 'الأكثر طلباً' : 'Most Popular', color: '#1B9F8B' },
      title: dict.servicesPage.petrol91,
      desc: dict.servicesPage.petrol91Desc,
      features: lang === 'ar'
        ? ['توريد منظم للوقود', 'مناسب لمعظم المركبات', 'أداء موثوق وفعّال', 'تنسيق سريع للطلبات']
        : ['Organized fuel supply', 'Suitable for most vehicles', 'Reliable and efficient', 'Fast request coordination'],
      image: '/assets/images/site-fueling-construction.png',
      accent: '#1B9F8B',
      octane: '91',
    },
    {
      id: 'petrol95',
      label: lang === 'ar' ? 'بنزين 95' : 'Petrol 95',
      icon: <FuelDropIcon />,
      badge: { text: lang === 'ar' ? 'أداء عالي' : 'High Performance', color: '#1375BB' },
      title: dict.servicesPage.petrol95,
      desc: dict.servicesPage.petrol95Desc,
      features: lang === 'ar'
        ? ['مناسب للمحركات المتقدمة', 'توريد بكميات مرنة', 'مناسب للسيارات عالية الأداء', 'تنسيق حسب موقع العميل']
        : ['Suitable for advanced engines', 'Flexible supply quantities', 'For high-performance vehicles', 'Coordinated by client site'],
      image: '/assets/images/fleet-departure.png',
      accent: '#1375BB',
      octane: '95',
    },
    {
      id: 'diesel',
      label: lang === 'ar' ? 'ديزل' : 'Diesel',
      icon: <TruckIcon />,
      badge: { text: lang === 'ar' ? 'للمعدات الثقيلة' : 'Heavy Equipment', color: '#0B1B33' },
      title: dict.servicesPage.diesel,
      desc: dict.servicesPage.dieselDesc,
      features: lang === 'ar'
        ? ['مثالي للمعدات الثقيلة', 'مولدات الطاقة والمصانع', 'كميات كبيرة بأسعار تنافسية', 'خزانات من 6,000 - 36,000 لتر']
        : ['Ideal for heavy equipment', 'Power generators & factories', 'Bulk quantities at competitive prices', 'Tanks: 6,000 – 36,000 L'],
      image: '/assets/images/site-generator-fueling.png',
      accent: '#0B1B33',
      octane: 'D',
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabs.length)
      }, 5000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying, tabs.length])

  const handleTabClick = (index) => {
    setActiveTab(index)
    setIsAutoPlaying(false)
  }
  const active = tabs[activeTab]

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#FAFCFD' }}>
      <TechnicalLinesStatic opacity={0.03} />
      <div className="container relative z-10">
        {/* Section header */}
        <div className="section-header">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>{lang === 'ar' ? 'خدماتنا' : 'Our Services'}</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>{dict.servicesPage.subtitle}</h2>
          <p className="section-desc" style={{ marginTop: 8 }}>{dict.servicesPage.desc}</p>
        </div>

        {/* Tab Pills */}
        <div className="tab-pills" role="tablist" style={{ marginBottom: 40 }}>
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === i}
              className={`tab-pill${activeTab === i ? ' active' : ''}`}
              onClick={() => handleTabClick(i)}
              suppressHydrationWarning
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          key={activeTab}
          role="tabpanel"
          className="services-feature-grid"
          style={{
            animation: 'tabFadeIn 0.3s ease forwards',
          }}
        >
          {/* Left: Info */}
          <div className="services-feature-copy">
            <div className="flex items-center gap-3 flex-wrap">
              {active.badge && (
                <span
                  className="fuel-badge"
                  style={{
                    background: `${active.badge.color}18`,
                    color: active.badge.color,
                  }}
                >
                  <StarIcon />
                  {active.badge.text}
                </span>
              )}
              {active.octane && (
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accent}aa)`,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: active.octane.length > 1 ? '1.125rem' : '1.5rem',
                    boxShadow: `0 4px 16px ${active.accent}40`,
                  }}
                >
                  {active.octane}
                </div>
              )}
            </div>

            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--color-navy)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {active.title}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-steel-gray)', lineHeight: 1.75 }}>
              {active.desc}
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {active.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3" style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: `${active.accent}18`, color: active.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckIcon />
                  </span>
                  {f}
                </div>
              ))}
            </div>

            <Link href={`/${lang}/fuel-services`} className="btn btn-primary text-decoration-none" style={{ alignSelf: 'flex-start', marginTop: 8, background: active.accent !== '#0B1B33' ? active.accent : undefined }}>
              {dict.common.more}
              <ArrowIcon />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="services-feature-media" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
              className="services-image"
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,27,51,0.25), transparent)' }} />
          </div>
        </div>

        {/* Link to all services */}
        <div style={{ textAlign: 'center', marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border-color)' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-steel-gray)', marginBottom: 16 }}>
            {lang === 'ar'
              ? 'نوفر أيضاً توريداً دورياً وطلبات فورية حسب احتياج موقعك.'
              : 'We also offer scheduled supply and on-demand requests based on your site needs.'}
          </p>
          <Link href={`/${lang}/fuel-services`} className="btn btn-outline text-decoration-none" style={{ margin: '0 auto' }}>
            {lang === 'ar' ? 'استعرض جميع الخدمات' : 'View All Services'}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Static version of TechnicalLines for use inside client component
function TechnicalLinesStatic({ opacity = 0.05 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity,
        backgroundImage: `repeating-linear-gradient(45deg, rgba(109,110,113,0.5), rgba(109,110,113,0.5) 1px, transparent 1px, transparent 20px)`,
      }}
    />
  )
}
