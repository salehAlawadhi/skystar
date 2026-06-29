import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function OperationalShowcase({ lang }) {
  const isAr = lang === 'ar'
  const items = [
    {
      image: '/assets/images/fleet-row.png',
      title: isAr ? 'منطقة تجهيز صناعية' : 'Industrial preparation area',
      text: isAr ? 'بيئة تشغيلية منظمة لتجهيز الإمداد قبل الانطلاق.' : 'An organized operating environment before supply dispatch.',
    },
    {
      image: '/assets/images/fleet-departure.png',
      title: isAr ? 'نقل ميداني بالصهاريج' : 'Tanker field transport',
      text: isAr ? 'صهاريج مخصصة لنقل الوقود إلى مواقع المشاريع والمنشآت.' : 'Fuel tankers serving project sites and operating facilities.',
    },
    {
      image: '/assets/images/site-night-ops.png',
      title: isAr ? 'تشغيل مستمر عند الحاجة' : 'Continuous operating support',
      text: isAr ? 'تركيز على الاستمرارية والسلامة في بيئات العمل الصناعية.' : 'Focused on continuity and safety in industrial operating environments.',
    },
  ]

  return (
    <section className="ops-showcase">
      <div className="container">
        <div className="ops-showcase-grid">
          <ScrollReveal animation="fade-up" className="ops-showcase-copy">
            <span className="eyebrow">{isAr ? 'على أرض التشغيل' : 'In Operation'}</span>
            <h2>{isAr ? 'تجهيز ونقل ودعم ميداني بوضوح تشغيلي' : 'Preparation, transport, and field support with operational clarity'}</h2>
            <p>
              {isAr
                ? 'تظهر الخدمة كما هي على أرض العمل: تجهيز منظم، صهاريج مهيأة، وتنسيق توريد يخدم استمرارية المنشآت والمشاريع.'
                : 'A grounded view of the service in action: organized preparation, equipped tankers, and supply coordination for facilities and projects.'}
            </p>
            <Link href={`/${lang}/contact`} className="btn btn-accent text-decoration-none">
              {isAr ? 'اطلب توريد الوقود' : 'Request Fuel Supply'} <ArrowIcon />
            </Link>
          </ScrollReveal>

          <div className="ops-image-stack">
            {items.map((item, index) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={index * 70} className={`ops-image-card card-${index + 1}`}>
                <div className="showcase-image" style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="ops-img-tri"></div>
                {index === 0 && (
                  <div className="ops-img-badge">
                    <div className="bv">KSA</div>
                    <div className="bk">{isAr ? 'تغطية المملكة' : 'Kingdom Coverage'}</div>
                  </div>
                )}
                <div className="ops-card-content">
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
