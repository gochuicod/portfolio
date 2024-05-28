"use client"

import { ChevronRight, FileBadge, Inbox } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col bg-white text-black lg:p-[3vw] md:p-[3vw] p-[7vw] lg:min-h-[100vh] md:min-h-[45vh] lg:max-h-[100vh] md:max-h-[45vh] gap-x-[3vw]">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center lg:w-[45%] md:w-[45%] w-[100%] bg-gradient-to-t from-[#4568dc] to-[#b06ab3] lg:rounded-[1.5vw] md:rounded-[1.5vw] rounded-[5vw] lg:p-[3vw] md:p-[3vw] p-[10vw] lg:gap-y-[3vw] md:gap-y-[3vw] gap-y-[6vw]">
        <Image
          className="rotate-90 rounded-full lg:w-[20vw] md:w-[20vw] w-[50vw] lg:h-[20vw] md:h-[20vw] h-[50vw] object-cover lg:border-[0.5vw] md:border-[0.5vw] border-[1.5vw] lg:p-[1vw] md:p-[1vw] p-[2.5vw]"
          src="/portfolio/IMG_5211.webp"
          alt=""
          width={1080}
          height={720}
        />
        <p className="text-center text-white lg:text-[3vw] md:text-[4vw] text-[10vw] lg:leading-[3vw] md:leading-[4vw] leading-[10vw]">
          I&apos;m,<br/>
          <b>Darelle</b><br/>
          <b>Gochuico</b>
        </p>
        <span className="flex flex-row items-center lg:text-[1vw] md:text-[1.5vw] text-[3.5vw] text-white lg:gap-x-[0.5vw] md:gap-x-[1vw] gap-x-[2vw]">
          gochuicodarelleq@gmail.com
          <Inbox className="lg:w-[1vw] md:w-[1.5vw] w-[3.5vw] lg:h-[1vw] md:h-[1.5vw] h-[3.5vw]" />
        </span>
      </div>
      {/* Right Side */}
      <div className="flex flex-col w-full lg:gap-y-[3vw] md:gap-y-[3vw] gap-y-[5vw] lg:mt-[0vw] md:mt-[0vw] mt-[5vw]">
        {/* My Portfolio */}
        <span className="flex flex-row relative lg:text-[5.5vw] md:text-[6vw] text-[9.5vw] tracking-[2vw] font-bold">
          My Portfolio
          <ChevronRight className="absolute lg:right-[-1vw] md:right-[-1vw] right-[-3vw] lg:top-[-1vw] md:top-[-1vw] top-[-3vw] -rotate-45 lg:w-[5vw] md:w-[5vw] w-[10vw] lg:h-[5vw] md:h-[5vw] h-[10vw]" strokeWidth={3}/>
        </span>
        {/* Video and Stats */}
        <div className="flex flex-row lg:gap-x-[3vw] md:gap-x-[3vw] gap-x-[5vw]">
          <video className="object-cover w-full lg:h-[36vh] md:h-[20vh] h-[25vh] lg:rounded-[1.5vw] md:rounded-[1.5vw] rounded-[5vw]" src="/portfolio/test_2.MOV" autoPlay loop muted>
            <source src="/portfolio/test_2.MOV"/>
          </video>
          <div className="flex flex-col lg:w-[25%] md:w-[35%]">
            <div className="flex flex-col justify-center items-center lg:h-[18vh] md:h-[10vh] h-[12.5vh] bg-gradient-to-r from-[#a8ff78] from-40% to-[#78ffd6] lg:rounded-t-[1.5vw] md:rounded-t-[1.5vw] rounded-t-[5vw] relative lg:p-[0vw] md:p-[0vw] p-[5vw]">
              <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 lg:w-[2vw] md:w-[2vw] w-[6vw] lg:h-[2vw] md:h-[2vw] h-[6vw] text-black opacity-60"/>
              <div className="flex flex-col">
                <span className="lg:text-[2.5vw] md:text-[3vw] text-[6vw] font-bold">
                  29
                </span>
                <span className="lg:text-[1.2vw] md:text-[1.7vw] text-[3vw]">
                  TechStack
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:h-[18vh] md:h-[10vh] h-[12.5vh] bg-gradient-to-l from-[#bc4e9c] from-1% to-[#f80759] lg:rounded-b-[1.5vw] md:rounded-b-[1.5vw] rounded-b-[5vw] text-white relative">
              <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 lg:w-[2vw] md:w-[2vw] w-[6vw] lg:h-[2vw] md:h-[2vw] h-[6vw] text-white"/>
              <div className="flex flex-col">
                <span className="lg:text-[2.5vw] md:text-[3vw] text-[6vw] font-bold">
                  77%
                </span>
                <span className="lg:text-[1.2vw] md:text-[1.7vw] text-[3vw]">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Certification and Stats */}
        <div className="flex flex-row lg:gap-x-[3vw] md:gap-x-[3vw] gap-x-[5vw] lg:h-[100vh] md:h-[100vh] h-auto">
          {/* Certificate Count */}
          <div className="flex flex-col lg:w-[50%] md:w-[50%] w-[60%] items-center justify-center bg-gradient-to-t from-[#0f2027] via-[#203a43] to-[#2c5364] lg:rounded-[1.5vw] md:rounded-[1.5vw] rounded-[5vw] text-white relative lg:py-[0vh] md:py-[0vh] py-[5vh]">
            <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 lg:w-[2vw] md:w-[2vw] w-[6vw] lg:h-[2vw] md:h-[2vw] h-[6vw] text-white"/>
            <div className="flex flex-row items-center">
              <FileBadge className="lg:w-[2.5vw] md:w-[3vw] w-[6vw] lg:h-[2.5vw] md:h-[3vw] h-[5vw]" strokeWidth={3}/>
              <h1 className="font-bold lg:text-[2.5vw] md:text-[3vw] text-[6vw]">5</h1>
            </div>
            <p className="font-normal lg:text-[1.2vw] md:text-[1.7vw] text-[3vw]">Certifications</p>
          </div>
          {/* Some Stats */}
          <div className="flex flex-row w-full bg-black lg:rounded-[1.5vw] md:rounded-[1.5vw] rounded-[5vw] justify-center items-center">
            <Image
              className="object-contain lg:rounded-[1.5vw] md:rounded-[1.5vw] rounded-[5vw] lg:w-[15vw] md:w-[13vw] w-[25vw]"
              src="/portfolio/sphere.svg"
              alt="..."
              width={1080}
              height={720}
            />
            <div className="flex flex-col w-full bg-gradient-to-r from-[#f7971e] to-[#ffd200] h-[100%] lg:rounded-[1.5vw] md:rounded-[1.5vw] rounded-[5vw] justify-center items-center relative">
              <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 lg:w-[2vw] md:w-[2vw] w-[6vw] lg:h-[2vw] md:h-[2vw] h-[6vw] text-black opacity-60"/>
              <div className="flex flex-col">
                <span className="lg:text-[2.5vw] md:text-[3vw] text-[6vw] font-bold">
                  2
                </span>
                <span className="lg:text-[1.2vw] md:text-[1.7vw] text-[2.5vw] font-light">
                  Major
                </span>
                <span className="lg:text-[1.5vw] md:text-[2vw] text-[3vw] font-medium">
                  Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
