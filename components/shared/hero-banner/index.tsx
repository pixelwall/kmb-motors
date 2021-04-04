import V, { setAnim } from '@/components/viewport'
import styles from './style.module.css'

export interface HeroProps {
  title?: string
  subtitle?: string
}

const Hero = ({ title, subtitle }: HeroProps) => (
  <div className={styles['hero']}>
    <div className={styles['bg']}/>
    <div className="flex content">
      <V className="flex flex-col" style={setAnim({x: '-0.5rem'})}>
        <h1
          className={`${styles['title']} animate`}
        >{title}</h1>
        <h2
          className={`${styles['subtitle']} animate`}
          style={{transitionDelay: '100ms'}}
        >{subtitle}</h2>
      </V>
    </div>
  </div>
)

export default Hero
