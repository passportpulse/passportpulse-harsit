import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Wallet, Settings2, Ruler, LayoutGrid, ChevronRight, ChevronLeft,
  Camera, Video, X, Plus, ShieldCheck, FileText, Check, Info, 
  Home, Building2, Landmark, Navigation2, Layers, Key, CheckCircle2,
  Calendar, Car, Compass, Bath, DoorOpen, Sparkles, AlertCircle,
  Trees, CloudSun, Zap, Shield, HelpCircle, ArrowUpRight, Microscope
} from "lucide-react";

import { states, citiesInWB, placesInWB } from "../../../data/locations";
import Header from "../../../components/Header";

export default function SellForm({ formData, setFormData, onSubmit }) {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  // Local helper for market average
  const [marketAvg, setMarketAvg] = useState(6500000); 
  const [priceTip, setPriceTip] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('property_listing_draft_v3');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) { console.error("Draft fail"); }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('property_listing_draft_v3', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (formData.price) {
      const p = parseFloat(formData.price);
      if (p < marketAvg * 0.85) {
        setPriceTip({ type: 'low', text: "Bhaiya says: Incredible deal! This is below market average. Expect high enquiry volume. ⚡" });
      } else if (p > marketAvg * 1.15) {
        setPriceTip({ type: 'high', text: "Bhaiya says: This is slightly premium for this area. Highlight your high-end amenities! 💎" });
      } else {
        setPriceTip({ type: 'good', text: "Bhaiya says: Spot on! This price is exactly at the current market sweet spot. ✋" });
      }
    } else { setPriceTip(null); }
  }, [formData.price, marketAvg]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = (e) => {
    e?.preventDefault();
    if (step < totalSteps) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setStep(step - 1);
    }
  };

  const inWords = (num) => {
    if (!num) return "";
    const n = parseFloat(num);
    if (n >= 10000000) return (n / 10000000).toFixed(2) + " Cr";
    if (n >= 100000) return (n / 100000).toFixed(2) + " Lakh";
    if (n >= 1000) return (n / 1000).toFixed(2) + " K";
    return n;
  };

  const StepIndicator = () => (
    <div className="bg-slate-50 border-b border-slate-100 p-8 lg:px-12">
      <div className="flex justify-between relative">
        <div className="absolute top-5 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-gradient-to-r from-dark-orange to-orange-400"
               initial={{ width: 0 }}
               animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
               transition={{ duration: 0.5 }}
             />
        </div>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative z-10 flex flex-col items-center gap-3">
             <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-500 transform ${
                step === i ? 'bg-dark-orange text-white rotate-12 scale-125 shadow-xl shadow-orange-200' : 
                step > i ? 'bg-green-500 text-white scale-100' : 'bg-white text-slate-300 border-2 border-slate-100'
             }`}>
                {step > i ? <Check size={18} strokeWidth={4} /> : i}
             </div>
             <span className={`text-[10px] font-black uppercase tracking-widest ${step === i ? 'text-dark-orange' : 'text-slate-400'}`}>
                {["Basics", "Specs", "Price", "Plus", "Media", "Fine"][i-1]}
             </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 pb-24">
      <Header
        tag={`Step ${step} of ${totalSteps}`}
        title="Post Your"
        highlight="Property"
        subtitle="Follow our professional 6-step wizard to list your property and get genuine buyers instantly."
      />

      <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white/50 overflow-hidden relative backdrop-blur-3xl">
        <StepIndicator />

        <div className="p-8 lg:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            >
              {/* --- STEP 1: BASICS --- */}
              {step === 1 && (
                <div className="space-y-10">
                  <SectionHeader icon={<Landmark />} title="Property Identity" sub="Geographic and category classification." />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ChoiceGroup labels="Listing Intent" value={formData.listingType} choices={["For Sale", "For Rent", "Commercial", "PG"]} onChange={(v) => handleChange("listingType", v)} />
                    <ChoiceGroup labels="Category" value={formData.category} choices={["Flat", "House", "Villa", "Plot", "Shop"]} onChange={(v) => handleChange("category", v)} />
                    
                    <div className="md:col-span-2">
                       <InputField 
                         label="Society / Project Name" 
                         placeholder="e.g. South City Gardens" 
                         value={formData.society} 
                         onChange={(e) => handleChange("society", e.target.value)} 
                         icon={<Building2 size={20} className="text-slate-300"/>}
                       />
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:col-span-2">
                         <ModernSelect label="Target City" value={formData.city} options={citiesInWB} onChange={(v) => handleChange("city", v)} />
                         <ModernSelect label="Locality / Sector" value={formData.locality} options={placesInWB[formData.city] || []} onChange={(v) => handleChange("locality", v)} />
                    </div>

                    <div className="md:col-span-2">
                       <InputField 
                         label="Specific Address Details" 
                         placeholder="Block, Floor, Flat No, Landmark..." 
                         value={formData.address} 
                         onChange={(e) => handleChange("address", e.target.value)} 
                         icon={<MapPin size={20} className="text-slate-300"/>}
                       />
                    </div>
                  </div>

                  <button className="group w-full flex items-center justify-between p-7 rounded-[2.5rem] bg-indigo-50 border-2 border-indigo-100 hover:border-indigo-400 transition-all">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                            <Navigation2 size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-black uppercase text-indigo-400 tracking-widest leading-none mb-1">GPS Mapping</p>
                            <h4 className="text-sm lg:text-base font-black text-indigo-900 leading-none">Pin On Bhaiya Heat Map</h4>
                        </div>
                    </div>
                    <ArrowUpRight size={24} className="text-indigo-300 group-hover:text-indigo-600" />
                  </button>
                </div>
              )}

              {/* --- STEP 2: SPECS --- */}
              {step === 2 && (
                <div className="space-y-10">
                  <SectionHeader icon={<Microscope />} title="Micro Configuration" sub="Precise specifications and room details." />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ChoiceGroup labels="BHK Type" value={formData.bhk} choices={["1", "2", "3", "3+1", "4+"]} onChange={(v) => handleChange("bhk", v)} />
                    <InputField label="Floor No." placeholder="e.g. 4" type="number" value={formData.floor} onChange={(e) => handleChange("floor", e.target.value)} />
                    <InputField label="Total Floors" placeholder="e.g. 10" type="number" value={formData.totalFloors} onChange={(e) => handleChange("totalFloors", e.target.value)} />
                    
                    <div className="md:col-span-2 flex gap-4">
                        <div className="flex-1">
                            <InputField label="Carpet Area" placeholder="Value" type="number" value={formData.area} onChange={(e) => handleChange("area", e.target.value)} icon={<Ruler size={18}/>} />
                        </div>
                        <div className="w-28 mt-8">
                            <ModernSelect value={formData.unit || "Sq.Ft"} options={["Sq.Ft", "Sq.Yd", "Katha"]} onChange={(v) => handleChange("unit", v)} />
                        </div>
                    </div>

                    <ModernSelect label="Parking Slot" value={formData.parking} options={["Covered", "Basement", "Open", "None"]} onChange={(v) => handleChange("parking", v)} />
                    
                    <ChoiceGroup labels="Furnishing" value={formData.furnishing} choices={["Unfurnished", "Semi", "Full"]} onChange={(v) => handleChange("furnishing", v)} />
                    <ModernSelect label="Facing" value={formData.facing} options={["North", "East", "West", "South", "North-East"]} onChange={(v) => handleChange("facing", v)} icon={<Compass size={14}/>}/>
                    <InputField label="Bathrooms" placeholder="e.g. 2" type="number" value={formData.bathrooms} onChange={(e) => handleChange("bathrooms", e.target.value)} icon={<Bath size={14}/>} />
                    
                    <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <ModernSelect label="View" value={formData.view} options={["Garden", "Main Road", "Pool", "City"]} onChange={(v) => handleChange("view", v)} icon={<Trees size={14}/>}/>
                        <ModernSelect label="Kitchen" value={formData.kitchen} options={["Modular", "Regular", "L-Shape", "U-Shape"]} onChange={(v) => handleChange("kitchen", v)} icon={<Zap size={14}/>}/>
                        <ModernSelect label="Utility" value={formData.utility} options={["Yes", "No"]} onChange={(v) => handleChange("utility", v)} />
                        <ModernSelect label="Gas" value={formData.gas} options={["Pipeline", "Cylinder", "None"]} onChange={(v) => handleChange("gas", v)} />
                    </div>
                  </div>
                </div>
              )}

              {/* --- STEP 3: PRICE --- */}
              {step === 3 && (
                <div className="space-y-10">
                  <SectionHeader icon={<Wallet />} title="Valuation & Timeline" sub="Financial clarity and possession dates." />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="md:col-span-2">
                        <div className="relative">
                            <InputField 
                                label="Listing Amount / Monthly Rent" 
                                placeholder="Enter value" 
                                type="number" 
                                value={formData.price} 
                                onChange={(e) => handleChange("price", e.target.value)} 
                                icon={<span className="font-black text-sm text-dark-orange">₹</span>}
                            />
                            {formData.price && (
                                <div className="absolute top-1 right-2 text-[10px] lg:text-xs font-black text-dark-orange uppercase bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200 italic shadow-sm">
                                    {inWords(formData.price)}
                                </div>
                            )}
                        </div>

                        {priceTip && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                                className={`mt-6 p-7 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-7 border-2 ${
                                    priceTip.type === 'high' ? 'bg-orange-50 border-orange-100 text-orange-900' : 'bg-green-50 border-green-100 text-green-900'
                                }`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                                    priceTip.type === 'high' ? 'bg-orange-600' : 'bg-green-600'
                                } text-white shadow-xl`}>
                                    {priceTip.type === 'high' ? <Zap size={28}/> : <Sparkles size={28}/>}
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-60">Listing Strategy</p>
                                    <h4 className="text-sm lg:text-[15px] font-black uppercase tracking-tight leading-tight">{priceTip.text}</h4>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <InputField label="Maintenance" placeholder="₹ per month" type="number" value={formData.maintenance} onChange={(e) => handleChange("maintenance", e.target.value)} />
                    <ModernSelect label="Negotiable?" value={formData.negotiable} options={["Fixed", "Slightly", "Open to Offers"]} onChange={(v) => handleChange("negotiable", v)} />
                    
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ModernSelect label="Possession" value={formData.possession} options={["Ready to Move", "Within 3 Months", "Under Construction"]} onChange={(v) => handleChange("possession", v)} icon={<Key size={14}/>}/>
                        <InputField label="Available From" type="date" value={formData.availableFrom} onChange={(e) => handleChange("availableFrom", e.target.value)} icon={<Calendar size={18}/>} />
                    </div>
                  </div>
                </div>
              )}

              {/* --- STEP 4: AMENITIES --- */}
              {step === 4 && (
                <div className="space-y-10">
                  <SectionHeader icon={<Sparkles />} title="Plus Factors" sub="Lifestyle amenities and community features." />
                   
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        {n: "Power Backup", i: <Zap size={20}/>},
                        {n: "Gated Security", i: <Shield size={20}/>},
                        {n: "Lift / Elevator", i: <ArrowUpRight size={20}/>},
                        {n: "Private Gym", i: <Layers size={20}/>},
                        {n: "Swimming Pool", i: <Trees size={20}/>},
                        {n: "Clubhouse", i: <Home size={20}/>},
                        {n: "Gas Pipeline", i: <CheckCircle2 size={20}/>},
                        {n: "Servant Room", i: <FileText size={20}/>}
                    ].map(amenity => {
                        const isSel = (formData.amenities || []).includes(amenity.n);
                        return (
                            <button
                                key={amenity.n}
                                type="button"
                                onClick={() => {
                                    const next = isSel ? formData.amenities.filter(a => a !== amenity.n) : [...(formData.amenities || []), amenity.n];
                                    handleChange("amenities", next);
                                }}
                                className={`p-6 lg:p-8 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-4 text-center ${
                                    isSel ? 'border-dark-orange bg-orange-50 text-dark-orange shadow-lg' : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-200'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isSel ? 'bg-dark-orange text-white' : 'bg-white text-slate-300'}`}>
                                    {amenity.i}
                                </div>
                                <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-tight">{amenity.n}</span>
                            </button>
                        );
                    })}
                  </div>
                </div>
              )}

              {/* --- STEP 5: MEDIA --- */}
              {step === 5 && (
                <div className="space-y-10">
                  <SectionHeader icon={<Camera />} title="Reality Media" sub="Visual proof and descriptive narrative." />
                  
                  <div className="p-8 rounded-[2.5rem] bg-indigo-50 border border-indigo-100 flex gap-6 items-start">
                    <CloudSun size={32} className="text-indigo-600 shrink-0" />
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-900 mb-1">Bhaiya Standard</h4>
                        <p className="text-[12px] lg:text-[13px] text-indigo-600 font-medium leading-relaxed">Upload at least 5 photos showing <span className="font-black text-indigo-900">Living Room, Kitchen, and Washroom</span> to build maximum trust.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                     <label className="aspect-square rounded-[2rem] border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:border-dark-orange hover:bg-orange-50 transition-all group">
                        <Plus size={24} className="text-slate-300 group-hover:text-dark-orange transition-colors" />
                        <span className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-tighter">Add Media</span>
                        <input type="file" multiple accept="image/*" className="hidden" onChange={(e) => {
                            const files = Array.from(e.target.files).map(f => URL.createObjectURL(f));
                            handleChange("images", [...(formData.images || []), ...files]);
                        }} />
                     </label>

                     {(formData.images || []).map((img, i) => (
                       <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden border border-white group shadow-lg">
                         <img src={img} alt="preview" className="w-full h-full object-cover" />
                         <button onClick={() => handleChange("images", formData.images.filter((_, idx) => idx !== i))} className="absolute top-2 right-2 p-2 bg-slate-900/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                           <X size={10} />
                         </button>
                       </div>
                     ))}
                  </div>

                  <div className="space-y-6">
                    <InputField label="Virtual Tour Link" placeholder="YouTube / Vimeo URL" value={formData.videoLink} onChange={(e) => handleChange("videoLink", e.target.value)} icon={<Video size={20} className="text-slate-300"/>} />
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Property Description</label>
                       <textarea 
                        rows={5}
                        placeholder="Tell us what makes your home special... e.g. Sun-facing balcony, recently renovated kitchen."
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        className="w-full p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-[13px] font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all h-40 resize-none"
                       />
                    </div>
                  </div>
                </div>
              )}

              {/* --- STEP 6: FINAL --- */}
              {step === 6 && (
                <div className="space-y-10">
                  <SectionHeader icon={<ShieldCheck />} title="Legal Standing" sub="Authenticity check and verification boost." />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <ModernSelect label="Ownership Type" value={formData.ownership} options={["Registry (Freehold)", "PoA", "Leasehold", "Power of Attorney"]} onChange={(v) => handleChange("ownership", v)} icon={<FileText size={14}/>}/>
                     <InputField label="RERA Number" placeholder="Mandatory for Agents/Builders" value={formData.rera} onChange={(e) => handleChange("rera", e.target.value)} icon={<CheckCircle2 size={18} className="text-slate-300"/>} />
                     
                     <div className="md:col-span-2">
                        <button 
                          type="button"
                          onClick={() => handleChange("honestyCheck", !formData.honestyCheck)}
                          className={`w-full flex gap-6 p-8 rounded-[2.5rem] border-2 transition-all text-left ${formData.honestyCheck ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100'}`}
                        >
                          <div className={`mt-1 w-8 h-8 rounded-xl border-2 flex items-center justify-center shrink-0 transition-all ${formData.honestyCheck ? 'bg-green-600 border-green-600' : 'border-slate-400'}`}>
                            {formData.honestyCheck && <Check size={16} className="text-white" strokeWidth={5} />}
                          </div>
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-1 leading-none">The Honesty Oath</h4>
                            <p className="text-[11px] lg:text-[12px] text-slate-500 font-medium leading-relaxed">I certify that these details are real and I am legally authorized to list this property. I will update the status immediately once the property is sold or leased.</p>
                          </div>
                        </button>
                     </div>

                     <div className="md:col-span-2 pt-4">
                        <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
                           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                              <div className="w-20 h-20 rounded-3xl bg-dark-orange/20 border border-dark-orange shadow-2xl flex items-center justify-center shrink-0">
                                <ShieldCheck size={40} className="text-dark-orange" />
                              </div>
                              <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">Boost Visibility 3x</h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed uppercase tracking-tighter">Get "Bhaiya Verified" tag for only ₹499 and appear at the top of local search results.</p>
                              </div>
                              <button type="button" className="px-10 py-5 rounded-2xl bg-dark-orange text-white text-[12px] font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all">Get Verified</button>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* --- NAV BAR --- */}
          <div className="flex items-center justify-between mt-16 pt-12 border-t border-slate-50">
            <button 
              type="button" 
              onClick={prevStep} 
              className={`flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] transition-all group ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-dark-orange'}`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-dark-orange group-hover:text-white transition-all"><ChevronLeft size={18} /></div> Back
            </button>

            {step < totalSteps ? (
              <button 
                type="button"
                onClick={nextStep}
                className="px-12 py-5 rounded-[1.5rem] bg-slate-900 text-white text-[11px] lg:text-[12px] font-black uppercase tracking-[0.25em] shadow-2xl active:scale-95 transition-all flex items-center gap-4 hover:shadow-slate-200"
              >
                Proceed Next <ChevronRight size={20} />
              </button>
            ) : (
              <button 
                type="button"
                onClick={onSubmit}
                className="px-12 py-5 rounded-[1.5rem] bg-dark-orange text-white text-[11px] lg:text-[12px] font-black uppercase tracking-[0.25em] shadow-2xl shadow-orange-300 active:scale-95 transition-all flex items-center gap-4 hover:bg-slate-900"
              >
                Post Listing <Sparkles size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MICRO COMPONENTS STYLED FOR GLOBAL CONSISTENCY ---

function SectionHeader({ icon, title, sub }) {
  return (
    <div className="flex items-start gap-6">
      <div className="w-16 h-16 rounded-[1.5rem] bg-orange-50 text-dark-orange flex items-center justify-center shrink-0 shadow-sm border border-orange-100">
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight uppercase">{title}</h3>
        <p className="text-[10px] lg:text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">{sub}</p>
      </div>
    </div>
  );
}

function InputField({ label, icon, subLabel, ...props }) {
    return (
      <div className="space-y-3 group">
        <label className="text-[10px] lg:text-[11px] font-black uppercase text-slate-400 tracking-widest ml-1 group-focus-within:text-dark-orange transition-colors">{label}</label>
        <div className="relative">
          <input {...props} className="w-full pl-6 pr-14 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-[13px] font-bold text-slate-800 outline-none focus:bg-white focus:border-dark-orange transition-all placeholder:text-slate-300 shadow-sm" />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-dark-orange transition-colors">{icon}</div>
        </div>
      </div>
    );
  }
  
  function ChoiceGroup({ labels, value, choices, onChange }) {
    return (
      <div className="space-y-3">
        <label className="text-[10px] lg:text-[11px] font-black uppercase text-slate-400 tracking-widest ml-1">{labels}</label>
        <div className="flex flex-wrap gap-2">
          {choices.map(c => (
              <button 
                  key={c} type="button" onClick={() => onChange(c)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                      value === c ? 'bg-dark-orange text-white border-dark-orange shadow-lg' : 'bg-white text-slate-400 border-slate-50 hover:border-slate-200'
                  }`}
              >
                  {c}
              </button>
          ))}
        </div>
      </div>
    );
  }
  
  function ModernSelect({ label, value, options, onChange, icon }) {
    return (
      <div className="space-y-3 group">
        {label && <label className="text-[10px] lg:text-[11px] font-black uppercase text-slate-400 tracking-widest ml-1">{label}</label>}
        <div className="relative">
          <select 
              value={value} onChange={(e) => onChange(e.target.value)}
              className="w-full pl-6 pr-12 py-5 rounded-2xl bg-slate-50 border border-slate-100 text-[13px] font-black text-slate-800 outline-none focus:bg-white focus:border-dark-orange appearance-none transition-all shadow-sm"
          >
              <option value="">{label ? `Select ${label}` : "Select"}</option>
              {options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-dark-orange pointer-events-none">
              {icon || <ChevronRight size={18} className="rotate-90" />}
          </div>
        </div>
      </div>
    )
  }
