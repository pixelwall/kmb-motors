import { Vehicle } from '@/lib/models/dealerInventory'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from  '@/components/viewport'
import Link from 'next/link'

export const VehiclesContainer = ({ vehicles }: { vehicles?: Vehicle[] }) => (
  <div
    className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-3"
  >
    {vehicles?.map((v, i) => (
      <Viewport className="w-full animate" style={setAnim({y: '0.5rem'})} oneWay key={i}>
        <VehicleCard {...v}/>
      </Viewport>
    ))}
  </div>
)

export const VehicleCard = ({
  name,
  slug,
  category,
  images,
  vehicleStatus,
  make,
  year,
  price,
  model,
  milage,
}: Vehicle) => {
  const image = images[0]

  const FieldDesc = ({ title, text }) => (
    <p><span className="font-bold font-title text-white">{title} </span> {text}</p>
  )

  return (
    <div
      className="border rounded-xl bg-kmb-gray-900 border-kmb-gray-700 shadow-lg w-full transform duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-1"
    >
      <div className="bg-gray-600 bg-opacity-20 pattern">
        <div className="relative">
          <Image
            pictureClassName="w-full"
            data={{
              ...image?.responsiveImage,
              alt: name,
              title: name,
            }}
          />
          <div className="rounded-tl-xl bg-kmb-gray-900 right-0 bottom-0 absolute overflow-hidden">
            <div className="font-bold font-title bg-gray-600 bg-opacity-20 text-white p-2 px-4 pattern">
              {vehicleStatus}
            </div>
          </div>
        </div>

        <div className="p-4 t-p">
          <div className="border-b border-kmb-gray-600 pb-4">
            <h2 className="font-bold font-title text-white text-2xl">{name}</h2>
          </div>
          <div className="space-y-2 pt-4">
            <p className="flex font-title text-xl text-white items-center">
              <span className="font-bold">${price.toLocaleString('en-US', {maximumFractionDigits:2})}</span>
              <span className="ml-2 text-green-500 i mdi:cash"/>
            </p>
            <FieldDesc title="Type of Vehicle" text={category.name}/>
            <FieldDesc title="Make" text={make}/>
            <FieldDesc title="Year" text={year}/>
            <FieldDesc title="Model" text={model}/>
            <FieldDesc title="Milage" text={`${milage}mi.`}/>
          </div>
          <Link href={{ pathname: '/dealer/[slug]', query: { slug } }}>
            <a
              className="rounded-md flex font-title border-2 border-red-500 mt-4 w-full py-2 text-red-500 duration-200 items-center justify-center hover:text-white hover:bg-red-500"
            >View <span className="ml-2 i jam:search"></span></a>
          </Link>
        </div>
      </div>
    </div>
  )
}
