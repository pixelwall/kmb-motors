import Page from '@/components/page'
import Hero from './hero'
import Welcome, {WelcomeProps} from './welcome'
import data from './data'

export const getStaticProps = () => {
  return {
    props: {
      ...data
    }
  }
}

interface IndexProps {
  slogan?: string
  welcome?: WelcomeProps
}

const Index = (data: IndexProps) => (
  <Page>
    <Hero {...data}/>
    <Welcome {...data.welcome}/>
  </Page>
)

export default Index
