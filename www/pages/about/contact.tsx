import V, { setAnim } from '@/components/viewport'
import Link from 'next/link'
import styles from './styles/contact.module.css'

export interface ContactProps {
  aboutEmail?: string
  aboutPhone?: string
}

const Contact = ({ aboutEmail, aboutPhone }: ContactProps) => (
  <div className="mx-auto my-12 w-full px-6 lg:w-5/10">
    <V className="mb-12 animate" style={setAnim({y: '-0.5rem', time: '1s'})}>
      <h2 className={styles.title}>Do you need to<br/><span>contact us?</span></h2>
    </V>
    <V className="flex flex-col font-bold font-title mt-6 justify-between sm:flex-row" style={setAnim({y: '0.5rem'})}>
      <div className="flex-col text-center animate" style={setAnim({ d: '200ms' })}>
        <div className="mx-auto w-24">
          <svg width="1em" height="1em" className="h-full text-white w-full" viewBox="0 0 32 32"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z" fill="currentColor"></path></svg>
        </div>
        <p className="text-white">Email:</p>
        <a className="hover:underline" href={`mailto:${aboutEmail}`}>{aboutEmail}</a>
      </div>
      <div className="flex-col mt-12 text-center animate sm:mt-0" style={setAnim({ d: '400ms' })}>
        <div className="mx-auto w-24">
          <svg width="1em" height="1em" className="h-full text-white w-full" viewBox="0 0 32 32"><path d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z" fill="currentColor"></path></svg>
        </div>
        <p className="text-white">Phone:</p>
        <a className="hover:underline" href={`tel:${aboutPhone}`}>{aboutPhone}</a>
      </div>
    </V>
    <V className="flex text-center w-full pt-8 animate" oneWay style={setAnim({y: '0.5rem', time: '1s'})}>
      <Link href="/appointment">
        <a className={styles.goTo}>Also you can make an appointment here <span className="i jam:chevron-right"/></a>
      </Link>
    </V>
  </div>
)

export default Contact
