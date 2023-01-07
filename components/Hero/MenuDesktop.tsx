import Link from "next/link";
import React from "react";

const MenuDesktop = () => {
  return (
    <nav className="w-[75vw] fixed top-0 left-0 md:mx-[100px] lg:mx-[200px] z-50 bg-nav">
      <ul className="flex list-none items-center justify-around flex-nowrap w-full cursor-pointer font-light tracking-widest">
        <li className="navMenu ">
          <Link href="#" className="navLink">
            INTRO
          </Link>
        </li>
        <li className="navMenu">
          <a href="#works" className="navLink">WORKS</a>
        </li>
        <li className="navMenu">
          <a href="#about" className="navLink">ABOUT</a>
        </li>
        <li className="navMenu">
          <a href="#contact" className="navLink">CONTACT</a>
        </li>
        <li className="navMenu">
          <a href="Resume" className="navLink">RESUME</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
