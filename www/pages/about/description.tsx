import V, { setAnim } from '@/components/viewport'
import { ResponsiveImage } from '@/lib/models/cms'
import { Image } from 'react-datocms'
import styles from './styles/contact.module.css'

export interface AboutDescription {
  aboutImage?: ResponsiveImage
  aboutDescription?: string
}

const Description = ({ aboutDescription, aboutImage }: AboutDescription) => (
  <div className="content">
    <div className={styles.mainContainer} style={{perspective: '1000px'}}>
      <V className={`${styles.imageContainer} animate`} style={setAnim({x: '1rem'})}>
        <div className={styles.imageFrameBack}/>
        <div className={styles.imageFrame}>
          <Image
            data={{
              ...aboutImage?.responsiveImage,
              alt: 'About KMB Motors'
            }}
          />
        </div>
      </V>
      <V className={`${styles.description} animate`} style={setAnim({x: '-1rem'})}>
        <img src="/images/logo.svg" className="mb-6 w-full" alt="KMB Motors"/>
        <div
          className={styles.descriptionContent}
          dangerouslySetInnerHTML={{__html: aboutDescription}}
        />
      </V>
    </div>
  </div>
)

export default Description
