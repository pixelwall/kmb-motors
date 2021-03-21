import {getAbsoluteURL} from '@/lib/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'

export interface OgImageProps {
  image?: string
}

const buildPath = (pathname: string, params: any) => {
  const used = new Set()
  // Replace the parts in [xxx]
  pathname = pathname.replace(/\[([^\]]+)]/g, (_, c0) => {
    used.add(c0)
    return c0 in params ? params[c0] : ''
  })
  // Add query string if there are any left over
  let qstr = Object.entries(params)
  .filter(([key]) => !used.has(key))
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
  .join('&')
  return pathname + (qstr && '?' + qstr)
}

const OgImage = ({ image }: OgImageProps) => {
  const { pathname, query } = useRouter()
  if (!image) {
    const searchParams = new URLSearchParams()
    searchParams.set('path', buildPath(pathname, query))
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
