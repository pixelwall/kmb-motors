import { request, getGlobalData } from '@/lib/datocms'
import Gallery, { GalleryProps, GalleryQuery } from '@/www/pages/gallery'

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  const { paintJobsGallery } = await request({ query: GalleryQuery('paintJobsGallery') })
  return {
    props: {
      ...paintJobsGallery,
      globalData,
    },
    revalidate: 1,
  }
}

const Repairs = (props: GalleryProps) => <Gallery title="Paint Jobs & Lift Kits" {...props}/>

export default Repairs
