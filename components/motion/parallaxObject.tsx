import { HTMLAttributes, RefObject, useEffect, useRef, useState } from 'react'

export interface ParallaxProps
extends HTMLAttributes<HTMLDivElement> {
  scaleFactor?: number
  horizontal?: boolean
  negative?: boolean
}

export interface ParallaxObjectProps
extends ParallaxProps {
  offset: number
}

export default function ParallaxObject({
  offset,
  scaleFactor = 6,
  horizontal = false,
  negative = false,
  ...props
}: ParallaxObjectProps) {
  const [scrollY, setScrollY] = useState<number>(null)
  const [translate, setTranslate] = useState<number>(null)
  const ref: RefObject<HTMLDivElement> = useRef(null)

  const scrollHander = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHander, { passive: true })
    return () => (window.removeEventListener('scroll', scrollHander))
  })

  const render = () => {
    if (scrollY !== null && !ref.current) return;

    if (offset) {
      //translate = -y * 10 / (offset / 10)
      setTranslate((scrollY - offset) / scaleFactor)
    } else if (offset == 0) {
      setTranslate(scrollY / scaleFactor)
    }

    const ensure = translate ? translate : 0
    const finalFixed = negative ? ensure - (ensure * 2) : ensure
    const css = {
      x:  !horizontal ? '0px' : finalFixed.toFixed(2) + 'px',
      y:  horizontal ? '0px' : finalFixed.toFixed(2) + 'px',
    }
    Object.entries(css).forEach(([key, value]) => {
      ref.current.style.setProperty(`--${key}`, value)
    })
  }

  useEffect(scrollHander)
  useEffect(render)

  return (
    <div
      {...props}
      style={{
        willChange: 'transform',
        transform: 'translate3d(var(--x), var(--y), 0)',
      }}
      ref={ref}
    >
      {props.children}
    </div>
  )
}
