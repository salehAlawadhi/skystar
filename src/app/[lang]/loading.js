import React from 'react'

export default function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      width: '100vw',
      background: 'var(--color-navy)',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <div className="loader-spinner"></div>
        <div style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '0.875rem' }}>
          LOADING
        </div>
      </div>
      
      <style>{`
        .loader-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid rgba(27, 159, 139, 0.2);
          border-radius: 50%;
          border-top-color: var(--color-accent);
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
