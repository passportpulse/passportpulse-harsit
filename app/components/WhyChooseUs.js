"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const featureList = [
    {
        icon: "fas fa-search",
        title: "Research",
        description: "Deep market research and competitor analysis"
    },
    {
        icon: "fas fa-lightbulb",
        title: "Marketing Strategy",
        description: "Logic meets magic for impactful results"
    },
    {
        icon: "fas fa-palette",
        title: "Design & Production",
        description: "Creative and professional execution"
    },
    {
        icon: "fas fa-paper-plane",
        title: "Deliver & Convert",
        description: "Compelling experiences that drive conversion"
    }
];

const serviceIcons = [
    { icon: "fas fa-laptop-code", title: "WEB DESIGN" },
    { icon: "fas fa-bullhorn", title: "MARKETING" },
    { icon: "fas fa-ad", title: "ADVERTISING" },
    { icon: "fas fa-cogs", title: "DEVELOPMENT" }
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="bg-deep-space text-white py-20 lg:py-32 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-balance">
                           {` Let's find out how we'll help you`}
                        </h2>
                        
                        <ul className="space-y-6">
                            {featureList.map((feature) => (
                                <li key={feature.title} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/20">
                                        <i className={`${feature.icon} text-[var(--neon-cyan)] text-lg`}></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 p-4 border-l-4 border-[var(--neon-cyan)] bg-slate-900/50">
                            <p className="text-gray-300 italic">
                                Get on the right path to success with <strong className="text-white">Passport Pulse</strong>—where <strong className="text-[var(--neon-cyan)] font-medium">digital creativity</strong> meets <strong className="text-[var(--neon-cyan)] font-medium">strategic thinking</strong>.
                            </p>
                        </div>
                        <p className="mt-4 text-gray-400 italic">
                          {  "Beautiful stories make your brand unique. In a connected world, your digital identity should shine together."}
                        </p>
                    </div>

                    <div className="glass-card p-8">
                        <Image 
                            src="/pp-logo.png" 
                            alt="Passport Pulse Logo" 
                            width={100} 
                            height={100} 
                            className="mx-auto invert brightness-0 w-24 h-24"
                        />
                        <h3 className="text-3xl font-bold text-white text-center mt-4">Passport Pulse</h3>
                        <p className="text-center text-gray-400 mb-6">A WEB DEV / MARKETING COMPANY</p>
                        
                        <div className="w-full h-px bg-[var(--card-border)] my-6"></div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {serviceIcons.map((service) => (
                                <div key={service.title} className="text-center">
                                    <i className={`${service.icon} text-3xl text-[var(--neon-cyan)]`}></i>
                                    <p className="font-semibold text-white mt-2 text-sm uppercase">{service.title}</p>
                                </div>
                            ))}
                        </div>

                        <Link 
                            href="/contact" 
                            className="w-full mt-8 inline-block px-8 py-3 text-md font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white text-center"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;