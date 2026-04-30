import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  Users, 
  Target, 
  Calendar, 
  Layers, 
  ChevronRight, 
  Plus, 
  UploadCloud, 
  FileText, 
  ShieldCheck,
  Zap,
  Filter,
  MoreVertical,
  Activity,
  ArrowUpRight,
  TrendingDown,
  Building,
  CheckCircle2,
  Clock,
  Download,
  AlertTriangle,
  User,
  Phone,
  Mail,
  MoreHorizontal,
  Search
} from "lucide-react";
import VerificationChecklist from "./VerificationChecklist";
import AdminIntegrityHub from "./AdminIntegrityHub";

export default function DeveloperDashboard({ subPath }) {
  // RENDER SUB-PAGES
  if (subPath === "projects") return <ProjectsPage />;
  if (subPath === "sales") return <SalesHubPage />;
  if (subPath === "bulk") return <BulkPage />;
  if (subPath === "crm") return <CRMPage />;
  if (subPath === "audit") return <VerificationChecklist />;
  if (subPath === "integrity") return <AdminIntegrityHub />;

  return (
    <DashboardLayout role="developer" userName="Emaar Properties">
      {/* Welcome Banner */}
      <div className="relative bg-slate-900 rounded-[3rem] p-8 lg:p-14 mb-8 overflow-hidden shadow-2xl group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dark-orange/10 rounded-full blur-[120px] -mr-40 -mt-20 group-hover:bg-dark-orange/20 transition-all duration-1000"></div>
        <div className="relative z-10 lg:grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <ShieldCheck size={16} className="text-dark-orange" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-orange">Enterprise Command</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-6 uppercase">
              DOMINATE <br /> <span className="text-dark-orange">THE SKY.</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed mb-10">
              Your townships are reaching <span className="text-white font-black underline decoration-dark-orange decoration-4">14.2k active buyers</span> this month.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-dark-orange text-white text-[11px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:scale-105 transition-all">
                Launch Project <Plus size={16} />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 text-white border border-white/10 text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                System Audit
              </button>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <StatCard icon={<Users />} label="Portal Reach" value="14.2k" color="orange" />
            <StatCard icon={<TrendingUp />} label="Lead Quality" value="8.4/10" color="white" />
            <StatCard icon={<Layers />} label="Inventory" value="68%" color="white" />
            <StatCard icon={<Activity />} label="Velocity" value="+12%" color="orange" />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Project Snapshot</h2>
                <Filter size={20} className="text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-6">
                 <ProjectRow name="Skyline Elegance" location="Bidhannagar" sales="82%" revenue="₹12.4 Cr" status="Operational" />
                 <ProjectRow name="The Grand Plaza" location="City Center" sales="45%" revenue="₹8.1 Cr" status="On-Going" />
                 <ProjectRow name="River Side View" location="Durgapur" sales="12%" revenue="₹2.2 Cr" status="Pre-Launch" />
              </div>
           </div>
        </div>
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
              <h2 className="text-lg font-black uppercase tracking-widest mb-8 text-orange-400">Notifications</h2>
              <div className="space-y-6">
                 <AlertItem text="Bulk Update: 12 Units launched" time="2h ago" />
                 <AlertItem text="Lead: Sandeep Roy requested visit" time="4h ago" />
                 <AlertItem text="Compliance: RERA Audit passed" time="1d ago" />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB PAGES (DETAILED) ---

function ProjectsPage() {
  return (
    <DashboardLayout role="developer" userName="Emaar Properties">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
         <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Project Ecosystem</h2>
            <p className="text-slate-500 font-medium text-sm mt-2">Manage lifecycle, inventory, and pricing for all active developments.</p>
         </div>
         <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest shadow-2xl hover:bg-dark-orange transition-all">
            <Plus size={18} /> Add New Township
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
         <ProjectSummaryCard label="Total Inventory" value="482 Units" color="slate" />
         <ProjectSummaryCard label="Units Sold" value="312 Units" color="orange" />
         <ProjectSummaryCard label="Escrow Balance" value="₹42.8 Cr" color="slate" />
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
         <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Active Townships</h3>
            <div className="flex gap-4">
               <div className="h-10 w-64 bg-slate-50 border border-slate-100 rounded-xl flex items-center px-4">
                  <Search size={14} className="text-slate-400" />
                  <input type="text" placeholder="Search projects..." className="bg-transparent border-none outline-none ml-2 text-xs font-bold w-full" />
               </div>
            </div>
         </div>
         <table className="w-full text-left">
            <thead className="bg-slate-50/50">
               <tr className="border-b border-slate-50">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Project Name</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Inventory Status</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Construction</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Bookings</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               <ProjectTableRow name="Skyline Grande" rera="WBRERA-2023-001" sold={42} total={80} stage="Finishing" trends="up" />
               <ProjectTableRow name="The Park Avenue" rera="WBRERA-2023-042" sold={12} total={120} stage="Foundation" trends="stable" />
               <ProjectTableRow name="Regency Plaza" rera="WBRERA-2024-009" sold={78} total={80} stage="Full Occupancy" trends="up" />
               <ProjectTableRow name="Eco Smart Township" rera="WBRERA-2024-015" sold={0} total={240} stage="Pre-Launch" trends="up" />
            </tbody>
         </table>
      </div>
    </DashboardLayout>
  );
}

function SalesHubPage() {
  return (
    <DashboardLayout role="developer" userName="Emaar Properties">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">Sales & Revenue <span className="text-dark-orange">Hub</span></h2>
        <div className="flex gap-4">
           <FilterBadge label="Last 30 Days" active />
           <FilterBadge label="Q3 Performance" />
           <FilterBadge label="Annual Recap" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
         <SalesProgressCard title="Revenue Growth" value="₹12.4 Cr" trend="+14.2%" />
         <SalesProgressCard title="Avg. Ticket Size" value="₹85.2 L" trend="+2.1%" />
         <SalesProgressCard title="Booking Velocity" value="4.2 Units/Day" trend="-0.4%" negative />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="flex items-center justify-between mb-10">
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Booking Pipeline</h3>
               <Download size={20} className="text-slate-400 cursor-pointer" />
            </div>
            {/* Mock Chart Area */}
            <div className="aspect-[2/1] bg-slate-50 rounded-3xl flex items-end justify-between p-8 gap-4">
               {[40, 70, 45, 90, 65, 80, 55, 95, 60, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-dark-orange rounded-full opacity-20 hover:opacity-100 transition-all cursor-pointer" style={{ height: `${h}%` }}></div>
               ))}
            </div>
         </div>
         <div className="lg:col-span-4 bg-slate-900 rounded-[2.5rem] p-10 text-white">
            <h3 className="text-lg font-black uppercase tracking-widest text-orange-400 mb-8 font-poppins">Top Channels</h3>
            <div className="space-y-8">
               <ChannelItem name="Bhaiya Direct" share="62%" leads={420} />
               <ChannelItem name="Partner Network" share="24%" leads={180} />
               <ChannelItem name="Social Ads" share="14%" leads={92} />
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

function BulkPage() {
  return (
    <DashboardLayout role="developer" userName="Emaar Properties">
      <div className="max-w-4xl mx-auto py-10">
         <div className="text-center mb-16">
            <div className="w-24 h-24 rounded-3xl bg-slate-900 flex items-center justify-center text-white mb-8 mx-auto shadow-2xl">
               <UploadCloud size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">Master Inventory Ingestion</h2>
            <p className="text-slate-500 font-medium max-w-lg mx-auto">Upload thousands of units, images, and floor plans in a single operation. The "Bhaiya" AI will auto-verify RERA status.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-10 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 hover:border-dark-orange hover:bg-orange-50/20 transition-all cursor-pointer text-center group">
               <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mx-auto mb-6 group-hover:text-dark-orange transition-colors">
                  <FileText size={32} />
               </div>
               <h4 className="text-lg font-black text-slate-900 uppercase mb-2">Inventory Sheet</h4>
               <p className="text-xs text-slate-400 uppercase tracking-widest">Excel / CSV Support</p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 hover:border-dark-orange hover:bg-orange-50/20 transition-all cursor-pointer text-center group">
               <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mx-auto mb-6 group-hover:text-dark-orange transition-colors">
                  <Layers size={32} />
               </div>
               <h4 className="text-lg font-black text-slate-900 uppercase mb-2">Asset Package</h4>
               <p className="text-xs text-slate-400 uppercase tracking-widest">ZIP (Images & PDFs)</p>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
            <div className="flex items-center gap-4 mb-8">
               <AlertTriangle className="text-dark-orange" />
               <h3 className="text-lg font-black uppercase tracking-tight">Recent Upload Errors</h3>
            </div>
            <div className="space-y-4">
               <ErrorLogItem file="township_phase_2.csv" error="RERA ID Mismatch on Row 42" status="Fixed" />
               <ErrorLogItem file="gallery_assets.zip" error="Corrupt image at sky_view_01.jpg" status="Pending" red />
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

function CRMPage() {
  return (
    <DashboardLayout role="developer" userName="Emaar Properties">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
         <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Customer Lifecycle</h2>
            <p className="text-slate-500 font-medium text-sm mt-2">Nurture leads from discovery to possession with real-time tracking.</p>
         </div>
         <div className="flex gap-3">
            <button className="h-14 px-8 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest shadow-xl">New Lead</button>
            <button className="h-14 w-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-500"><Download size={20} /></button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
         <CRMStatCard label="Total Leads" value="1,248" dot="orange" />
         <CRMStatCard label="Site Visits" value="82" dot="green" />
         <CRMStatCard label="Follow Ups" value="24" dot="blue" />
         <CRMStatCard label="Converted" value="15" dot="orange" />
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
         <div className="p-8 bg-slate-50/50 border-b border-slate-50 flex items-center justify-between">
            <div className="flex gap-8">
               <button className="text-[11px] font-black uppercase tracking-widest text-dark-orange border-b-2 border-dark-orange pb-1">All Leads</button>
               <button className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">Hot Pipeline</button>
               <button className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors">Post-Sale</button>
            </div>
            <MoreHorizontal size={20} className="text-slate-400" />
         </div>
         <div className="p-8 space-y-4">
            <CRMLeadRow name="Vikram Chhetri" project="Skyline Elegance" status="Hot" budget="₹85 L" lastAct="2h ago" />
            <CRMLeadRow name="Anjali Sharma" project="The Grand Plaza" status="Warm" budget="₹1.2 Cr" lastAct="5h ago" />
            <CRMLeadRow name="Sourav Ganguly" project="River Side View" status="Cold" budget="₹45 L" lastAct="1d ago" />
            <CRMLeadRow name="Rishabh Pant" project="Skyline Elegance" status="Converted" budget="₹92 L" lastAct="3d ago" />
         </div>
      </div>
    </DashboardLayout>
  );
}

// --- HELPER COMPONENTS ---

function StatCard({ icon, label, value, color }) {
  return (
    <div className={`p-8 rounded-[2rem] border transition-all ${
      color === 'orange' ? 'bg-dark-orange/10 border-dark-orange/20 text-white' : 'bg-white/5 border-white/10 text-white'
    }`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-dark-orange`}>{icon}</div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <h3 className="text-3xl font-black">{value}</h3>
    </div>
  );
}

function ProjectRow({ name, location, sales, revenue, status }) {
  return (
    <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-dark-orange transition-all group cursor-pointer">
      <div className="flex items-center gap-4">
         <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-900 group-hover:bg-dark-orange group-hover:text-white transition-all">
            <Building size={20} />
         </div>
         <div>
            <h4 className="font-black text-slate-900 text-sm uppercase">{name}</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
               <MapPin size={10} /> {location}
            </p>
         </div>
      </div>
      <div className="text-right hidden sm:block">
         <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Sales Velocity</p>
         <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-dark-orange" style={{ width: sales }}></div>
         </div>
      </div>
      <div className="text-right">
         <h4 className="font-black text-slate-900 text-sm">{revenue}</h4>
         <p className={`text-[9px] font-black uppercase tracking-widest ${status === 'Operational' ? 'text-green-500' : 'text-dark-orange'}`}>{status}</p>
      </div>
    </div>
  );
}

function ProjectTableRow({ name, rera, sold, total, stage, trends }) {
  const progress = (sold / total) * 100;
  return (
    <tr className="hover:bg-slate-50/80 transition-all group">
       <td className="px-8 py-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0 group-hover:bg-dark-orange transition-colors">
                <Building size={16} />
             </div>
             <div>
                <p className="text-sm font-black text-slate-800 uppercase leading-none mb-1">{name}</p>
                <p className="text-[9px] font-bold text-slate-400">{rera}</p>
             </div>
          </div>
       </td>
       <td className="px-8 py-6">
          <div className="w-32">
             <div className="flex justify-between items-center mb-1 text-[9px] font-black uppercase text-slate-400">
                <span>{progress.toFixed(0)}%</span>
                <span>{sold}/{total} Units</span>
             </div>
             <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-dark-orange" style={{ width: `${progress}%` }}></div>
             </div>
          </div>
       </td>
       <td className="px-8 py-6">
          <span className="px-3 py-1.5 rounded-lg bg-orange-100/50 text-dark-orange text-[9px] font-black uppercase tracking-widest">{stage}</span>
       </td>
       <td className="px-8 py-6">
          <div className="flex items-center gap-2">
             {trends === 'up' ? <ArrowUpRight size={14} className="text-green-500" /> : <TrendingDown size={14} className="text-slate-400" />}
             <span className="text-sm font-bold text-slate-700">{trends === 'up' ? '+12' : '0'}</span>
          </div>
       </td>
       <td className="px-8 py-6 text-right">
          <button className="p-2 hover:bg-white rounded-lg transition-colors"><MoreVertical size={16} className="text-slate-300" /></button>
       </td>
    </tr>
  );
}

function ProjectSummaryCard({ label, value, color }) {
  return (
    <div className={`p-10 rounded-[2.5rem] border ${color === 'orange' ? 'bg-slate-900 text-white border-slate-900 border-none' : 'bg-white text-slate-900 border-slate-100'}`}>
       <p className={`text-[11px] font-black uppercase tracking-[0.3em] mb-4 ${color === 'orange' ? 'text-orange-400' : 'text-slate-400'}`}>{label}</p>
       <h3 className="text-4xl font-black">{value}</h3>
    </div>
  );
}

function SalesProgressCard({ title, value, trend, negative }) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
       <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">{title}</p>
       <div className="flex items-end gap-3">
          <h3 className="text-4xl font-black text-slate-900">{value}</h3>
          <span className={`text-xs font-black mb-1.5 ${negative ? 'text-red-500' : 'text-green-500'}`}>{trend}</span>
       </div>
    </div>
  );
}

function CRMLeadRow({ name, project, status, budget, lastAct }) {
  return (
    <div className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-100 hover:border-dark-orange transition-all cursor-pointer group">
       <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-dark-orange group-hover:text-white transition-all">
             <User size={20} />
          </div>
          <div>
             <h4 className="text-sm font-black text-slate-800 uppercase leading-none mb-1">{name}</h4>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{project}</p>
          </div>
       </div>
       <div className="flex gap-16 items-center">
          <div className="text-right hidden md:block">
             <p className="text-[9px] font-black text-slate-300 uppercase leading-none mb-1">Budget</p>
             <p className="text-sm font-black text-slate-800">{budget}</p>
          </div>
          <div className="text-right">
             <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                status === 'Hot' ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30' : 
                status === 'Warm' ? 'bg-orange-100 text-dark-orange' : 
                status === 'Converted' ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-400'
             }`}>{status}</span>
          </div>
       </div>
    </div>
  );
}

function CRMStatCard({ label, value, dot }) {
   const dotColor = {
      orange: "bg-dark-orange",
      green: "bg-green-500",
      blue: "bg-blue-500"
   }[dot];
   return (
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center justify-between">
         <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
            <h4 className="text-2xl font-black text-slate-900">{value}</h4>
         </div>
         <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
      </div>
   )
}

function ChannelItem({ name, share, leads }) {
   return (
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full ${name === 'Bhaiya Direct' ? 'bg-dark-orange shadow-[0_0_10px_rgba(255,107,0,0.5)]' : 'bg-slate-600'}`}></div>
            <div>
               <p className="text-sm font-black uppercase text-slate-200">{name}</p>
               <p className="text-[10px] font-black text-slate-500 uppercase">{leads} Leads</p>
            </div>
         </div>
         <span className="text-lg font-black text-slate-200">{share}</span>
      </div>
   )
}

function FilterBadge({ label, active }) {
   return (
      <button className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
         active ? 'bg-dark-orange text-white' : 'bg-white text-slate-400 border border-slate-100'
      }`}>{label}</button>
   )
}

function ErrorLogItem({ file, error, status, red }) {
   return (
      <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5">
         <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full ${red ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
            <div>
               <p className="text-sm font-bold text-white uppercase tracking-tight">{file}</p>
               <p className="text-[10px] text-slate-400">{error}</p>
            </div>
         </div>
         <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${red ? 'text-red-400' : 'text-green-400'}`}>{status}</span>
      </div>
   )
}

function AlertItem({ text, time }) {
   return (
      <div className="flex items-start gap-4">
         <div className="w-1.5 h-1.5 rounded-full bg-dark-orange mt-2 shrink-0"></div>
         <div>
            <p className="text-sm font-medium text-slate-300">{text}</p>
            <p className="text-[10px] font-black uppercase text-slate-600 tracking-widest mt-1">{time}</p>
         </div>
      </div>
   )
}

function QuickBtn({ icon, text, primary }) {
  return (
    <button className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
      primary ? 'bg-slate-900 text-white hover:bg-dark-orange shadow-lg shadow-slate-500/20' : 'bg-white text-slate-400 border border-slate-200 hover:border-dark-orange hover:text-dark-orange'
    }`}>
      {icon} {text}
    </button>
  );
}

function MetricBox({ label, value, trend }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10">
      <p className="text-[10px] font-black uppercase text-orange-400 tracking-widest mb-4">{label}</p>
      <h3 className="text-4xl font-black mb-1">{value}</h3>
      <p className="text-[10px] font-black uppercase text-slate-500">{trend} vs Last Month</p>
    </div>
  );
}

function ProjectCard({ name, status, sales }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-dark-orange transition-all">
      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-900 group-hover:bg-dark-orange group-hover:text-white transition-all shadow-sm mb-8">
        <Building size={24} />
      </div>
      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{name}</h3>
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6">{status}</p>
      <div className="flex justify-between items-center pt-6 border-t border-slate-200">
         <span className="text-[10px] font-black text-slate-400 uppercase">Booked</span>
         <span className="text-sm font-black text-slate-900">{sales}</span>
      </div>
    </div>
  );
}
