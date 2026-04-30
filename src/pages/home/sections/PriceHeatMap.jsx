import React, { useState } from "react";
import { Map as MapIcon, Info, TrendingUp, Zap, MousePointer2 } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";

export default function PriceHeatMap() {
  const [hoveredArea, setHoveredArea] = useState(null);

  const areas = [
    { id: 1, name: "City Centre", price: "₹6,500", trend: "+4%", demand: "High", color: "bg-red-500", top: "40%", left: "45%", size: "w-24 h-24" },
    { id: 2, name: "Bidhannagar", price: "₹4,200", trend: "+2%", demand: "Medium", color: "bg-yellow-500", top: "30%", left: "60%", size: "w-32 h-32" },
    { id: 3, name: "Muchipara", price: "₹3,100", trend: "-1%", demand: "Stable", color: "bg-emerald-500", top: "60%", left: "30%", size: "w-28 h-28" },
    { id: 4, name: "Benachity", price: "₹5,800", trend: "+5%", demand: "Very High", color: "bg-red-600", top: "50%", left: "55%", size: "w-20 h-20" },
    { id: 5, name: "Fuljhore", price: "₹3,800", trend: "+1%", demand: "Medium", color: "bg-yellow-400", top: "25%", left: "35%", size: "w-24 h-24" },
  ];

  return (
    <Section className="bg-slate-900 py-12 md:py-24 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 relative z-10 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-wider border border-orange-500/20">
                <TrendingUp className="w-3 h-3" /> Market Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight">
                Don't Just Search. <br className="hidden sm:block" />
                <span className="text-orange-500">Invest Smart</span> with Bhaiya’s Heat Map.
              </h2>
              <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                See which neighborhoods are heating up and where the best deals are hidden. Our real-time data visualizes the market so you don't have to guess.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <div className="w-8 h-8 rounded-full bg-red-500 mb-3" />
                <p className="text-white font-bold text-sm">Red Zones</p>
                <p className="text-slate-500 text-[10px] mt-1 uppercase font-black tracking-widest">High-Demand</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <div className="w-8 h-8 rounded-full bg-yellow-500 mb-3" />
                <p className="text-white font-bold text-sm">Yellow Zones</p>
                <p className="text-slate-500 text-[10px] mt-1 uppercase font-black tracking-widest">Stable Growth</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-500 mb-3" />
                <p className="text-white font-bold text-sm">Green Zones</p>
                <p className="text-slate-500 text-[10px] mt-1 uppercase font-black tracking-widest">Best Value</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-xl shadow-orange-500/20 text-xs">
                <MapIcon className="w-4 h-4" /> Open Full Interactive Map
              </button>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-video lg:aspect-square xl:aspect-video rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-slate-800 border-2 sm:border-4 border-slate-700 shadow-2xl group">
            {/* Simulated Map Background */}
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="City Map"
            />
            
            {/* Heat Map Overlays */}
            <div className="absolute inset-0 pointer-events-none">
              {areas.map((area) => (
                <div
                  key={area.id}
                  className={`absolute rounded-full blur-2xl opacity-60 transition-all duration-500 animate-pulse ${area.color} ${area.size}`}
                  style={{ top: area.top, left: area.left }}
                />
              ))}
            </div>

            {/* Interactive Points */}
            <div className="absolute inset-0">
              {areas.map((area) => (
                <div
                  key={area.id}
                  onMouseEnter={() => setHoveredArea(area)}
                  onMouseLeave={() => setHoveredArea(null)}
                  className="absolute cursor-help group/point"
                  style={{ top: area.top, left: area.left }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-white rounded-full shadow-lg border-2 border-slate-900 group-hover/point:scale-150 transition-transform" />
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/20 rounded-full animate-ping pointer-events-none" />
                    
                    {hoveredArea?.id === area.id && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white rounded-2xl p-4 shadow-2xl animate-fade-in z-50">
                        <div className="space-y-2">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{area.name}</p>
                          <div className="flex items-end justify-between">
                            <p className="text-xl font-black text-slate-900">{area.price}<span className="text-[10px] text-slate-400">/sq.ft</span></p>
                            <p className="text-xs font-black text-emerald-500 flex items-center gap-0.5">
                              <TrendingUp className="w-3 h-3" /> {area.trend}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-slate-100">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Demand: <span className="text-orange-500">{area.demand}</span></p>
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="glass px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Price Updates
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <div className="dark-glass p-4 rounded-2xl text-white space-y-3 max-w-[200px]">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Map Legend</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-xs font-bold">Trending High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold">Best Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
