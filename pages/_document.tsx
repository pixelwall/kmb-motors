import Document, { Html, Main, NextScript } from 'next/document'
import { CriticalStyleHead } from '@/components/criticalStyleHead'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <CriticalStyleHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
