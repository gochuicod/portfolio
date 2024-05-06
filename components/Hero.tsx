"use client"

import { ChevronRight, FileBadge, Inbox } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const carousel_data: Array<Object> = [
  {
    image_path: "https://images.credly.com/size/340x340/images/997d4586-e7b2-4174-9c76-5c7304953e2c/image.png"
  },
  {
    image_path: "https://images.credly.com/size/340x340/images/4d81763c-b917-4ab9-92be-103af95c0a21/image.png"
  },
  {
    image_path: "https://images.credly.com/size/340x340/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png"
  },
  {
    image_path: "https://images.credly.com/size/340x340/images/d41de2b7-cbc2-47ec-bcf1-ebecbe83872f/GCC_badge_DA_1000x1000.png"
  },
  {
    image_path: "https://images.credly.com/size/340x340/images/efbdc0d6-b46e-4e3c-8cf8-2314d8a5b971/GCC_badge_python_1000x1000.png"
  },
  {
    image_path: "https://images.credly.com/size/340x340/images/fb97a12f-c0f1-4f37-9b7d-4a830199fe84/GCC_badge_IT_Support_1000x1000.png"
  },
]

const links: Array<Object> = [
  {
    title: "Clients",
    link: ""
  },
  {
    title: "Research",
    link: ""
  },
  {
    title: "Portfolio",
    link: ""
  },
  {
    title: "Podcast",
    link: ""
  },
]

