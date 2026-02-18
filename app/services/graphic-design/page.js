"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';

const designServices = [
  { icon: "fas fa-bezier-curve", title: "Brand Identity", description: "Logo design, style guides, and complete brand systems that define your market presence." },
  { icon: "fas fa-desktop", title: "UI/UX Design", description: "Designing intuitive, user-centric interfaces that convert visitors into loyal customers." },
  { icon: "fas fa-bullhorn", title: "Marketing Collateral", description: "High-impact digital and print materials for all your marketing campaigns." },
  { icon: "fas fa-photo-video", title: "Motion Graphics", description: "Engaging video and animation content to tell your brand's story effectively." },
];

export default function GraphicDesignPage() {
  return (
    <main className="bg-deep-space text-white">
      <section className="relative pt-40 pb-20 text-center bg-slate-900/50 border-b border-cyan-400/10">
        <div className="relative z-10 p-6 container mx-auto">
          <p className="text-sm uppercase font-bold text-[var(--neon-cyan)] tracking-[0.2em]">
            Visual Excellence
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mt-4 text-balance">
            Graphic Design & Branding
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto text-balance">
            We turn ideas into stunning visual realities, crafting designs that resonate, communicate, and convert.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                 <Image src="/pp-graphic-design.png" alt="Graphic Design" width={800} height={600} className="rounded-2xl w-full"/>
            </div>
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Creative Design Spectrum
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {designServices.map((service, index) => (
                  <div key={index} className="space-y-2">
                    <i className={`${service.icon} text-3xl text-[var(--neon-cyan)]`}></i>
                    <h3 className="font-bold text-white text-xl">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-24 px-6 bg-slate-900/50 text-center">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Define Your Brand?
            </h2>
            <p className="text-lg text-gray-400 mb-12 text-balance">
                Your visual identity is your first impression. Let our experts craft a brand that truly stands out from the competition.
            </p>
            <Link
                href="/contact"
                className="inline-block px-12 py-4 text-xl font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white"
            >
                {`Get a Design Quote`}
            </Link>
        </div>
      </section>
    </main>
  );
}