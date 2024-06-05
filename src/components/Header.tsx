'use client'

import { useState, useEffect } from "react";
import CollapsibleBar from "./Navigation/CollapsibleBar";
import Navbar from "./Navigation/Navbar";
import Image from "next/image";

export default function Header() {
  const [responsive, setResponsive] = useState<Boolean | undefined>(undefined);

  useEffect(() => {
    console.log("Olá");
    const updateResponsive = () => {
      setResponsive(window.innerWidth < 796 ? true : false)
    }
    updateResponsive()
    window.addEventListener('resize', updateResponsive)
    return () => {
      window.removeEventListener('resize', updateResponsive)
    }
  }, [])

  return (
    <header className="w-screen h-min fixed top-0 left-0 bg-yellow-200 flex justify-between items-center px-4 py-2 md:w-80 md:h-screen md:flex md:flex-col md:justify-start md:p-10">
      <div className="relative size-12 md:size-40 md:mt-2 md:mb-16">
        <Image 
          alt="A photo of me!"
          src="/profile.png"
          fill={true}
        />
      </div>
      {responsive !== undefined ? (
    responsive ? (
      <CollapsibleBar/>
    ) : (
      <>
      <Navbar className="w-full mb-8"/>
      <button className=" px-20 py-3 border rounded-full border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white hover:border-white">Hire Me</button>
      </>
    )
  ) : null}
    </header>
  )
}