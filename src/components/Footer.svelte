<script>
  import navs from './navigation/navigation'
</script>

<footer class="py-8">
  <div class="flex flex-col justify-between -my-4 md:flex-row content">
    {#each navs as n, i}
      <div
        class="
               my-4
               w-full section
               text-gray-400 dark:text-gray-300
               { i == navs.length - 1 ? 'md:text-right' : '' }
               { n.childrens && i > 0 && i < navs.length - 1 ? 'md:mx-auto' : '' }
               "
      >
        {#if n.childrens}
          <p class="title">{n.titulo}</p>
          <!--p
            class="
                   flex items-center title
                   { n.childrens && i == navs.length - 1 ? 'md:justify-end' : '' }
                  "
            ><span>{n.titulo}</span> <span class="i jam:chevron-down"></span></p
          -->
          {#if n.childrens.length}
            <div class="flex flex-col w-full mt-2 font-title">
              {#each n.childrens as c}
                <a href={c.href} class="my-1 hover:underline link">{c.titulo}</a>
              {/each}
            </div>
          {/if}
          {:else}
            <a href={n.href} class="title hover:underline">{n.titulo}</a>
        {/if}
      </div>
    {/each}
  </div>
  <div class="flex flex-wrap justify-end mt-6 text-gray-500 dark:text-gray-400 content" style="mix-blend-mode: difference">
    <p class="w-full pb-6 text-sm md:pb-0 md:w-auto">Developed with ❤️ by <strong>Pixelwall Marketing</strong></p>
    <!-- p class="w-full text-sm md:w-auto"><strong>YES CAMPUS</strong>© 2020. Todos los derechos reservados</p-->
  </div>
</footer>

<style>
  @screen md {
    .section {
      width: 25%;
    }
  }

  .title {
    @apply text-xl;
    @apply uppercase;
    @apply font-title;
  }

  .title, .link {
    mix-blend-mode: difference;
  }
</style>
