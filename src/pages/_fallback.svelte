<script lang="ts">
  import { onMount } from 'svelte'
  import { url } from '@roxi/routify/runtime'
  import { metatags } from '@roxi/routify'
  import { fly } from 'svelte/transition'
  import svitsConfig from '../../svits.config.json'
  let visible = false
  onMount(() => {
    setTimeout(() => visible = true, 100)
  })

  let proximamente = true
  $: title = proximamente ? 'Próximamente' : '404'
  $: metatags.title = title + ' | ' + svitsConfig.name
</script>

<style>
  .huge {
    font-size: 12rem;
  }

  .e404 {
    text-align: center;
    @apply text-gray-700;
  }

  :global(.dark .e404) {
    @apply text-gray-400;
  }
</style>

<svelte:head>
  <meta name="prerender-status-code" content="404">
</svelte:head>

{#if proximamente}
  <div class="flex w-full font-title">
    <div class="py-16 overflow-hidden e404 content">
      {#if visible}
        <img class="pb-4 m-auto w-4/10 lg:w-2/10" in:fly={{y: -20, duration: 800}} alt="Próximamente" src="/images/logo.svg">
      {/if}
      <div class="flex flex-col items-center text-4xl font-bold">
        Próximamente
      </div>
      <div class="flex flex-col items-center big">
        Atento a nuestras redes para futuros anuncios
        <!-- link to the parent folder of _fallback.svelte -->
        <a class="text-blue-600 hover:underline" href={$url('/index')}>Ir al inicio</a>
      </div>
    </div>
  </div>
{:else}
  <div class="flex w-full">
    <div class="py-16 m-auto overflow-hidden e404">
      {#if visible}
        <div class="leading-none text-gray-500 i jam:cactus huge" in:fly={{y: -20, duration: 800}}></div>
      {/if}
      <div class="flex flex-col items-center big">
        Oops, página no encontrada.
        <!-- link to the parent folder of _fallback.svelte -->
        <a class="text-blue-600 hover:underline" href={$url('/index')}>Ir al inicio</a>
      </div>
    </div>
  </div>
{/if}
