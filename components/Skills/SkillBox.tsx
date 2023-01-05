import React from 'react'
import Image from "next/image";
import { skills } from '../../Constants/skills';

const SkillBox = () => {
  return (
    <div className="inline-flex gap-4 text-[#a1a1a2]">
    {skills.map((item, index) => (
      <div className="item flex bg-[#2C2C2D] px-6 gap-2 rounded-xl" key={index}>
        <div className="w-[20px] h-[60px] relative inline-block">
          <Image
            src={`/icons/${item}.png`}
            alt="header image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h5 className="mt-4 text-xl font-light">{`${item}`}</h5>
      </div>
    ))}
  </div>
  )
}

export default SkillBox
