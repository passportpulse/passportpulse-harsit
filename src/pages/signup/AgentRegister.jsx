import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Phone, User, Check, Building, ShieldCheck, Mail, Hash, MapPin, Map,
  Calendar, TrendingUp, Lock, Zap, Clock, ChevronRight, X, ArrowRight,
  FileText, Upload, Award, Star, Bell, LayoutDashboard, Briefcase, CheckCircle,
  Fingerprint, Plus, Info, Headset, Target, PartyPopper, IdCard
} from "lucide-react";

export default function AgentRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    identity: "Individual Agent", // Individual Agent or Brokerage Firm
    name: "",
    agencyName: "",
    mobile: "",
    altMobile: "",
    email: "",
    reraNumber: "",
    gstNumber: "",
    panNumber: "",
    aadhaarNumber: "",
    experience: "",
    locality: "",
    city: "",
    state: "West Bengal",
    dob: "",
    age: "",
    pincode: "",
    permanentAddress: "",
    officeAddress: "",
    specialization: [],
    ethicsChecked: {
      mandate: false,
      realPhotos: false,
      hourlyUpdate: false,
      noGhosting: false
    },
    tier: "Pro Partner",
    welcomeClaimed: false
  });

  const specializations = ["Residential", "Commercial", "Luxury", "Plots", "Industrial", "Agriculture"];

  const toggleSpecialization = (spec) => {
    setFormData(prev => ({
      ...prev,
      specialization: prev.specialization.includes(spec)
        ? prev.specialization.filter(s => s !== spec)
        : [...prev.specialization, spec]
    }));
  };

  const nextStep = (e) => {
    if (e) e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-poppins py-10 antialiased relative selection:bg-orange-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Navigation */}
        {step < 4 && (
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => (step === 1 ? (window.history.back()) : setStep(step - 1))}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm text-slate-400 hover:text-dark-orange hover:border-dark-orange active:scale-95 transition-all shadow-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex items-center gap-4">
               <div className="hidden md:flex gap-1">
                 {[1,2,3].map(i => (
                   <div key={i} className={`h-1 w-8 rounded-full transition-all duration-500 ${step >= i ? 'bg-dark-orange' : 'bg-slate-200'}`} />
                 ))}
               </div>
               <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Onboarding • {step === 1 ? 'Profile' : step === 2 ? 'Verification' : 'Success Plan'}
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-[1.5rem] bg-slate-900 border border-slate-800 mb-6 shadow-xl shadow-slate-200 transform hover:-translate-y-0.5 transition-all cursor-default">
                <div className="w-5 h-5 rounded-full bg-dark-orange flex items-center justify-center">
                  <Briefcase size={12} className="text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Bhaiya Partner Gateway
                </span>
              </div>
              <h1 className="text-2xl lg:text-5xl font-black text-slate-800 tracking-tight leading-none mb-4">
                Level Up Your <span className="text-dark-orange">Real Estate Legacy.</span>
              </h1>
              <p className="text-[13px] text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                India's most tech-forward partner program for verified consultants. Build trust, get leads, and close faster.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Comprehensive Form */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] p-8 lg:p-12 border border-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 -mr-20 -mt-20 rounded-full blur-3xl opacity-50"></div>
                  
                  <form onSubmit={nextStep} className="space-y-10 relative">
                    
                    {/* Section 1: Identity & Primary */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-dark-orange">
                           <User size={18} />
                         </div>
                         <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">1. Personal & Identity</h3>
                      </div>

                      <div className="p-2 bg-slate-50 rounded-2xl flex gap-2">
                        <IdentityTab label="Individual Agent" active={formData.identity} set={(v) => setFormData({...formData, identity: v})} />
                        <IdentityTab label="Brokerage Firm" active={formData.identity} set={(v) => setFormData({...formData, identity: v})} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Full Name" icon={<User size={18} />} placeholder="Legal name as per PAN" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                        <InputField label="Agency / Company Name" icon={<Building size={18} />} placeholder="Optional" value={formData.agencyName} onChange={(e) => setFormData({...formData, agencyName: e.target.value})} />
                        <InputField label="Primary Mobile" subLabel="WhatsApp OTP" icon={<Phone size={18} />} placeholder="+91" type="tel" value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} required />
                        <InputField label="Alternate Mobile" icon={<Phone size={18} />} placeholder="For emergency" type="tel" value={formData.altMobile} onChange={(e) => setFormData({...formData, altMobile: e.target.value})} />
                        <InputField label="Professional Email" icon={<Mail size={18} />} placeholder="Verify for billing" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                        <div className="grid grid-cols-2 gap-3">
                          <InputField label="DOB" icon={<Calendar size={18} />} type="date" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} required />
                          <InputField label="Age" icon={<Hash size={18} />} placeholder="Yrs" type="number" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Professional Credentials */}
                    <div className="space-y-6 pt-10 border-t border-slate-100">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-dark-orange">
                           <Award size={18} />
                         </div>
                         <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">2. Professional Credentials</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <InputField label="RERA Registration ID" subLabel="Mandatory" icon={<ShieldCheck size={18} />} placeholder="Must list properties" value={formData.reraNumber} onChange={(e) => setFormData({...formData, reraNumber: e.target.value})} required />
                        </div>
                        <InputField label="PAN Card Number" icon={<FileText size={18} />} placeholder="10-digit PAN" value={formData.panNumber} onChange={(e) => setFormData({...formData, panNumber: e.target.value})} required />
                        <InputField label="GST Number" icon={<FileText size={18} />} placeholder="15-digit GST (Optional)" value={formData.gstNumber} onChange={(e) => setFormData({...formData, gstNumber: e.target.value})} />
                        <InputField label="Aadhaar Card Number" icon={<IdCard size={18} />} placeholder="12-digit Aadhaar" value={formData.aadhaarNumber} onChange={(e) => setFormData({...formData, aadhaarNumber: e.target.value})} required />
                        <InputField label="Years of Experience" icon={<Clock size={18} />} placeholder="e.g. 5 Years" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} required />
                      </div>
                    </div>

                    {/* Section 3: Geographic reach */}
                    <div className="space-y-6 pt-10 border-t border-slate-100">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-dark-orange">
                           <MapPin size={18} />
                         </div>
                         <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">3. Territorial Reach</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Primary City" icon={<Map size={18} />} placeholder="e.g. Durgapur" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} required />
                        <InputField label="Primary Locality" icon={<MapPin size={18} />} placeholder="e.g. City Center" value={formData.locality} onChange={(e) => setFormData({...formData, locality: e.target.value})} required />
                        <InputField label="Pincode" icon={<Hash size={18} />} placeholder="713XXX" value={formData.pincode} onChange={(e) => setFormData({...formData, pincode: e.target.value})} required />
                        <InputField label="State" icon={<Map size={18} />} placeholder="West Bengal" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />

                        <div className="md:col-span-2">
                          <InputField label="Office Address" icon={<Building size={18} />} placeholder="Physical Office HQ" value={formData.officeAddress} onChange={(e) => setFormData({...formData, officeAddress: e.target.value})} required />
                        </div>
                        <div className="md:col-span-2">
                          <InputField label="Permanent Home Address" icon={<MapPin size={18} />} placeholder="As per Identity Proof" value={formData.permanentAddress} onChange={(e) => setFormData({...formData, permanentAddress: e.target.value})} required />
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Specialization Choice */}
                    <div className="space-y-6 pt-10 border-t border-slate-100">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-dark-orange">
                           <Star size={18} />
                         </div>
                         <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">4. Domain Expertise</h3>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {specializations.map(spec => (
                          <button
                            key={spec}
                            type="button"
                            onClick={() => toggleSpecialization(spec)}
                            className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 text-center group ${formData.specialization.includes(spec) ? 'border-dark-orange bg-orange-50 text-dark-orange shadow-md' : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-200 hover:bg-white'}`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${formData.specialization.includes(spec) ? 'bg-dark-orange text-white' : 'bg-white text-slate-300 group-hover:text-slate-400'}`}>
                              <Plus size={20} className={formData.specialization.includes(spec) ? 'rotate-45 transition-transform' : ''} />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-wider">{spec}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-4 py-5 rounded-2xl bg-dark-orange text-white text-[12px] font-black uppercase tracking-[0.25em] shadow-2xl shadow-orange-200 hover:bg-slate-900 active:scale-[0.98] transition-all"
                    >
                      Authenticate & Proceed <ChevronRight size={18} />
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: Sticky Trust Bar */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="space-y-8 sticky top-10">
                  
                  <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-10 shadow-3xl text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-dark-orange/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                    <div className="relative z-10 space-y-10">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-dark-orange transition-all duration-500">
                          <LayoutDashboard size={28} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-white">The Partner Suite</h3>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">War-Room Tools</p>
                        </div>
                      </div>

                      <div className="space-y-8">
                         <BenefitItem icon={<Zap />} title="Verified Lead Pipeline" desc="Direct access to high-intent buyers filtered by our AI." />
                         <BenefitItem icon={<Target />} title="Locality Domination" desc="Rank #1 in your primary area search results." />
                         <BenefitItem icon={<TrendingUp />} title="Dynamic Dashboards" desc="Real-time tracking of hits, views, and inquiries." />
                         <BenefitItem icon={<ShieldCheck />} title="Bhaiya Seal of Trust" desc="The 'Approved Partner' badge increases conversion by 40%." />
                      </div>

                      <div className="pt-8 border-t border-white/10">
                        <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                           <PartyPopper size={24} className="text-dark-orange shrink-0" />
                           <p className="text-[11px] font-medium leading-relaxed italic text-slate-300">
                             "New partners get <span className="text-white font-black underline decoration-dark-orange underline-offset-4">₹500 Listing Credits</span> instantly upon verification!"
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-[2rem] border-2 border-slate-100 bg-white flex items-center gap-4 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                      <Info size={24} className="text-dark-orange" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 leading-relaxed">
                      All data provided above must match your UIDAI / RERA records. <br/>
                      <span className="text-slate-800">Verification usually takes 2-4 business hours.</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 max-w-5xl mx-auto">
             <div className="text-center mb-10">
              <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none mb-4">
                Verify Your <span className="text-dark-orange underline underline-offset-8">Authority</span>
              </h1>
              <p className="text-[13px] text-slate-500 font-medium">Please upload clear scanned copies of your official documents.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Document Rack */}
              <div className="bg-white rounded-[2.5rem] shadow-xl p-10 border border-white space-y-10">
                <div className="space-y-6">
                  <h3 className="text-[11px] font-black uppercase text-dark-orange tracking-[0.2em] flex items-center gap-2">
                    <Upload size={14}/> 1. Professional Licenses
                  </h3>
                  <FileUploadCard label="RERA Certificate" sub="Mandatory for Multiple Listings" />
                  <FileUploadCard label="GST Certificate" sub="Optional (Required for Tax Invoice)" />
                </div>

                <div className="space-y-6 pt-10 border-t border-slate-50">
                  <h3 className="text-[11px] font-black uppercase text-dark-orange tracking-[0.2em] flex items-center gap-2">
                    <Fingerprint size={14}/> 2. Personal & Business ID
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FileUploadCard label="PAN Card" sub="For TDS compliance" />
                    <FileUploadCard label="Aadhaar Card" sub="Verify Identity" />
                  </div>
                  <FileUploadCard label="Office Location Photo" sub="Geo-tagged image of physical HQ" />
                </div>
              </div>

              {/* Ethics & Commitment */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-3xl text-white">
                <div className="flex items-center gap-4 mb-8">
                  <Lock size={20} className="text-dark-orange" />
                  <h2 className="text-xl font-black tracking-tight uppercase">Agent Code of Ethics</h2>
                </div>
                
                <div className="space-y-5">
                   <EthicsItem 
                    title="Direct Mandate Only" 
                    desc="I agree to list only properties where I have the owner's legal authority to represent."
                    checked={formData.ethicsChecked.mandate}
                    toggle={() => setFormData({...formData, ethicsChecked: {...formData.ethicsChecked, mandate: !formData.ethicsChecked.mandate}})}
                   />
                   <EthicsItem 
                    title="Zero Ghosting Policy" 
                    desc="I will acknowledge all leads within 4 hours. Persistent ghosting equals account ban."
                    checked={formData.ethicsChecked.noGhosting}
                    toggle={() => setFormData({...formData, ethicsChecked: {...formData.ethicsChecked, noGhosting: !formData.ethicsChecked.noGhosting}})}
                   />
                   <EthicsItem 
                    title="Verified Photography" 
                    desc="I will never use sample photos. Every photo must be from the actual site."
                    checked={formData.ethicsChecked.realPhotos}
                    toggle={() => setFormData({...formData, ethicsChecked: {...formData.ethicsChecked, realPhotos: !formData.ethicsChecked.realPhotos}})}
                   />
                   <EthicsItem 
                    title="12h Market Update" 
                    desc="I will mark property as 'SOLD' or 'OFF-MARKET' within 12 hours of deal closing."
                    checked={formData.ethicsChecked.hourlyUpdate}
                    toggle={() => setFormData({...formData, ethicsChecked: {...formData.ethicsChecked, hourlyUpdate: !formData.ethicsChecked.hourlyUpdate}})}
                   />
                </div>

                <div className="mt-12 space-y-4">
                  <p className="text-[10px] text-slate-400 font-bold leading-relaxed px-2">
                    * By clicking verify, you enter a legally binding contract with Property Wala Bhaiya.
                  </p>
                  <button
                    onClick={nextStep}
                    disabled={!Object.values(formData.ethicsChecked).every(Boolean)}
                    className="w-full py-5 rounded-2xl bg-dark-orange text-white text-[12px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:text-slate-900 disabled:opacity-20 disabled:scale-100 disabled:cursor-not-allowed transition-all active:scale-95"
                  >
                    Agree & Authenticate
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-6xl mx-auto">
              <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none mb-4">
                Partner <span className="text-dark-orange">Subscription</span> Plans
              </h1>
              <p className="text-[13px] text-slate-500 font-medium font-medium">Scale your business with the right tier of support.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SubscriptionCard 
                name="Starter" 
                price="Free Forever" 
                desc="For solo agents testing the waters."
                benefits={["5 Active Project Listings", "Standard CRM Dashboard", "24h Response Window"]}
                selected={formData.tier === "Starter"}
                onSelect={() => setFormData({...formData, tier: "Starter"})}
              />
              <SubscriptionCard 
                name="Pro Partner" 
                price="₹2,499/mo" 
                desc="Dominating your local neighborhood."
                benefits={["50 Active Project Listings", "Premium Verified Leads", "Partner Trust Badge", "Featured on Homepage"]}
                selected={formData.tier === "Pro Partner"}
                onSelect={() => setFormData({...formData, tier: "Pro Partner"})}
                popular
              />
              <SubscriptionCard 
                name="Elite Agency" 
                price="Custom Billing" 
                desc="For large broker firms & teams."
                benefits={["Unlimited Listings", "Mass CRM integration", "Dedicated Account Manager", "Priority Lead Access (Early Bird)"]}
                selected={formData.tier === "Elite Agency"}
                onSelect={() => setFormData({...formData, tier: "Elite Agency"})}
              />
            </div>

            <div className="mt-16 bg-slate-100/50 rounded-[3rem] p-12 text-center border border-slate-200 shadow-inner">
               <h2 className="text-2xl font-black text-slate-900 mb-2">Final Step: Activation</h2>
               <p className="text-sm text-slate-500 mb-8 font-medium">Click below to generate your unique Partner ID and access the 'War Room' Dashboard.</p>
               <button onClick={() => setStep(4)} className="px-16 py-5 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-black shadow-2xl transition-all transform active:scale-95">
                 Initialize My Account
               </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in zoom-in-95 duration-700 text-center py-20 max-w-2xl mx-auto">
             <div className="relative inline-block mb-10">
               <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center animate-pulse">
                 <CheckCircle size={56} className="text-dark-orange" />
               </div>
               <div className="absolute -top-4 -right-4 bg-slate-900 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg">AUTHENTICATED</div>
             </div>
             
             <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Welcome, Bhaiya Partner <br/><span className="text-dark-orange">{formData.name}!</span></h1>
             <p className="text-sm text-slate-500 font-medium leading-relaxed mb-12">
               Your credentials have been queued for manual oversight. Your temporary **Partner ID: BP-{(Math.random()*10000).toFixed(0)}** is now active. You have been granted your first **₹500 Credit** for listing enhancements.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <button onClick={() => navigate("/dashboard")} className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-dark-orange text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-200 hover:bg-orange-600 transition-all">Enter War Room <LayoutDashboard size={18}/></button>
                <button onClick={() => navigate("/add-property")} className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-white border-2 border-slate-900 text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">List First Project <Plus size={18}/></button>
             </div>
          </div>
        )}

        {/* Global Footer Call for Demos */}
        {step < 4 && (
          <div className="mt-24 pt-12 border-t border-slate-200">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight uppercase px-4">Want a guided walkthrough?</h2>
              <p className="text-[13px] text-slate-500 font-medium mb-8">Schedule a personal deep-dive of our automation tools with a product expert.</p>
              <button className="px-10 py-4 bg-slate-900 text-dark-orange text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all shadow-2xl shadow-slate-300 active:scale-95 flex items-center justify-center gap-3 mx-auto">
                 <Headset size={18} />
                 Schedule Setup Demo
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

{/* SUB-COMPONENTS */}

function InputField({ label, subLabel, icon, ...props }) {
  return (
    <div className="space-y-1.5 flex-1 group">
      <div className="flex justify-between items-baseline mb-1">
        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 group-focus-within:text-dark-orange transition-colors">{label}</label>
        {subLabel && <span className="text-[9px] font-black text-dark-orange px-2 py-0.5 rounded bg-orange-100/50">{subLabel}</span>}
      </div>
      <div className="relative flex items-center">
        <input {...props} className="w-full pl-4 pr-11 py-3.5 rounded-xl bg-slate-50 border border-slate-100 text-[13px] font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all placeholder:text-slate-300 shadow-sm hover:border-slate-300" />
        <div className="absolute right-4 text-slate-300 group-focus-within:text-dark-orange transition-colors duration-300">{icon}</div>
      </div>
    </div>
  );
}

function IdentityTab({ label, active, set }) {
  const isSelected = active === label;
  return (
    <button type="button" onClick={() => set(label)} className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${isSelected ? 'bg-white text-dark-orange shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}>
      {label}
    </button>
  );
}

function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex gap-5 group">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-dark-orange group-hover:border-dark-orange/20 transition-all text-dark-orange">
        {React.cloneElement(icon, { size: 20, className: "text-white" })}
      </div>
      <div>
        <h4 className="text-sm font-black text-white group-hover:text-dark-orange transition-colors">{title}</h4>
        <p className="text-[11px] text-slate-500 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">{desc}</p>
      </div>
    </div>
  );
}

function FileUploadCard({ label, sub }) {
  return (
    <label className="flex items-center gap-4 p-5 rounded-2xl border-2 border-dashed border-slate-100 bg-slate-50 hover:bg-orange-50 hover:border-dark-orange hover:shadow-xl hover:shadow-orange-100/30 cursor-pointer transition-all group">
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-300 shadow-sm group-hover:text-dark-orange transition-all">
        <Upload size={24} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-black text-slate-900 uppercase truncate">{label}</p>
        <p className="text-[10px] text-slate-400 font-bold whitespace-nowrap">{sub}</p>
      </div>
      <input type="file" className="hidden" />
    </label>
  );
}

function EthicsItem({ title, desc, checked, toggle }) {
  return (
    <button onClick={toggle} type="button" className={`w-full flex gap-5 p-5 rounded-2xl border transition-all text-left ${checked ? 'bg-white/5 border-orange-500/50' : 'bg-transparent border-white/10 hover:border-white/20'}`}>
       <div className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${checked ? 'bg-dark-orange border-dark-orange' : 'border-white/20'}`}>
         {checked && <Check size={16} strokeWidth={4} className="text-white" />}
       </div>
       <div>
         <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${checked ? 'text-white' : 'text-slate-400'}`}>{title}</h4>
         <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{desc}</p>
       </div>
    </button>
  );
}

