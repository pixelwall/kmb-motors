import Page from '@/components/page'
import { getGlobalData } from '@/lib/datocms'

const Page404 = (data: { globalData?: any }) => (
  <Page {...data}/>
)

export function getStaticProps() {
  const globalData = getGlobalData()
  return {
    props: {
      globalData
    }
  }
}

export default Page404
