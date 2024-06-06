'use client'

import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Navbar from "./Navbar"

export default function CollapsibleBar(){
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const HamburgMenu = () => {
    return isOpen ? (<div onClick={handleIsOpen}>
      <MenuOpenIcon className="text-red-500"/>
    </div>) : (<div onClick={handleIsOpen}>
      <MenuIcon/>
    </div>);
  }


  if(isOpen) {
    return (
      <div>
        <HamburgMenu/>
        <Navbar className="z-50 p-8 absolute left-0 top-16 bg-yellow-200 w-screen"/>
      </div>
    )
  }

  return (
    <HamburgMenu/>
  )
}