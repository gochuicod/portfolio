"use client"

import Hero from "@/components/Hero";
import { useEffect } from "react";
import ReactPageScroller from "react-page-scroller";

const Home = () => {
  let isMobile: boolean = false

  useEffect(() => {
    isMobile = window.innerWidth <= 768
  }, [])

  return (
    !isMobile ?
    <ReactPageScroller>
      <Hero/>
      <div className="w-screen h-screen flex items-center justify-center text-8xl">2</div>
      <div className="w-screen h-screen flex items-center justify-center text-8xl">3</div>
      <div className="w-screen h-screen flex items-center justify-center text-8xl">4</div>
    </ReactPageScroller>
    :
    <div>
      <Hero/>
      <div className="w-screen h-screen flex items-center justify-center text-8xl">2</div>
      <div className="w-screen h-screen flex items-center justify-center text-8xl">3</div>
      <div className="w-screen h-screen flex items-center justify-center text-8xl">4</div>
    </div>
  )
}

export default Home;