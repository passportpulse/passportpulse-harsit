"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";
import EnquiryPopup from "./EnquiryPopup";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/login";
  const { isEnquiryModalOpen, setIsEnquiryModalOpen } = useAuth();

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown && !isAdminPage && !isLoginPage) {
        const timer = setTimeout(() => {
            setIsEnquiryModalOpen(true);
        }, 2500);
        return () => clearTimeout(timer);
    }
  }, [isAdminPage, isLoginPage, setIsEnquiryModalOpen]);

  const handleClosePopup = () => {
    setIsEnquiryModalOpen(false);
    sessionStorage.setItem('popupShown', 'true');
  };
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {!isAdminPage && <Header />}
      <main className={`relative z-10 ${isAdminPage ? "" : ""}`}>
        {children}
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <FloatingButtons />}
      
      {isEnquiryModalOpen && !isAdminPage && !isLoginPage && <EnquiryPopup onClose={handleClosePopup} />}
    </>
  );
}