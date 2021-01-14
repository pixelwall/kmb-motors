<script lang="ts">
  import { onMount } from 'svelte'

  let _class = ''
  let _style = ''
  export { _class as class, _style as style }

  let elem: HTMLElement
  let offset: number

  const getOffset = () => {
    if (!elem) {
      return
    }
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = elem.getBoundingClientRect()
    offset = elemRect.top - bodyRect.top
  }

  import { afterPageLoad } from "@roxi/routify"
  $afterPageLoad(getOffset)

  onMount(getOffset)
</script>

<svelte:window on:resize={getOffset} on:scroll|passive={getOffset} />

<div
  class="{_class}"
  style="{_style}"
  bind:this={elem}
>
  <slot offset={offset}></slot>
</div>
