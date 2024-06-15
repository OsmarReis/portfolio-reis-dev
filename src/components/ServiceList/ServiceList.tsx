//icons
import DevicesIcon from "@mui/icons-material/Devices"; //Responsive
import SmartphoneIcon from "@mui/icons-material/Smartphone"; //App Design
import DesignServicesIcon from "@mui/icons-material/DesignServices"; //UI/UX Design
import SpeedIcon from "@mui/icons-material/Speed"; //Performance
import AutoGraphIcon from "@mui/icons-material/AutoGraph"; //Scalable
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop"; //SEO
import ServiceItem from "./ServiceItem";
import { ReactNode } from "react";

export default function ServiceList() {
  const serviceData = [
    {
      icon: (): ReactNode => {return <DesignServicesIcon/>},
      title: "UI/UX Design",
      text: "Lorem Ipsum, gransts quanto sjfi Viver Aquad vitae"
    },
    {
      icon: (): ReactNode => {return <DesignServicesIcon/>},
      title: "UI/UX Design",
      text: "Lorem Ipsum, gransts quanto sjfi Viver Aquad vitae"
    },
    {
      icon: (): ReactNode => {return <DesignServicesIcon/>},
      title: "UI/UX Design",
      text: "Lorem Ipsum, gransts quanto sjfi Viver Aquad vitae"
    },
    {
      icon: (): ReactNode => {return <DesignServicesIcon/>},
      title: "UI/UX Design",
      text: "Lorem Ipsum, gransts quanto sjfi Viver Aquad vitae"
    },
    {
      icon: (): ReactNode => {return <DesignServicesIcon/>},
      title: "UI/UX Design",
      text: "Lorem Ipsum, gransts quanto sjfi Viver Aquad vitae"
    },
    {
      icon: (): ReactNode => {return <DesignServicesIcon/>},
      title: "UI/UX Design",
      text: "Lorem Ipsum, gransts quanto sjfi Viver Aquad vitae"
    },
  ]


  return(
    <ul className="flex flex-wrap justify-center gap-6 max-w-7xl lg:gap-4">
      {serviceData.map((item, index): any => {
        return (
          <ServiceItem key={index} title={item.title} text={item.text}>
            <DesignServicesIcon className=" size-10"/>
          </ServiceItem>
        )
      })}
    </ul>
  )
}