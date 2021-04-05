import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
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

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  const { about } = await request({ query: ABOUTPAGE_QUERY })
  return {
    props: {
      ...about,
      globalData,
    }
  }
}
