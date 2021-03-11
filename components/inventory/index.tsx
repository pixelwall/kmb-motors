import { Vehicle } from '@/lib/models/dealerInventory'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from  '@/components/viewport'
import Link from 'next/link'

export const VehiclesContainer = ({ vehicles }: { vehicles?: Vehicle[] }) => (
  <div
    className="flex flex-col w-full space-x-8 sm:space-x-0 sm:space-x-8 sm:flex-row sm:justify-between"
  >
    {vehicles?.map((v, i) => (
      <Viewport className="w-full sm:w-1/2 lg:w-1/4 animate" style={setAnim({y: '0.5rem'})} oneWay>
        <VehicleCard {...v} key={i}/>
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
}: Vehicle) => {
  const image = images[0]

  const FieldDesc = ({ title, text }) => (
    <p><span className="font-bold text-white font-title">{title} </span> {text}</p>
  )

  return (
    <div
      className="w-full overflow-hidden border shadow-lg rounded-xl border-kmb-gray-700 duration-200 transform hover:-translate-y-1 hover:shadow-xl bg-kmb-gray-900"
    >
      <div className="bg-gray-600 pattern bg-opacity-10">
        <Image
          data={{
            ...image?.responsiveImage,
            alt: name,
            title: name,
          }}
        />

        <div className="p-4 t-p">
          <div className="pb-4 border-b border-kmb-gray-600">
            <h2 className="mb-4 text-white t-h2 font-title">{name}</h2>
            <FieldDesc title="Status" text={vehicleStatus}/>
          </div>
          <div className="pt-4 space-y-2">
            <FieldDesc title="Type of vehicle" text={category.name}/>
            <FieldDesc title="Brand" text={brand}/>
            <FieldDesc title="Year" text={year}/>
          </div>
          <Link href={{ pathname: '/dealer/[category]/[slug]', query: { category: category.slug, slug } }}>
            <a
              className="flex items-center justify-center w-full py-2 mt-4 border-2 text-kmb-blue-500 border-kmb-blue-500 duration-200 hover:bg-kmb-blue-500 hover:text-white rounded-md font-title"
            >View <span className="ml-2 i jam:search"></span></a>
          </Link>
        </div>
      </div>
    </div>
  )
}
