import s from './styles/services.module.css'

const Services = () => (
  <div className="relative">
    <div className={s['bg-wrapper']}>
      <div className={s['bg']}/>
      <div className={s['bg-pre']}/>
      <div className={s['bg-post']}/>
    </div>
    <div className="py-32 content">
    </div>
  </div>
)

export default Services
