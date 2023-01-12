import React from "react";
import Link from "next/link";
import { DM_Serif_Display } from "@next/font/google";
import { AiOutlineArrowRight } from "react-icons/ai";

const dmSerif = DM_Serif_Display({
  variable: "--font-dmSerif",
  weight: ["400"],
});

const Banner = () => {
  return (
    <div className="pt-[22.5vh] max-w-[1400px]">
      <h3 className="heading before:headingBefore">HELLO WORLD</h3>
      <h1 className="text-[#B9B9B9] headingPrimary">
        I am Cecilia Lei, <br /> a creative <br /> Full Stack Developer
      </h1>
      <div className="flex mt-10 gap-5 lg:gap-10  flex-col md:flex-row">
        <Link href="#works" className="btn">
          CHECK OUT MY PROJECTS
        </Link>
        <Link
          href="mailto:qinger.lei0109@gmail.com"
          className="px-2 py-4 rounded-full text-[#B9B9B9] hover:text-yellow  flex items-center gap-2 hover:gap-6 md:max-w-[40%] lg:max-w-[50%] tracking-[0.35em] transition-all duration-300"
        >
          REACH ME OUT
          <span>
            <AiOutlineArrowRight size={20} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