function SubscriptionCard({ name, price, desc, benefits, selected, onSelect, popular }) {
  return (
    <div 
      onClick={onSelect}
      className={`relative p-8 rounded-[3rem] border-2 cursor-pointer transition-all duration-300 transform group ${selected ? 'border-dark-orange bg-white shadow-3xl scale-105 z-10' : 'border-slate-100 bg-white hover:border-dark-orange/30'}`}
    >
      {popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-black px-6 py-2 rounded-full border-4 border-white shadow-xl">MOST POPULAR</div>}
      <div className="text-center mb-10">
        <h3 className={`text-xl font-black mb-2 ${selected ? 'text-dark-orange' : 'text-slate-900'}`}>{name}</h3>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">{desc}</p>
        <div className="text-3xl font-black text-slate-900">{price}</div>
      </div>
      <div className="space-y-4">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-start gap-4">
             <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0"><Check size={12} className="text-green-600" strokeWidth={3} /></div>
             <p className="text-[11px] font-bold text-slate-700 leading-tight">{b}</p>
          </div>
        ))}
      </div>
      <div className={`mt-10 py-4 rounded-2xl text-center text-[11px] font-black uppercase tracking-widest transition-all ${selected ? 'bg-dark-orange text-white shadow-2xl' : 'bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-dark-orange'}`}>
        {selected ? "Active Choice" : "Choose Tier"}
      </div>
    </div>
  );
}


