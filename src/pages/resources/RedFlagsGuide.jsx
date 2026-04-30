import React, { useState } from "react";
import { 
  ShieldAlert, 
  FileWarning, 
  Construction, 
  MapPinOff, 
  Scale, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Download,
  Lock,
  Building,
  Zap,
  Info
} from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

export default function RedFlagsGuide() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-poppins">
      {/* Hero / Squeeze Header */}
      <section className="bg-slate-900 pt-24 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-dark-orange/10 to-transparent" />
        <Container className="relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">
               16 Years of Industrial & Residential Expertise
            </div>
            <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
               Don't Sign That <br />
               <span className="text-dark-orange">Contract</span> Until <br />
               You Read This.
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto uppercase">
               10 Critical Red Flags That Can Save You Crores in Real Estate Losses.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Squeeze Section */}
      <Section className="-mt-32 pb-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
             {/* Left: Pain Points & What's Inside */}
             <div className="lg:col-span-7 space-y-12">
                <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100">
                   <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">What's inside this 15-page Field Guide:</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                      <InsideItem icon={<MapPinOff className="text-red-500" />} title="The Logistics Trap" desc="Why 40% of warehouses fail operational audits due to road-width errors." />
                      <InsideItem icon={<Construction className="text-orange-500" />} title="Steel Integrity" desc="How to spot structural shortcuts in 'premium' residential projects." />
                      <InsideItem icon={<Scale className="text-blue-500" />} title="The Paper Trail" desc="A 16-year checklist for title verification that banks won't tell you about." />
                      <InsideItem icon={<Building className="text-emerald-500" />} title="Zoning Secrets" desc="Ensure your factory isn't shut down by future residential encroachment." />
                   </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                   <TrustMetric value="16+" label="Years Mastery" />
                   <TrustMetric value="10k+" label="Downloads" />
                   <TrustMetric value="0" label="Spam Promise" />
                </div>
             </div>

             {/* Right: Lead Form */}
             <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl border-4 border-dark-orange/20 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-dark-orange/5 rounded-bl-full" />
                   
                   {!submitted ? (
                      <div className="space-y-8 relative z-10">
                         <div>
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">Get the Free Guide</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sent instantly to your WhatsApp/Email</p>
                         </div>

                         <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
                               <input required type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-[13px] font-black outline-none focus:border-dark-orange" />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                               <input required type="email" placeholder="name@company.com" className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-[13px] font-black outline-none focus:border-dark-orange" />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">I am interested in:</label>
                               <select className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl text-[13px] font-black outline-none focus:border-dark-orange appearance-none">
                                  <option>Residential</option>
                                  <option>Industrial/Commercial</option>
                               </select>
                            </div>

                            <button type="submit" className="w-full py-6 rounded-[2rem] bg-dark-orange text-white text-xs font-black uppercase tracking-widest shadow-2xl shadow-orange-500/20 flex items-center justify-center gap-4 group">
                               Get The Free Guide Now <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            </button>

                            <p className="text-[9px] text-center font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                               <Lock size={12} /> Your privacy is our 16-year promise.
                            </p>
                         </form>
                      </div>
                   ) : (
                      <div className="text-center space-y-8 animate-in zoom-in duration-500">
                         <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                            <CheckCircle2 size={40} />
                         </div>
                         <div>
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 italic">Guide Sent! 🚀</h3>
                            <p className="text-sm font-medium text-slate-500 leading-relaxed uppercase">Check your inbox. Your legacy begins with the right knowledge.</p>
                         </div>
                         <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                            <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2"><Zap size={14} className="text-dark-orange" /> While you wait:</p>
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-6">Want to see properties that have already passed these 10 tests?</p>
                            <button className="w-full py-4 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">Browse Verified Listings</button>
                         </div>
                      </div>
                   )}
                </div>
             </div>
          </div>
        </Container>
      </Section>

      {/* Red Flags Preview */}
      <Section className="bg-white py-32 border-t border-slate-100">
         <Container>
            <div className="text-center mb-20">
               <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">The "Steel-Standard" <span className="text-dark-orange">Lens</span></h2>
               <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">A Sneak Peek at the Guide</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
               <RedFlagPreview 
                  num="01" 
                  title="The Narrow-Neck Entry" 
                  desc="If the approach road is <30ft, your industrial logistics will fail. 40ft containers can't turn." 
               />
               <RedFlagPreview 
                  num="05" 
                  title="RERA-Pending Promises" 
                  desc="'RERA is coming in 2 weeks' is the biggest trap. No RERA, No Deal. Ever." 
               />
            </div>
         </Container>
      </Section>

      {/* Social Proof */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
         <Container className="text-center">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Trusted by Investors from Durgapur to Delhi</h4>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/HDFC_Bank_Logo.svg" className="h-6" alt="Trust" />
               <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/ICICI_Bank_Logo.svg/1200px-ICICI_Bank_Logo.svg.png" className="h-6" alt="Trust" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Tata_logo.svg" className="h-6" alt="Trust" />
            </div>
         </Container>
      </section>
    </div>
  );
}

// --- HELPERS ---

function InsideItem({ icon, title, desc }) {
  return (
    <div className="space-y-3 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dark-orange transition-all group">
       <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-dark-orange group-hover:text-white transition-all">{icon}</div>
       <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{title}</h4>
       <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function TrustMetric({ value, label }) {
  return (
    <div className="p-8 rounded-[2rem] bg-slate-900 text-white text-center border border-white/5 shadow-xl">
       <h4 className="text-2xl font-black text-dark-orange mb-1">{value}</h4>
       <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">{label}</p>
    </div>
  );
}

function RedFlagPreview({ num, title, desc }) {
  return (
    <div className="flex gap-8 group">
       <div className="text-4xl font-black text-slate-100 group-hover:text-dark-orange transition-colors">{num}</div>
       <div className="space-y-2">
          <h4 className="text-base font-black uppercase tracking-tight text-slate-900">{title}</h4>
          <p className="text-xs text-slate-500 leading-relaxed font-medium uppercase">{desc}</p>
       </div>
    </div>
  );
}
