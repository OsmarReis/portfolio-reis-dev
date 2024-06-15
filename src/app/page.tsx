import Image from "next/image";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialIcon from "@/components/SocialIcon";
import ThemedText from "@/components/ThemedText";
import Form from "@/components/Form";
import ProjectList from "@/components/ProjectList";



//social-icons
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EducationResume from "@/components/EducationResume/EducationResume";
import ExperienceResume from "@/components/ExperienceResume/ExperienceResume";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ServiceList from "@/components/ServiceList/ServiceList";

export default function Home() {
  return (
    <>
      <Header />

      <main className="lg:ml-72">
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
                  <GitHubIcon className="lg:size-8" />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon urlRef="#X">
                  <XIcon className="lg:size-8" />
                </SocialIcon>
              </li>
              <li>
                <SocialIcon urlRef="#Instagram">
                  <InstagramIcon className="lg:size-8" />
                </SocialIcon>
              </li>
            </ul>
          </div>
        </section>

        <section id="About" className="py-20 px-8 lg:px-72">
          <ThemedText>About</ThemedText>
          <div className="h-12"></div>
          <div className="flex flex-wrap gap-12 lg:gap-14">
            <div
              id="imgContainer"
              className="grow basis-80 max-w-lg h-[540px] bg-slate-400"
            ></div>
            <div className="flex flex-col gap-4 grow basis-80 max-w-lg">
              <h1 className="text-4xl font-medium">Hi There! I’m Osmar Reis</h1>
              <h3 className="text-2xl text-red-500 font-medium">
                Frontend Web Developer
              </h3>
              <p className="text-sm lg:text-base font-light text-justify">
                I am a Fullstack developer. Focused on designing responsive web
                applications, that are usefull, eficient and fast!
              </p>
              <PersonalInfo />
              <div className="h-10"></div>
              <button className="w-fit px-8 py-2 text-sm font-medium border rounded-full bg-red-500 border-red-500 text-white hover:bg-white hover:text-red-500 duration-300">
                Download CV
              </button>
            </div>
          </div>
        </section>
        <section id="Services" className="py-20 px-8 lg:px-40 flex flex-col items-center">
          <ThemedText>Service</ThemedText>
          <div className="h-12"></div>
            <ServiceList />
          
        </section>

        <section id="Resume" className="py-20 px-8 lg:px-40">
          <ThemedText>Resume</ThemedText>
          <div className="h-20"></div>
          <div className="flex flex-wrap gap-40 justify-center">
            <EducationResume />
            <ExperienceResume />
          </div>
        </section>
        <section
          id="Portfolio"
          className="px-8 py-20 flex flex-col justify-center items-center"
        >
          <ThemedText>Portfolio</ThemedText>
          <ProjectList />
        </section>
        <section id="Contact" className="px-8 py-20">
          <ThemedText>Contact</ThemedText>
          <div className="h-20"></div>

          <div className="flex flex-wrap gap-20 justify-center">
            <Form />
            <div className="basis-80 max-w-[450px] grow pr-8">
              <h1 className="text-2xl font-medium">Contact Info</h1>
              <p className="text-sm font-light mt-4 mb-6 text-justify">
                Lorem ipsum dolor sit amet consectetur. Sagittis vulputate
                vulputate nibh tellus dignissim laoreet arcu malesuada.
              </p>
              <ul className="flex flex-col gap-8 mb-12">
                <li className="flex gap-5 items-center">
                  <div className="size-14 bg-yellow-400 border border-black rounded-full flex items-center justify-center">
                    <EmailIcon />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium text-lg">Email</h3>
                    <span className="font-light text-sm hover:text-red-500 duration-200">
                      <a href="reisdev.ti@gmail.com">reisdev.ti@gmail.com</a>
                    </span>
                    <span className="font-light text-sm hover:text-red-500 duration-200">
                      <a href="reisdev.ti@support.com">
                        reisdev.ti@support.com
                      </a>
                    </span>
                  </div>
                </li>
                <li className="flex gap-5 items-center">
                  <div className="size-14 bg-yellow-400 border border-black rounded-full flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium text-lg">Phone</h3>
                    <div className="flex flex-col">
                      <span className="font-light text-sm">
                        +55 61 999787899
                      </span>
                      <span className="font-light text-sm">
                        +55 61 123456789
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <h2 className="text-xl font-medium my-6">
                Visit my social profiles below!
              </h2>
              <ul className="flex gap-6">
                <li>
                  <div className="size-12 bg-yellow-400 border border-black rounded-full flex items-center justify-center">
                    <YouTubeIcon />
                  </div>
                </li>
                <li>
                  <div className="size-12 bg-yellow-400 border border-black rounded-full flex items-center justify-center">
                    <LinkedInIcon />
                  </div>
                </li>
                <li>
                  <div className="size-12 bg-yellow-400 border border-black rounded-full flex items-center justify-center">
                    <FacebookIcon />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
