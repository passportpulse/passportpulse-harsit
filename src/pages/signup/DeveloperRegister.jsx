import React, { useState } from "react";
import { 
  ArrowLeft, 
  Building2, 
  Search, 
  ShieldCheck, 
  BadgeCheck, 
  Zap, 
  Globe, 
  Video, 
  LayoutDashboard, 
  LineChart,
  FileText,
  User,
  Mail,
  Phone,
  Hash,
  MapPin,
  ChevronRight,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Headset
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DeveloperRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("Emerging Builder");

  const cities = ["Delhi NCR", "Mumbai", "Bangalore", "Kolkata", "Pune", "Hyderabad", "Chennai", "Ahmedabad"];

  const benefits = [
    {
      icon: <Zap className="text-amber-500" />,
      title: "Bulk Listing Manager",
      desc: "Upload entire townships or multiple phases in one go via CSV or API."
    },
    {
      icon: <Globe className="text-blue-500" />,
      title: "Project Microsites",
      desc: "Every project gets a dedicated, SEO-optimized page on our portal."
    },
    {
      icon: <Video className="text-purple-500" />,
      title: "Virtual Site Visits",
      desc: "Integrated support for Matterport 3D tours and drone footage."
    },
    {
      icon: <LayoutDashboard className="text-emerald-500" />,
      title: "Lead CRM",
      desc: "A dedicated dashboard to track every site visit request and inquiry."
    },
    {
      icon: <LineChart className="text-rose-500" />,
      title: "Heat Map Analytics",
      desc: "Access the 'Bhaiya Heat Map' to see where demand is highest."
    }
  ];

  const verificationDocs = [
    "RERA Certificate for each project.",
    "Possession Track Record (History of previous projects).",
    "Sanctioned Building Plans."
  ];

  const plans = [
    {
      name: "Emerging Builder",
      projects: "Up to 2",
      quality: "Standard",
      microsites: false,
      video: false,
      manager: false
    },
    {
      name: "City Giant",
      projects: "Up to 10",
      quality: "Verified",
      microsites: true,
      video: true,
      manager: false,
      popular: true
    },
    {
      name: "National Leader",
      projects: "Unlimited",
      quality: "Priority Verified",
      microsites: true,
      video: true,
      manager: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffcf9] font-poppins selection:bg-orange-100 selection:text-dark-orange pb-20 antialiased">
      {/* HEADER SECTION */}
      <div className="relative bg-white border-b border-orange-50 overflow-hidden pt-10 pb-16 lg:pb-24">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-widest hover:border-dark-orange hover:text-dark-orange transition-all mb-12 shadow-sm"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6 animate-fade-in">
              <Building2 size={14} className="text-dark-orange" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-dark-orange">
                Developer Legacy Program
              </span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-black text-slate-800 tracking-tighter leading-[0.9] mb-8">
              Build Your <span className="text-dark-orange">Legacy</span> <br className="hidden lg:block" />
              with Property Wala Bhaiya
            </h1>
            
            <p className="text-slate-500 text-lg lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed italic">
              "From Foundation to Finish—Reach Thousands of Verified Buyers Every Day."
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200">
                <Headset size={18} /> Request a Demo
              </button>
              <button 
                onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 text-white text-xs font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100"
              >
                Join Now <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div id="signup-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* 1. SIGN UP FORM (Quick Entry) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-orange-100/50 p-8 lg:p-12 border border-white sticky top-10">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Corporate Entry</h2>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">Collect Your Legacy Identity</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-dark-orange border border-orange-100">
                  <ShieldCheck size={24} />
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <EnterpriseInput label="Representative Name" icon={<User size={18} />} placeholder="e.g. Vikram Singh" />
                  <EnterpriseInput label="Company Name" icon={<Building2 size={18} />} placeholder="e.g. Skyline Developers Pvt Ltd" />
                  <EnterpriseInput label="RERA Registration" icon={<Hash size={18} />} placeholder="Mandatory for trust" />
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] ml-1">City of Operation</label>
                    <div className="relative flex items-center group">
                      <select className="w-full pl-4 pr-11 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange focus:ring-4 focus:ring-orange-50 transition-all appearance-none cursor-pointer">
                        <option value="">Select City</option>
                        {cities.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <MapPin className="absolute right-4 text-slate-300 pointer-events-none group-focus-within:text-dark-orange transition-colors" size={18} />
                    </div>
                  </div>
                  <EnterpriseInput label="Work Email" icon={<Mail size={18} />} placeholder="name@company.com" type="email" />
                  <EnterpriseInput label="Mobile Number" icon={<Phone size={18} />} placeholder="+91 XXXXX XXXXX" type="tel" />
                </div>

                <div className="pt-6">
                  <p className="text-[10px] text-slate-400 font-medium mb-6 flex gap-3 italic">
                    <span className="shrink-0 w-2 h-2 mt-1 rounded-full bg-emerald-500" />
                    "By signing up, I agree to provide only RERA-approved project details and to update the 'Available Units' in real-time. I understand that misrepresentation of project status will lead to the suspension of my corporate account."
                  </p>

                  <button className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-dark-orange text-white text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-orange-100 hover:bg-slate-900 transition-all active:scale-95 group">
                    Create Developer Account 
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE: BENEFITS & VERIFICATION */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* 2. DEVELOPER SUITE */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-50 shadow-sm">
              <div className="mb-8">
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">Enterprise Perks</span>
                <h3 className="text-xl font-black text-slate-800 mt-3 tracking-tight">The Developer Suite</h3>
              </div>

              <div className="space-y-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all border border-slate-100">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-800 tracking-wide uppercase">{b.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. VERIFICATION BADGE */}
            <div className="bg-linear-to-br from-emerald-600 to-emerald-800 rounded-[2.5rem] p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl shadow-emerald-100">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <BadgeCheck size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-tight uppercase">Bhaiya Approved Builder</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">The Seal of Trust</p>
                  </div>
                </div>

                <p className="text-xs font-medium text-emerald-50/80 mb-6 leading-relaxed">
                  Join the elite group of verified builders. To earn this badge, your representative will need to provide:
                </p>

                <div className="space-y-3">
                  {verificationDocs.map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                      <CheckCircle2 size={16} className="text-emerald-300 shrink-0" />
                      <span className="text-xs font-bold text-white leading-none">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. TIERED DEVELOPER PLANS */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black text-orange-500 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-widest">Pricing Strategy</span>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-800 mt-4 tracking-tighter">Tiered Developer Plans</h2>
            <p className="text-slate-500 text-sm font-medium mt-2">Scale your presence from a local giant to a national leader.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((p, i) => (
              <div 
                key={i}
                onClick={() => setSelectedPlan(p.name)}
                className={`
                  relative p-10 rounded-[2.5rem] border-2 transition-all cursor-pointer group
                  ${selectedPlan === p.name ? 'border-dark-orange bg-orange-50/30' : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-xl shadow-slate-100/30'}
                `}
              >
                {p.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                    Recommended Choice
                  </div>
                )}

                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">{p.name}</h3>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === p.name ? 'border-dark-orange bg-dark-orange text-white' : 'border-slate-200'}`}>
                    {selectedPlan === p.name && <CheckCircle2 size={14} strokeWidth={3} />}
                  </div>
                </div>

                <div className="space-y-6">
                  <PlanRow label="Active Projects" value={p.projects} />
                  <PlanRow label="Lead Quality" value={p.quality} />
                  <PlanFeature label="Project Microsites" active={p.microsites} />
                  <PlanFeature label="Video Walkthroughs" active={p.video} />
                  <PlanFeature label="Dedicated Manager" active={p.manager} />
                </div>

                <div className={`mt-10 py-4 rounded-2xl text-center text-[10px] font-black uppercase tracking-widest transition-all ${selectedPlan === p.name ? 'bg-dark-orange text-white shadow-xl shadow-orange-100' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                  {selectedPlan === p.name ? 'Plan Selected' : 'Choose This Plan'}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-12 text-center text-white relative overflow-hidden">
             <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase italic">Need a Custom Enterprise Solution?</h3>
                <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
                  Big developers often want a "Bhaiya Expert" to walk them through the bulk-upload and lead-tracking features before they commit to a high-value plan.
                </p>
                <button className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-orange-50 transition-all shadow-xl mx-auto">
                   <MessageSquare size={18} className="text-dark-orange" /> Request a Callback from Bhaiya Expert
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnterpriseInput({ label, icon, ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] ml-1">
        {label}
      </label>
      <div className="relative flex items-center group">
        <input
          {...props}
          className="w-full pl-4 pr-12 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange focus:ring-4 focus:ring-orange-50 transition-all placeholder:text-slate-300 placeholder:font-normal"
        />
        <div className="absolute right-4 text-slate-300 group-focus-within:text-dark-orange transition-colors">
          {icon}
        </div>
      </div>
    </div>
  );
}

function PlanRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">{label}</span>
      <span className="text-xs font-black text-slate-800 uppercase leading-none">{value}</span>
    </div>
  );
}

function PlanFeature({ label, active }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">{label}</span>
      {active ? (
        <CheckCircle2 size={16} className="text-emerald-500" strokeWidth={3} />
      ) : (
        <XCircle size={16} className="text-slate-200" />
      )}
    </div>
  );
}
