import React from "react";
import { Star, ShieldCheck, Zap, TrendingUp, CheckCircle2, MessageSquare, Award } from "lucide-react";

export default function StarSellerSection() {
  const perks = [
    { label: "The 'Star' Badge", desc: "Gold star next to your name and listings.", icon: <Star className="text-yellow-500" /> },
    { label: "Top of Search", desc: "Properties automatically boosted above standard.", icon: <TrendingUp className="text-emerald-500" /> },
    { label: "Direct Lead Access", desc: "Get buyer contacts instantly.", icon: <Zap className="text-orange-500" /> },
    { label: "Premium Discounts", desc: "20% off on 'Featured Listing' slots.", icon: <Award className="text-blue-500" /> },
  ];

  return (
    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 border border-slate-100 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 sm:p-8">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 shadow-lg shadow-yellow-400/20 rotate-12">
          <Star className="w-6 h-6 md:w-8 md:h-8 fill-slate-900" />
        </div>
      </div>

      <div className="space-y-8 md:space-y-10 relative z-10">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[9px] md:text-[10px] font-black uppercase tracking-wider">
            <Award className="w-3 h-3" /> Bhaiya Star Seller
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">Sahi Data, <br className="sm:hidden" /> <span className="text-yellow-500 italic">Sabse Zyada Fayda!</span></h3>
          <p className="text-slate-500 font-medium text-xs md:text-sm max-w-lg">
            Maintain high standards and get exclusive superpowers on the portal. You're almost there!
          </p>
        </div>

        {/* PROGRESS BAR */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <p className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-slate-400">Progress to Star status</p>
            <p className="text-xs md:text-sm font-black text-slate-900">75%</p>
          </div>
          <div className="h-3 md:h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
            <div className="h-full bg-yellow-400 rounded-full w-[75%] relative">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer" />
            </div>
          </div>
          <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-tight italic">
            "You are 2 accurate updates away from becoming a Star Seller!"
          </p>
        </div>

        {/* CRITERIA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <div>
              <p className="text-[9px] font-black text-emerald-700 uppercase leading-none mb-1">Response Time</p>
              <p className="text-[11px] font-bold text-slate-700">92% (Goal: 90%)</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <div>
              <p className="text-[9px] font-black text-emerald-700 uppercase leading-none mb-1">Accuracy Score</p>
              <p className="text-[11px] font-bold text-slate-700">100%</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase leading-none mb-1">Freshness</p>
              <p className="text-[11px] font-bold text-slate-700 italic uppercase">2 updates left</p>
            </div>
          </div>
        </div>

        {/* PERKS */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Exclusive Perks Waiting For You</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {perks.map((perk, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-yellow-400 transition-all cursor-default">
                <div className="p-3 bg-slate-50 rounded-xl w-fit h-fit">{perk.icon}</div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{perk.label}</p>
                  <p className="text-xs text-slate-500 font-medium">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
