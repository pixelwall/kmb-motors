import Head from 'next/head'
import { useRouter } from 'next/router'

export interface SeoTagsProps {
  title?: string
  brandTitle?: string
  description?: string
  type?: string
}

const getAbsoluteURL = (path: string) => {
  const baseURL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
  return baseURL + path
}

const SeoTags = ({
  title,
  brandTitle,
  description,
  type = 'website',
}: SeoTagsProps) => {
  const { pathname } = useRouter()
  return (
    <Head>
      <title>{title ? `${title} | ${brandTitle}` : brandTitle}</title>
      <meta property="og:title" content={title}/>

      <meta name="description" content={description}/>
      <meta property="og:description" content={description}/>

      <meta property="og:url" content={getAbsoluteURL(pathname)}/>
      <meta property="og:type" content={type}/>

      <meta name="twitter:card" content="summary"/>
    </Head>
  )
}
export default SeoTags
