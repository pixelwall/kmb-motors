<script>
  import { createEventDispatcher } from 'svelte'
  import Transition from 'svelte-class-transition'

  export let hasButton
  export let hasIcon
  export let toggle

  const dispatch = createEventDispatcher()
</script>

<Transition
    {toggle}
    transitions="transition transform"
    inTransition="ease-out duration-300"
    inState="opacity-0 scale-95 translate-y-2"
    onState="opacity-100 scale-100 translate-y-0"
    outTransition="ease-in duration-200"
>
    <div class="fixed inset-x-0 bottom-0 z-50 pb-3 select-none sm:pb-5">
        <div class="px-3 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div class="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
                <div class="flex flex-wrap items-center justify-between">
                    <div class="flex items-center flex-1 w-0">
                        {#if hasIcon}
                            <span class="p-2 text-white bg-blue-800 rounded-lg">
                                <slot name="icon">
                                    <svg class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24" />
                                </slot>
                            </span>
                        {/if}
                        <p class="mx-3 font-medium text-white">
                            <slot name="message">
                                Message
                            </slot>
                        </p>
                    </div>
                    {#if hasButton}
                        <div class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                            <slot name="button"></slot>
                        </div>
                    {/if}
                    <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
                        <button
                            on:click={() => { dispatch('close') }}
                            type="button"
                            aria-label="Closes the banner"
                            class="p-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 transition ease-in-out duration-150">
                            <svg class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Transition>
