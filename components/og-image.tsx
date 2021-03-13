import Head from 'next/head'
import { useRouter } from 'next/router'

const getAbsoluteURL = (path: string) => {
  const baseURL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
  return baseURL + path
}

export interface OgImageProps {
  image?: string
}

const OgImage = ({ image }: OgImageProps) => {
  const { pathname } = useRouter()
  if (!image) {
    const searchParams = new URLSearchParams()
    searchParams.set('path', pathname)
    image = `/api/thumbnail?${searchParams}`
  }
  // Open Graph & Twitter images need a full URL including domain
  const fullImageURL = getAbsoluteURL(image)
  return (
    <Head>
      <meta property="og:image" content={fullImageURL} />
      <meta name="twitter:image" content={fullImageURL} />
    </Head>
  )
}

export default OgImage
