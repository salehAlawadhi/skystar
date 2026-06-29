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
    title: `${dict.nav.contracting} | ${dict.common.companyName}`,
    alternates: { languages: { ar: '/ar/contracting', en: '/en/contracting' } },
  }
}

// ──────────────────────── SVG ICONS ────────────────────────
const BuildingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="16" />
    <line x1="15" y1="22" x2="15" y2="16" />
    <line x1="9" y1="16" x2="15" y2="16" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01" />
  </svg>
)

const SparkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)

const RouteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
)

const TractorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M6 15h12v-3H9V9h6V6H9v3" />
  </svg>
)

const CalendarSearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="10" cy="16" r="2" />
    <line x1="12" y1="18" x2="15" y2="21" />
  </svg>
)

const CompassIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
)

const HardHatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h20v2H2z" />
    <path d="M5 12a7 7 0 0 1 14 0v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4z" />
    <path d="M12 2v6" />
  </svg>
)

const KeyCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="17" r="3" />
    <path d="M9.5 14.5L16 8M14 6l3 3M19 4L16 7" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const SettingsCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const EmergencyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20M12 2a10 10 0 1 0 10 10" />
  </svg>
)

export default async function ContractingPage({ params }) {
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
            <Image src="/assets/images/site-construction.png" alt="Construction project site" fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
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
                {dict.contractingPage.title}
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
        <section className="py-20 relative" style={{ backgroundColor: '#ffffff' }}>
          <div className="blob blob-primary" style={{ width: 600, height: 600, top: -200, left: -200, opacity: 0.25 }} aria-hidden="true" />
          
          <div className="container relative z-10 text-center flex flex-col gap-6" style={{ maxWidth: '52rem' }}>
            <ScrollReveal animation="fade-up">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                {lang === 'ar' ? 'الإنشاءات والمقاولات العامة' : 'Construction & General Contracting'}
              </span>
              <h2 className="font-extrabold" style={{ color: '#0B1B33', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', letterSpacing: '-0.02em', marginTop: 12 }}>
                {lang === 'ar' ? 'حلول هندسية وإنشائية متكاملة' : 'Integrated Engineering & Construction Solutions'}
              </h2>
              <div style={{ height: 3, width: 60, background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))', borderRadius: 999, margin: '18px auto 0' }} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500 }}>
                {dict.contractingPage.desc}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Wave transition */}
        <WaveUp fill="#F6F7F9" from="#ffffff" />

        {/* ══════════════════════ SERVICES LIST ══════════════════════ */}
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#F6F7F9' }}>
          <TechnicalLines opacity={0.03} />
          <div className="blob blob-accent" style={{ width: 500, height: 500, bottom: -100, right: -100, opacity: 0.2 }} aria-hidden="true" />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              
              {/* Buildings */}
              <ScrollReveal animation="fade-up" delay={0}>
                <div className="card-gradient-border flex flex-col gap-5" style={{ height: '100%', minHeight: 240 }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(19,117,187,0.10)', color: 'var(--color-primary)' }}>
                    <BuildingIcon />
                  </div>
                  <h3 className="text-2xl font-extrabold" style={{ color: '#0B1B33', letterSpacing: '-0.01em' }}>
                    {dict.contractingPage.builds}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500 }}>
                    {dict.contractingPage.buildsDesc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Electromechanical */}
              <ScrollReveal animation="fade-up" delay={80}>
                <div className="card-gradient-border flex flex-col gap-5" style={{ height: '100%', minHeight: 240 }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(27,159,139,0.10)', color: 'var(--color-accent)' }}>
                    <SparkIcon />
                  </div>
                  <h3 className="text-2xl font-extrabold" style={{ color: '#0B1B33', letterSpacing: '-0.01em' }}>
                    {dict.contractingPage.electro}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500 }}>
                    {dict.contractingPage.electroDesc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Infrastructure */}
              <ScrollReveal animation="fade-up" delay={160}>
                <div className="card-gradient-border flex flex-col gap-5" style={{ height: '100%', minHeight: 240 }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(19,117,187,0.10)', color: 'var(--color-primary)' }}>
                    <RouteIcon />
                  </div>
                  <h3 className="text-2xl font-extrabold" style={{ color: '#0B1B33', letterSpacing: '-0.01em' }}>
                    {dict.contractingPage.infra}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500 }}>
                    {dict.contractingPage.infraDesc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Heavy Equipment */}
              <ScrollReveal animation="fade-up" delay={240}>
                <div className="card-gradient-border flex flex-col gap-5" style={{ height: '100%', minHeight: 240 }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(27,159,139,0.10)', color: 'var(--color-accent)' }}>
                    <TractorIcon />
                  </div>
                  <h3 className="text-2xl font-extrabold" style={{ color: '#0B1B33', letterSpacing: '-0.01em' }}>
                    {dict.contractingPage.equipment}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500 }}>
                    {dict.contractingPage.equipmentDesc}
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* Wave divider */}
        <WaveDown fill="#ffffff" from="#F6F7F9" />

        {/* ══════════════════════ PROJECT WORKFLOW ══════════════════════ */}
        <section className="py-24 relative" style={{ backgroundColor: '#ffffff' }}>
          <div className="container relative z-10 flex flex-col gap-12">
            
            <ScrollReveal animation="fade-up" style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                {lang === 'ar' ? 'رحلة المشروع' : 'Project Lifecycle'}
              </span>
              <h2 className="font-extrabold" style={{ color: '#0B1B33', fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', letterSpacing: '-0.02em', marginTop: 12 }}>
                {dict.contractingPage.workflowTitle}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 600, marginTop: 8 }}>
                {dict.contractingPage.workflowSubtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '01', title: dict.contractingPage.phase1Title, desc: dict.contractingPage.phase1Desc, icon: <CalendarSearchIcon />, color: 'var(--color-primary)' },
                { num: '02', title: dict.contractingPage.phase2Title, desc: dict.contractingPage.phase2Desc, icon: <CompassIcon />, color: 'var(--color-accent)' },
                { num: '03', title: dict.contractingPage.phase3Title, desc: dict.contractingPage.phase3Desc, icon: <HardHatIcon />, color: 'var(--color-primary)' },
                { num: '04', title: dict.contractingPage.phase4Title, desc: dict.contractingPage.phase4Desc, icon: <KeyCheckIcon />, color: 'var(--color-accent)' },
              ].map((phase, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
                  <div className="card-gradient-border flex flex-col gap-4 relative" style={{ height: '100%', padding: '24px' }}>
                    <div className="absolute top-4" style={{ [lang === 'ar' ? 'left' : 'right']: '24px', fontSize: '2.5rem', fontWeight: 900, opacity: 0.1, color: phase.color }}>
                      {phase.num}
                    </div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2" style={{ background: phase.num % 2 === 1 ? 'rgba(19,117,187,0.08)' : 'rgba(27,159,139,0.08)', color: phase.color }}>
                      {phase.icon}
                    </div>
                    <h4 className="text-lg font-bold" style={{ color: '#0B1B33', margin: 0 }}>
                      {phase.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-steel-gray)', fontWeight: 500, margin: 0 }}>
                      {phase.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* Wave divider */}
        <WaveUp fill="#0B1B33" from="#ffffff" />

        {/* ══════════════════════ CONSTRUCTION SAFETY ══════════════════════ */}
        <section className="py-24 text-white relative overflow-hidden" style={{ backgroundColor: '#0B1B33' }}>
          <TechnicalLines opacity={0.06} />
          <div className="blob blob-accent" style={{ width: 500, height: 500, bottom: -120, left: -120, opacity: 0.15 }} aria-hidden="true" />
          
          <div className="container relative z-10 flex flex-col gap-12">
            
            <ScrollReveal animation="fade-up" style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto' }}>
              <span className="eyebrow eyebrow-white" style={{ justifyContent: 'center' }}>
                {lang === 'ar' ? 'الأمان الهندسي والإنشائي' : 'Engineering & Construction Safety'}
              </span>
              <h2 className="font-extrabold text-white" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', letterSpacing: '-0.02em', marginTop: 12 }}>
                {dict.contractingPage.safetyRulesTitle}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginTop: 8 }}>
                {dict.contractingPage.safetyRulesSubtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: dict.contractingPage.rule1Title, desc: dict.contractingPage.rule1Desc, icon: <ShieldIcon />, border: 'rgba(19,117,187,0.3)' },
                { title: dict.contractingPage.rule2Title, desc: dict.contractingPage.rule2Desc, icon: <EyeIcon />, border: 'rgba(27,159,139,0.3)' },
                { title: dict.contractingPage.rule3Title, desc: dict.contractingPage.rule3Desc, icon: <SettingsCheckIcon />, border: 'rgba(19,117,187,0.3)' },
                { title: dict.contractingPage.rule4Title, desc: dict.contractingPage.rule4Desc, icon: <EmergencyIcon />, border: 'rgba(27,159,139,0.3)' },
              ].map((rule, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                  <div className="p-6 rounded-2xl flex gap-5 items-start" style={{ border: `1px solid ${rule.border}`, background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(8px)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.06)', color: '#ffffff' }}>
                      {rule.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-bold text-white" style={{ margin: 0 }}>
                        {rule.title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, margin: 0 }}>
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════ CTA SECTION ══════════════════════ */}
        <section className="py-24 text-white text-center relative overflow-hidden" style={{ backgroundColor: '#0B1B33', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <TechnicalLines opacity={0.06} />
          <div className="blob blob-primary" style={{ width: 600, height: 600, top: -200, left: '30%', opacity: 0.2 }} aria-hidden="true" />
          
          <div className="container relative z-10 flex flex-col items-center gap-8">
            <ScrollReveal animation="fade-up">
              <h2 className="font-extrabold leading-relaxed" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', maxWidth: '44rem', color: '#ffffff', letterSpacing: '-0.01em', margin: '0 auto' }}>
                {lang === 'ar'
                  ? 'لديك استفسار حول خدمات المقاولات أو تأجير المعدات؟'
                  : 'Have an inquiry about contracting services or equipment rental?'}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                <Link href={`/${lang}/contact`} className="btn btn-accent text-decoration-none" style={{ borderRadius: 10 }}>
                  {dict.common.contactUs}
                </Link>
                <Link href={`/${lang}/contact`} className="btn btn-outline-white text-decoration-none" style={{ borderRadius: 10 }}>
                  {dict.common.requestSupply}
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
