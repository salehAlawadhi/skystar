import { getDictionary } from '../get-dictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TechnicalLines from '@/components/TechnicalLines'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { WaveDown, WaveUp } from '@/components/Wave'
import Image from 'next/image'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const dict = await getDictionary(lang)
  return {
    title: `${dict.nav.fleet} | ${dict.common.companyName}`,
    alternates: { languages: { ar: '/ar/fleet', en: '/en/fleet' } },
  }
}

// ──────────────────────── SVG ICONS ────────────────────────
const LargeTruckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 4v4h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
    <line x1="6" y1="9" x2="11" y2="9" />
    <line x1="6" y1="12" x2="11" y2="12" />
  </svg>
)

const SmallTruckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="11" height="11" rx="1" />
    <path d="M13 9h4l2.5 3v3.5h-6.5V9z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="15.5" cy="18.5" r="2.5" />
  </svg>
)

// ──────────────────────── WAVE HELPERS ────────────────────────


export default async function FleetPage({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar dict={dict} lang={lang} />

      <main>
        {/* ══════════════════════ HERO ══════════════════════ */}
        <section className="relative py-28 overflow-hidden" style={{ backgroundColor: '#0B1B33', color: '#ffffff' }}>
          <div className="absolute inset-0 z-0 opacity-20">
            <Image src="/assets/images/fleet-evening.png" alt="Sky Star fleet at golden hour" fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to bottom, rgba(11,27,51,0.85), #0B1B33)' }} />

          <TechnicalLines opacity={0.06} className="z-10" />
          <div className="blob blob-accent" style={{ width: 550, height: 550, top: -120, right: -120, opacity: 0.25 }} aria-hidden="true" />

          <div className="container relative z-10 text-center flex flex-col gap-4">
            <ScrollReveal animation="fade-up" delay={0}>
              <span className="eyebrow eyebrow-white" style={{ justifyContent: 'center', marginBottom: 12 }}>
                {dict.common.companyName}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={80}>
              <h1 className="font-extrabold tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#ffffff', letterSpacing: '-0.02em' }}>
                {dict.fleetPage.title}
              </h1>
            </ScrollReveal>
          </div>

          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full z-20" style={{ lineHeight: 0 }}>
            <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
              <path d="M0 32L1440 32L1440 0C1100 24 750 0 450 16C150 32 0 8 0 0Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* ══════════════════════ INTRO SECTION ══════════════════════ */}
        <section className="py-24 relative" style={{ backgroundColor: '#ffffff' }}>
          <div className="blob blob-primary" style={{ width: 600, height: 600, top: -200, left: -200, opacity: 0.25 }} aria-hidden="true" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 gap-12 items-center" style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' }}>
              
              {/* Text column */}
              <ScrollReveal animation="fade-right" delay={0} style={{ gridColumn: 'span 7 / span 7', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <span className="eyebrow">{lang === 'ar' ? 'الأسطول اللوجستي' : 'Logistics Fleet'}</span>
                <h2 className="text-3xl font-extrabold" style={{ color: '#0B1B33', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                  {lang === 'ar' ? 'تشغيل ذاتي مرن ومستمر' : 'Flexible & Continuous Self-Operation'}
                </h2>
                <div style={{ height: 3, width: 60, background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))', borderRadius: 999 }} />
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500 }}>
                  {dict.fleetPage.desc}
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500 }}>
                  {dict.fleetPage.statusDesc}
                </p>
              </ScrollReveal>

              {/* Image column */}
              <ScrollReveal animation="fade-left" delay={120} style={{ gridColumn: 'span 5 / span 5' }}>
                <div className="img-zoom-wrap" style={{ borderRadius: 24, height: 380, boxShadow: 'var(--shadow-xl)', position: 'relative' }}>
                  <img
                    src="/assets/images/fleet-departure.png"
                    alt="Sky Star Tanker Capacities"
                    className="w-full h-full object-cover"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,27,51,0.4), transparent)' }} />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* Wave divider */}
        <WaveUp fill="#F6F7F9" from="#ffffff" />

        {/* ══════════════════════ CAPACITY HIGHLIGHTS ══════════════════════ */}
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#F6F7F9' }}>
          <TechnicalLines opacity={0.03} />
          <div className="blob blob-accent" style={{ width: 500, height: 500, bottom: -100, right: -100, opacity: 0.2 }} aria-hidden="true" />

          <div className="container relative z-10 flex flex-col gap-12">
            
            <ScrollReveal animation="fade-up">
              <div className="card-gradient-border" style={{ padding: '40px 48px' }}>
                
                <div className="flex items-center gap-4 mb-6 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(19,117,187,0.08)', color: 'var(--color-primary)' }}>
                    <LargeTruckIcon />
                  </div>
                  <h3 className="text-2xl font-extrabold" style={{ color: '#0B1B33', margin: 0 }}>
                    {dict.fleetPage.capTitle}
                  </h3>
                </div>

                <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-steel-gray)', fontWeight: 500 }}>
                  {dict.fleetPage.capDesc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 6k L Card */}
                  <div className="flex flex-col gap-4 p-6 rounded-2xl fleet-card-hover">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(27,159,139,0.12)', color: '#1B9F8B' }}>
                        <SmallTruckIcon />
                      </div>
                      <div className="text-xl font-black" style={{ color: '#1B9F8B', letterSpacing: '-0.01em' }}>
                        6,000 L
                      </div>
                    </div>
                    <h4 className="text-lg font-bold" style={{ color: '#0B1B33', margin: 0 }}>
                      {lang === 'ar' ? 'الصهاريج الخفيفة والمتوسطة' : 'Light & Medium Tankers'}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500, margin: 0 }}>
                      {lang === 'ar'
                        ? 'مخصصة للمواقع الإنشائية ذات المساحات الضيقة والمشاريع المتوسطة والشركات التي تحتاج إمداداً دورياً محدوداً.'
                        : 'Designed for construction sites with tight spaces, medium projects, and companies needing limited periodic supply.'}
                    </p>
                  </div>

                  {/* 36k L Card */}
                  <div className="flex flex-col gap-4 p-6 rounded-2xl fleet-card-hover">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(19,117,187,0.12)', color: 'var(--color-primary)' }}>
                        <LargeTruckIcon />
                      </div>
                      <div className="text-xl font-black" style={{ color: 'var(--color-primary)', letterSpacing: '-0.01em' }}>
                        36,000 L
                      </div>
                    </div>
                    <h4 className="text-lg font-bold" style={{ color: '#0B1B33', margin: 0 }}>
                      {lang === 'ar' ? 'الصهاريج ذات السعة الكبيرة' : 'Higher Capacity Tankers'}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500, margin: 0 }}>
                      {lang === 'ar'
                        ? 'مناسبة للمصانع والمنشآت ومواقع المشاريع والتشغيل البعيدة ذات الاستهلاك المرتفع.'
                        : 'Suitable for factories, facilities, and remote project sites with higher fuel consumption.'}
                    </p>
                  </div>

                  {/* Smart Control Section */}
                  <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border-color)' }}>
                    <h4 className="text-lg font-extrabold mb-6" style={{ color: '#0B1B33', textAlign: 'center' }}>
                      {lang === 'ar' ? 'أنظمة الأمان والتحكم الذكي بالأسطول' : 'Fleet Safety & Smart Control Systems'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { title: lang === 'ar' ? 'تنسيق مسار الرحلة' : 'Route Coordination', desc: lang === 'ar' ? 'تنسيق حركة الصهاريج بما يتناسب مع موقع العميل وطبيعة الطلب.' : 'Coordinating tanker movement according to client site and request needs.' },
                        { title: lang === 'ar' ? 'صمامات وتجهيزات أمان' : 'Safety Valves & Hardware', desc: lang === 'ar' ? 'تجهيزات تساعد على تقليل مخاطر التسرب أثناء النقل والتفريغ.' : 'Hardware that helps reduce leakage risks during transport and discharge.' },
                        { title: lang === 'ar' ? 'معدات مكافحة الحريق' : 'Firefighting Equipment', desc: lang === 'ar' ? 'تجهيزات سلامة داعمة لطبيعة نقل وتفريغ الوقود.' : 'Safety equipment supporting fuel transport and discharge operations.' },
                        { title: lang === 'ar' ? 'طاقم ميداني مؤهل' : 'Trained Field Team', desc: lang === 'ar' ? 'فريق يتعامل مع طلبات الوقود وفق إجراءات تشغيل وسلامة واضحة.' : 'A team handling fuel requests through clear operating and safety procedures.' },
                      ].map((feat, idx) => (
                        <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl goal-item-hover" style={{ border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.4)' }}>
                          <span className="text-xs font-bold" style={{ color: 'var(--color-primary)' }}>✓ {feat.title}</span>
                          <p className="text-xs font-semibold leading-relaxed" style={{ color: 'var(--color-steel-gray)', margin: 0 }}>
                            {feat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* Wave divider */}
        <WaveDown fill="#0B1B33" from="#F6F7F9" />

        {/* ══════════════════════ CTA SECTION ══════════════════════ */}
        <section className="py-24 text-white text-center relative overflow-hidden" style={{ backgroundColor: '#0B1B33' }}>
          <TechnicalLines opacity={0.06} />
          <div className="blob blob-primary" style={{ width: 600, height: 600, top: -200, left: '30%', opacity: 0.2 }} aria-hidden="true" />
          
          <div className="container relative z-10 flex flex-col items-center gap-8">
            <ScrollReveal animation="fade-up">
              <h2 className="font-extrabold leading-relaxed" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', maxWidth: '44rem', color: '#ffffff', letterSpacing: '-0.01em', margin: '0 auto' }}>
                {lang === 'ar'
                  ? 'هل تحتاج جدول إمداد وقود مخصص لأسطولك أو منشأتك؟'
                  : 'Need a customized fuel supply schedule for your fleet or facility?'}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                <Link href={`/${lang}/contact`} className="btn btn-accent text-decoration-none" style={{ borderRadius: 10 }}>
                  {dict.common.requestSupply}
                </Link>
                <Link href={`/${lang}/contact`} className="btn btn-outline-white text-decoration-none" style={{ borderRadius: 10 }}>
                  {dict.common.contactUs}
                </Link>
              </div>
            </ScrollReveal>
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
