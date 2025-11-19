import React, { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  Send,
  FileText,
  Cpu,
  Smartphone,
  Globe,
  Users,
  Clock,
  DollarSign,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  Code,
} from "lucide-react";

// --- Global Styles & Fonts ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

    :root {
      --font-jakarta: 'Plus Jakarta Sans', sans-serif;
    }

    body {
      font-family: var(--font-jakarta);
    }

    h1, h2, h3, h4, h5, h6, button, input, textarea, select, p, span, div, label {
      font-family: var(--font-jakarta);
      letter-spacing: -0.03em;
    }
    
    /* Custom Radio/Checkbox styling wrapper */
    .service-card-radio:checked + div {
      border-color: #4f46e5; /* Indigo 600 */
      background-color: #eef2ff; /* Indigo 50 */
      color: #3730a3; /* Indigo 800 */
    }
    .service-card-radio:checked + div .check-icon {
      opacity: 1;
      transform: scale(1);
    }
  `}</style>
);

// --- Reusable Components ---

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""} relative z-10`}>
    <h2
      className={`text-4xl md:text-5xl font-black tracking-tighter mb-6 ${
        light ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
      <span className="text-rose-600">.</span>
    </h2>
    {subtitle && (
      <p
        className={`text-lg max-w-2xl mx-auto font-medium leading-relaxed ${
          light ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const InputField = ({
  label,
  type = "text",
  placeholder,
  fullWidth = false,
}) => (
  <div className={`flex flex-col gap-2 ${fullWidth ? "col-span-2" : ""}`}>
    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium shadow-sm"
    />
  </div>
);

const SelectField = ({ label, options }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
      {label}
    </label>
    <div className="relative">
      <select className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium appearance-none shadow-sm">
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
        <ChevronDown size={16} />
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, name, value }) => (
  <label className="cursor-pointer relative group">
    <input
      type="radio"
      name={name}
      value={value}
      className="service-card-radio sr-only"
    />
    <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col items-center text-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
        <Icon size={24} />
      </div>
      <span className="font-bold text-gray-900">{title}</span>

      {/* Check Icon Indicator */}
      <div className="absolute top-4 right-4 check-icon opacity-0 transform scale-50 transition-all duration-300 text-indigo-600">
        <CheckCircle size={20} fill="currentColor" className="text-white" />
      </div>
    </div>
  </label>
);

// --- Sections ---

const QuoteHero = () => (
  <section className="pt-32 pb-20 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
      <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
        </span>
        Fast-Track Your Project
      </div>
      <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-6 tracking-tighter">
        Let's build something <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">
          extraordinary together.
        </span>
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
        Share your vision with us. We'll provide a comprehensive technical
        roadmap and cost estimation within 24 hours.
      </p>
    </div>
  </section>
);

const QuoteFormSection = () => (
  <section className="pb-32 bg-white relative">
    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-indigo-50/50 -z-10"></div>

    <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
      <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-indigo-900/5 border border-gray-200">
        <form className="space-y-12">
          {/* Step 1: Project Type */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm mr-4">
                1
              </span>
              What do you need help with?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <ServiceCard
                icon={Globe}
                title="Web App"
                name="service"
                value="web"
              />
              <ServiceCard
                icon={Smartphone}
                title="Mobile App"
                name="service"
                value="mobile"
              />
              <ServiceCard
                icon={Users}
                title="Staff Augmentation"
                name="service"
                value="staff"
              />
              <ServiceCard
                icon={Cpu}
                title="AI / ML"
                name="service"
                value="ai"
              />
              <ServiceCard
                icon={Code}
                title="Custom Software"
                name="service"
                value="custom"
              />
            </div>
          </div>

          <div className="h-px bg-gray-200 w-full"></div>

          {/* Step 2: Project Details */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm mr-4">
                2
              </span>
              Project Details
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <SelectField
                label="Estimated Budget (USD)"
                options={[
                  "$10k - $25k",
                  "$25k - $50k",
                  "$50k - $100k",
                  "$100k - $250k",
                  "$250k+",
                ]}
              />
              <SelectField
                label="Desired Timeline"
                options={[
                  "< 1 Month",
                  "1 - 3 Months",
                  "3 - 6 Months",
                  "6+ Months",
                  "Ongoing",
                ]}
              />
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Tell us about your goals
                </label>
                <textarea
                  rows="5"
                  placeholder="Describe your project, target audience, and any specific features you need..."
                  className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium resize-none shadow-sm"
                ></textarea>
              </div>

              {/* File Upload Mock */}
              <div className="md:col-span-2">
                <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-xl appearance-none cursor-pointer hover:border-indigo-400 focus:outline-none">
                  <span className="flex flex-col items-center space-y-2">
                    <FileText className="text-gray-400" size={30} />
                    <span className="font-medium text-gray-600">
                      Drop your RFP or Specs here to attach
                    </span>
                    <span className="text-xs text-gray-400 uppercase font-bold">
                      or click to browse
                    </span>
                  </span>
                  <input type="file" name="file_upload" className="hidden" />
                </label>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 w-full"></div>

          {/* Step 3: Contact Info */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm mr-4">
                3
              </span>
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <InputField label="Full Name" placeholder="Jane Doe" />
              <InputField
                label="Work Email"
                type="email"
                placeholder="jane@company.com"
              />
              <InputField label="Company Name" placeholder="Acme Inc." />
              <InputField
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full py-6 bg-gray-900 text-white rounded-2xl font-bold text-xl hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
            >
              Request Free Quote
              <Send
                size={22}
                className="ml-3 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <p className="text-center text-gray-500 text-sm mt-6 font-medium">
              <ShieldCheck size={16} className="inline mr-1 text-green-500" />
              Your data is protected by NDA. We never share your info.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const ProcessSection = () => {
  const steps = [
    {
      title: "Request Analysis",
      desc: "Our tech leads review your requirements to understand the scope and complexity.",
      icon: FileText,
    },
    {
      title: "Discovery Call",
      desc: "A 30-min session to align on goals, tech stack, and business objectives.",
      icon: Users,
    },
    {
      title: "Detailed Proposal",
      desc: "We deliver a breakdown of costs, timeline, and team structure within 24 hours.",
      icon: FileText,
    },
    {
      title: "Project Kickoff",
      desc: "Once approved, we onboard the team and set up communication channels immediately.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 bg-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            What happens next?
          </h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            We believe in transparency. Here is our standard engagement process.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector Line (Desktop only) */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-indigo-800 -z-10"></div>
              )}

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/50 border border-indigo-500">
                  <step.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "How do you calculate the project cost?",
      a: "We estimate based on the number of hours required for development, design, and QA. For staff augmentation, we have fixed monthly rates per developer level.",
    },
    {
      q: "Can you sign an NDA before I share details?",
      a: "Absolutely. We are happy to sign an NDA (Non-Disclosure Agreement) to ensure your intellectual property is safe from the very first conversation.",
    },
    {
      q: "What if I don't have technical specifications?",
      a: "No problem! Our 'Discovery Phase' service helps translate your business idea into technical requirements, wireframes, and a roadmap.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, we offer various maintenance packages including server monitoring, bug fixes, and feature updates to ensure your product runs smoothly.",
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Clarifying the common queries before you begin."
          centered
        />

        <div className="grid gap-6 mt-16">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                <HelpCircle
                  size={20}
                  className="text-indigo-600 mr-3 mt-1 flex-shrink-0"
                />
                {faq.q}
              </h4>
              <p className="text-gray-600 ml-8 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GetQuotePage = () => {
  return (
    <div className="antialiased bg-white text-gray-900">
      <GlobalStyles />
      <QuoteHero />
      <QuoteFormSection />
      <ProcessSection />
      <FAQSection />
    </div>
  );
};

export default GetQuotePage;
