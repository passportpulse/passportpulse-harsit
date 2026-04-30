import React from "react";
import { ShieldCheck, Building2, Truck, Scale, Camera, CheckCircle2, AlertTriangle, FileText } from "lucide-react";

export default function VerificationChecklist() {
  const categories = [
    {
      title: "1. Structural & Technical Audit (The 'Steel' Lens) 🏗️",
      items: [
        "Structural Soundness: (For Industrial/Commercial) Is the RCC/Steel structure verified? Check for ceiling height (min. 18ft for warehouses) and floor load-bearing capacity.",
        "Utility Capacity: Are there dedicated industrial power lines (HP/KW) and water drainage systems in place?",
        "Age of Construction: Document the year of completion to assess depreciation and maintenance needs."
      ],
      icon: <Building2 className="text-blue-500" />
    },
    {
      title: "2. Logistics & Connectivity (The 'Logistics' Lens) 🚛",
      items: [
        "Access Roads: Is the approach road wide enough for 40ft trailers/containers?",
        "Proximity Mapping: Distance to the nearest National Highway, Railway Siding, and Port (for industrial).",
        "Last-Mile Feasibility: Is the location accessible for delivery fleets and staff transport?"
      ],
      icon: <Truck className="text-orange-500" />
    },
    {
      title: "3. Legal & Compliance (The 'Trust' Lens) ⚖️",
      items: [
        "RERA Status: Is the project RERA registered? (Capture the Registration Number).",
        "Title Search: 16-year chain of title documents verified for any encumbrances or litigations.",
        "Zoning Approval: Is the land use (Industrial, Residential, or Commercial) clearly approved by local authorities?",
        "NOCs: Fire Safety, Environmental Clearance, and Pollution Board certificates on file."
      ],
      icon: <Scale className="text-emerald-500" />
    },
    {
      icon: <Camera className="text-purple-500" />
    },
    {
      title: "5. Financial Transparency 💰",
      items: [
        "Cost Sheet Breakdown: Clear mention of Base Price, GST, Registration, and Maintenance.",
        "ROI Projection: (For Investments) Current rental yield vs. 5-year projected capital appreciation."
      ],
      icon: <DollarSign className="text-dark-orange" />
    }
  ];

  return (
    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-slate-200 shadow-xl space-y-10 md:space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[9px] md:text-[10px] font-black uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3" /> Audit Protocol
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">The "Steel-Standard" <br className="sm:hidden" /> <span className="text-blue-500">Verification Checklist</span></h2>
          <p className="text-slate-500 font-medium text-xs md:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Ensuring every listing reflects our 16 years of professional integrity and structural expertise.
          </p>
        </div>
        
        <div className="flex items-center justify-between sm:justify-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 w-full lg:w-auto">
          <div className="text-left sm:text-right">
            <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Audit Score</p>
            <p className="text-lg md:text-xl font-black text-slate-900 leading-none">0% Complete</p>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <button className="px-5 py-3 md:px-6 md:py-3 bg-blue-600 text-white rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">Submit Audit</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="space-y-6 p-6 md:p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm w-fit h-fit">{cat.icon}</div>
              <h3 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight leading-tight">{cat.title}</h3>
            </div>
            
            <div className="space-y-3">
              {cat.items.map((item, j) => (
                <label key={j} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-50 cursor-pointer hover:border-blue-200 transition-all group">
                  <div className="mt-1">
                    <input type="checkbox" className="w-4 h-4 md:w-5 md:h-5 accent-blue-600 rounded cursor-pointer" />
                  </div>
                  <p className="text-[11px] md:text-xs font-bold text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                    {item}
                  </p>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 md:p-10 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="space-y-4 relative z-10 max-w-xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
              <ShieldCheck className="text-blue-400" />
            </div>
            <h4 className="text-lg md:text-xl font-black uppercase tracking-tight leading-none">The "16-Year Heritage" Seal</h4>
          </div>
          <p className="text-slate-400 text-[10px] md:text-xs font-medium leading-relaxed uppercase tracking-wider">
            🛡️ [Property Wala Bhaiya] Verified: This property has passed our 40-point "Steel-Standard" audit. Verified by experts with 16 years of industrial experience.
          </p>
        </div>
        <div className="relative z-10 w-full lg:w-auto">
          <button className="w-full lg:w-auto px-8 py-4 md:px-10 md:py-5 bg-blue-600 rounded-xl md:rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
            Generate Verification Badge
          </button>
        </div>
      </div>
    </div>
  );
}
