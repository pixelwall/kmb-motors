<script context="module">
  import { writable } from 'svelte/store'
  export const height = writable(0)
  export const transparent = writable(false)
</script>

<script>
  import Hamburger from './Hamburger.svelte'
  import Sidebar from "./Sidebar.svelte"
  import navigation from "./navigation"
  import { url, isActive } from '@roxi/routify'
  import { isChangingPage } from '@roxi/routify'
  import { fly } from 'svelte/transition'
  import Dropdown from './Dropdown.svelte'

  export let sidebar = false

  let navbar

  $: if (!$isChangingPage) sidebar = false;

  let y

  let isTransparent = $transparent
  let top = true

  const setHeight = (n) => {
    $height = n ? n.offsetHeight : 0
  }

  $: top = y <= $height || y === undefined
  $: isTransparent = $transparent && top
  $: setHeight(navbar)
</script>

<svelte:window bind:scrollY={y} on:resize={() => setHeight(navbar)}/>

<header
  class="
    fixed z-10 w-full duration-200 {!isTransparent && top ? 'bg' : ''} pointer-events-none
  "
>
  <div class="pointer-events-auto">
    <Sidebar bind:open={sidebar}/>
  </div>
  <div class="flex items-center justify-between h-24 p-4 px-6 m-auto pointer-events-none duration-200" bind:this={navbar}>
      <nav class="flex overflow-hidden pointer-events-auto" transition:fly|local={{ x: -50, duration: 400 }}>
        <a href="/" title="Home" class="overflow-hidden duration-100">
          <img
            src="/images/logo.webp"
            class="h-8 sm:h-12 duration-200 transform hover:scale-95"
            alt="logo"
          />
        </a>
      </nav>
    <div
      class="flex items-center px-2 ml-auto -mx-4 text-base pointer-events-auto font-title text-kmb-gray-300"
    >
      {#if top && !sidebar}
        <div class="items-center hidden lg:flex" transition:fly|local={{ x: -50, duration: 400 }}>
          {#each navigation as n}
            {#if n.header == undefined || n.header != false}
              {#if n.childrens}
                <Dropdown titulo={n.titulo} links={n.childrens} />
              {:else}
                <a
                  href={n.href}
                  use:$url
                  class="mx-4 nav-link"
                  class:selected-nav={$isActive(n.href)}>{n.titulo}</a
                >
              {/if}
            {/if}
          {/each}
          <!--div class="flex text-base">
            <a
              class="mx-2 btn-secondary"
              href="https://yescampus.teachlr.com/#signin"
              >Iniciar sesión</a
            >
            <a
              class="mx-2 btn-primary"
              href="https://yescampus.teachlr.com/#register"
              >Regístrate</a
            >
          </div-->
        </div>
      {/if}
      <div class="{ top && !sidebar ? 'lg:hidden' : '' } my-auto pointer-events-auto ml-auto" transition:fly|local={{ x: -50, duration: 400 }}>
        <Hamburger bind:open={sidebar} />
      </div>
    </div>
  </div>
</header>

<style>
  header {
    transition: all 0.3s ease-in-out;
  }

  .glass {
    transition: background-color 0.2s ease-in-out;
    background-color: rgba(10, 10, 10, 0.9);
    backdrop-filter: saturate(200%) blur(10px);
  }

  .bg {
    background-color: rgb(30, 30, 30);
  }

  .nav-link {
    @apply rounded-lg;
    transition: background-color 0.2s ease-in-out, color 0s ease-in-out;
    margin-bottom: -2px;
    @apply p-2;
  }

  .selected-nav {
    @apply bg-kmb-blue-600;
    @apply bg-opacity-25;
  }

  .nav-link:hover {
    @extend .selected-nav;
  }

  .transparent.nav-link:hover {
    @extend .transparent.selected-nav;
  }

  /*
  .logo-0 {
    opacity: 0;
  }
  */
</style>
