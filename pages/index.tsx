import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Hero } from '../components/Hero'
import Skills from '../components/Skills'
import Works from '../components/Works'
import About from '../components/About/Index'
import Contact from '../components/Contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='px-[240px]'>
      <Head>
        <title>Cecilia Lei&aosp;s portfolio</title>
        <meta name="description" content="Cecilia Lei's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Skills />
      <Works />
      <About />
      <Contact />
    </div>
  )
}
