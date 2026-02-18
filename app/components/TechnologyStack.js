"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const technologies = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "Tailwind CSS", icon: "fas fa-wind" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "React", icon: "fab fa-react" },
    { name: "React Native", icon: "fab fa-react" },
    { name: "Next.js", icon: "fas fa-bolt" },
    { name: "TypeScript", icon: "fas fa-code" },
    { name: "Kotlin", icon: "fas fa-mobile-alt" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Django", icon: "fas fa-leaf" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "WordPress", icon: "fab fa-wordpress" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "Prisma", icon: "fas fa-database" },
    { name: "REST API", icon: "fas fa-cogs" },
    { name: "Redux", icon: "fas fa-sync-alt" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "CI/CD", icon: "fas fa-sync-alt" },
    { name: "DevOps", icon: "fas fa-infinity" },
    { name: "GraphQL", icon: "fas fa-project-diagram" },
    { name: "Three.js", icon: "fas fa-cube" }
];

const TechnologyStack = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const marqueeRef = useRef();

    useGSAP(() => {
        // --- Desktop Grid Animation (Only runs on larger screens logically via CSS) ---
        gsap.from(".desktop-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.05
        });

        // --- Mobile Marquee Animation (Infinite Scroll) ---
        // Duplicate list ta smooth loop er jonno use kora hoyeche
        const totalWidth = marqueeRef.current.scrollWidth / 2;

        gsap.to(marqueeRef.current, {
            x: -totalWidth,
            duration: 20, // Speed control (barale slow hobe)
            ease: "none",
            repeat: -1,
        });

    }, { scope: container });

    return (
        <section id="tech-stack" className="bg-deep-space text-white py-20 lg:py-32 overflow-hidden">
            <div ref={container} className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 text-balance">
                        Our Technology Stack
                    </h2>
                    <div className="mt-4 w-24 h-1.5 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
                    <p className="text-base md:text-lg text-gray-400 mt-6 text-balance px-2">
                        We leverage a powerful, modern technology stack to build robust, scalable, and high-performance applications.
                    </p>
                </div>

                {/* ================= MOBILE VIEW (Infinite Marquee) ================= */}
                {/* md:hidden mane medium screen er upore eta hide hoye jabe */}
                <div className="block md:hidden relative w-full overflow-hidden mask-gradient">
                    {/* Gradient Overlay for Fade Effect */}
                    <div className="absolute top-0 left-0 w-16 h-full z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 h-full z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>

                    <div ref={marqueeRef} className="flex gap-4 w-max hover:pause-animation">
                        {/* Render list twice for seamless loop */}
                        {[...technologies, ...technologies].map((tech, idx) => (
                            <div key={idx} className="glass-card w-[140px] p-4 flex flex-col items-center justify-center gap-3 text-center border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shrink-0">
                                <i className={`${tech.icon} text-3xl text-[var(--neon-cyan)]`}></i>
                                <h4 className="font-medium text-white text-sm truncate w-full">{tech.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= DESKTOP VIEW (Grid) ================= */}
                {/* hidden md:grid mane mobile a hide thakbe, desktop a grid hobe */}
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
                    {technologies.map((tech, idx) => (
                        <div key={idx} className="glass-card desktop-card p-4 flex flex-col items-center justify-center gap-4 text-center h-full hover:-translate-y-2 transition-transform duration-300">
                            <i className={`${tech.icon} text-4xl text-[var(--neon-cyan)]`}></i>
                            <h4 className="font-semibold text-white text-md">{tech.name}</h4>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechnologyStack;