"use client";

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext'; // <-- AuthContext import

const servicesData = [
    {
        icon: "fas fa-laptop-code",
        title: "Website Development",
        description: "Professional websites built for performance, responsiveness, and design perfection.",
        points: [
            "Responsive UI/UX",
            "SEO Friendly Structure",
            "Custom CMS Options",
        ]
    },
    {
        icon: "fas fa-bullhorn",
        title: "Digital Marketing",
        description: "Boost your reach and engagement with data-driven strategies and creative content.",
        points: [
            "Social Media Management",
            "Paid Ad Campaigns",
            "Analytics & Insights",
        ]
    },
    {
        icon: "fas fa-cogs",
        title: "Custom Software",
        description: "We engineer custom software solutions, including CRM, ERP, and management tools.",
        points: [
            "Bespoke CRM/ERP Systems",
            "SaaS Product Development",
            "System Architecture",
        ]
    },
    {
        icon: "fas fa-robot",
        title: "Business Automation",
        description: "Streamline your workflow with our automation funnels for various industries.",
        points: [
            "School Management",
            "Hotel Booking Engines",
            "Doctor Appointments",
        ]
    },
];

const Services = () => {
    // <-- Modal-er function ekhane access kora hocche
    const { setIsEnquiryModalOpen } = useAuth();

    return (
        <section
            id="services"
            className="bg-deep-space text-white py-20 lg:py-32 px-6 overflow-hidden"
        >
            <div className="container mx-auto">
                <div
                    className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
                        Our Services
                    </h2>
                    <div className="mt-4 w-24 h-1.5 bg-[var(--neon-cyan)] mx-auto rounded-full"></div>
                    <p className="text-lg text-gray-400 mt-6 text-balance">
                        We provide top-notch services to enhance your digital presence, ensuring excellence and innovation in every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {servicesData.map((service) => (
                        <div
                            key={service.title}
                            className="relative bg-slate-900/50 border border-[var(--primary-color)]/20 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-[var(--primary-color)] hover:shadow-2xl hover:shadow-[var(--primary-glow)] hover:-translate-y-2 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-16 h-16 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center mb-6 border border-[var(--primary-color)]/20">
                                    <i className={`${service.icon} text-3xl text-[var(--neon-cyan)]`}></i>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-balance text-sm mb-6">
                                    {service.description}
                                </p>

                                <div className="space-y-3 pt-4 border-t border-white/10">
                                    {service.points.map((point, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <i className="fas fa-check-circle text-[var(--neon-cyan)]/70"></i>
                                            <span className="text-gray-300 text-sm font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8">
                                {/* <-- Link-er jaygay button and onClick handler add kora hoyeche --> */}
                                <button
                                    onClick={() => setIsEnquiryModalOpen(true)}
                                    className="w-full text-center inline-block px-6 py-3 font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white"
                                >
                                    Free Consultation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .bg-gradient-radial {
                    background-image: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
                }
            `}</style>
        </section>
    );
};

export default Services;