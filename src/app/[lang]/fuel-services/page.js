import { getDictionary } from '../get-dictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TechnicalLines from '@/components/TechnicalLines'
import ScrollReveal from '@/components/ScrollReveal'
import ServicesTabSection from '@/components/ServicesTabSection'
import Image from 'next/image'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const isAr = lang === 'ar'
  
  return {
    title: isAr ? 'خدمات الوقود | شركة نجمة السماء للوقود' : 'Fuel Services | Sky Star Fuel Company',
    description: isAr ? 'توريد موثوق للديزل والبنزين بكافة أنواعه للمصانع والشركات.' : 'Reliable supply of diesel and petrol for factories and businesses.'
  }
}

const FuelIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12" />
    <path d="M19 2v4l2 2-2 2V12" /><path d="M7 14h4" /><path d="M7 10h4" /><path d="M3 22h14" />
  </svg>
)

export default async function ServicesPage({ params }) {
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
            <Image src="/assets/images/site-fueling-construction.png" alt="Fueling at a construction site" fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="hero-overlay" />
          <TechnicalLines opacity={0.04} />
          
          <div className="container relative z-10" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: 60 }}>
            <ScrollReveal animation="fade-up">
              <div className="hero-badge" style={{ marginBottom: 24 }}>
                <FuelIcon size={16} />
                {dict.nav.fuelServices}
              </div>
              <h1 className="hero-title">{lang === 'ar' ? 'حلول طاقة متكاملة' : 'Integrated Energy Solutions'}</h1>
              <p className="hero-subtitle" style={{ maxWidth: '700px', marginTop: 16 }}>
                {lang === 'ar' 
                  ? 'نوفر البنزين 91، البنزين 95، والديزل بأعلى معايير الجودة لتشغيل مشاريعكم بكفاءة تامة.' 
                  : 'We provide Petrol 91, Petrol 95, and Diesel with the highest quality standards to run your projects efficiently.'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Since we already built a perfect ServicesTabSection, we will reuse it here! */}
        <ServicesTabSection dict={dict} lang={lang} />
        
        {/* Additional Info Section */}
        <section className="py-24 section-bg-light">
          <div className="container">
            <ScrollReveal animation="fade-up">
              <div style={{ background: '#fff', padding: '60px', borderRadius: 24, textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                <h2 className="section-title" style={{ marginBottom: 16 }}>{lang === 'ar' ? 'تحتاج لكميات ضخمة لمشروعك؟' : 'Need bulk quantities for your project?'}</h2>
                <p style={{ color: '#555', maxWidth: 600, margin: '0 auto 32px auto', fontSize: '1.1rem' }}>
                  {lang === 'ar' 
                    ? 'فريق المبيعات لدينا مستعد لتقديم أسعار تنافسية وجدولة إمداد مخصصة تتناسب مع متطلبات مشروعك بالضبط.' 
                    : 'Our sales team is ready to offer competitive pricing and custom supply scheduling tailored to your project requirements.'}
                </p>
                <a href={`/${lang}/contact`} className="btn btn-accent text-decoration-none" style={{ display: 'inline-flex', padding: '0 32px' }}>
                  {lang === 'ar' ? 'اطلب عرض سعر خاص' : 'Request Custom Quote'}
                </a>
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
