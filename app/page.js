"use client";

import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSummary from './components/AboutSummary';
import TechnologyStack from "./components/TechnologyStack";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <main className=" bg-black">
        <div className=""> <Hero /></div>
        <Services />
        <Process />
        <WhyChooseUs />
        <TechnologyStack/>
        <AboutSummary />
      </main>
    </>
  );
}