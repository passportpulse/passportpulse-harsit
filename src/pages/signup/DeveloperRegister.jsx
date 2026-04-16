import React, { useState } from "react";
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
  Plus
} from "lucide-react";

export default function DeveloperRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("City Giant");
  const [uploadFiles, setUploadFiles] = useState({ rera: null, trackRecord: null, sanctionedPlans: null });

  const handleFileChange = (field) => (e) => {
    setUploadFiles({ ...uploadFiles, [field]: e.target.files[0] });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const cities = ["Delhi NCR", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Durgapur"];

  return (
    <div className="min-h-screen bg-slate-50 font-poppins py-10 antialiased selection:bg-orange-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => (step === 1 ? navigate(-1) : setStep(1))}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] text-slate-600 hover:text-dark-orange active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
          </button>

          {/* <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-full text-xs font-bold text-slate-700 hover:border-dark-orange hover:text-dark-orange transition-all">
            <Headset size={16} />
            Request Demo
          </button> */}
        </div>

        {step === 1 ? (
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
        ) : (
          /* STEP 2: Tiered Subscriptions */
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-4 shadow-sm">
                <ShieldCheck size={14} className="text-green-600" />
                <span className="text-[11px] font-black uppercase tracking-[0.1em] text-slate-600">
                  Step 2 of 2
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Choose Your Enterprise Plan</h2>
              <p className="text-slate-500 mt-4 font-medium">Developers don't want "One-size-fits-all." Select the tier that matches your scale.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <TierCard
                name="Emerging Builder"
                desc="For growing developers"
                price="Standard"
                projects="Up to 2"
                leadQuality="Standard"
                microsites="❌"
                video="❌"
                manager="❌"
                selected={selectedPlan === "Emerging Builder"}
                onClick={() => setSelectedPlan("Emerging Builder")}
              />
              <TierCard
                name="City Giant"
                desc="For established builders"
                price="Premium"
                projects="Up to 10"
                leadQuality="Verified"
                microsites="✅"
                video="✅"
                manager="❌"
                selected={selectedPlan === "City Giant"}
                onClick={() => setSelectedPlan("City Giant")}
                popular
              />
              <TierCard
                name="National Leader"
                desc="For limitless scale"
                price="Enterprise"
                projects="Unlimited"
                leadQuality="Priority Verified"
                microsites="✅"
                video="✅"
                manager="✅"
                selected={selectedPlan === "National Leader"}
                onClick={() => setSelectedPlan("National Leader")}
              />
            </div>

            {/* Payment Section */}
            <div className="max-w-md mx-auto bg-white p-8 rounded-[2rem] border border-orange-100 shadow-2xl flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                <CreditCard size={28} className="text-dark-orange" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-1">Finalize Onboarding</h3>
              <p className="text-xs text-slate-500 text-center mb-6 font-medium">Your selected plan: <span className="font-bold text-dark-orange uppercase">{selectedPlan}</span></p>

              <button
                className="w-full py-4 rounded-xl bg-dark-orange text-white text-xs font-black uppercase tracking-[0.15em] shadow-xl hover:bg-black transition-all transform active:scale-95"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

        {/* Request Demo Section */}
        <div className="mt-24 pt-12 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight uppercase px-4">Request a Demo</h2>
            <p className="text-[13px] text-slate-500 font-medium mb-8">Ready to see the full potential? Get a personalized walkthrough of the Bhaiya Developer Suite.</p>
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

{/* Micro Components */ }

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
