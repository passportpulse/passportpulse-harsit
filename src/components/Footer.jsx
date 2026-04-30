import { Link } from "react-router-dom";
import { navigationLinks } from "../constants/navigation";
import Container from "./layout/Container";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "Facebook", icon: FaFacebook, link: "#", color: "#1877F2" },
    { name: "Instagram", icon: FaInstagram, link: "#", color: "#d62976" },
    { name: "LinkedIn", icon: FaLinkedin, link: "#", color: "#0A66C2" },
    { name: "YouTube", icon: FaYoutube, link: "#", color: "#FF0000" },
    { name: "X", icon: FaXTwitter, link: "#", color: "#000000" },
  ];

  return (
    <footer className="bg-slate-50 text-slate-700 font-poppins border-t border-slate-200">
      <Container className="py-8 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-y-12 gap-x-4 lg:gap-8 text-left">
          {/* ================= ROW 1 ================= */}

          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-6 flex flex-col items-start space-y-3">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 leading-none uppercase">
                PROPERTY <span className="text-dark-orange">WALA</span>{" "}
                <span className="text-slate-500 font-medium text-base sm:text-lg uppercase">
                  Bhaiya
                </span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
              Simplifying property journey with verified listings & expert
              guidance.
            </p>

            <div className="flex gap-2 text-xs sm:text-sm items-start">
              <span className="text-dark-orange text-base sm:text-lg shrink-0">
                📍
              </span>
              <p className="text-slate-500 leading-tight">
                5th Floor, Suhatta Commercial Complex, City Center, Durgapur, WB
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 w-full">
              <Badge 
                icon={<div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-[10px]">16</div>}
                label="Industrial"
                sub="Excellence"
              />
              <Badge 
                icon={<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-dark-orange">🛡️</div>}
                label="Steel-Standard"
                sub="Verification"
              />
              <Badge 
                icon={<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🚛</div>}
                label="Logistics"
                sub="Optimized"
              />
              <Badge 
                icon={<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">👥</div>}
                label="Trusted By"
                sub="1M+ Users"
              />
            </div>
          </div>

          {/* Important Info */}
          <div className="col-span-2 lg:col-span-6 flex flex-col items-start">
            <h4 className="text-dark-orange font-black uppercase text-[10px] sm:text-xs mb-3 sm:mb-6 tracking-widest">
              📜 Important Information
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  <span className="font-bold text-slate-900">
                    Verification:
                  </span>{" "}
                  All listings marked with ✅ are physically verified by our
                  field agents.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span>📊</span>
                <span>
                  <span className="font-bold text-slate-900">
                    Transparency:
                  </span>{" "}
                  Prices are subject to market fluctuations and seller
                  negotiations.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span>🔒</span>
                <span>
                  <span className="font-bold text-slate-900">Privacy:</span>{" "}
                  Your data is encrypted; we only share your contact with
                  verified owners/developers.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span>⚖️</span>
                <span>
                  <span className="font-bold text-slate-900">Compliance:</span>{" "}
                  All properties are listed in accordance with local RERA and
                  zoning laws.
                </span>
              </li>
            </ul>
            {/* Professional Disclaimer */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-600">
                  Disclaimer:
                </span>{" "}
                Information provided is for representational purposes only.
                Users are advised to perform independent due diligence before
                making any financial commitment. We act as a facilitating
                platform and are not responsible for third-party disputes.
              </p>
            </div>
          </div>

          {/* Divider (Desktop Only) */}
          <div className="hidden lg:block col-span-12 h-px bg-slate-200"></div>

          {/* ================= ROW 2 ================= */}

          {/* Navigation */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-start">
            <h4 className="text-dark-orange font-black uppercase text-[10px] sm:text-xs mb-3 sm:mb-6 tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-dark-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-start">
            <h4 className="text-dark-orange font-black uppercase text-[10px] sm:text-xs mb-3 sm:mb-6 tracking-widest">
              Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li className="hover:text-dark-orange cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-dark-orange cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-2 lg:col-span-4 flex flex-col items-start gap-1 sm:gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
            <h4 className="text-dark-orange font-black uppercase text-[10px] sm:text-xs mb-1 sm:mb-4 tracking-widest">
              Connect With Us
            </h4>

            <a
              href="mailto:propertywalabhaiya@gmail.com"
              className="text-[11px] sm:text-sm hover:text-dark-orange transition-colors font-medium"
            >
              propertywalabhaiya@gmail.com
            </a>

            <a
              href="tel:+917699988876"
              className="text-[11px] sm:text-sm hover:text-dark-orange transition-colors font-bold"
            >
              +91 76999 88876
            </a>

            <button
              onClick={() =>
                window.open("https://wa.me/917699988876", "_blank")
              }
              className="mt-3 w-fit py-2.5 px-6 bg-dark-orange text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-lighter-orange transition-all duration-300"
            >
              Talk to Advisor
            </button>

            {/* Socials */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Follow Us On
                </span>
                <div className="h-px w-8 bg-slate-200" />
              </div>

              <div className="flex gap-4 items-center">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform duration-200 opacity-80 hover:opacity-100"
                    >
                      <Icon size={18} color={social.color} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div className="bg-white py-4 border-t border-slate-100">
        <Container className="text-center">
          <p className="text-[10px] sm:text-xs text-slate-400">
            © {currentYear}{" "}
            <span className="font-bold text-slate-900 uppercase">
              Property Wala Bhaiya
            </span>
            . All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
function Badge({ icon, label, sub }) {
  return (
    <div className="p-3 bg-white border border-slate-100 rounded-xl flex items-center gap-3 shadow-xs hover:shadow-md transition-all group">
       <div className="group-hover:scale-110 transition-transform">{icon}</div>
       <div className="leading-none">
          <p className="text-[10px] font-black uppercase text-slate-900 tracking-tight">{label}</p>
          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{sub}</p>
       </div>
    </div>
  );
}
