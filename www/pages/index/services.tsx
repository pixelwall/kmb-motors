import s from './styles/services.module.css'
import V, { setAnim } from '@/components/viewport'
import Link from 'next/link'

const Services = () => (
  <div className="relative">
    <div className={s['bg-wrapper']}>
      <div className={s['bg']}/>
      <div className={s['bg-pre']}/>
      <div className={s['bg-post']}/>
    </div>
    <div className="mx-auto my-12 text-white w-full py-32 px-6 lg:w-5/10">
      <V className="mb-16 animate" style={setAnim({ y: '-0.5rem', time: '1s' })}>
        <h2 className="font-bold font-title text-center text-white text-4xl">Other services</h2>
        <p className="font-light font-title text-center text-white text-2xl">We count with a professional staff</p>
      </V>
      <V className="flex flex-col font-bold font-title mt-6 justify-between sm:flex-row" style={setAnim({ y: '0.5rem' })}>
        <div className="flex-col text-center animate" style={setAnim({ d: '200ms' })}>
          <div className="mx-auto mb-2 w-24">
            <svg width="1em" height="1em" className="h-full text-white w-full" viewBox="0 0 32 32"><path d="M12.1 2a9.8 9.8 0 0 0-5.4 1.6l6.4 6.4a2.1 2.1 0 0 1 .2 3a2.1 2.1 0 0 1-3-.2L3.7 6.4A9.84 9.84 0 0 0 2 12.1a10.14 10.14 0 0 0 10.1 10.1a10.9 10.9 0 0 0 2.6-.3l6.7 6.7a5 5 0 0 0 7.1-7.1l-6.7-6.7a10.9 10.9 0 0 0 .3-2.6A10 10 0 0 0 12.1 2zm8 10.1a7.61 7.61 0 0 1-.3 2.1l-.3 1.1l.8.8l6.7 6.7a2.88 2.88 0 0 1 .9 2.1A2.72 2.72 0 0 1 27 27a2.9 2.9 0 0 1-4.2 0l-6.7-6.7l-.8-.8l-1.1.3a7.61 7.61 0 0 1-2.1.3a8.27 8.27 0 0 1-5.7-2.3A7.63 7.63 0 0 1 4 12.1a8.33 8.33 0 0 1 .3-2.2l4.4 4.4a4.14 4.14 0 0 0 5.9.2a4.14 4.14 0 0 0-.2-5.9L10 4.2a6.45 6.45 0 0 1 2-.3a8.27 8.27 0 0 1 5.7 2.3a8.49 8.49 0 0 1 2.4 5.9z" fill="currentColor"></path></svg>
          </div>
          <Link href="/repairs">
            <a className="hover:underline">Auto repairs</a>
          </Link>
        </div>
        <div className="flex-col mt-12 text-center animate sm:mt-0" style={setAnim({ d: '400ms' })}>
          <div className="mx-auto mb-2 w-24">
            <svg width="1em" height="1em" className="h-full text-white w-full" viewBox="0 0 32 32"><path d="M28.83 23.17L23 17.33V13a1 1 0 0 0-.29-.71l-10-10a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l10 10A1 1 0 0 0 13 23h4.34l5.83 5.84a4 4 0 0 0 5.66-5.66zM6 10.41l2.29 2.3l1.42-1.42L7.41 9L9 7.41l4.29 4.3l1.42-1.42L10.41 6L12 4.41L18.59 11L11 18.59L4.41 12zm21.41 17a2 2 0 0 1-2.82 0l-6.13-6.12a1.8 1.8 0 0 0-.71-.29h-4.34l-1-1L20 12.41l1 1v4.34a1 1 0 0 0 .29.7l6.12 6.14a2 2 0 0 1 0 2.82z" fill="currentColor"></path></svg>
          </div>
          <Link href="/paint-jobs">
            <a className="hover:underline">Paint Jobs</a>
          </Link>
        </div>
      </V>
    </div>
  </div>
)

export default Services
