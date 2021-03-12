import { RefObject, CSSProperties, useState, createContext, useContext } from 'react'
import { useRef, useEffect } from 'react'
import { useOutsideClick } from '@/lib/hooks'
import links from '@/lib/navigation'
import Link from 'next/link'
import s from './styles/sidebar.module.css'
import { useGlobalDataContext } from '../page'

interface ChildrenMenu {
  title?: string
  childrens?: any[]
}

type ChildState = [ChildrenMenu, React.Dispatch<ChildrenMenu>]

const sidebarContext = createContext<ChildState>([null, null])
const useChildState = () => useContext(sidebarContext)

const ParentLink = (link: {
  idx: number,
  title?: string,
  href?: string,
  childrens?: any[],
}) => {
  const { idx, title, href, childrens } = link
  const css: CSSProperties = { animationDelay: `${(( idx - 1 ) * 200) - 300}ms`, paddingRight: '0.5rem' }
  const [, setChildMenu] = useChildState()
  if (childrens) {
    return (
      <div className={s.sidebarLink} onClick={() => setChildMenu(link)}>
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

const Parents = () => {
  const globalData = useGlobalDataContext()
  return (
    <div className="mb-6" style={{overflowY: 'auto'}}>
      {links(globalData).map((l, idx) => (
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
}

const ChildLink = (link: {
  idx: number,
  title?: string,
  href?: string,
}) => {
  const { idx, title, href } = link
  const css: CSSProperties = { animationDelay: `${(( idx - 1 ) * 200) - 300}ms`, paddingRight: '0.5rem' }
  return (
    <Link href={href || '/'}>
      <a className={s.childLink}>
        <p style={css}>{title}</p>
      </a>
    </Link>
  )
}

const Childs = () => {
  const [childMenu, setChildMenu] = useChildState()
  return (
    <>
      <button
        className={s.backButton}
        onClick={() => setChildMenu(null)}
      >
        <span className="i jam:chevron-left"/>
        Back
      </button>
      <p className={s.childTitle}>{childMenu.title}</p>
      <div className={s.childMenuWrapper}>
        {childMenu.childrens.map((l, idx) => (
          <ChildLink {...l} title={l.titulo} idx={idx} key={idx}/>
        ))}
      </div>
    </>
  )
}

const Wrapper = () => {
  const [childMenu] = useChildState()

  useEffect(() => {
    console.log(childMenu)
  }, [childMenu])

  return (
    <div className={s.sidebarWrapper}>
      {childMenu ? <Childs/> : <Parents/>}
    </div>
  )
}

export interface SidebarProps {
  open: boolean
  toggle: () => void
}

const Sidebar = ({ open = false, toggle }: SidebarProps) => {
  const sidebarRef: RefObject<HTMLElement> = useRef(null)
  const sidebarState: ChildState = useState(null)
  const [,setSidebarState] = sidebarState

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
  }, [open])

  useEffect(() => {
    if (!open) {
      setSidebarState(null)
    }
  }, [open])

  return (
    <sidebarContext.Provider value={sidebarState}>
      <aside
        className={`${s.sidebar} ${open ? 'open' : ''} pattern`}
        ref={sidebarRef}
        style={{ opacity: `${open ? '1' : '0'}` }}
      >
        <Wrapper/>
      </aside>
    </sidebarContext.Provider>
  )
}

export default Sidebar
