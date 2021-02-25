/// <reference lib="dom" />
import type { RefObject, CSSProperties } from 'react'
import { useRef, useEffect } from 'react'
import links from './navigation'
import Link from 'next/link'
import s from './styles/sidebar.module.css'

const ParentLink = ({idx, title, href, childrens}: {
  idx: number,
  title: string,
  href?: string,
  childrens?: any[],
}) => {
  const css: CSSProperties = { transitionDelay: `${(idx * 200) - 300}ms`, paddingRight: '0.5rem' }
  if (childrens) {
    return (
      <div className={s.sidebarLink}>
        <p
          className="flex items-center text-right cursor-pointer"
          style={css}
        >
          {title}
          <span
            className="mt-1 ml-2 cursor-pointer i jam:chevron-right"
          />
        </p>
      </div>
    )
  } else {
    return (
      <Link href={href || '/'}>
        <a className={s.sidebarLink}>
          <p style={css}>{title}</p>
        </a>
      </Link>
    )
  }
}

const Parents = () => (
  <div>
    {links.map((l, idx) => (
      <ParentLink
        key={idx}
        title={l.titulo}
        idx={idx}
        href={l.href}
        childrens={l.childrens}
      />
    ))}
  </div>
)

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: CallableFunction) => {
  const handleClick = (e: MouseEvent) => {
    if (!ref.current?.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default function Sidebar({ open = false, toggle }: { open: boolean, toggle: () => void }) {
  const sidebarRef: RefObject<HTMLElement> = useRef(null)

  useOutsideClick(sidebarRef, () => {
    if (open) {
      toggle()
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
  }, [open])

  return (
    <aside
      className={`${s.sidebar} ${open ? 'open' : ''} pattern`}
      ref={sidebarRef}
      style={{ opacity: `${open ? '1' : '0'}` }}
    >
      <div className={s.sidebarWrapper}>
        <Parents/>
      </div>
    </aside>
  )
}
