<script>
  import { fly } from '../../lib/transitions'
  import { fade } from 'svelte/transition'
  import elements from './navigation'
  import { url, isActive } from '@roxi/routify/runtime'
  export let open = true

  let inside
  let menu

  $: if (!open) menu = null;

  $: document.documentElement.classList.toggle('overflow-hidden', open)

  function handleClick() {
    if (!inside && open) {
      //open = false
    }
  }
</script>

<svelte:window on:click={handleClick}/>

{#if open}
  <aside
    on:mouseenter={() => inside = true}
    on:mouseleave={() => inside = false}
    class="absolute w-screen h-screen bg-fixed shadow font-title text-kmb-gray-200 pattern"
    class:open
    transition:fade={{ x: -100, duration: 400 }}
  >
    <div
      class="flex flex-col items-end h-full px-6 pt-32 text-4xl text-right"
    >
      {#if !menu}
        <div>
          {#each elements as el, i}
            <div class="my-2 overflow-hidden">
              {#if el.childrens}
                <div
                  class="flex justify-end w-full cursor-pointer nav-link"
                  on:click={() => menu = el}
                >
                  <p
                    class="flex items-center text-right cursor-pointer"
                    in:fly={{ y: 100, unit: '%', duration: 800, rotate: 6, delay: 100 + (i * 800 / elements.length)}}
                  >{el.titulo}
                  <span class="mt-1 ml-2 cursor-pointer i jam:chevron-right">
                  </p>
                </div>
              {:else}
                <a
                  class="flex justify-end w-full cursor-pointer nav-link"
                  href={$url(el.href)}
                  class:selected-nav={$isActive(el.href)}
                >
                  <p
                    class="text-right cursor-pointer"
                    in:fly={{ y: 100, unit: '%', duration: 800, rotate: 6, delay: 100 + (i * 800 / elements.length)}}
                    >{el.titulo}</p
                  >
                </a>
              {/if}
            </div>
          {/each}
        </div>
      {:else}
        <button
          class="flex my-1 ml-auto text-xl text-right cursor-pointer nav-link"
          in:fly={{ x: -100, duration: 500}}
          on:click={() => menu = null}
          ><span class="mr-2 cursor-pointer i jam:chevron-left"></span><span class="cursor-pointer">Back</span></button
        >
        <p
          class="block w-full py-1 my-2 lg:text-right"
          in:fly={{ x: -100, duration: 500}}
          >{menu.titulo}</p
        >
        <div class="mb-6 overflow-x-hidden overflow-y-auto">
          {#each menu.childrens as el, i}
            <div class="my-3 overflow-hidden">
              <a
                class="block w-full text-xl lg:text-right nav-link"
                href={$url(el.href)}
                class:selected-nav={$isActive(el.href)}
                in:fly={{ y: 100, unit: '%', duration: 800, rotate: 6, delay: 100 + (i * 500 / menu.childrens.length)}}
                >{el.titulo}</a
              >
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </aside>
{/if}

<style>
  aside {
    transition: background-color 0.2s ease-in-out;
    background-color: rgba(10, 10, 10, 1);
    background-color: #0a0a0a;
  }

  .buttons {
    display: flex;
    @apply text-4xl;
  }

  .nav-link {
    --border: 2px solid #3A3939;
    --border: 2px solid #D7D7D7;
    --alt-opacity: 0;
    border-bottom: 2px solid transparent;
    @apply duration-200;
  }

  .alt-title {
    opacity: var(--alt-opacity);
    @apply duration-200;
  }

  .selected-nav {
    --alt-opacity: 1;
    border-bottom: var(--border);
  }

  .nav-link:hover {
    --alt-opacity: 1;
    border-bottom: var(--border);
  }
</style>
