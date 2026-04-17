import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ShieldCheck, ChevronRight, Lock } from "lucide-react";

export default function VerifyOtp() {
  const [searchParams] = useSearchParams();
  const mobile = searchParams.get("mobile") || "00000 00000";
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(59);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length !== 4) return;
    
    // Extract role from URL
    const roleQuery = searchParams.get("role") || "Buyer Login";
    const roleMap = {
      "Buyer Login": "buyer",
      "Seller Login": "seller",
      "Partner Login": "buyer",
      "Developer Login": "developer",
      "Expert Login": "expert"
    };
    const selectedRole = roleMap[roleQuery] || "buyer";

    // Standard Login Logic
    sessionStorage.setItem("bhaiya_role", selectedRole);
    
    // Redirect to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-orange-50 font-poppins flex flex-col lg:items-center lg:justify-center">
      
      {/* Background decoration for desktop */}
      <div className="hidden lg:block absolute top-0 left-0 w-96 h-96 bg-orange-200/30 blur-3xl rounded-full -z-10"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 blur-3xl rounded-full -z-10"></div>

      {/* Desktop Container */}
      <div className="w-full lg:max-w-md">

        {/* Top Navigation */}
        <div className="flex items-center p-4 lg:p-0 lg:mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 pt-4 flex flex-col lg:px-0 lg:pt-0">

          {/* Header */}
          <div className="mb-8 text-left lg:text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-orange-100 mb-4">
              <ShieldCheck size={12} className="text-dark-orange" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-dark-orange">
                Secure Access
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-semibold text-slate-800 leading-tight">
              Verify <span className="text-dark-orange">OTP</span>
            </h1>

            <p className="text-sm text-slate-500 mt-2">
              Enter the 4-digit code sent to <br className="hidden lg:block" />
              <span className="font-semibold text-dark-orange">+91 {mobile}</span>
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md lg:shadow-xl p-6 lg:p-8">
            <form onSubmit={handleVerify} className="space-y-6">
              
              {/* OTP Input */}
              <div>
                <label className="text-[11px] font-bold uppercase text-slate-400 tracking-widest ml-1">
                  Verification Code
                </label>
                
                <div className={`mt-2 transition-transform duration-300 ${isFocused ? "scale-[1.02]" : ""}`}>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={otp}
                    maxLength={4}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="0 0 0 0"
                    className={`w-full py-4 px-4 rounded-xl text-center text-3xl tracking-[0.5em] font-bold bg-white border transition-all outline-none ${
                      isFocused 
                        ? "border-dark-orange shadow-lg shadow-orange-100" 
                        : "border-slate-200"
                    }`}
                  />
                </div>
              </div>

              {/* Verify Button */}
              <button
                type="submit"
                disabled={otp.length !== 4}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white text-xs font-black uppercase tracking-widest transition active:scale-95 ${
                  otp.length === 4 
                    ? "bg-dark-orange shadow-md hover:brightness-110" 
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                Verify & Continue <ChevronRight size={18} />
              </button>

              {/* Timer + Resend */}
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tight pt-2">
                <span className="text-slate-400">
                  {timer > 0
                    ? `Resend in 0:${timer < 10 ? `0${timer}` : timer}`
                    : "Didn't receive code?"}
                </span>
                <button
                  type="button"
                  disabled={timer > 0}
                  className={`transition-colors ${
                    timer === 0 ? "text-dark-orange hover:underline" : "text-slate-300"
                  }`}
                >
                  Resend OTP
                </button>
              </div>
            </form>
          </div>

          {/* Footer Branding (Optional) */}
          <div className="text-center mt-8 hidden lg:block">
            <p className="text-[10px] text-slate-300 uppercase tracking-[0.3em]">
              Durgapur Real Estate Portal
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="p-6 text-center flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase">
            System Operational
          </span>
        </div>

      </div>
    </div>
  );
}