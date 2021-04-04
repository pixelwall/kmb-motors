import Page from '@/components/page'
import Hero from './hero'
import Form from './form'

interface IndexProps {
  globalData?: any
}

const Index = (data: IndexProps) => (
  <Page title="Make an appointment" {...data}>
    <Hero />
    <Form />
  </Page>
)

export default Index
