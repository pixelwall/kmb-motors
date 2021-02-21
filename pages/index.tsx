import Page from '@/components/page'
import V, { setAnim } from '@/components/viewport'

import Image from 'next/image'

const Index = () => (
  <Page>
    <Hero/>
    <Welcome/>
  </Page>
)

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

const Welcome = () => (
  <div className="w-full py-16 content">
    <V className="mb-12 animate" oneWay style={setAnim({y: '-0.5rem', time: '1s'})}>
      <h2 className="text-4xl font-light text-center text-white font-title">Welcome to<br/><span className="text-5xl font-bold">KMB Motors</span></h2>
    </V>
    <div className="flex flex-col items-center sm:flex-row" style={{perspective: '1000px'}}>
      <V className="flex justify-center w-full -ml-4 sm:ml-0 py-14 sm:w-auto animate" style={setAnim({x: '-1rem'})}>
        <div className="relative">
          <div
            className="absolute w-64 h-64 overflow-hidden border-4 border-gray-500 sm:h-72 sm:w-72 transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 lg:w-96 lg:h-96"
            style={{borderTopRightRadius: '1.5rem', borderBottomLeftRadius: '1.5rem'}}
          >
          </div
          >
          <div
            className="z-20 w-64 h-64 overflow-hidden bg-blue-900 border-4 border-gray-500 transform sm:h-72 sm:w-72 lg:w-96 lg:h-96"
            style={{borderTopRightRadius: '1.5rem', borderBottomLeftRadius: '1.5rem'}}
          >
            <Image src="/images/motor.jpg" alt="" layout="fill" objectFit="cover"/>
          </div
          >
        </div>
      </V>
      <V className="w-full text-justify sm:pl-16 lg:pl-24 sm:w-auto animate" style={setAnim({x: '1rem'})}>
        <img src="/images/logo.svg" alt="" className="w-full mb-6"/>
        <p>
          Our large selection ensure that we have a vehicle just for you. Whether
          you are looking for a sedan, coupe, truck, or SUV. We look forward to
          seeing you soon!
        </p>
      </V>
    </div>
  </div>
)

export default Index
