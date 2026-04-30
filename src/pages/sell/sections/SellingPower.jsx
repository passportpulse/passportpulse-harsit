import React from "react";
import { Star, ShieldCheck, Diamond, Zap, CheckCircle2, XCircle, Info } from "lucide-react";

export default function SellingPower() {
  const plans = [
    {
      id: "featured",
      title: "Featured Listing",
      tagline: "The Fast Track to a Deal.",
      bestFor: "Best for: Sellers who want to close within 30 days.",
      features: [
        "Top of the Pile: Your property stays pinned at the top of search results in your locality.",
        "Maximum Eyeballs: Get up to 5x more views and inquiries compared to a standard listing.",
        "WhatsApp Boost: We push your property to our 'Active Buyers' broadcast list."
      ],
      advice: "If you’re in a hurry to sell or rent, this is your best friend. Visibility is everything!",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: "border-yellow-400 bg-yellow-50/50"
    },
    {
      id: "verified",
      title: "Bhaiya Verified",
      tagline: "The Badge of Absolute Trust.",
      bestFor: "Best for: Sellers who want to attract high-quality, serious buyers.",
      features: [
        "Physical Audit: Our field agent visits your property to verify every detail, from the floor plan to the view.",
        "Trust Shield: Listings with the 'Verified' shield get 3x more clicks because buyers know they aren't being ghosted.",
        "Premium Filtering: Buyers often toggle the 'Verified Only' switch—make sure you're on that list!"
      ],
      advice: "Trust is the most expensive currency in real estate. This badge earns it for you instantly.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      color: "border-blue-400 bg-blue-50/50"
    },
    {
      id: "high-value",
      title: "High-Value Opportunity",
      tagline: "For the Prime & The Profitable.",
      bestFor: "Best for: Luxury homes or properties with high investment potential.",
      features: [
        "Investor Targeted: We showcase your property to our database of 'High Net-Worth' investors.",
        "Data Rich: We include ROI projections and 'Heat Map' trends to show why your property is a smart buy.",
        "Elite Branding: A minimalist, premium design that sets your property apart from the crowd."
      ],
      advice: "Don't just sell a house; sell a future. This category speaks the language of investors.",
      icon: <Diamond className="w-8 h-8 text-purple-500" />,
      color: "border-purple-400 bg-purple-50/50"
    }
  ];

  return (
    <div className="py-8 md:py-16 space-y-12 md:space-y-20">
      <div className="text-center space-y-4 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-wider">
          <Zap className="w-3 h-3" /> Sell Faster
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
          Sell Faster with the <br className="hidden sm:block" />
          <span className="text-orange-500">"Bhaiya Advantage"</span>
        </h2>
        <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl mx-auto">
          Why just list when you can stand out? Thousands of properties are added daily. Choose the right category to ensure the best buyers see your home first.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        {plans.map((plan) => (
          <div key={plan.id} className={`p-6 md:p-8 rounded-[2rem] border-2 transition-all hover:shadow-xl flex flex-col ${plan.color}`}>
            <div className="mb-4 md:mb-6">{plan.icon}</div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1">{plan.title}</h3>
            <p className="text-orange-600 font-bold text-xs md:text-sm mb-4 italic">{plan.tagline}</p>
            <p className="text-slate-700 font-bold text-[10px] md:text-xs uppercase tracking-wider mb-6 bg-white/50 p-2 md:p-3 rounded-xl inline-block w-fit">
              {plan.bestFor}
            </p>
            
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
              {plan.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto bg-white/80 p-4 md:p-5 rounded-2xl border border-white shadow-sm">
              <p className="text-[10px] md:text-xs font-bold text-slate-900 flex items-center gap-2 mb-1">
                <Info className="w-3 h-3 md:w-4 md:h-4 text-orange-500" /> Bhaiya’s Advice:
              </p>
              <p className="text-[10px] md:text-xs text-slate-600 italic leading-relaxed">
                "{plan.advice}"
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6 md:space-y-8 px-4">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">📊 Which one is right for you?</h3>
        </div>

        <div className="overflow-x-auto rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 shadow-sm bg-white no-scrollbar">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 md:p-6 text-[10px] md:text-sm font-black text-slate-900 uppercase tracking-widest">Feature</th>
                <th className="p-4 md:p-6 text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest text-center">Standard</th>
                <th className="p-4 md:p-6 text-[10px] md:text-sm font-black text-blue-600 uppercase tracking-widest text-center">Verified</th>
                <th className="p-4 md:p-6 text-[10px] md:text-sm font-black text-orange-600 uppercase tracking-widest text-center">Featured</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-bold text-slate-700 uppercase">Search Rank</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-medium text-slate-500 text-center">Basic</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-bold text-blue-600 text-center uppercase tracking-tight">High</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-black text-orange-600 text-center uppercase tracking-tight">Highest</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-bold text-slate-700 uppercase">Trust Badge</td>
                <td className="p-4 md:p-6 text-center"><XCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-300 mx-auto" /></td>
                <td className="p-4 md:p-6 text-center"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mx-auto" /></td>
                <td className="p-4 md:p-6 text-center"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-bold text-slate-700 uppercase">Inquiry Quality</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-medium text-slate-500 text-center">Average</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-bold text-blue-600 text-center uppercase tracking-tight">High</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-black text-orange-600 text-center uppercase tracking-tight">Very High</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-bold text-slate-700 uppercase">Price</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-black text-emerald-600 text-center uppercase tracking-widest">Free</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-bold text-slate-900 text-center">One-time Fee</td>
                <td className="p-4 md:p-6 text-[11px] md:text-sm font-bold text-slate-900 text-center">Subscription</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 py-10 md:py-16 bg-orange-600 rounded-[2rem] md:rounded-[3rem] text-white text-center px-4 md:px-8 mx-4">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none">⚡ Ready to get started?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button className="bg-white text-orange-600 px-8 py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 shadow-xl text-xs">
            List My Property Now
          </button>
          <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all active:scale-95 shadow-xl flex items-center justify-center gap-2 text-xs">
            Chat with a Bhaiya Expert
          </button>
        </div>
      </div>
    </div>
  );
}
