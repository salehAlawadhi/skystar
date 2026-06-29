import { getDictionary } from './get-dictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import TechnicalLines from '@/components/TechnicalLines'
import ServicesTabSection from '@/components/ServicesTabSection'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import Image from 'next/image'
import IndustriesSection from '@/components/IndustriesSection'
import SupplyJourneyCards from '@/components/SupplyJourneyCards'
import ClientsMarquee from '@/components/ClientsMarquee'
import CoverageMapSection from '@/components/CoverageMapSection'
import FAQSection from '@/components/FAQSection'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const ArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)
const TruckIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 4v4h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)
const ClockIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const FuelIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12" />
    <path d="M19 2v4l2 2-2 2V12" /><path d="M7 14h4" /><path d="M7 10h4" /><path d="M3 22h14" />
  </svg>
)
const CogIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)
const ShieldIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const STATS = [
  { Icon: ClockIcon, value: '24/7', label: (d) => d.trust.hours, accent: '#1375BB' },
  { Icon: TruckIcon, value: '6-36K L', label: (d) => d.trust.capacity, accent: '#1B9F8B' },
  { Icon: FuelIcon, value: '91 / 95 / D', label: (d) => d.trust.products, accent: '#1375BB' },
  { Icon: CogIcon, value: (l) => (l === 'ar' ? 'أسطول' : 'Fleet'), label: (d) => d.trust.fleet, accent: '#1B9F8B' },
]

export default async function HomePage({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const dict = await getDictionary(lang)

  const safetySteps = [
    {
      num: '01',
      title: lang === 'ar' ? 'تجهيز قبل الانطلاق' : 'Pre-dispatch preparation',
      text: lang === 'ar' ? 'مراجعة الطلب والكمية ونقطة الوصول قبل تجهيز الصهريج.' : 'Reviewing order, quantity, and destination before dispatch.',
    },
    {
      num: '02',
      title: lang === 'ar' ? 'نقل منظم' : 'Organized transport',
      text: lang === 'ar' ? 'ترتيب حركة الصهاريج بما يخدم جدول العميل.' : 'Coordinating tanker movement around the client schedule.',
    },
    {
      num: '03',
      title: lang === 'ar' ? 'وعي بالسلامة' : 'Safety awareness',
      text: lang === 'ar' ? 'تعامل حذر ومسؤول مع المواد القابلة للاشتعال.' : 'Careful, responsible handling of flammable materials.',
    },
  ]

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main>

        {/* 1 — HERO */}
        <section className="hero-section">
          <div className="hero-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src="/assets/images/hero-tanker-desert.jpeg" alt={lang === 'ar' ? 'صهريج نجمة السماء على طريق صحراء سعودية وقت الغروب' : 'Sky Star fuel tanker on a Saudi desert highway at sunset'} fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="hero-overlay" />
          <TechnicalLines opacity={0.04} />

          <div className="container relative z-10">
            <div className="hero-content">
              <ScrollReveal animation="fade-up" delay={0}>
                <div className="hero-badge" style={{ marginBottom: 24 }}>
                  <ShieldIcon />
                  {dict.hero.badge}
                  <span className="pulse-dot" />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={80}>
                <h1 className="hero-title" style={{ marginBottom: 20 }}>{dict.hero.title}</h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={160}>
                <p className="hero-subtitle" style={{ marginBottom: 28 }}>{dict.hero.subtitle}</p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={240}>
                <div className="hero-actions">
                  <Link href="#quote-request" className="btn btn-accent text-decoration-none">{dict.common.requestSupply}</Link>
                  <Link href={`/${lang}/fuel-services`} className="btn btn-outline-white text-decoration-none">{dict.common.exploreServices}</Link>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="hero-scroll-cue hidden lg:flex" style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.7 }}>
              <div style={{ width: 24, height: 40, border: '2px solid rgba(255,255,255,0.4)', borderRadius: 12, position: 'relative' }}>
                <div style={{ width: 4, height: 6, background: '#fff', borderRadius: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 6, animation: 'scrollCue 2s infinite' }} />
              </div>
            </div>
          </div>

          <div className="hero-data-strip">
            <div className="container">
              <div className="hero-stats-grid">
                {STATS.map(({ Icon, value, label, accent }, i) => (
                  <div key={i} className="hero-stat-item">
                    <div className="hero-stat-icon" style={{ color: accent }}>
                      <Icon />
                    </div>
                    <div>
                      <div className="hero-stat-value">
                        {typeof value === 'function' ? value(lang) : value}
                      </div>
                      <div className="hero-stat-label">{label(dict)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 — CLIENTS MARQUEE (HIDDEN FOR NOW) */}
        <ClientsMarquee lang={lang} />

        {/* 2 — SUPPLY JOURNEY */}
        <SupplyJourneyCards lang={lang} />

        {/* 3 — SERVICES */}
        <ServicesTabSection dict={dict} lang={lang} />

        {/* 5 — SAFETY + SECTORS */}
        <section className="home-safety-band">
          <div className="container">
            <ScrollReveal animation="fade-up">
              <div className="home-safety-header">
                <span className="eyebrow">{lang === 'ar' ? 'السلامة والجودة' : 'Safety & Quality'}</span>
                <h2 className="section-title-home">
                  {lang === 'ar' ? 'انضباط تشغيلي يحافظ على موثوقية الإمداد' : 'Operational discipline that supports reliable supply'}
                </h2>
              </div>
            </ScrollReveal>
            <div className="home-safety-grid">
              {safetySteps.map((step, i) => (
                <ScrollReveal key={step.num} animation="fade-up" delay={i * 60}>
                  <div className="home-safety-card">
                    <span className="home-safety-num">{step.num}</span>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal animation="fade-up" delay={180}>
              <div className="home-safety-footer">
                <Link href={`/${lang}/safety`} className="btn btn-outline text-decoration-none">
                  {dict.common.more} <ArrowIcon />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 5.5 — COVERAGE MAP */}
        <CoverageMapSection lang={lang} dict={dict} />

        <IndustriesSection lang={lang} />

        {/* 5.8 — FAQ SECTION */}
        <FAQSection lang={lang} />

        {/* 6 — CTA + QUOTE */}
        <section className="home-cta-section" id="quote-request">
          <TechnicalLines opacity={0.05} />
          <div className="container relative z-10">
            <div className="home-cta-grid">
              <ScrollReveal animation="fade-right">
                <div className="home-cta-copy">
                  <span className="eyebrow eyebrow-white">{lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}</span>
                  <h2>{dict.safetyPage.subtitle}</h2>
                  <p>{dict.safetyPage.desc}</p>
                  <ul className="home-cta-checklist">
                    {[
                      lang === 'ar' ? 'تجهيز الطلب قبل الإرسال' : 'Request prepared before dispatch',
                      lang === 'ar' ? 'تنسيق الكمية والموقع' : 'Quantity and site coordination',
                      lang === 'ar' ? 'متابعة حتى اكتمال الخدمة' : 'Follow-up through completion',
                    ].map((item) => (
                      <li key={item}><CheckIcon />{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={100}>
                <QuoteForm dict={dict} lang={lang} variant="premium" />
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }]
}
