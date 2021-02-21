import {useState} from 'react'
import ParallaxContainer from './parallaxContainer'
import ParallaxObject, { ParallaxProps } from "./parallaxObject"

export { ParallaxContainer, ParallaxObject }

export default function Parallax(props: ParallaxProps) {
  const [offset, setOffset] = useState<number>(null)
  return (
    <ParallaxContainer setOffset={setOffset}>
      <ParallaxObject {...props} offset={offset}/>
    </ParallaxContainer>
  )
}
