import Page from '@/components/page'
import V, { setAnim } from '@/components/viewport'
import HeroBanner from '@/components/shared/hero-banner'
import { Vehicle } from '@/lib/models/dealerInventory'
import { ResponsiveImage } from '@/lib/models/cms'
import { Image } from 'react-datocms'
import { useState } from 'react'

interface VehicleProps {
  vehicle?: Vehicle
  globalData?: any
}

const FieldDesc = ({ title, text }) => (
  <p><span className="font-bold font-title text-white">{title} </span> {text}</p>
)

type CarouselImage = {
  idx?: number
  image?: ResponsiveImage
}

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  return (
    <V className="mx-auto mt-16 mb-8 w-full lg:w-6/10" oneWay style={setAnim({ y: '-0.5rem' })}>
      <h3
        className="font-bold font-title text-white mb-6 animate t-h2"
      >Interested in this vehicle?</h3>
      <p
        className="font-bold font-title text-white mb-4 animate"
        style={setAnim({ d: '100ms' })}
      >
        Complete name
      </p>
      <div
        className="mb-6 w-full animate"
        style={setAnim({ d: '200ms' })}
      >
        <input
          className="font-title w-full px-0 input"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: Maria Gabriela"
          value={form.name}
          onChange={(e) => setForm(f => ({
            ...f,
            name: e.target.value,
          }))}
        />
      </div>
      
      <p
        className="font-bold font-title text-white mb-4 animate"
        style={setAnim({ d: '300ms' })}
      >
        Email
      </p>
      <div
        className="mb-6 w-full animate"
        style={setAnim({ d: '400ms' })}
      >
        <input
          className="font-title w-full px-0 input"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: mariagabriela@gmail.com"
          value={form.email}
          onChange={(e) => setForm(f => ({
            ...f,
            email: e.target.value,
          }))}
        />
      </div>

      <p
        className="font-bold font-title text-white mb-4 animate"
        style={setAnim({ d: '500ms' })}
      >
        Message
      </p>
      <div
        className="mb-6 w-full animate"
        style={setAnim({ d: '600ms' })}
      >
        <textarea
          className="font-title w-full px-0 input"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Write a message..."
          value={form.message}
          rows={6}
          onChange={(e) => setForm(f => ({
            ...f,
            message: e.target.value,
          }))}
        />
      </div>

      <button
        className="rounded-md flex font-title border-2 border-red-500 mt-4 w-full py-2 animate text-red-500 duration-200 items-center justify-center hover:bg-red-500 hover:text-white"
        style={setAnim({ d: '700ms' })}
      >
        Send message <span className="ml-2 i jam:chevron-right"></span>
      </button>
    </V>
  )
}

const Carousel = ({ images }: { images: ResponsiveImage[] }) => {
  const [current, setCurrent] = useState<CarouselImage>({
    idx: 0,
    image: images[0],
  })
  const clamp = (number, min, max) => Math.min(Math.max(number, min), max)
  const prev = () => {
    setCurrent((c) => {
      const idx = clamp(c.idx - 1, 0, images.length-1)
      return {
        idx,
        image: images[idx],
      }
    })
  }
  const next = () => {
    setCurrent((c) => {
      const idx = clamp(c.idx + 1, 0, images.length-1)
      return {
        idx,
        image: images[idx],
      }
    })
  }
  return (
    <V className="flex flex-col" style={setAnim({ x: '-1rem' })}>
      <style jsx>{`
        .wrapper {
          overflow: hidden;
          display: grid;
          align-items: start;
          width: 100%;
          position: relative;
        }
        .wrapper :global(.image) {
          width: 100%;
          height: 100%;
          grid-column: 1/2;
          grid-row: 1/2 relative;
        }
      `}</style>
      <div
        className="bg-kmb-gray-500 rounded-br-3xl rounded-tl-3xl animate wrapper"
      >
        {images.map((i, idx) => (
          <div
            className={`
              w-full image duration-500 transform
              ${current.idx != idx && 'scale-105 opacity-0 absolute pointer-events-none'}
             `
            }
            key={idx}
          >
            <Image
              data={{
                ...i.responsiveImage,
              }}
            />
          </div>
        ))}
      </div>
      <div
        className="flex mt-8 animate text-3xl text-kmb-gray-500 justify-center items-center"
        style={setAnim({ x: '0', y: '-1rem', d: '400ms' })}
      >
        <button
          className={`flex duration-200 ${current.idx > 0 ? 'text-white hover:text-kmb-gray-300' : 'cursor-not-allowed'}`}
          onClick={prev}
        >
          <span className="i jam:chevron-left" />
        </button>
        <p
          className="font-title font-bold mx-4 text-center text-xl text-white"
          style={{ width: '12ch' }}
        >
          {current.idx + 1} / {images.length}
        </p>
        <button
          className={`flex duration-200 ${current.idx < images.length - 1 ? 'text-white hover:text-kmb-gray-300' : 'cursor-not-allowed'}`}
          onClick={next}
        >
          <span className="i jam:chevron-right" />
        </button>
      </div>
    </V>
  )
}

const Description = (vehicle: Vehicle) => (
  <V className="w-full" style={setAnim({ y: '-1rem' })}>
    <p
      className="flex font-title text-white mb-4 animate text-5xl items-center"
    >
      <span className="font-bold">
        ${vehicle.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
      </span>
      <span className="ml-2 text-green-500 i mdi:cash" />
    </p>
    <div className="animate" style={setAnim({ d: '100ms' })}>
      <FieldDesc title="Vehicle status" text={vehicle.vehicleStatus} />
    </div>
    <div className="animate" style={setAnim({ d: '200ms' })}>
      <FieldDesc title="Type of vehicle" text={vehicle.category.name} />
    </div>
    <div className="animate" style={setAnim({ d: '300ms' })}>
      <FieldDesc title="Brand" text={vehicle.brand} />
    </div>
    <div className="animate" style={setAnim({ d: '400ms' })}>
      <h3
        className="font-bold font-title mt-6 text-white t-h2"
      >Description</h3>
      <div
        className="mt-6 w-full description"
        dangerouslySetInnerHTML={{ __html: vehicle.description }}
      />
      <style jsx>{`
        .description :global(a) {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </div>
  </V>
)

const Slug = ({ vehicle, ...data }: VehicleProps) => (
  <Page title={vehicle.name} {...data}>
    <HeroBanner
      title={vehicle.name}
      subtitle={`Year ${vehicle.year}`}
    />
    <div className="mb-6 content">
      <div className="flex flex-wrap w-full lg:-mx-6">
        <div className="w-full lg:px-6 lg:w-1/2">
          <Carousel images={vehicle.images} />
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
