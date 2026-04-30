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
  LayoutGrid,
  MessageSquare,
  Home,
  CheckCircle,
  FileText,
  Filter,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Zap,
  MoreVertical,
  Calendar,
  X,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Building,
  AlertCircle,
  Plus
} from "lucide-react";
import NotificationSettings from "./NotificationSettings";

export default function BuyerDashboard({ subPath }) {
  if (subPath === "watchlist") return <WatchlistSubPage />;
  if (subPath === "searches") return <SearchHistoryPage />;
  if (subPath === "visits") return <SiteVisitsPage />;
  if (subPath === "messages") return <MessagesPage />;

  return (
    <DashboardLayout role="buyer" userName="Aman Verma">
      {/* Search Header */}
      <div className="bg-white rounded-[3rem] p-8 lg:p-14 mb-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] -ml-40 -mt-20 group-hover:bg-orange-100 transition-all duration-1000"></div>
         <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-100/50 border border-dark-orange/10 mb-6">
               <Zap size={14} className="text-dark-orange" />
               <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-dark-orange">Market Fresh</h2>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6">
               Dreaming of a <br /> <span className="text-dark-orange underline decoration-orange-200 decoration-8 underline-offset-4 font-black">Modern Home?</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium mb-10 max-w-lg leading-relaxed">We found <span className="text-slate-900 font-extrabold">12 new verified listings</span> since your last visit yesterday.</p>
            <div className="flex flex-wrap gap-4">
               <button className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-2xl shadow-slate-300">
                  <Search size={18} /> Continue Searching
               </button>
               <button className="flex items-center gap-2 px-8 py-5 rounded-2xl border-2 border-slate-100 text-slate-500 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:border-dark-orange hover:text-dark-orange transition-all">
                  <Bell size={18} /> Active Alerts
               </button>
            </div>
         </div>
         <div className="md:w-1/3 flex justify-center relative">
            <div className="w-56 h-56 rounded-[4rem] bg-orange-100/30 flex flex-col items-center justify-center p-8 text-center rotate-3 shadow-inner border border-white group-hover:rotate-0 transition-all duration-700">
               <Map size={64} className="text-dark-orange mb-4 animate-bounce" />
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Market Rank</p>
               <p className="text-xl font-black text-slate-900 leading-none mt-1">Tier 1 Buyer</p>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         <MetricBox label="Saved Items" value="12" icon={<Heart size={20} />} active />
         <MetricBox label="Site Visits" value="02" icon={<MapPin size={20} />} />
         <MetricBox label="Pending Docs" value="01" icon={<FileText size={20} />} />
         <MetricBox label="Bhaiya Coins" value="850" icon={<Zap size={20} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
         <div className="lg:col-span-8">
            <NotificationSettings />
         </div>
         <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden h-full flex flex-col justify-between">
               <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
               <div>
                  <h3 className="text-lg font-black uppercase tracking-widest text-orange-400 mb-8">Bhaiya Tips</h3>
                  <div className="space-y-6">
                     <p className="text-sm font-medium text-slate-400 leading-relaxed">Properties in <b>New Town</b> are selling 25% faster this week. Book your site visit early!</p>
                     <div className="h-px bg-white/10"></div>
                     <p className="text-sm font-medium text-slate-400 leading-relaxed">Your <b>Tier 1 Profile</b> gives you priority access to pre-launch pricing.</p>
               </div>
               </div>
               <button className="w-full py-5 flex items-center justify-center gap-3 rounded-2xl bg-white text-slate-900 text-[11px] font-black uppercase tracking-widest mt-12 hover:scale-105 transition-all active:scale-95 shadow-2xl">
                  Talk to Expert <ArrowRight size={18} />
               </button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
            <div className="flex items-center justify-between mb-10">
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Recent Activity</h3>
               <button className="text-[10px] font-black text-dark-orange uppercase tracking-widest">Clear History</button>
            </div>
            <div className="space-y-6">
               <ActivityItem icon={<Search className="text-blue-500" />} title="Searched for '3BHK in New Town'" time="15m ago" />
               <ActivityItem icon={<Heart className="text-red-500" />} title="Saved 'Emaar Grand Villa'" time="2h ago" />
               <ActivityItem icon={<MapPin className="text-orange-500" />} title="Scheduled visit for 'Skyline'" time="1d ago" />
               <ActivityItem icon={<AlertCircle className="text-purple-500" />} title="Price Drop alert on Watchlist" time="2d ago" />
            </div>
         </div>
         <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden h-full flex flex-col justify-between">
               <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
               <div>
                  <h3 className="text-lg font-black uppercase tracking-widest text-orange-400 mb-8">Bhaiya Tips</h3>
                  <div className="space-y-6">
                     <p className="text-sm font-medium text-slate-400 leading-relaxed">Properties in <b>New Town</b> are selling 25% faster this week. Book your site visit early!</p>
                     <div className="h-px bg-white/10"></div>
                     <p className="text-sm font-medium text-slate-400 leading-relaxed">Your <b>Tier 1 Profile</b> gives you priority access to pre-launch pricing.</p>
               </div>
               </div>
               <button className="w-full py-5 flex items-center justify-center gap-3 rounded-2xl bg-white text-slate-900 text-[11px] font-black uppercase tracking-widest mt-12 hover:scale-105 transition-all active:scale-95 shadow-2xl">
                  Talk to Expert <ArrowRight size={18} />
               </button>
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB PAGES ---

function WatchlistSubPage() {
  return (
    <DashboardLayout role="buyer" userName="Aman Verma">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
             <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase font-poppins">Saved <span className="text-dark-orange">Collection</span></h2>
             <p className="text-slate-500 font-medium text-sm mt-2">Track price history and schedule visits for your favorited properties.</p>
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest hover:border-dark-orange hover:text-dark-orange transition-all">
                <LayoutGrid size={18} /> View As Grid
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BuyerPropertyCard 
             title="Emaar Grand Lux" location="New Town, Kolkata" price="₹95.0 L" 
             image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" 
             verified trending alert="₹2.0 L Drop!" 
          />
          <BuyerPropertyCard 
             title="The Urban Oasis" location="Salt Lake City" price="₹1.4 Cr" 
             image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" 
          />
          <BuyerPropertyCard 
             title="Skyline Regency" location="Bidhannagar" price="₹65.8 L" 
             image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop" 
             verified 
          />
       </div>
    </DashboardLayout>
  );
}

function SearchHistoryPage() {
  return (
    <DashboardLayout role="buyer" userName="Aman Verma">
       <div className="max-w-4xl">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4 font-poppins">Search <span className="text-dark-orange">Vault</span></h2>
          <p className="text-slate-500 font-medium mb-12">Resume your previous property hunts and manage automated alerts.</p>
          
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
             <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Recent Queries</h3>
                <Filter size={18} className="text-slate-400" />
             </div>
             <div className="p-4 lg:p-10 space-y-4">
                <SearchQueryRow query="3BHK Apartments in Durgapur" results="142" date="Today, 10:45 AM" alert active />
                <SearchQueryRow query="Villas under 1.5Cr in Salt Lake" results="12" date="Yesterday" />
                <SearchQueryRow query="Commercial shops for lease in Kolkata" results="42" date="2 days ago" />
                <SearchQueryRow query="Independent House in Siliguri" results="08" date="5 days ago" />
             </div>
          </div>
       </div>
    </DashboardLayout>
  );
}

function SiteVisitsPage() {
  return (
    <DashboardLayout role="buyer" userName="Aman Verma">
       <div className="mb-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4 font-poppins">Site Visit <span className="text-dark-orange">Agenda</span></h2>
          <p className="text-slate-500 font-medium ml-1">Coordinate with builders and experts for physical property inspections.</p>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VisitScheduleCard 
             property="Emaar Grand Lux" builder="Emaar Properties" site="Plot #42, New Town"
             date="Sat, 22nd Oct" time="11:30 AM" status="Confirmed" 
          />
          <VisitScheduleCard 
             property="Skyline Regency" builder="Skyline Dev" site="Bidhannagar East"
             date="Sun, 23rd Oct" time="04:00 PM" status="Pending Builder" 
          />
       </div>

       <div className="mt-16 bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-orange/10 to-transparent"></div>
          <div className="relative z-10 max-w-xl">
             <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-4 italic">Need an <span className="text-dark-orange">Expert</span> to accompany you?</h3>
             <p className="text-slate-400 font-medium leading-relaxed mb-8">Unlock professional site guidance. Our expert will check for structural defects and legal compliance on your behalf.</p>
             <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-dark-orange text-white text-[11px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20 active:scale-95 transition-all">
                Request Expert Escort <ShieldCheck size={18} />
             </button>
          </div>
          <div className="relative z-10 w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center p-8 bg-white/5 transition-transform duration-700 group-hover:rotate-12">
             <User size={80} className="text-dark-orange" />
          </div>
       </div>
    </DashboardLayout>
  );
}

function MessagesPage() {
  return (
    <DashboardLayout role="buyer" userName="Aman Verma">
       <div className="flex flex-col lg:flex-row h-[750px] bg-white rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden">
          {/* Chat List */}
          <div className="w-full lg:w-96 border-r border-slate-100 flex flex-col">
             <div className="p-8 border-b border-slate-50">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6">Concierge</h3>
                <div className="relative">
                   <input type="text" placeholder="Search chats..." className="w-full h-12 bg-slate-50 border border-slate-100 rounded-xl px-4 pl-10 text-xs font-bold" />
                   <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
             </div>
             <div className="flex-1 overflow-y-auto p-4 space-y-2">
                <ChatItem name="Developer: Emaar" msg="Your site visit is booked." time="10m" active />
                <ChatItem name="Expert: Adv. Subhash" msg="The legal audit is ready." time="2h" />
                <ChatItem name="Bhaiya Support" msg="Welcome to the Portal!" time="1d" />
             </div>
          </div>
          {/* Chat Content */}
          <div className="hidden lg:flex flex-1 flex-col bg-slate-50/20">
             <div className="p-8 border-b border-slate-100 bg-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                      <Building size={20} />
                   </div>
                   <div>
                      <h4 className="font-black text-slate-900 uppercase text-base">Emaar Properties</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Site Desk</span>
                      </div>
                   </div>
                </div>
                <div className="flex gap-4">
                   <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-500"><Phone size={20} /></button>
                   <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-500"><MoreVertical size={20} /></button>
                </div>
             </div>
             <div className="flex-1 p-8 space-y-6 overflow-y-auto">
                <ChatBubble text="Hello Aman! Your site visit for Emaar Grand Lux has been confirmed for Saturday at 11:30 AM." time="Just now" sender />
                <ChatBubble text="Thank you! Will the project manager be available?" time="2h ago" />
             </div>
             <div className="p-8 bg-white border-t border-slate-100 h-24 flex items-center gap-6">
                <button className="text-slate-400"><Plus size={24} /></button>
                <input type="text" placeholder="Type your message..." className="flex-1 bg-transparent border-none outline-none font-bold text-sm" />
                <button className="px-6 py-3 rounded-xl bg-dark-orange text-white text-[10px] font-black uppercase tracking-widest">Send</button>
             </div>
          </div>
       </div>
    </DashboardLayout>
  );
}

// --- HELPERS ---

function MetricBox({ label, value, icon, active }) {
  return (
    <div className={`p-8 rounded-[2.5rem] border shadow-sm transition-all group cursor-pointer ${
       active ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-900 border-slate-100 hover:border-dark-orange'
    }`}>
       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all ${
          active ? 'bg-white/10 text-dark-orange group-hover:scale-110' : 'bg-slate-50 text-slate-400 group-hover:bg-dark-orange/10 group-hover:text-dark-orange'
       }`}>
          {icon}
       </div>
       <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${active ? 'text-slate-400' : 'text-slate-400'}`}>{label}</p>
       <h4 className="text-3xl font-black">{value}</h4>
    </div>
  );
}

function ActivityItem({ icon, title, time }) {
  return (
    <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-dark-orange transition-all cursor-pointer group">
       <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
             {icon}
          </div>
          <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{title}</span>
       </div>
       <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{time}</span>
    </div>
  );
}

function BuyerPropertyCard({ title, location, price, image, verified, trending, alert }) {
  return (
    <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
       <div className="relative h-64 overflow-hidden">
          <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
          <div className="absolute top-4 right-4 flex gap-2">
             <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 hover:scale-100 transition-all cursor-pointer">
                <Heart size={20} className="fill-white" />
             </div>
          </div>
          {alert && (
             <div className="absolute bottom-4 left-4 bg-red-600 text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl animate-bounce">
                {alert}
             </div>
          )}
          {verified && (
             <div className="absolute top-4 left-4 bg-dark-orange text-white px-6 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/30">
                Verified Bhaiya Listing
             </div>
          )}
       </div>
       <div className="p-8">
          <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{title}</h4>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1 mb-8">
             <MapPin size={10} /> {location}
          </p>
          <div className="flex items-center justify-between py-6 border-t border-slate-100">
             <div className="text-2xl font-black text-slate-900">{price}</div>
             <button className="px-6 py-3 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">Tour Case</button>
          </div>
       </div>
    </div>
  );
}

function SearchQueryRow({ query, results, date, alert, active }) {
  return (
    <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dark-orange transition-all cursor-pointer group">
       <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm text-slate-400 group-hover:text-dark-orange transition-colors">
             <Search size={24} />
          </div>
          <div>
             <h4 className="text-base font-black text-slate-900 uppercase tracking-tight mb-1 group-hover:text-dark-orange transition-colors">{query}</h4>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{results} Matching Properties Found</p>
          </div>
       </div>
       <div className="flex items-center gap-8">
          <div className="hidden sm:block text-right">
             <p className="text-[10px] font-black text-slate-300 uppercase leading-none mb-1">Search Date</p>
             <p className="text-[11px] font-black text-slate-800 uppercase">{date}</p>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${active ? 'bg-dark-orange text-white shadow-xl shadow-orange-500/30' : 'bg-white border border-slate-200 text-slate-400'}`}>
             <Bell size={18} />
          </div>
       </div>
    </div>
  );
}

function VisitScheduleCard({ property, builder, site, date, time, status }) {
  return (
    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl group hover:border-dark-orange transition-all">
       <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                <Home size={22} />
             </div>
             <div>
                <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase leading-none">{property}</h4>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Builder: {builder}</p>
             </div>
          </div>
          <div className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest ${
             status === 'Confirmed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-dark-orange animate-pulse'
          }`}>{status}</div>
       </div>
       <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
             <Calendar className="text-dark-orange" />
             <div className="text-left">
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Date & Time</p>
                <p className="text-sm font-black text-slate-900">{date} • {time}</p>
             </div>
          </div>
          <div className="h-px w-full md:w-px md:h-8 bg-slate-200"></div>
          <div className="flex items-center gap-4">
             <MapPin className="text-dark-orange" />
             <div className="text-left">
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Observation Site</p>
                <p className="text-sm font-black text-slate-900">{site}</p>
             </div>
          </div>
       </div>
       <div className="flex gap-4 mt-10">
          <button className="flex-1 py-4 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">Directions</button>
          <button className="flex-1 py-4 rounded-2xl border-2 border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:border-red-100 hover:text-red-500 transition-all">Cancel Visit</button>
       </div>
    </div>
  );
}

function ChatItem({ name, msg, time, active }) {
  return (
    <div className={`p-6 rounded-[2rem] flex items-center justify-between transition-all cursor-pointer ${
       active ? 'bg-orange-600 shadow-xl shadow-orange-500/20 text-white' : 'bg-white hover:bg-slate-50'
    }`}>
       <div className="flex items-center gap-4 max-w-[70%]">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${active ? 'bg-white/20' : 'bg-slate-100 text-slate-400'}`}>
             <User size={20} />
          </div>
          <div className="min-w-0">
             <h4 className="text-sm font-black uppercase tracking-tight leading-none mb-1 truncate">{name}</h4>
             <p className={`text-[11px] font-medium truncate ${active ? 'text-white/70' : 'text-slate-400'}`}>{msg}</p>
          </div>
       </div>
       <p className={`text-[10px] font-black uppercase tracking-widest opacity-40`}>{time}</p>
    </div>
  );
}

function ChatBubble({ text, time, sender }) {
  return (
    <div className={`flex ${sender ? 'justify-start' : 'justify-end'}`}>
       <div className={`max-w-md p-6 rounded-[2rem] shadow-sm ${
          sender ? 'bg-white border border-slate-100 rounded-bl-none' : 'bg-slate-900 text-white rounded-br-none shadow-xl'
       }`}>
          <p className="text-sm font-medium leading-relaxed">{text}</p>
          <p className={`text-[9px] font-black uppercase tracking-widest mt-2 ${sender ? 'text-slate-300' : 'text-white/40'}`}>{time}</p>
       </div>
    </div>
  );
}
