import { getDictionary } from '../get-dictionary'
import TechnicalLines from '@/components/TechnicalLines'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const isAr = lang === 'ar'
  
  return {
    title: isAr ? 'من نحن | شركة نجمة السماء للوقود' : 'About Us | Sky Star Fuel Company',
    description: isAr ? 'تعرف على تاريخنا وقدراتنا في توريد ونقل الوقود لقطاع الأعمال في المملكة.' : 'Learn about our history and capabilities in fuel supply for businesses in Saudi Arabia.'
  }
}
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import Image from 'next/image'

const ShieldIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

export default async function AboutPage({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main>
        {/* Page Hero */}
        <section className="hero-section" style={{ height: '40vh', minHeight: '400px' }}>
          <div className="hero-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image src="/assets/images/fleet-row.png" alt="Sky Star fleet at headquarters" fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="hero-overlay" />
          <TechnicalLines opacity={0.04} />
          
          <div className="container relative z-10" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: 60 }}>
            <ScrollReveal animation="fade-up">
              <div className="hero-badge" style={{ marginBottom: 24 }}>
                <ShieldIcon size={16} />
                {lang === 'ar' ? 'من نحن' : 'About Us'}
              </div>
              <h1 className="hero-title">{dict.nav.about}</h1>
              <p className="hero-subtitle" style={{ maxWidth: '700px', marginTop: 16 }}>
                {lang === 'ar' 
                  ? 'رؤية طموحة، وأسطول متطور لضمان استمرارية أعمالكم بأعلى معايير الأمان والجودة.' 
                  : 'An ambitious vision and an advanced fleet to ensure your business continuity with the highest safety and quality standards.'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 section-bg-light">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="fade-right">
                <div>
                  <span className="eyebrow">{lang === 'ar' ? 'رحلتنا' : 'Our Journey'}</span>
                  <h2 className="section-title" style={{ marginTop: 12 }}>{dict.aboutPage.introTitle}</h2>
                  <p className="section-desc" style={{ marginTop: 24, fontSize: '1.1rem' }}>{dict.aboutPage.introText}</p>
                  <p className="section-desc" style={{ marginTop: 16 }}>{dict.aboutPage.fleetText}</p>
                  
                  <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div style={{ padding: 24, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 8 }}>
                        <AnimatedCounter prefix="+" end="25" />
                      </div>
                      <p style={{ fontWeight: 700, color: '#555' }}>{lang === 'ar' ? 'عام من الخبرة' : 'Years of Experience'}</p>
                    </div>
                    <div style={{ padding: 24, background: '#fff', borderRadius: 16, border: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 8 }}>
                        <AnimatedCounter end="24" suffix="/7" />
                      </div>
                      <p style={{ fontWeight: 700, color: '#555' }}>{lang === 'ar' ? 'دعم مستمر' : 'Continuous Support'}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={200}>
                <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', height: 600 }}>
                  <Image 
                    src="/assets/images/site-construction.png" 
                    alt="Operations Worker" 
                    fill
                    style={{ objectFit: 'cover' }} 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,27,51,0.8), transparent)' }}></div>
                  <div style={{ position: 'absolute', bottom: 30, left: 30, right: 30, color: '#fff' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>{lang === 'ar' ? 'التزام بالجودة' : 'Commitment to Quality'}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>{lang === 'ar' ? 'نطبق أعلى معايير الأيزو والسلامة المهنية.' : 'We apply the highest ISO and occupational safety standards.'}</p>
                  </div>
                </div>
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
