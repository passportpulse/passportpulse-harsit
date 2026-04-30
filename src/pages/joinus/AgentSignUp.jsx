import React, { useState } from "react";
import { 
  ShieldCheck, 
  Briefcase, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Building,
  Check,
  Lock,
  Globe,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

export default function AgentSignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    agency: "",
    phone: "",
    rera: "",
    locality: "",
    specialization: []
  });

  const specializations = ["Residential", "Commercial", "Luxury", "Plots"];

  const toggleSpec = (spec) => {
    setFormData(prev => ({
      ...prev,
      specialization: prev.specialization.includes(spec) 
        ? prev.specialization.filter(s => s !== spec)
        : [...prev.specialization, spec]
    }));
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-dark-orange/10 blur-[120px] rounded-full -mr-40" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Star size={14} className="fill-orange-400" /> Bhaiya-Approved Partner Network
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Stop chasing leads. <br />
              <span className="text-dark-orange">Start closing deals.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              Join the network that puts verified agents in front of serious buyers. Build trust with the Bhaiya Standard.
            </p>
          </div>
        </Container>
      </section>

      {/* Form & Benefits Section */}
      <Section className="-mt-16 pb-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sign Up Form */}
            <div className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200 border border-slate-100">
               <div className="mb-12">
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Professional Sign-Up</h2>
                  <p className="text-sm text-slate-500">Fill in your credentials to begin your journey as a Bhaiya Partner.</p>
               </div>

               <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                        <input 
                           type="text" 
                           placeholder="e.g. Sunil Mehra"
                           className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Agency Name (Optional)</label>
                        <input 
                           type="text" 
                           placeholder="e.g. Mehra Real Estate"
                           className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
                           value={formData.agency}
                           onChange={(e) => setFormData({...formData, agency: e.target.value})}
                        />
                     </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Mobile Number</label>
                        <input 
                           type="tel" 
                           placeholder="+91"
                           className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2 flex items-center justify-between">
                           RERA Registration Number
                           <span className="text-[8px] text-red-500 font-black">MANDATORY</span>
                        </label>
                        <input 
                           type="text" 
                           placeholder="RERA ID required"
                           className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all border-dashed"
                           value={formData.rera}
                           onChange={(e) => setFormData({...formData, rera: e.target.value})}
                        />
                     </div>
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Primary Locality</label>
                     <input 
                        type="text" 
                        placeholder="e.g. Gurgaon Sector 54"
                        className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
                        value={formData.locality}
                        onChange={(e) => setFormData({...formData, locality: e.target.value})}
                     />
                  </div>

                  <div className="space-y-4">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Specialization</label>
                     <div className="flex flex-wrap gap-3">
                        {specializations.map(s => (
                           <button 
                              key={s}
                              onClick={() => toggleSpec(s)}
                              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.specialization.includes(s) ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                           >
                              {s}
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="pt-8">
                     <button 
                        onClick={() => navigate("/dashboard")}
                        className="w-full py-6 rounded-[2rem] bg-dark-orange text-white text-sm font-black uppercase tracking-widest shadow-2xl shadow-orange-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
                     >
                        Join The Partner Network <ArrowRight size={20} />
                     </button>
                     <p className="text-center mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Already a partner? <span className="text-dark-orange cursor-pointer hover:underline">Log in here</span>
                     </p>
                  </div>
               </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-5 space-y-12">
               <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-8">Why move to Bhaiya?</h3>
                  <div className="space-y-8">
                     <BenefitItem 
                        icon={<Users className="text-emerald-500" />} 
                        title="Verified Lead Pipeline" 
                        desc="Get access to buyers who have already been OTP-verified by our heritage audit team." 
                     />
                     <BenefitItem 
                        icon={<Globe className="text-blue-500" />} 
                        title="Personal Branding" 
                        desc="Every agent gets a dedicated Digital Profile page with years of experience & Bhaiya Rating." 
                     />
                     <BenefitItem 
                        icon={<TrendingUp className="text-dark-orange" />} 
                        title="Market Intelligence" 
                        desc="Exclusive access to local transaction data and 'Demand Heat Maps' for your territory." 
                     />
                  </div>
               </div>

               <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 border-dashed">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Verification & Trust</h3>
                  <div className="space-y-4">
                     <TrustCheck text="Valid RERA Certificate Verified" />
                     <TrustCheck text="Office Audit & Geo-tagged Verification" />
                     <TrustCheck text="GST & Professional KYC Cleared" />
                  </div>
                  <div className="mt-8 flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                     <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-dark-orange">
                        <Award size={24} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-900 uppercase leading-none">Bhaiya Partner Badge</p>
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Unlock trust for Elite listings</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Subscription Tiers */}
      <Section className="bg-slate-50 py-32">
         <Container>
            <div className="text-center mb-20">
               <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Partner <span className="text-dark-orange">Subscription Tiers</span></h2>
               <p className="text-slate-500 font-medium">Scale your business with tools that match your growth.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               <TierCard 
                  name="Starter" 
                  price="Free" 
                  features={["5 Active Listings", "Standard Leads", "Basic Analytics"]} 
               />
               <TierCard 
                  name="Pro Partner" 
                  price="₹2,499/mo" 
                  featured
                  features={["50 Active Listings", "Instant Notifications", "Verified Badge", "Featured Slots"]} 
               />
               <TierCard 
                  name="Elite Agency" 
                  price="₹7,999/mo" 
                  features={["Unlimited Listings", "Priority Leads (5m early)", "Performance Manager", "Dedicated Account Head"]} 
               />
            </div>
         </Container>
      </Section>

      {/* Ethics Code */}
      <Section className="py-24 border-t border-slate-100">
         <Container>
            <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-dark-orange via-orange-400 to-dark-orange" />
               <div className="flex flex-col md:flex-row gap-16">
                  <div className="md:w-1/3">
                     <h2 className="text-3xl font-black uppercase tracking-tight mb-4">The Bhaiya <span className="text-dark-orange">Ethics Code</span></h2>
                     <p className="text-slate-400 text-sm font-medium leading-relaxed">Every partner must follow these rules to maintain the integrity of our marketplace.</p>
                  </div>
                  <div className="md:w-2/3 grid gap-6">
                     <EthicsItem text="I will only list properties for which I have a direct mandate." />
                     <EthicsItem text="I will never use 'dummy' or 'representative' photos." />
                     <EthicsItem text="I will update listing status within 12h of it being off-market." />
                     <EthicsItem text="I understand that 'ghosting' leads results in lower ratings." />
                  </div>
               </div>
            </div>
         </Container>
      </Section>

      {/* Footer CTA */}
      <section className="py-24 bg-white text-center">
         <Container>
            <div className="space-y-8">
               <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Ready to join the revolution?</h2>
               <p className="text-slate-500 font-medium max-w-xl mx-auto">Get ₹500 Welcome Credits and 2 Featured Slots for free when you sign up today.</p>
               <button className="px-12 py-6 rounded-[2rem] bg-slate-900 text-white text-sm font-black uppercase tracking-widest shadow-2xl hover:bg-dark-orange transition-all">Claim Welcome Credits</button>
            </div>
         </Container>
      </section>
    </div>
  );
}

function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex gap-6 group">
       <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
          {icon}
       </div>
       <div className="space-y-1">
          <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">{title}</h4>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
       </div>
    </div>
  );
}

