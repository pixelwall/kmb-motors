import { Image, ResponsiveImageType } from 'react-datocms'
import zoom, { Zoom, ZoomOptions } from 'medium-zoom'
import { useRef } from 'react'
import { useRefWithCallback } from '@/lib/hooks'

export type ZoomImageProps = {
    data: ResponsiveImageType;
    dataHd?: ResponsiveImageType;
    /** Additional CSS className for root node */
    className?: string;
    /** Additional CSS class for the image inside the `<picture />` tag */
    pictureClassName?: string;
    /** Duration (in ms) of the fade-in transition effect upoad image loading */
    fadeInDuration?: number;
    /** @deprecated Use the intersectionThreshold prop */
    intersectionTreshold?: number;
    /** Indicate at what percentage of the placeholder visibility the loading of the image should be triggered. A value of 0 means that as soon as even one pixel is visible, the callback will be run. A value of 1.0 means that the threshold isn't considered passed until every pixel is visible */
    intersectionThreshold?: number;
    /** Margin around the placeholder. Can have values similar to the CSS margin property (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the placeholder element's bounding box before computing intersections */
    intersectionMargin?: string;
    /** Wheter enable lazy loading or not */
    lazyLoad?: boolean;
    /** Additional CSS rules to add to the root node */
    style?: React.CSSProperties;
    /** Additional CSS rules to add to the image inside the `<picture />` tag */
    pictureStyle?: React.CSSProperties
    /** Wheter the image wrapper should explicitely declare the width of the image or keep it fluid */
    explicitWidth?: boolean
    zoomOptions?: ZoomOptions 
}

const ZoomImage = ({
  zoomOptions = {
    background: 'rgba(10, 10, 10, 0.9)',
  },
  ...props
}: ZoomImageProps) => {
  const zoomRef = useRef<Zoom>()
  const imageRef = useRefWithCallback<HTMLElement>(
    node => {
      zoomRef.current = zoom(zoomOptions)
      const observer = new MutationObserver((mutationList) => {
        for (var mutation of mutationList) {
          mutation.addedNodes.forEach((el) => {
            const images = (el as HTMLElement).getElementsByTagName('img')
            const image = images.item(images.length - 1)
            if (props.dataHd) {
              image.setAttribute('data-zoom-src', props.dataHd.src)
            }
            zoomRef.current.attach(image as HTMLElement)
          })
        }
      })
      observer.observe(node, {childList: true, subtree: true})
    }
  )

  return (
    <div ref={imageRef}>
      <Image {...props} />
    </div>
  )
}

export default ZoomImage
