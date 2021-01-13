<script>
  // import './sw/sw'
  import { isOffline, updateAvailable } from './sw/store'

  import { Router } from '@roxi/routify/runtime'
  import { routes } from '../.routify/routes'

  import { isChangingPage } from '@roxi/routify/runtime'
  import NProgress from 'nprogress'

  import svitsConfig from '../svits.config.json'
  import Sw from './Serviceworker.svelte'

  NProgress.configure({
    // Pass in your configuration here, below is just how I like it
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
    showSpinner: false,
  })

  $: {
    if ($isChangingPage) {
      NProgress.start()
    }

    if (!$isChangingPage) {
      NProgress.done()
    }
  }

  import { preferences } from './stores/preferences'

  if (svitsConfig.routifyRuntimeConfig?.useHash) {
    ! window.location.hash && window.location.replace(`${window.location.origin}/#${window.location.pathname}`)
  }
  $: document.documentElement.classList.toggle('dark', $preferences.darkMode)

  function handleNetworkChange() {
    $isOffline = !navigator.onLine
  }

  import { onMount } from 'svelte'

  onMount(() => {
    window.addEventListener('online', handleNetworkChange)
    window.addEventListener('offline', handleNetworkChange)
  })

  $: if ($isOffline != undefined) {
    handleNetworkChange()
  }
</script>

<style global>
  @import '@glidejs/glide/dist/css/glide.core.min.css';
  @import '@glidejs/glide/dist/css/glide.theme.min.css';
  @import 'prismjs-tomorrow-theme/prism-tomorrow.css';
</style>

<Sw/>

<Router {routes} config={{ ...svitsConfig?.routifyRuntimeConfig }} />
