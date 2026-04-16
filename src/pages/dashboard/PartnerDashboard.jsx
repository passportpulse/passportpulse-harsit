import React from "react";
import DashboardLayout from "./DashboardLayout";
import { 
  ShieldCheck, 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Zap,
  Star,
  Scale,
  FileText,
  UserCheck,
  TrendingUp,
  AlertCircle
} from "lucide-react";

export default function PartnerDashboard() {
  return (
    <DashboardLayout role="expert" userName="Adv. Subhash Mondal">
      {/* Expert Profile Header */}
      <div className="relative bg-[#0F172A] rounded-[3rem] p-10 lg:p-14 mb-8 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12 group">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dark-orange/10 rounded-full blur-[120px] -mr-40 -mt-20 group-hover:bg-dark-orange/15 transition-all duration-1000"></div>
         
         {/* Profile Card */}
         <div className="relative z-10 w-full lg:w-1/3">
            <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-8 border border-white/10 shadow-inner flex flex-col items-center text-center">
               <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-[2rem] bg-orange-100 flex items-center justify-center text-dark-orange font-black text-3xl shadow-xl shadow-orange-500/20">
                     SM
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-dark-orange text-white flex items-center justify-center border-4 border-[#0F172A] shadow-lg">
                     <ShieldCheck size={20} />
                  </div>
               </div>
               <h2 className="text-xl font-black text-white uppercase tracking-tight mb-1">Adv. Subhash Mondal</h2>
               <p className="text-[10px] font-black uppercase text-dark-orange tracking-[0.3em] mb-4">Legal Expert • Tier 1</p>
               <div className="flex items-center gap-4 py-3 px-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-center">
                     <p className="text-lg font-black text-white leading-none">4.9</p>
                     <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest mt-1">Rating</p>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div className="text-center">
                     <p className="text-lg font-black text-white leading-none">124</p>
                     <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest mt-1">Cases</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Stats and Welcome */}
         <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-orange text-white mb-8 font-black text-[9px] uppercase tracking-[0.3em] shadow-lg shadow-orange-500/30 animate-pulse">
               <AlertCircle size={14} /> 2 New verification requests
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-none uppercase">
               Truth Is Your <span className="text-dark-orange">Currency.</span>
            </h1>
            <p className="text-slate-400 text-sm lg:text-base font-medium max-w-lg mb-10 leading-relaxed">
               Welcome back, Subhash. There are <span className="text-white font-black underline decoration-dark-orange decoration-2 underline-offset-8">4 title search requests</span> pending in the Asansol region.
            </p>
            <div className="flex flex-wrap gap-4">
               <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-dark-orange hover:text-white transition-all active:scale-95 shadow-xl shadow-black/40">
                  Open Desk <ChevronRight size={16} />
               </button>
               <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                  Update Availability
               </button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Main Queue */}
         <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
               <div className="flex justify-between items-center mb-10">
                  <div>
                     <h3 className="text-xl font-black text-slate-900 leading-none">Active Verifications</h3>
                     <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-3 ml-0.5">Title Search & Due Diligence Queue</p>
                  </div>
                  <div className="relative">
                     <button className="px-6 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase text-slate-500 hover:text-dark-orange transition-all">Filter: Highest TAT</button>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <TaskItem 
                    id="#9402" 
                    title="Heritage Residency II" 
                    type="Full Title Search" 
                    urgency="High" 
                    deadline="Tomorrow, 4PM" 
                    fee="₹4,500"
                    status="In-Progress"
                  />
                  <TaskItem 
                    id="#9418" 
                    title="B-Type Bungalow Block A" 
                    type="Vastu Audit" 
                    urgency="Standard" 
                    deadline="18 Oct, 2024" 
                    fee="₹2,200"
                    status="New Request"
                    isNew
                  />
                  <TaskItem 
                    id="#9388" 
                    title="Greenwood Gardenia" 
                    type="Agreement Drafting" 
                    urgency="Low" 
                    deadline="Closed" 
                    fee="₹3,500"
                    status="Completed"
                  />
               </div>
            </div>
         </div>

         {/* Sidebar Hub */}
         <div className="lg:col-span-4 space-y-8">
            {/* Earnings Snippet */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group/earn">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                  <TrendingUp size={80} className="text-green-600" />
               </div>
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-8">Payout Dashboard</h3>
               <div className="space-y-6">
                  <div>
                     <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2">Unbilled Amount</p>
                     <p className="text-4xl font-black text-slate-900">₹14,250</p>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-3/4 shadow-[0_0_10px_#22c55e]"></div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-none">Next Payout: <span className="text-slate-900">Fri, 15 Oct</span></p>
                     <button className="text-[9px] font-black uppercase text-dark-orange hover:underline">View Ledger</button>
                  </div>
               </div>
            </div>

            {/* Performance */}
            <div className="bg-[#0F172A] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group/perf">
               <div className="absolute inset-0 bg-gradient-to-br from-dark-orange/10 to-transparent"></div>
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-8 text-white/40">Expert Performance</h3>
               <div className="space-y-8 relative z-10">
                  <ProgressItem label="Client Satisfaction" value="98%" icon={<UserCheck size={16} />} />
                  <ProgressItem label="TAT Adherence" value="94%" icon={<Clock size={16} />} />
                  <ProgressItem label="Drafting Quality" value="100%" icon={<FileText size={16} />} />
               </div>
               <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/5 text-[9px] font-medium leading-relaxed italic text-slate-400">
                  "Maintain 90%+ TAT to stay in Tier 1 and access premium project consultancy."
               </div>
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB COMPONENTS ---

function TaskItem({ id, title, type, urgency, deadline, fee, status, isNew }) {
  return (
    <div className={`p-6 rounded-[2rem] border transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 group ${
       isNew ? 'border-orange-100 bg-orange-50/20 shadow-xl shadow-orange-100/30' : 'bg-slate-50/50 hover:bg-white border-slate-100 hover:border-slate-200 hover:shadow-xl'
    }`}>
       <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-dark-orange transition-all shadow-sm">
          <Scale size={24} />
       </div>
       <div className="flex-1 min-w-0 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
             <h4 className="text-[14px] font-black text-slate-800 uppercase tracking-tight truncate leading-none">{title}</h4>
             <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{id}</p>
          </div>
          <p className="text-[10px] font-bold text-slate-400 flex items-center justify-center sm:justify-start gap-1 uppercase tracking-widest">
             {type} • <span className={urgency === 'High' ? 'text-red-500' : 'text-slate-500'}>{urgency} Priority</span>
          </p>
       </div>
       <div className="text-center sm:text-right flex items-center gap-6">
          <div>
             <p className="text-[13px] font-black text-slate-900 leading-none">{fee}</p>
             <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">Base Fee</p>
          </div>
          <div className="hidden md:block">
             <p className="text-[13px] font-black text-dark-orange leading-none">{deadline}</p>
             <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">Deadline</p>
          </div>
          <span className={`px-3 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest ${
             status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-white text-slate-500 shadow-sm border border-slate-100'
          }`}>{status}</span>
       </div>
    </div>
  );
}

function ProgressItem({ label, value, icon }) {
  return (
    <div className="space-y-3 group">
       <div className="flex justify-between items-center px-1">
          <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
             {icon}
             <span className="text-[10px] uppercase font-black tracking-widest">{label}</span>
          </div>
          <span className="text-[10px] font-black text-dark-orange">{value}</span>
       </div>
       <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-slate-400 group-hover:bg-dark-orange transition-all duration-700" style={{ width: value }}></div>
       </div>
    </div>
  );
}
