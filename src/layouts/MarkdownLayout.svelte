<script context="module">
  import img from '../components/ImageCaption.svelte'
  export { img }
</script>

<script>
  import { fly } from 'svelte/transition'
  import Logo from '../components/logo/Logo.svelte'
  import Title from '../components/logo/Title.svelte'
  import { metatags } from '@roxi/routify'
  import { url } from '@roxi/routify/runtime'
  import svitsConfig from '../../svits.config.json'

  export let title
  export let description

  metatags.title = `Svits - ${title}`
  metatags.description = description || svitsConfig.description
</script>

<style>
  :global(.layout h1, .layout h2, .layout h3) {
    @apply mb-4;
    @apply text-gray-800;
    font-weight: 400;
  }

  :global(.dark .layout h1, .dark .layout h2, .dark .layout h3) {
    color: white;
  }

  :global(.layout h1) {
    font-size: 2.5rem;
  }

  :global(.layout h2) {
    font-size: 2rem;
  }

  :global(.layout h3) {
    font-size: 1.5rem;
  }

  :global(.layout a) {
    @apply text-blue-600;
  }

  :global(.layout a:hover) {
    text-decoration: underline;
  }

  :global(.layout ul) {
    @apply list-disc;
    @apply pl-4;
  }

  :global(.layout li) {
    @apply list-disc;
    @apply my-2;
  }

  :global(.layout pre) {
    @apply rounded-xl;
  }
</style>

<div class="w-full py-6">
  <div class="flex flex-col items-center mb-6">
    <a in:fly={{duration: 500, y: -20}} href={$url('/')} title="Go to home">
      <Logo width='128px'/>
    </a>
  </div>

  <div class="layout" in:fly={{duration: 500, y: -20}}>
    <div class="mb-6 border-b border-gray-500 border-dashed">
      <Title text={title} animate small />
    </div>
    <slot />
  </div>
</div>
