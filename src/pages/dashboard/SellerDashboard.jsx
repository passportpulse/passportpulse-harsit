import React from "react";
import DashboardLayout from "./DashboardLayout";
import { 
  Building, 
  Users, 
  Zap, 
  FileText, 
  ChevronRight, 
  Plus, 
  Star,
  Clock,
  TrendingUp,
  Search,
  LayoutGrid,
  Eye,
  Home,
  MessageSquare,
  Sparkles,
  ArrowRight,
  MoreVertical,
  ShieldCheck,
  Target,
  Download,
  Trash2,
  Calendar,
  User,
  Phone,
  Mail,
  Award
} from "lucide-react";
import StarSellerSection from "./StarSellerSection";
import VerificationChecklist from "./VerificationChecklist";
import AdminIntegrityHub from "./AdminIntegrityHub";

export default function SellerDashboard({ subPath }) {
  if (subPath === "listings") return <ListingsPage />;
  if (subPath === "leads") return <LeadsPage />;
  if (subPath === "boosts") return <BoostsPage />;
  if (subPath === "docs") return <DocumentsPage />;
  if (subPath === "audit") return <VerificationChecklist />;
  if (subPath === "integrity") return <AdminIntegrityHub />;

  return (
    <DashboardLayout role="seller" userName="Rajesh Kumar">
      {/* Welcome Banner */}
      <div className="relative bg-slate-900 rounded-[3rem] p-10 lg:p-14 mb-8 overflow-hidden shadow-2xl group">
         <div className="absolute top-0 right-0 w-80 h-80 bg-dark-orange/20 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-dark-orange/30 transition-all duration-1000"></div>
         <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div className="max-w-xl">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                  <Sparkles size={14} className="text-dark-orange" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-orange">Market Performance</span>
               </div>
               <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter uppercase mb-6">Empire <span className="text-dark-orange">Estate</span></h2>
               <p className="text-slate-400 text-lg font-medium leading-relaxed">You have <span className="text-white font-black underline underline-offset-8 decoration-4 decoration-dark-orange">12 active listings</span> gaining maximum traction in West Bengal.</p>
            </div>
            <div className="flex gap-4">
               <button className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-dark-orange text-white text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-orange-500/20">
                  <Plus size={18} /> List Property
               </button>
               <button className="h-16 w-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                  <TrendingUp size={24} />
               </button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         <MetricCard label="Total Inquiries" value="482" icon={<Users className="text-orange-400" />} trend="+12% Since listing" />
         <MetricCard label="Average Views" value="2,140" icon={<Eye className="text-blue-400" />} trend="Across all properties" />
         <MetricCard label="Ad Reach" value="84%" icon={<Target className="text-green-500" />} trend="High visibility" />
         <MetricCard label="Bhaiya Rank" value="#12" icon={<Star className="text-dark-orange" />} trend="Top performing owner" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
         <div className="lg:col-span-2">
            <StarSellerSection />
         </div>
         <div className="lg:col-span-1 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 border-dashed">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-8">Quick Actions</h3>
            <div className="space-y-4">
               <QuickTask icon={<Zap />} title="Boost Listing" color="orange" path="/dashboard/boosts" />
               <QuickTask icon={<FileText />} title="Check Docs" color="slate" path="/dashboard/docs" />
               <QuickTask icon={<ShieldCheck />} title="Verify Property" color="green" path="/dashboard/audit" />
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Recent Leads</h3>
               <button className="text-[10px] font-black uppercase tracking-widest text-dark-orange hover:gap-4 transition-all flex items-center gap-2">View All Pipeline <ArrowRight size={14} /></button>
            </div>
            <div className="space-y-4">
               <LeadItem name="Sandeep Roy" property="Skyline Flat #402" status="Interested" time="15m ago" />
               <LeadItem name="Amitava Ghosh" property="Luxury 3BHK Villa" status="Site Visit" time="2h ago" active />
               <LeadItem name="Priya Singh" property="Commercial Shop X" status="Offer Sent" time="1d ago" />
            </div>
         </div>
         <div className="lg:col-span-1 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 border-dashed">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-8">Quick Actions</h3>
            <div className="space-y-4">
               <QuickTask icon={<TrendingUp />} title="Market Trends" color="orange" path="/dashboard/integrity" />
               <QuickTask icon={<Star />} title="Seller Status" color="slate" path="/dashboard" />
               <QuickTask icon={<Zap />} title="Instant Boost" color="green" path="/dashboard/boosts" />
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB PAGES ---

function ListingsPage() {
  return (
    <DashboardLayout role="seller" userName="Rajesh Kumar">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
             <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase font-poppins">Inventory <span className="text-dark-orange">Manager</span></h2>
             <p className="text-slate-500 font-medium text-sm mt-2">Update pricing, upload photos, and track search performance for your properties.</p>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
             <Plus size={18} /> Post New Property
          </button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DetailedListingCard title="Skyline Elegance • 3BHK" price="₹85.0 L" status="Live" views="1,240" leads={42} image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2500&auto=format&fit=crop" />
          <DetailedListingCard title="Regency Plaza • Store" price="₹42.5 L" status="Pending Review" views="124" leads={0} image="https://images.unsplash.com/photo-1460317442991-0ec239f33649?q=80&w=2670&auto=format&fit=crop" />
          <DetailedListingCard title="River Side Villa" price="₹1.2 Cr" status="Live" views="890" leads={18} image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop" />
       </div>
    </DashboardLayout>
  );
}

function LeadsPage() {
  return (
    <DashboardLayout role="seller" userName="Rajesh Kumar">
       <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase font-poppins">Buyer <span className="text-dark-orange">Leads</span></h2>
          <div className="flex gap-4">
             <TabBtn label="Active Leads" active />
             <TabBtn label="Connected" />
             <TabBtn label="Sold/Closed" />
          </div>
       </div>

       <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
          <div className="p-8 bg-slate-50/50 border-b border-slate-100">
             <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex gap-12">
                   <StatSummary label="New Inquiries" value="42" />
                   <StatSummary label="Avg Response" value="1.2h" />
                   <StatSummary label="Conversion" value="4.5%" />
                </div>
                <Search size={20} className="text-slate-400" />
             </div>
          </div>
          <div className="p-8 space-y-4">
             <BuyerLeadRow name="Vikram Adhikari" property="Skyline Elegance" status="Hot" budget="₹85 L" lastAct="15m ago" />
             <BuyerLeadRow name="Anjali Ray" property="River Side Villa" status="High Intent" budget="₹1.5 Cr" lastAct="2h ago" />
             <BuyerLeadRow name="Somnath Gupta" property="Skyline Elegance" status="Follow-up" budget="₹75 L" lastAct="1d ago" />
             <BuyerLeadRow name="Rahul Dev" property="River Side Villa" status="Site Visit" budget="₹1.2 Cr" lastAct="2d ago" />
          </div>
       </div>
    </DashboardLayout>
  );
}

function BoostsPage() {
  return (
    <DashboardLayout role="seller" userName="Rajesh Kumar">
       <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dark-orange/20 rounded-full blur-[140px] -mr-40 -mt-20 animate-pulse"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
             <Zap size={48} className="text-dark-orange mx-auto mb-8" />
             <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight italic">Hyper <span className="text-dark-orange">Boost</span></h2>
             <p className="text-slate-400 text-lg font-medium mb-12">Get up to <span className="text-white font-black">10x more visibility</span> with Bhaiya's premium placement tools. Dominate the search results today.</p>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BoostPlan title="Starter Pack" price="₹499" period="per week" desc="Stay in the top 5 search results for your local area." icon={<Zap className="text-blue-400" />} />
          <BoostPlan title="Elite Visibility" price="₹1,499" period="per month" desc="Homepage featured section + SMS alerts to 100+ matching buyers." icon={<Zap className="text-dark-orange" />} recommended />
          <BoostPlan title="Area Takeover" price="₹9,200" period="per project" desc="Full-scale marketing on Instagram/FB + Verified Platinum badge." icon={<Sparkles className="text-purple-400" />} />
       </div>
    </DashboardLayout>
  );
}

function DocumentsPage() {
  return (
    <DashboardLayout role="seller" userName="Rajesh Kumar">
       <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase font-poppins">Safe <span className="text-dark-orange">Vault</span></h2>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest shadow-xl">
             <Plus size={16} /> Upload Doc
          </button>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <DocumentFile name="Sale Deed" type="PDF" size="4.2MB" />
          <DocumentFile name="Property Photos" type="ZIP" size="145MB" />
          <DocumentFile name="Tax Receipt" type="Image" size="1.2MB" />
          <DocumentFile name="Owner ID" type="PDF" size="0.8MB" />
          <DocumentFile name="Utility Bill" type="PDF" size="2.1MB" />
          <DocumentFile name="Possession" type="Word" size="1.5MB" />
       </div>
    </DashboardLayout>
  );
}

// --- HELPERS ---

function MetricCard({ label, value, icon, trend }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all">
       <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
          {icon}
       </div>
       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
       <h4 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">{value}</h4>
       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{trend}</p>
    </div>
  );
}

function LeadItem({ name, property, status, time, active }) {
  return (
    <div className={`p-6 rounded-2xl border transition-all flex items-center justify-between cursor-pointer group ${
       active ? 'bg-orange-600 border-none shadow-xl shadow-orange-500/30 text-white' : 'bg-slate-50 border-slate-100'
    }`}>
       <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${active ? 'bg-white/20' : 'bg-white shadow-sm text-slate-400'}`}>
             <Users size={18} />
          </div>
          <div>
             <h4 className="font-black text-sm uppercase leading-none mb-1">{name}</h4>
             <p className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-white/70' : 'text-slate-400'}`}>{property}</p>
          </div>
       </div>
       <div className="text-right">
          <p className={`text-[9px] font-black uppercase tracking-widest ${active ? 'text-white' : 'text-dark-orange'}`}>{status}</p>
          <p className={`text-[9px] font-black uppercase tracking-widest opacity-40`}>{time}</p>
       </div>
    </div>
  );
}

