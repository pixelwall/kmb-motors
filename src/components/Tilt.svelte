<script>
  import { onMount } from 'svelte'

  let el

  let width
  let height

  export let perspective = 500
  export let multiplier = 30

  export let rounded
  export let shadow
  export let clickable

  const handleMove = e => {
    width = el.clientWidth
    height = el.clientHeight

    const bbox = el.getBoundingClientRect()
    /*
      * Get position of mouse cursor
      * With respect to the element
      * On mouseover
      */
    /* Store the x position */
    const xVal = e.clientX - bbox.left
    /* Store the y position */
    const yVal = e.clientY - bbox.top

    /*
      * Calculate rotation valuee along the Y-axis
      * Here the multiplier 20 is to
      * Control the rotation
      * You can change the value and see the results
      */
    const yRotation = multiplier * ((xVal - width / 2) / width)

    /* Calculate the rotation along the X-axis */
    const xRotation = -multiplier * ((yVal - height / 2) / height)

    /* Generate string for CSS transform property */
    const string = `perspective(${perspective}px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`

    /* Apply the calculated transformation */
    el.style.transform = string
  }

  const mouseOut = () => {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
  }

  const mouseDown = () => {
    if (clickable) {
      el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    }
  }

  const mouseUp = () => {
    if (clickable) {
      el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    }
  }

  onMount(() => {
    width = el.clientWidth
    height = el.clientHeight
  })
</script>

<div
  class="tilt {$$props.class}"
  class:shadow
  class:rounded
  class:clickable
  bind:this={el}
  on:mousemove={handleMove}
  on:mouseout={mouseOut}
  on:mousedown={mouseDown}
  on:mouseup={mouseUp}
  alt="{$$props.alt}"
>
  <slot/>
</div>

<style>
  .tilt {
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .clickable:hover {
    cursor: pointer;
  }

  .rounded {
    @apply rounded-xl;
  }

  .shadow {
    @apply shadow-sm;
  }

  .shadow:hover {
    box-shadow: 0px 0px 30px rgba(0,0,0, 0.4);
  }
</style>
