import { getGlobalData, request, responsiveImageFragment, responsiveImageHelper } from '@/lib/datocms'
export { default,  } from '@/www/pages/dealer'

const HOMEPAGE_QUERY = `
query DealerQuery {
  allDealerInventories {
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
    brand
    year
    price
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  const { homepage, allDealerInventories } = await request({ query: HOMEPAGE_QUERY })
  return {
    props: {
      ...homepage,
      vehicles: allDealerInventories,
      globalData,
    }
  }
}
