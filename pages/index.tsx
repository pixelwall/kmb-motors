import { request, responsiveImageFragment, responsiveImageHelper } from '@/lib/datocms'
export { default,  } from '@/www/pages/index'

const HOMEPAGE_QUERY = `
query HomepageQuery {
  homepage {
    slogan
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
    brand
    year
  }
  allDealerCategories {
    name
    slug
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {
  const { homepage, allDealerInventories, allDealerCategories } = await request({ query: HOMEPAGE_QUERY })
  return {
    props: {
      ...homepage,
      vehicles: allDealerInventories,
      globalData: allDealerCategories,
    }
  }
}
