import React from "react";
import { Star, TrendingDown, Diamond, Clock, ShieldCheck, Zap, ChevronRight } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

const categories = [
  {
    id: "featured",
    title: "Bhaiya’s Featured",
    subtitle: "The Spotlight",
    hook: "Don't miss the best of the best. Handpicked for maximum visibility.",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    style: "border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]",
    badge: "Spotlight",
    badgeColor: "bg-yellow-400 text-slate-900",
    glow: "spotlight-glow"
  },
  {
    id: "best-buy",
    title: "Best Buy",
    subtitle: "The Value Seekers",
    hook: "Paisa Vasool deals! Properties priced below market average for a limited time.",
    icon: <TrendingDown className="w-6 h-6 text-emerald-500" />,
    style: "border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]",
    badge: "Value",
    badgeColor: "bg-emerald-500 text-white",
    iconBadge: "₹ Savings"
  },
  {
    id: "high-value",
    title: "High-Value",
    subtitle: "The Investors",
    hook: "Smart moves for smart investors. High ROI and premium locations.",
    icon: <Diamond className="w-6 h-6 text-blue-500 diamond-pulse" />,
    style: "border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.3)]",
    badge: "Diamond",
    badgeColor: "bg-blue-600 text-white",
  },
  {
    id: "urgent-exit",
    title: "Urgent Exit",
    subtitle: "The Fast Closers",
    hook: "Sellers in a hurry = Better deals for you. Make an offer today!",
    icon: <Clock className="w-6 h-6 text-red-500" />,
    style: "border-red-400 shadow-[0_0_15px_rgba(248,113,113,0.3)]",
    badge: "Urgent",
    badgeColor: "bg-red-500 text-white",
  },
  {
    id: "verified",
    title: "Bhaiya Verified",
    subtitle: "The Trust Tier",
    hook: "100% Genuine. 0% Stress. Verified personally by the Bhaiya team.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    style: "border-blue-300 shadow-[0_0_15px_rgba(147,197,253,0.3)]",
    badge: "Verified",
    badgeColor: "bg-blue-500 text-white",
  },
  {
    id: "fresh",
    title: "Fresh Arrivals",
    subtitle: "The Early Birds",
    hook: "Be the first to see! New properties added today.",
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    style: "border-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)]",
    badge: "Just In",
    badgeColor: "bg-orange-500 text-white",
  }
];

export default function BhaiyaSelection() {
  return (
    <Section className="bg-slate-50 overflow-hidden py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-wider">
              <Star className="w-3 h-3" />
              Bhaiya's Selection
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Filters for <span className="text-orange-500 italic">Intent</span>
            </h2>
            <p className="text-slate-500 text-sm lg:text-base max-w-xl font-medium">
              Not every buyer is looking for the same thing. Explore categories handpicked for your specific needs.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest animate-pulse">
            Swipe to explore <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`
                bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border-2
                transition-all duration-500 hover:-translate-y-2 group cursor-pointer
                ${cat.style} ${cat.glow || ""}
              `}
            >
              <div className="flex flex-col h-full space-y-4 md:space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 md:p-4 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors">
                    {cat.icon}
                  </div>
                  <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 md:px-3 py-1 rounded-full ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <h3 className="text-lg md:text-xl font-black text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-orange-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {cat.subtitle}
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium pt-1 md:pt-2">
                    {cat.hook}
                  </p>
                </div>

                <div className="pt-2 md:pt-4 mt-auto">
                  <button className="flex items-center gap-2 text-slate-900 font-black text-[10px] md:text-xs uppercase tracking-wider group-hover:text-orange-500 transition-colors">
                    View Listings <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
