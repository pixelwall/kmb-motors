import Page from '@/components/page'
import Hero, { HeroProps } from './hero'
import Welcome, { WelcomeProps } from './welcome'
import Inventory, { InventoryProps } from './inventory'

interface IndexProps extends HeroProps, WelcomeProps, InventoryProps {
  globalData?: any
}

const Index = (data: IndexProps) => (
  <Page {...data}>
    <Hero {...data}/>
    <Welcome {...data}/>
    <Inventory {...data}/>
  </Page>
)

export default Index
