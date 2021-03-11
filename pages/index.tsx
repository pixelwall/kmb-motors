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
  allDealerInventories(first: 4) {
    name
    slug
    images {
      ${responsiveImageHelper({w: 128, h: 128, fit: 'crop'})}
    }
    category {
      name
      slug
    }
    vehicleStatus
    brand
    year
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {
  const { homepage, allDealerInventories } = await request({ query: HOMEPAGE_QUERY })
  return {
    props: {
      ...homepage,
      vehicles: allDealerInventories,
    }
  }
}
