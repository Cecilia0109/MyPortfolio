import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-around pt-4 mb-16">
      <p className="text-sm text-[#727373]">
        Copyright 2022. <br /> All Rights Reserved
      </p>
      <Link href="#top" className="block border border-white p-2 hover:text-black hover:bg-white transition-all duration-500">
        <AiOutlineArrowUp size={24} />
      </Link>
    </div>
  );
};

export default Footer;
