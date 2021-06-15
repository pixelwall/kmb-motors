import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { GetStaticProps } from 'next'
export { default,  } from '@/www/pages/about'

const ABOUTPAGE_QUERY = `
query AboutpageQuery {
  about {
    aboutDescription
    aboutImage {
      ${responsiveImageHelper({w: 800, h: 800, fit: 'crop'})}
    }
    aboutEmail
    aboutPhone
  }
}
`

export const getStaticProps: GetStaticProps = async () => {
  const globalData = await getGlobalData()
  const { about } = await request({ query: ABOUTPAGE_QUERY })
  return {
    props: {
      ...about,
      globalData,
    },
    revalidate: 1,
  }
}
