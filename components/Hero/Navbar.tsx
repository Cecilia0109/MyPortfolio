import React,{useState, useEffect} from 'react'
import MenuDesktop from './MenuDesktop'
import MenuPhone from './MenuPhone'
import { useMediaQuery } from 'usehooks-ts'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const desktop = useMediaQuery('(min-width: 768px)')
  useEffect(() => {
    const onScroll = ()=> {
      if(window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  
    window.addEventListener("scroll", onScroll)
    return () => {
      window.addEventListener("scroll",onScroll)
    }
  }, [])
  
  return (
    <>
    {desktop ? <MenuDesktop /> : <MenuPhone />}
    </>
  )
}

export default Navbar
