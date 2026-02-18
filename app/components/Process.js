"use client";

import React from 'react';

const processSteps = [
    { num: "01", title: "Discovery & Analysis", description: "Deeply understanding your brand, goals, and audience." },
    { num: "02", title: "Strategy & Blueprint", description: "Outlining the technology stack, architecture, and milestones." },
    { num: "03", title: "Design & Prototyping", description: "We design intuitive user interfaces and interactive prototypes." },
    { num: "04", title: "Development & Build", description: "Our expert engineers bring the design to life with clean code." },
    { num: "05", title: "Testing & QA", description: "Rigorous testing is performed to ensure a bug-free solution." },
    { num: "06", title: "Launch & Support", description: "Seamless deployment and provide ongoing support." }
];

const ProcessGraphic = () => (
    <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="absolute w-1 h-full bg-[var(--card-border)] rounded-full"></div>
        
        <div className="relative w-full h-full flex flex-col justify-between">
            {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-center">
                    <div className="z-10 w-8 h-8 rounded-full bg-[var(--neon-cyan)] shadow-lg flex items-center justify-center text-black font-semibold">
                        {index + 1}
                    </div>
                    <div className="absolute left-12 w-48 p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-[var(--card-border)]">
                        <p className="text-gray-300 text-sm font-medium">{step.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Process = () => {
  return (
    <section id="process" className="bg-deep-space text-white py-20 lg:py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          <div className="hidden lg:flex w-full h-[500px]">
            <ProcessGraphic />
          </div>

          <div>
            <p className="text-sm uppercase font-bold text-[var(--neon-cyan)] tracking-[0.2em]">
              Our Working Process
            </p>
           
            <div className="grid grid-cols-2 gap-6 mt-12">
              {processSteps.map((step) => (
                <div key={step.num} className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">{step.num}. {step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Process;