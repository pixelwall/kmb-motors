import Head from 'next/head'
import type { ReactNode } from 'react'
import Footer from './footer'

interface Props {
  title?: string
  children: ReactNode
}

const Page = ({ title, children }: Props) => (
  <>
    {title ? (
      <Head>
        <title>{title} | KMB Motors</title>
      </Head>
    ) : null}

    <div className="wrapper pattern">
      <main className="w-full">
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
  </>
)

export default Page
