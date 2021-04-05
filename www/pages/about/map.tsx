import V, { setAnim } from '@/components/viewport'

const Map = () => (
  <V className="mx-auto mb-8 w-full px-6 animate lg:w-5/10" style={setAnim({y: '1rem', time: '1s'})}>
    <div className="bg-kmb-gray-600 rounded-tl-3xl rounded-br-3xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10806.771128513488!2d-122.2981598!3d47.3789143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2d7fd4a3f3579b4!2sKMB%20MOTORS!5e0!3m2!1ses-419!2sve!4v1617586085028!5m2!1ses-419!2sve"
        height="450"
        style={{ border: '0', width: '100%' }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  </V>
)

export default Map
