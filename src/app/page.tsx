import Image from "next/image";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialIcon from "@/components/SocialIcon";

//icons
import DevicesIcon from "@mui/icons-material/Devices"; //Responsive
import SmartphoneIcon from "@mui/icons-material/Smartphone"; //App Design
import DesignServicesIcon from "@mui/icons-material/DesignServices"; //UI/UX Design
import SpeedIcon from "@mui/icons-material/Speed"; //Performance
import AutoGraphIcon from "@mui/icons-material/AutoGraph"; //Scalable
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop"; //SEO

//social-icons
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Home() {
  return (
    <>
      <Header />

      <main className="md:ml-72">
        <section
          id="Home"
          className="relative w-full h-screen flex items-center justify-center bg-yellow-50"
        >
          <Image
            className="object-cover mix-blend-color-burn"
            alt="background image"
            src="/bg-clouds.png"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 33vw"
            priority
          />
          <div className="flex flex-col gap-4 items-center max-w-80 lg:max-w-lg relative z-10">
            <h1 className="text-center font-bold text-4xl lg:text-6xl">
              Hi! I&apos;m <span className="text-red-500">Osmar</span>
            </h1>
            <p className="text-center font-light text-base lg:text-lg">
              I am a frontend web developer. I can provide clean code and
              responsive design. Also I make your website functional and
              optimize for SEO.
            </p>
            <ul className="flex gap-8">
              <li>
                <SocialIcon urlRef="#GitHub">
                  <GitHubIcon className="lg:size-8"/>
                </SocialIcon>
              </li>
              <li>
                <SocialIcon urlRef="#X">
                  <XIcon className="lg:size-8"/>
                </SocialIcon>
              </li>
              <li>
                <SocialIcon urlRef="#Instagram">
                  <InstagramIcon className="lg:size-8"/>
                </SocialIcon>
              </li>
            </ul>
          </div>
        </section>

        <section id="About" className=" h-screen">
          About
        </section>
        <section id="Resume" className=" h-screen">
          Resume
        </section>
        <section id="Portfolio" className=" h-screen">
          Portfolio
        </section>
        <section id="Contact" className=" h-screen">
          Contact
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
