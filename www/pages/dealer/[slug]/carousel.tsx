import { ResponsiveImage } from '@/lib/models/cms'
import V, { setAnim } from '@/components/viewport'
import { Image } from 'react-datocms'
import { useState } from 'react'

type CarouselImage = {
  idx?: number
  image?: ResponsiveImage
}

export const Carousel = ({ images }: { images: ResponsiveImage[] }) => {
  const [current, setCurrent] = useState<CarouselImage>({
    idx: 0,
    image: images[0],
  })
  const clamp = (number: number, min: number, max: number) =>
    Math.min(Math.max(number, min), max)
  const prev = () => {
    setCurrent((c) => {
      const idx = clamp(c.idx - 1, 0, images.length - 1)
      return {
        idx,
        image: images[idx],
      }
    })
  }
  const next = () => {
    setCurrent((c) => {
      const idx = clamp(c.idx + 1, 0, images.length - 1)
      return {
        idx,
        image: images[idx],
      }
    })
  }

  const Controls = () => (
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
  )

  return (
    <V className="flex flex-col" style={setAnim({ x: '-1rem' })} once>
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
      <Controls />
    </V>
  )
}
