<script>
  import Image from './Image.svelte'

  let _class = ''
  export { _class as class }

  export let src
  export let alt = 'Alt'
</script>

<div class="my-4 text-center">
  <Image src={src} alt={alt} class="w-full border border-gray-500 border-dashed rounded-xl {_class}"/>
  <p class="mt-2">- {alt} -</p>
</div>
