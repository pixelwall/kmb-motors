/// <reference lib="dom" />
import type { RefObject } from 'react'
import React, { useRef } from 'react'
import s from './styles/burger.module.css'

export default function Hamburger({ open, toggle }: { open: boolean, toggle: () => void }) {
  const buttonRef: RefObject<HTMLButtonElement> = useRef(null)
  return (
    <button
      aria-label="Menu"
      title="Menu"
      className={`${s.hamburguer} ${open ? 'open' : ''}`}
      onClick={toggle}
      ref={buttonRef}
    >
      <svg width="32" height="32">
        <line id="top" x1="0" y1="11" x2="32" y2="11"/>
        <line id="bottom" x1="0" y1="21" x2="32" y2="21"/>
      </svg>
    </button>
  )
}
