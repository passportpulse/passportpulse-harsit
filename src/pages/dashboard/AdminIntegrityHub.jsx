import React, { useState } from "react";
import { AlertCircle, ShieldAlert, UserX, CheckCircle, PhoneCall, Trash2, Ban, History } from "lucide-react";
import DashboardLayout from "./DashboardLayout";

export default function AdminIntegrityHub() {
  const [selectedSeller, setSelectedSeller] = useState(null);

  const metrics = [
    { label: "High-Risk Listings", value: "14", color: "text-red-600", bg: "bg-red-50", icon: <AlertCircle /> },
    { label: "Repeat Offenders", value: "05", color: "text-orange-600", bg: "bg-orange-50", icon: <ShieldAlert /> },
    { label: "Verification Queue", value: "28", color: "text-blue-600", bg: "bg-blue-50", icon: <CheckCircle /> },
  ];

  const reports = [
    { id: 1, seller: "Rajesh K.", sellerId: "#882", property: "3BHK Apartment, Noida", reason: "Already Sold", count: 5, status: "Auto-Hidden", severity: "high" },
    { id: 2, seller: "Amit Sharma", sellerId: "#412", property: "Studio Flat, Delhi", reason: "Fake Photos", count: 2, status: "Under Review", severity: "medium" },
    { id: 3, seller: "Priya Realty", sellerId: "#109", property: "2BHK Rental, Gurgaon", reason: "Price Mismatch", count: 4, status: "Strike 1 Active", severity: "high" },
    { id: 4, seller: "Suresh V.", sellerId: "#553", property: "Independent House", reason: "Spam/Fraud", count: 1, status: "Watching", severity: "low" },
  ];

  return (
    <DashboardLayout title="Seller Integrity Hub">
      <div className="space-y-6 md:space-y-8 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((m, i) => (
            <div key={i} className={`${m.bg} p-6 md:p-8 rounded-[2rem] border border-transparent hover:border-slate-200 transition-all shadow-sm`}>
              <div className={`${m.color} mb-3`}>{React.cloneElement(m.icon, { size: 24 })}</div>
              <p className="text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-widest">{m.label}</p>
              <h3 className={`text-3xl md:text-4xl font-black ${m.color} mt-1`}>{m.value}</h3>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 md:p-8 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">Recent Reports & Strikes</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 rounded-full text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Feed</span>
            </div>
          </div>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <th className="p-4 md:p-6">Seller Name / ID</th>
                  <th className="p-4 md:p-6">Property Title</th>
                  <th className="p-4 md:p-6">Report Reason</th>
                  <th className="p-4 md:p-6">Report Count</th>
                  <th className="p-4 md:p-6">Status</th>
                  <th className="p-4 md:p-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {reports.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-6">
                      <button 
                        onClick={() => setSelectedSeller(row)}
                        className="text-sm font-black text-slate-900 hover:text-orange-600 transition-colors"
                      >
                        {row.seller} <span className="text-slate-400 font-bold ml-1">{row.sellerId}</span>
                      </button>
                    </td>
                    <td className="p-6 text-sm font-bold text-slate-600">{row.property}</td>
                    <td className="p-6">
                      <span className="text-xs font-black text-slate-900 px-3 py-1 rounded-full bg-slate-100">
                        {row.reason}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className={`flex items-center gap-1.5 font-black text-sm ${row.severity === 'high' ? 'text-red-600' : 'text-orange-500'}`}>
                        <div className={`w-2 h-2 rounded-full ${row.severity === 'high' ? 'bg-red-600 animate-pulse' : 'bg-orange-500'}`} />
                        {row.count} Reports
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${row.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-6 text-right space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><PhoneCall size={16} /></button>
                      <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AUTO RULES */}
        <div className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-black flex items-center gap-3 uppercase tracking-tight">
                <Zap className="text-orange-500" /> Automated Rules
              </h3>
              <p className="text-slate-400 text-xs md:text-sm font-medium uppercase tracking-wider">Bhaiya's AI monitors these thresholds 24/7</p>
            </div>
            <button className="w-full md:w-auto px-6 py-3 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10">
              Manage Rules
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10 relative z-10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 font-black text-xs">A</div>
              <p className="text-[11px] font-bold leading-relaxed text-slate-300">If a listing gets 3 "Already Sold" reports in 12h → Auto-Hide & Notify.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 font-black text-xs">B</div>
              <p className="text-[11px] font-bold leading-relaxed text-slate-300">If a seller gets Strike 3 → Auto-Logout all sessions & block phone number.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-black text-xs">C</div>
              <p className="text-[11px] font-bold leading-relaxed text-slate-300">If a seller updates reported listing within 1h → Clear reports and mark as Resolved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SELLER MODAL (SIDEBAR) */}
      {selectedSeller && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white h-full shadow-2xl animate-slide-in overflow-y-auto">
            <div className="p-8 space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-black text-slate-900">Seller Profile</h3>
                <button onClick={() => setSelectedSeller(null)} className="p-2 hover:bg-slate-100 rounded-full"><AlertCircle className="rotate-45" /></button>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-slate-100 rounded-[2rem] flex items-center justify-center text-2xl font-black text-slate-900">
                  {selectedSeller.seller[0]}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-black text-slate-900">{selectedSeller.seller}</h4>
                  <p className="text-sm font-bold text-slate-400">{selectedSeller.sellerId}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Listings</p>
                  <p className="text-xl font-black text-slate-900">12</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Strike Count</p>
                  <p className="text-xl font-black text-red-600">1/3</p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                  <History size={14} className="text-orange-500" /> Recent Feedback
                </h5>
                <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
                  <p className="text-sm font-bold text-orange-900 italic leading-relaxed">
                    "User claimed property is sold but listing is still live."
                  </p>
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mt-2">Automated Alert Sent 2h ago</p>
                </div>
              </div>

              <div className="space-y-3 pt-8">
                <button className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                  <CheckCircle size={18} /> Verify & Clear
                </button>
                <button className="w-full py-4 bg-white border-2 border-orange-500 text-orange-500 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-500 hover:text-white transition-all">
                  <AlertCircle size={18} /> Issue Warning
                </button>
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl">
                  <ShieldAlert size={18} /> Apply Strike
                </button>
                <button className="w-full py-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                  <Ban size={18} /> Blacklist User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
