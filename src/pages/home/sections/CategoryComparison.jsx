import { useState } from "react";
import { X, BarChart3 } from "lucide-react";
import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import Header from "../../../components/Header";

export default function CategoryComparison() {
  const [open, setOpen] = useState(false);

  const data = [
    {
      category: "Featured",
      user: "Serious Sellers",
      seller: "5x more inquiries",
      buyer: "Guaranteed active seller",
    },
    {
      category: "Best Buy",
      user: "Budget Hunters",
      seller: "Fast liquidation",
      buyer: "Immediate equity / savings",
    },
    {
      category: "High-Value",
      user: "Investors",
      seller: "Attracts big-ticket buyers",
      buyer: "Potential for high returns",
    },
    {
      category: "Urgent Exit",
      user: "Relocating Sellers",
      seller: "Quickest closing time",
      buyer: "High negotiation power",
    },
    {
      category: "Verified",
      user: "Risk-Averse Buyers",
      seller: "Premium trust badge",
      buyer: "No fake listings / photos",
    },
  ];

  return (
    <>
      {/* NEW SECTION WRAPPER */}
      <Section className="relative bg-[#022c22] overflow-hidden py-24 border-y border-emerald-900/50">
        {/* Subtle Visual Interest */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none" />
        
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]" 
          style={{ 
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
            backgroundSize: "32px 32px" 
          }}
        />

        <Container className="relative z-10">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-lg lg:text-4xl font-bold tracking-tight">
              <span className="text-white">Filters for </span> <span className="text-orange-500">Intent</span>
            </h2>
            <p className="text-emerald-100/70 text-xs lg:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
              Not every buyer is looking for the same thing—some want a bargain, while others want a trophy home
            </p>
          </div>
          
          {/* BUTTON */}
          <div className="flex justify-center pt-2 pb-12">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-emerald-900 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
            >
              <BarChart3 size={18} />
              Category Comparison
            </button>
          </div>
        </Container>
      </Section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

            {/* HEADER */}
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-900 uppercase tracking-wide">
                📊 Category Comparison
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">

                {/* HEAD */}
                <thead>
                  <tr className="bg-slate-50 text-[10px] uppercase font-black text-slate-500 tracking-widest">
                    <th className="p-4">Category</th>
                    <th className="p-4">Targeted User</th>
                    <th className="p-4">Seller Benefit</th>
                    <th className="p-4">Buyer Benefit</th>
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>
                  {data.map((row, i) => (
                    <tr
                      key={i}
                      className="border-t border-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                    >
                      <td className="p-4 font-black text-slate-900">
                        {row.category}
                      </td>
                      <td className="p-4">{row.user}</td>
                      <td className="p-4">{row.seller}</td>
                      <td className="p-4">{row.buyer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* FOOTER */}
            <div className="p-4 border-t border-slate-100 text-center text-[10px] text-slate-400 font-medium">
              Helping you choose the right category for better results 🚀
            </div>
          </div>
        </div>
      )}
    </>
  );
}
