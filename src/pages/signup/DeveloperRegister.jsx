import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  FileText,
  Video,
  BarChart,
  ShieldCheck,
  ChevronRight,
  Headset,
  Award,
  CreditCard,
  Check,
  TrendingUp,
  Map,
  UploadCloud,
  Plus,
  Table,
  X as CloseIcon,
  X
} from "lucide-react";
import OnboardingModal from "../../components/modals/OnboardingModal";

export default function DeveloperRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPlans, setShowPlans] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("City Giant");
  const [uploadFiles, setUploadFiles] = useState({ rera: null, trackRecord: null, sanctionedPlans: null });

  const handleFileChange = (field) => (e) => {
    setUploadFiles({ ...uploadFiles, [field]: e.target.files[0] });
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    sessionStorage.setItem("bhaiya_role", "developer");
    setShowOnboarding(true);
  };

  const cities = ["Delhi NCR", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Durgapur"];

  return (
    <div className="min-h-screen bg-slate-50 font-poppins py-10 antialiased selection:bg-orange-200">
      <OnboardingModal isOpen={showOnboarding} onClose={() => navigate("/dashboard")} role="developer" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => (step === 1 ? navigate(-1) : setStep(1))}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] text-slate-600 hover:text-dark-orange active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-[1.5rem] bg-orange-50 border border-orange-100 mb-6 shadow-md hover:shadow-orange-200/50 transform hover:-translate-y-0.5 transition-all cursor-default">
                <Building size={16} className="text-dark-orange" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-dark-orange">
                  Corporate Builder Gateway
                </span>
              </div>
              <h1 className="text-xl lg:text-[1.75rem] font-black text-slate-800 tracking-tight leading-tight mb-4 max-w-2xl mx-auto">
                From Foundation to Finish—<br className="hidden lg:block" />
                Reach Thousands of <span className="text-dark-orange bg-orange-100/50 px-2 rounded-lg inline-block py-0.5">Verified Buyers</span> <br className="hidden lg:block" /> Every Day.
              </h1>
              <p className="text-[13px] text-slate-500 font-medium">
                Build your legacy with Property Wala Bhaiya. Designed for enterprise developers to sell faster, track easier, and grow stronger.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

              {/* Left Column: Form */}
              <div className="lg:col-span-7 relative z-10 order-1 lg:order-1">
                <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 lg:p-10 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 -mr-10 -mt-10 rounded-full blur-3xl opacity-60"></div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">Create Developer Account</h2>
                    <p className="text-sm text-slate-500 font-medium">Enter primary corporate details to initiate onboarding.</p>
                  </div>

                  <form onSubmit={handleNext} className="space-y-6 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <InputField
                        label="Representative Name"
                        icon={<User size={18} />}
                        placeholder="e.g. Vikram Singh"
                        required
                      />
                      <InputField
                        label="Company Name"
                        icon={<Building size={18} />}
                        placeholder="e.g. Skyline Developers"
                        required
                      />
                      <InputField
                        label="Work Email Address"
                        icon={<Mail size={18} />}
                        placeholder="Verify via OTP"
                        type="email"
                        required
                      />
                      <InputField
                        label="Primary Mobile Number"
                        icon={<Phone size={18} />}
                        placeholder="WhatsApp verified"
                        type="tel"
                        required
                      />
                      <InputField
                        label="RERA Registration Number"
                        icon={<ShieldCheck size={18} />}
                        placeholder="Mandatory for trust"
                        required
                      />
                      <InputField
                        label="GST Number"
                        icon={<FileText size={18} />}
                        placeholder="15-digit GSTIN"
                        required
                      />
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1">
                          City of Operation
                        </label>
                        <div className="relative flex items-center group">
                          <select
                            required
                            className="w-full pl-4 pr-11 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all appearance-none cursor-pointer shadow-sm hover:border-slate-300"
                          >
                            <option value="">Select Primary City</option>
                            {cities.map((city) => (
                              <option key={city} value={city}>{city}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 text-slate-400 pointer-events-none group-focus-within:text-dark-orange transition-colors">
                            <MapPin size={18} />
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <InputField
                          label="Current / Corporate Address"
                          icon={<MapPin size={18} />}
                          placeholder="Office/HQ Address"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <InputField
                          label="Permanent Address"
                          icon={<MapPin size={18} />}
                          placeholder="Registered Address (As per documents)"
                          required
                        />
                      </div>
                    </div>

                    {/* Developer Suite Benefits Relocated */}
                    <div className="mt-10 mb-8 bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50"></div>
                      <h3 className="text-xl font-black mb-6 tracking-tight flex items-center gap-2 text-white">
                        The "Developer Suite"
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pb-2">
                        <BenefitItem icon={<UploadCloud size={20} />} title="Bulk Listing Manager" desc="Upload entire townships or multiple phases in one go via CSV or API." />
                        <BenefitItem icon={<Map size={20} />} title="Project Microsites" desc="Every project gets a dedicated, SEO-optimized page on our portal." />
                        <BenefitItem icon={<Video size={20} />} title="Virtual Site Visits" desc="Integrated support for Matterport 3D tours and drone footage." />
                        <BenefitItem icon={<TrendingUp size={20} />} title="Lead CRM & Heat Maps" desc="Track every site visit request and see high-demand zones instantly." />
                      </div>
                    </div>

                    {/* Interested Features */}
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <div className="mb-4">
                        <h3 className="text-[11px] font-black uppercase text-dark-orange tracking-[0.2em] mb-1">
                          Platform Features
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Select the developer suite tools you are interested in applying for.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <CheckboxField label="Bulk Listing Manager" id="feat-bulk" />
                        <CheckboxField label="Project Microsites" id="feat-micro" />
                        <CheckboxField label="Virtual Site Visits (3D & Drone)" id="feat-virtual" />
                        <CheckboxField label="Lead CRM & Heat Maps" id="feat-crm" />
                      </div>
                    </div>

                    {/* Verification Uploads */}
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <div className="mb-5 flex items-center gap-2">
                        <Award size={18} className="text-dark-orange" />
                        <h3 className="text-[11px] font-black uppercase text-dark-orange tracking-[0.2em]">
                          Required Verification Documents
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FileUploadField
                          id="file-rera"
                          label="RERA Certificate"
                          sublabel="PDF or JPG image"
                          file={uploadFiles.rera}
                          onChange={handleFileChange("rera")}
                        />
                        <FileUploadField
                          id="file-track"
                          label="Possession Track Record"
                          sublabel="History of past projects"
                          file={uploadFiles.trackRecord}
                          onChange={handleFileChange("trackRecord")}
                        />
                        <div className="md:col-span-2">
                          <FileUploadField
                            id="file-plans"
                            label="Sanctioned Building Plans"
                            sublabel="Approved layout & master plan"
                            file={uploadFiles.sanctionedPlans}
                            onChange={handleFileChange("sanctionedPlans")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tiered Plans Trigger */}
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <div className="bg-slate-900 rounded-[1.5rem] p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-200 group overflow-hidden relative">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform"></div>
                         <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-dark-orange mb-1">Scale Your Business</h4>
                            <p className="text-sm font-black text-white uppercase tracking-tight">Tiered Developer Plans Overview</p>
                         </div>
                         <button 
                          type="button"
                          onClick={() => setShowPlans(true)}
                          className="px-6 py-2.5 rounded-full bg-dark-orange text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-dark-orange transition-all flex items-center gap-2 group/btn"
                         >
                           <Table size={14} className="group-hover/btn:rotate-12 transition-transform" />
                           Compare All Plans
                         </button>
                      </div>
                    </div>

                    {/* The Developer Promise */}
                    <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                      <div className="mt-0.5 text-dark-orange shrink-0">
                        <CheckCircle size={20} className="fill-orange-100" />
                      </div>
                      <p className="text-[11px] font-medium leading-relaxed text-slate-600">
                        <span className="font-bold text-slate-800">The Developer Promise:</span> By signing up, I agree to provide only RERA-approved project details and to update the 'Available Units' in real-time. I understand that misrepresentation of project status will lead to the suspension of my corporate account.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-4 mt-6 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-[0.15em] shadow-xl hover:bg-dark-orange hover:shadow-orange-500/20 active:scale-[0.98] transition-all"
                    >
                      CREATE DEVELOPER ACCOUNT <ChevronRight size={18} />
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: Benefits & Badges */}
               <div className="lg:col-span-5 space-y-8 order-2 lg:order-2">
                {/* Bhaiya Approved Badge */}
                <div className="bg-white rounded-[2rem] p-8 border border-orange-100 shadow-xl shadow-orange-100/30">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <Award size={24} className="text-dark-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-800 leading-tight">The "Bhaiya Approved Builder" Badge</h3>
                      <p className="text-xs text-slate-500 font-medium mt-1">Stand out with elite buyer trust.</p>
                    </div>
                  </div>

                  <div className="space-y-3 pl-16">
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold mb-2">
                      <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">Required verification:</span>
                    </div>
                    <BadgeRequirement text="RERA Certificate for each project" />
                    <BadgeRequirement text="Possession Track Record (History)" />
                    <BadgeRequirement text="Sanctioned Building Plans" />
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>

      {/* Tiered Plans Comparison Modal */}
      <AnimatePresence>
        {showPlans && (
          <PlanComparisonModal onClose={() => setShowPlans(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Plan Comparison Modal ---
function PlanComparisonModal({ onClose }) {
  const plansData = [
    { feature: "Active Projects", emerging: "Up to 2", giant: "Up to 10", leader: "Unlimited" },
    { feature: "Lead Quality", emerging: "Standard", giant: "Verified", leader: "Priority Verified" },
    { feature: "Microsites", emerging: false, giant: true, leader: true },
    { feature: "Video Walkthroughs", emerging: false, giant: true, leader: true },
    { feature: "Dedicated Manager", emerging: false, giant: false, leader: true }
  ];

  const tiers = [
    { name: "Emerging Builder", key: "emerging", sub: "Foundational" },
    { name: "City Giant", key: "giant", sub: "Scale Fast", highlight: true },
    { name: "National Leader", key: "leader", sub: "Unlimited Power" }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 lg:p-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
      />
      <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
        className="relative bg-white w-full max-w-6xl h-full sm:h-auto sm:max-h-[90vh] rounded-t-[2.5rem] sm:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden border-t sm:border border-white"
      >
        {/* Sticky Modal Header */}
        <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 p-6 lg:p-8 lg:px-12 flex items-center justify-between shrink-0 z-20">
           <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                 <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-dark-orange text-white flex items-center justify-center shadow-lg shadow-orange-200 shrink-0">
                    <Table size={18} className="lg:w-6 lg:h-6" />
                 </div>
                 <h3 className="text-lg lg:text-3xl font-black text-slate-800 tracking-tight truncate">Developer Tiers</h3>
              </div>
              <p className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 truncate">Professional Scale Comparison</p>
           </div>
           <button 
             onClick={onClose}
             className="w-10 h-10 lg:w-14 lg:h-14 rounded-2xl bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center hover:text-dark-orange hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all cursor-pointer ml-4"
           >
             <CloseIcon size={24} className="lg:w-7 lg:h-7" />
           </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-12">
           
           {/* Desktop Table View (Hidden on smallest screens) */}
           <div className="hidden md:block overflow-x-auto pb-8">
              <table className="w-full border-separate border-spacing-0">
                 <thead>
                    <tr className="sticky top-0 bg-white z-10">
                       <th className="py-8 px-6 text-left text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] border-b border-slate-100">Core Matrix</th>
                       <th className="py-8 px-6 text-center border-b border-slate-100 bg-white">
                          <span className="text-[14px] font-black text-slate-900 block tracking-tight">Emerging Builder</span>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Tier 1</span>
                       </th>
                       <th className="py-8 px-6 text-center bg-orange-50/50 rounded-t-[2rem] border-x-2 border-t-2 border-orange-100 relative shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)]">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-orange text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">Primary Choice</div>
                          <span className="text-[16px] font-black text-dark-orange block tracking-tight italic">City Giant</span>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Tier 2</span>
                       </th>
                       <th className="py-8 px-6 text-center border-b border-slate-100 bg-white text-[14px] font-black text-slate-900 tracking-tight">
                          <span className="block">National Leader</span>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Tier 3</span>
                       </th>
                    </tr>
                 </thead>
                 <tbody>
                    {plansData.map((row, idx) => (
                       <tr key={idx} className="group">
                          <td className="py-6 px-6 border-b border-slate-50">
                             <span className="text-[11.5px] font-bold text-slate-600 uppercase tracking-tighter group-hover:text-slate-900 transition-colors">{row.feature}</span>
                          </td>
                          <td className="py-6 px-6 text-center border-b border-slate-50 group-hover:bg-slate-50/10 transition-colors">
                             {typeof row.emerging === 'string' ? <span className="text-[13px] font-black text-slate-800">{row.emerging}</span> : <Indicator val={row.emerging} />}
                          </td>
                          <td className="py-6 px-6 text-center bg-orange-50/50 border-x-2 border-orange-100 border-b border-orange-100/50">
                             {typeof row.giant === 'string' ? <span className="text-[15px] font-black text-dark-orange">{row.giant}</span> : <Indicator val={row.giant} center />}
                          </td>
                          <td className="py-6 px-6 text-center border-b border-slate-50 group-hover:bg-slate-50/10 transition-colors">
                             {typeof row.leader === 'string' ? <span className="text-[13px] font-black text-slate-800">{row.leader}</span> : <Indicator val={row.leader} />}
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* Mobile Card View (Hidden on larger screens) */}
           <div className="md:hidden space-y-6 pt-2 pb-10">
              {tiers.map((tier, tidx) => (
                 <div 
                   key={tidx}
                   className={`rounded-[2rem] p-6 border-2 transition-all ${tier.highlight ? 'border-dark-orange bg-orange-50/30' : 'border-slate-100 bg-white'}`}
                 >
                    <div className="flex justify-between items-start mb-6">
                       <div>
                          <h4 className={`text-lg font-black ${tier.highlight ? 'text-dark-orange' : 'text-slate-800'}`}>{tier.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{tier.sub}</p>
                       </div>
                       {tier.highlight && (
                          <span className="px-3 py-1 bg-dark-orange text-white text-[8px] font-black uppercase tracking-widest rounded-full shadow-lg">Popular</span>
                       )}
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                       {plansData.map((row, ridx) => (
                          <div key={ridx} className="flex items-center justify-between py-3 border-b border-slate-100/50 last:border-0">
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{row.feature}</span>
                             <div className="font-black text-[12px]">
                                {typeof row[tier.key] === 'string' ? (
                                   <span className={tier.highlight ? 'text-dark-orange' : 'text-slate-800'}>{row[tier.key]}</span>
                                ) : (
                                   <Indicator val={row[tier.key]} />
                                )}
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              ))}
           </div>

           {/* Mobile Responsive Header for Advisory */}
           <div className="mt-4 sm:mt-10 mb-8 sm:mb-0">
              <div className="rounded-[2.5rem] bg-slate-900 p-6 sm:p-10 shadow-2xl relative overflow-hidden group/adv">
                 <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-dark-orange/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover/adv:scale-125 transition-transform duration-1000"></div>
                 <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 relative z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                       <Building size={32} className="text-dark-orange sm:w-10 sm:h-10" />
                    </div>
                    <div className="text-center sm:text-left">
                       <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-dark-orange mb-3">Bhaiya Advisory</h4>
                       <p className="text-[12px] sm:text-[14px] text-slate-300 font-medium leading-relaxed max-w-2xl">
                          Professional developers consistently select the <span className="text-white font-black underline decoration-dark-orange decoration-2 underline-offset-[12px]">City Giant</span> plan for high-volume conversion.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}

// Indicator Helper Component (Improved for Mobile)
function Indicator({ val, center }) {
   return (
      <div className={`flex items-center justify-center ${center ? 'scale-110 lg:scale-125' : ''}`}>
         {val ? (
            <div className="p-1 px-1.5 lg:p-1.5 rounded-full bg-green-100 text-green-600 border border-green-200 shadow-sm flex items-center gap-1">
               <Check size={14} strokeWidth={4} className="lg:w-4 lg:h-4" />
            </div>
         ) : (
            <div className="p-1 px-1.5 lg:p-1.5 rounded-full bg-red-100 text-red-500 border border-red-200 shadow-sm flex items-center gap-1">
               <X size={14} strokeWidth={4} className="lg:w-4 lg:h-4" />
            </div>
         )}
      </div>
   );
}

function InputField({ label, icon, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1">
        {label}
      </label>
      <div className="relative flex items-center group">
        <input
          {...props}
          className="w-full pl-4 pr-11 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all placeholder:text-slate-400 placeholder:font-medium shadow-sm hover:border-slate-300"
        />
        <div className="absolute right-4 text-slate-400 group-focus-within:text-dark-orange transition-colors">
          {icon}
        </div>
      </div>
    </div>
  );
}

function FileUploadField({ id, label, sublabel, file, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-black uppercase text-slate-500 tracking-widest ml-1">
        {label}
      </label>
      <input
        type="file"
        id={id}
        className="hidden"
        onChange={onChange}
        required
      />
      <label
        htmlFor={id}
        className="flex items-center gap-4 px-5 h-16 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 cursor-pointer hover:border-dark-orange hover:bg-orange-50 transition-all group"
      >
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-slate-300 group-hover:text-dark-orange transition-colors shrink-0">
          {file ? <FileText size={20} className="text-dark-orange" /> : <Plus size={20} className="text-slate-400 group-hover:text-dark-orange" />}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-bold text-slate-700 uppercase truncate">
            {file ? file.name : "Upload Document"}
          </span>
          <span className="text-[10px] font-semibold text-slate-400">
            {sublabel}
          </span>
        </div>
      </label>
    </div>
  );
}

function CheckboxField({ label, id }) {
  return (
    <label htmlFor={id} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:border-dark-orange hover:bg-orange-50 transition-all group">
      <div className="relative flex items-center justify-center">
        <input type="checkbox" id={id} className="peer appearance-none w-5 h-5 rounded border-2 border-slate-300 checked:border-dark-orange checked:bg-dark-orange transition-all cursor-pointer" />
        <Check size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-all" strokeWidth={3} />
      </div>
      <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{label}</span>
    </label>
  );
}

function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-dark-orange group-hover:border-dark-orange/50 transition-all text-white">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}

function BadgeRequirement({ text }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle size={16} className="text-green-500 shrink-0" />
      <span className="text-sm font-bold text-slate-700">{text}</span>
    </div>
  );
}

function TierCard({ name, desc, projects, leadQuality, microsites, video, manager, selected, onClick, popular }) {
  return (
    <div
      onClick={onClick}
      className={`relative pt-8 pb-8 px-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 transform ${selected ? 'border-dark-orange bg-white shadow-2xl scale-105 z-10' : 'border-slate-200 bg-white shadow-md hover:border-slate-300'}`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-orange text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-black text-slate-900">{name}</h3>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{desc}</p>
      </div>

      <div className="space-y-4">
        <TierFeature label="Active Projects" value={projects} />
        <TierFeature label="Lead Quality" value={leadQuality} highlight={leadQuality.includes("Verified")} />
        <TierFeature label="Microsites" value={microsites} />
        <TierFeature label="Video Walkthroughs" value={video} />
        <TierFeature label="Dedicated Manager" value={manager} />
      </div>

      <div className={`mt-8 py-3 rounded-xl text-center text-[11px] font-black uppercase tracking-widest transition-all ${selected ? 'bg-dark-orange text-white shadow-lg' : 'bg-slate-50 text-slate-500 border border-slate-200 group-hover:bg-slate-100'}`}>
        {selected ? "Selected Plan" : "Select Tier"}
      </div>
    </div>
  );
}

function TierFeature({ label, value, highlight }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
      <span className="text-xs font-bold text-slate-500">{label}</span>
      <span className={`text-xs font-black ${highlight ? 'text-dark-orange' : 'text-slate-800'}`}>{value}</span>
    </div>
  );
}
