import React from "react";
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
  Building
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function DashboardLayout({ children, role = "buyer", userName = "Guest" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = {
    buyer: [
      { name: "My Feed", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "Watchlist", icon: <Heart size={20} />, path: "/dashboard/watchlist" },
      { name: "Search History", icon: <Search size={20} />, path: "/dashboard/searches" },
      { name: "Site Visits", icon: <Home size={20} />, path: "/dashboard/visits" },
      { name: "Messages", icon: <MessageSquare size={20} />, path: "/dashboard/messages" },
    ],
    seller: [
      { name: "Overview", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "My Listings", icon: <Home size={20} />, path: "/dashboard/listings" },
      { name: "Leads", icon: <Users size={20} />, path: "/dashboard/leads" },
      { name: "Boosts", icon: <Zap size={20} />, path: "/dashboard/boosts" },
      { name: "Documents", icon: <FileText size={20} />, path: "/dashboard/docs" },
    ],
    developer: [
      { name: "HQ Overview", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "Projects", icon: <Building size={20} />, path: "/dashboard/projects" },
      { name: "Sales Hub", icon: <BarChart3 size={20} />, path: "/dashboard/sales" },
      { name: "Bulk Upload", icon: <Zap size={20} />, path: "/dashboard/bulk" },
      { name: "CRM", icon: <Users size={20} />, path: "/dashboard/crm" },
    ],
    expert: [
      { name: "Expert Desk", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
      { name: "Service Requests", icon: <Briefcase size={20} />, path: "/dashboard/requests" },
      { name: "Verifications", icon: <ShieldCheck size={20} />, path: "/dashboard/verifications" },
      { name: "Earnings", icon: <Zap size={20} />, path: "/dashboard/earnings" },
      { name: "Profile Settings", icon: <Settings size={20} />, path: "/dashboard/settings" },
    ]
  };

  const currentMenu = menuItems[role] || menuItems.buyer;

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-poppins antialiased">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-0 h-screen z-50">
        <div className="p-8 pb-4">
          <div 
             onClick={() => navigate("/")}
             className="flex items-center gap-2 cursor-pointer group"
          >
             <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-200 group-hover:bg-dark-orange transition-all">
                <ShieldCheck size={24} className="text-white" />
             </div>
             <div>
                <h1 className="text-lg font-black tracking-tighter text-slate-900 leading-none">BHAIYA</h1>
                <p className="text-[10px] font-black uppercase text-dark-orange tracking-widest mt-0.5">Dashboard</p>
             </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          {currentMenu.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold tracking-tight transition-all duration-300 ${
                location.pathname === item.path 
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-200 scale-[1.02]" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className={location.pathname === item.path ? "text-dark-orange" : ""}>
                {item.icon}
              </div>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={() => {
              sessionStorage.removeItem("bhaiya_role");
              // Also clear any other portal-specific flags
              sessionStorage.clear();
              // Redirect to home page
              window.location.href = "/";
            }}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all transition-transform active:scale-95"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
             <div className="lg:hidden w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                <ShieldCheck size={20} />
             </div>
             <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Portal View</h2>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">{role} Dashboard</h3>
             </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
             {/* Notification */}
             <button className="relative w-10 h-10 flex items-center justify-center text-slate-400 hover:text-dark-orange transition-all">
                <Bell size={22} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-dark-orange rounded-full border-2 border-white"></span>
             </button>

             {/* Quick Logout for Mobile */}
             <button 
               onClick={() => {
                 sessionStorage.clear();
                 window.location.href = "/";
               }}
               className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all border border-slate-100 rounded-xl"
             >
                <LogOut size={20} />
             </button>

             {/* Profile */}
             <div className="flex items-center gap-3 pl-3 sm:pl-6 border-l border-slate-200">
                <div className="hidden sm:block text-right">
                   <p className="text-xs font-black text-slate-900 leading-none">{userName}</p>
                   <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{role} Premium</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-dark-orange flex items-center justify-center font-black shadow-inner">
                   {userName.charAt(0)}
                </div>
             </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="p-8 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}

