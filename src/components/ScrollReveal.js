'use client'

import { useEffect, useRef } from 'react'

/**
 * ScrollReveal - wraps children and animates them into view on scroll.
 * Uses IntersectionObserver with CSS transforms only (no layout thrash).
 * 
 * Props:
 *   animation: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-in'
 *   delay: number (ms)
 *   threshold: number (0-1)
 *   className: string
 *   style: object
 *   as: element tag (default: div)
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.12,
  className = '',
  style = {},
  as: Tag = 'div',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
          el.style.opacity = '1'
          el.style.transform = 'translate(0, 0) scale(1)'
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    // Initial hidden state
    el.style.opacity = '0'
    el.style.willChange = 'transform, opacity'

    switch (animation) {
      case 'fade-up':
        el.style.transform = 'translateY(36px)'
        break
      case 'fade-left':
        el.style.transform = 'translateX(-32px)'
        break
      case 'fade-right':
        el.style.transform = 'translateX(32px)'
        break
      case 'scale-in':
        el.style.transform = 'scale(0.92)'
        break
      case 'zoom-in':
        el.style.transform = 'scale(0.8)'
        break
      case 'zoom-out':
        el.style.transform = 'scale(1.1)'
        break
      case 'fade-in':
      default:
        el.style.transform = 'translateY(0)'
        break
    }

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation, delay, threshold])

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  )
}
