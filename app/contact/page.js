"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export const dynamic = 'force-dynamic';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[var(--neon-cyan)]/20 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-semibold text-white">{question}</h4>
        <i
          className={`fas fa-chevron-down text-[var(--neon-cyan)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        ></i>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pt-4" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function ContactUs() {
    const [formStatus, setFormStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Sending...");

        const formData = {
          name: e.target.name.value,
          email: e.target.email.value,
          interested_in: e.target.interested_in.value,
          message: e.target.message.value,
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

  const faqs = [
    {
      q: "What is the typical timeline for a web development project?",
      a: "A typical project timeline ranges from 4 to 12 weeks, depending on the complexity, features, and client feedback. We provide a detailed project roadmap after the initial discovery phase.",
    },
    {
      q: "How do you handle project communication and updates?",
      a: "We believe in transparent communication. We use tools like Slack, Jira, and schedule regular weekly calls to keep you updated on the project's progress and gather your valuable feedback.",
    },
    {
      q: "Do you provide ongoing support and maintenance after launch?",
      a: "Yes, we offer various support and maintenance packages to ensure your website or application remains secure, up-to-date, and performs optimally long after the initial launch.",
    },
  ];

  return (
    <main className="bg-deep-space text-white">
      <section className="relative pt-40 pb-20 text-center bg-slate-900/50 border-b border-cyan-400/10">
        <div className="relative z-10 p-6 container mx-auto">
          <p className="text-sm uppercase font-bold text-[var(--neon-cyan)] tracking-[0.2em]">
            Contact Us
          </p>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mt-4 text-balance"
          >
            {`Let's Create Something Extraordinary`}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto text-balance">
            {`Have a project, an idea, or just want to talk about the future of the web? We're here to listen.`}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6">
        <div className="container mx-auto">
          <div className="glass-card max-w-6xl mx-auto p-8 md:p-12 rounded-2xl grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Send Us a Message
              </h3>
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-gray-400">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-2 w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-gray-400">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-2 w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white" />
              </div>
              <div>
                <label htmlFor="interested_in" className="text-sm font-semibold text-gray-400">Interested In</label>
                <select
                    id="interested_in"
                    name="interested_in"
                    required
                    defaultValue=""
                    className="mt-2 w-full p-3 text-sm rounded-lg bg-black/30 border border-white/10 focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"
                >
                    <option value="" disabled>Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-gray-400">Your Message</label>
                <textarea id="message" name="message" rows="5" required className="mt-2 w-full p-3 rounded-lg bg-black/30 border border-white/10 resize-none focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--primary-glow)] focus:outline-none transition-colors text-white"></textarea>
              </div>
              <div>
                <button 
                    type="submit" 
                    disabled={formStatus === "Sending..."}
                    className="w-full inline-block px-10 py-4 text-lg font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white disabled:bg-gray-400"
                >
                  {formStatus === "Sending..." ? "Sending..." : "Send Message"}
                </button>
                {formStatus && (
                  <p className={`text-center mt-3 text-sm ${formStatus.includes("success") ? "text-[var(--neon-cyan)]" : "text-red-400"}`}>
                    {formStatus}
                  </p>
                )}
              </div>
            </form>
            <div className="space-y-8 pt-2">
              <h3 className="text-3xl font-bold text-white mb-4">
                Direct Contact
              </h3>
              <div className="flex items-start gap-4 group">
                <i className="fas fa-envelope text-2xl text-[var(--neon-cyan)] mt-1 transition-transform duration-300 group-hover:scale-110"></i>
                <div>
                  <h4 className="font-bold text-white text-lg">Email Us</h4>
                  <p className="text-gray-400">Our team is here to help.</p>
                  <a href="mailto:Info@passportpulse.com" className="text-[var(--neon-cyan)] hover:underline">
                    Info@passportpulse.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <i className="fas fa-phone-alt text-2xl text-[var(--neon-cyan)] mt-1 transition-transform duration-300 group-hover:scale-110"></i>
                <div>
                  <h4 className="font-bold text-white text-lg">Call Us</h4>
                  <p className="text-gray-400">Mon-Fri from 9am to 6pm.</p>
                  <a href="tel:+919609387089" className="text-[var(--neon-cyan)] hover:underline">
                    +91 9609387089
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <i className="fas fa-map-marker-alt text-2xl text-[var(--neon-cyan)] mt-1 transition-transform duration-300 group-hover:scale-110"></i>
                <div>
                  <h4 className="font-bold text-white text-lg">Our Location</h4>
                  <p className="text-gray-400">Kolkata, West Bengal, India</p>
                  <p className="text-gray-500 text-sm">(Serving Clients Worldwide)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 mb-12 text-balance text-center">
            Have questions? We have answers. Here are some of the most common queries we receive.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}