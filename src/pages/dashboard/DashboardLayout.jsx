import React, { useState, useEffect } from "react";
import { 
  BarChart3, 
  Home, 
  Search, 
  Heart, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Bell, 
  User,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  FileText,
  Briefcase,
  Users,
  Building,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function DashboardLayout({ children, role = "buyer", userName = "Guest" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuItems = {
    buyer: [
      { name: "My Feed", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
      { name: "Watchlist", icon: <Heart size={18} />, path: "/dashboard/watchlist" },
      { name: "Pro Tools", icon: <Zap size={18} />, path: "/dashboard/tools" },
      { name: "Messages", icon: <MessageSquare size={18} />, path: "/dashboard/messages" },
    ],
    seller: [
      { name: "Overview", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
      { name: "My Listings", icon: <Home size={18} />, path: "/dashboard/listings" },
      { name: "Audit Protocol", icon: <ShieldCheck size={18} />, path: "/dashboard/audit" },
      { name: "Pro Tools", icon: <Zap size={18} />, path: "/dashboard/tools" },
      { name: "Leads", icon: <Users size={18} />, path: "/dashboard/leads" },
      { name: "Integrity Hub", icon: <Zap size={18} />, path: "/dashboard/integrity" },
      { name: "Boosts", icon: <Zap size={18} />, path: "/dashboard/boosts" },
      { name: "Documents", icon: <FileText size={18} />, path: "/dashboard/docs" },
    ],
    developer: [
      { name: "HQ Overview", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
      { name: "Projects", icon: <Building size={18} />, path: "/dashboard/projects" },
      { name: "Sales Hub", icon: <BarChart3 size={18} />, path: "/dashboard/sales" },
      { name: "Audit Protocol", icon: <ShieldCheck size={18} />, path: "/dashboard/audit" },
      { name: "Integrity Hub", icon: <Zap size={18} />, path: "/dashboard/integrity" },
      { name: "Bulk Upload", icon: <Zap size={18} />, path: "/dashboard/bulk" },
      { name: "CRM", icon: <Users size={18} />, path: "/dashboard/crm" },
    ],
    expert: [
      { name: "Expert Desk", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
      { name: "Service Requests", icon: <Briefcase size={18} />, path: "/dashboard/requests" },
      { name: "Audit Panel", icon: <ShieldCheck size={18} />, path: "/dashboard/audit" },
      { name: "Verifications", icon: <ShieldCheck size={18} />, path: "/dashboard/verifications" },
      { name: "Integrity Hub", icon: <ShieldCheck size={18} />, path: "/dashboard/integrity" },
      { name: "Earnings", icon: <Zap size={18} />, path: "/dashboard/earnings" },
      { name: "Profile Settings", icon: <Settings size={18} />, path: "/dashboard/settings" },
    ]
  };

  const currentMenu = menuItems[role] || menuItems.buyer;

  const NavItem = ({ item, mobile = false }) => {
    const isActive = location.pathname === item.path;
    return (
      <button
        onClick={() => {
          navigate(item.path);
          setIsMobileMenuOpen(false);
        }}
        className={`relative w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 ${
          isActive 
            ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={isActive ? "text-dark-orange" : ""}>
            {item.icon}
          </div>
          <span className="text-[12px] font-black uppercase tracking-widest">{item.name}</span>
        </div>
        {isActive && (
          <div className="w-1.5 h-1.5 rounded-full bg-dark-orange shadow-sm animate-pulse" />
        )}
      </button>
    );
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-poppins antialiased">
      {/* Sidebar Desktop - Standard Fixed Sidebar */}
      <aside className="hidden lg:flex flex-col w-[280px] bg-white border-r border-slate-100 h-screen sticky top-0 overflow-y-auto z-50">
        <div className="p-8 pb-10">
          <div 
             onClick={() => navigate("/")}
             className="flex items-center gap-3 cursor-pointer group"
          >
             <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-200 group-hover:bg-dark-orange transition-all duration-500">
                <ShieldCheck size={28} className="text-white" />
             </div>
             <div>
                <h1 className="text-xl font-black tracking-tighter text-slate-900 leading-none uppercase">BHAIYA</h1>
                <p className="text-[10px] font-black uppercase text-dark-orange tracking-[0.2em] mt-1">Enterprise</p>
             </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {currentMenu.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>

        <div className="p-6 border-t border-slate-50 mt-auto">
          <button 
            onClick={() => {
              sessionStorage.clear();
              window.location.href = "/";
            }}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Framework */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Responsive Dashboard Header */}
        <header className="h-[72px] lg:h-20 bg-linear-to-r from-dark-orange via-dark-orange to-orange-500 flex items-center justify-between px-4 lg:px-10 sticky top-0 z-[60] shadow-lg">
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all"
             >
                <Menu size={20} />
             </button>
             <div className="flex flex-col">
                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-white/70 leading-none">Command Center</span>
                <h3 className="text-[13px] lg:text-[16px] font-black text-white uppercase tracking-tight leading-none mt-1">{role} Portal</h3>
             </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
             <button className="relative w-9 h-9 lg:w-11 lg:h-11 flex items-center justify-center text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-dark-orange"></span>
             </button>

             {/* Profile */}
             <div className="flex items-center gap-3 pl-3 border-l border-white/20">
                <div className="hidden sm:block text-right">
                   <p className="text-xs font-black text-white leading-none whitespace-nowrap">{userName}</p>
                   <div className="flex items-center justify-end gap-1 mt-1 text-orange-200">
                      <ShieldCheck size={8} />
                      <span className="text-[8px] font-bold uppercase tracking-widest">Premium</span>
                   </div>
                </div>
                <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-white text-dark-orange flex items-center justify-center font-black shadow-xl uppercase">
                   {userName.charAt(0)}
                </div>
             </div>
          </div>
        </header>

        {/* Content Injector */}
        <div className="flex-1 p-4 lg:p-10 max-w-[1700px] mx-auto w-full pb-32">
           {children}
        </div>
      </main>

      {/* MODAL DRAWER - FIXED OVERFLOW & ALIGNMENT */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] transition-opacity duration-300 flex justify-start"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="w-[280px] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header in Drawer */}
            <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between pt-12 lg:pt-8">
              <div className="flex items-center gap-3 font-black text-slate-900 uppercase tracking-tighter">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm leading-none">BHAIYA</span>
                  <span className="text-[8px] text-dark-orange tracking-widest mt-1">DASHBOARD</span>
                </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors bg-white rounded-lg shadow-sm border border-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav in Drawer */}
            <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
              <div className="px-5 mb-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Navigation</div>
              {currentMenu.map((item) => (
                <NavItem key={item.name} item={item} mobile />
              ))}
            </nav>

            {/* Footer in Drawer */}
            <div className="p-6 border-t border-slate-50 bg-slate-50/30">
              <button 
                onClick={() => {
                  sessionStorage.clear();
                  window.location.href = "/";
                }}
                className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest text-red-500 bg-white border border-red-50 shadow-sm transition-all active:scale-95"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
