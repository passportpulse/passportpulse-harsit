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
    const marqueeLeftRef = useRef();
    const marqueeRightRef = useRef();
    const animLeft = useRef();
    const animRight = useRef();

    // Split technologies into two rows
    const firstRow = technologies.slice(0, 13);
    const secondRow = technologies.slice(13);

    useGSAP(() => {
        // --- Slider Left Animation ---
        const totalWidthLeft = marqueeLeftRef.current.scrollWidth / 2;
        animLeft.current = gsap.to(marqueeLeftRef.current, {
            x: -totalWidthLeft,
            duration: 30,
            ease: "none",
            repeat: -1,
        });

        // --- Slider Right Animation ---
        const totalWidthRight = marqueeRightRef.current.scrollWidth / 2;
        // Start from -totalWidthRight and move to 0 for right-to-left effect in reverse,
        // or just set initial x and move.
        gsap.set(marqueeRightRef.current, { x: -totalWidthRight });
        animRight.current = gsap.to(marqueeRightRef.current, {
            x: 0,
            duration: 30,
            ease: "none",
            repeat: -1,
        });

    }, { scope: container });

    const handleMouseEnter = (anim) => {
        if (anim.current) anim.current.pause();
    };

    const handleMouseLeave = (anim) => {
        if (anim.current) anim.current.play();
    };

    const TechCard = ({ tech }) => (
        <div className="glass-card w-[160px] md:w-[200px] p-6 flex flex-col items-center justify-center gap-4 text-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md shrink-0 hover:border-[var(--neon-cyan)]/40 transition-colors duration-300">
            <i className={`${tech.icon} text-4xl md:text-5xl text-[var(--neon-cyan)]`}></i>
            <h4 className="font-semibold text-white text-sm md:text-base tracking-wide">{tech.name}</h4>
        </div>
    );

    return (
        <section id="tech-stack" className="bg-[#0A0F1A] text-white py-20 lg:py-32 overflow-hidden">
            <div ref={container} className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <p className="text-[var(--neon-cyan)] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        Expertise
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 text-balance leading-tight">
                        Our Technology Stack
                    </h2>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent mx-auto rounded-full"></div>
                    <p className="text-base md:text-xl text-gray-400 mt-8 text-balance max-w-2xl mx-auto">
                        We leverage a powerful, modern technology stack to build robust, scalable, and high-performance applications.
                    </p>
                </div>

                {/* Sliders Container */}
                <div className="space-y-8 md:space-y-12 relative">
                    
                    {/* Gradient Fades for Smooth Edges */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#0A0F1A] to-transparent pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#0A0F1A] to-transparent pointer-events-none"></div>

                    {/* Row 1: Moving Left */}
                    <div 
                        className="flex overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(animLeft)}
                        onMouseLeave={() => handleMouseLeave(animLeft)}
                    >
                        <div ref={marqueeLeftRef} className="flex gap-6 md:gap-8 w-max">
                            {[...firstRow, ...firstRow].map((tech, idx) => (
                                <TechCard key={`row1-${idx}`} tech={tech} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Moving Right */}
                    <div 
                        className="flex overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(animRight)}
                        onMouseLeave={() => handleMouseLeave(animRight)}
                    >
                        <div ref={marqueeRightRef} className="flex gap-6 md:gap-8 w-max">
                            {[...secondRow, ...secondRow].map((tech, idx) => (
                                <TechCard key={`row2-${idx}`} tech={tech} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TechnologyStack;