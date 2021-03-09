import { RefObject, useEffect } from 'react'

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: CallableFunction) => {
  const handleClick = (e: MouseEvent) => {
    if (!ref.current?.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
