import React, { useState } from "react";
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
  AlertCircle,
  Settings,
  CreditCard,
  User,
  MoreVertical,
  CheckCircle2,
  Filter,
  Search,
  Download,
  Calendar,
  DollarSign,
  PieChart,
  ArrowRight,
  Target,
  Eye,
  MessageSquare,
  Phone,
  LayoutDashboard,
  Building,
  Check,
  Award,
  X,
  Share2
} from "lucide-react";
import VerificationChecklist from "./VerificationChecklist";
import AdminIntegrityHub from "./AdminIntegrityHub";

export default function PartnerDashboard({ subPath }) {
  const [showSoldSuccess, setShowSoldSuccess] = useState(false);

  if (subPath === "requests") return <RequestsPage />;
  if (subPath === "verifications") return <VerificationsPage />;
  if (subPath === "earnings") return <EarningsPage />;
  if (subPath === "settings") return <ExpertSettingsPage />;
  if (subPath === "audit") return <VerificationChecklist />;
  if (subPath === "integrity") return <AdminIntegrityHub />;

  return (
    <DashboardLayout role="expert" userName="Adv. Subhash Mondal">
      {/* Performance Header (War Room Pulse) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
         <PulseCard label="Active Listings" value="42" icon={<Building className="text-blue-500" />} sub="3 need updates" />
         <PulseCard label="Leads This Month" value="185" icon={<Users className="text-emerald-500" />} sub="+12% vs last month" />
         <PulseCard label="Response Score" value="92%" icon={<Zap className="text-dark-orange" />} sub="Fast! Keep it up." />
         <PulseCard label="Profile Views" value="1.2k" icon={<Eye className="text-slate-900" />} sub="Trending in Durgapur" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
         {/* Lead Pipeline Hub */}
         <div className="lg:col-span-8 bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-8">
               <div className="space-y-1">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Lead Pipeline Hub</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time inquiries from serious buyers</p>
               </div>
               <button className="text-[10px] font-black uppercase tracking-widest text-dark-orange flex items-center gap-2 hover:gap-3 transition-all">Export to Sheets <Download size={14} /></button>
            </div>
            
            <div className="space-y-4">
               <LeadCard name="Aman V." property="3BHK Sun Tower" status="New Lead" score={5} />
               <LeadCard name="Priya S." property="Commercial Plot X" status="Visit Scheduled" score={4} date="Sunday" />
               <LeadCard name="Rajesh K." property="2BHK Maple Heights" status="Not Interested" score={3} archived />
               <LeadCard name="Vikram Singh" property="Penthouse Luxury" status="Negotiating" score={5} />
            </div>
         </div>

         {/* Market Intelligence Sidebar */}
         <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/10 rounded-full blur-3xl -mr-32 -mt-32" />
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-8">Market Intelligence</h3>
               <div className="space-y-8">
                  <IntelItem 
                    title="Locality Demand" 
                    desc="Demand for 2BHKs in Bidhannagar has spiked by 20%. Do you have inventory?" 
                    icon={<TrendingUp size={16} className="text-emerald-400" />} 
                  />
                  <IntelItem 
                    title="Competitor Insight" 
                    desc="3 other agents just listed in your building. Check prices to stay ahead." 
                    icon={<AlertCircle size={16} className="text-orange-400" />} 
                  />
                  <div className="pt-4">
                     <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">View Demand Heat Map</button>
                  </div>
               </div>
            </div>

            {/* Inventory Manager */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Inventory Health</h3>
               <div className="space-y-6">
                  <HealthItem title="3BHK Luxury Villa" status="Trending" views={50} color="emerald" />
                  <HealthItem title="Office Space, Sec 12" status="Cold Listing" views={0} color="red" suggestion="Drop price by 10% to get noticed." />
               </div>
               <button 
                 onClick={() => setShowSoldSuccess(true)}
                 className="w-full mt-8 py-5 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-dark-orange transition-all shadow-xl shadow-slate-200"
               >
                 Mark Property as SOLD
               </button>
            </div>
         </div>
      </div>

      {showSoldSuccess && <SoldCelebrationPopup onClose={() => setShowSoldSuccess(false)} />}
    </DashboardLayout>
  );
}

// --- COMPONENTS ---

function PulseCard({ label, value, icon, sub }) {
  return (
    <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:border-dark-orange transition-all group">
       <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
             {icon}
          </div>
          <MoreVertical size={14} className="text-slate-300" />
       </div>
       <div>
          <h4 className="text-2xl font-black text-slate-900 tracking-tighter">{value}</h4>
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">{label}</p>
          <div className="h-px bg-slate-50 my-3" />
          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">{sub}</p>
       </div>
    </div>
  );
}

function LeadCard({ name, property, status, score, date, archived }) {
  return (
    <div className={`p-6 rounded-[2rem] border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer ${archived ? 'bg-slate-50 opacity-60 border-transparent grayscale' : 'bg-white border-slate-100 hover:border-dark-orange hover:shadow-xl hover:shadow-orange-500/5'}`}>
       <div className="flex items-center gap-6">
          <div className="relative">
             <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-lg font-black uppercase">
                {name.charAt(0)}
             </div>
             <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 bg-white border border-slate-100 px-1.5 py-0.5 rounded-lg shadow-sm">
                <Star size={8} className="text-dark-orange fill-dark-orange" />
                <span className="text-[8px] font-black">{score}</span>
             </div>
          </div>
          <div>
             <div className="flex items-center gap-3 mb-1">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{name}</h4>
                <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${status === 'New Lead' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-dark-orange'}`}>
                   {status} {date && `(${date})`}
                </span>
             </div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Building size={10} /> {property}
             </p>
          </div>
       </div>

       <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-dark-orange hover:text-white transition-all">
             <Phone size={18} />
          </button>
          <button className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
             <MessageSquare size={18} />
          </button>
          <button className="px-6 py-3 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest group-hover:bg-dark-orange transition-colors">
             View Profile
          </button>
       </div>
    </div>
  );
}

function IntelItem({ title, desc, icon }) {
  return (
    <div className="flex gap-4">
       <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
          {icon}
       </div>
       <div className="space-y-1">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-100">{title}</h4>
          <p className="text-[10px] font-medium text-slate-400 leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}

function HealthItem({ title, status, views, color, suggestion }) {
  return (
    <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
       <div className="flex items-center justify-between">
          <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-tight">{title}</h4>
          <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
             {status}
          </span>
       </div>
       <div className="flex items-center gap-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">
          <span className="flex items-center gap-1"><Eye size={10} /> {views} Views</span>
       </div>
       {suggestion && (
          <p className="text-[8px] font-bold text-orange-500 leading-relaxed uppercase bg-orange-50 p-2 rounded-lg border border-orange-100">
             ⚠️ Bhaiya's Suggestion: {suggestion}
          </p>
       )}
    </div>
  );
}

function SoldCelebrationPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[200] flex items-center justify-center p-6 text-center">
       <div className="max-w-md w-full bg-white rounded-[3.5rem] p-10 md:p-14 relative overflow-hidden animate-in zoom-in duration-500">
          <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-dark-orange to-orange-400" />
          <button onClick={onClose} className="absolute top-8 right-8 text-slate-300 hover:text-slate-900"><X size={24} /></button>
          
          <div className="space-y-8">
             <div className="relative mx-auto w-32 h-32">
                <div className="absolute inset-0 bg-dark-orange/20 rounded-full animate-ping" />
                <div className="relative w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center text-dark-orange">
                   <Award size={64} />
                </div>
             </div>

             <div className="space-y-2">
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">BOOM! 🚀</h2>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Another Deal Closed!</p>
             </div>

             <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4 text-left">
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">How did it go?</p>
                <div className="grid grid-cols-2 gap-2">
                   <button className="py-3 px-4 rounded-xl bg-white border border-slate-100 text-[8px] font-black uppercase text-slate-500 hover:border-dark-orange hover:text-dark-orange transition-all">Bhaiya Lead ✅</button>
                   <button className="py-3 px-4 rounded-xl bg-white border border-slate-100 text-[8px] font-black uppercase text-slate-500">Personal Network</button>
                </div>
                <textarea 
                  placeholder="Share your success story..."
                  className="w-full bg-white border border-slate-100 p-4 rounded-xl text-[10px] outline-none focus:border-dark-orange h-20 resize-none"
                />
             </div>

             <div className="space-y-4">
                <button className="w-full py-5 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3">
                   <Share2 size={16} /> Share on WhatsApp Status
                </button>
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                   <p className="text-[9px] font-black text-dark-orange uppercase tracking-widest leading-relaxed">
                     Bhaiya's Gift: 50 Bonus Credits added to your account!
                   </p>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}

// --- SUB PAGES (Kept for completeness) ---

function RequestsPage() { return <div>Requests Page Placeholder</div>; }
function VerificationsPage() { return <div>Verifications Page Placeholder</div>; }
function EarningsPage() { return <div>Earnings Page Placeholder</div>; }
function ExpertSettingsPage() { return <div>Settings Page Placeholder</div>; }
