import '../globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import SmoothScroll from '@/components/SmoothScroll'
import { Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const plexArabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-ibm-plex' })

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const isAr = lang === 'ar'

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://skystar-ksa.com'),
    title: isAr
      ? 'شركة نجمة السماء للوقود | توريد ونقل الوقود في السعودية'
      : 'Sky Star Fuel Company | Fuel Supply & Transport in Saudi Arabia',
    description: isAr
      ? 'إمداد موثوق للديزل والبنزين 91 و 95 ونقل المواد البترولية للشركات والمنشآت والمشاريع في المملكة العربية السعودية، تشغيل مستمر 24/7.'
      : 'Reliable diesel and petrol (91/95) supply and tanker transport for companies, facilities, and projects across Saudi Arabia, 24/7 operation.',
    openGraph: {
      title: isAr ? 'شركة نجمة السماء للوقود' : 'Sky Star Fuel Company',
      description: isAr
        ? 'إمداد موثوق للوقود ونقله في المملكة العربية السعودية.'
        : 'Reliable fuel supply and transport in Saudi Arabia.',
      locale: isAr ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      languages: {
        'ar': '/ar',
        'en': '/en',
      },
    },
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params
  const lang = resolvedParams.lang || 'ar'
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  
  return (
    <html lang={lang} dir={dir} className={`scroll-smooth ${jakarta.variable} ${plexArabic.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-light text-charcoal font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": lang === 'ar' ? "شركة نجمة السماء للوقود" : "Sky Star Fuel Company",
              "url": "https://skystar-ksa.com",
              "logo": "https://skystar-ksa.com/assets/images/logo_icon.png",
              "image": "https://skystar-ksa.com/assets/images/fleet-row.png",
              "description": lang === 'ar' ? "إمداد موثوق للديزل والبنزين ونقل المواد البترولية للشركات والمنشآت في السعودية." : "Reliable diesel and petrol supply and tanker transport for companies in Saudi Arabia.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Riyadh",
                "addressCountry": "SA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "areaServed": "SA",
                "availableLanguage": ["Arabic", "English"]
              }
            })
          }}
        />
        <SmoothScroll>
          {children}
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  )
}
export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }]
}
