'use client'

import React, { useEffect, useState, useRef } from 'react'

export default function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const endValue = parseInt(end.toString().replace(/[^0-9]/g, ''), 10)

  useEffect(() => {
    if (!isVisible || isNaN(endValue)) return

    let startTime = null

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setCount(Math.floor(easeProgress * endValue))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, endValue, duration])

  // If the end value wasn't a parseable number, just render it directly
  if (isNaN(endValue)) {
    return <span ref={counterRef}>{end}</span>
  }

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  )
}
