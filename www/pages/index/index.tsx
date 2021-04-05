import Page from '@/components/page'
import Hero, { HeroProps } from './hero'
import Welcome, { WelcomeProps } from './welcome'
import Inventory, { InventoryProps } from './inventory'
import Services from './services'

interface IndexProps extends HeroProps, WelcomeProps, InventoryProps {
  globalData?: any
}

const Index = (data: IndexProps) => (
  <Page globalData={data.globalData}>
    <Hero {...data}/>
    <Welcome {...data}/>
    <Inventory {...data}/>
    <Services />
  </Page>
)

export default Index
