import React from 'react'

const MenuList = () => {
  return (
    <ul className="flex flex-col w-full pl-5 h-30 relative bg-[#141516] ">
    <li className="navMenu border-none w-full">
      <a href="#works" className="navLink">
        WORKS
      </a>
    </li>
    <li className="navMenu border-none w-full">
      <a href="#about" className="navLink">
        ABOUT
      </a>
    </li>
    <li className="navMenu border-none w-full">
      <a href="#contact" className="navLink">
        CONTACT
      </a>
    </li>
    <li className="navMenu border-none w-full">
      <a href="Resume" className="navLink">
        RESUME
      </a>
    </li>
  </ul>
  )
}

export default MenuList
