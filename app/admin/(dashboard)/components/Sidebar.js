"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTachometerAlt, FaEnvelopeOpenText, FaSignOutAlt, FaHome, FaUsers, FaQuestionCircle } from 'react-icons/fa';
import { useAuth } from '@/app/context/AuthContext';
import Image from 'next/image';

const Sidebar = () => {
      const pathname = usePathname();
      const { logout } = useAuth();

      const navItems = [
            { href: '/admin', icon: FaTachometerAlt, label: 'Dashboard' },
      ];

      const contactItems = [
            { href: '/admin/contacts', icon: FaUsers, label: 'Leads' },
      ];

      const queryItems = [
            { href: '/admin/queries', icon: FaQuestionCircle, label: 'System Leads' },
      ];

      return (
            <aside className="fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 hidden md:flex flex-col">
                  <div className="p-6 text-center border-b border-gray-200">
                        <Link href="/admin">
                            <Image src="/pp-logo.png" alt="Passport Pulse Logo" width={100} height={60} className="w-20 h-20 mx-auto" />
                        </Link>
                  </div>
                  <nav className="flex-1 p-4 space-y-6">
                        {/* Main Navigation */}
                        <div>
                              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Main</h3>
                              {navItems.map(item => (
                                    <Link
                                          key={item.href}
                                          href={item.href}
                                          className={`flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 ${pathname === item.href
                                                ? 'bg-[var(--neon-cyan)] text-black'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                    >
                                          <item.icon className="text-xl" />
                                          <span className="font-semibold">{item.label}</span>
                                    </Link>
                              ))}
                        </div>

                        {/* Contacts Section */}
                        <div>
                              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Leads</h3>
                              {contactItems.map(item => (
                                    <Link
                                          key={item.href}
                                          href={item.href}
                                          className={`flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 ${pathname === item.href
                                                ? 'bg-[var(--neon-cyan)] text-black'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                    >
                                          <item.icon className="text-xl" />
                                          <span className="font-semibold">{item.label}</span>
                                    </Link>
                              ))}
                        </div>

                        {/* Queries Section */}
                        <div>
                              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">System Leads</h3>
                              {queryItems.map(item => (
                                    <Link
                                          key={item.href}
                                          href={item.href}
                                          className={`flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 ${pathname === item.href
                                                ? 'bg-[var(--neon-cyan)] text-black'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                    >
                                          <item.icon className="text-xl" />
                                          <span className="font-semibold">{item.label}</span>
                                    </Link>
                              ))}
                        </div>
                  </nav>
                  <div className="p-4 border-t border-gray-200 space-y-2">
                        <Link
                              href="/"
                              className="flex items-center gap-4 p-3 w-full rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                        >
                              <FaHome className="text-xl" />
                              <span className="font-semibold">Back to Home</span>
                        </Link>
                        <button
                              onClick={logout}
                              className="flex items-center gap-4 p-3 w-full rounded-lg text-red-500 hover:bg-red-50 transition-colors duration-200"
                        >
                              <FaSignOutAlt className="text-xl" />
                              <span className="font-semibold">Logout</span>
                        </button>
                  </div>
            </aside>
      );
};

export default Sidebar;