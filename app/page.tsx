"use client"

import Hero from "@/components/Hero";
import ReactPageScroller from "react-page-scroller";
import { useEffect, useState } from 'react';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Hero/>
      <div className="bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl">2</div>
      <div className="bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">3</div>
      <div className="bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">4</div>
    </div>
    // <>
    //   {!isMobile && (
    //     <ReactPageScroller>
    //       <Hero/>
    //       <div className="bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl">2</div>
    //       <div className="bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">3</div>
    //       <div className="bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">4</div>
    //     </ReactPageScroller>
    //   )}
    //   {isMobile && (
    //     <div>
    //       <Hero/>
    //       <div className="bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl">2</div>
    //       <div className="bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">3</div>
    //       <div className="bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">4</div>
    //     </div>
    //   )}
    // </>
  );
}

export default Home;