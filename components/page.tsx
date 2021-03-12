import Head from 'next/head'
import { ReactNode, useContext } from 'react'
import Navbar from './navigation/navbar'
import Footer from './footer'
import { createContext } from 'react'

interface Props {
  title?: string
  children?: ReactNode
  globalData?: any
}

const globalDataContext = createContext<any>(null)
export const useGlobalDataContext = () => useContext(globalDataContext)

const Page = ({ title, children, globalData }: Props) => (
  <globalDataContext.Provider value={globalData}>
    {title ? (
      <Head>
        <title>{title} | KMB Motors</title>
      </Head>
    ) : null}

    <div className="wrapper pattern">
      <Navbar/>
      <main className="flex-grow w-full">
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
    `}</style>
  </globalDataContext.Provider>
)

export default Page
