import navs from './navigation/navigation'

const isolated = navs.filter(e => !e.childrens)
const childrens = navs.filter(e => e.childrens)

const MadeBy = () => (
  <div
    className="flex flex-wrap justify-end mt-6 text-gray-500 dark:text-gray-400 content"
    style={{mixBlendMode: 'difference'}}
  >
    <p className="w-full pb-6 text-sm md:pb-0 md:w-auto">Developed with ❤️ by <strong>Pixelwall Marketing</strong></p>
  </div>
)

const Elements = () => (
  <div className="flex flex-col justify-between -my-4 text-gray-400 md:flex-row content">
  </div>
)

const Footer = () => (
  <footer className="py-8">
    <Elements/>
    <MadeBy/>
  </footer>
)

export default Footer
