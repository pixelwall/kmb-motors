import V, { setAnim } from '@/components/viewport'

const Hero = () => (
  <div className="relative flex items-center w-full h-screen text-white">
    <div className="absolute w-full h-full opacity-50 bg-gradient-to-b from-blue-800 to-transparent -z-10"></div>
    <div className="flex content">
      <V className="flex flex-col" style={setAnim({x: '-0.5rem'})}>
        <h1
          className="text-4xl font-bold lg:text-6xl font-title animate"
        >KMB Motors</h1>
        <h2
          className="text-2xl font-light lg:text-5xl font-title animate"
          style={{transitionDelay: '100ms'}}
        >Drive with confidence</h2>
      </V>
    </div>
  </div>
)

export default Hero
