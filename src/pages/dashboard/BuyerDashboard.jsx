import React from "react";
import DashboardLayout from "./DashboardLayout";
import { 
  Heart, 
  Search, 
  MapPin, 
  Star, 
  Bell, 
  Map, 
  ChevronRight,
  TrendingDown,
  Clock,
  LayoutGrid
} from "lucide-react";

export default function BuyerDashboard() {
  return (
    <DashboardLayout role="buyer" userName="Aman Verma">
      {/* Search Header */}
      <div className="bg-white rounded-[2.5rem] p-10 mb-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -ml-20 -mt-20"></div>
         <div className="relative z-10 flex-1">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-dark-orange mb-4">Market Watch</h2>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-none mb-4">
               Looking for <span className="text-dark-orange underline decoration-orange-200 decoration-8 underline-offset-4">3BHK in Durgapur?</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium mb-8">12 new verified listings match your criteria since yesterday.</p>
            <div className="flex flex-wrap gap-4">
               <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200">
                  <Search size={14} /> Refine Search
               </button>
               <button className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:border-dark-orange hover:text-dark-orange transition-all">
                  <Bell size={14} /> Saved Alerts (2)
               </button>
            </div>
         </div>
         <div className="md:w-1/3 flex justify-center relative">
            <div className="w-48 h-48 rounded-[3rem] bg-orange-100/50 flex flex-col items-center justify-center p-8 text-center rotate-3 shadow-inner border border-white">
               <Map size={48} className="text-dark-orange mb-4" />
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Heat Map Rank</p>
               <p className="text-xl font-black text-slate-900 leading-none mt-1">Tier 1 Elite</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Watchlist Section */}
         <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
               <div className="flex justify-between items-center mb-8">
                  <div>
                     <h3 className="text-xl font-black text-slate-900 leading-none">Your Watchlist</h3>
                     <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-2">Saved with love</p>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-dark-orange transition-all">
                     <LayoutGrid size={18} />
                  </button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PropertyCard 
                    title="Park View Residencies" 
                    location="City Center" 
                    price="₹85.0 L" 
                    verified 
                    image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop"
                  />
                  <PropertyCard 
                    title="Greenwood Gardenia" 
                    location="Bidhannagar" 
                    price="₹62.0 L" 
                    image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop"
                  />
               </div>
            </div>

            {/* Price Trends */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-dark-orange/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                     <TrendingDown size={20} className="text-dark-orange" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-widest">Neighborhood Price Trends</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <TrendStat label="City Center" trend="-2.4%" status="Buying Zone" />
                  <TrendStat label="Bidhannagar" trend="+1.2%" status="Hold Zone" />
                  <TrendStat label="Benachity" trend="-0.8%" status="Wait Zone" />
               </div>
            </div>
         </div>

         {/* Buyer Sidebar */}
         <div className="lg:col-span-4 space-y-8">
            {/* Suggested For You */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-2">
                  <Star size={18} className="text-dark-orange fill-dark-orange" /> Bhaiya's Top Picks
               </h3>
               <div className="space-y-6">
                  <CompactProperty name="RERA Approved 2BHK" price="₹42.5 L" image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop" />
                  <CompactProperty name="Luxury Duplex" price="₹1.4 Cr" image="https://images.unsplash.com/photo-1600585154340-be6199f7a096?q=80&w=2670&auto=format&fit=crop" />
                  <CompactProperty name="Commercial Spot" price="₹95.0 L" image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" />
               </div>
               <button className="w-full mt-10 py-4 rounded-xl bg-orange-50 text-dark-orange text-[10px] font-black uppercase tracking-widest hover:bg-dark-orange hover:text-white transition-all">
                  Show More Recommendations
               </button>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-2">
                  <Clock size={16} className="text-slate-400" /> Recent Activity
               </h3>
               <div className="space-y-4">
                  <ActivityItem text="You viewed 'Skyline Apartments'" time="10m ago" />
                  <ActivityItem text="Price dropped on 'Park View'" time="2h ago" important />
                  <ActivityItem text="Site visit scheduled - Saturday" time="5h ago" />
               </div>
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB COMPONENTS ---

function PropertyCard({ title, location, price, image, verified }) {
  return (
    <div className="group cursor-pointer">
       <div className="relative h-48 rounded-[2rem] overflow-hidden mb-4 shadow-lg border border-white">
          <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
          <div className="absolute top-4 right-4 group-hover:scale-110 transition-all">
             <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                <Heart size={18} />
             </div>
          </div>
          {verified && (
             <div className="absolute top-4 left-4 bg-dark-orange text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
                Verified Listing
             </div>
          )}
       </div>
       <div className="px-2">
          <h4 className="text-base font-black text-slate-900 group-hover:text-dark-orange transition-colors">{title}</h4>
          <div className="flex justify-between items-center mt-1">
             <p className="text-[11px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wider">
                <MapPin size={10} /> {location}
             </p>
             <p className="text-sm font-black text-slate-900">{price}</p>
          </div>
       </div>
    </div>
  );
}

function TrendStat({ label, trend, status }) {
  const isDown = trend.startsWith('-');
  return (
    <div className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{label}</p>
       <div className="flex items-center gap-2 mb-2">
          <span className={`text-xl font-black ${isDown ? 'text-dark-orange' : 'text-green-500'}`}>{trend}</span>
          <div className={`w-2 h-2 rounded-full ${isDown ? 'bg-dark-orange shadow-[0_0_10px_orange]' : 'bg-green-500 shadow-[0_0_10px_green]'}`}></div>
       </div>
       <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{status}</p>
    </div>
  );
}

function CompactProperty({ name, price, image }) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
       <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-sm">
          <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
       </div>
       <div className="flex-1 min-w-0">
          <h5 className="text-[11px] font-black text-slate-800 truncate leading-none uppercase tracking-tight">{name}</h5>
          <p className="text-[10px] font-black text-dark-orange mt-1">{price}</p>
       </div>
       <ChevronRight size={14} className="text-slate-200 group-hover:text-dark-orange transition-all" />
    </div>
  );
}

function ActivityItem({ text, time, important }) {
  return (
    <div className="flex gap-3">
       <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${important ? 'bg-dark-orange shadow-[0_0_5px_orange]' : 'bg-slate-200'}`}></div>
       <div className="flex-1 min-w-0">
          <p className={`text-[11px] font-bold leading-[1.3] ${important ? 'text-slate-900' : 'text-slate-500'}`}>{text}</p>
          <p className="text-[9px] font-bold text-slate-300 mt-1 uppercase tracking-widest">{time}</p>
       </div>
    </div>
  );
}
