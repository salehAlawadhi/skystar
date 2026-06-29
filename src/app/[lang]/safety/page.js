import { getDictionary } from '../get-dictionary'
import TechnicalLines from '@/components/TechnicalLines'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const isAr = lang === 'ar'
  
  return {
    title: isAr ? 'السلامة والجودة | شركة نجمة السماء للوقود' : 'Safety & Quality | Sky Star Fuel Company',
    description: isAr ? 'نلتزم بأعلى معايير السلامة في النقل والتوريد لضمان استمرارية أعمالكم بأمان.' : 'Committed to the highest safety standards in transport and supply.'
  }
}
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

const ShieldCheckIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export default async function SafetyPage({ params }) {
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
            <Image src="/assets/images/site-construction.png" alt="Safety Background" fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="hero-overlay" />
          <TechnicalLines opacity={0.04} />
          
          <div className="container relative z-10" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: 60 }}>
            <ScrollReveal animation="fade-up">
              <div className="hero-badge" style={{ marginBottom: 24 }}>
                <ShieldCheckIcon size={16} />
                {dict.nav.safety}
              </div>
              <h1 className="hero-title">{lang === 'ar' ? 'السلامة أولاً ودائماً' : 'Safety First & Always'}</h1>
              <p className="hero-subtitle" style={{ maxWidth: '700px', marginTop: 16 }}>
                {lang === 'ar' 
                  ? 'بروتوكولات صارمة لحماية الأرواح، الممتلكات، والبيئة في كل قطرة وقود ننقلها.' 
                  : 'Strict protocols to protect lives, properties, and the environment in every drop of fuel we transport.'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 section-bg-light">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal animation="fade-right">
                <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', height: 500 }}>
                  <Image src="/assets/images/site-construction.png" alt="Safety operations at a fueling site" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,27,51,0.8), transparent)' }}></div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-left" delay={150}>
                <div>
                  <span className="eyebrow">{lang === 'ar' ? 'معاييرنا' : 'Our Standards'}</span>
                  <h2 className="section-title" style={{ marginTop: 12 }}>{lang === 'ar' ? 'التزام لا يقبل المساومة' : 'Uncompromising Commitment'}</h2>
                  <p className="section-desc" style={{ marginTop: 24 }}>
                    {lang === 'ar' 
                      ? 'في نجمة السماء، نؤمن بأن السلامة ليست مجرد إجراءات روتينية، بل هي ثقافة مؤسسية تتخلل كل عملياتنا. نحن نطبق أحدث أنظمة تتبع المركبات ومراقبة الجودة لضمان وصول الإمدادات بأمان.' 
                      : 'At Sky Star, we believe safety is not just a routine, but a corporate culture. We apply the latest tracking and quality control systems to ensure safe delivery.'}
                  </p>
                  
                  <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      lang === 'ar' ? 'تدريب مستمر للسائقين ومشغلي المعدات' : 'Continuous training for drivers and operators',
                      lang === 'ar' ? 'صيانة دورية وقائية لأسطول النقل' : 'Preventive maintenance for transport fleet',
                      lang === 'ar' ? 'أنظمة مكافحة الحريق المتقدمة' : 'Advanced fire suppression systems',
                      lang === 'ar' ? 'تتبع GPS على مدار الساعة' : '24/7 GPS Tracking'
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--color-accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>{item}</span>
                      </div>
                    ))}
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
