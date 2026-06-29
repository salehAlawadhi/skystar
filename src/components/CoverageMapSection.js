'use client'

import dynamic from 'next/dynamic'
import ScrollReveal from './ScrollReveal'

const CoverageMapLeaflet = dynamic(() => import('./CoverageMapLeaflet'), {
  ssr: false,
  loading: () => <div className="ksa-leaflet-map ksa-leaflet-map-loading" />,
})

export default function CoverageMapSection({ lang }) {
  const isAr = lang === 'ar'

  return (
    <section className="coverage-map-section py-24 section-bg-light" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container relative z-10">
        <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="eyebrow">{isAr ? 'نطاق التغطية' : 'Coverage Area'}</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              {isAr ? 'نطاق خدمة قابل للتنسيق حسب موقع مشروعك' : 'Service Range Coordinated by Project Location'}
            </h2>
            <p className="section-desc" style={{ margin: '16px auto 0 auto', maxWidth: 600 }}>
              {isAr
                ? 'ننسّق التوريد لمواقع المشاريع داخل المملكة العربية السعودية حسب الكمية والمسافة والجدول الزمني.'
                : 'We coordinate fuel supply for project sites within Saudi Arabia based on quantity, distance, and schedule.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="map-frame">
          <CoverageMapLeaflet lang={lang} />
        </div>
      </div>
    </section>
  )
}
