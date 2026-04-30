import React from "react";
import { ShieldCheck, TrendingUp, Handshake, Lock, PhoneCall, ChevronRight, Briefcase } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

export default function VIPSection() {
  return (
    <Section className="bg-[#0f172a] py-16 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/5 rounded-full blur-[120px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-500/5 rounded-full blur-[120px] -ml-40 -mb-40" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-wider border border-blue-500/20">
                <Briefcase className="w-3 h-3" /> The VIP Executive Suite
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
                Direct Access for <br className="hidden sm:block" />
                <span className="text-blue-400 italic">High-Impact</span> Decisions.
              </h2>
              <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Leveraging 16 years of expertise in Steel, Logistics, and Real Estate to power your next big venture. Skip the queue and consult directly with our Founder’s Office.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-tight flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-blue-500 rounded-full" /> Industrial DNA
                </h4>
                <p className="text-slate-500 text-xs font-bold leading-relaxed">
                  Benefit from insights rooted in Steel and Logistics. We don't just see land; we see structural potential and supply chain efficiency.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-tight flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-emerald-500 rounded-full" /> Strategic JVs
                </h4>
                <p className="text-slate-500 text-xs font-bold leading-relaxed">
                  Access an exclusive network of Tier-1 developers and land owners vetted over 16 years with 0% litigation history.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-tight flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-orange-500 rounded-full" /> Regulatory Shield
                </h4>
                <p className="text-slate-500 text-xs font-bold leading-relaxed">
                  Get direct guidance on complex industrial zoning, licensing, and compliance from experts who know the ground reality.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-black uppercase tracking-tight flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-purple-500 rounded-full" /> Total Confidentiality
                </h4>
                <p className="text-slate-500 text-xs font-bold leading-relaxed">
                  High-stake deals require 100% privacy. Your data stays in the Founder’s Executive Office, never shared with third parties.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Bhaiya's Advantage</p>
              <p className="text-sm font-bold text-slate-300 italic">
                "Our VIP clients get complimentary Logistics Feasibility Reports for all industrial and warehouse acquisitions."
              </p>
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
            
            <form className="space-y-6 relative z-10 text-left">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Request Private Consultation</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium">A senior executive will contact you within 4 hours.</p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-blue-500 outline-none" placeholder="e.g. Aman Gupta" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Company</label>
                    <input type="text" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-blue-500 outline-none" placeholder="Company Name" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Direct Contact</label>
                  <input type="tel" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-blue-500 outline-none" placeholder="+91" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Investment Type</label>
                  <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm focus:border-blue-500 outline-none appearance-none cursor-pointer">
                    <option className="bg-slate-900">Joint Venture (JV)</option>
                    <option className="bg-slate-900">Industrial Plot / Factory</option>
                    <option className="bg-slate-900">Commercial Complex</option>
                    <option className="bg-slate-900">Petrol Pump Asset</option>
                  </select>
                </div>

                <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  Request Priority Briefing <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-center gap-4">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Need Immediate Help?</p>
                <button className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-blue-400 transition-all">
                  <PhoneCall size={14} className="text-blue-400" /> Speak with Founder's Office
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
