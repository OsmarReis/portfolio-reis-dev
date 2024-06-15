'use client'

interface ProjectsProps {
  name: string;
  description: string;
  platform: string;
  img: string;
  link: string;
}

export default function ProjectContainer({name, description, platform, img, link}: ProjectsProps) {

  return(
    <div className="h-80 grow basis-72 max-w-96 bg-red-50 text-black rounded cursor-pointer flex flex-col justify-center items-center">
      <h1>{name}</h1>
      <h1>{img}</h1>
      <h1>{description}</h1>
      <h1>{platform}</h1>
      <h1>{link}</h1>
    </div>
  )
}