<script>
  import Navbar, { height, transparent } from '../components/navigation/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
  import { styles } from '../lib/styles'
  import { isActive, afterPageLoad } from '@roxi/routify'

  $: cssGlobals = {
    navbarHeight: `${$height}px`,
    navbarHeightNegative: `-${$height}px`,
  }

  const routes = [
    '/index',
  ]


  $afterPageLoad(() => {
    $transparent = !!routes.map(r => $isActive(r)).filter(b => b).length
  })
</script>

<style>
  :global(.pattern) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23191919' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  }
</style>

<div class="flex flex-col w-full min-h-screen pattern duration-200" use:styles={cssGlobals}>
  <div class="z-40">
    <Navbar/>
  </div>
  <main class="flex justify-center flex-grow h-full" style="margin-top: { !$transparent ? 'var(--navbarHeight)' : '0px' }">
    <slot/>
  </main>
  <Footer/>
</div>
