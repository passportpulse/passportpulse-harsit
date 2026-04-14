import Container from "../../../components/layout/Container";
import Section from "../../../components/layout/Section";
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Building2,
  Map,
  Handshake,
  Home,
  Briefcase,
  Factory,
  Warehouse,
  HeartPulse,
  Hotel,
  TrendingUp,
  Fuel,
  GraduationCap,
  Key, // Added for Rent
  ShoppingCart, // Added for Buy
  BadgeCheck,
} from "lucide-react";
import PropertyComparisonMatrix from "../../buy/sections/PropertyComparisonMatrix";
import RealEstatePie from "../../../components/RealEstatePie";

export default function HomeHero() {
  const navigate = useNavigate();

  /* =========================
      MARQUEE STATE + REFS
  ========================= */
  const marqueeRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isPaused, setIsPaused] = useState(false);

  const propertyTypes = [
    { name: "Flats", icon: Building2 },
    { name: "Plots", icon: Map },
    { name: "House/Duplex", icon: Home },
    { name: "Office/Retail", icon: Briefcase },
    { name: "Factory", icon: Factory },
    { name: "Ware House", icon: Warehouse },
    { name: "Industrial Plots", icon: Map },
    { name: "Petrol Pump", icon: Fuel },
    { name: "Hospital", icon: HeartPulse },
    { name: "Hotels/Resort", icon: Hotel },
    { name: "Institutes", icon: GraduationCap },
    { name: "Joint Ventures", icon: Handshake },
    { name: "Investment", icon: TrendingUp },
  ];

  const marqueeItems = [...propertyTypes, ...propertyTypes, ...propertyTypes];

  /* =========================
      NAVIGATION
  ========================= */
  const handlePropertyClick = useCallback(
    (name) => {
      const id = name.toLowerCase().replace(/\s+|\/+/g, "-");
      navigate(`/buy#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [navigate],
  );

  /* =========================
      ROBUST AUTO SCROLL
  ========================= */
  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    let frame;
    const speed = 0.8;

    const animate = () => {
      if (!isPaused && !dragState.current.isDragging) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 1.5) {
          container.scrollLeft =
            container.scrollLeft - container.scrollWidth / 3;
        }
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <Section className="mt-0 pt-6 lg:mt-0 mb-0 relative bg-linear-to-b from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* GLOBAL ANIMATION STYLES */}
      <style>
        {`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>

      {/* PROFESSIONAL DOT GRID */}
      <div className="hidden md:block absolute inset-0 bottom-1/3 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(#df6a15 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* HEADING */}
        <Container>
          <div className="relative text-center animate-slide-in">
            <h1
              className="relative text-xl lg:text-4xl font-medium leading-tight tracking-tight text-emerald-800 drop-shadow-md"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Elevate Your Living
            </h1>
          </div>
        </Container>

        {/* MARQUEE SECTION */}
        <div className="relative w-full mt-4 lg:mt-10">
          <div
            ref={marqueeRef}
            className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-3 cursor-grab active:cursor-grabbing relative z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              dragState.current.isDragging = false;
            }}
            onMouseDown={(e) => {
              dragState.current.isDragging = true;
              dragState.current.startX =
                e.pageX - marqueeRef.current.offsetLeft;
              dragState.current.scrollLeft = marqueeRef.current.scrollLeft;
            }}
            onMouseMove={(e) => {
              if (!dragState.current.isDragging) return;
              e.preventDefault();
              const x = e.pageX - marqueeRef.current.offsetLeft;
              const walk = (x - dragState.current.startX) * 1.5;
              marqueeRef.current.scrollLeft =
                dragState.current.scrollLeft - walk;
            }}
            onMouseUp={() => {
              dragState.current.isDragging = false;
              setIsPaused(false);
            }}
            onTouchStart={(e) => {
              dragState.current.isDragging = true;
              dragState.current.startX =
                e.touches[0].pageX - marqueeRef.current.offsetLeft;
              dragState.current.scrollLeft = marqueeRef.current.scrollLeft;
              setIsPaused(true);
            }}
            onTouchMove={(e) => {
              if (!dragState.current.isDragging) return;
              const x = e.touches[0].pageX - marqueeRef.current.offsetLeft;
              const walk = (x - dragState.current.startX) * 1.5;
              marqueeRef.current.scrollLeft =
                dragState.current.scrollLeft - walk;
            }}
            onTouchEnd={() => {
              dragState.current.isDragging = false;
              setIsPaused(false);
            }}
          >
            {marqueeItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={`${item.name}-${index}`}
                  onClick={() => handlePropertyClick(item.name)}
                  className="shrink-0 flex flex-col items-center gap-1 w-17.5 group cursor-pointer"
                >
                  <div className="w-16 lg:w-18 h-16 lg:h-18 shadow-sm rounded-xl flex items-center justify-center bg-white border border-orange-50 group-hover:border-dark-orange group-hover:shadow-md transition-all relative z-20">
                    <IconComponent
                      size={32}
                      className="text-dark-orange opacity-90 group-hover:scale-110 transition-transform"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[10px] lg:text-xs text-center font-medium text-slate-800 leading-tight">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
          {/* <p className="text-[10px] lg:text-xs font-medium text-slate-400 italic text-center mt-2">
            Click to{" "}
            <span className="text-dark-orange font-bold not-italic">see</span>{" "}
            all properties
          </p> */}
          <PropertyComparisonMatrix />
        </div>

        {/* POST PROPERTY CARD */}
        <Container className="w-full flex justify-center">
          <div className="w-full sm:w-1/2 mt-4">
            <div className="mt-3">
              <button className="w-full bg-white rounded-2xl shadow-lg border border-orange-100 px-4 py-4 flex items-center justify-between active:scale-[0.98] transition cursor-pointer hover:border-orange-300">
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm lg:text-base font-semibold text-slate-700">
                    Post Your Property
                  </span>
                  <span className="text-[10px] lg:text-xs mt-0 lg:mt-1 text-dark-orange">
                    Get unlimited enquiries from genuine buyers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative inline-block text-[10px] lg:text-sm font-black text-white bg-green-700 px-3 py-1 rounded-lg overflow-hidden">
                    FREE
                    <span
                      className="absolute inset-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shine 2s linear infinite",
                      }}
                    />
                  </span>
                  <Search
                    size={20}
                    className="text-orange-600"
                    strokeWidth={2.5}
                  />
                </div>
              </button>
            </div>
          </div>
        </Container>

        {/* NEW SECTION: EXPLORE VERIFIED PROPERTIES IN A BOX */}
        <Container className="w-full mt-10">
          <div className="bg-white border-2 border-slate-900 rounded-[32px] p-6 lg:p-10 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col items-center">
              {/* HEADER - Centered */}
              <div className="w-full flex justify-center items-center gap-2 mb-6 px-1 lg:px-4">
                <h2 className="text-xs lg:text-sm font-black text-slate-800 uppercase tracking-widest text-center">
                  Explore <span className="text-dark-orange">Verified</span>{" "}
                  Properties
                </h2>
                <BadgeCheck className="text-green-600 shrink-0" size={18} />
              </div>
              {/* Buy sell rent */}
              <div className="w-full">
                <RealEstatePie/>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}

