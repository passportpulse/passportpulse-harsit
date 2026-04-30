import React from "react";
import { Phone, MessageSquare, Search, PlusCircle, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function MobileStickyNav() {
  const location = useLocation();
  const isDashboard = location.pathname.includes("/dashboard");

  if (isDashboard) return null; // Hide on dashboard as it has its own navigation

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <div className="bg-slate-900 text-white rounded-[2rem] shadow-2xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-md">
          <NavItem icon={<Search />} label="Explore" to="/" active={location.pathname === "/"} />
          <NavItem icon={<PlusCircle />} label="Sell" to="/sell" active={location.pathname === "/sell"} />
          
          <div className="px-2">
            <button 
              onClick={() => window.open("https://wa.me/917699988876", "_blank")}
              className="w-14 h-14 bg-dark-orange rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/20 active:scale-90 transition-all border-4 border-slate-900 -mt-10"
            >
              <MessageSquare fill="white" />
            </button>
          </div>

          <NavItem icon={<User />} label="Profile" to="/login" active={location.pathname === "/login"} />
          <button 
            onClick={() => window.open("tel:+917699988876", "_self")}
            className="flex flex-col items-center gap-1 px-3 py-2 text-slate-400"
          >
            <Phone size={20} />
            <span className="text-[9px] font-black uppercase tracking-widest">Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, to, active }) {
  return (
    <Link 
      to={to}
      className={`flex flex-col items-center gap-1 px-3 py-2 transition-all ${active ? 'text-dark-orange' : 'text-slate-400'}`}
    >
      {React.cloneElement(icon, { size: 20 })}
      <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
    </Link>
  );
}
