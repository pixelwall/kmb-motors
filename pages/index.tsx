import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
export { default,  } from '@/www/pages/index'

const HOMEPAGE_QUERY = `
query HomepageQuery {
  homepage {
    slogan
    heroBackground {
      ${responsiveImageHelper({w: 800, q: 60})}
    }
    description
    welcomeImage {
      ${responsiveImageHelper({w: 500, h: 500, fit: 'crop'})}
    }
  }
  allDealerInventories(first: 3) {
    name
    slug
    images {
      ${responsiveImageHelper({w: 324, h: 256, fit: 'crop'})}
    }
    category {
      name
      slug
    }
    vehicleStatus
    make
    year
    price
    model
    milage
    vin
    transmission
    color
    year
    price
  }
}
`

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  const { homepage, allDealerInventories } = await request({ query: HOMEPAGE_QUERY })
  return {
    props: {
      ...homepage,
      vehicles: allDealerInventories,
      globalData,
    },
    revalidate: 1,
  }
}
