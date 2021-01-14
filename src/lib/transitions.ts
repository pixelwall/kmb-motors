import { cubicOut, cubicInOut, linear } from 'svelte/easing'
import { assign, is_function } from 'svelte/internal'

type EasingFunction = (t: number) => number

export interface TransitionConfig {
  delay?: number
  duration?: number
  easing?: EasingFunction
  css?: (t: number, u: number) => string
  tick?: (t: number, u: number) => void
}

interface FlyParams {
  delay?: number
  duration?: number
  easing?: EasingFunction
  x?: number
  y?: number
  rotate?: number
  opacity?: number
}

export function fly(node: Element, {
  delay = 0,
  duration = 400,
  easing = cubicOut,
  x = 0,
  y = 0,
  rotate = 0,
  opacity = 0
}: FlyParams): TransitionConfig {
  const style = getComputedStyle(node)
  const target_opacity = +style.opacity
  const transform = style.transform === 'none' ? '' : style.transform

  const od = target_opacity * (1 - opacity)

  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
    transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px) rotate(${(1 - t) * rotate}deg);
    opacity: ${target_opacity - (od * u)}`
  }
}
