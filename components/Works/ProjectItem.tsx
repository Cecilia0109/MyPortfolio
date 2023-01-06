import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
// FIXME: duration 500 doesn't work
const ProjectItem = () => {
  return (
    <li className="relative list-none my-16">
      <a href="https://www.courtcanva.com/" className="flex justify-center md:gap-16  lg:gap-8 group/project transition-all duration-500 ease-in-out">
        <div className="relative before:projectBefore md:w-[40%] lg:w-[30%] before:group-hover/project:opacity-100 transition-all duration-500">
          <Image
            src="/works/courtcanva.jpg"
            alt="courtcanva"
            fill 
            objectFit="contain"
            className="relative"
          />
          <div className="flex gap-2 items-center justify-center h-full w-full">
            <Link href="https://github.com/courtcanva" className="linkBtn opacity-0 group-hover/project:opacity-100 transition-all duration-500">Source Code</Link>
            <Link href="https://github.com/courtcanva" className="linkBtn opacity-0 group-hover/project:opacity-100 transition-all duration-500">Download Link</Link>
          </div>
        </div>
        <div className="max-w-[40%] lg:max-w-[50%] border-t-[1px] border-borderBlack pt-4 relative before:projectInfoBefore before:group-hover/project:w-full duration-300 transition-transform">
          <h3 className="text-2xl pb-2 group-hover/project:text-yellow transition-all duration-500">CourtCanva</h3>
          <p className="max-w-[60%] text-[#727373] font-light">
            Courtcanva is a website where you can design your dream basketball
            court online.It can generate the quotation in real-time and you can add your design to the shopping cart and pay directly
          </p>
        </div>
      </a>
      <a href="https://www.courtcanva.com/" className="absolute top-[8%] right-[10%] hover:scale-110 duration-300">
        <BsArrowUpRight size={20} />
      </a>
    </li>
  );
};

export default ProjectItem;
