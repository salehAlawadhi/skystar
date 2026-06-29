import ScrollReveal from './ScrollReveal'

const icons = {
  construction: 'M3 21h18M5 21V9l7-5 7 5v12M9 21v-7h6v7',
  factory: 'M3 21V9l6 4V9l6 4V5h6v16M7 17h2M12 17h2M17 17h2',
  warehouse: 'M4 21V9l8-5 8 5v12M7 21v-8h10v8M9 16h6',
  generator: 'M4 7h16v10H4zM8 17v3M16 17v3M8 11h3M14 11h2',
  company: 'M4 21V5h10v16M14 9h6v12M8 9h2M8 13h2M8 17h2M17 13h1',
  remote: 'M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11zM12 10h.01',
}

function SectorIcon({ path }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  )
}

// Cycles through the brand palette so each sector reads as distinct,
// instead of every tile sharing one flat primary-blue icon badge.
const accents = ['var(--color-primary)', 'var(--color-accent)', '#1685c8', '#0FA3A3', 'var(--color-primary)', 'var(--color-accent)']

export default function IndustriesSection({ lang }) {
  const isAr = lang === 'ar'
  const sectors = [
    [icons.construction, isAr ? 'المشاريع الإنشائية' : 'Construction Projects'],
    [icons.factory, isAr ? 'المنشآت الصناعية' : 'Industrial Facilities'],
    [icons.warehouse, isAr ? 'المستودعات والمراكز' : 'Warehouses & Hubs'],
    [icons.generator, isAr ? 'المولدات والمعدات' : 'Generators & Equipment'],
    [icons.company, isAr ? 'الشركات والمؤسسات' : 'Companies & Institutions'],
    [icons.remote, isAr ? 'مواقع التشغيل البعيدة' : 'Remote Operating Sites'],
  ]

  return (
    <section className="industries-section slant-section">
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div className="section-header">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>{isAr ? 'قطاعات نخدمها' : 'Sectors We Support'}</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              {isAr ? 'إمداد وقود يناسب احتياجات التشغيل المختلفة' : 'Fuel supply for different operating needs'}
            </h2>
            <p className="section-desc">
              {isAr
                ? 'نخدم احتياجات الوقود اليومية والمجدولة للمواقع التي تعتمد على استمرارية المعدات والتشغيل.'
                : 'Supporting daily and scheduled fuel needs for sites that depend on equipment and operating continuity.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="industries-grid">
          {sectors.map(([path, title], index) => {
            const accent = accents[index % accents.length]
            return (
              <ScrollReveal
                key={title}
                animation="fade-up"
                delay={index * 45}
                className="industry-tile"
                style={{ '--tile-accent': accent }}
              >
                <span style={{ color: accent, background: `${accent}1a` }}><SectorIcon path={path} /></span>
                <strong>{title}</strong>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
