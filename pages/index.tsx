import data from '@/www/pages/index/data'
export { default } from '@/www/pages/index'

export const getStaticProps = () => {
  return {
    props: {
      ...data
    }
  }
}
