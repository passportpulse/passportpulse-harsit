"use client";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import axios from "axios";

gsap.registerPlugin(TextPlugin);

const HeroForm = () => {
    const [formStatus, setFormStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Sending...");

        const formData = {
            name: e.target.name.value,
            company: e.target.company.value,
            address: e.target.address.value,
            email: e.target.email.value,
            contact: e.target.contact.value,
            interested_in: e.target.interested_in.value,
        };

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/contacts`,
                formData
            );
            if (response.data.success) {
                setFormStatus("Message sent successfully!");
                setTimeout(() => setFormStatus(""), 5000);
                e.target.reset();
            } else {
                setFormStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus(error.response?.data?.message || "An error occurred.");
        }
    };

    return (
        <div className="w-full max-w-sm bg-slate-900/70 p-6 backdrop-blur-md border border-[var(--primary-color)]/20 rounded-2xl  shadow-2xl">

            <h2 className="text-xl  gap-2 font-bold text-white text-center mb-5">
              Connect With Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <input

                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                        className="w-full p-2.5 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <input
                        required
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        className="w-full p-2.5 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <input
                        required
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        className="w-full p-2.5 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="w-full p-2.5 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <input
                        required
                        type="tel"
                        name="contact"
                        placeholder="Contact Number"
                        className="w-full p-2.5 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    />
                </div>
                <div>
                    <select
                        name="interested_in"
                        required
                        defaultValue=""
                        className="w-full p-2.5 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                    >
                        <option value="" disabled>Interested In</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Business Automation">Business Automation</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={formStatus === "Sending..."}
                    className="w-full inline-block px-8 py-2.5 text-md font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-white disabled:bg-gray-600"
                >
                    {formStatus === "Sending..." ? "Sending..." : "Submit"}
                </button>
                {formStatus && (
                    <p className={`text-center mt-3 text-sm ${formStatus.includes("success") ? "text-[var(--neon-cyan)]" : "text-red-400"}`}>
                        {formStatus}
                    </p>
                )}
            </form>
        </div>
    );
};


const Hero = () => {
    const heroRef = useRef(null);
    const animatedTextRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const animatedText = animatedTextRef.current;
        const cursor = cursorRef.current;
        const services = ["Digital Marketing", "Web Development", "Custom Software"];

        const ctx = gsap.context(() => {
            gsap.from(".hero-element", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                delay: 0.5,
            });

            const masterTl = gsap.timeline({ repeat: -1 });

            services.forEach(service => {
                masterTl
                    .to(animatedText, {
                        duration: 2,
                        text: service,
                        ease: "none",
                    })
                    .to(animatedText, {
                        duration: 2,
                        text: service,
                        ease: "none",
                    })
                    .to(animatedText, {
                        duration: 1,
                        text: "",
                        ease: "none",
                    }, "+=0.5");
            });

            gsap.to(cursor, {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
                ease: "power1.inOut",
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative w-full md:h-screen pt-28 overflow-hidden flex items-center"
        >
            <div className="absolute inset-0 z-0 bg-[#0A0F1A]  ">
                <div
                    className="absolute inset-0 z-1 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(to right, var(--neon-cyan) 1px, transparent 1px), linear-gradient(to bottom, var(--neon-cyan) 1px, transparent 1px)`,
                        backgroundSize: `30px 30px`,
                        maskImage: `radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)`
                    }}
                ></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[var(--primary-glow)] rounded-full blur-3xl opacity-20 z-0"></div>
            </div>

            <div className="relative z-20 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-[55%] lg:w-1col/2 text-center md:text-left mb-12 md:mb-0">
                    <p className="hero-element text-base md:text-lg text-white/80 uppercase tracking-widest mb-4">
                        Elevate Your Digital Presence
                    </p>
                    <h1
                        className="hero-element text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-balance tracking-tight leading-tight"
                        style={{ textShadow: "0 0 40px rgba(0, 0, 0, 0.5)" }}
                    >
                        Your Complete IT Solution
                    </h1>

                    <h2 className="hero-element text-3xl sm:text-4xl lg:text-5xl font-bold text-balance tracking-wide leading-tight mt-2 mb-6 h-12 sm:h-14">
                        <span ref={animatedTextRef} className="animated-gradient-text"></span>
                        <span ref={cursorRef} className="typing-cursor font-light text-white">|</span>
                    </h2>

                    <p
                        className="hero-element text-base sm:text-lg text-gray-300 font-light mb-10 max-w-xl md:max-w-none mx-auto md:mx-0"
                    >
                        We deliver custom software, stunning designs, and high-performance websites to automate and elevate your brand.
                    </p>
                    <div className="hero-element flex flex-col sm:flex-row items-center md:justify-start justify-center gap-6">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-block px-10 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:text-white/80"
                        >
                            Get in Touch <i className="ml-2 fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-[45%] lg:w-1/2 flex items-center justify-center md:justify-end hero-element">
                    <HeroForm />
                </div>
            </div>
            {/* 
            <div className="absolute -bottom-px left-0 w-full h-auto z-10 leading-[0]">
                <svg 
                    viewBox="0 0 1440 100" 
                    preserveAspectRatio="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto max-h-40"
                >
                    <path 
                        d="M0 100 C 240 0 480 0 720 0 C 960 0 1200 0 1440 100 L1440 100 L0 100 Z"
                        fill="white"
                    ></path>
                </svg>
            </div> */}

            <style jsx>{`
                .animated-gradient-text {
                    background: linear-gradient(45deg, #00BFA5, #A0E9FF, #00BFA5);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-size: 200% auto;
                    animation: gradientShift 3s linear infinite;
                }

                @keyframes gradientShift {
                    to {
                        background-position: 200% center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;