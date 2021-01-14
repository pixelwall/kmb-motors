<script lang="ts">
  import { spring } from 'svelte/motion'
  import { styles } from '../../lib/styles'

  let _class = ''
  let _style = ''
  export { _class as class, _style as style }

  let y: number
  let translate: number

  export let offset: number

  export let scaleFactor: number = 6
  export let screen: string = 'all'
  export let negative: boolean = false

  const yoffset = spring(0, { stiffness: 0.07 })

  $: if (offset) {
    //translate = -y * 10 / (offset / 10)
    translate = (y - offset) / scaleFactor
  } else if (offset == 0) {
    translate = y / scaleFactor
  }

  export let motion = true
  export let horizontal = false

  $: ensure = translate ? translate : 0
  $: finalFixed = negative ? ensure - (ensure * 2) : ensure
  $: yoffset.set(ensure)
  $: final = negative ? $yoffset - ($yoffset * 2) : $yoffset
  $: css = {
    x:  !horizontal ? '0px' : ( motion ? final.toFixed(2) : finalFixed.toFixed(2) ) + 'px',
    y:  horizontal ? '0px' : ( motion ? final.toFixed(2) : finalFixed.toFixed(2) ) + 'px',
  }
</script>

<svelte:window bind:scrollY={y} />

<div
  class="{_class} {screen}:parallax"
  use:styles={css}
  style="{_style}"
>
  <slot translate={translate}></slot>
</div>

<style>
  .parallax {
    will-change: transform;
    transform: translate3d(var(--x), var(--y), 0);
  }

  .all\:parallax{
    @extend .parallax;
  }

  @screen sm {
    .sm\:parallax {
      @extend .parallax;
    }
  }

  @screen md {
    .md\:parallax {
      @extend .parallax;
    }
  }

  @screen lg {
    .lg\:parallax {
      @extend .parallax;
    }
  }

  @screen xl {
    .xl\:parallax {
      @extend .parallax;
    }
  }
</style>
