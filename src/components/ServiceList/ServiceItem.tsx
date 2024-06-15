import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react";

interface ServiceItemProps {
  children: ReactNode;
  title: string;
  text: string;
}

export default function ServiceItem({children, title, text}: ServiceItemProps) {
  return(
    <li className="w-full max-w-96 px-8 py-12 flex flex-col gap-7 justify-start items-center bg-white border border-white rounded-md hover:border-yellow-300 duration-300">
      <div className="size-24 bg-yellow-300 rounded-full flex justify-center items-center">
        {children}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-red-900 text-xl font-medium text-center">{title}</h2>
        <p className="text-red-900 text-sm font-light lg:text-base text-center">{text}</p>
      </div>
    </li>
  )
}