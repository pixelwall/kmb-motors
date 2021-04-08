import Page from '@/components/page'
import HeroBanner from '@/components/shared/hero-banner'
import { Vehicle } from '@/lib/models/dealerInventory'
import { Carousel } from './carousel'
import { Description } from './description'
import { Form } from './form'

interface VehicleProps {
  vehicle?: Vehicle
  globalData?: any
}

const Slug = ({ vehicle, ...data }: VehicleProps) => (
  <Page title={vehicle.name} image={vehicle.images[0].responsiveImage.src} {...data}>
    <HeroBanner
      title={vehicle.name}
      subtitle={`Year ${vehicle.year}`}
    />
    <div className="mb-6 content">
      <div className="flex flex-wrap w-full lg:-mx-6">
        <div className="w-full lg:px-6 lg:w-1/2">
          <Carousel images={vehicle.images} imagesHd={vehicle.imagesHd} />
        </div>
        <div className="mt-12 w-full lg:mt-0 lg:px-6 lg:w-1/2">
          <Description {...vehicle} />
        </div>
      </div>
      <Form />
    </div>
  </Page>
)

export default Slug