// prev buy sell rent

//  <div className="grid grid-cols-3 gap-2 lg:gap-4 w-full max-w-lg">
//               {/* BUY BUTTON */}
//               <button
//                 onClick={() => navigate("/buy")}
//                 className="group flex flex-col items-center gap-2 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-green-400/40 transition-all active:scale-95 cursor-pointer"
//               >
//                 {/* Icon Box */}
//                 <div className="p-2.5 bg-slate-800 rounded-lg group-hover:bg-green-500/10 transition-all">
//                   <ShoppingCart
//                     size={18}
//                     className="text-green-400 group-hover:text-green-300 transition-colors"
//                   />
//                 </div>

//                 {/* Label */}
//                 <span className="text-[11px] font-semibold text-green-400 group-hover:text-green-300 uppercase tracking-wide transition-colors">
//                   Buy
//                 </span>
//               </button>
//               <button
//                 onClick={() => navigate("/sell")}
//                 className="group flex flex-col items-center gap-2 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-green-400/40 transition-all active:scale-95 cursor-pointer"
//               >
//                 {/* Icon Box */}
//                 <div className="p-2.5 bg-slate-800 rounded-lg group-hover:bg-green-500/10 transition-all">
//                   <TrendingUp
//                     size={18}
//                     className="text-green-400 group-hover:text-green-300 transition-colors"
//                   />
//                 </div>

//                 {/* Label */}
//                 <span className="text-[11px] font-semibold text-green-400 group-hover:text-green-300 uppercase tracking-wide transition-colors">
//                   Sell
//                 </span>
//               </button>
//               <button
//                 onClick={() => navigate("/rent")}
//                 className="group flex flex-col items-center gap-2 p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:border-green-400/40 transition-all active:scale-95 cursor-pointer"
//               >
//                 {/* Icon Box */}
//                 <div className="p-2.5 bg-slate-800 rounded-lg group-hover:bg-green-500/10 transition-all">
//                   <Key
//                     size={18}
//                     className="text-green-400 group-hover:text-green-300 transition-colors"
//                   />
//                 </div>

//                 {/* Label */}
//                 <span className="text-[11px] font-semibold text-green-400 group-hover:text-green-300 uppercase tracking-wide transition-colors">
//                   Rent
//                 </span>
//               </button>
//             </div>
