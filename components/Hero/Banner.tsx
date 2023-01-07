import React from 'react'
import Link from 'next/link'
import { DM_Serif_Display } from '@next/font/google'

const dmSerif = DM_Serif_Display({
  variable: '--font-dmSerif',
  weight:['400']
})

const Banner = () => {
  return (
    <div className='pt-[22.5vh] max-w-[1400px]'>
      <h3 className='heading before:headingBefore'>HELLO WORLD</h3>
      <h1 className='text-[#B9B9B9] headingPrimary'>I am Cecilia Lei, <br/>  a creative  <br/> Full Stack Developer</h1>
      <Link href="#works" className='btn mt-10 '>
       CHECK OUT MY PROJECTS
      </Link>
    </div>
  )
}

export default Banner
