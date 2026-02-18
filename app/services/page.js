"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext"; // <-- AuthContext import

export const dynamic = 'force-dynamic';

const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Website Development",
    description:
      "We build bespoke, high-performance websites from the ground up, tailored precisely to your business logic and user needs, from portfolios to large-scale e-commerce.",
    details: [
      "Full-Stack MERN/Next.js Development",
      "E-Commerce & Portfolios",
      "Headless CMS Integration",
      "API Development & Integration",
    ],
  },
  {
    icon: "fas fa-palette",
    title: "Graphic Design & Branding",
    description:
      "Our creative team crafts compelling visual identities. We design everything from logos and branding guides to digital marketing assets that resonate with your audience.",
    details: [
      "Logo Design & Brand Identity",
      "UI/UX Design for Web & Mobile",
      "Marketing Collateral (Banners, Socials)",
      "Print & Digital Media Design",
    ],
  },
  {
    icon: "fas fa-cogs",
    title: "Custom Software Development",
    description:
      "We engineer scalable and secure custom software solutions (CRM, ERP, etc.) designed to automate your processes and solve complex business challenges.",
    details: [
      "Bespoke CRM/ERP Systems",
      "Internal Tooling & Dashboards",
      "SaaS Product Development",
      "System Architecture & Design",
    ],
  },
  {
    icon: "fas fa-robot",
    title: "Business Automation",
    description:
      "Streamline your operations with our specialized automation funnels. We provide ready-to-deploy solutions for various industries.",
    details: [
      "School Management Software",
      "Hotel Booking Engines",
      "Doctor Appointment Systems",
      "Custom Business Funnels",
    ],
  },
];

export default function ServicesPage() {
  // <-- Modal-er function ekhane access kora hocche
  const { setIsEnquiryModalOpen } = useAuth();

  return (
    <main className="bg-deep-space text-white">
      <section className="relative pt-40 pb-20 text-center bg-slate-900/50 border-b border-cyan-400/10">
        <div className="relative z-10 p-6 container mx-auto">
          <p className="text-sm uppercase font-bold text-[var(--neon-cyan)] tracking-[0.2em]">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mt-4 text-balance">
            Solutions Engineered for Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto text-balance">
            Discover our comprehensive suite of services, designed to elevate your brand and deliver powerful, scalable, and futuristic digital solutions.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-lg bg-[var(--primary-color)]/10 border border-cyan-400/10 flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-3xl text-[var(--neon-cyan)]`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-balance mb-6">{service.description}</p>
                <ul className="space-y-3 text-left mb-8 flex-grow">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-[var(--neon-cyan)]/50"></i>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
                {/* <-- Link-er jaygay button and onClick handler add kora hoyeche --> */}
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="mt-auto w-full text-center inline-block px-8 py-3 font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white"
                >
                  Free Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-400 mb-12 text-balance">
            {`Whether you have a detailed specification or just a spark of an idea, our team is ready to listen. Let's collaborate to transform your vision into a stunning digital reality.`}
          </p>
          <Link
            href="/book-a-meeting"
            className="inline-block px-12 py-4 text-xl font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white"
          >
            {`Book a Free Consultation`}
          </Link>
        </div>
      </section>
    </main>
  );
}