<script>
  import { onMount } from 'svelte'
  import { createEventDispatcher } from 'svelte'

  let _class = ''
  let _style = ''
  let _id = ''
  export { _class as class, _style as style, _id as id }

  export let once = false
  export let oneWay = false
  export let top = 0
  export let bottom = 0
  export let left = 0
  export let right = 0

  let container
  export let intersecting = false

  const distpatch = createEventDispatcher()

  onMount(() => {
    function handler() {
      const bcr = container.getBoundingClientRect()

      if (
        (bcr.top + top) < window.innerHeight &&
        (bcr.bottom - bottom) > window.innerHeight &&
        !intersecting
      ) {
        distpatch('top', { offset: container.offsetTop })
      }

      if (
        (bcr.top + top) > window.innerHeight &&
        intersecting
      ) {
        distpatch('out', { offset: container.offsetTop })
      }

      if (oneWay) {
        intersecting = (bcr.top + top) < window.innerHeight
      } else {
        intersecting = (
          (bcr.bottom - bottom) > 0 &&
          (bcr.right - right) > 0 &&
          (bcr.top + top) < window.innerHeight &&
          (bcr.left + left) < window.innerWidth
        )
      }

      if (intersecting) {
        distpatch('intersect', { offset: container.offsetTop })
      }

      if (intersecting && once) {
        window.removeEventListener('scroll', handler)
      }
    }

    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  })
</script>

<style>
  .intersecting-viewport {
    --animate-x: 0;
    --animate-y: 0;
    --animate-s: 1;
    --animate-s-x: var(--animate-s);
    --animate-s-y: var(--animate-s);
    --animate-r: 0deg;
    --animate-r-x: 0deg;
    --animate-r-y: 0deg;
    --animate-time: 0.8s;
  }
  :global(.intersecting-viewport .animate),
  :global(.intersecting-viewport.animate) {
    transition: transform var(--animate-time), opacity var(--animate-time);
  }

  :global(.intersecting-viewport:not(.intersecting) .animate),
  :global(.intersecting-viewport:not(.intersecting).animate) {
    transition: transform var(--animate-time) 0s, opacity var(--animate-time) 0s;
    opacity: 0;
    transform:
      scale3d(var(--animate-s-x), var(--animate-s-y), 0)
      translate3d(var(--animate-x), var(--animate-y), 0)
      rotateX(var(--animate-r-x))
      rotateY(var(--animate-r-y))
      rotateZ(var(--animate-r));
  }

  :global(.intersecting-viewport:not(.intersecting) .animate:not(.animateOut)),
  :global(.intersecting-viewport:not(.intersecting).animate:not(.animateOut)) {
    transition: transform 0s 0s, opacity 0s 0s !important;
  }
</style>

<div
  class="{_class}"
  class:intersecting-viewport={true}
  class:intersecting
  style="{_style}"
  id="{_id}"
  bind:this={container}
>
  <slot {intersecting}></slot>
</div>
