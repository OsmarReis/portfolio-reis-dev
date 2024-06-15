'use client'

import { useResponsive } from "@/hooks/useResponsive";
import ProjectContainer from "./ProjectContainer";
import { projects_list } from "@/mock/projects_list";
import { useState } from "react";

const LIMIT_MOBILE = 3;
const LIMIT_WEB = 6;

export default function ProjectList() {
  const initialLimit = useResponsive(500) ? LIMIT_MOBILE : LIMIT_WEB;

  const [limit, setLimit] = useState(initialLimit);

  const showMore = () => {
    setLimit(limit + 3);
  }


  return(
    <div className="flex flex-col justify-center items-center">
    <div className="flex flex-wrap gap-6 my-16 max-w-5xl justify-center">
      {projects_list.slice(0, limit).map((item, index) => {
        return (
          <ProjectContainer key={index} name={item.name} img={item.img} description={item.description} platform={item.platform} link={item.link}/>
        )
      })}
    </div>
    <button className="w-fit px-8 py-3 text-sm font-medium border rounded-full bg-red-500 border-red-500 text-white hover:bg-white hover:text-red-500 duration-300" onClick={showMore}>
      Load More
    </button>
    </div>
  )
}