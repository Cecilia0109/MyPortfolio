import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
// FIXME: duration 500 doesn't work
const ProjectItem = ({...item}) => {

  const {title,desc,src,source,link} = item
  return (
    <li className="relative list-none my-16">
      <a href={link} className="flex justify-center flex-col md:flex-row gap-4 md:gap-16  lg:gap-8 group/project transition-all duration-500 ease-in-out">
        <div className="relative before:projectBefore w-full h-[200px]  md:w-[40%] lg:w-[30%] before:group-hover/project:opacity-100 transition-all duration-500">
          <Image
            src={src}
            alt="title"
            fill
            className="relative object-contain"
          />
          <div className="flex gap-2 items-center justify-center h-full w-full">
            <Link href={source} className="linkBtn opacity-0 group-hover/project:opacity-100 transition-all duration-500">Source Code</Link>
            <Link href={link} className="linkBtn opacity-0 group-hover/project:opacity-100 transition-all duration-500">Download Link</Link>
          </div>
        </div>
        <div className="w-[90%] md:w-[40%] lg:w-[50%] border-t-[1px] border-borderBlack pt-4 relative before:projectInfoBefore before:group-hover/project:w-full duration-300 transition-transform">
          <h3 className="text-2xl pb-2 group-hover/project:text-yellow transition-all duration-500">{title}</h3>
          <p className="md:max-w-[60%] text-[#727373] font-light ">
           {desc}
          </p>
        </div>
      </a>
      <a href={link} className="absolute top-[60%] md:top-[18%] right-[10%] hover:scale-110 duration-300">
        <BsArrowUpRight size={20} />
      </a>
    </li>
  );
};

export default ProjectItem;
