import Link from "next/link";
import React from "react";

const MenuDesktop = () => {
  return (
    <nav>
      <ul className="flex list-none items-center justify-around flex-nowrap">
        <li className="navMenu ">
          <Link href="Intro" className="navLink">
            INTRO
          </Link>
        </li>
        <li className="navMenu">
          <a href="Works" className="navLink">WORKS</a>
        </li>
        <li className="navMenu">
          <a href="About" className="navLink">ABOUT</a>
        </li>
        <li className="navMenu">
          <a href="Contact" className="navLink">CONTACT</a>
        </li>
        <li className="navMenu">
          <a href="Resume" className="navLink">RESUME</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
