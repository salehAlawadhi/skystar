import { getDictionary } from '../get-dictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import TechnicalLines from '@/components/TechnicalLines'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const isAr = lang === 'ar'
  
  return {
    title: isAr ? 'اتصل بنا | شركة نجمة السماء للوقود' : 'Contact Us | Sky Star Fuel Company',
    description: isAr ? 'تواصل مع فريقنا لطلب عروض الأسعار وتوريد الوقود لمشاريعك.' : 'Contact our team to request fuel supply quotes for your projects.'
  }
}

export default async function ContactPage({ params }) {
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
            <Image src="/assets/images/fleet-row.png" alt="Sky Star fleet" fill priority style={{ objectFit: 'cover', objectPosition: 'center 30%' }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="hero-overlay" />
          <TechnicalLines opacity={0.04} />
          <div className="container relative z-10" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: 60 }}>
            <ScrollReveal animation="fade-up">
              <h1 className="hero-title">{dict.nav.contact}</h1>
              <p className="hero-subtitle" style={{ maxWidth: '600px', marginTop: 16 }}>
                {lang === 'ar' ? 'نحن هنا لتلبية احتياجاتكم من إمدادات الوقود الموثوقة. تواصل معنا اليوم لمناقشة متطلبات مشروعك.' : 'We are here to meet your reliable fuel supply needs. Contact us today to discuss your project requirements.'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 section-bg-light">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              
              <ScrollReveal animation="fade-right">
                <div>
                  <span className="eyebrow">{lang === 'ar' ? 'تواصل مباشر' : 'Direct Contact'}</span>
                  <h2 className="section-title" style={{ marginTop: 12 }}>{dict.contactPage.title}</h2>
                  <p className="section-desc" style={{ marginTop: 16, marginBottom: 40 }}>{dict.contactPage.desc}</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 8, background: 'var(--color-navy)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4, color: 'var(--color-navy)' }}>{lang === 'ar' ? 'الهاتف الموحد' : 'Unified Phone'}</h4>
                        <p style={{ color: '#555', direction: 'ltr' }}>+966 50 000 0000</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 8, background: 'var(--color-navy)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4, color: 'var(--color-navy)' }}>{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
                        <p style={{ color: '#555' }}>info@skystar-ksa.com</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 8, background: 'var(--color-navy)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4, color: 'var(--color-navy)' }}>{lang === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}</h4>
                        <p style={{ color: '#555', lineHeight: 1.6 }}>{dict.common.hq}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150}>
                <div style={{ background: 'var(--color-navy)', padding: '40px 32px', borderRadius: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <QuoteForm dict={dict} lang={lang} variant="premium" />
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
