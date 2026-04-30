import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { 
  FileText, 
  Download, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Star, 
  Target, 
  DollarSign, 
  AlertCircle,
  CheckCircle2,
  Printer,
  Copy,
  Share2,
  Info,
  Clock,
  MessageSquare
} from "lucide-react";
import Container from "../../components/layout/Container";

export default function BhaiyaTools() {
  const [activeTab, setActiveTab] = useState("negotiation");

  return (
    <DashboardLayout role="buyer" userName="Rajesh Kumar">
      <div className="mb-8 lg:mb-12">
         <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter">Bhaiya <span className="text-dark-orange">Pro Tools</span></h2>
         <p className="text-slate-500 font-medium mt-2 text-sm lg:text-base">Professional templates and cheat sheets to help you close the deal.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
         {/* Sidebar Tabs - Horizontal scroll on mobile, vertical on desktop */}
         <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 no-scrollbar">
            <ToolTab 
               active={activeTab === "negotiation"} 
               onClick={() => setActiveTab("negotiation")}
               icon={<Zap size={20} />} 
               title="Negotiation" 
               desc="Save lakhs."
               mobileSmall
            />
            <ToolTab 
               active={activeTab === "token"} 
               onClick={() => setActiveTab("token")}
               icon={<FileText size={20} />} 
               title="Token Receipt" 
               desc="Freeze deal."
               mobileSmall
            />
            <ToolTab 
               active={activeTab === "newsletter"} 
               onClick={() => setActiveTab("newsletter")}
               icon={<Star size={20} />} 
               title="Market Pulse" 
               desc="Local trends."
               mobileSmall
            />
            <ToolTab 
               active={activeTab === "notifications"} 
               onClick={() => setActiveTab("notifications")}
               icon={<MessageSquare size={20} />} 
               title="WhatsApp" 
               desc="Lead alerts."
               mobileSmall
            />
            <ToolTab 
               active={activeTab === "social"} 
               onClick={() => setActiveTab("social")}
               icon={<Share2 size={20} />} 
               title="Social Posts" 
               desc="Sold/Leased templates."
               mobileSmall
            />
            <ToolTab 
               active={activeTab === "transparency"} 
               onClick={() => setActiveTab("transparency")}
               icon={<ShieldCheck size={20} />} 
               title="Transparency" 
               desc="Rejection reports."
               mobileSmall
            />
            <ToolTab 
               active={activeTab === "rejections"} 
               onClick={() => setActiveTab("rejections")}
               icon={<FileWarning size={20} />} 
               title="Rejections" 
               desc="Notice templates."
               mobileSmall
            />
         </div>

         {/* Content Area */}
         <div className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-14 border border-slate-100 shadow-xl overflow-hidden relative">
            {activeTab === "negotiation" && <NegotiationContent />}
            {activeTab === "token" && <TokenContent />}
            {activeTab === "newsletter" && <NewsletterContent />}
            {activeTab === "notifications" && <NotificationsContent />}
            {activeTab === "social" && <SocialTemplatesContent />}
            {activeTab === "transparency" && <TransparencyReportContent />}
            {activeTab === "rejections" && <RejectionNoticeContent />}
         </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB COMPONENTS ---

function ToolTab({ active, onClick, icon, title, desc, mobileSmall }) {
  return (
    <button 
      onClick={onClick}
      className={`shrink-0 lg:w-full text-left p-6 lg:p-8 rounded-[2rem] lg:rounded-[2.5rem] border-2 transition-all group ${active ? 'bg-slate-900 border-slate-900 shadow-2xl shadow-slate-900/20' : 'bg-white border-slate-50 hover:border-dark-orange'} ${mobileSmall ? 'w-[160px] lg:w-full' : ''}`}
    >
       <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 transition-all ${active ? 'bg-dark-orange text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-dark-orange group-hover:text-white'}`}>
          {icon}
       </div>
       <h4 className={`text-xs lg:text-base font-black uppercase tracking-tight mb-1 lg:mb-2 ${active ? 'text-white' : 'text-slate-900'}`}>{title}</h4>
       <p className={`text-[8px] lg:text-[10px] font-bold uppercase tracking-widest leading-relaxed ${active ? 'text-slate-400' : 'text-slate-500'} line-clamp-1`}>{desc}</p>
    </button>
  );
}

function NegotiationContent() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">The Negotiation <span className="text-dark-orange">Cheat Sheet</span></h3>
          <button className="flex items-center gap-2 text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-widest"><Download size={14} /> PDF</button>
       </div>
       
       <div className="grid md:grid-cols-2 gap-8">
          <NegotiationStep 
             num="1" 
             title="Do Your Homework" 
             desc="Check the Heat Map. If the sector average is ₹6,000/sqft and they ask for ₹7,000, you have immediate leverage."
          />
          <NegotiationStep 
             num="2" 
             title="The Sandwich Method" 
             desc="Start with a compliment ('Great view'), mention a flaw ('Kitchen needs work'), end with a positive ('Let's make a deal')."
          />
          <NegotiationStep 
             num="3" 
             title="Focus on Repairs" 
             desc="Get quotes for cracks or seepage. Ask for that exact amount to be deducted from the final sale price."
          />
          <NegotiationStep 
             num="4" 
             title="Show Your Readiness" 
             desc="Tell them your loan is pre-approved. Speed is worth money to a seller—use it to shave off 2-3%."
          />
       </div>

       <div className="p-8 bg-red-50 rounded-[2.5rem] border border-red-100 space-y-4">
          <h4 className="text-sm font-black text-red-600 uppercase tracking-widest flex items-center gap-2"><AlertCircle size={16} /> Never Say These 3 Things:</h4>
          <ul className="space-y-3">
             <li className="text-[10px] font-black text-red-900 uppercase tracking-wide">❌ "I love this house so much, I have to have it!" (Leverage lost)</li>
             <li className="text-[10px] font-black text-red-900 uppercase tracking-wide">❌ "My budget is exactly what you are asking." (Keep a buffer)</li>
             <li className="text-[10px] font-black text-red-900 uppercase tracking-wide">❌ "This house is terrible/broken." (Owner gets defensive)</li>
          </ul>
       </div>
    </div>
  );
}

function TokenContent() {
  const [amount, setAmount] = useState("50,000");
  const [seller, setSeller] = useState("Rajesh Kumar");
  const [buyer, setBuyer] = useState("Amitava Ghosh");

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Token Receipt <span className="text-dark-orange">Generator</span></h3>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-widest"><Printer size={14} /> Print</button>
             <button className="flex items-center gap-2 text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-widest"><Share2 size={14} /> Share</button>
          </div>
       </div>

       <div className="p-10 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 font-serif text-slate-700 space-y-8">
          <div className="text-center space-y-2 pb-6 border-b border-slate-200">
             <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 font-poppins">TOKEN MONEY RECEIPT</h4>
             <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-poppins">Bhaiya Standard MOU Template</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-xs leading-relaxed">
             <div className="space-y-4">
                <p><span className="font-bold uppercase text-[10px]">Seller:</span> {seller}</p>
                <p><span className="font-bold uppercase text-[10px]">Buyer:</span> {buyer}</p>
             </div>
             <div className="space-y-4 text-right">
                <p><span className="font-bold uppercase text-[10px]">Date:</span> {new Date().toLocaleDateString()}</p>
                <p><span className="font-bold uppercase text-[10px]">Place:</span> Durgapur, WB</p>
             </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-inner border border-slate-100 text-sm leading-relaxed italic">
             "The Seller agrees to sell and the Buyer agrees to purchase the property for a total consideration of <span className="font-bold text-slate-900">₹45,00,000</span>. A token amount of <span className="font-bold text-slate-900 underline">₹{amount}</span> is hereby received to freeze the deal."
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12">
             <div className="border-t border-slate-300 pt-4 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Seller Signature</p>
             </div>
             <div className="border-t border-slate-300 pt-4 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Buyer Signature</p>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
             <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Token Amount</label>
             <input 
                type="text" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm font-black outline-none focus:border-dark-orange"
             />
          </div>
          <div className="space-y-2 flex flex-col justify-end">
             <button className="w-full py-4 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest shadow-xl">Generate Final PDF</button>
          </div>
       </div>
    </div>
  );
}

function NewsletterContent() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="flex items-center justify-between">
          <div className="space-y-1">
             <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">Bhaiya Weekly <span className="text-dark-orange">Pulse</span></h3>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Issue #42 • Saturday Morning Edition</p>
          </div>
          <div className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-[9px] font-black uppercase tracking-widest">Live: Seller's Market</div>
       </div>

       <div className="grid md:grid-cols-3 gap-4">
          <PulseItem label="Hot Zone" value="Sector 45" sub="+4% Growth" color="emerald" />
          <PulseItem label="Value Zone" value="Indirapuram" sub="High Inventory" color="blue" />
          <PulseItem label="Demand Spike" value="2BHK Flats" sub="+12% Leads" color="orange" />
       </div>

       <div className="space-y-6">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2"><Target size={16} className="text-dark-orange" /> Deal of the Week</h4>
          <div className="relative rounded-[2.5rem] overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070" className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700" alt="Deal" />
             <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent p-8 flex flex-col justify-end">
                <p className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em] mb-2">Paisa Vasool Choice</p>
                <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">3BHK Penthouse • ₹85 Lakhs</h4>
                <p className="text-xs text-slate-300 font-medium max-w-sm mb-6">Owner relocating to USA. offered at 10% below market rate. Including modular kitchen & ACs.</p>
                <button className="w-fit px-8 py-3 rounded-xl bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-dark-orange hover:text-white transition-all">View Full Deal</button>
             </div>
          </div>
       </div>

       <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-dark-orange/20 rounded-full blur-2xl" />
          <div className="relative z-10 flex items-center gap-6">
             <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-orange-400 shrink-0">
                <Info size={32} />
             </div>
             <div className="space-y-2">
                <h4 className="text-sm font-black uppercase tracking-tight">Smart Investor Tip</h4>
                <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase tracking-wider">"Always check your UDS of the land. In the long run, the building gets old, but land value stays. Higher UDS = better exit price!"</p>
             </div>
          </div>
       </div>
    </div>
  );
}

function NotificationsContent() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">WhatsApp <span className="text-dark-orange">Templates</span></h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Instant Handshakes</p>
       </div>

       <div className="grid md:grid-cols-2 gap-8">
          <WhatsAppMockup 
             role="BUYER" 
             title="Site Visit Confirmation"
             body="📅 Date: Sunday, Oct 12\n⏰ Time: 11:30 AM\n👤 Meeting with: Rajesh Kumar\n📍 Location: Skyline Elegance"
             tip="Check the water pressure & society security!"
          />
          <WhatsAppMockup 
             role="SELLER" 
             title="Lead Received"
             body="🎉 Good News! Amitava Ghosh is interested in your property.\n✅ Status: Bhaiya Verified Lead\n💬 Message: 'Is this available for a site visit?'"
             tip="Sellers who reply within 10m are 3x more likely to close!"
          />
       </div>

       <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-10 h-10 rounded-xl bg-dark-orange flex items-center justify-center"><Clock size={20} /></div>
             <h4 className="text-sm font-black uppercase tracking-widest">Automated Nudges</h4>
          </div>
          <p className="text-[10px] font-medium text-slate-400 leading-relaxed uppercase tracking-wider">
            If a lead isn't contacted within 2 hours, Bhaiya sends a gentle reminder to the seller with an automated 'Property Brochure' link.
          </p>
       </div>
    </div>
  );
}

function WhatsAppMockup({ role, title, body, tip }) {
  return (
    <div className="bg-emerald-50 rounded-[2.5rem] p-6 border border-emerald-100 space-y-4">
       <div className="flex items-center justify-between">
          <span className="text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-emerald-500 text-white rounded-full">{role}</span>
          <MessageSquare size={14} className="text-emerald-500" />
       </div>
       <div className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-50 relative">
          <div className="absolute top-2 left-0 -ml-1.5 w-3 h-3 bg-white rotate-45 border-l border-b border-emerald-50" />
          <p className="text-[10px] font-black text-slate-900 mb-2 uppercase tracking-tight">{title}</p>
          <p className="text-[10px] text-slate-600 leading-relaxed whitespace-pre-line">{body}</p>
       </div>
       <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-200/20">
          <p className="text-[8px] font-bold text-emerald-700 uppercase tracking-widest leading-relaxed">
             💡 Bhaiya's Tip: {tip}
          </p>
       </div>
    </div>
  );
}

// --- HELPERS ---

function SocialTemplatesContent() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Success <span className="text-dark-orange">Templates</span></h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Post Your Wins</p>
       </div>

       <div className="grid md:grid-cols-2 gap-8">
          <SocialPost 
             category="Residential Milestone" 
             headline="Another Dream Home, Delivered! 🥂🔑"
             caption="Congratulations to the new owners of this stunning 3BHK Flat in Durgapur! Matched in just 14 days."
             tag="SOLD"
             image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=2070"
          />
          <SocialPost 
             category="Big Business Move" 
             headline="Scaling Up! 🚀🏢"
             caption="Big moves in City Center! We’ve officially leased this premium Office Space to a top-tier tech firm."
             tag="LEASED"
             image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
          />
       </div>

       <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
          <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">Sticker Strategy</h4>
          <div className="flex flex-wrap gap-4">
             <Sticker text="Fastest Sale of the Month" icon="🏆" />
             <Sticker text="Premium Deal Closed" icon="💎" />
             <Sticker text="JV Partnership Finalized" icon="🤝" />
          </div>
       </div>
    </div>
  );
}

function TransparencyReportContent() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight italic">Transparency <span className="text-dark-orange">Report</span></h3>
          <span className="text-[10px] bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full font-black uppercase tracking-widest">MARCH 2026</span>
       </div>

       <p className="text-sm font-medium text-slate-500 leading-relaxed uppercase">"We believe the properties we REJECT are just as important as the ones we LIST."</p>

       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <ReportStat label="Audited" value="524" color="slate" />
          <ReportStat label="Approved" value="382" color="emerald" />
          <ReportStat label="Rejected" value="142" color="red" />
       </div>

       <div className="space-y-6">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Why We Said "No"</h4>
          <div className="space-y-4">
             <RejectionInsight label="Document Discrepancies" percent={40} desc="Missing RERA or incomplete title chains." />
             <RejectionInsight label="Structural Concerns" percent={25} desc="Failed load-bearing or fire-safety audit." />
             <RejectionInsight label="Logistical Bottlenecks" percent={20} desc="Restricted heavy-vehicle access." />
          </div>
       </div>

       <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-4">Featured Success</p>
          <p className="text-xs font-medium leading-relaxed italic uppercase">
             "A 10-Acre Industrial Plot was flagged for a hidden drainage easement. We saved our VIP client ₹2.5 Cr in future litigation." 
          </p>
          <p className="text-[9px] font-black text-slate-500 uppercase mt-4">— From the Founder's Office</p>
       </div>
    </div>
  );
}

function SocialPost({ category, headline, caption, tag, image }) {
  return (
    <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 group">
       <div className="relative h-48">
          <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="Success" />
          <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">{tag}</div>
       </div>
       <div className="p-8 space-y-4">
          <p className="text-[10px] font-black text-dark-orange uppercase tracking-widest leading-none">{category}</p>
          <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">{headline}</h4>
          <p className="text-[10px] font-medium text-slate-500 leading-relaxed uppercase">{caption}</p>
          <button className="flex items-center gap-2 text-slate-900 text-[10px] font-black uppercase tracking-widest hover:text-dark-orange transition-all"><Copy size={14} /> Copy Template</button>
       </div>
    </div>
  );
}

function Sticker({ text, icon }) {
  return (
    <div className="px-5 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-3">
       <span className="text-lg">{icon}</span>
       <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">{text}</span>
    </div>
  );
}

function ReportStat({ label, value, color }) {
  const colors = {
     slate: "text-slate-900 bg-slate-50 border-slate-100",
     emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
     red: "text-red-600 bg-red-50 border-red-100"
  }[color];

  return (
    <div className={`p-6 rounded-3xl border text-center ${colors}`}>
       <h4 className="text-3xl font-black mb-1">{value}</h4>
       <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{label}</p>
    </div>
  );
}

function RejectionInsight({ label, percent, desc }) {
  return (
    <div className="space-y-2">
       <div className="flex justify-between items-end">
          <div className="space-y-1">
             <h5 className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{label}</h5>
             <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{desc}</p>
          </div>
          <span className="text-xs font-black text-slate-900">{percent}%</span>
       </div>
       <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-dark-orange" style={{ width: `${percent}%` }}></div>
       </div>
    </div>
  );
}

function RejectionNoticeContent() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
       <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Rejection <span className="text-dark-orange">Notices</span></h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Maintain Standards</p>
       </div>

       <div className="space-y-8">
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
             <div className="flex items-center justify-between">
                <h4 className="text-sm font-black uppercase tracking-tight">Standard Rejection Notice</h4>
                <button className="flex items-center gap-2 text-dark-orange text-[10px] font-black uppercase tracking-widest"><Copy size={14} /> Copy to Clipboard</button>
             </div>
             <div className="p-6 bg-white rounded-2xl border border-slate-200 font-mono text-[11px] leading-relaxed text-slate-600">
                Subject: Update regarding your property listing on [App Name]<br /><br />
                Dear Owner,<br /><br />
                Thank you for submitting your property at [Location].<br /><br />
                At [Property Wala Bhaiya], our mission is to provide our users with "Steel-Standard" verified assets. After a thorough review by our audit team—leveraging our 16 years of experience in industrial and residential sectors—we regret to inform you that we cannot list this property at this time.<br /><br />
                Reason for Rejection: [Selected Reasons]<br /><br />
                Regards, The Audit Cell
             </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100">
             <h4 className="text-sm font-black text-orange-800 uppercase tracking-tight mb-4 flex items-center gap-2"><Info size={16} /> Why This Works?</h4>
             <p className="text-[10px] font-medium text-orange-600 leading-relaxed uppercase tracking-wide">
                Exclusivity builds trust. By rejecting substandard listings, you make your website the "Premium Filter" of the market.
             </p>
          </div>
       </div>
    </div>
  );
}

function NegotiationStep({ num, title, desc }) {
  return (
    <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dark-orange transition-all group">
       <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-sm font-black text-dark-orange shadow-sm shrink-0 group-hover:bg-dark-orange group-hover:text-white transition-all">
          {num}
       </div>
       <div className="space-y-1">
          <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">{title}</h4>
          <p className="text-[10px] font-medium text-slate-500 leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}

function PulseItem({ label, value, sub, color }) {
  const colorMap = {
     emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
     blue: "bg-blue-50 text-blue-600 border-blue-100",
     orange: "bg-orange-50 text-dark-orange border-orange-100"
  }[color];

  return (
    <div className={`p-6 rounded-[2rem] border text-center space-y-1 ${colorMap}`}>
       <p className="text-[8px] font-black uppercase tracking-widest opacity-60">{label}</p>
       <h4 className="text-sm font-black uppercase">{value}</h4>
       <p className="text-[9px] font-black">{sub}</p>
    </div>
  );
}
