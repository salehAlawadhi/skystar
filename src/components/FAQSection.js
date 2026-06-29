'use client'

import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function FAQSection({ lang }) {
  const isAr = lang === 'ar'
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: isAr ? 'ما هو الحد الأدنى للطلب (الكميات)؟' : 'What is the minimum order quantity?',
      a: isAr ? 'نخدم قطاع الأعمال (B2B)، ونوفر إمدادات تبدأ من حمولة ناقلة واحدة وحتى عقود توريد متكررة حسب حجم المشروع.' : 'We serve the B2B sector, providing supplies starting from a single tanker load up to recurring supply contracts based on project size.'
    },
    {
      q: isAr ? 'كيف تضمنون جودة الوقود ونقائه؟' : 'How do you ensure fuel quality and purity?',
      a: isAr ? 'يخضع الوقود لدينا لعمليات فحص قبل التحميل وبعده. ناقلاتنا تخضع لتنظيف دوري ومجدول لمنع أي تلوث.' : 'Our fuel undergoes inspection before and after loading. Our tankers undergo scheduled cleaning to prevent contamination.'
    },
    {
      q: isAr ? 'هل تقدمون خدمة عقود التوريد المستمرة 24/7؟' : 'Do you offer 24/7 continuous supply contracts?',
      a: isAr ? 'نعم، أسطولنا يعمل على مدار الساعة. يمكننا تنسيق جدولة الإمدادات بما يتناسب مع ورديات العمل في مشاريعكم.' : 'Yes, our fleet operates 24/7. We can coordinate supply scheduling to match your project shifts.'
    },
    {
      q: isAr ? 'كيف يتم تتبع الشحنات وضمان وصولها في الوقت المحدد؟' : 'How are shipments tracked to ensure on-time delivery?',
      a: isAr ? 'يتم تنسيق الطلب والمتابعة مع فريق العمليات من لحظة الطلب حتى التسليم، مع تواصل مباشر لتأكيد الموقع والوقت.' : 'Requests are coordinated and followed up with the operations team from order to delivery, with direct communication to confirm location and timing.'
    }
  ]

  return (
    <section className="faq-section py-24 section-bg-light" style={{ position: 'relative' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal animation="fade-right">
            <div>
              <span className="eyebrow">{isAr ? 'الأسئلة الشائعة' : 'FAQ'}</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>
                {isAr ? 'إجابات شفافة لشركاء أعمالنا' : 'Transparent Answers for Our Partners'}
              </h2>
              <p className="section-desc" style={{ marginTop: 16 }}>
                {isAr 
                  ? 'نعلم أن اختيار مورد الوقود قرار استراتيجي لشركتكم. هنا نجيب على أهم الاستفسارات التي تهم قطاع الأعمال.' 
                  : 'We know choosing a fuel supplier is a strategic decision. Here are answers to the most common B2B questions.'}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={150}>
            <div className="faq-accordion" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <button 
                    key={index}
                    type="button"
                    aria-expanded={isOpen}
                    className={`faq-item ${isOpen ? 'is-open' : ''}`}
                    style={{ 
                      background: '#fff', 
                      borderRadius: 16, 
                      padding: '24px', 
                      boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'inherit',
                      display: 'block'
                    }}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    suppressHydrationWarning
                  >
                    <div className="faq-q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.1rem' }}>
                      {faq.q}
                      <span style={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: 32, height: 32, borderRadius: '50%', 
                        background: isOpen ? 'var(--color-accent)' : '#f5f7fa',
                        color: isOpen ? '#fff' : 'var(--color-navy)',
                        transition: 'all 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </div>
                    <div 
                      className="faq-a" 
                      style={{ 
                        maxHeight: isOpen ? '500px' : '0', 
                        overflow: 'hidden', 
                        transition: 'max-height 0.3s ease, margin-top 0.3s ease',
                        marginTop: isOpen ? 16 : 0,
                        color: '#444',
                        lineHeight: 1.6
                      }}
                    >
                      {faq.a}
                    </div>
                  </button>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
