import React, { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import BuyerDashboard from "./BuyerDashboard";
import SellerDashboard from "./SellerDashboard";
import DeveloperDashboard from "./DeveloperDashboard";
import PartnerDashboard from "./PartnerDashboard";

const services = [
  {
    title: "Buying & Renting",
    desc: "Browse verified homes across Durgapur.",
    tag: "Buyers",
    icon: "🏠",
    loginText: "Buyer Login",
  },
  {
    title: "Selling & Listing",
    desc: "List your property to genuine buyers.",
    tag: "Owners",
    icon: "💰",
    loginText: "Seller Login",
  },
  {
    title: "Partner Hub",
    desc: "Access inventory & collaborate on deals.",
    tag: "Network",
    icon: "🤝",
    loginText: "Partner Login",
  },
  {
    title: "Developer Portal",
    desc: "Strategic sales support for builders.",
    tag: "Builders",
    icon: "🏗️",
    loginText: "Developer Login",
  },
  {
    title: "Bhaiya’s Expert Panel",
    desc: "Collaborate on premium projects and scale your practice.",
    tag: "Professionals",
    icon: "📐",
    loginText: "Expert Login",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Check for role in sessionStorage (set during registration)
    const storedRole = sessionStorage.getItem("bhaiya_role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  // Return specialized dashboard if role is set
  if (role === "seller") return <SellerDashboard />;
  if (role === "buyer") return <BuyerDashboard />;
  if (role === "developer") return <DeveloperDashboard />;
  if (role === "expert") return <PartnerDashboard />;

  // Default Portal Landing Page
  return (
    <Section className="bg-[#fcfcfd] mt-0 pt-6 lg:mt-0 ">
      <Container>
        {/* HEADER */}
        <div className="relative mb-8 lg:mb-16 border-l-4 border-dark-orange pl-4 lg:pl-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1 lg:space-y-2">
              <span className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] text-dark-orange">
                Secure Access
              </span>

              <h2 className="mt-3 text-2xl lg:text-4xl font-black text-slate-800 tracking-tight leading-none">
                User{" "}
                <span className="bg-linear-to-r from-dark-orange to-dark-orange bg-clip-text text-transparent">
                  Service Portals
                </span>
              </h2>

              <p className="text-slate-500 max-w-md text-xs lg:text-base leading-relaxed font-medium">
                Select your specialized gateway to manage your real estate
                ecosystem.
              </p>

              <a
                href="#portals"
                className="
          cursor-pointer
          bg-dark-orange text-white
          flex items-center gap-2 group
          text-[10px] lg:text-[11px]
          font-black uppercase tracking-widest
          px-4 py-2 lg:px-5 lg:py-2.5
          border-2 border-white
          rounded-md
          hover:bg-white hover:text-orange-600 hover:border-orange-600
          transition-all duration-300
          shadow-sm hover:shadow-md
          w-fit
        "
              >
                <div className="flex items-center gap-0.5">
                  <ShieldCheck className="w-4 h-4 text-white group-hover:text-orange-600" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] lg:text-[11px] font-black tracking-widest uppercase">
                    Encrypted Login Access
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="portals">
          {services.map((service, index) => {
             const roleMap = {
                "Buyer Login": "buyer",
                "Seller Login": "seller",
                "Partner Login": "buyer", 
                "Developer Login": "developer",
                "Expert Login": "expert"
             };
             const selectedRole = roleMap[service.loginText];

             return (
               <div
                 key={index}
                 onClick={() => {
                    // Navigate to the Login page first, as per the original flow
                    navigate(`/login?role=${encodeURIComponent(service.loginText)}`);
                 }}
                 className="group relative p-6 md:p-8 rounded-4xl bg-white border border-slate-200 hover:border-dark-orange hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
               >
                 <div>
                   <div className="flex justify-between items-start mb-6">
                     <div className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                     <span className="relative overflow-hidden text-[10px] font-black uppercase tracking-widest text-white bg-slate-900 group-hover:bg-dark-orange px-3 py-1.5 rounded-lg transition-colors">
                       {service.tag}
                     </span>
                   </div>
   
                   <h3 className="text-lg md:text-xl font-black text-slate-800 mb-2 uppercase tracking-tight">
                     {service.title}
                   </h3>
                   <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8 font-medium">
                     {service.desc}
                   </p>
                 </div>
   
                 <button
                   className="
                     relative overflow-hidden
                     w-full flex items-center justify-between
                     pl-5 pr-2 py-4 rounded-xl
                     bg-slate-50 group-hover:bg-dark-orange text-slate-400 group-hover:text-white
                     text-[10px] font-black uppercase tracking-widest
                     transition-all duration-300
                     group/btn
                   "
                 >
                   <span className="flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4" />
                     {service.loginText}
                   </span>
   
                   <div className="bg-slate-200 group-hover:bg-white/10 p-1.5 rounded-lg transition-colors">
                     <ArrowRight className="w-4 h-4" />
                   </div>
                 </button>
               </div>
             );
          })}
        </div>
      </Container>
    </Section>
  );
}
