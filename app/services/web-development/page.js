"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';

const features = [
  { icon: "fas fa-code", title: "Custom Logic", description: "Bespoke development tailored to your unique business processes, guaranteeing a perfect fit." },
  { icon: "fas fa-tachometer-alt", title: "High Performance", description: "Building with Next.js and MERN stack for lightning-fast load times and SEO excellence." },
  { icon: "fas fa-mobile-alt", title: "Fully Responsive", description: "Seamless, beautiful design and functionality across all devices, from desktop to mobile." },
  { icon: "fas fa-shield-alt", title: "Secure & Scalable", description: "Enterprise-grade security and architecture designed to scale with your exponential growth." },
];

const techHighlights = [
    { name: "Next.js", icon: "fas fa-bolt", color: "text-white" },
    { name: "MERN Stack", icon: "fas fa-database", color: "text-green-500" },
    { name: "GraphQL", icon: "fas fa-project-diagram", color: "text-pink-500" },
    { name: "TypeScript", icon: "fas fa-code", color: "text-blue-500" },
];

export default function WebDevelopmentPage() {
  return (
    <main className="bg-deep-space text-white">
      <section className="relative pt-40 pb-20 text-center bg-slate-900/50 border-b border-cyan-400/10">
        <div className="relative z-10 p-6 container mx-auto">
          <p className="text-sm uppercase font-bold text-[var(--neon-cyan)] tracking-[0.2em]">
            Elite Solutions
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mt-4 text-balance">
            Custom Web Development
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto text-balance">
            We engineer bespoke, high-performance websites and web applications using the latest full-stack technologies.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Web Solutions?
              </h2>
              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <i className={`${feature.icon} text-2xl text-[var(--neon-cyan)] flex-shrink-0 mt-1`}></i>
                    <div>
                      <h3 className="font-bold text-white text-xl">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                 <Image src="/pp.png" alt="Web Development" width={800} height={600} className="rounded-2xl w-full"/>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                Our Core Technology Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {techHighlights.map((tech) => (
                    <div key={tech.name} className="glass-card p-6 rounded-xl">
                        <i className={`${tech.icon} text-4xl ${tech.color} mb-3`}></i>
                        <p className="font-semibold text-white text-lg">{tech.name}</p>
                    </div>
                ))}
            </div>
            <div className="mt-16">
                 <Link
                    href="/contact" // Changed from /book-a-meeting to /contact
                    className="inline-block px-12 py-4 text-xl font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white"
                >
                    {`Start Your Web Project`}
                </Link>
            </div>
        </div>
      </section>

    </main>
  );
}