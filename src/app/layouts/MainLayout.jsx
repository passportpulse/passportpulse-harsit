import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AppPromoBar from "../../components/AppPromoBar";
import { useState } from "react";
import MobileStickyNav from "../../components/MobileStickyNav";

export default function MainLayout() {
  const [promoVisible, setPromoVisible] = useState(true);
  return (
    <>
      {/* Mobile App Promo */}
      <AppPromoBar show={promoVisible} onClose={() => setPromoVisible(false)} />
      <Navbar promoVisible={promoVisible} />
      <main className="min-h-screen pb-24 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}
