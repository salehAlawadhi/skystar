'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

// Professional Outline SVGs
const FactoryIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20M4 20V8l6-4 6 4v12M16 20V12l4-2 2 2v8M4 14h6M4 10h6M10 20v-6h6v6" />
  </svg>
)

const TruckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="14" height="11" rx="2" />
    <path d="M16 12h4l3 3v3h-7M2 12h14" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
)

const InspectIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
)

const PumpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22v-8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v8" />
    <path d="M5 12V6c0-1.1.9-2 2-2h.01" />
    <path d="M11 10.5V6a2 2 0 012-2h5c1.1 0 2 .9 2 2v10a2 2 0 01-2 2h-1" />
    <circle cx="16" cy="14" r="2" />
    <path d="M11 22h-8" />
  </svg>
)

const stepsAr = [
  {
    title: 'التحضير من المصدر',
    desc: 'فحص وتجهيز الصهريج في المنطقة الصناعية.',
    icon: <FactoryIcon />,
    image: '/assets/images/fleet-row.png',
  },
  {
    title: 'الأسطول والنقل',
    desc: 'انطلاق صهاريج الوقود وفق مسارات آمنة ومجدولة.',
    icon: <TruckIcon />,
    image: '/assets/images/fleet-departure.png',
  },
  {
    title: 'فحص موقع العميل',
    desc: 'التأكد من مطابقة الخزانات لاشتراطات التفريغ الآمن.',
    icon: <InspectIcon />,
    image: '/assets/images/site-fueling-construction.png',
  },
  {
    title: 'التفريغ المنظم',
    desc: 'تفريغ الوقود بأمان تحت إشراف طاقم مدرب.',
    icon: <PumpIcon />,
    image: '/assets/images/site-generator-fueling.png',
  },
]

const stepsEn = [
  {
    title: 'Preparation at Source',
    desc: 'Inspecting and preparing the tanker at the industrial zone.',
    icon: <FactoryIcon />,
    image: '/assets/images/fleet-row.png',
  },
  {
    title: 'Fleet & Transport',
    desc: 'Fuel tankers depart on safe and scheduled routes.',
    icon: <TruckIcon />,
    image: '/assets/images/fleet-departure.png',
  },
  {
    title: 'Site Inspection',
    desc: 'Ensuring client tanks meet safe unloading requirements.',
    icon: <InspectIcon />,
    image: '/assets/images/site-fueling-construction.png',
  },
  {
    title: 'Organized Unloading',
    desc: 'Safe fuel unloading under the supervision of a trained team.',
    icon: <PumpIcon />,
    image: '/assets/images/site-generator-fueling.png',
  },
]

export default function SupplyJourneyCards({ lang }) {
  const isArabic = lang === 'ar'
  const steps = isArabic ? stepsAr : stepsEn
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible', 'no-motion')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="premium-journey-section">
      <div className="container relative z-10">

        <div className="premium-journey-header">
          <span className="premium-eyebrow">{isArabic ? 'من المصدر إلى منشأتك' : 'From the Source to Your Facility'}</span>
          <h2 className="premium-journey-title">
            {isArabic ? 'رحلة الإمداد لا تتوقف' : 'An Unstoppable Supply Journey'}
          </h2>
          <p className="premium-journey-desc">
            {isArabic
              ? 'دورة تشغيلية متكاملة تضمن وصول الوقود لمنشأتك بأعلى معايير السلامة.'
              : 'An integrated operational cycle ensuring fuel reaches your facility with the highest safety standards.'}
          </p>
        </div>

        <div className="premium-journey-grid">
          <div className="premium-journey-track" aria-hidden="true" />
          {steps.map((step, idx) => (
            <div key={idx} className="premium-journey-card" style={{ transitionDelay: `${idx * 110}ms` }}>
              <div className="premium-journey-card-photo">
                <Image src={step.image} alt={step.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="premium-journey-card-body">
                <div className="premium-journey-card-step">{String(idx + 1).padStart(2, '0')}</div>
                <div className="premium-journey-card-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
