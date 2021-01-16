<script>
  import svitsConfig from '../../svits.config'
  import { metatags } from '@roxi/routify'
  import V from '../components/IntersectingViewport.svelte'

  metatags.title = svitsConfig.name

  const services = [
    {
      title: 'Auto Repair',
      services: [
        'Full complete maintenance sercices',
        'Tune up',
        'Breaks',
        'Oil Changes',
        'Trasmission Services',
        'Electrical & A/C',
        'Tires & Wheels',
        'Paint repair',
        'Collision repair',
      ]
    },
    {
      title: 'Marketplace',
      services: [
        'Body shop',
        'Car sales',
        '...',
        '...',
      ]
    },
  ]
</script>

<div class="w-full overflow-hidden">
  <div class="relative flex items-center w-full h-screen text-white">
    <div class="absolute w-full h-full opacity-50 bg-gradient-to-b from-blue-800 to-transparent -z-10"></div>
    <div class="flex content">
      <V class="flex flex-col" style="--animate-x: -0.5rem">
        <h1 class="text-4xl font-bold lg:text-6xl font-title animate">KMB Motors</h1>
        <h2 class="text-2xl font-light lg:text-5xl font-title animate" style="transition-delay: 100ms">Drive with confidence</h2>
      </V>
    </div>
  </div>
  <div class="w-full py-16 content">
    <V class="mb-12 animate" oneWay style="--animate-y: -0.5rem; --animate-time: 1s">
      <h2 class="text-4xl font-light text-center text-white font-title">Welcome to<br><span class="text-5xl font-bold">KMB Motors</span></h2>
    </V>
    <div class="flex flex-col items-center sm:flex-row" style="perspective: 1000px">
      <V class="flex justify-center w-full -ml-4 sm:ml-0 py-14 sm:w-auto animate" style="--animate-x: -1rem">
        <div class="relative">
          <div
            class="absolute w-64 h-64 overflow-hidden border-4 border-gray-500 sm:h-72 sm:w-72 transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 lg:w-96 lg:h-96"
            style="border-top-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem"
            >
            </div
          >
          <div
            class="z-20 w-64 h-64 overflow-hidden bg-blue-900 border-4 border-gray-500 transform sm:h-72 sm:w-72 lg:w-96 lg:h-96"
            style="border-top-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem"
            >
            <img src="/images/motor.jpg" alt="" class="object-cover w-full h-full">
            </div
          >
        </div>
      </V>
      <V class="w-full text-justify sm:pl-16 lg:pl-24 sm:w-auto animate" style="--animate-x: 1rem; ">
        <img src="/images/logo.svg" alt="" class="w-full mb-6">
        <p>
        Our large selection ensure that we have a vehicle just for you. Whether
        you are looking for a sedan, coupe, truck, or SUV. We look forward to
        seeing you soon!
        </p>
      </V>
    </div>
  </div>
  <div class="relative w-full">
    <div class="relative">
      <div class="-z-10">
        <div class="absolute w-full h-full bg-center bg-cover opacity-50 -z-10" style="background-image: linear-gradient(0deg, rgba(30, 66, 159, 0.7), rgba(30, 66, 159, 0.7)), url(/images/bg.jpg)"></div>
        <div class="absolute w-full h-32 bg-gradient-to-b from-kmb-gray-900 to-transparent"></div>
        <div class="absolute bottom-0 w-full h-32 bg-gradient-to-t from-kmb-gray-900 to-transparent"></div>
      </div>
      <div class="py-32 content">
        <h2 class="text-4xl font-bold text-center text-white font-title">Our services</h2>
        <h2 class="text-2xl font-light text-center text-white font-title">We count with a professional staff</h2>

        <div class="flex flex-col items-center w-full pt-16 text-white lg:flex-row">
          <V class="flex flex-wrap w-full -m-6 lg:pr-16 lg:pr-24 lg:w-auto" style="--animate-x: -0.5rem; ">
            {#each services as s, i}
              <div class="w-full p-6 animate lg:w-auto" style="transition-delay: {i * 100}ms">
                <div class="mb-4 text-2xl font-bold text-center font-title">{s.title}</div>
                <div class="w-full p-4 border-2 border-white"
                     style="border-top-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem"
                     >
                     <ul class="pl-6 list-disc">
                       {#each s.services as t}
                         <li>{t}</li>
                       {/each}
                     </ul>
                </div>
              </div>
            {/each}
          </V>
          <V class="flex justify-center w-full -ml-4 lg:ml-0 py-14 lg:w-auto animate" style="--animate-x: 1rem; transition-delay: {services.length * 100}ms">
            <div class="relative">
              <div
                class="absolute w-64 h-64 overflow-hidden border-4 border-gray-500 lg:h-72 lg:w-72 transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 lg:w-96 lg:h-96"
                style="border-top-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem"
                >
                </div
              >
              <div
                class="z-20 w-64 h-64 overflow-hidden bg-blue-900 border-4 border-gray-500 transform lg:h-72 lg:w-72 lg:w-96 lg:h-96"
                style="border-top-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem"
                >
                <img src="/images/oil.jpg" alt="" class="object-cover w-full h-full">
                </div
              >
            </div>
          </V>
        </div>
      </div>
    </div>
  </div>
</div>
