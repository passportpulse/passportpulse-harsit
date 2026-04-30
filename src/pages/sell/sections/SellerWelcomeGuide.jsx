import React from "react";
import { Camera, RefreshCw, PhoneCall, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";

export default function SellerWelcomeGuide() {
  const steps = [
    {
      title: "1. Make Your First Impression Count 📸",
      description: "A property with great photos gets 5x more inquiries.",
      tips: [
        "The Golden Rule: Open all curtains and turn on all lights before clicking photos.",
        "The 'Must-Haves': Entrance, living area, kitchen, and balcony view.",
        "Video Power: Properties with a 30-second walk-through video stay at the top."
      ],
      icon: <Camera className="w-6 h-6 text-orange-500" />
    },
    {
      title: "2. The 'Real-Time' Secret: Keep it Fresh ⚡",
      description: "Buyers hate calling about a property that is already sold.",
      tips: [
        "The Status Toggle: Use your dashboard to switch between Available or Sold.",
        "Price Updates: Drop your price to instantly alert 'shortlisted' users.",
        "The 48-Hour Check: Log in every couple of days to boost your algorithm."
      ],
      icon: <RefreshCw className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "3. Handling Inquiries Like a Pro 📞",
      description: "When a buyer expresses interest, you'll receive a WhatsApp alert.",
      tips: [
        "Speed is Key: Try to call back within 1 hour to beat the competition.",
        "Be Prepared: Keep carpet area, maintenance, and Vastu details handy."
      ],
      icon: <PhoneCall className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-slate-200 shadow-sm overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-orange-500/5 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 blur-3xl" />
      
      <div className="relative space-y-10 md:space-y-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tight">
            🏠 Welcome to the Family, <span className="text-orange-500">Partner!</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Namaste! We are thrilled to have you on Property Wala Bhaiya. Our goal is simple: to get your property the attention it deserves and close your deal faster than anyone else.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-orange-50 transition-colors">
              <div className="p-3 bg-white rounded-xl shadow-sm w-fit">{step.icon}</div>
              <h3 className="text-base md:text-lg font-black text-slate-900 leading-tight">{step.title}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium">{step.description}</p>
              <ul className="space-y-2 pt-2">
                {step.tips.map((tip, j) => (
                  <li key={j} className="flex gap-2 text-[10px] md:text-xs font-semibold text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 text-white">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-black flex items-center gap-2 uppercase tracking-tight">
                <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-blue-400" /> Safety & Trust
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Want a "Verified by Bhaiya" badge? Schedule a quick video verification call with our team. 
                Your contact number is only shared with verified, logged-in users to prevent spam.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-orange-400">🚀 Your To-Do List:</p>
              <div className="space-y-2">
                {["Complete your profile", "Upload at least 5 high-quality photos", "Set your 'Expected Price'", "Turn on WhatsApp notifications"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded border-2 border-slate-700 flex items-center justify-center text-slate-700"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 flex items-center justify-center font-black text-lg md:text-xl text-white">B</div>
              <div>
                <p className="text-xs md:text-sm font-black uppercase tracking-wider">Bhaiya’s Pro Tip</p>
                <p className="text-[10px] md:text-xs text-slate-400 font-bold italic uppercase">Expert Real Estate Advisor</p>
              </div>
            </div>
            <p className="text-xs md:text-sm italic leading-relaxed text-slate-300">
              "A realistic price and clear photos are the two wheels of the property cycle. Keep them balanced, and your deal will reach the finish line in no time!"
            </p>
            <button className="w-full flex items-center justify-center gap-2 py-3 md:py-4 bg-emerald-500 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all text-white">
              <MessageSquare className="w-4 h-4" /> Need Help? Chat with Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
