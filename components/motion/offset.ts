import { Dispatch, RefObject, SetStateAction, useEffect } from "react"

export const useOffset = (
  {
    setter,
    ref,
  } :{
    setter: Dispatch<SetStateAction<number>>,
    ref: RefObject<HTMLElement>,
  },
  onSet: (arg0: number) => void = () => {}
) => {
  const setOffset = (val: number) => {
    setter(val)
    onSet(val)
  }

  const getOffset = () => {
    if (!ref.current) {
      return
    }
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = ref.current.getBoundingClientRect()
    setOffset(elemRect.top - bodyRect.top)
  }

  useEffect(getOffset)
  useEffect(() => {
    window.addEventListener('scroll', getOffset, { passive: true })
    window.addEventListener('resize', getOffset)

    return () => {
      window.removeEventListener('scroll', getOffset)
      window.removeEventListener('resize', getOffset)
    }
  })
}
