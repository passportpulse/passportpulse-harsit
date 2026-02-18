"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // New state for dropdown
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [pathname, isHomePage]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  // Main navigation links (excluding Services)
  const navLinks = [
    { href: "/", label: "Home", icon: "fas fa-home" },
    { href: "/about", label: "About", icon: "fas fa-info-circle" },
  ];

  // Dedicated Service Links for the dropdown
  const serviceLinks = [
    { href: "/services/web-development", label: "Web Development", icon: "fas fa-laptop-code" },
    { href: "/services/graphic-design", label: "Graphic Design", icon: "fas fa-palette" },
    { href: "/services/digital-marketing", label: "Digital Marketing", icon: "fas fa-bullhorn" },
    { href: "/services", label: "All Services", icon: "fas fa-concierge-bell" },
  ];

  const bottomNavLinks = [
    { href: "/", label: "Home", icon: "fas fa-home" },
    { href: "/services", label: "Services", icon: "fas fa-concierge-bell" },
    { href: "/contact", label: "Contact", icon: "fas fa-envelope" },
  ];

  // Helper to check if any service link is active
  const isServiceRouteActive = serviceLinks.some(l => pathname.startsWith(l.href)) || pathname === "/services";

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-md border-b border-b-cyan-400/10 border-[var(--neon-cyan)]/20" : "bg-transparent border-b border-transparent"} ${pathname === "/login" && "hidden"}`}>
        <nav className="container mx-auto px-6 py-1">
          <div className="flex items-center justify-between">
            <Link href="/" title="Go to Passport Pulse Homepage">
              <Image src="/pp-logo-1.png" alt="Passport Pulse Logo" width={100} height={60} className="w-40 py-2  invert brightness-0" />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`nav-link text-white/80 ${pathname === link.href ? "active" : ""}`}>
                  {link.label}
                </Link>
              ))}
              
              {/* Desktop Services Dropdown/Flyout */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                  <button 
                      className={`nav-link text-white/80 flex items-center gap-1 ${isServiceRouteActive ? "active" : ""}`}
                  >
                      Services <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}></i>
                  </button>
                  {isServicesOpen && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-60 bg-slate-900/90 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl py-2 transition-all duration-300 z-50">
                          {serviceLinks.map((link) => (
                              <Link key={link.href} href={link.href} onClick={() => setIsServicesOpen(false)} className={`flex items-center gap-3 px-4 py-2 text-sm font-medium text-white/80 hover:bg-slate-800 transition-colors ${pathname === link.href ? "text-[var(--neon-cyan)]" : ""}`}>
                                  <i className={`${link.icon} w-4 text-center`}></i>
                                  {link.label}
                              </Link>
                          ))}
                      </div>
                  )}
              </div>

              <Link href="/contact" className="inline-block px-5 py-2 text-sm font-semibold text-black bg-[var(--neon-cyan)] rounded-lg transition-all duration-300 ease-in-out hover:bg-[var(--darker-cyan)] hover:text-white">
                Contact
              </Link>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white" aria-label="Toggle menu">
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars-staggered"} text-2xl`}></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Backdrop */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)}></div>

      {/* Mobile Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-slate-900/80 backdrop-blur-xl shadow-2xl z-[120] transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col h-full">
          <h2 className="text-xl font-bold text-white mb-8">Navigation</h2>
          
          <div className="flex flex-col space-y-4 mt-8 flex-grow">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-4 text-lg font-semibold p-3 rounded-lg transition-colors duration-300 ${pathname === link.href ? "bg-[var(--neon-cyan)] text-black" : "text-white/80 hover:bg-slate-800"}`}>
                <i className={`${link.icon} w-6 text-center text-white/70`}></i>
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Services Section */}
            <div className="border-t border-b border-white/10 pt-4 pb-2">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Our Solutions</h3>
                {serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`flex items-center gap-4 text-md font-medium p-3 rounded-lg transition-colors duration-300 ${pathname === link.href ? "text-[var(--neon-cyan)]" : "text-white/80 hover:bg-slate-800/50"}`}>
                        <i className={`${link.icon} w-4 text-center text-white/60`}></i>
                        {link.label}
                    </Link>
                ))}
            </div>

          </div>
          
          <div className="mt-auto">
            <Link href="/book-a-meeting" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-4 w-full text-lg font-semibold p-3 rounded-lg transition-colors duration-300 text-black bg-[var(--neon-cyan)] hover:bg-[var(--darker-cyan)] hover:text-white text-center">
              <i className="fas fa-calendar-check w-6 text-center"></i>
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>

      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-t border-[var(--neon-cyan)]/20 z-[90] pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center h-16">
          {bottomNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className="flex flex-col items-center justify-center text-center w-1/4">
              <i className={`${link.icon} text-xl transition-colors duration-300 ${pathname === link.href || (link.href === '/services' && isServiceRouteActive) ? "text-[var(--neon-cyan)]" : "text-gray-400"}`}></i>
              <span className={`text-xs mt-1 transition-colors duration-300 ${pathname === link.href || (link.href === '/services' && isServiceRouteActive) ? "text-white" : "text-gray-500"}`}>{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

const styles = `
  .nav-link { transition: color 0.3s; font-weight: 600; }
  .nav-link:hover { color: var(--neon-cyan); }
  .nav-link.active { color: var(--neon-cyan); }
`;

if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  if (!document.getElementById("custom-nav-styles")) {
    styleSheet.id = "custom-nav-styles";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

export default Header;