import Link from 'next/link'
import navs from '@/lib/navigation'
import styles from './footer.module.css'
import { Fragment } from 'react'
import {useGlobalDataContext} from '../page'

const MadeBy = () => (
  <div className={styles['madeBy']}>
    <p>Developed with ❤️ by <strong>Pixelwall Marketing</strong></p>
  </div>
)

const Section = ({ titulo, childrens }: {
  titulo: string,
  childrens?: { titulo: string, href: string }[]
}) => (
  <div className={styles['el']}>
    <p>{titulo}</p>
    <div>
      {childrens.map((n, i) => (
        <Link href={n.href} key={i}>
          <a>{n.titulo}</a>
        </Link>
      ))}
    </div>
  </div>
)

const Isolated = () => {
  const globalData = useGlobalDataContext()
  const isolated = navs(globalData).filter(e => !e.childrens)
  return (
    <>{isolated.length && (
      <Section titulo="Menu" childrens={isolated as any[]}/>
    )}</>
  )
}

const Childrens = () => {
  const globalData = useGlobalDataContext()
  const childrens = navs(globalData).filter(e => e.childrens)
  return (
    <>{childrens.map((n, i) => (
      <Fragment key={i}>
        <Section {...n}/>
      </Fragment>
    ))}</>
  )
}

const Elements = () => (
  <div className={styles['elements']}>
    <Isolated/>
    <Childrens/>
  </div>
)

const Footer = () => (
  <footer className="py-8 content">
    <Elements/>
    <MadeBy/>
  </footer>
)

export default Footer
