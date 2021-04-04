import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { Vehicle } from '@/lib/models/dealerInventory'
import { GetStaticPathsResult } from 'next'
export { default,  } from '@/www/pages/dealer/[slug]'

const query = `
query VehicleQuery($slug: String) {
  dealerInventory(filter: {slug: {eq: $slug}}) {
    name
    slug
    images {
      ${responsiveImageHelper({w: 800, h: 552, fit: 'crop'})}
    }
    category {
      name
      slug
    }
    vehicleStatus
    brand
    year
    price
    description
  }
}
`

export const getStaticProps = async ({ params }: any) => {
  const { slug } = params
  const globalData = await getGlobalData()
  const { dealerInventory } = await request({ query, variables: {
    slug
  }})
  return {
    props: {
      vehicle: dealerInventory,
      globalData,
    }
  }
}

const paths_query = `
query PathsQuery {
  allDealerInventories {
    slug
  }
}
`

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const { allDealerInventories } = await request({ query: paths_query })
  return {
    paths: allDealerInventories.map(({ slug }: Vehicle) => ({
      params: { slug },
    })),
    fallback: false,
  }
}