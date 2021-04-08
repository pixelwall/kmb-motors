import { MutableRefObject, RefObject, useCallback, useEffect, useRef } from 'react'

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

export type RefCallback<T> = (arg: T) => void

export function useRefWithCallback<T = any>(onMount: RefCallback<T>, onUnmount?: RefCallback<T>) {
  const nodeRef = useRef<T>(null)

  const setRef = useCallback(node => {
    if (nodeRef.current && onUnmount) {
      onUnmount(nodeRef.current)
    }

    nodeRef.current = node

    if (nodeRef.current) {
      onMount(nodeRef.current)
    }
  }, [onMount, onUnmount])

  return setRef
}
