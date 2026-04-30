import React, { useState } from "react";
import { X, AlertTriangle, CheckCircle2, MessageSquare, Send } from "lucide-react";

export default function ReportListingModal({ isOpen, onClose, propertyTitle }) {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

  const reasons = [
    "Already Sold/Rented",
    "Wrong Contact Info",
    "Fake Photos",
    "Incorrect Price",
    "Spam/Fraud"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      // Logic would go here: if 3 reports, hide listing etc.
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="relative p-8">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-wider">
                  <AlertTriangle className="w-3 h-3" /> Report Listing
                </div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  Help Bhaiya keep it real! Notice something wrong?
                </h3>
                <p className="text-slate-500 text-sm font-medium">
                  Reporting for: <span className="text-slate-900 font-bold">{propertyTitle}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Reason for Reporting</label>
                  <select 
                    required
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold focus:border-orange-500 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Reason</option>
                    {reasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Extra Details (Optional)</label>
                  <textarea 
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="e.g., 'The owner said the price is actually 5 Lakhs higher'"
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold focus:border-orange-500 focus:outline-none min-h-[100px] resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
                >
                  <Send className="w-4 h-4" /> Submit Report
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">Thanks for the heads-up!</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Bhaiya is looking into this right now. We’ve flagged this listing to save other buyers' time.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
