"use client";

import React from "react";
import Image from 'next/image';
import Link from "next/link";

const AboutPage = () => {

    const coreValues = [
        { icon: "fas fa-lightbulb", title: "Creativity & Innovation", description: "With a passion for innovation, we combine creativity and technology to deliver performance-driven results." },
        { icon: "fas fa-bullseye", title: "Tailored Strategies", description: "We specialize in delivering tailored strategies that align with your unique goals, whether you're a startup or an established brand." },
        { icon: "fas fa-users", title: "Client-First Approach", description: "Our client-first approach ensures we pilot your brand toward digital excellence, focusing on your specific needs." },
        { icon: "fas fa-chart-line", title: "Performance-Driven", description: "We provide end-to-end services that focus on achieving tangible, performance-driven results to elevate your digital presence." },
    ];

    return (
        <main className="bg-deep-space text-white">
            
            <section className="relative pt-40 pb-20 text-center bg-slate-900/50 border-b border-b-cyan-400/10">
                <div className="relative z-10 p-6 container mx-auto">
                    <p className="text-sm uppercase font-bold text-[var(--neon-cyan)] tracking-[0.2em]">
                        About Passport Pulse
                    </p>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mt-4 text-balance">
                        Piloting Your Brand Toward Digital Excellence
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto text-balance">
                        A dynamic digital solutions agency dedicated to helping businesses thrive in the digital landscape.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                            Our Story: From Idea to Impact
                        </h2>
                        <div className="text-lg text-gray-400 leading-relaxed text-balance space-y-4">
                            <p>{`We started Passport Pulse with a simple goal: to help businesses like yours succeed online. We saw a need for a digital solutions partner that doesn't just build websites but creates powerful online presences. Our team is dedicated to building, managing, and elevating your brand, whether you're a startup launching for the first time or an established business looking to grow even faster.</p>
                            <p>We believe in a client-first approach, combining creative thinking with cutting-edge technology to deliver tangible, performance-driven results. Our end-to-end services, from web development to branding and digital marketing, are designed to transform your vision into a digital legacy that truly stands out.`}</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-900/50 p-4 rounded-2xl border-cyan-400/10 shadow-xl">
                            <Image src="/pp.png" alt="Passport Pulse's Vision" width={800} height={600} className="rounded-xl w-full"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-24 px-6 bg-slate-900/50">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-balance">
                        The Principles That Guide Us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="glass-card p-8 h-full flex flex-col text-left">
                                 <i className={`fas ${value.icon} text-4xl text-[var(--neon-cyan)] mb-4`}></i>
                                 <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                                 <p className="text-gray-400 text-sm flex-grow">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-24 px-6">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                        Why Partner with Passport Pulse?
                    </h2>
                    <p className="text-lg text-gray-400 mb-12 text-balance">
                        Choosing the right digital partner is crucial. We combine deep technical expertise with a creative, forward-thinking vision to deliver solutions engineered to excel and outperform.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-4xl font-bold text-[var(--neon-cyan)] mb-2">14+</h3>
                            <p className="font-semibold text-white">Employees</p>
                        </div>
                         <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-4xl font-bold text-[var(--neon-cyan)] mb-2">9+</h3>
                            <p className="font-semibold text-white">Freelancers</p>
                        </div>
                         <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-4xl font-bold text-[var(--neon-cyan)] mb-2">24/7</h3>
                            <p className="font-semibold text-white">Dedicated Support</p>
                        </div>
                    </div>
                    <div className="mt-12">
                         <Link href="/contact" className="w-full sm:w-auto inline-block px-10 py-4 text-lg font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white transform hover:scale-105">
                            Start Your Project Today
                         </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;