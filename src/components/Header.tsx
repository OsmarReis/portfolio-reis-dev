'use client'

import { useState, useEffect } from "react";
import CollapsibleBar from "./Navigation/CollapsibleBar";
import Navbar from "./Navigation/Navbar";
import Image from "next/image";
import { useResponsive } from "@/hooks/useResponsive";

export default function Header() {
  const responsive = useResponsive(1024);
  // const [responsive, setResponsive] = useState<Boolean | undefined>(undefined);

  // useEffect(() => {
  //   const updateResponsive = () => {
  //     setResponsive(window.innerWidth < 768 ? true : false)
  //   }
  //   updateResponsive()
  //   window.addEventListener('resize', updateResponsive)
  //   return () => {
  //     window.removeEventListener('resize', updateResponsive)
  //   }
  // }, [])

  return (
    <header className="w-screen h-min fixed z-50 top-0 left-0 bg-yellow-200 flex justify-between items-center px-4 py-2 lg:w-72 lg:h-screen lg:flex lg:flex-col lg:justify-start lg:p-10">
      <div className="relative overflow-hidden size-12 lg:size-40 lg:mt-2 lg:mb-16">
        <Image 
          alt="A photo of me!"
          src="/profile.png"
          fill={true}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 5vw"
          className="border-2 border-red-500 rounded-full border-opacity-30 lg:border-4"
          priority
        />
      </div>
      {responsive !== undefined ? (
    responsive ? (
      <CollapsibleBar/>
    ) : (
      <>
      <Navbar className="w-full mb-8"/>
      <button className="px-16 py-3 border rounded-full border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white hover:border-white">Hire Me</button>
      </>
    )
  ) : null}
    </header>
  )
}