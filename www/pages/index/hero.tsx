import V, { setAnim } from '@/components/viewport'
import { ResponsiveImage } from '@/lib/models/cms'
import styles from './styles/hero.module.css'

export interface HeroProps {
  slogan?: string
  heroBackground?: ResponsiveImage
}

const Hero = ({ slogan, heroBackground }: HeroProps) => (
  <div
    className={styles['hero']}
    style={{
      ['--hero-background' as string]: `url("${heroBackground.responsiveImage.src}")`
    }}
  >
    <div className={styles['bg']}/>
    <div className="flex content">
      <V className="flex flex-col" style={setAnim({x: '-0.5rem'})}>
        <h1
          className={`${styles['title']} animate`}
        >KMB Motors</h1>
        <h2
          className={`${styles['subtitle']} animate`}
          style={{transitionDelay: '100ms'}}
        >{slogan}</h2>
      </V>
    </div>
  </div>
)

export default Hero
