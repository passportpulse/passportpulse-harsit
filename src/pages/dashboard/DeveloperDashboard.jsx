import React from "react";
import DashboardLayout from "./DashboardLayout";
import { 
  BarChart3, 
  Building, 
  Users, 
  Search, 
  ChevronRight, 
  Zap,
  ArrowUpRight,
  TrendingUp,
  LayoutGrid,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  PieChart,
  Target,
  ArrowRight,
  ShieldCheck,
  MousePointer2,
  FileText,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

export default function DeveloperDashboard() {
  return (
    <DashboardLayout role="developer" userName="Skyline Devs HQ">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Enterprise Header */}
        <div className="relative bg-slate-900 rounded-[3rem] p-8 lg:p-12 mb-8 overflow-hidden shadow-2xl group">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-dark-orange/15 rounded-full blur-[100px] -mr-32 -mt-32"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -ml-20 -mb-20"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                 <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-8 font-black text-[10px] uppercase tracking-[0.3em] text-white">
                    <Sparkles size={16} className="text-dark-orange" /> Enterprise Command Center
                 </div>
                 <h1 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
                    Dominate <span className="text-dark-orange italic">The Sky.</span>
                 </h1>
                 <p className="text-slate-400 text-sm lg:text-lg font-medium max-w-md mb-10 leading-relaxed">
                    Your projects are reaching <span className="text-white font-black underline decoration-dark-orange decoration-4 underline-offset-[10px]">14.2k active buyers</span> this month.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-dark-orange text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all active:scale-95 shadow-xl shadow-orange-500/20 group">
                       Add New Project <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                       Bulk Upload (CSV)
                    </button>
                 </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                 <HeaderMetric label="Portal Reach" value="14.2k" icon={<TrendingUp size={20} />} />
                 <HeaderMetric label="Avg. Lead Quality" value="8.4/10" icon={<Zap size={20} />} />
                 <HeaderMetric label="Inventory Status" value="68%" icon={<Layers size={20} />} />
                 <HeaderMetric label="Sales Velocity" value="+12%" icon={<TrendingUp size={20} />} />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Left Section: Project Portfolio */}
           <div className="lg:col-span-8 space-y-8">
              
              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm">
                 <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                       type="text" 
                       placeholder="Search your portfolio..." 
                       className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-none text-sm font-bold text-slate-800 outline-none focus:bg-white transition-all shadow-inner"
                    />
                 </div>
                 <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">Ongoing</button>
                    <button className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50">Completed</button>
                 </div>
              </div>

              {/* Project Cards */}
              <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                 <div className="flex justify-between items-center mb-10">
                    <div>
                       <h3 className="text-2xl font-black text-slate-900 leading-none">Your Projects</h3>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-3">Portfolio Performance</p>
                    </div>
                    <div className="flex gap-2">
                       <button className="p-3 rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-200">
                          <LayoutGrid size={20} />
                       </button>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                    <ProjectCard 
                      name="Skyline Horizon Phase 1" 
                      location="New Town, Durgapur" 
                      units="142/200 Sold" 
                      reach="8.5k" 
                      roi="+12.4%" 
                      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                      status="Operational"
                    />
                    <ProjectCard 
                      name="The Emerald Greens" 
                      location="Ukhra Road" 
                      units="32/80 Sold" 
                      reach="12.2k" 
                      roi="+18.2%" 
                      image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2574&auto=format&fit=crop"
                      status="Pre-Launch"
                      special
                    />
                 </div>
              </div>

              {/* Performance Analytics Chart Snippet */}
              <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
                 <div className="flex justify-between items-center mb-10">
                    <div>
                       <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-2">
                         <BarChart3 className="text-dark-orange" /> Reach Analytics
                       </h3>
                       <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mt-1">Global Portal Visibility</p>
                    </div>
                    <select className="bg-slate-50 border-none text-[10px] font-black uppercase tracking-widest rounded-lg px-4 py-2 outline-none">
                       <option>Last 30 Days</option>
                       <option>Last 90 Days</option>
                    </select>
                 </div>
                 <div className="h-64 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 flex items-center justify-center group cursor-pointer hover:bg-orange-50 transition-all">
                    <div className="text-center">
                       <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-md text-dark-orange group-hover:scale-110 transition-transform">
                          <PieChart size={24} />
                       </div>
                       <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">View Detailed Analytics Map</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right Sidebar: Tools & Insights */}
           <div className="lg:col-span-4 space-y-8">
              
              {/* Quick Actions Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-dark-orange/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                 <h3 className="text-sm font-black uppercase tracking-widest mb-8 flex items-center gap-2">
                    <Zap size={18} className="text-dark-orange" /> Rapid Tools
                 </h3>
                 <div className="grid grid-cols-1 gap-3">
                    <QuickActionButton icon={<MousePointer2 size={16}/>} label="Create Campaign" />
                    <QuickActionButton icon={<Building size={16}/>} label="New Microsite" />
                    <QuickActionButton icon={<Search size={16}/>} label="Audit Listings" />
                    <QuickActionButton icon={<FileText size={16}/>} label="Export Leads" />
                 </div>
              </div>

              {/* Lead Pipeline */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                 <div className="flex justify-between items-center mb-8">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                       <Users size={18} className="text-dark-orange" /> Active Leads
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-600 text-[8px] font-black uppercase">Real-Time</span>
                 </div>
                 <div className="space-y-6">
                    <LeadItem name="Indranil Sen" project="Horizon P1" status="Hot" budget="₹1.2 Cr" time="12m ago" />
                    <LeadItem name="Deblina Roy" project="Emerald" status="Warm" budget="₹65.0 L" time="45m ago" />
                    <LeadItem name="Joydeep Das" project="Horizon P1" status="Cold" budget="₹88.5 L" time="2h ago" />
                    <LeadItem name="Anita Ray" project="Emerald" status="Hot" budget="₹92.0 L" time="3h ago" />
                 </div>
                 <button className="w-full mt-10 py-4 rounded-2xl bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                    Open CRM Dashboard
                 </button>
              </div>

              {/* Premium Support */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                 <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 border border-white/20 shadow-inner">
                    <ShieldCheck size={40} className="text-white" />
                 </div>
                 <h4 className="text-lg font-black tracking-tight mb-2">Dedicated Account Manager</h4>
                 <p className="text-[11px] font-medium text-indigo-100 leading-relaxed max-w-[200px] mb-8">
                    Need help scaling your projects? Contact Vikram, your enterprise partner.
                 </p>
                 <button className="w-full py-4 rounded-xl bg-white text-indigo-600 text-[11px] font-black uppercase tracking-widest hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                    Connect Now <ArrowRight size={16} />
                 </button>
              </div>

           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB COMPONENTS ---

function HeaderMetric({ label, value, icon }) {
  return (
    <div className="p-4 lg:p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md flex items-center gap-4 hover:bg-white/10 transition-all cursor-default group">
       <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white/10 flex items-center justify-center text-dark-orange group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <div>
          <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{label}</p>
          <p className="text-xl lg:text-2xl font-black text-white leading-none">{value}</p>
       </div>
    </div>
  );
}

function ProjectCard({ name, location, units, reach, roi, image, status, special }) {
  return (
    <div className={`p-6 rounded-[2.5rem] bg-slate-50 border hover:border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-700 flex flex-col md:flex-row items-center gap-8 ${special ? "border-orange-100 shadow-xl shadow-orange-100/50" : "border-slate-100"}`}>
       <div className="w-full md:w-32 h-32 rounded-[2rem] overflow-hidden shrink-0 shadow-lg relative">
          <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
          <div className="absolute inset-0 bg-black/20"></div>
       </div>
       <div className="flex-1 min-w-0 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
             <h4 className="text-xl font-black text-slate-800 tracking-tight leading-none uppercase">{name}</h4>
             <span className={`w-fit mx-auto md:mx-0 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                status === "Operational" ? "bg-blue-100 text-blue-600" : "bg-dark-orange text-white animate-bounce"
             }`}>{status}</span>
          </div>
          <p className="text-xs font-bold text-slate-400 flex items-center justify-center md:justify-start gap-1">
             <MapPin size={12} /> {location}
          </p>

          <div className="grid grid-cols-3 gap-6 mt-6">
             <div>
                <p className="text-[14px] font-black text-slate-800 leading-none">{units}</p>
                <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">Inventory</p>
             </div>
             <div>
                <p className="text-[14px] font-black text-slate-800 leading-none">{reach}</p>
                <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">Portal Reach</p>
             </div>
             <div>
                <p className="text-[14px] font-black text-green-600 leading-none">{roi}</p>
                <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">Appreciation</p>
             </div>
          </div>
       </div>
       <button className="w-full md:w-14 h-14 rounded-3xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-dark-orange hover:border-dark-orange transition-all shadow-sm">
          <ChevronRight size={24} />
       </button>
    </div>
  );
}

function LeadItem({ name, project, status, budget, time }) {
  return (
    <div className="flex items-center justify-between group cursor-default">
       <div className="flex flex-col">
          <h5 className="text-[11px] font-black text-slate-800 uppercase tracking-tight leading-none">{name}</h5>
          <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-widest leading-none flex items-center gap-1">
             Interested in <span className="text-slate-600">{project}</span>
             <span className="w-1 h-1 rounded-full bg-slate-300 mx-1"></span>
             <Clock size={10} /> {time}
          </p>
       </div>
       <div className="text-right flex items-center gap-4">
          <div className="hidden sm:block">
             <p className="text-[11px] font-black text-slate-900 leading-none">{budget}</p>
             <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">Budget</p>
          </div>
          <span className={`px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${
             status === "Hot" ? "bg-red-100 text-red-600" : status === "Warm" ? "bg-orange-100 text-dark-orange" : "bg-slate-100 text-slate-400"
          }`}>{status}</span>
       </div>
    </div>
  );
}

function QuickActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-left group">
       <div className="w-10 h-10 rounded-lg bg-dark-orange flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white">{label}</span>
    </button>
  );
}
