import { Vehicle } from '@/lib/models/dealerInventory'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from  '@/components/viewport'
import Link from 'next/link'

export const VehiclesContainer = ({ vehicles }: { vehicles?: Vehicle[] }) => (
  <div
    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-3 gap-6"
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
  brand,
  year,
  price,
}: Vehicle) => {
  const image = images[0]

  const FieldDesc = ({ title, text }) => (
    <p><span className="font-bold text-white font-title">{title} </span> {text}</p>
  )

  return (
    <div
      className="w-full overflow-hidden border shadow-lg rounded-xl border-kmb-gray-700 duration-500 transform hover:-translate-y-1 hover:shadow-xl bg-kmb-gray-900"
    >
      <div className="bg-gray-600 pattern bg-opacity-20">
        <div className="relative">
          <Image
            pictureClassName="w-full"
            data={{
              ...image?.responsiveImage,
              alt: name,
              title: name,
            }}
          />
          <div className="absolute bottom-0 right-0 overflow-hidden rounded-tl-xl bg-kmb-gray-900">
            <div className="p-2 px-4 font-bold text-white bg-gray-600 pattern bg-opacity-20 font-title">
              {vehicleStatus}
            </div>
          </div>
        </div>

        <div className="p-4 t-p">
          <div className="pb-4 border-b border-kmb-gray-600">
            <h2 className="text-2xl font-bold text-white font-title">{name}</h2>
          </div>
          <div className="pt-4 space-y-2">
            <p className="flex items-center text-xl text-white font-title">
              <span className="font-bold">${price.toLocaleString('en-US', {maximumFractionDigits:2})}</span>
              <span className="ml-2 text-green-500 i mdi:cash"/>
            </p>
            <FieldDesc title="Type of vehicle" text={category.name}/>
            <FieldDesc title="Brand" text={brand}/>
            <FieldDesc title="Year" text={year}/>
          </div>
          <Link href={{ pathname: '/dealer/[slug]', query: { slug } }}>
            <a
              className="flex items-center justify-center w-full py-2 mt-4 text-red-500 border-2 border-red-500 duration-200 hover:bg-red-500 hover:text-white rounded-md font-title"
            >View <span className="ml-2 i jam:search"></span></a>
          </Link>
        </div>
      </div>
    </div>
  )
}
