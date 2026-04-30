import React from "react";
import { Circle, Clock, CheckCircle2, Flame, AlertCircle } from "lucide-react";

export default function PropertyStatusBadge({ status }) {
  const statusConfig = {
    active: {
      label: "Live & Available",
      color: "bg-emerald-100 text-emerald-700 border-emerald-200",
      icon: <Circle className="w-2 h-2 fill-emerald-500 animate-pulse" />,
    },
    new: {
      label: "Fresh Listing",
      color: "bg-blue-100 text-blue-700 border-blue-200",
      icon: <Zap className="w-2 h-2 text-blue-500" />,
    },
    high_interest: {
      label: "Fast-Moving!",
      color: "bg-orange-100 text-orange-700 border-orange-200",
      icon: <Flame className="w-2 h-2 text-orange-500" />,
    },
    negotiation: {
      label: "Offer Under Review",
      color: "bg-amber-100 text-amber-700 border-amber-200",
      icon: <Clock className="w-2 h-2 text-amber-500" />,
    },
    sold: {
      label: "Bhaiya, it’s Gone!",
      color: "bg-slate-100 text-slate-500 border-slate-200 grayscale",
      icon: <CheckCircle2 className="w-2 h-2 text-slate-400" />,
    },
    price_drop: {
      label: "New Lower Price!",
      color: "bg-red-100 text-red-700 border-red-200",
      icon: <AlertCircle className="w-2 h-2 text-red-500" />,
    }
  };

  const config = statusConfig[status] || statusConfig.active;

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9px] font-black uppercase tracking-wider ${config.color}`}>
      {config.icon}
      {config.label}
    </div>
  );
}

function Zap({ className }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="none"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
