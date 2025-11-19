import React, { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  Code,
  Layout,
  Terminal,
  Rocket,
  Star,
} from "lucide-react";

// --- Reusable UI Components ---

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => (
  <div className={`mb-20 ${centered ? "text-center" : ""} relative z-10`}>
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
        className={`text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed ${
          light ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle =
    "inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-[16px] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 tracking-tight";
  const variants = {
    primary:
      "bg-gray-900  shadow-xl shadow-gray-900/10 hover:bg-rose-600 hover:shadow-rose-600/20",
    outline:
      "bg-white border-2 border-gray-200 text-gray-900 hover:border-indigo-600 hover:text-indigo-600",
    light:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-indigo-900",
    text: "bg-transparent text-indigo-600 hover:text-indigo-800 px-0 py-0 hover:translate-y-0",
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
      {variant !== "text" && <ArrowRight size={20} className="ml-2" />}
    </button>
  );
};

const HeroSection = ({ data }) => (
  <section className="relative pt-32 pb-40 bg-white overflow-hidden">
    <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-50/80 to-purple-50/80 rounded-full blur-3xl -z-10 opacity-70"></div>
    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-rose-50/80 rounded-full blur-3xl -z-10 opacity-70"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] -z-10"></div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center space-x-3 bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-full mb-10 group hover:border-indigo-200 transition-colors">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-indigo-600 transition-colors">
              {data.hero.badge || "Available for New Projects"}
            </span>
          </div>
          <h1 className="text-6xl lg:text-[5.5rem] font-black text-gray-900 leading-[1.05] mb-8 tracking-tighter">
            {data.hero.titlePrefix} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 animate-gradient-x">
              {data.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-2xl text-gray-500 mb-12 leading-relaxed max-w-2xl font-medium">
            {data.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <Button className="h-16  text-white  px-10 text-lg">
              {data.hero.cta}
            </Button>
            <Button variant="outline" className="h-16 px-10 text-lg">
              View Case Studies
            </Button>
          </div>
          <div className="flex items-center gap-12 border-t border-gray-100 pt-10">
            <div>
              <p className="text-4xl font-black text-gray-900 tracking-tight">
                500+
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">
                Clients
              </p>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900 tracking-tight">
                98%
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">
                Retention
              </p>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900 tracking-tight">
                2Wks
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">
                Avg Launch
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/20 border-8 border-white bg-white z-10">
            <img
              src={data.hero.image}
              alt="Service Visual"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Status
                    </p>
                    <p className="font-bold text-gray-900">Klarity Optimized</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide">
                  Active
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BentoServicesSection = ({ services }) => (
  <section className="py-32 bg-gray-50 relative">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <SectionHeading
        title="Our Capabilities"
        subtitle="We architect scalable, future-proof digital ecosystems customized to your business goals."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isLarge = index === 0 || index === 3;
          return (
            <div
              key={index}
              className={`group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 overflow-hidden ${
                isLarge ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm font-bold text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const TechStackSection = () => (
  <section className="py-32 bg-gray-900 relative overflow-hidden text-white">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800 text-gray-300 text-xs font-bold uppercase tracking-widest mb-8">
            Agnostic Tech Stack
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            We speak your <br />
            <span className="text-indigo-400">language.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium max-w-lg">
            We don't force a stack on you. Whether it's legacy migration or a
            greenfield build, we deploy the exact technologies your
            infrastructure demands.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "Python",
              "AWS",
              "Flutter",
              "Go",
              "Kubernetes",
              "TensorFlow",
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white hover:text-gray-900 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4 bg-[#161b22] border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-xs text-gray-500 font-mono">config.json</div>
          </div>
          <div className="p-8 font-mono text-sm md:text-base leading-loose">
            <div className="text-gray-400">
              <span className="text-[#ff7b72]">const</span>{" "}
              <span className="text-[#d2a8ff]">klarityConfig</span>{" "}
              <span className="text-[#79c0ff]">=</span>{" "}
              <span className="text-[#79c0ff]">{`{`}</span>
            </div>
            <div className="pl-6">
              <span className="text-[#7ee787]">"clientFocus"</span>:{" "}
              <span className="text-[#a5d6ff]">true</span>,
            </div>
            <div className="pl-6">
              <span className="text-[#7ee787]">"techStack"</span>:{" "}
              <span className="text-[#a5d6ff]">"User_Choice"</span>,
            </div>
            <div className="pl-6">
              <span className="text-[#7ee787]">"security"</span>:{" "}
              <span className="text-[#a5d6ff]">"Enterprise_Grade"</span>,
            </div>
            <div className="pl-6 text-[#79c0ff]">{`}`}</div>
            <div className="mt-4 text-gray-500 italic">// Ready to deploy</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TabbedProcessSection = ({ steps }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          title="The Klarity Workflow"
          subtitle="Precision engineering meets agile flexibility."
          centered
        />
        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  activeTab === index
                    ? "bg-indigo-50 border-indigo-600 shadow-lg shadow-indigo-100"
                    : "bg-white border-transparent hover:bg-gray-50"
                }`}
              >
                <span
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black mr-5 transition-colors ${
                    activeTab === index
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                  }`}
                >
                  0{index + 1}
                </span>
                <div>
                  <h4
                    className={`text-lg font-bold mb-1 ${
                      activeTab === index
                        ? "text-indigo-900"
                        : "text-gray-500 group-hover:text-gray-900"
                    }`}
                  >
                    {step.title.split(".")[1] || step.title}
                  </h4>
                  <p
                    className={`text-sm font-medium ${
                      activeTab === index ? "text-indigo-600" : "text-gray-400"
                    }`}
                  >
                    Step {index + 1}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className={`ml-auto transition-opacity ${
                    activeTab === index
                      ? "text-indigo-600 opacity-100"
                      : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-12 shadow-2xl shadow-gray-100 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-[100%] -z-10"></div>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                    {steps[activeTab].title}
                  </h3>
                  <p className="text-xl text-gray-500 leading-relaxed mb-8 font-medium">
                    {steps[activeTab].description}
                  </p>
                  <ul className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 font-bold"
                      >
                        <CheckCircle
                          size={20}
                          className="text-rose-500 mr-4 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          {activeTab === 0
                            ? "Deep-dive technical discovery"
                            : activeTab === 1
                            ? "Bi-weekly sprints with transparency"
                            : "Automated CI/CD pipelines"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full md:w-64 h-64 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                  {activeTab === 0 && (
                    <Layout size={64} className="text-indigo-300" />
                  )}
                  {activeTab === 1 && (
                    <Terminal size={64} className="text-indigo-300" />
                  )}
                  {activeTab === 2 && (
                    <Rocket size={64} className="text-indigo-300" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
      <div className="inline-flex items-center justify-center p-2 bg-yellow-50 rounded-full mb-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={20}
            className="text-yellow-400 fill-current mx-0.5"
          />
        ))}
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-12 tracking-tighter">
        "Klarity built a scalable platform, not just code. Their integrity is
        unmatched."
      </h2>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Client"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-lg font-black text-gray-900">Marcus Chen</div>
        <div className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
          CTO, FintechGlobal
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Common Questions" centered />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "bg-white border-indigo-100 shadow-xl shadow-indigo-900/5"
                  : "bg-white border-transparent hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex items-center justify-between w-full p-8 text-left"
              >
                <span
                  className={`text-xl font-bold ${
                    openIndex === index ? "text-indigo-900" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-50 text-gray-400"
                  }`}
                >
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </button>
              <div
                className={`px-8 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 pb-8 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-lg text-gray-500 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAStrip = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gray-900"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-gray-900 opacity-90"></div>
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
        Ready to build <br /> the next big thing?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Button
          variant="primary"
          className="bg-white text-gray-900 hover:bg-rose-600 hover:text-white h-16 px-12 text-lg shadow-2xl"
        >
          Get Your Free Quote
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-gray-700 text-gray-800 hover:bg-white hover:text-gray-900 h-16 px-12 text-lg"
        >
          Talk to an Architect
        </Button>
      </div>
    </div>
  </section>
);

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

    :root {
      --font-jakarta: 'Plus Jakarta Sans', sans-serif;
    }

    body {
      font-family: var(--font-jakarta);
    }

    h1, h2, h3, h4, h5, h6, button {
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
    .glass-card-dark {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .glass-card-light {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
    }
  `}</style>
);

// Default export for the Layout Component to be used in pages
export default function ServicePageLayout({ data }) {
  return (
    <div className="font-sans  antialiased bg-white text-gray-900">
      <GlobalStyles />
      <HeroSection data={data} />
      <BentoServicesSection services={data.subServices} />
      <TechStackSection />
      <TabbedProcessSection steps={data.process} />
      <TestimonialSection />
      <FAQSection faqs={data.faqs} />
      <CTAStrip />
    </div>
  );
}
