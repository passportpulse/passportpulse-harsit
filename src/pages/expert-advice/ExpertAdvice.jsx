import { useState } from "react";
import { FileText, User, Phone, Mail, MapPin, BarChart3 } from "lucide-react";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";

export default function ExpertAdvice() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    investmentType: "",
    budget: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("ROI Request:", formData);

    alert("Your ROI report request has been submitted!");
  };

  return (
    <Section className="pt-6 lg:pt-10">
      <Container>
        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-4">
            <FileText size={14} className="text-orange-600" />
            <span className="text-[11px] uppercase tracking-widest text-slate-700">
              Expert Advisory
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-slate-800">
            Get ROI & Compliance Report
          </h1>

          <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Receive a detailed investment analysis including ROI projections,
            legal checks, and market insights from our experts.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <Feature
            title="ROI Projection"
            desc="Expected returns & growth analysis"
          />
          <Feature title="Legal Verification" desc="RERA & compliance check" />
          <Feature
            title="Market Insights"
            desc="Area trends & price evaluation"
          />
        </div>

        {/* FORM */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NAME */}
            <InputField
              icon={<User size={16} />}
              label="Full Name"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
            />

            {/* PHONE */}
            <InputField
              icon={<Phone size={16} />}
              label="Phone Number"
              name="phone"
              placeholder="+91 98765 43210"
              required
              onChange={handleChange}
            />

            {/* EMAIL */}
            <InputField
              icon={<Mail size={16} />}
              label="Email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />

            {/* INVESTMENT TYPE */}
            <div>
              <label className="text-xs font-semibold text-slate-500">
                Investment Type
              </label>
              <select
                name="investmentType"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm outline-none"
              >
                <option value="">Select</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land / Plot</option>
              </select>
            </div>

            {/* BUDGET */}
            <div>
              <label className="text-xs font-semibold text-slate-500">
                Budget Range
              </label>
              <input
                type="text"
                name="budget"
                placeholder="e.g. ₹25L - ₹50L"
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm outline-none"
                onChange={handleChange}
              />
            </div>

            {/* LOCATION */}
            <div>
              <label className="text-xs font-semibold text-slate-500">
                Preferred Location
              </label>
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-1">
                <MapPin size={16} className="text-slate-400" />
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Noida, Gurgaon, Bangalore"
                  className="w-full outline-none text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs font-semibold text-slate-500">
                Additional Requirements
              </label>
              <textarea
                name="message"
                rows="3"
                placeholder="Tell us your goals (rental, resale, long-term...)"
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm outline-none"
                onChange={handleChange}
              />
            </div>

            {/* SUBMIT */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex px-12 items-center justify-center bg-dark-orange hover:bg-slate-900 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-orange-100 active:scale-95"
              >
                Get My ROI Report
              </button>
            </div>
          </form>
        </div>

        {/* JOIN PANEL CTA */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-dark-orange/10 rounded-full blur-3xl -mr-20 -mb-20"></div>
             <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <div className="text-center md:text-left">
                   <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none mb-4 uppercase">
                      Are you a <span className="text-dark-orange">Professional?</span>
                   </h2>
                   <p className="text-slate-400 text-sm md:text-base font-medium max-w-md">
                      Join West Bengal's most elite real estate advisory network. Scale your practice with verified high-intent leads.
                   </p>
                </div>
                <button 
                  onClick={() => window.location.href='/partner-application-form'}
                  className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-dark-orange hover:text-white transition-all shadow-2xl active:scale-95 whitespace-nowrap"
                >
                   Apply for Panel
                </button>
             </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* SMALL FEATURE CARD */
function Feature({ title, desc }) {
  return (
    <div className="border border-slate-200 rounded-xl p-4 text-center bg-white">
      <BarChart3 size={18} className="mx-auto text-orange-500 mb-2" />
      <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
      <p className="text-xs text-slate-500 mt-1">{desc}</p>
    </div>
  );
}

/* REUSABLE INPUT */
function InputField({ icon, label, name, placeholder, required, onChange }) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-500">{label}</label>
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-1">
        <span className="text-slate-400">{icon}</span>
        <input
          type="text"
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full outline-none text-sm"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
