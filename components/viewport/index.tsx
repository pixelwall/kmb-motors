import styles from './viewport.module.css'
import { useEffect, HTMLAttributes, useRef, RefObject, useState, CSSProperties } from 'react'

interface SetAnimationProps {
  x?: string
  y?: string
  s?: string
  sx?: string
  sy?: string
  r?: string
  rx?: string
  ry?: string
  time?: string
  d?: string
}
export const setAnim = (props: SetAnimationProps): CSSProperties => {
  const keys = {
    x: 'x',
    y: 'y',
    s: 's',
    sx: 's-x',
    sy: 's-y',
    r: 'r',
    rx: 'r-x',
    ry: 'r-y',
    time: 'time',
    d: 'd',
  }
  const fields = Object.keys(props).filter((k) => props[k] !== null)
  const out: CSSProperties = {}
  for (let f of fields) {
    out[`--animate-${keys[f]}` as any] = props[f]
  }
  return out
}

interface ViewportProps extends HTMLAttributes<HTMLDivElement> {
  oneWay?: boolean,
  once?: boolean,
  top?: number,
  bottom?: number,
  left?: number,
  right?: number,
  onTop?: (arg0: any) => void,
  onOut?: (arg0: any) => void,
  onIntersect?: (arg0: any) => void,
}

export default function Viewport({
  oneWay,
  once,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  onTop = () => {},
  onOut = () => {},
  onIntersect = () => {},
  ...props
}: ViewportProps) {
  const ref: RefObject<HTMLDivElement> = useRef(null)
  const [ intersecting, setIntersect ] = useState(false)

  const handler = async () => {
    const bcr = ref.current?.getBoundingClientRect()
    if (bcr === undefined) {
      return
    }

    if (
      (bcr.top + top) < window.innerHeight &&
      (bcr.bottom - bottom) > window.innerHeight &&
      !intersecting
    ) {
      onTop({ offset: ref.current?.offsetTop })
    }

    if (
      (bcr.top + top) > window.innerHeight &&
      intersecting
    ) {
      onOut({ offset: ref.current?.offsetTop })
    }

    if (oneWay) {
      setIntersect((bcr.top + top) < window.innerHeight)
    } else {
      setIntersect((
        (bcr.bottom - bottom) > 0 &&
        (bcr.right - right) > 0 &&
        (bcr.top + top) < window.innerHeight &&
        (bcr.left + left) < window.innerWidth
      ))
    }

    if (intersecting) {
      onIntersect({ offset: ref.current?.offsetTop })
    }

    if (intersecting && once) {
      window.removeEventListener('scroll', handler)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  })

  useEffect(() => {
    ref.current?.classList.toggle('intersecting', intersecting)
  })

  return (
    <div
      {...props}
      className={`${styles.viewport} ${props.className} `}
      ref={ref}
    >
      {props.children}
    </div>
  )
}
