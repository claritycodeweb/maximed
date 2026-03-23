import { useEffect, useRef } from 'react'

/**
 * Adds scroll-triggered reveal animation to an element.
 * Apply .reveal, .reveal-right, or .reveal-scale class to the element.
 * The hook adds .visible when the element enters the viewport.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

/**
 * Reveals multiple children with staggered delays.
 * Call on a parent element; it will find children with [data-reveal] and stagger them.
 */
export function useStaggerReveal(delayMs = 80) {
  const ref = useRef(null)

  useEffect(() => {
    const parent = ref.current
    if (!parent) return

    const children = parent.querySelectorAll('[data-reveal]')
    if (!children.length) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * delayMs}ms`
            child.classList.add('visible')
          })
          observer.unobserve(parent)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(parent)
    return () => observer.disconnect()
  }, [delayMs])

  return ref
}
