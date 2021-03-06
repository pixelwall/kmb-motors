import Page from '@/components/page'
import Hero, { HeroProps } from './hero'
import Welcome, { WelcomeProps } from './welcome'

interface IndexProps extends
  HeroProps,
  WelcomeProps {
}

const Index = (data: IndexProps) => (
  <Page>
    <Hero {...data}/>
    <Welcome {...data}/>
  </Page>
)

export default Index
