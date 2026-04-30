import React, { useState } from "react";
import { 
  ShieldCheck, 
  Briefcase, 
  Zap, 
  ArrowRight, 
  Star, 
  Building2, 
  Truck, 
  Lock, 
  UserCheck, 
  Scale, 
  FileCheck,
  CheckCircle2,
  Phone,
  Mail,
  Award,
  ChevronRight,
  Globe
} from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

export default function VIPSuite() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Industrial",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage name={formData.name} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 font-poppins text-white overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,102,0,0.1),transparent)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-dark-orange/10 rounded-full blur-[120px]" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">
               <Award size={16} className="fill-orange-400" /> The VIP Executive Suite
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
               Direct Access for <br />
               <span className="text-dark-orange">High-Impact</span> Decisions.
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
              Leveraging 16 years of expertise in Steel, Logistics, and Real Estate to power your next big venture.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
               <HeroMetric label="Years Experience" value="16+" />
               <HeroMetric label="User Trust" value="1M+" />
               <HeroMetric label="Assets Verified" value="₹500Cr+" />
            </div>
          </div>
        </Container>
      </section>

      {/* Main VIP Content */}
      <Section className="-mt-32 pb-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Consultation Form */}
            <div className="lg:col-span-7 bg-white rounded-[3.5rem] p-10 md:p-20 shadow-2xl text-slate-900 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[3.5rem] flex items-center justify-center">
                  <Lock size={32} className="text-slate-200" />
               </div>
               
               <div className="mb-12">
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Private Consultation</h2>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Skip the queue. Consult directly with the Founder’s Office.</p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Full Name</label>
                        <input 
                           required
                           type="text" 
                           placeholder="e.g. Aditya Birla"
                           className="w-full bg-slate-50 border border-slate-100 px-8 py-6 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Corporate Email</label>
                        <input 
                           required
                           type="email" 
                           placeholder="name@company.com"
                           className="w-full bg-slate-50 border border-slate-100 px-8 py-6 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
                           value={formData.email}
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                     </div>
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Area of Interest</label>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["Industrial", "Joint Venture", "Warehousing", "Luxury"].map(type => (
                           <button 
                              key={type}
                              type="button"
                              onClick={() => setFormData({...formData, interest: type})}
                              className={`py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.interest === type ? 'bg-slate-900 text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                           >
                              {type}
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Brief Briefing (Optional)</label>
                     <textarea 
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-slate-50 border border-slate-100 px-8 py-6 rounded-2xl text-[13px] font-medium outline-none focus:border-dark-orange transition-all h-40 resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                     />
                  </div>

                  <button 
                     type="submit"
                     className="w-full py-8 rounded-[2.5rem] bg-dark-orange text-white text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group"
                  >
                     Request Private Consultation <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </form>
            </div>

            {/* Why Consult Sidebar */}
            <div className="lg:col-span-5 space-y-12">
               <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-10 flex items-center gap-4">
                     <div className="w-1 h-8 bg-dark-orange rounded-full" />
                     Why Consult with the Founder?
                  </h3>
                  <div className="space-y-8">
                     <VIPBenefit 
                        icon={<Building2 className="text-dark-orange" />} 
                        title="Industrial DNA" 
                        desc="Benefit from insights rooted in Steel and Logistics. We don't just see land; we see structural potential and supply chain efficiency." 
                     />
                     <VIPBenefit 
                        icon={<Globe className="text-blue-500" />} 
                        title="Strategic JVs" 
                        desc="Access an exclusive network of Tier-1 developers and land owners vetted over 16 years with 0% litigation history." 
                     />
                     <VIPBenefit 
                        icon={<Scale className="text-emerald-500" />} 
                        title="Regulatory Shield" 
                        desc="Get direct guidance on complex industrial zoning, licensing, and compliance from decision-makers." 
                     />
                     <VIPBenefit 
                        icon={<Lock className="text-orange-400" />} 
                        title="Total Confidentiality" 
                        desc="High-stake deals require 100% privacy. Your data stays securely within the Founder’s Executive Office." 
                     />
                  </div>
               </div>

               {/* Logistics Feasibility Note */}
               <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 border-dashed relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-dark-orange/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700" />
                  <div className="relative z-10 flex gap-6">
                     <div className="w-16 h-16 rounded-2xl bg-dark-orange flex items-center justify-center text-white shrink-0 shadow-lg">
                        <Truck size={32} />
                     </div>
                     <div className="space-y-2">
                        <h4 className="text-sm font-black uppercase tracking-tight text-white">Logistics Feasibility Bonus</h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                           "Our VIP clients get complimentary **Logistics Feasibility Reports** for all industrial and warehouse acquisitions."
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Tiers */}
      <Section className="bg-slate-950/50 py-32 border-y border-white/5">
         <Container>
            <div className="text-center mb-20">
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Legacy of <span className="text-dark-orange">Strength</span></h2>
               <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">16 Years of Industrial Mastery</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
               <TrustPillar icon={<ShieldCheck size={32} />} title="0% Litigation" desc="Vetted JV Assets" />
               <TrustPillar icon={<Building2 size={32} />} title="Steel Grade" desc="Structural Audits" />
               <TrustPillar icon={<Truck size={32} />} title="Logistics Ready" desc="Last-Mile Connectivity" />
               <TrustPillar icon={<Scale size={32} />} title="RERA Verified" desc="Legal Compliance" />
            </div>
         </Container>
      </Section>

      {/* Footer CTA */}
      <section className="py-24 text-center">
         <Container>
            <div className="max-w-2xl mx-auto space-y-8">
               <h2 className="text-3xl font-black uppercase tracking-tighter">Need Immediate Assistance?</h2>
               <p className="text-slate-400 font-medium">Our Executive Assistant is available for high-priority inquiries.</p>
               <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:+917699988876" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 font-black uppercase text-[10px] tracking-widest hover:bg-dark-orange hover:text-white transition-all shadow-xl">
                     <Phone size={16} /> Call Executive Assistant
                  </a>
                  <a href="mailto:founder@propertywalabhaiya.com" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all">
                     <Mail size={16} /> Email Founder's Office
                  </a>
               </div>
            </div>
         </Container>
      </section>
    </div>
  );
}

// --- SUB COMPONENTS ---

function HeroMetric({ label, value }) {
  return (
    <div className="px-8 py-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
       <p className="text-2xl font-black text-white leading-none">{value}</p>
       <p className="text-[8px] font-black uppercase text-slate-500 tracking-[0.2em] mt-2">{label}</p>
    </div>
  );
}

function VIPBenefit({ icon, title, desc }) {
  return (
    <div className="flex gap-8 group">
       <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-dark-orange group-hover:text-white transition-all duration-500 shadow-inner">
          {icon}
       </div>
       <div className="space-y-2">
          <h4 className="text-base font-black uppercase tracking-tight text-white">{title}</h4>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">{desc}</p>
       </div>
    </div>
  );
}

function TrustPillar({ icon, title, desc }) {
  return (
    <div className="p-10 rounded-[3rem] border border-white/5 bg-white/2 hover:border-dark-orange transition-all text-center space-y-4">
       <div className="w-16 h-16 rounded-2xl bg-dark-orange/10 flex items-center justify-center text-dark-orange mx-auto shadow-inner">
          {icon}
       </div>
       <div>
          <h4 className="text-sm font-black uppercase tracking-tight text-white">{title}</h4>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">{desc}</p>
       </div>
    </div>
  );
}

function SuccessMessage({ name }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-center">
       <div className="max-w-2xl w-full bg-white rounded-[4rem] p-16 md:p-24 shadow-2xl relative overflow-hidden animate-in zoom-in duration-500">
          <div className="absolute top-0 left-0 w-full h-2 bg-dark-orange" />
          <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-12">
             <UserCheck size={48} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4 italic">Request Received, {name.split(' ')[0]}!</h2>
          <p className="text-sm font-black text-dark-orange uppercase tracking-[0.3em] mb-12">Priority Flag: ACTIVE</p>
          
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-left space-y-6 mb-12">
             <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-dark-orange animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 font-poppins italic">Founder's Office Status</p>
             </div>
             <p className="text-xs text-slate-500 font-medium leading-relaxed">
                A senior executive from the Founder’s Office will contact you within **4 working hours** to coordinate a private briefing.
             </p>
          </div>

          <div className="space-y-4">
             <button className="w-full py-5 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest shadow-xl">Back to VIP Suite</button>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Need immediate assistance? <span className="text-dark-orange cursor-pointer hover:underline">Click to Call Assistant</span></p>
          </div>
       </div>
    </div>
  );
}