function QuickTask({ icon, title, color, path }) {
  const navigate = useNavigate();
  const colorMap = {
     orange: "bg-orange-100 text-dark-orange",
     slate: "bg-slate-100 text-slate-900",
     green: "bg-green-100 text-green-600"
  }[color];
  return (
    <div 
      onClick={() => path && navigate(path)}
      className="flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 hover:border-dark-orange transition-all cursor-pointer group shadow-sm"
    >
       <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorMap} group-hover:scale-110 transition-transform`}>
             {icon}
          </div>
          <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{title}</span>
       </div>
       <ChevronRight size={16} className="text-slate-200 group-hover:text-dark-orange group-hover:translate-x-1 transition-all" />
    </div>
  );
}

function DetailedListingCard({ title, price, status, views, leads, image, urgent }) {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden group cursor-pointer">
       <div className="relative h-64 overflow-hidden">
          <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
          <div className="absolute top-4 left-4 flex gap-2">
             <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${status === 'Live' ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-orange-500 text-white'}`}>{status}</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
             {views} Impressions
          </div>
       </div>
       <div className="p-8">
          <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{title}</h4>
          <p className="text-dark-orange font-black text-2xl mb-8 leading-none px-1">{price}</p>
          <div className="flex gap-4 pt-6 border-t border-slate-50">
             <div className="flex-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Leads Gen</p>
                <p className="text-sm font-black text-slate-800 uppercase">{leads} Genuine</p>
             </div>
             <div className="flex-1 text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">In Map Rank</p>
                <p className="text-sm font-black text-slate-800 uppercase">#2 Area</p>
             </div>
          </div>
          <button className="w-full mt-8 py-4 rounded-2xl border-2 border-slate-100 text-slate-400 group-hover:border-dark-orange group-hover:text-dark-orange text-[10px] font-black uppercase tracking-widest transition-all">Edit Listing Specs</button>
       </div>
    </div>
  );
}

