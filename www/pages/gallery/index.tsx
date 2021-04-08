import Page from '@/components/page'
import Hero from './hero'

import { responsiveImageHelper } from '@/lib/datocms'
import { ResponsiveImage } from '@/lib/models/cms'
import ZoomImage from '@/components/zoom-image'
import V, { setAnim } from '@/components/viewport'

export const GalleryQuery = (model: string) => `
query GalleryQuery {
  ${model} {
    images {
      ${responsiveImageHelper({w: 500, h: 500, q: 60, fit: 'crop'})}
    }
    imagesHd: images {
      ${responsiveImageHelper({q: 70})}
    }
  }
}
`

export interface GalleryProps {
  title: string
  images: ResponsiveImage[]
  imagesHd: ResponsiveImage[]
  globalData?: any
}

const Index = ({images, imagesHd, ...data}: GalleryProps) => (
  <Page {...data}>
    <Hero title={data.title}/>
    <div className="mb-16 grid gap-6 grid-cols-1 content sm:grid-cols-2 lg:grid-cols-3">
      {images?.map((i, idx) => (
        <V
          className={`bg-kmb-gray-800 overflow-hidden flex relative rounded-lg animate`}
          key={idx}
          style={setAnim({ y: '0.5rem' })}
          oneWay
        >
          <ZoomImage
            data={i.responsiveImage}
            dataHd={imagesHd[idx].responsiveImage}
            style={{width: '100%'}}
            pictureStyle={{width: '100%'}}
          />
        </V>
      ))}
    </div>
  </Page>
)

export default Index
