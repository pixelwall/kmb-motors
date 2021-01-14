<script>
    import Banner from './Banner.svelte'
    import Button from './Button.svelte'

    import { updateAvailable } from '../sw/store'

    let showing = false
    $: showing = !!$updateAvailable
</script>

<Banner
  hasButton
  hasIcon
  toggle={showing}
  on:close={() => { showing = false }}
>
<span slot="icon">
  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
<span slot="message">
  <span class="md:font-bold">
    Una nueva versión está disponible.
  </span>
  <span class="hidden md:inline">
    Puedes refrescar ahora la página o esperar a la próxima visita.
  </span>
</span>
<div slot="button">
  <Button
    on:click={() => { location.reload() }}
    white
    label="Reloads the page"
    >Refresh</Button
  >
</div>
</Banner>
