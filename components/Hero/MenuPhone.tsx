import React, { useState } from "react";
import { CgMenuBoxed } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MenuList from "./MenuList";

const MenuPhone = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full fixed z-20">
      <div className="py-4 w-full border-b-[1px] border-borderBlack bg-nav z-50 h-16">
        <p className=" text-xl hover:text-yellow md:pl-3 inline-block h-16">CECILIA LEI</p>
        <div
          className="absolute top-3 md:top-4 right-1 md:right-0  w-16 h-16 hover:text-yellow hover:cursor-pointer hover:scale-125 transition-all duration-300"
          onClick={() => setIsOpen((prev) => !prev)}  
        >
          {isOpen ? (
            <AiOutlineCloseCircle size={30} />
          ) : (
            <CgMenuBoxed size={30} />
          )}
        </div>
      </div>
      {isOpen && <MenuList />}
    </div>
  );
};

export default MenuPhone;
