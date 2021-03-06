import { request, responsiveImageFragment } from '@/lib/datocms'
export { default,  } from '@/www/pages/index'

const HOMEPAGE_QUERY = `
query HomepageQuery {
  homepage {
    slogan
    description
    welcomeImage {
      responsiveImage(imgixParams: {w: "800", h: "800", fit: crop}) {
        ...responsiveImageFragment
      }
    }
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {
  const { homepage } = await request({ query: HOMEPAGE_QUERY })
  return {
    props: {
      ...homepage,
    }
  }
}
