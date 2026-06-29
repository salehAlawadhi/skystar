'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F9FAFB',
      color: '#2D3748',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h2 style={{ color: '#0B1B33', marginBottom: '16px', fontSize: '2rem', fontWeight: 700 }}>عذراً، حدث خطأ غير متوقع</h2>
        <p style={{ color: '#64748B', marginBottom: '32px', lineHeight: 1.6 }}>
          نحن نعمل على إصلاح المشكلة بأسرع وقت. يمكنك محاولة إعادة تحميل الصفحة أو العودة للصفحة الرئيسية.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button
            onClick={() => reset()}
            className="btn btn-accent"
          >
            إعادة المحاولة
          </button>
          <Link href="/" className="btn btn-outline" style={{ border: '1px solid #CBD5E1', padding: '0 20px', display: 'flex', alignItems: 'center', borderRadius: 8, textDecoration: 'none', color: '#0B1B33' }}>
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