function BuyerLeadRow({ name, property, status, budget, lastAct }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-dark-orange transition-all flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer group">
       <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-dark-orange group-hover:text-white transition-all shadow-inner">
             <User size={24} />
          </div>
          <div>
             <h4 className="text-base font-black text-slate-900 uppercase leading-none mb-1">{name}</h4>
             <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Inquired for "{property}"</p>
          </div>
       </div>
       <div className="flex items-center gap-12">
          <div className="text-right hidden md:block">
             <p className="text-[9px] font-black text-slate-300 uppercase leading-none mb-1">Budget</p>
             <p className="text-base font-black text-slate-900">{budget}</p>
          </div>
          <div className="text-right flex items-center gap-6">
             <span className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest bg-orange-100 text-dark-orange group-hover:bg-dark-orange group-hover:text-white transition-all`}>{status}</span>
             <div className="text-right">
                <button className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-200">
                   <Phone size={16} />
                </button>
                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">{lastAct}</p>
             </div>
          </div>
       </div>
    </div>
  );
}

function BoostPlan({ title, price, period, desc, icon, recommended }) {
  return (
    <div className={`p-10 rounded-[3rem] border transition-all cursor-pointer group relative ${
       recommended ? 'bg-white border-dark-orange shadow-2xl scale-105 z-10' : 'bg-white border-slate-50 hover:border-dark-orange shadow-lg'
    }`}>
       {recommended && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-dark-orange text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">Bhaiya's Choice</div>
       )}
       <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">{icon}</div>
       <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{title}</h4>
       <div className="flex items-baseline gap-2 mb-8">
          <h3 className="text-4xl font-black text-slate-900">{price}</h3>
          <span className="text-[11px] font-black uppercase text-slate-400">{period}</span>
       </div>
       <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">{desc}</p>
       <button className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
          recommended ? 'bg-dark-orange text-white shadow-xl shadow-orange-500/20' : 'bg-slate-900 text-white'
       }`}>Activate Boost</button>
    </div>
  );
}

function DocumentFile({ name, type, size }) {
  return (
    <div className="p-6 rounded-[2rem] bg-white border border-slate-50 hover:border-dark-orange shadow-sm hover:shadow-xl transition-all cursor-pointer text-center group">
       <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 mx-auto mb-6 group-hover:bg-dark-orange/10 group-hover:text-dark-orange transition-all">
          <FileText size={28} />
       </div>
       <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{name}</h4>
       <div className="flex flex-col gap-1 items-center">
          <span className="text-[9px] font-black uppercase text-slate-300 tracking-[0.2em]">{size} • {type}</span>
          <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
             <Download size={14} className="text-slate-400 hover:text-dark-orange" />
             <Trash2 size={14} className="text-slate-400 hover:text-red-500" />
          </div>
       </div>
    </div>
  );
}

function StatSummary({ label, value }) {
  return (
    <div className="text-center">
       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{label}</p>
       <p className="text-base font-black text-slate-900 uppercase">{value}</p>
    </div>
  );
}

function TabBtn({ label, active }) {
  return (
    <button className={`text-[11px] font-black uppercase tracking-widest border-b-2 pb-1 transition-all ${
       active ? 'text-dark-orange border-dark-orange' : 'text-slate-400 border-transparent hover:text-slate-800 active:text-slate-900'
    }`}>{label}</button>
  );
}
