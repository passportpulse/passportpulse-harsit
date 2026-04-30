import React, { useState } from "react";
import { X, Star, Camera, CheckCircle2, MessageSquare } from "lucide-react";

export default function ReviewRequestModal({ isOpen, onClose, propertyName }) {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl relative">
        {!submitted ? (
          <div className="p-10 space-y-8">
            <div className="space-y-2 text-center">
              <h3 className="text-3xl font-black text-slate-900 leading-tight">
                How was the visit, <span className="text-orange-500">Rajesh?</span>
              </h3>
              <p className="text-slate-500 font-medium">
                We hope you liked the <span className="text-slate-900 font-bold">{propertyName}</span>! Your feedback helps us keep our listings accurate.
              </p>
            </div>

            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <button 
                  key={s}
                  onClick={() => setRating(s)}
                  className={`p-3 rounded-2xl transition-all ${rating >= s ? 'bg-yellow-400 text-white' : 'bg-slate-50 text-slate-300'}`}
                >
                  <Star className={`w-8 h-8 ${rating >= s ? 'fill-white' : ''}`} />
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100 space-y-3">
                <div className="flex items-center gap-2 text-orange-700 font-black text-[10px] uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Help the community & get rewarded!
                </div>
                <p className="text-xs font-bold text-orange-900/70 leading-relaxed">
                  Was the property as described? Upload a photo or leave a 2-line review to unlock a <span className="text-orange-900 font-black">10% Discount</span> on Legal Services.
                </p>
              </div>

              <textarea 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a quick note about your experience..."
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-sm font-bold focus:border-orange-500 focus:outline-none min-h-[100px] resize-none"
              />

              <button 
                onClick={handleSubmit}
                disabled={rating === 0}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        ) : (
          <div className="p-10 text-center space-y-6 py-16">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">You’re a legend! 🌟</h3>
              <p className="text-slate-500 font-medium">
                Your review has been shared. We’ve added the <span className="text-emerald-600 font-bold">10% discount</span> to your profile for your next legal check.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
