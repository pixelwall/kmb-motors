import { getGlobalData } from '@/lib/datocms'
export { default,  } from '@/www/pages/appointment'

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  return {
    props: {
      globalData,
    },
    revalidate: 1,
  }
}
