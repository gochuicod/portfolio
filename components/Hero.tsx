"use client"

import { ChevronRight, FileBadge, Inbox } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="flex flex-row min-h-screen justify-center pe-[5vw] py-[5vw]">
      <div className="flex flex-col w-[5%] justify-center space-y-[5vw] font-medium text-[1vw]">
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
      {/* <div className="flex flex-col w-[35%] bg-[#8285D0] rounded-[1vw] me-[2.5vw] p-[3vw]"> */}
      <div className="flex flex-col w-[35%] bg-gradient-to-t from-[#4568dc] to-[#b06ab3] rounded-[1vw] me-[2.5vw] p-[3vw]">
        <div className="flex justify-center">
          <img className="object-cover object-bottom w-[20vw] h-[20vw] rotate-90 z-10 rounded-full border-[0.5vw] border-white p-[1vw]" src="/IMG_5211.webp" alt="..." />
        </div>
        <div className="flex flex-row mt-[2vw]">
          <div className="flex flex-col text-white leading-none w-full text-center">
            <span className="text-[3.5vw] font-light">I'm,</span>
            <span className="text-[3.5vw] font-bold">Darelle</span>
            <span className="text-[3.5vw] font-bold">Gochuico</span>
            <h1 className="text-[1vw] mt-[2vw] flex flex-row items-center justify-center gap-x-[1vw]">
              gochuicodarelleq@gmail.com
              <Inbox className="w-[1.5vw] h-[1.5vw]" />
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[60%] rounded-[1vw] gap-y-[2.5vw]">
        <div className="flex flex-row w-full h-[15%] rounded-[1vw] relative">
          <ChevronRight className="absolute right-[-0.5vw] top-[-0.5vw] -rotate-45 w-[4vw] h-[4vw]" strokeWidth={3}/>
          <h1 className="text-[5vw] tracking-[2.1vw] font-bold">My Portfolio</h1>
        </div>
        <div className="flex flex-row h-[55%] items-center gap-x-[2.5vw]">
          <div className="relative min-w-[75%] h-full">
            <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 w-[2vw] h-[2vw] text-white z-10"/>
            <video className="absolute top-0 left-0 object-cover w-full h-full rounded-[1vw]" src="/test_2.MOV" autoPlay loop muted>
              <source src="/test_2.MOV"/>
            </video>
          </div>
          <div className="flex flex-col min-w-[20%] h-full">
            <div className="flex flex-col h-[50%] bg-gradient-to-r from-[#a8ff78] from-40% to-[#78ffd6] justify-center items-center rounded-t-[1vw] relative">
              <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 w-[2vw] h-[2vw] text-black opacity-40"/>
              <div className="text-black">
                <h1 className="font-bold text-[2.5vw]">29</h1>
                <p className="font-normal text-[1.2vw]">TechStack</p>
              </div>
            </div>
            <div className="flex flex-row h-[50%] bg-gradient-to-l from-[#bc4e9c] from-1% to-[#f80759] justify-center items-center rounded-b-[1vw] relative">
              <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 w-[2vw] h-[2vw] text-white"/>
              <div className="text-white">
                <h1 className="font-bold text-[2.5vw]">77%</h1>
                <p className="font-normal text-[1.2vw]">JavaScript</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-[30%] gap-x-[2.5vw]">
          <div className="flex flex-col min-w-[30%] h-full justify-center items-center text-white rounded-[1vw] relative bg-gradient-to-t from-[#0f2027] via-[#203a43] to-[#2c5364]">
            <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 w-[2vw] h-[2vw]"/>
            <div className="flex flex-row items-center">
              <FileBadge className="w-[2vw] h-[2vw]" strokeWidth={3}/>
              <h1 className="font-bold text-[2.5vw]">5</h1>
            </div>
            <p className="font-normal text-[1.2vw]">Certifications</p>
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
          </div>
          <div className="flex flex-row min-w-[65%] h-full bg-black text-white rounded-[1vw]">
            <div className="flex w-[40%] justify-center items-center relative">
              <img className="absolute top-0 left-0 object-contain w-[100vw] h-full rounded-[1vw] p-5" src="/sphere.svg" alt="..." draggable={false} />
            </div>
            <div className="flex flex-col w-[60%] justify-center items-center bg-gradient-to-r from-[#f7971e] to-[#ffd200] h-full rounded-[1vw] relative">
              <ChevronRight className="absolute right-[0.5vw] top-[0.5vw] -rotate-45 w-[2vw] h-[2vw] text-black opacity-40"/>
              <div className="text-black">
                <h1 className="font-bold text-[2.5vw]">172</h1>
                <p className="font-light text-[1vw]">Global Design</p>
                <p className="font-light text-[1.5vw]">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;