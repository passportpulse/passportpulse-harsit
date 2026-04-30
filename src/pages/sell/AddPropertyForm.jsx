import React, { useState, useEffect } from "react";
import { 
  ChevronRight, 
  ChevronLeft, 
  Camera, 
  MapPin, 
  Home, 
  DollarSign, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Plus, 
  Video,
  Info,
  Smartphone,
  Eye,
  Star,
  Trash2,
  TrendingUp,
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

export default function AddProperty() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Basics
    listingType: "Sell",
    category: "Flat / Apartment",
    project: "",
    city: "Durgapur",
    locality: "",
    address: "",
    // Step 2: Specs
    bhk: "2 BHK",
    floor: "",
    totalFloors: "",
    area: "",
    areaUnit: "sq. ft.",
    furnishing: "Semi-Furnished",
    bathrooms: "2",
    balconies: "1",
    parking: "Covered",
    facing: "East",
    // Step 3: Pricing
    price: "",
    maintenance: "Included",
    deposit: "",
    negotiable: "Yes",
    possession: "Ready to Move",
    availableFrom: "",
    // Step 4: Amenities
    amenities: [],
    // Step 5: Visuals
    photos: [],
    videoLink: "",
    description: "",
    // Step 6: Final
    ownership: "Freehold",
    rera: "",
    declaration: false,
    verificationUpsell: true
  });

  const steps = [
    { id: 1, title: "The Basics", desc: "What & Where" },
    { id: 2, title: "Property Specs", desc: "Configuration" },
    { id: 3, title: "Pricing", desc: "Cost & Dates" },
    { id: 4, title: "Amenities", desc: "Features" },
    { id: 5, title: "Visuals", desc: "Photos & Video" },
    { id: 6, title: "Finalize", desc: "Trust Check" }
  ];

  // Calculate Trust Score
  const calculateTrustScore = () => {
    let score = 0;
    if (formData.project && formData.locality) score += 15;
    if (formData.price) score += 15;
    if (formData.photos.length >= 3) score += 20;
    if (formData.videoLink) score += 15;
    if (formData.description.length > 50) score += 15;
    if (formData.rera || formData.ownership) score += 20;
    return Math.min(score, 100);
  };

  const trustScore = calculateTrustScore();

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
    else setIsSuccess(true);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  if (isSuccess) return <SuccessAnimation onDashboard={() => navigate("/dashboard")} />;

  return (
    <div className="min-h-screen bg-slate-50 font-poppins">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 py-6 sticky top-0 z-50 shadow-sm">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <Plus size={24} />
              </div>
              <div>
                <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">List Your Property</h1>
                <p className="text-[10px] font-black text-dark-orange uppercase tracking-widest">Bhaiya Standard Listing</p>
              </div>
            </div>
            <button 
              onClick={() => navigate(-1)}
              className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-all"
            >
              Exit Draft
            </button>
          </div>
        </Container>
      </header>

      <div className="lg:grid lg:grid-cols-12 min-h-[calc(100vh-89px)]">
        {/* Left Side: Form */}
        <div className="lg:col-span-7 xl:col-span-8 p-6 md:p-12 lg:p-16 bg-white overflow-y-auto">
          <div className="max-w-2xl mx-auto space-y-12">
            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-dark-orange uppercase tracking-[0.2em]">Step {currentStep} of 6</span>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{steps[currentStep-1].title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  {steps.map(s => (
                    <div key={s.id} className={`w-3 h-3 rounded-full transition-all duration-500 ${currentStep >= s.id ? 'bg-dark-orange scale-110 shadow-lg shadow-orange-500/20' : 'bg-slate-200'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Form Steps */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {currentStep === 1 && <Step1 formData={formData} updateForm={updateForm} />}
              {currentStep === 2 && <Step2 formData={formData} updateForm={updateForm} />}
              {currentStep === 3 && <Step3 formData={formData} updateForm={updateForm} />}
              {currentStep === 4 && <Step4 formData={formData} updateForm={updateForm} />}
              {currentStep === 5 && <Step5 formData={formData} updateForm={updateForm} />}
              {currentStep === 6 && <Step6 formData={formData} updateForm={updateForm} />}
            </div>

            {/* Navigation Buttons */}
            <div className="pt-12 flex items-center justify-between border-t border-slate-100">
              <button 
                onClick={handleBack}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-900'}`}
              >
                <ChevronLeft size={18} /> Previous Step
              </button>
              <button 
                onClick={handleNext}
                className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-dark-orange transition-all shadow-xl shadow-slate-200 active:scale-95"
              >
                {currentStep === 6 ? 'Go Live Now' : 'Save & Continue'} <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Preview - Hidden on small mobile, shown below on tablet, sticky on desktop */}
        <div className="lg:col-span-5 xl:col-span-4 bg-slate-50 p-6 md:p-12 lg:sticky lg:top-[89px] lg:h-[calc(100vh-89px)] overflow-y-auto flex flex-col items-center border-t lg:border-t-0 lg:border-l border-slate-100">
          <div className="w-full max-w-sm space-y-8 py-8 lg:py-0">
            {/* Trust Score Widget */}
            <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 space-y-4 border border-slate-100">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bhaiya Trust Score</p>
                <span className={`text-[10px] font-black uppercase tracking-widest ${trustScore > 70 ? 'text-emerald-500' : 'text-orange-500'}`}>
                  {trustScore}% Complete
                </span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${trustScore > 70 ? 'bg-emerald-500' : 'bg-dark-orange'}`} 
                  style={{ width: `${trustScore}%` }} 
                />
              </div>
              <p className="text-[9px] font-bold text-slate-500 leading-relaxed uppercase tracking-wider">
                {trustScore < 100 ? `Bhaiya says: ${trustScore < 50 ? 'Start adding details to build trust!' : 'Add a video and RERA ID to reach 100%!'}` : 'Excellent! Your listing is at Bhaiya Standard.'}
              </p>
            </div>

            {/* Mobile Mockup */}
            <div className="relative mx-auto w-full max-w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl shadow-slate-300 overflow-hidden group">
              {/* Speaker/Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
              
              {/* App Content */}
              <div className="h-full bg-white overflow-y-auto pt-10 pb-20 no-scrollbar">
                {/* Hero Photo */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  {formData.photos.length > 0 ? (
                    <img src={formData.photos[0]} className="w-full h-full object-cover" alt="Preview" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 gap-2">
                      <Camera size={32} />
                      <p className="text-[8px] font-black uppercase tracking-widest">Main Photo Here</p>
                    </div>
                  )}
                  <div className="absolute top-2 left-2 bg-slate-900/40 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[8px] font-black uppercase tracking-widest">
                    {formData.listingType === 'Sell' ? 'For Sale' : 'For Rent'}
                  </div>
                  <div className="absolute top-2 right-2 text-white/50 text-[10px] font-black uppercase italic tracking-tighter opacity-20">
                    Property Wala Bhaiya
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-end justify-between">
                      <h4 className="text-xl font-black text-slate-900">
                        {formData.price ? `₹${formData.price}` : 'Price TBD'}
                        {formData.listingType === 'Rent' && <span className="text-[10px] text-slate-400">/mo</span>}
                      </h4>
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <Smartphone size={10} />
                      </div>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                      <MapPin size={8} /> {formData.locality || 'Locality'}, {formData.city}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Badge icon={<Home size={8} />} label={formData.bhk} />
                    <Badge label={`${formData.area || '0'} ${formData.areaUnit}`} />
                    <Badge label={formData.furnishing} />
                  </div>

                  <div className="h-px bg-slate-50" />

                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-900">Description</p>
                    <p className="text-[9px] font-medium text-slate-500 leading-relaxed line-clamp-3">
                      {formData.description || 'Tell us what makes your home special... e.g., Sun-facing balcony, recently renovated kitchen.'}
                    </p>
                  </div>

                  {/* Amenities Icons */}
                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-900">Amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.amenities.length > 0 ? formData.amenities.map(a => (
                        <div key={a} className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                           <Zap size={12} />
                        </div>
                      )) : (
                        <p className="text-[8px] text-slate-300 uppercase font-black tracking-widest">Select amenities in Step 4</p>
                      )}
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className={`p-3 rounded-2xl border flex items-center justify-between ${formData.verificationUpsell ? 'bg-orange-50 border-orange-200' : 'bg-slate-50 border-slate-100'}`}>
                    <div className="flex items-center gap-2">
                       <ShieldCheck size={14} className={formData.verificationUpsell ? 'text-dark-orange' : 'text-slate-300'} />
                       <span className={`text-[8px] font-black uppercase tracking-widest ${formData.verificationUpsell ? 'text-dark-orange' : 'text-slate-400'}`}>
                         {formData.verificationUpsell ? 'Bhaiya Verified' : 'Unverified'}
                       </span>
                    </div>
                    {!formData.verificationUpsell && <div className="w-3 h-3 rounded-full border-2 border-slate-300" />}
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-900/20 rounded-full" />
            </div>

            <div className="text-center space-y-2">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Live Preview Mode</p>
               <p className="text-[9px] font-medium text-slate-400 leading-relaxed uppercase tracking-wider italic">
                 "This is how buyers will see your home on Bhaiya."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB STEPS ---

function Step1({ formData, updateForm }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Listing Type</label>
          <div className="flex bg-slate-50 p-1.5 rounded-2xl gap-1">
            {['Rent', 'Sell', 'PG', 'Commercial'].map(t => (
              <button 
                key={t}
                onClick={() => updateForm('listingType', t)}
                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.listingType === t ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Property Category</label>
          <select 
            value={formData.category}
            onChange={(e) => updateForm('category', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          >
            <option>Flat / Apartment</option>
            <option>Independent House</option>
            <option>Plot / Land</option>
            <option>Office Space</option>
            <option>Shop / Showroom</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project / Society Name</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="e.g. Skyline Elegance, Maple Heights"
            value={formData.project}
            onChange={(e) => updateForm('project', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300">
            <Info size={18} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">City</label>
          <input 
            type="text" 
            value={formData.city}
            disabled
            className="w-full bg-slate-100 border border-slate-100 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-400 cursor-not-allowed"
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Locality</label>
          <input 
            type="text" 
            placeholder="e.g. Bidhannagar, City Centre"
            value={formData.locality}
            onChange={(e) => updateForm('locality', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Address Details</label>
        <textarea 
          placeholder="House Number, Street, Landmark..."
          value={formData.address}
          onChange={(e) => updateForm('address', e.target.value)}
          className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all h-24 resize-none"
        />
      </div>

      <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-dark-orange hover:text-dark-orange transition-all">
        <MapPin size={18} /> Mark Location on Map
      </button>
    </div>
  );
}

function Step2({ formData, updateForm }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">BHK Type</label>
          <select 
            value={formData.bhk}
            onChange={(e) => updateForm('bhk', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          >
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>3+1 BHK</option>
            <option>4 BHK</option>
            <option>5+ BHK</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Furnishing Status</label>
          <select 
            value={formData.furnishing}
            onChange={(e) => updateForm('furnishing', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          >
            <option>Fully Furnished</option>
            <option>Semi-Furnished</option>
            <option>Unfurnished</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Floor Details</label>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              placeholder="Floor"
              value={formData.floor}
              onChange={(e) => updateForm('floor', e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 px-4 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
            />
            <span className="text-[10px] font-black text-slate-300">OF</span>
            <input 
              type="number" 
              placeholder="Total"
              value={formData.totalFloors}
              onChange={(e) => updateForm('totalFloors', e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 px-4 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Carpet Area</label>
          <div className="flex bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
            <input 
              type="number" 
              placeholder="Value"
              value={formData.area}
              onChange={(e) => updateForm('area', e.target.value)}
              className="flex-1 bg-transparent px-5 py-4 text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
            />
            <select 
              value={formData.areaUnit}
              onChange={(e) => updateForm('areaUnit', e.target.value)}
              className="bg-slate-100 border-l border-slate-100 px-4 text-[9px] font-black uppercase tracking-widest outline-none"
            >
              <option>sq. ft.</option>
              <option>sq. yards</option>
              <option>sq. meters</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bathrooms</label>
          <select 
            value={formData.bathrooms}
            onChange={(e) => updateForm('bathrooms', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-4 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Balconies</label>
          <select 
            value={formData.balconies}
            onChange={(e) => updateForm('balconies', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-4 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Facing</label>
          <select 
            value={formData.facing}
            onChange={(e) => updateForm('facing', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-4 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          >
            <option>East</option>
            <option>North</option>
            <option>North-East</option>
            <option>West</option>
            <option>South</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function Step3({ formData, updateForm }) {
  const priceAverage = 4500000; // Mock average for Durgapur
  const diff = formData.price ? ((parseInt(formData.price) - priceAverage) / priceAverage) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Expected Price / Rent</label>
        <div className="relative">
          <input 
            type="number" 
            placeholder="e.g. 4500000"
            value={formData.price}
            onChange={(e) => updateForm('price', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-12 py-5 rounded-2xl text-[20px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 font-black">₹</div>
          {formData.price && (
            <div className={`mt-4 p-4 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-500 ${Math.abs(diff) < 10 ? 'bg-emerald-50 border border-emerald-100 text-emerald-900' : 'bg-orange-50 border border-orange-100 text-orange-900'}`}>
              <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 ${Math.abs(diff) < 10 ? 'text-emerald-500' : 'text-orange-500'}`}>
                {Math.abs(diff) < 10 ? <TrendingUp size={20} /> : <AlertTriangle size={20} />}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider leading-relaxed">
                {Math.abs(diff) < 10 ? (
                  <>Bhaiya says: <span className="font-black">High-five!</span> This price matches the market average for your area.</>
                ) : (
                  <>Bhaiya says: This is <span className="font-black">{diff > 0 ? 'higher' : 'lower'} than the area average</span>. Consider adding more photos to show the value!</>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Maintenance</label>
          <div className="flex bg-slate-50 p-1 rounded-2xl gap-1">
            {['Included', 'Extra'].map(m => (
              <button 
                key={m}
                onClick={() => updateForm('maintenance', m)}
                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.maintenance === m ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400'}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Negotiable?</label>
          <div className="flex bg-slate-50 p-1 rounded-2xl gap-1">
            {['Yes', 'No'].map(n => (
              <button 
                key={n}
                onClick={() => updateForm('negotiable', n)}
                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.negotiable === n ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400'}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Possession Status</label>
          <select 
            value={formData.possession}
            onChange={(e) => updateForm('possession', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          >
            <option>Ready to Move</option>
            <option>Under Construction</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Available From</label>
          <input 
            type="date" 
            value={formData.availableFrom}
            onChange={(e) => updateForm('availableFrom', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          />
        </div>
      </div>
    </div>
  );
}

function Step4({ formData, updateForm }) {
  const allAmenities = [
    { name: "Lift", icon: <ArrowRight size={14} /> },
    { name: "Gated Security", icon: <ArrowRight size={14} /> },
    { name: "Power Backup", icon: <ArrowRight size={14} /> },
    { name: "Gym / Club House", icon: <ArrowRight size={14} /> },
    { name: "Swimming Pool", icon: <ArrowRight size={14} /> },
    { name: "Gas Pipeline", icon: <ArrowRight size={14} /> },
    { name: "Servant Room", icon: <ArrowRight size={14} /> },
  ];

  const toggleAmenity = (name) => {
    const exists = formData.amenities.includes(name);
    if (exists) {
      updateForm('amenities', formData.amenities.filter(a => a !== name));
    } else {
      updateForm('amenities', [...formData.amenities, name]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {allAmenities.map(a => (
          <label 
            key={a.name}
            className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer ${formData.amenities.includes(a.name) ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-100 opacity-60'}`}
          >
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-slate-900 rounded cursor-pointer"
              checked={formData.amenities.includes(a.name)}
              onChange={() => toggleAmenity(a.name)}
            />
            <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{a.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function Step5({ formData, updateForm }) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Photo Upload (3-15 Photos)</label>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {formData.photos.map((p, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group">
              <img src={p} className="w-full h-full object-cover" alt="Property" />
              <button 
                onClick={() => updateForm('photos', formData.photos.filter((_, idx) => idx !== i))}
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
          <label className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:border-dark-orange hover:text-dark-orange transition-all cursor-pointer group">
            <input 
              type="file" 
              multiple 
              className="hidden" 
              onChange={(e) => {
                // Mock upload: add local blob URLs
                const files = Array.from(e.target.files);
                const urls = files.map(f => URL.createObjectURL(f));
                updateForm('photos', [...formData.photos, ...urls]);
              }}
            />
            <Camera size={24} className="group-hover:scale-110 transition-transform" />
            <p className="text-[8px] font-black uppercase tracking-widest mt-2">Add Photos</p>
          </label>
        </div>
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-relaxed">
          📸 Bhaiya's Tip: Upload at least one photo of the <span className="text-slate-900">Living Room, Kitchen, and Washroom</span>.
        </p>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Video Link (YouTube / Vimeo)</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="e.g. https://youtube.com/watch?v=..."
            value={formData.videoLink}
            onChange={(e) => updateForm('videoLink', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-12 py-5 rounded-2xl text-[13px] font-black uppercase tracking-tight outline-none focus:border-dark-orange transition-all"
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"><Video size={18} /></div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Description</label>
        <textarea 
          placeholder="Tell us what makes your home special... e.g., Sun-facing balcony, recently renovated kitchen"
          value={formData.description}
          onChange={(e) => updateForm('description', e.target.value)}
          className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-[13px] font-medium outline-none focus:border-dark-orange transition-all h-40 resize-none leading-relaxed"
        />
      </div>
    </div>
  );
}

function Step6({ formData, updateForm }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ownership Type</label>
          <select 
            value={formData.ownership}
            onChange={(e) => updateForm('ownership', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          >
            <option>Freehold</option>
            <option>Leasehold</option>
            <option>Power of Attorney</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">RERA Number</label>
          <input 
            type="text" 
            placeholder="Mandatory for Builders"
            value={formData.rera}
            onChange={(e) => updateForm('rera', e.target.value)}
            className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:border-dark-orange transition-all"
          />
        </div>
      </div>

      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/20 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="relative z-10 flex items-center justify-between gap-8">
           <div className="space-y-4 max-w-sm">
             <h4 className="text-xl font-black uppercase tracking-tight">Bhaiya Power-Up! 🚀</h4>
             <p className="text-slate-400 text-[10px] font-medium leading-relaxed uppercase tracking-wider">
               Boost your listing by 3x! Get professional photos and the "Verified" shield badge.
             </p>
             <div className="text-2xl font-black text-white">₹499 <span className="text-[10px] text-slate-500 uppercase tracking-widest">one-time</span></div>
           </div>
           <button 
             onClick={() => updateForm('verificationUpsell', !formData.verificationUpsell)}
             className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.verificationUpsell ? 'bg-dark-orange text-white' : 'bg-white/10 text-white'}`}
           >
             {formData.verificationUpsell ? 'Selected' : 'Verify & Boost'}
           </button>
        </div>
      </div>

      <label className="flex gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 cursor-pointer group hover:border-dark-orange transition-all">
        <div className="mt-1">
          <input 
            type="checkbox" 
            className="w-6 h-6 accent-slate-900 rounded cursor-pointer"
            checked={formData.declaration}
            onChange={(e) => updateForm('declaration', e.target.checked)}
          />
        </div>
        <p className="text-[11px] font-bold text-slate-600 leading-relaxed uppercase tracking-wide">
          I confirm that these photos are real and I am authorized to list this property. I will update the status once sold.
        </p>
      </label>
    </div>
  );
}

function SuccessAnimation({ onDashboard }) {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-10 animate-in zoom-in duration-700">
        <div className="relative mx-auto w-48 h-48">
          <div className="absolute inset-0 bg-dark-orange/10 rounded-full animate-ping" />
          <div className="relative w-48 h-48 bg-slate-900 rounded-full flex items-center justify-center text-dark-orange shadow-2xl">
            <CheckCircle2 size={80} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">BOOM! 🔥</h2>
          <p className="text-xl font-bold text-slate-500 uppercase tracking-tight leading-none">Your property is now LIVE.</p>
          <p className="text-sm font-medium text-slate-400 max-w-xs mx-auto leading-relaxed">
            Bhaiya is now searching for your buyer! Keep an eye on your WhatsApp for instant leads.
          </p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={onDashboard}
            className="w-full py-5 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
          >
            Go to Dashboard
          </button>
          <button className="w-full py-5 rounded-2xl border-2 border-slate-100 text-slate-400 text-[11px] font-black uppercase tracking-widest hover:border-emerald-200 hover:text-emerald-500 transition-all flex items-center justify-center gap-2">
            <Zap size={14} className="text-emerald-500" /> Share on WhatsApp Status (+40% Views)
          </button>
        </div>
      </div>
    </div>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
      {icon}
      <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">{label}</span>
    </div>
  );
}
