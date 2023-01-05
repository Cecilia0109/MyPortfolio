import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className='py-24 flex justify-center gap-8'>
      <div className='max-w-[40%]'>
        <Image src="/photo1.jpg" alt="my photo" width={500} height={200} className="rounded-xl"/>
      </div>
      <div className='max-w-[40%] pt-8'>
        <h3 className='heading before:headingBefore mb-16'>ABOUT ME</h3>
        <p className='mb-8 font-light text-2xl'>I am <span className='text-yellow'>Cecilia </span> .I enjoy developing in the <span className='text-yellow'> MERN Framework</span>, working on both front-end and back-end.I am always striving to learn and develop new skills and become a better software engineer.</p>
        <p className='text-2xl font-light tracking-wide'>My main experience is in desktop application development and front-end web development. However, I also love creating simple yet artistic UI designs.</p>
      </div>
    </section>
  )
}

export default About
