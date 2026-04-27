"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      id="footer"
      className={`bg-gray-900 text-gray-400 pt-20 pb-10 px-6 ${pathname === "/login" && "hidden"
        }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ---------------- LEFT LOGO SECTION ---------------- */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="flex flex-col items-center md:items-start mb-6"
            >
              <div className="mb-0 overflow-hidden">
                <Image
                  src="/logo-new.png"
                  alt="Passport Pulse Logo"
                  width={240}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="flex flex-col items-center md:items-start -mt-4 w-full">
                <div className="py-2 w-[240px] flex justify-center md:justify-start">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 opacity-80">
                    Our Sister Concern
                  </span>
                </div>
                <Image
                  src="/logos-c.png"
                  alt="Company Logo"
                  width={240}
                  height={80}
                  className="object-contain -mt-2"
                />
              </div>
            </Link>

            <p className="text-sm text-balance">
              Your complete digital & business automation funnel, engineering
              solutions for businesses ready to conquer the world stage.
            </p>
          </div>

          {/* ---------------- QUICK LINKS ---------------- */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------------- LEGAL ---------------- */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------------- OFFICE ADDRESS + SOCIAL ---------------- */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Our Office</h4>

            <p className="text-gray-400 leading-relaxed mb-4">
              1 Khudiram Bose Sarani(Mall Road)<br />
              Nagerbazar <br />
              Kolkata 700-080<br />
              Opposite GST Bhawan
            </p>

            <h4 className="font-bold text-white mb-3 text-lg">Connect With Us</h4>
            <div className="mb-4">
              <a
                href="tel:+919330209669"
                className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
              >
                +91 9330209669
              </a>
              <br />
              <a
                href="tel:+919609387089"
                className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
              >
                +91 9609387089
              </a>
              <br />
              <a
                href="mailto:Info@passportpulse.com"
                className="text-gray-400 hover:text-[var(--neon-cyan)] transition-colors"
              >
                Info@passportpulse.com
              </a>
            </div>

            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com/passportpuls"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all text-xl"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/returntech"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all text-xl"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Passport Pulse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
