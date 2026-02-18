"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';

const marketingPillars = [
  { icon: "fas fa-chart-line", title: "SEO Strategy", description: "Achieve top rankings with comprehensive, white-hat search engine optimization." },
  { icon: "fas fa-users", title: "Social Media Marketing", description: "Build engaged communities and drive targeted traffic across all major platforms." },
  { icon: "fas fa-ad", title: "Paid Advertising (PPC)", description: "Maximize ROI with expertly managed Google Ads, Facebook/Instagram campaigns, and more." },
  { icon: "fas fa-envelope", title: "Email Marketing", description: "Convert leads and retain customers with personalized, automated email funnels." },
];

export default function DigitalMarketingPage() {
  return (
    <main className="bg-deep-space text-white">
      <section className="relative pt-40 pb-20 text-center bg-slate-900/50 border-b border-cyan-400/10">
        <div className="relative z-10 p-6 container mx-auto">
          <p className="text-sm uppercase font-bold text-[var(--neon-cyan)] tracking-[0.2em]">
            Growth Strategies
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mt-4 text-balance">
            Performance Digital Marketing
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto text-balance">
            We deliver data-driven marketing campaigns designed to boost your visibility, engagement, and revenue.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                The Four Pillars of Digital Growth
              </h2>
              <div className="space-y-8">
                {marketingPillars.map((pillar, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/20 flex items-center justify-center">
                        <i className={`${pillar.icon} text-xl text-[var(--neon-cyan)]`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
                 <Image src="/pp-digital-marketing.png" alt="Digital Marketing" width={800} height={600} className="rounded-2xl w-full"/>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-24 px-6 bg-slate-900/50 text-center">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stop Guessing, Start Growing
            </h2>
            <p className="text-lg text-gray-400 mb-12 text-balance">
                Our strategies are built on analytics, not assumptions. Book a consultation to see your projected growth plan.
            </p>
            <Link
                href="/contact" // Changed from /book-a-meeting to /contact
                className="inline-block px-12 py-4 text-xl font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white"
            >
                {`View Growth Packages`}
            </Link>
        </div>
      </section>
    </main>
  );
}