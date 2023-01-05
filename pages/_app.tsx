import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { Public_Sans } from '@next/font/google'


const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-publicSans',
})




export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${publicSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
