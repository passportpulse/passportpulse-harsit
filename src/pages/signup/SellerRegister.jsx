import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Phone, User, Check, Building, Key, Mail, Hash, MapPin, Map,
  Calendar, ShieldCheck, TrendingUp, Lock, Zap, Clock, ChevronRight, X, ArrowRight,
  FileText, Upload, IdCard, Headset
} from "lucide-react";
import OnboardingModal from "../../components/modals/OnboardingModal";

export default function SellerRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    identity: "Individual Owner", // default
    name: "",
    email: "",
    dob: "",
    age: "",
    pincode: "",
    address: "",
    propertyType: "Residential",
    urgency: "Testing",
    fairPlayChecked: false,
    altMobile: "",
    city: "",
    aadhaar: "",
    pan: "",
    companyName: "",
    reraNumber: "",
    gstNumber: ""
  });

  const nextStep = (e) => {
    if (e) e.preventDefault();
    if (step === 2) {
      sessionStorage.setItem("bhaiya_role", "seller");
      setShowOnboarding(true);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-poppins py-10 antialiased relative">
      <OnboardingModal isOpen={showOnboarding} onClose={() => navigate("/dashboard")} role="seller" />
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => (step === 1 ? navigate(-1) : setStep(1))}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-dark-orange active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="text-xs font-black uppercase tracking-widest text-slate-400">
            Seller Onboarding • Step {step < 3 ? step : 2} of 2
          </div>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Header Section - Centered */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-[1.5rem] bg-orange-50 border border-orange-100 mb-6 shadow-md hover:shadow-orange-200/50 transform hover:-translate-y-0.5 transition-all cursor-default">
                <Key size={16} className="text-dark-orange" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-dark-orange">
                  List Your Property. Get Real Buyers.
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none mb-4">
                Don't just list it—sell it. Join India's most trusted <span className="text-dark-orange">community.</span>
              </h1>
              <p className="text-[13px] text-slate-500 font-medium">
                Property Wala Bhaiya handles the heavy lifting, finding buyers and verifying leads, while you stay in control.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Form */}
              <div className="lg:col-span-7 order-1 lg:order-1">
                <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 border border-white">
                  <form onSubmit={nextStep} className="space-y-6">
                    
                    <InputField
                      label="Mobile Number"
                      subLabel="OTP via WhatsApp/SMS"
                      icon={<Phone size={18} />}
                      placeholder="+91"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      required
                    />

                    <div className="space-y-3 pt-2">
                      <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1">
                        I am a:
                      </label>
                      <div className="flex flex-wrap gap-3">
                        <IdentityRadio label="Individual Owner" selected={formData.identity} onChange={(v) => setFormData({...formData, identity: v})} />
                        <IdentityRadio label="Agent/Broker" selected={formData.identity} onChange={(v) => setFormData({...formData, identity: v})} />
                        <IdentityRadio label="Builder/Developer" selected={formData.identity} onChange={(v) => setFormData({...formData, identity: v})} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                      <InputField
                        label="Full Name"
                        icon={<User size={18} />}
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                      
                      <InputField
                        label="Email Address"
                        subLabel="For performance reports"
                        icon={<Mail size={18} />}
                        placeholder="e.g. rajesh@email.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />

                      <InputField
                        label="Date of Birth"
                        icon={<Calendar size={18} />}
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                        required
                      />

                      <InputField
                        label="Age"
                        icon={<Hash size={18} />}
                        placeholder="Years"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                      />

                      <InputField
                        label="Pincode"
                        icon={<Hash size={18} />}
                        placeholder="713XXX"
                        value={formData.pincode}
                        onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                        required
                      />
                    </div>

                    <InputField
                      label="Permanent Address"
                      icon={<MapPin size={18} />}
                      placeholder="House No, Street, Landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                       <InputField
                        label="Alternate Mobile"
                        icon={<Phone size={18} />}
                        placeholder="+91"
                        type="tel"
                        value={formData.altMobile}
                        onChange={(e) => setFormData({...formData, altMobile: e.target.value})}
                      />
                      <InputField
                        label="City of Operation"
                        icon={<Map size={18} />}
                        placeholder="e.g. Durgapur"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      <InputField
                        label="Aadhaar Card Number"
                        icon={<IdCard size={18} />}
                        placeholder="12-digit Aadhaar"
                        value={formData.aadhaar}
                        onChange={(e) => setFormData({...formData, aadhaar: e.target.value})}
                        required
                        subLabel="KYC Mandatory"
                      />
                      <InputField
                        label="PAN Card Number"
                        icon={<FileText size={18} />}
                        placeholder="10-digit PAN"
                        value={formData.pan}
                        onChange={(e) => setFormData({...formData, pan: e.target.value})}
                        required
                        subLabel="KYC Mandatory"
                      />
                    </div>

                    {formData.identity !== "Individual Owner" && (
                      <div className="p-5 mt-4 rounded-2xl bg-orange-50 border border-orange-100 space-y-5 animate-in fade-in">
                        <h3 className="text-xs font-black uppercase text-dark-orange tracking-widest mb-2 flex items-center gap-2">
                          <Building size={14} /> Corporate Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <InputField
                            label="Company / Agency Name"
                            icon={<Building size={18} />}
                            placeholder="e.g. Skyline Realtors"
                            value={formData.companyName}
                            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                            required
                          />
                          <InputField
                            label="RERA Registration"
                            icon={<FileText size={18} />}
                            placeholder="RERA Number"
                            value={formData.reraNumber}
                            onChange={(e) => setFormData({...formData, reraNumber: e.target.value})}
                          />
                          <div className="md:col-span-2">
                            <InputField
                              label="GST Number"
                              icon={<FileText size={18} />}
                              placeholder="GSTIN (Optional)"
                              value={formData.gstNumber}
                              onChange={(e) => setFormData({...formData, gstNumber: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-10 mb-8 bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50"></div>
                      <h3 className="text-xl font-black mb-6 tracking-tight flex items-center gap-2 text-white">
                        The "Seller Suite"
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pb-2">
                        <BenefitItem icon={<Zap size={20} className="text-orange-500" />} title="Zero Brokerage" desc="Keep 100% of the sale price." />
                        <BenefitItem icon={<ShieldCheck size={20} className="text-orange-500"/>} title="Verified Buyers" desc="No time-wasters, only serious leads." />
                        <BenefitItem icon={<TrendingUp size={20} className="text-orange-500"/>} title="Market Value" desc="Price your property perfectly." />
                        <BenefitItem icon={<Lock size={20} className="text-orange-500"/>} title="Fraud Protection" desc="We hide your number from bots." />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-6 pt-6">
                      <h3 className="text-[11px] font-black uppercase text-dark-orange tracking-[0.2em] mb-4">Mandatory Document Uploads</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1 mb-2 block">
                            Aadhaar Card (Front & Back)
                          </label>
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-dark-orange transition-all">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-slate-500 group-hover:text-dark-orange">
                              <Upload size={20} className="mb-2" />
                              <p className="text-xs font-bold">Upload Aadhaar</p>
                              <p className="text-[9px] uppercase tracking-wider font-bold mt-1 text-slate-400">PDF, JPG (MAX. 5MB)</p>
                            </div>
                            <input type="file" className="hidden" required />
                          </label>
                        </div>
                        <div>
                          <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1 mb-2 block">
                            PAN Card
                          </label>
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-dark-orange transition-all">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-slate-500 group-hover:text-dark-orange">
                              <Upload size={20} className="mb-2" />
                              <p className="text-xs font-bold">Upload PAN</p>
                              <p className="text-[9px] uppercase tracking-wider font-bold mt-1 text-slate-400">PDF, JPG (MAX. 5MB)</p>
                            </div>
                            <input type="file" className="hidden" required />
                          </label>
                        </div>
                        <div className="md:col-span-2 mt-2">
                          <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1 mb-2 block">
                            Address Proof (Electricity/Water Bill)
                          </label>
                          <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-dark-orange transition-all hover:bg-orange-50">
                            <div className="flex items-center justify-center gap-4 text-slate-500 group-hover:text-dark-orange">
                              <Upload size={20} />
                              <div>
                                <p className="text-xs font-bold">Upload Address Proof</p>
                                <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Latest Utility Bill</p>
                              </div>
                            </div>
                            <input type="file" className="hidden" required />
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-4 mt-8 rounded-xl bg-dark-orange text-white text-sm font-black uppercase tracking-[0.15em] shadow-xl hover:bg-orange-600 hover:shadow-orange-500/20 active:scale-[0.98] transition-all"
                    >
                      START LISTING FOR FREE <ChevronRight size={18} />
                    </button>

                    <div className="mt-8">
                      <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="shrink-0 px-4 text-[10px] uppercase font-bold text-slate-400 tracking-widest">Or login via</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                      </div>
                      <div className="flex justify-center gap-4 mt-6">
                        <SocialButton label="G" title="Google" />
                        <SocialButton label="in" title="LinkedIn" className="bg-[#0077b5] text-white hover:bg-[#005582] border-none" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column: Benefits & Trust - Aligned with top of Form */}
              <div className="lg:col-span-5 order-2 lg:order-2">
                <div className="space-y-8 sticky top-10">
                  <div className="bg-slate-900 text-white rounded-[2rem] p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
                    <div className="space-y-5 relative z-10">
                      <div className="flex gap-4">
                        <span className="text-4xl">🎉</span>
                        <p className="text-xs font-medium text-slate-300 leading-relaxed italic">
                          "Over <strong className="text-white text-sm">5,000+ owners</strong> sold their property via Bhaiya last month without paying a single rupee in brokerage."
                        </p>
                      </div>
                      <div className="h-px w-full bg-slate-800"></div>
                      <div className="flex gap-4 items-center">
                        <Clock size={28} className="text-dark-orange" />
                        <p className="text-xs font-medium text-slate-300 leading-relaxed uppercase tracking-wider">
                          Average time to find a tenant:<br/>
                          <span className="text-lg font-black text-white">Just 4 Days.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-2xl lg:text-3xl font-black text-slate-800 tracking-tight leading-none mb-4">
                The Setup. Let's build your Dashboard.
              </h1>
              <p className="text-[13px] text-slate-500 font-medium">
                Help us understand what you're listing today so we can queue up the right buyers.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 border border-white">
              <form onSubmit={nextStep} className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[11px] font-black uppercase text-dark-orange tracking-[0.2em]">
                    1. What are you listing today?
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <PropTypeCard icon={<Building size={20}/>} label="Residential" selected={formData.propertyType} set={(v) => setFormData({...formData, propertyType: v})} />
                    <PropTypeCard icon={<Building size={20}/>} label="Commercial" selected={formData.propertyType} set={(v) => setFormData({...formData, propertyType: v})} />
                    <PropTypeCard icon={<Map size={20}/>} label="Land / Plot" selected={formData.propertyType} set={(v) => setFormData({...formData, propertyType: v})} />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <label className="text-[11px] font-black uppercase text-dark-orange tracking-[0.2em]">
                    2. How fast do you want to sell/rent?
                  </label>
                  <div className="space-y-3">
                    <RadioRow id="urg-1" name="urgency" label="Just testing the market." selected={formData.urgency === "Testing"} onChange={() => setFormData({...formData, urgency: "Testing"})} />
                    <RadioRow id="urg-2" name="urgency" label="Want to sell/rent within 30 days." selected={formData.urgency === "30 Days"} onChange={() => setFormData({...formData, urgency: "30 Days"})} />
                    <RadioRow id="urg-3" name="urgency" label="Urgent! Need a buyer ASAP." selected={formData.urgency === "Urgent"} onChange={() => setFormData({...formData, urgency: "Urgent"})} highlight />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <label className="text-[11px] font-black uppercase text-dark-orange tracking-[0.2em]">
                    3. The "Bhaiya Fair-Play" Pledge
                  </label>
                  <label htmlFor="fairplay" className={`flex gap-4 p-5 rounded-2xl cursor-pointer transition-all border ${formData.fairPlayChecked ? 'bg-orange-50 border-orange-200' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="mt-1">
                      <input 
                        type="checkbox" 
                        id="fairplay" 
                        required
                        checked={formData.fairPlayChecked}
                        onChange={(e) => setFormData({...formData, fairPlayChecked: e.target.checked})}
                        className="peer appearance-none w-5 h-5 rounded border-2 border-slate-300 checked:border-dark-orange checked:bg-dark-orange transition-all cursor-pointer relative"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium leading-relaxed text-slate-600 mb-2">
                        "I, <strong className="text-slate-800">{formData.name || "Seller"}</strong>, promise to keep my listing honest. I will upload real photos and mark my property as 'SOLD' within 24 hours of closing the deal so Bhaiya can keep the portal clean for everyone."
                      </p>
                      <span className="text-xs font-black uppercase text-dark-orange tracking-widest">
                        I Agree to the Fair-Play Policy
                      </span>
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-slate-900 text-white text-sm font-black uppercase tracking-[0.15em] shadow-xl hover:bg-black active:scale-[0.98] transition-all"
                >
                  Open Seller Dashboard <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        )}


        {/* Request Demo Section */}
        <div className="mt-24 pt-12 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight uppercase px-4">Request a Demo</h2>
            <p className="text-[13px] text-slate-500 font-medium mb-8">Ready to see the full potential? Get a personalized walkthrough of the Bhaiya Seller Suite.</p>
            <button className="px-10 py-4 bg-slate-900 text-dark-orange text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all shadow-2xl shadow-slate-300 active:scale-95 flex items-center justify-center gap-3 mx-auto">
              <Headset size={20} />
              Schedule My Demo Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function InputField({ label, subLabel, icon, ...props }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline mb-1">
        <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1">{label}</label>
        {subLabel && <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded mr-1">{subLabel}</span>}
      </div>
      <div className="relative flex items-center group">
        <input {...props} className="w-full pl-4 pr-11 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all placeholder:text-slate-400 placeholder:font-medium shadow-sm hover:border-slate-300" />
        <div className="absolute right-4 text-slate-400 group-focus-within:text-dark-orange transition-colors">{icon}</div>
      </div>
    </div>
  );
}

function IdentityRadio({ label, selected, onChange }) {
  const isSelected = selected === label;
  return (
    <button type="button" onClick={() => onChange(label)} className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all border-2 flex items-center gap-2 ${isSelected ? 'border-dark-orange bg-orange-50 text-dark-orange shadow-md' : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'}`}>
      <div className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-dark-orange bg-dark-orange' : 'border-slate-300'}`}>
        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
      </div>
      {label}
    </button>
  );
}

function PropTypeCard({ icon, label, selected, set }) {
  const isSelected = selected === label;
  return (
    <button type="button" onClick={() => set(label)} className={`flex-1 min-w-[120px] p-5 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all ${isSelected ? 'border-dark-orange bg-orange-50 text-dark-orange shadow-md' : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:bg-slate-100'}`}>
      <div className={isSelected ? 'text-dark-orange' : 'text-slate-400'}>{icon}</div>
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
}

function RadioRow({ id, name, label, selected, onChange, highlight }) {
  return (
    <label htmlFor={id} className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border ${highlight ? (selected ? 'border-red-400 bg-red-50 text-red-900' : 'border-red-100 bg-red-50/30 text-red-700 hover:border-red-200') : (selected ? 'border-dark-orange bg-orange-50 text-dark-orange' : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300')}`}>
      <input type="radio" id={id} name={name} checked={selected} onChange={onChange} className="w-4 h-4 accent-dark-orange cursor-pointer" />
      <span className="text-sm font-bold">{label}</span>
      {highlight && <span className="ml-auto text-[10px] font-black uppercase bg-red-100 text-red-600 px-2 py-1 rounded">Urgent</span>}
    </label>
  );
}

function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-dark-orange group-hover:border-dark-orange/50 transition-all text-white">
        {icon && React.isValidElement(icon) ? React.cloneElement(icon, { size: 20 }) : null}
      </div>
      <div>
        <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}

function SocialButton({ label, title, className = "" }) {
  return (
    <button type="button" className={`w-32 h-14 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-2 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-95 transition-all ${className}`}>
      <span className="font-black text-lg">{label}</span> {title}
    </button>
  );
}