function TrustCheck({ text }) {
  return (
    <div className="flex items-center gap-3">
       <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <Check size={12} strokeWidth={4} />
       </div>
       <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{text}</span>
    </div>
  );
}

function TierCard({ name, price, features, featured }) {
  return (
    <div className={`p-10 rounded-[3rem] border transition-all ${featured ? 'bg-slate-900 text-white border-slate-900 scale-105 shadow-2xl shadow-slate-900/20 z-10' : 'bg-white border-slate-100 hover:border-dark-orange'}`}>
       <div className="flex justify-between items-start mb-8">
          <div>
             <h3 className={`text-xl font-black uppercase tracking-tight ${featured ? 'text-orange-400' : 'text-slate-900'}`}>{name}</h3>
             <p className={`text-2xl font-black mt-2 ${featured ? 'text-white' : 'text-slate-900'}`}>{price}</p>
          </div>
          {featured && <Zap size={24} className="text-orange-400 fill-orange-400" />}
       </div>
       <div className="h-px bg-current opacity-10 mb-8" />
       <ul className="space-y-4 mb-12">
          {features.map(f => (
             <li key={f} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                <CheckCircle2 size={16} className={featured ? 'text-orange-400' : 'text-emerald-500'} />
                {f}
             </li>
          ))}
       </ul>
       <button className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${featured ? 'bg-dark-orange text-white' : 'bg-slate-900 text-white'}`}>Select Plan</button>
    </div>
  );
}

function EthicsItem({ text }) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all cursor-default">
       <div className="w-1.5 h-1.5 rounded-full bg-dark-orange" />
       <span className="text-[11px] font-black uppercase tracking-wider">{text}</span>
    </div>
  );
}
