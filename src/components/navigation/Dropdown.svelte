<script>
  import { scale } from 'svelte/transition'

  let show = false // menu state
  let menu = null // menu wrapper DOM reference

  export let titulo

  export let links
</script>

<div class="relative" bind:this={menu} on:mouseenter={() => show = true} on:mouseleave={() => show = false}>
  <div>
    <button
      class="flex items-center py-4 mx-4 focus:outline-none"
    >
    <span>{titulo}</span><span class="ml-2 i jam:chevron-down transform duration-200" class:rotate-180={show}></span>
    </button>

    {#if show}
      <div
        in:scale={{ duration: 200, start: 0.95 }}
        out:scale={{ duration: 75, start: 0.95 }}
        style="min-width: 13rem"
        class="absolute right-0 flex flex-col p-2 border shadow-md rounded-xl origin-top-right bg-kmb-gray-800 border-kmb-gray-900"
      >
        {#each links as l}
          <a
            href={l.href}
            class="block py-1 mx-4 my-1 nav-link"
            >{l.titulo}</a
          >
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .nav-link {
    transition: border 0.2s ease-in-out, color 0s ease-in-out;
    border-bottom: 2px solid transparent;
  }

  .selected-nav {
    border-bottom: 2px solid #0273E3;
  }

  .transparent.selected-nav {
    border-bottom: 2px solid white;
  }

  .nav-link:hover {
    @extend .selected-nav;
  }

  .transparent.nav-link:hover {
    @extend .transparent.selected-nav;
  }
</style>
