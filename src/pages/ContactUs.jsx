import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageSquare,
  Clock,
  Globe,
  CheckCircle,
  Send,
  Coffee,
} from "lucide-react";

// --- Global Styles ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

    :root {
      --font-jakarta: 'Plus Jakarta Sans', sans-serif;
    }

    body {
      font-family: var(--font-jakarta);
    }

    h1, h2, h3, h4, h5, h6, button, input, textarea, select, p, span, div {
      font-family: var(--font-jakarta);
      letter-spacing: -0.03em;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .animate-shimmer {
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
      background-size: 200% 100%;
      animation: shimmer 3s infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `}</style>
);

// --- Reusable UI Components ---

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""} relative z-10`}>
    {/* Removed inline font-family override to allow Plus Jakarta Sans to apply */}
    <h2
      className={`text-5xl md:text-6xl font-black tracking-tighter mb-6 ${
        light ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
      <span className="text-rose-600">.</span>
    </h2>
    {subtitle && (
      <p
        className={`text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed ${
          light ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const InputField = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
    />
  </div>
);

const SelectField = ({ label, options }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">
      {label}
    </label>
    <div className="relative">
      <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium appearance-none">
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
);

// --- Page Sections ---

const HeroHeader = () => (
  <section className="pt-32 pb-16 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
      <div className="inline-flex items-center space-x-3 bg-indigo-50 border border-indigo-100 text-indigo-700 px-5 py-2 rounded-full mb-10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
        </span>
        <span className="text-xs font-extrabold uppercase tracking-widest">
          We Reply Within 2 Hours
        </span>
      </div>

      {/* Removed inline font-family override */}
      <h1 className="text-6xl lg:text-[5.5rem] font-black text-gray-900 leading-[1.05] mb-8 tracking-tighter">
        Got a challenge? <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">
          Let’s solve it.
        </span>
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
        Whether you need a custom software solution, a dedicated team of
        developers, or just want to say hello—we are ready to listen.
      </p>
    </div>
  </section>
);

const ContactFormSection = () => (
  <section className="pb-32 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-indigo-900/10 border border-gray-100 overflow-hidden">
        <div className="grid lg:grid-cols-12">
          {/* Left: The Form (Span 7) */}
          <div className="lg:col-span-7 p-10 lg:p-20">
            {/* Removed inline font-family override */}
            <h3 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">
              Send us a message
            </h3>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <InputField label="First Name" placeholder="John" />
                <InputField label="Last Name" placeholder="Doe" />
              </div>

              <InputField
                label="Work Email"
                type="email"
                placeholder="john@company.com"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <SelectField
                  label="Project Type"
                  options={[
                    "Custom Software Dev",
                    "Mobile App",
                    "Web Development",
                    "Staff Augmentation",
                    "Other",
                  ]}
                />
                <SelectField
                  label="Budget Range"
                  options={[
                    "$10k - $25k",
                    "$25k - $50k",
                    "$50k - $100k",
                    "$100k+",
                  ]}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Tell us about your project
                </label>
                <textarea
                  rows="4"
                  placeholder="What are you looking to build? What is your timeline?"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send
                  size={20}
                  className="ml-3 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-xs text-gray-400 text-center">
                By sending this form, you agree to our Privacy Policy. We
                respect your inbox.
              </p>
            </form>
          </div>

          {/* Right: Contact Info & Value Prop (Span 5) */}
          <div className="lg:col-span-5 bg-gray-900 text-white p-10 lg:p-20 relative overflow-hidden flex flex-col justify-between">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="relative z-10">
              {/* Removed inline font-family override */}
              <h3 className="text-3xl font-black mb-10 tracking-tight text-white">
                Contact Information
              </h3>

              <div className="space-y-8 mb-16">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mr-5">
                    <Mail size={24} className="text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Sales & Inquiries
                    </p>
                    <a
                      href="mailto:hello@klarity.com"
                      className="text-xl font-bold hover:text-indigo-300 transition-colors"
                    >
                      hello@klarity.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mr-5">
                    <Phone size={24} className="text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Phone (India)
                    </p>
                    <a
                      href="tel:+911234567890"
                      className="text-xl font-bold hover:text-indigo-300 transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mr-5">
                    <MessageSquare size={24} className="text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Support
                    </p>
                    <a
                      href="mailto:support@klarity.com"
                      className="text-xl font-bold hover:text-indigo-300 transition-colors"
                    >
                      support@klarity.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Coffee size={20} className="mr-2 text-yellow-400" />
                  Why Klarity?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300 font-medium">
                    <CheckCircle size={16} className="text-green-400 mr-3" />{" "}
                    Top 1% Indian Talent
                  </li>
                  <li className="flex items-center text-gray-300 font-medium">
                    <CheckCircle size={16} className="text-green-400 mr-3" />{" "}
                    Enterprise-Grade Security
                  </li>
                  <li className="flex items-center text-gray-300 font-medium">
                    <CheckCircle size={16} className="text-green-400 mr-3" />{" "}
                    Your Choice Tech Stack
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LocationsSection = () => (
  <section className="py-32 bg-gray-50">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <SectionHeading
        title="Our Headquarters"
        subtitle="Strategically located in the heart of Nashik, empowering local talent to build global solutions."
        centered
      />

      <div className="max-w-3xl mx-auto mt-16">
        {/* Nashik Office (HQ) */}
        <div className="group p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">
          <div className="w-20 h-20 bg-rose-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
            <MapPin size={40} />
          </div>
          <div className="flex-grow">
            {/* Removed inline font-family override */}
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Nashik, India
            </h3>
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-6">
              Global Headquarters
            </span>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8">
              Level 4, IT Park,
              <br />
              Pathardi Phata, Nashik
              <br />
              Maharashtra 422010
            </p>
            <a
              href="#"
              className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 text-lg transition-colors"
            >
              View on Map <ArrowRight size={20} className="ml-2" />
            </a>
          </div>

          {/* Decorative Map Graphic Placeholder */}
          <div className="hidden md:block w-48 h-48 rounded-full bg-gray-50 border-4 border-white shadow-inner">
            <Globe size={100} className="text-gray-200 w-full h-full p-8" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactUsPage = () => {
  return (
    <div className="antialiased bg-white text-gray-900">
      <GlobalStyles />
      <HeroHeader />
      <ContactFormSection />
      <LocationsSection />
    </div>
  );
};

export default ContactUsPage;
