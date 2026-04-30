import React, { useState } from "react";
import { Bell, MessageSquare, Phone, Smartphone, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    priceDrop: true,
    newListings: true,
    soldOut: true,
    whatsappUpdates: true,
    smsAlerts: false,
  });

  const toggle = (key) => setSettings({ ...settings, [key]: !settings[key] });

  return (
    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 border border-slate-100 shadow-xl space-y-8 md:space-y-10 text-left">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[9px] md:text-[10px] font-black uppercase tracking-wider">
          <Bell className="w-3 h-3" /> Live Pulse
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Stay <span className="text-blue-600">Updated</span>, Stay Ahead.</h3>
        <p className="text-slate-500 font-medium text-xs md:text-sm max-w-lg">
          Configure how Bhaiya sends you property alerts. Never miss a price drop again!
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <SettingToggle 
            label="Price Drops" 
            desc="Notify on favorited property price drops." 
            active={settings.priceDrop} 
            onToggle={() => toggle('priceDrop')} 
          />
          <SettingToggle 
            label="Sold Out" 
            desc="Know if a listing is about to close." 
            active={settings.soldOut} 
            onToggle={() => toggle('soldOut')} 
          />
          <SettingToggle 
            label="New Matching" 
            desc="Matches found based on your search." 
            active={settings.newListings} 
            onToggle={() => toggle('newListings')} 
          />
          <SettingToggle 
            label="ROI Reports" 
            desc="Weekly market trends and insights." 
            active={true} 
            disabled 
          />
        </div>

        <div className="pt-8 border-t border-slate-100 space-y-6">
          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Delivery Channels</h4>
          <div className="flex flex-wrap gap-4">
            <ChannelButton 
              icon={<MessageSquare className="text-emerald-500" />} 
              label="WhatsApp" 
              active={settings.whatsappUpdates} 
              onToggle={() => toggle('whatsappUpdates')} 
            />
            <ChannelButton 
              icon={<Smartphone className="text-blue-500" />} 
              label="Push App" 
              active={true} 
              disabled 
            />
            <ChannelButton 
              icon={<Phone className="text-slate-500" />} 
              label="SMS Alerts" 
              active={settings.smsAlerts} 
              onToggle={() => toggle('smsAlerts')} 
            />
          </div>
        </div>
      </div>

      <div className="p-5 md:p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start sm:items-center gap-4">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500 shrink-0">
          <ShieldCheck size={20} />
        </div>
        <p className="text-[9px] md:text-[10px] font-bold text-emerald-900 leading-relaxed uppercase tracking-wider">
          Bhaiya Privacy Guarantee: We never share your number with third-party telemarketers. All alerts are 100% internal.
        </p>
      </div>
    </div>
  );
}

function SettingToggle({ label, desc, active, onToggle, disabled }) {
  return (
    <div 
      onClick={!disabled ? onToggle : undefined}
      className={`p-4 md:p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 ${
        active ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-100 opacity-60'
      } ${disabled ? 'cursor-default' : 'hover:border-blue-400'}`}
    >
      <div className="min-w-0">
        <p className="text-[11px] md:text-sm font-black text-slate-900 uppercase tracking-tight truncate">{label}</p>
        <p className="text-[9px] md:text-[10px] font-medium text-slate-500 leading-tight mt-1 line-clamp-1">{desc}</p>
      </div>
      <div className={`w-12 h-6 rounded-full relative transition-colors ${active ? 'bg-blue-600' : 'bg-slate-300'}`}>
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? 'left-7' : 'left-1'}`} />
      </div>
    </div>
  );
}

function ChannelButton({ icon, label, active, onToggle, disabled }) {
  return (
    <button 
      onClick={!disabled ? onToggle : undefined}
      className={`px-6 py-3 rounded-xl border-2 font-black uppercase text-[10px] tracking-widest flex items-center gap-3 transition-all ${
        active ? 'bg-white border-slate-900 text-slate-900 shadow-lg' : 'bg-slate-50 border-slate-100 text-slate-400 opacity-60'
      } ${disabled ? 'cursor-default' : 'hover:border-slate-300 active:scale-95'}`}
    >
      {icon}
      {label}
      {active && <CheckCircle2 size={14} className="text-emerald-500 ml-auto" />}
    </button>
  );
}