const Hero = () => {
  return (
    <div className="flex sm:flex-row flex-col h-auto sm:justify-center justify-start sm:ps-[0vw] ps-[5vw] pe-[5vw] sm:py-[2vw] py-5 gap-y-[10vw] bg-white">
      <div className="sm:flex sm:flex-col hidden w-[5%] justify-center space-y-[5vw] font-medium text-[1vw]">
        {
          links?.map((item: any, index: number) => (
            <motion.p
              key={index}
              initial={{ rotate: -90 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                ease: "linear",
                type: "spring",
                bounce: 1,
                duration: 0.2
              }}
            >
              {item.title}
            </motion.p>
          ))
        }
      </div>
      <div className="flex flex-col sm:w-[35%] w-full bg-gradient-to-t from-[#4568dc] to-[#b06ab3] sm:rounded-[1vw] rounded-[4vw] me-[2.5vw] sm:p-[3vw] p-[10vw] justify-center sm:gap-y-[1vw] gap-y-[5vw]">
        <div className="flex justify-center">
          <Image
            className="object-cover object-bottom sm:w-[20vw] w-[60vw] sm:h-[20vw] h-[60vw] rotate-90 z-10 rounded-full sm:border-[0.5vw] border-[1.5vw] border-white sm:p-[1vw] p-[3vw]"
            src="/portfolio/IMG_5211.webp" alt="..."
            width={720}
            height={1080}
          />
        </div>
        <div className="flex flex-row mt-[2vw]">
          <div className="flex flex-col text-white leading-none w-full text-center">
            <span className="sm:text-[3.5vw] text-[10vw] font-light">I&apos;m,</span>
            <span className="sm:text-[3.5vw] text-[10vw] font-bold">Darelle</span>
            <span className="sm:text-[3.5vw] text-[10vw] font-bold">Gochuico</span>
            <h1 className="sm:text-[1vw] text-[3vw] mt-[2vw] flex flex-row items-center justify-center gap-x-[1vw]">
              gochuicodarelleq@gmail.com
              <Inbox className="sm:w-[1.5vw] w-[3vw] sm:h-[1.5vw] h-[3vw]" />
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:w-[60%] w-full rounded-[1vw] sm:gap-y-[2.5vw] gap-y-[10vw]">
        <div className="flex flex-row w-full h-[15%] rounded-[1vw] relative">
          <ChevronRight className="absolute right-[-0.5vw] top-[-0.5vw] -rotate-45 sm:w-[4vw] w-[8vw] sm:h-[4vw] h-[8vw]" strokeWidth={3}/>
          <h1 className="sm:text-[5vw] text-[10vw] tracking-[2.1vw] font-bold text-black">My Portfolio</h1>
        </div>
        <div className="flex sm:flex-row flex-col h-[55%] items-center gap-x-[2.5vw] sm:gap-y-[0vw] gap-y-[10vw]">
          <div className="relative sm:min-w-[75%] min-w-full h-full">
            <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 w-[2vw] h-[2vw] text-white z-10"/>
            <video className="object-cover w-full sm:h-[45vh] h-[40vh] sm:rounded-[1vw] rounded-[4vw]" src="/portfolio/test_2.MOV" autoPlay loop muted>
              <source src="/portfolio/test_2.MOV"/>
            </video>
          </div>
          <div className="flex flex-col sm:min-w-[20%] min-w-full h-full">
            <div className="flex flex-col h-[50%] bg-gradient-to-r from-[#a8ff78] from-40% to-[#78ffd6] justify-center items-center relative sm:w-auto w-full sm:rounded-t-[1vw] rounded-t-[4vw] sm:py-[0vw] py-[10vw]">
              <ChevronRight className="absolute sm:right-[0.5vw] right-[1.5vw] sm:top-[0.5vw] top-[1.5vw] -rotate-45 sm:w-[2vw] w-[8vw] sm:h-[2vw] h-[8vw] text-black opacity-40"/>
              <div className="flex flex-col sm:items-start items-center text-black">
                <h1 className="font-bold sm:text-[2.5vw] text-[10vw]">29</h1>
                <p className="font-normal sm:text-[1.2vw] text-[5vw]">TechStack</p>
              </div>
            </div>
            <div className="flex flex-col h-[50%] bg-gradient-to-l from-[#bc4e9c] from-1% to-[#f80759] justify-center items-center relative sm:w-auto w-full sm:rounded-b-[1vw] rounded-b-[4vw] sm:py-[0vw] py-[10vw]">
              <ChevronRight className="absolute sm:right-[0.5vw] right-[1.5vw] sm:top-[0.5vw] top-[1.5vw] -rotate-45 sm:w-[2vw] w-[8vw] sm:h-[2vw] h-[8vw] text-white"/>
              <div className="flex flex-col sm:items-start items-center text-white">
                <h1 className="font-bold sm:text-[2.5vw] text-[10vw]">77%</h1>
                <p className="font-normal sm:text-[1.2vw] text-[5vw]">JavaScript</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col h-[30%] gap-x-[2.5vw] sm:gap-y-[0vw] gap-y-[10vw]">
          <div className="flex flex-col min-w-[30%] h-full justify-center items-center text-white sm:rounded-[1vw] rounded-[4vw] relative bg-gradient-to-t from-[#0f2027] via-[#203a43] to-[#2c5364] sm:py-[0vw] py-[20vw]">
            <ChevronRight className="absolute sm:right-[0.5vw] right-[1.5vw] sm:top-[0.5vw] top-[1.5vw] -rotate-45 sm:w-[2vw] w-[8vw] sm:h-[2vw] h-[8vw] text-white"/>
            <div className="flex flex-row items-center">
              <FileBadge className="sm:w-[2vw] w-[8vw] sm:h-[2vw] h-[8vw]" strokeWidth={3}/>
              <h1 className="font-bold sm:text-[2.5vw] text-[10vw]">5</h1>
            </div>
            <p className="font-normal sm:text-[1.2vw] text-[5vw]">Certifications</p>
          </div>
          <div className="flex sm:flex-row flex-col min-w-[65%] h-full bg-black text-white sm:rounded-[1vw] rounded-[4vw]">
            <div className="flex sm:w-[40%] w-full justify-center items-center relative">
              <Image
                className="object-contain w-[100vw] h-full rounded-[1vw] p-5"
                src="/portfolio/sphere.svg"
                alt="..."
                draggable={false}
                width={1080}
                height={720}
              />
            </div>
            <div className="flex flex-col sm:w-[60%] w-full justify-center items-center bg-gradient-to-r from-[#f7971e] to-[#ffd200] h-full sm:rounded-[1vw] rounded-[4vw] relative sm:py-[0vw] py-[20vw]">
              <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 w-[2vw] h-[2vw] text-black opacity-40"/>
              <div className="flex flex-col sm:items-start items-center text-black">
                <h1 className="font-bold sm:text-[2.5vw] text-[10vw]">172</h1>
                <p className="font-light sm:text-[1.2vw] text-[5vw]">Global Design</p>
                <p className="font-normal sm:text-[1.5vw] text-[6vw]">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <Carousel
      className="h-full w-full"
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}
    >
      <CarouselContent>
        {
          carousel_data?.map((item: any, index: number) => (
            <CarouselItem>
              <div className="w-full h-64 relative">
                <img className="absolute inset-0 w-full h-full object-fill rounded-[1vw]" src={item.image_path} alt="..."/>
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel> */}

export default Hero;