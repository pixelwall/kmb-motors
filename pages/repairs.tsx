import { request, getGlobalData } from '@/lib/datocms'
import Gallery, { GalleryProps, GalleryQuery } from '@/www/pages/gallery'

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  const { autoRepairsGallery } = await request({ query: GalleryQuery('autoRepairsGallery') })
  return {
    props: {
      ...autoRepairsGallery,
      globalData,
    }
  }
}

const Repairs = (props: GalleryProps) => <Gallery title="Auto repairs" {...props}/>

export default Repairs
