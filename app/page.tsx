import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div className="snap-y h-screen w-screen overflow-scroll">
      <div className="snap-star w-screen h-screen">
        <Hero/>
      </div>
      <div className="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl">2</div>
      <div className="snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">3</div>
      <div className="snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">4</div>
    </div>
  );
}

export default Home;