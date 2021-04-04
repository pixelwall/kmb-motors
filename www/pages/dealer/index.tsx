import Page from '@/components/page'
import Hero from './hero'
import Inventory, { InventoryProps } from './inventory'

interface IndexProps extends InventoryProps {
  globalData?: any
}

const Index = (data: IndexProps) => (
  <Page title="Dealer Inventory" {...data}>
    <Hero />
    <Inventory {...data}/>
  </Page>
)

export default Index
