import V, { setAnim } from '@/components/viewport'
import styles from './styles/hero.module.css'

export interface HeroProps {
  slogan?: string
}

const Hero = ({ slogan }: HeroProps) => (
  <div className={styles['hero']}>
    <div className={styles['bg']}/>
    <div className="flex content">
      <V className="flex flex-col" style={setAnim({x: '-0.5rem'})}>
        <h1
          className={`${styles['title']} animate`}
        >Dealer inventory</h1>
        <h2
          className={`${styles['subtitle']} animate`}
          style={{transitionDelay: '100ms'}}
        >View our hotest vehicles</h2>
      </V>
    </div>
  </div>
)

export default Hero
