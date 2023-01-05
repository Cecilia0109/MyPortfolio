import React from 'react'
import Link from 'next/link'
import { TiSocialLinkedin,TiSocialFacebook} from "react-icons/ti"
import { FaGithub } from "react-icons/fa"

export default function Social() {
  return (
    <div className="flex gap-2 mt-2">
      <Link href="www.linkedin.com/in/cecilia-lei-developer" className="hover:text-yellow border border-white rounded-full p-1 hover:cursor-pointer hover:border-yellow">
       <TiSocialLinkedin size={20} />
      </Link>
      <Link href="#" className="hover:text-yellow border border-white rounded-full p-1 hover:cursor-pointer hover:border-yellow">
        <FaGithub size={20}/>
      </Link>

    </div>
  )
}
