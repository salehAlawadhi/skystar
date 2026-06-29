import { getDictionary } from '../get-dictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const dict = await getDictionary(lang)
  const isAr = lang === 'ar'
  return {
    title: `${isAr ? 'الشروط والأحكام' : 'Terms & Conditions'} | ${dict.common.companyName}`,
    alternates: { languages: { ar: '/ar/terms', en: '/en/terms' } },
  }
}

export default async function TermsPage({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const dict = await getDictionary(lang)
  const isAr = lang === 'ar'

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main>
        <section className="page-header">
          <div className="container">
            <h1 className="page-header-title">{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</h1>
          </div>
        </section>
        <section style={{ padding: '64px 0' }}>
          <div className="container" style={{ maxWidth: '42rem' }}>
            <p style={{ color: 'var(--color-steel-gray)', lineHeight: 1.8 }}>
              {isAr
                ? 'هذه الصفحة قيد الإعداد. سيتم نشر الشروط والأحكام الكاملة لشركة نجمة السماء للوقود بعد مراجعتها من الفريق القانوني للشركة.'
                : 'This page is being prepared. The full terms and conditions for Sky Star Fuel Company will be published once reviewed by the company\'s legal team.'}
            </p>
          </div>
        </section>
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}
