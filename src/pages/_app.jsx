import { GoogleAnalytics } from "nextjs-google-analytics";

import 'focus-visible'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
