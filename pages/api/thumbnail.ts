import { URL } from 'url'
import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAbsoluteURL } from '@/lib/utils'

async function getScreenshot(
  url: string,
  type: 'png' | 'jpeg',
  quality: number,
  fullPage: boolean,
  viewportWidth: number,
  viewportHeight: number
) {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
    defaultViewport: {
      width: viewportWidth,
      height: viewportHeight
    }
  })

  const page = await browser.newPage()
  await page.goto(url)
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])

  const file = await page.screenshot({ type,  quality, fullPage })
  await browser.close()
  return file;
}

function isValidUrl(str: string) {
    try {
        const url = new URL(str)
        return url.hostname.includes('.')
    } catch(e) {
        console.error(e.message)
        return false
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Generate the full URL out of the given path (GET parameter)
  const url = getAbsoluteURL((req.query['path'] as string) || '')

  try {
    const qual = 60
    if (!isValidUrl(url)) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'text/html')
      res.end(`<h1>Bad Request</h1><p>The url <em>${url}</em> is not valid.</p>`)
    } else {
      const file = await getScreenshot(url, 'jpeg', qual, false, 1200, 630)
      res.statusCode = 200
      res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate')
      res.setHeader('Content-Type', `image/jpeg`)
      res.end(file)
    }
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>')
    console.error(e.message)
  }
}
