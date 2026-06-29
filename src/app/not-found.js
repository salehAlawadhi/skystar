import Link from 'next/link'
import './globals.css' // Import globals for styling

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased min-h-screen" style={{ backgroundColor: 'var(--color-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: 24, maxWidth: 600 }}>
          <div style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1, marginBottom: 24 }}>404</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>الصفحة غير موجودة</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: 32 }}>
            نعتذر، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد يكون الرابط خاطئاً أو تم نقل الصفحة.
          </p>
          <Link 
            href="/ar" 
            className="btn btn-accent text-decoration-none"
            style={{ display: 'inline-flex', padding: '0 32px' }}
          >
            العودة للرئيسية
          </Link>
        </div>
      </body>
    </html>
  )
}
