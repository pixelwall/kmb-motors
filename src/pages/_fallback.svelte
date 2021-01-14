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

  $: metatags.title = '404 | ' + svitsConfig.name
</script>

<style>
  .huge {
    font-size: 12rem;
  }
</style>

<svelte:head>
  <meta name="prerender-status-code" content="404">
</svelte:head>

<div class="flex w-full">
  <div class="py-16 m-auto overflow-hidden e404">
    {#if visible}
      <div class="leading-none text-gray-500 i jam:cactus huge" in:fly={{y: -20, duration: 800}}></div>
    {/if}
    <div class="flex flex-col items-center big">
      Oops, page doesn't found.
      <!-- link to the parent folder of _fallback.svelte -->
      <a class="text-blue-600 hover:underline" href={$url('/index')}>Go to home</a>
    </div>
  </div>
</div>
