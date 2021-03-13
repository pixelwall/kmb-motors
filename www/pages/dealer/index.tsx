import Page from '@/components/page'
import Hero, { HeroProps } from './hero'
import Inventory, { InventoryProps } from './inventory'

interface IndexProps extends HeroProps, InventoryProps {
  globalData?: any
}

const Index = (data: IndexProps) => (
  <Page title="Dealer Inventory" {...data}>
    <Hero {...data}/>
    <Inventory {...data}/>
  </Page>
)

export default Index
