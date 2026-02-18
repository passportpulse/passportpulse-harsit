"use client";

import { Sora, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import FloatingButtons from "./components/FloatingButtons";
import { useEffect, useState, useRef } from "react";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Preloader from "./components/Preloader";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-rajdhani", display: "swap" });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en" className={`${sora.variable} ${orbitron.variable} ${rajdhani.variable} scroll-smooth`} suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="https://i.ibb.co/9v0K3qd/passport-pulse-favicon-white.png" type="image/png" />
        <link rel="shortcut icon" href="https://i.ibb.co/9v0K3qd/passport-pulse-favicon-white.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://i.ibb.co/9v0K3qd/passport-pulse-favicon-white.png" type="image/png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body suppressHydrationWarning={true} className="bg-deep-space">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        <AuthProvider>
          <Toaster position="top-center" reverseOrder={false} />
          {!isAdminPage && <Header />}
          <main className={`relative z-10 transition-opacity duration-700 ${!loading ? 'opacity-100' : 'opacity-0'} ${isAdminPage ? "" : ""}`}>
            {children}
          </main>
          {!isAdminPage && <Footer />}
          {!isAdminPage && <FloatingButtons />}
        </AuthProvider>
      </body>
    </html>
  );
}