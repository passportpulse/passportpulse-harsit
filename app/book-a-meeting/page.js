"use client";

import React from "react";
import { InlineWidget } from "react-calendly";

export const dynamic = 'force-dynamic';

export default function BookMeetingPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative pt-40 pb-20 text-center bg-gray-50 border-b border-gray-200">
        <div className="relative z-10 p-6 container mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance font-rajdhani"
          >
            Schedule a Meeting with Us
          </h1>
          <p className="text-lg text-gray-600 text-balance max-w-3xl mx-auto font-sora">
            Choose a time that works best for you. We are excited to discuss
            your project and how we can help you achieve your goals.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-white border border-gray-200/80 max-w-4xl mx-auto p-4 md:p-6 rounded-2xl shadow-xl">
            <InlineWidget
              url="https://calendly.com/mehefujali30/30min"
              styles={{
                height: "1000px",
                borderRadius: "1rem",
              }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "00BFA5",
                textColor: "1f2937",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}