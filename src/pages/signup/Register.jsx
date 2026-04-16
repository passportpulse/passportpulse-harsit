import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Hash,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Plus,
  FileText,
  Map, // Added for Area icon
} from "lucide-react";
import ChoosePlan from "./ChoosePlan";
// Import the location data
import { placesInWB } from "../../data/locations";
import DeveloperRegister from "./DeveloperRegister";
import BuyerRegister from "./BuyerRegister";
import SellerRegister from "./SellerRegister";
import AgentRegister from "./AgentRegister";

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // UI State
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("Silver");

  // Automatically derive role from URL (Partner, Buyer, etc.)
  const roleQuery = searchParams.get("role") || "Buyer Login";
  const userType = roleQuery.split(" ")[0].toLowerCase();

  if (userType === "developer") {
    return <DeveloperRegister />;
  }

  if (userType === "buyer") {
    return <BuyerRegister />;
  }

  if (userType === "seller") {
    return <SellerRegister />;
  }

  if (userType === "partner") {
    return <AgentRegister />;
  }

  // Form State
  const [selectedArea, setSelectedArea] = useState("");
  const [profilePreview, setProfilePreview] = useState(null);
  const [addressFile, setAddressFile] = useState(null);

  // Filter Durgapur areas specifically
  const durgapurAreas = placesInWB.Durgapur || [];

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePreview(URL.createObjectURL(file));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-orange-50 font-poppins flex flex-col lg:items-center lg:justify-center py-10 antialiased">
      <div className="w-full lg:max-w-2xl px-6">
        {/* Navigation */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => (step === 1 ? navigate(-1) : setStep(1))}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        {step === 1 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* HEADER */}
            <div className="mb-8 text-left lg:text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-orange-100 mb-4">
                <ShieldCheck size={12} className="text-dark-orange" />
                <span className="text-[10px] font-black uppercase tracking-widest text-dark-orange">
                  {userType} Verification
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                {userType === "buyer" && "Buyer"}
                {userType === "seller" && "Seller"}
                {userType === "partner" && "Partner"}
                {userType === "developer" && "Developer"}
                <span className="text-dark-orange"> Signup</span>
              </h1>

              <div className="mt-4 inline-block px-4 py-1.5 rounded-lg bg-orange-100/50 border border-orange-200">
                <p className="text-[10px] font-black text-dark-orange uppercase tracking-[0.1em]">
                  Gateway: {userType} Access Point
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-orange-100/50 p-6 lg:p-10 border border-white">
              <form onSubmit={handleNext} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    label="Full Name"
                    icon={<User size={16} />}
                    placeholder="Enter legal name"
                    required
                  />
                  <InputField
                    label="Mobile Number"
                    icon={<Phone size={16} />}
                    placeholder="Primary contact"
                    type="tel"
                    required
                  />
                  <InputField
                    label="Email Address"
                    icon={<Mail size={16} />}
                    placeholder="For documents"
                    type="email"
                    required
                  />

                  {/* AREA DROPDOWN: Only for Partners */}
                  {userType === "partner" && (
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] ml-1">
                        Choose Your Area
                      </label>
                      <div className="relative flex items-center group">
                        <select
                          value={selectedArea}
                          onChange={(e) => setSelectedArea(e.target.value)}
                          required
                          className="w-full pl-4 pr-11 py-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-dark-orange focus:ring-4 focus:ring-orange-50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select Area in Durgapur</option>
                          {durgapurAreas.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 text-slate-300 pointer-events-none group-focus-within:text-dark-orange transition-colors">
                          <Map size={16} />
                        </div>
                      </div>
                    </div>
                  )}

                  <InputField
                    label="Date of Birth"
                    icon={<Calendar size={16} />}
                    type="date"
                    required
                  />
                  <InputField
                    label="Age"
                    icon={<Hash size={16} />}
                    placeholder="Years"
                  />
                  <InputField
                    label="Pincode"
                    icon={<Hash size={16} />}
                    placeholder="713XXX"
                    required
                  />

                  <div className="md:col-span-2">
                    <InputField
                      label="Permanent Address"
                      icon={<MapPin size={16} />}
                      placeholder="House No, Street, Landmark"
                      required
                    />
                  </div>

                  {/* ROLE-SPECIFIC SECTIONS */}

                  {/* 1. PARTNER SECTION: Photo & KYC */}
                  {userType === "partner" && (
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 mt-2 border-t border-slate-100 animate-in fade-in duration-500">
                      <div className="md:col-span-2">
                        <h3 className="text-[11px] font-black uppercase text-slate-400 tracking-[0.2em]">
                          Partner Verification
                        </h3>
                      </div>

                      {/* Photo Upload */}
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">
                          Upload Your Photo
                        </label>
                        <div className="relative group w-24 h-24">
                          <input
                            type="file"
                            id="p-img"
                            className="hidden"
                            accept="image/*"
                            onChange={handleProfileChange}
                          />
                          <label
                            htmlFor="p-img"
                            className="flex items-center justify-center w-full h-full rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 cursor-pointer hover:border-dark-orange hover:bg-orange-50 transition-all overflow-hidden group"
                          >
                            {profilePreview ? (
                              <img
                                src={profilePreview}
                                className="w-full h-full object-cover"
                                alt="Preview"
                              />
                            ) : (
                              <Plus
                                size={24}
                                className="text-slate-300 group-hover:text-dark-orange"
                                strokeWidth={3}
                              />
                            )}
                          </label>
                        </div>
                      </div>

                      {/* KYC Document Upload */}
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-slate-500 ml-1">
                          KYC Document (PDF/JPG)
                        </label>
                        <input
                          type="file"
                          id="a-img"
                          className="hidden"
                          onChange={(e) => setAddressFile(e.target.files[0])}
                        />
                        <label
                          htmlFor="a-img"
                          className="flex items-center gap-4 px-5 h-24 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 cursor-pointer hover:border-dark-orange hover:bg-orange-50 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-slate-300 group-hover:text-dark-orange transition-colors">
                            {addressFile ? (
                              <FileText size={20} />
                            ) : (
                              <Plus size={20} strokeWidth={3} />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-600 uppercase truncate max-w-[120px]">
                              {addressFile ? addressFile.name : "Select File"}
                            </span>
                            <span className="text-[9px] font-bold text-slate-400">
                              Identity Proof
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  )}


                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-dark-orange text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-200 active:scale-95 transition-all hover:bg-black mt-4"
                >
                  Proceed to Subscription <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        ) : (
          <ChoosePlan
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            userType={userType}
            area={selectedArea} // Pass area to the plan stage if needed
          />
        )}
      </div>
    </div>
  );
}

function InputField({ label, icon, ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] ml-1">
        {label}
      </label>
      <div className="relative flex items-center group">
        <input
          {...props}
          className="w-full pl-4 pr-11 py-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange focus:ring-4 focus:ring-orange-50 transition-all placeholder:text-slate-300 placeholder:font-normal"
        />
        <div className="absolute right-4 text-slate-300 group-focus-within:text-dark-orange transition-colors">
          {icon}
        </div>
      </div>
    </div>
  );
}
