import { ReactNode, useContext } from 'react'
import Navbar from './navigation/navbar'
import Footer from './footer'
import { createContext } from 'react'
import OgImage, { OgImageProps } from './og-image'
import SeoTags, { SeoTagsProps } from './seo-tags'

interface Props extends OgImageProps, SeoTagsProps {
  children?: ReactNode
  globalData?: any
}

const globalDataContext = createContext<any>(null)
export const useGlobalDataContext = () => useContext(globalDataContext)

const brand = 'KMB Motors'
const descriptionDefault = 'Our large selection ensure that we have a vehicle just for you. Whether you are looking for a sedan, coupe, truck, or SUV. We look forward to seeing you soon!'

const Page = ({ title, brandTitle, description, children, globalData, ...rest }: Props) => (
  <globalDataContext.Provider value={globalData}>
    <SeoTags
      title={title}
      brandTitle={brandTitle || brand}
      description={description || descriptionDefault}
    />

    <OgImage {...rest}/>

    <div className="wrapper pattern">
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
      }
      main {
        width: 100%;
        flex-grow: 1;
      }
    `}</style>
  </globalDataContext.Provider>
)

export default Page
