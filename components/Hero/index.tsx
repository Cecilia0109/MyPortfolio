import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

export const Hero = () => {
  return (
    <div className='mx-auto pb-16 mb-16 max-w-7xl'>
        <Navbar />
        <Banner />
    </div>
  )
}
