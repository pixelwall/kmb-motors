import Page from '@/components/page'
import Hero, { HeroProps } from './hero'
import Welcome, { WelcomeProps } from './welcome'
import Inventory, { InventoryProps } from './inventory'
import Services, {} from './services'

interface IndexProps extends HeroProps, WelcomeProps, InventoryProps {
}

const Index = (data: IndexProps) => (
  <Page>
    <Hero {...data}/>
    <Welcome {...data}/>
    <Inventory {...data}/>
  </Page>
)

export default Index
