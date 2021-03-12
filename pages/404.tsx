import Page from '@/components/page'
import { getGlobalData } from '@/lib/datocms'

const Page404 = (data: { globalData?: any }) => (
  <Page {...data}/>
)

export async function getStaticProps() {
  const globalData = await getGlobalData()
  return {
    props: {
      globalData
    }
  }
}

export default Page404
