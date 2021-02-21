import Head from 'next/head'
import type { ReactNode } from 'react'

interface Props {
  title?: string
  children: ReactNode
}

const Page = ({ title, children }: Props) => (
  <>
    {title ? (
      <Head>
        <title>Rice Bowl | {title}</title>
      </Head>
    ) : null}

    <div className="flex w-full min-h-screen pattern duration-200">
      <main className="w-full">
        {children}
      </main>
    </div>
  </>
)

export default Page
