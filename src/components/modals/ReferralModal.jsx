import React, { useState } from "react";
import { X, Gift, Share2, Copy, Check, MessageSquare } from "lucide-react";

export default function ReferralModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://propertywalabhaiya.com/join?ref=RAJESH882";
  const viralMessage = `Hey! I found this amazing property on Property Wala Bhaiya. It’s fully verified ✅ and has a 360° Virtual Tour. Check it out using my link and we both get a discount on processing fees! 🏠✨ ${referralLink}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(viralMessage)}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 right-0 p-6">
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-10 space-y-8 text-center">
          <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner relative overflow-hidden">
            <Gift className="w-10 h-10 animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent" />
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Sharing is Caring <span className="text-orange-500">(and Rewarding)!</span></h3>
            <p className="text-slate-500 font-medium text-sm px-4">
              Know someone looking for their dream home? Refer a friend to Property Wala Bhaiya! When they book a site visit, you both get a <span className="text-slate-900 font-black">Gift Card worth ₹500!</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl flex items-center justify-between gap-4 group">
              <p className="text-xs font-bold text-slate-400 truncate">{referralLink}</p>
              <button 
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-orange-500 hover:text-orange-500 transition-all active:scale-95"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <button 
              onClick={handleWhatsAppShare}
              className="w-full py-5 bg-emerald-500 text-white rounded-[1.5rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
            >
              <MessageSquare size={18} /> Share on WhatsApp
            </button>
          </div>

          <div className="pt-4 border-t border-slate-50 flex justify-center items-center gap-8">
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Referrals</p>
              <p className="text-xl font-black text-slate-900">12</p>
            </div>
            <div className="w-px h-8 bg-slate-100" />
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Earned</p>
              <p className="text-xl font-black text-emerald-500">₹6,000</p>
            </div>
          </div>

          <p className="text-[10px] font-bold text-slate-300 italic uppercase">
            * Milestone Rewards: Refer 5 friends and get a Premium Account with early-access!
          </p>
        </div>
      </div>
    </div>
  );
}
