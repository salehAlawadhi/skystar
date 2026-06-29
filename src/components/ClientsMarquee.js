'use client'

import React from 'react'

export default function ClientsMarquee({ lang }) {
  // HIDDEN: The user requested to hide this section until logos are ready tomorrow.
  // We apply inline display: none for now.
  return (
    <section className="clients-marquee-section" style={{ display: 'none' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 32 }}>
        <span className="eyebrow">{lang === 'ar' ? 'شركاء النجاح' : 'Our Partners'}</span>
        <h2 className="section-title" style={{ fontSize: '1.5rem', marginTop: 8 }}>
          {lang === 'ar' ? 'نعتز بثقة كبرى الشركات والمؤسسات' : 'Trusted by Leading Companies & Institutions'}
        </h2>
      </div>

      <div className="marquee-container" style={{ overflow: 'hidden', position: 'relative', width: '100%', background: '#fff', padding: '30px 0', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="marquee-content" style={{ display: 'flex', width: 'fit-content', animation: 'marquee 30s linear infinite' }}>
          {/* Duplicate the logos array to ensure smooth infinite scrolling */}
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '80px', paddingRight: '80px', alignItems: 'center' }}>
              {/* Placeholders for logos (User will replace these src attributes tomorrow) */}
              <div className="marquee-logo" style={{ width: 140, height: 60, background: '#f5f7fa', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontWeight: 'bold' }}>LOGO 1</div>
              <div className="marquee-logo" style={{ width: 140, height: 60, background: '#f5f7fa', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontWeight: 'bold' }}>LOGO 2</div>
              <div className="marquee-logo" style={{ width: 140, height: 60, background: '#f5f7fa', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontWeight: 'bold' }}>LOGO 3</div>
              <div className="marquee-logo" style={{ width: 140, height: 60, background: '#f5f7fa', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontWeight: 'bold' }}>LOGO 4</div>
              <div className="marquee-logo" style={{ width: 140, height: 60, background: '#f5f7fa', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontWeight: 'bold' }}>LOGO 5</div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        html[dir="rtl"] .marquee-content {
          animation: marquee-rtl 30s linear infinite;
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .marquee-logo {
          opacity: 0.6;
          transition: opacity 0.3s ease;
          filter: grayscale(100%);
        }
        .marquee-logo:hover {
          opacity: 1;
          filter: grayscale(0%);
        }
      `}} />
    </section>
  )
}
