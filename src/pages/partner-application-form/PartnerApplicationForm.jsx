import React, { useState } from "react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { 
  ShieldCheck, 
  User, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Users, 
  Wallet, 
  Scale, 
  ChevronRight, 
  ChevronLeft,
  FileText,
  MousePointer2,
  ArrowLeft
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import OnboardingModal from "../../components/modals/OnboardingModal";

export default function PartnerApplicationForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    licenseNumber: "",
    experience: "",
    area: "",
    expertise: [],
    tat: "",
    hasTeam: "",
    fixedFee: "",
    caseStudy: "",
    references: "",
    signature: ""
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const expertiseCategories = [
    {
      title: "Legal & Compliance",
      icon: "⚖️",
      services: ["Property Due Diligence", "Title Verification", "Property Registration"]
    },
    {
      title: "Documentation & Technical",
      icon: "📝",
      services: ["Documentation Drafting", "JV Documentation (Joint Ventures)", "Valuation Services"]
    },
    {
      title: "Strategic & Government",
      icon: "🏗️",
      services: ["DPR Preparation (Detailed Project Report)", "Government Liaison"]
    },
    {
      title: "Financial & Lifestyle",
      icon: "💳",
      services: ["Home Loan Assistance", "Vastu Consultancy", "Architectural Design & Drawing", "Interior Design & Execution (Interior Works)"]
    }
  ];

  return (
    <Section className="bg-slate-50 py-10 min-h-screen">
      <OnboardingModal isOpen={showOnboarding} onClose={() => navigate("/dashboard")} role="expert" />
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Top Navigation Bar */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => (step === 1 ? navigate(-1) : prevStep())}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-dark-orange active:scale-95 transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Expert Onboarding • Step {step} of 5
            </div>
          </div>

          {/* Header Card */}
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 mb-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                <ShieldCheck size={16} className="text-dark-orange" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Trust Framework</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-none uppercase">
                Bhaiya <span className="text-dark-orange italic">Expert</span> Panel
              </h1>
              <p className="text-slate-400 text-sm md:text-base font-medium max-w-lg">
                Partner with West Bengal's most trusted real estate ecosystem. We seek high-integrity professionals for our premium consultancy network.
              </p>
            </div>
          </div>

          {/* Form Progress */}
          <div className="flex items-center justify-between mb-8 px-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black transition-all duration-500 shadow-lg ${
                  step >= s ? "bg-dark-orange text-white scale-110" : "bg-white text-slate-300 border border-slate-200"
                }`}>
                  {s}
                </div>
                {s < 5 && (
                  <div className={`w-8 h-1 mx-2 rounded-full transition-all duration-1000 ${
                    step > s ? "bg-dark-orange" : "bg-slate-200"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Main Form Container */}
          <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
                {step === 2 && <Step2 expertiseCategories={expertiseCategories} formData={formData} setFormData={setFormData} />}
                {step === 3 && <Step3 formData={formData} setFormData={setFormData} />}
                {step === 4 && <Step4 formData={formData} setFormData={setFormData} />}
                {step === 5 && <Step5 formData={formData} setFormData={setFormData} />}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-between pt-8 border-t border-slate-100">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  step === 1 ? "opacity-0 pointer-events-none" : "hover:bg-slate-50 text-slate-400 border border-slate-200 active:scale-95"
                }`}
              >
                <ChevronLeft size={16} /> Back
              </button>
              
              <button
                onClick={step === 5 ? () => {
                  sessionStorage.setItem("bhaiya_role", "expert");
                  setShowOnboarding(true);
                } : nextStep}
                className="flex items-center gap-2 px-10 py-4 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest shadow-xl shadow-slate-200 hover:bg-black transition-all active:scale-95 group"
              >
                {step === 5 ? "Submit Application" : "Next Milestone"} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// --- SUB-STEPS ---

function Step1({ formData, setFormData }) {
  return (
    <div className="space-y-8">
      <SectionHeading title="Basic Credentials" sub="Identify yourself or your professional firm" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-slate-100">
        <InputField 
          label="Full Name / Firm Name" 
          icon={<User size={18} />} 
          placeholder="Legal Name for Contract" 
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />
        <InputField 
          label="Professional License Number" 
          icon={<Award size={18} />} 
          placeholder="Bar ID / IBBI / RERA reg." 
          value={formData.licenseNumber}
          onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
          help="Lawyers, Valuers, Architects must provide valid ID"
        />
        <InputField 
          label="Years of Experience" 
          icon={<Clock size={18} />} 
          placeholder="e.g. 7" 
          type="number"
          value={formData.experience}
          onChange={(e) => setFormData({...formData, experience: e.target.value})}
          help="Bhaiya-Grade requires 5-7+ years recommended"
        />
        <InputField 
          label="Primary Area of Operation" 
          icon={<MapPin size={18} />} 
          placeholder="Kolkata, Durgapur, etc." 
          value={formData.area}
          onChange={(e) => setFormData({...formData, area: e.target.value})}
        />
      </div>

      <div className="space-y-4">
        <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest ml-1">Verification Documents (as per images provided)</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FileUploadCard label="License Proof" sub="Front & Back (JPG/PDF)" />
          <FileUploadCard label="Identity Card" sub="Aadhar / Voter ID" />
          <FileUploadCard label="PAN Card" sub="Business / Personal" />
        </div>
      </div>
    </div>
  );
}

function Step2({ expertiseCategories, formData, setFormData }) {
  const toggleExpertise = (item) => {
    const current = formData.expertise;
    const next = current.includes(item) 
      ? current.filter(i => i !== item) 
      : [...current, item];
    setFormData({...formData, expertise: next});
  };

  return (
    <div className="space-y-8">
      <SectionHeading title="Service Expertise" sub="Select all services you provide with 100% accuracy" />
      
      <div className="space-y-10">
        {expertiseCategories.map((cat) => (
          <div key={cat.title} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{cat.icon}</span>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 border-b-2 border-dark-orange/30 pb-1">{cat.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.services.map((item) => (
                <label 
                  key={item}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.expertise.includes(item) 
                      ? 'border-dark-orange bg-orange-50/30' 
                      : 'border-slate-100 hover:border-slate-200 bg-slate-50/50'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={formData.expertise.includes(item)}
                    onChange={() => toggleExpertise(item)}
                  />
                  <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                    formData.expertise.includes(item) ? 'bg-dark-orange text-white' : 'bg-white border-2 border-slate-200'
                  }`}>
                    {formData.expertise.includes(item) && <CheckCircle2 size={12} strokeWidth={4} />}
                  </div>
                  <span className={`text-[11px] font-bold transition-colors ${
                    formData.expertise.includes(item) ? 'text-slate-900' : 'text-slate-500'
                  }`}>{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step3({ formData, setFormData }) {
  return (
    <div className="space-y-8">
      <SectionHeading title="Expert Reliability Test" sub="Defining TAT and Operational Standards" />
      
      <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-dark-orange mb-6 block">5. Turnaround Time (TAT) for Title Report</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["48 Hours", "3-5 Working Days", "1 Week+"].map(opt => (
            <button 
              key={opt}
              onClick={() => setFormData({...formData, tat: opt})}
              className={`py-4 rounded-xl border-2 text-[12px] font-black transition-all ${
                formData.tat === opt ? "border-dark-orange bg-dark-orange/10 text-white" : "border-white/10 text-white/40 hover:border-white/20"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BooleanCard 
          icon={<Users className="text-dark-orange" />}
          label="6. Dedicated team for Bhaiya queries?"
          value={formData.hasTeam}
          onChange={(val) => setFormData({...formData, hasTeam: val})}
        />
        <BooleanCard 
          icon={<Wallet className="text-dark-orange" />}
          label="7. Willing to provide 'Fixed Fee' schedule?"
          value={formData.fixedFee}
          onChange={(val) => setFormData({...formData, fixedFee: val})}
        />
      </div>
    </div>
  );
}

function Step4({ formData, setFormData }) {
  return (
    <div className="space-y-8">
      <SectionHeading title="Ethics & Case Studies" sub="Demonstrating your commitment to truth" />
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest ml-1">8. Describe a situation where you advised against a purchase due to legal flaw</label>
          <textarea 
            className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 min-h-[150px] text-sm font-medium outline-none focus:border-dark-orange transition-all placeholder:text-slate-300"
            placeholder="Share your experience..."
            value={formData.caseStudy}
            onChange={(e) => setFormData({...formData, caseStudy: e.target.value})}
          />
        </div>
        <div className="space-y-3">
          <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest ml-1">9. References (Contact details of 2 clients/developers)</label>
          <textarea 
            className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 min-h-[120px] text-sm font-medium outline-none focus:border-dark-orange transition-all placeholder:text-slate-300"
            placeholder="Name | Phone | Project"
            value={formData.references}
            onChange={(e) => setFormData({...formData, references: e.target.value})}
          />
        </div>
      </div>
    </div>
  );
}

function Step5({ formData, setFormData }) {
  return (
    <div className="space-y-8">
      <SectionHeading title="Declaration of Truth" sub="Final legal commitment to the platform" />
      
      <div className="bg-slate-900 p-8 rounded-[3rem] shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <Scale size={80} className="text-white" />
        </div>
        <p className="text-white font-medium text-[13px] md:text-[15px] leading-relaxed italic relative z-10">
          "I understand that <span className="text-dark-orange font-black">Property Wala Bhaiya</span> is built on the foundation of Truth and Trust. I agree that any report provided by me will be unbiased, and any misrepresentation or intentional delay on my part will result in immediate removal from the panel and forfeiture of pending fees."
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 py-8">
        <div className="relative group w-full max-w-md">
          <input 
            type="text" 
            placeholder="Sign with Full Legal Name"
            className="w-full bg-transparent border-b-2 border-slate-200 py-4 text-2xl font-serif italic text-center text-slate-800 outline-none focus:border-dark-orange transition-all placeholder:text-slate-200"
            value={formData.signature}
            onChange={(e) => setFormData({...formData, signature: e.target.value})}
          />
          <div className="flex items-center justify-center gap-2 mt-2 text-slate-400">
             <MousePointer2 size={12} />
             <span className="text-[9px] font-black uppercase tracking-[0.2em]">Digital Signature Verification</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function SectionHeading({ title, sub }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight leading-tight uppercase mb-1">{title}</h2>
      <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest">{sub}</p>
    </div>
  );
}

function InputField({ label, icon, help, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-black uppercase text-slate-500 tracking-widest ml-1">{label}</label>
      <div className="relative flex items-center">
        <div className="absolute left-5 text-slate-300">{icon}</div>
        <input 
          {...props}
          className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all placeholder:text-slate-300" 
        />
      </div>
      {help && <p className="text-[10px] italic font-semibold text-slate-400 ml-1">{help}</p>}
    </div>
  );
}

function BooleanCard({ icon, label, value, onChange }) {
  return (
    <div className="p-6 rounded-3xl border border-slate-100 bg-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">{icon}</div>
        <span className="text-[11px] font-black text-slate-800 leading-tight uppercase tracking-tight">{label}</span>
      </div>
      <div className="flex gap-3">
        {["Yes", "No"].map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase transition-all ${
              value === opt ? "bg-dark-orange text-white" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function FileUploadCard({ label, sub }) {
  const [hasFile, setHasFile] = useState(false);
  return (
    <label className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 border-dashed transition-all cursor-pointer ${
      hasFile ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50 hover:bg-orange-50 hover:border-dark-orange'
    }`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${hasFile ? 'bg-green-500 text-white' : 'bg-white text-slate-300 shadow-sm'}`}>
        <FileText size={20} />
      </div>
      <div className="text-center">
         <p className="text-[10px] font-black uppercase text-slate-700">{label}</p>
         <p className="text-[8px] font-bold text-slate-400">{sub}</p>
      </div>
      <input type="file" className="hidden" onChange={() => setHasFile(true)} />
    </label>
  );
}
