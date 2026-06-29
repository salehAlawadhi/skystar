/**
 * Reusable Wave Dividers for section transitions.
 * Scaled down to be sleek, elegant, and low-profile.
 */

export function WaveDown({ fill = '#ffffff', from = '#F6F7F9' }) {
  return (
    <div style={{ lineHeight: 0, overflow: 'hidden', backgroundColor: from }}>
      <svg viewBox="0 0 1440 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: 24 }}>
        <path d="M0 0L1440 0L1440 14C1200 24 960 6 720 12C480 18 240 2 0 14Z" fill={fill} />
      </svg>
    </div>
  )
}

export function WaveUp({ fill = '#F6F7F9', from = '#ffffff' }) {
  return (
    <div style={{ lineHeight: 0, overflow: 'hidden', backgroundColor: from }}>
      <svg viewBox="0 0 1440 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: 24 }}>
        <path d="M0 24L1440 24L1440 8C1200 22 960 2 720 10C480 18 240 2 0 8Z" fill={fill} />
      </svg>
    </div>
  )
}
