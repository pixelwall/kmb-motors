import Page from '@/components/page'
import Hero from './hero'
import Contact, { ContactProps } from './contact'
import Map from './map'
import Description, { AboutDescription } from './description'

interface IndexProps extends AboutDescription, ContactProps {
  globalData?: any
}

const Index = (data: IndexProps) => (
  <Page title="About us" {...data}>
    <Hero />
    <Description {...data} />
    <Contact {...data} />
    <Map />
  </Page>
)

export default Index
