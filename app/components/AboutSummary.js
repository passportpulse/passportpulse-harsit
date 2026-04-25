"use client";

import React from 'react';

const features = [
    {
        title: "What We Do?",
        description: "Welcome to PassportPulse, where Strategy, Invention, Marketing, & Business Development come together to fulfill your digital needs."
    },
    {
        title: "24/7 Support",
        description: "With full of energy, drive, creative tactics, and passion, our team aims to deliver superb outcomes 24x7 with helping support."
    },
    {
        title: "Who Trust Us",
        description: "A few brands confided in us to deal with their digital presence and build their business."
    }
];

const stats = [
    { value: "50+", label: "Total Projects" },
    { value: "300+", label: "Leads in 4 Months" },
    { value: "25+", label: "New Market Reach" },
    { value: "10+", label: "Team Members" }
];

const AboutSummary = () => {
    return (
        <section id="about-summary" className="bg-deep-space text-white py-20 lg:py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                
                {/* --- About Title --- */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
                        About PassportPulse !
                    </h2>
                    <div className="mt-4 w-24 h-1.5 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
                    <p className="text-lg text-gray-400 mt-6 text-balance">
                        Hi, we’re a web design agency based on futuristic technologies. Our team has been producing wonderful works for over 8 years.
                    </p>
                </div>

                {/* --- Feature Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature) => (
                        <div key={feature.title} className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* --- Portfolio Title --- */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
                        See Our Stunning Portfolio
                    </h2>
                    <div className="mt-4 w-24 h-1.5 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
                </div>

                {/* --- Stats Cards --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat) => (
                        <div key={stat.label} className="glass-card p-8 text-center">
                            <h3 className="text-5xl font-bold text-[var(--neon-cyan)] mb-2">{stat.value}</h3>
                            <p className="text-gray-300 font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>

                 {/* --- Affiliations --- */}
                 <div className="mt-16">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-white mt-4 text-balance">
                            Our Affiliations & Partners
                        </h2>
                        <div className="mt-4 w-20 h-1.5 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
                    </div>

                    <div className="relative overflow-hidden py-8 border-y border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl">
                         {/* Gradient Fades */}
                        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#0A0F1A] to-transparent pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#0A0F1A] to-transparent pointer-events-none"></div>

                        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                            {[1, 2, 3].map((set) => (
                                <div key={set} className="flex items-center gap-12 min-w-full justify-around">
                                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                                        <i className="fab fa-google text-2xl text-white"></i>
                                        <span className="font-bold text-xl tracking-tight">Google Cloud</span>
                                    </div>
                                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                                        <i className="fab fa-aws text-2xl text-white"></i>
                                        <span className="font-bold text-xl tracking-tight">AWS</span>
                                    </div>
                                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                                        <i className="fab fa-digital-ocean text-2xl text-white"></i>
                                        <span className="font-bold text-xl tracking-tight">DigitalOcean</span>
                                    </div>
                                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                                        <i className="fas fa-leaf text-2xl text-white"></i>
                                        <span className="font-bold text-xl tracking-tight">MongoDB</span>
                                    </div>
                                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                                        <i className="fab fa-stripe text-2xl text-white"></i>
                                        <span className="font-bold text-xl tracking-tight">Stripe</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default AboutSummary;