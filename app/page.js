"use client";

import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSummary from './components/AboutSummary';
import TechnologyStack from "./components/TechnologyStack";
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <main className=" bg-black">
        <div className=""> <Hero /></div>
        
        {/* Services Banner */}
     {/* <div className="w-full">
  <Image
    src="/banner.png"
    alt="Services Banner"
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto"
    priority
  />
</div> */}
        <Services />
        <Process />
        <WhyChooseUs />
        <TechnologyStack/>
        <AboutSummary />
      </main>
    </>
  );
}