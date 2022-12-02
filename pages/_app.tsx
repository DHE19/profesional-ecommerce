import '../styles/globals.css'
import type { AppProps } from 'next/app'

//TODO: APPLY A WRAPPER HERE

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


