'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

// Real-world coordinates (lat, lon) — used as-is, no fabricated geography.
const CITIES = [
  { id: 'riyadh', lat: 24.7136, lon: 46.6753, hq: true },
  { id: 'jeddah', lat: 21.4858, lon: 39.1925 },
  { id: 'dammam', lat: 26.4207, lon: 50.1033 },
  { id: 'jubail', lat: 27.0046, lon: 49.6225 },
  { id: 'medina', lat: 24.5247, lon: 39.6142 },
  { id: 'qassim', lat: 26.3260, lon: 43.9750 },
  { id: 'abha', lat: 18.2164, lon: 42.5053 },
  { id: 'tabuk', lat: 28.3998, lon: 36.5662 },
]

// Real Saudi Arabia boundary ring (lat, lon), used to mask out neighboring
// countries so only the Kingdom reads clearly on the map.
const KSA_OUTLINE = [[16.3479, 42.7793], [16.7746, 42.6496], [17.0758, 42.348], [17.4747, 42.2709], [17.833, 41.7544], [18.6716, 41.2214], [19.4865, 40.9393], [20.1746, 40.2477], [20.3389, 39.8017], [21.2919, 39.1394], [21.9869, 39.0237], [22.5797, 39.0663], [23.6885, 38.4928], [24.0787, 38.0239], [24.2855, 37.4836], [24.8585, 37.1548], [25.0845, 37.2095], [25.603, 36.9316], [25.8262, 36.6396], [26.5701, 36.2491], [27.3765, 35.6402], [28.0634, 35.1302], [28.0585, 34.6323], [28.6074, 34.7878], [28.9575, 34.8322], [29.3566, 34.956], [29.1975, 36.0689], [29.5053, 36.5012], [29.8653, 36.7405], [30.0038, 37.5036], [30.3387, 37.6681], [30.5085, 37.9988], [31.5084, 37.0022], [32.0102, 39.0049], [32.161, 39.1955], [31.89, 40.4], [31.19, 41.89], [29.1789, 44.7095], [29.099, 46.5687], [29.0025, 47.4598], [28.5261, 47.7089], [28.552, 48.4161], [27.6896, 48.8076], [27.4612, 49.2996], [27.11, 49.4709], [26.6897, 50.1524], [26.277, 50.2129], [25.944, 50.1133], [25.608, 50.2399], [25.3278, 50.5274], [24.9999, 50.6606], [24.7547, 50.8101], [24.5563, 51.1124], [24.6274, 51.3896], [24.2455, 51.5795], [24.0142, 51.6177], [23.0012, 52.0007], [22.4969, 55.0068], [22.7083, 55.2083], [22.0, 55.6667], [20.0, 55.0], [19.0, 52.0], [18.6167, 49.1167], [18.1667, 48.1833], [17.1167, 47.4667], [16.95, 47.0], [17.2833, 46.75], [17.2333, 46.3667], [17.3333, 45.4], [17.4333, 45.2167], [17.4104, 44.0626], [17.32, 43.7915], [17.58, 43.3808], [17.0884, 43.1158], [16.6669, 43.2184], [16.3479, 42.7793]]

const NAMES = {
  ar: {
    riyadh: 'الرياض (المقر الرئيسي)', jeddah: 'جدة', dammam: 'الدمام', jubail: 'الجبيل',
    medina: 'المدينة المنورة', qassim: 'القصيم', abha: 'أبها', tabuk: 'تبوك',
  },
  en: {
    riyadh: 'Riyadh (HQ)', jeddah: 'Jeddah', dammam: 'Dammam', jubail: 'Jubail',
    medina: 'Medina', qassim: 'Qassim', abha: 'Abha', tabuk: 'Tabuk',
  },
}

export default function CoverageMapLeaflet({ lang }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const names = NAMES[lang] || NAMES.en

  useEffect(() => {
    let map
    let cancelled = false

    import('leaflet').then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return

      const isMobile = window.innerWidth < 768
      map = L.map(containerRef.current, {
        zoomControl: false,
        attributionControl: true,
        scrollWheelZoom: false,
        dragging: true,
        minZoom: 3,
        maxZoom: 7,
        maxBounds: [[10, 25], [35, 65]],
      })
      mapRef.current = map
      
      // Auto-fit to KSA outline on load
      map.fitBounds(L.polygon(KSA_OUTLINE).getBounds(), { padding: isMobile ? [10, 10] : [20, 20] })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        className: 'skystar-map-tiles',
      }).addTo(map)

      // Mask everything outside Saudi Arabia's real border so neighboring
      // countries fade out and the Kingdom reads clearly on its own.
      const worldRing = [[-89, -200], [89, -200], [89, 200], [-89, 200]]
      L.polygon([worldRing, KSA_OUTLINE], {
        stroke: false,
        fillColor: '#eef2f5',
        fillOpacity: 0.93,
        fillRule: 'evenodd',
        interactive: false,
      }).addTo(map)

      L.polygon(KSA_OUTLINE, {
        color: '#1375BB',
        weight: 1.5,
        opacity: 0.5,
        fill: false,
        interactive: false,
      }).addTo(map)

      const hq = CITIES.find((c) => c.hq)

      CITIES.forEach((city) => {
        const isHq = !!city.hq
        const icon = L.divIcon({
          className: 'map-pin-wrap',
          html: `<div class="pin-dot${isHq ? ' pin-dot-hq' : ''}"><div class="pin-pulse"></div><div class="pin-core"></div></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        })
        L.marker([city.lat, city.lon], { icon })
          .addTo(map)
          .bindTooltip(names[city.id], { permanent: false, direction: 'top', className: 'map-tooltip' })

        if (!isHq && hq) {
          L.polyline(
            [[hq.lat, hq.lon], [city.lat, city.lon]],
            { color: '#1B9F8B', weight: 2, opacity: 0.6, dashArray: '6 8', className: 'supply-line-path' }
          ).addTo(map)
        }
      })
    })

    return () => {
      cancelled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [lang])

  return <div ref={containerRef} className="ksa-leaflet-map" aria-label={lang === 'ar' ? 'خريطة تغطية المملكة' : 'Saudi Arabia coverage map'} />
}
