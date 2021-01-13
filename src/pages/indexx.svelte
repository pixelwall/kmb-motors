<script>
  import Test from '../components/Test.svelte'
</script>

<div class="flex w-full h-screen bg-gradient-to-b from-blue-200 to-green-200">
  <h1 tw="m-auto italic text-10rem text-raw-$hola">Hola</h1>
</div>

<style>
  div {
    --hola: 100, 100, 100;
  }

  :global(.a) {
    @apply text-red-500;
  }
</style>
