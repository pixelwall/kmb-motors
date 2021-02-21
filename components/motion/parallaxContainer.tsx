import { HTMLAttributes, RefObject, useRef, useState } from "react"
import { useOffset } from './offset'

export interface ParallaxContainerProps extends HTMLAttributes<HTMLDivElement> {
  plusHeight?: boolean
  setOffset?: (arg0: number) => void
}

export default function ParallaxContainer({ plusHeight, setOffset = () => {}, ...props }: ParallaxContainerProps) {
  const offsetState = useState<number>(null)
  const ref: RefObject<HTMLDivElement> = useRef(null)

  useOffset({ setter: offsetState[1], ref: ref }, (val) => {
    setOffset(val)
  })

  return (
    <div
      {...props}
      ref={ref}
    >
      {props.children}
    </div>
  )
}
