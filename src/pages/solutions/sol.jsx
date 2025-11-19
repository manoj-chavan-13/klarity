import React from "react";
import {
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Smartphone,
  Monitor,
  Layers,
  Code,
  ShieldCheck,
  Users,
  Zap,
  Globe,
  Cpu,
  Figma,
  Layout,
  Server,
  Database,
  Cloud,
  PenTool,
  GitBranch,
  RefreshCcw,
  Lock,
  Terminal,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

// --- ICON MAPPING ---
// This maps the string values from your JSON to actual React Components
const ICON_MAP = {
  Smartphone,
  Monitor,
  Layers,
  Code,
  ShieldCheck,
  Users,
  Zap,
  Globe,
  Cpu,
  Figma,
  Layout,
  Server,
  Database,
  Cloud,
  PenTool,
  GitBranch,
  RefreshCcw,
  Lock,
  Terminal,
  Briefcase,
  CheckCircle2,
};

// --- REUSABLE UI COMPONENTS ---

const SectionHeading = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
      {title}
      <span className="text-rose-600">.</span>
    </h2>
    {subtitle && (
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 transform hover:-translate-y-0.5";
  const variants = {
    primary:
      " shadow-lg shadow-gray-200 hover:bg-rose-600 hover:shadow-rose-500/30",
    outline:
      "bg-white border-2 border-gray-200 text-gray-700 hover:border-indigo-600 hover:text-indigo-600",
    text: "bg-transparent text-indigo-600 hover:text-indigo-800 px-0 py-0 hover:translate-y-0",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
      {variant !== "text" && (
        <ArrowRight size={18} className="ml-2 opacity-80" />
      )}
    </button>
  );
};

// --- PAGE SECTIONS ---

const HeroSection = ({ data }) => (
  <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} className="fill-current" />
            <span>Top 1% Tech Talent</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            {data.title}
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gray-900 text-white">{data.cta}</Button>
            <Button variant="outline">View Case Studies</Button>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm font-medium text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p>Trusted by 500+ innovative companies</p>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/20 bg-white p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Visual Placeholder for Service */}
            <div className="w-full aspect-[4/3] bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-rose-500/10"></div>
              <div className="text-indigo-200/50">
                <Layers size={120} />
              </div>
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white px-6 py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-gray-900">System Online</span>
              </div>
            </div>
          </div>
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const SubServicesSection = ({ services }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Services We Provide"
        subtitle="From concept to deployment, we cover the entire lifecycle."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          // Look up the icon from the map using the string name from JSON
          const Icon = ICON_MAP[service.icon] || Layers;

          return (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const ValuePropSection = ({ reasons }) => (
  <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            title={<span className="text-white">Why Hire Klarity?</span>}
            subtitle={
              <span className="text-gray-400">
                When it comes to securing top talent, you have choices. Here is
                why we are the best decision for your growth.
              </span>
            }
          />
          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center mt-1">
                  <CheckCircle size={14} className="text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-black ">
            <Button className="bg-white text-black hover:text-white hover:bg-indigo-600 hover:shadow-indigo-500/50">
              Schedule a Consultation
            </Button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          {/* Abstract Stats Visual */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-rose-600/20 rounded-2xl border border-white/10 backdrop-blur-sm p-8 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl font-black text-rose-500 mb-2">1%</div>
                <div className="text-sm font-bold text-gray-300">
                  Top Talent Acceptance Rate
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl font-black text-indigo-500 mb-2">
                  2 Wks
                </div>
                <div className="text-sm font-bold text-gray-300">
                  Avg. Time to Scale
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 col-span-2">
                <div className="text-4xl font-black text-white mb-2">100+</div>
                <div className="text-sm font-bold text-gray-300">
                  Technologies Supported
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = ({ steps }) => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Process"
        subtitle="Simple, seamless, and streamlined for maximum efficiency."
        centered
      />
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-white border-4 border-indigo-50 shadow-lg flex items-center justify-center mb-6 relative z-10">
              <span className="text-3xl font-black text-indigo-600">
                {index + 1}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" centered />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-indigo-600 bg-indigo-50/30"
                  : "border-gray-200 hover:border-indigo-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span
                  className={`font-bold text-lg ${
                    openIndex === index ? "text-indigo-900" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-indigo-600" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAStrip = () => (
  <section className="py-20 bg-gradient-to-r from-rose-600 to-indigo-700 text-white text-center">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-black mb-6">
        Ready to build your next big thing?
      </h2>
      <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
        Join 500+ companies who rely on Klarity for high-integrity, scalable
        software solutions.
      </p>
      <Button
        variant="primary"
        className="bg-white text-indigo-900 hover:bg-gray-900 hover:text-white"
      >
        Get Your Quote Now
      </Button>
    </div>
  </section>
);

// --- MAIN TEMPLATE COMPONENT ---

const Solutions = ({ data }) => {
  if (!data) {
    return (
      <div className="py-20 text-center text-gray-500">
        Page Content Loading...
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 font-sans text-gray-900">
      <HeroSection data={data.hero} />
      <SubServicesSection services={data.subServices} />
      <ValuePropSection reasons={data.reasons} />
      <ProcessSection steps={data.process} />
      <FAQSection faqs={data.faqs} />
      <CTAStrip />
    </div>
  );
};

export default Solutions;
