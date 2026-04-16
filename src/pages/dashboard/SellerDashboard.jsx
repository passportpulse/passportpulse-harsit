import React from "react";
import DashboardLayout from "./DashboardLayout";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Home, 
  ChevronRight, 
  Zap,
  ArrowUpRight,
  Clock,
  Sparkles
} from "lucide-react";

export default function SellerDashboard() {
  return (
    <DashboardLayout role="seller" userName="Ravi Shankar">
      {/* Welcome Banner */}
      <div className="relative bg-slate-900 rounded-[2.5rem] p-10 mb-8 overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-80 h-80 bg-dark-orange/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
         <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6 font-black text-[10px] uppercase tracking-widest text-dark-orange">
               <Zap size={14} className="fill-dark-orange" /> Seller Growth Suite
            </div>
            <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-none uppercase">
               Ready to <span className="text-dark-orange">Sell</span>, Ravi?
            </h1>
            <p className="text-slate-400 text-sm lg:text-base font-medium max-w-lg mb-8 leading-relaxed">
               Your properties are performing <span className="text-white font-black underline decoration-dark-orange underline-offset-8 decoration-2">24% better</span> than the neighborhood average.
            </p>
            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-dark-orange hover:text-white transition-all active:scale-95 shadow-xl shadow-black/20 group">
               List New Property <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         <StatCard icon={<Eye className="text-blue-500" />} label="Total Views" value="2,845" trend="+12%" color="blue" />
         <StatCard icon={<Users className="text-green-500" />} label="Total Leads" value="48" trend="+8%" color="green" />
         <StatCard icon={<TrendingUp className="text-orange-500" />} label="Avg. Response" value="1.2 hrs" trend="-15ms" color="orange" />
         <StatCard icon={<Home className="text-purple-500" />} label="Active Listings" value="3" sub="2 In-Review" color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Main List */}
         <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
               <div className="flex justify-between items-center mb-8">
                  <div>
                     <h3 className="text-xl font-black text-slate-900 leading-none">Your active listings</h3>
                     <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-2 ml-0.5">Real-time performance</p>
                  </div>
                  <button className="text-xs font-black text-dark-orange uppercase tracking-widest hover:underline transition-all">View All</button>
               </div>
               
               <div className="space-y-4">
                  <ListingItem 
                    title="B-Type Bungalow" 
                    location="City Center, Durgapur" 
                    price="₹1.25 Cr" 
                    views="1.2k" 
                    leads="14" 
                    status="Live" 
                    image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop"
                  />
                  <ListingItem 
                    title="Luxury 3BHK Apartment" 
                    location="Ambuja, City Center" 
                    price="₹68.5 L" 
                    views="850" 
                    leads="9" 
                    status="Expiring" 
                    image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
                  />
               </div>
            </div>
         </div>

         {/* Sidebar Widgets */}
         <div className="lg:col-span-4 space-y-8">
            {/* Boost Section */}
            <div className="bg-orange-50 rounded-[2.5rem] p-8 border border-orange-100 shadow-xl shadow-orange-100/30 overflow-hidden relative">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-dark-orange/10 rounded-full blur-2xl"></div>
               <div className="w-12 h-12 rounded-2xl bg-dark-orange text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                  <Sparkles size={24} className="fill-white" />
               </div>
               <h3 className="text-lg font-black text-slate-900 leading-tight mb-2">Sell 5x Faster with Features</h3>
               <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">Your account has <span className="text-dark-orange font-black">1 FREE Feature Boost</span> left. Use it on your top listing now.</p>
               <button className="w-full py-4 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200">
                  Activate Boost
               </button>
            </div>

            {/* Recents */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-2">
                  <Clock size={16} className="text-dark-orange" /> Recent Inquiries
               </h3>
               <div className="space-y-6">
                  <InquiryCard name="Amitava Ghosh" time="2 mins ago" type="Callback" />
                  <InquiryCard name="Siddharth Roy" time="15 mins ago" type="Site Visit" />
                  <InquiryCard name="Priya Banerjee" time="1 hr ago" type="Whatsapp" />
               </div>
               <button className="w-full mt-8 py-3 rounded-xl border-2 border-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest hover:bg-slate-50 hover:text-slate-900 transition-all">
                  Go to Leads Hub
               </button>
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB COMPONENTS ---

function StatCard({ icon, label, value, trend, sub, color }) {
  const colorBgs = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    orange: "bg-orange-50",
    purple: "bg-purple-50"
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/30">
       <div className="flex justify-between items-start mb-4">
          <div className={`w-12 h-12 rounded-2xl ${colorBgs[color]} flex items-center justify-center`}>
             {icon}
          </div>
          <div className="flex items-center gap-1 text-green-600 font-black text-[10px] bg-green-50 px-2 py-0.5 rounded-full">
             <ArrowUpRight size={10} /> {trend}
          </div>
       </div>
       <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
          <div className="flex items-baseline gap-2">
             <span className="text-2xl font-black text-slate-900">{value}</span>
             {sub && <span className="text-[10px] font-bold text-slate-400">{sub}</span>}
          </div>
       </div>
    </div>
  );
}

function ListingItem({ title, location, price, views, leads, status, image }) {
  return (
    <div className="p-4 rounded-[1.5rem] bg-slate-50 hover:bg-white border hover:border-slate-200 hover:shadow-xl transition-all duration-500 flex items-center gap-6 group">
       <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
       </div>
       <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
             <h4 className="text-[15px] font-black text-slate-900 truncate tracking-tight">{title}</h4>
             <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${
                status === "Live" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600 animate-pulse"
             }`}>{status}</span>
          </div>
          <p className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
             {location}
          </p>
          
          <div className="flex items-center gap-6 mt-4">
             <div className="flex items-center gap-2">
                <p className="text-[10px] font-black text-dark-orange">{price}</p>
             </div>
             <div className="flex items-center gap-4 border-l border-slate-200 pl-4">
                <div className="text-center">
                   <p className="text-[14px] font-black text-slate-800 leading-none">{views}</p>
                   <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">Views</p>
                </div>
                <div className="text-center">
                   <p className="text-[14px] font-black text-slate-800 leading-none">{leads}</p>
                   <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest mt-1">Leads</p>
                </div>
             </div>
          </div>
       </div>
       <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-dark-orange hover:border-dark-orange transition-all shadow-sm">
          <ChevronRight size={18} />
       </button>
    </div>
  );
}

function InquiryCard({ name, time, type }) {
  return (
    <div className="flex items-center justify-between group">
       <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-black text-[10px]">
             {name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
             <h5 className="text-[11px] font-black text-slate-800 leading-none">{name}</h5>
             <p className="text-[9px] font-bold text-slate-400 mt-1">{time} • <span className="text-dark-orange">{type}</span></p>
          </div>
       </div>
       <button className="opacity-0 group-hover:opacity-100 text-dark-orange hover:scale-110 transition-all">
          <ChevronRight size={14} strokeWidth={3} />
       </button>
    </div>
  );
}
