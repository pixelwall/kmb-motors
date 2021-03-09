import V, { setAnim } from '@/components/viewport'
import styles from './styles/welcome.module.css'

import { Image, ResponsiveImageType } from 'react-datocms'

export interface WelcomeProps {
  description?: string
  welcomeImage?: {
    responsiveImage?: ResponsiveImageType
  }
}

const Welcome = ({ description, welcomeImage }: WelcomeProps) => (
  <div className={`content ${styles.welcome}`}>
    <V className="mb-12 animate" oneWay style={setAnim({y: '-0.5rem', time: '1s'})}>
      <h2 className={styles.title}>Welcome to<br/><span>KMB Motors</span></h2>
    </V>
    <div className={styles.mainContainer} style={{perspective: '1000px'}}>
      <V className={`${styles.imageContainer} animate`} style={setAnim({x: '-1rem'})}>
        <div className={styles.imageFrameBack}/>
        <div className={styles.imageFrame}>
          <Image
            data={{
              ...welcomeImage?.responsiveImage,
              alt: 'Welcome to KMB Motors'
            }}
          />
        </div>
      </V>
      <V className={`${styles.description} animate`} style={setAnim({x: '1rem'})}>
        <img src="/images/logo.svg" className="w-full mb-6" alt="KMB Motors"/>
        <div
          className={styles.descriptionContent}
          dangerouslySetInnerHTML={{__html: description}}
        />
      </V>
    </div>
  </div>
)

export default Welcome
