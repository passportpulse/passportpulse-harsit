import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Camera, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OnboardingModal({ isOpen, onClose, name = "Partner", role = "seller" }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const slides = [
    {
      title: "The 'Bhaiya' Secret to Fast Sales",
      headline: "Photos are your Salesman",
      description: "Properties with 5+ high-quality photos get 80% more inquiries. Shoot in daylight with curtains open for best results.",
      tip: "Clean the clutter! A tidy room looks 20% bigger on camera.",
      icon: <Camera className="text-dark-orange" size={40} />,
      do: "Shoot in daylight, use wide angles.",
      dont: "No blurry or dark vertical shots.",
      bg: "bg-orange-50"
    },
    {
      title: "Price it to Win",
      headline: "Use the Heat Map Advantage",
      description: "Don't guess your property's value. Check our real-time Heat Map to see what neighbors are asking.",
      tip: "Price at market value in 'Green' zones to attract bulk leads instantly.",
      icon: <TrendingUp className="text-blue-500" size={40} />,
      do: "Highlight luxury upgrades in 'Red' zones.",
      dont: "Don't overprice—data doesn't lie.",
      bg: "bg-blue-50"
    },
    {
      title: "The 'Bhaiya-Grade' Badge",
      headline: "Trust is our Currency",
      description: "Verified listings get a Priority Badge. Sellers with this badge close deals 3x faster than unverified ones.",
      tip: "Upload your RERA/Possession docs early to get the 'Trust Seal'.",
      icon: <ShieldCheck className="text-green-500" size={40} />,
      do: "Keep documents ready for verification.",
      dont: "Never hide legal flaws—truth wins.",
      bg: "bg-green-50"
    },
    {
      title: "Your Growth Suite",
      headline: "Manage Leads Like a Pro",
      description: "Your dashboard isn't just a list—it's a command center. Track views, respond to leads, and manage documentation.",
      tip: "Check your 'TAT Audit' weekly to stay in the top 10% of partners.",
      icon: <Zap className="text-purple-500" size={40} />,
      do: "Respond within 4 hours for 90% conversion.",
      dont: "Don't ignore the TAT alerts.",
      bg: "bg-purple-50",
      isLast: true
    }
  ];

  if (!isOpen) return null;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onClose();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Close Button - Premium Look */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-dark-orange hover:bg-orange-50 hover:rotate-90 transition-all duration-300 shadow-sm"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 flex gap-1 z-40 bg-slate-100">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 transition-all duration-500 ${i <= currentSlide ? "bg-dark-orange" : "bg-transparent"}`}
              />
            ))}
          </div>

          {/* Slide Content */}
          <div className="flex-1 overflow-y-auto pt-16 pb-8 px-8 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Visual Header */}
                <div className={`w-20 h-20 rounded-3xl ${slides[currentSlide].bg} flex items-center justify-center shadow-inner`}>
                  {slides[currentSlide].icon}
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-orange">
                      Slide {currentSlide + 1} of 4: {slides[currentSlide].title}
                    </p>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight leading-none uppercase">
                      {slides[currentSlide].headline}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </div>

                {/* Do's & Don'ts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-green-50 border border-green-100 space-y-2">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Do</span>
                    </div>
                    <p className="text-xs font-bold text-slate-700">{slides[currentSlide].do}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-red-50 border border-red-100 space-y-2">
                    <div className="flex items-center gap-2 text-red-500">
                      <AlertCircle size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Don't</span>
                    </div>
                    <p className="text-xs font-bold text-slate-700">{slides[currentSlide].dont}</p>
                  </div>
                </div>

                {/* Bhaiya's Tip */}
                <div className="p-6 rounded-3xl bg-slate-900 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-dark-orange/10 rounded-full -mr-12 -mt-12 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-dark-orange flex items-center justify-center shrink-0 shadow-lg text-white">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-dark-orange mb-1">Bhaiya's Secret Tip</h4>
                      <p className="text-xs sm:text-sm font-medium text-slate-300 italic leading-relaxed">
                        "{slides[currentSlide].tip}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Navigation */}
          <div className="p-8 sm:px-12 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center transition-all ${
                  currentSlide === 0 ? "opacity-20 cursor-not-allowed" : "hover:bg-white hover:text-dark-orange active:scale-90"
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="h-12 px-8 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all active:scale-95 flex items-center gap-3 shadow-xl shadow-slate-200"
              >
                {currentSlide === slides.length - 1 ? "Let's Get Started" : "Next Milestone"}
                <ChevronRight size={16} />
              </button>
            </div>

            {slides[currentSlide].isLast && (
              <button 
                onClick={() => navigate("/add-property")}
                className="hidden sm:flex items-center gap-2 text-dark-orange font-black text-[10px] uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
              >
                Skip to Listing <ChevronRight size={14} />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
