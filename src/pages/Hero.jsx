import React from "react";
import {
  Code,
  Smartphone,
  Zap,
  ShieldCheck,
  Globe,
  BarChart,
  Settings,
  Brain,
  Users,
  Stethoscope,
  Plane,
  Landmark,
  ShoppingCart,
  Factory,
  GraduationCap,
  Truck,
  Building2,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Star,
} from "lucide-react";

// --- Custom CSS for Advanced Animations & Fonts ---
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

// --- Homepage Sections ---

const Hero = () => (
  <section className="relative bg-white pt-32 pb-40 overflow-hidden">
    {/* Background Effects - Optimized for Light Theme */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-100/60 rounded-full blur-[100px] mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-100/60 rounded-full blur-[100px] mix-blend-multiply"></div>
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-slate-50/80 rounded-full blur-[80px] mix-blend-multiply"></div>
    </div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 text-center">
      {/* Badge */}
      <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-extrabold mb-10 shadow-sm animate-float tracking-wide">
        <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600 mr-3 shadow-[0_0_10px_rgba(79,70,229,0.4)]"></span>
        PIONEERING DIGITAL EXCELLENCE
      </div>

      {/* Headline */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-[1.05] mb-10 tracking-tight">
        Embrace{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600">
          Innovation.
        </span>
        <br />
        Define the{" "}
        <span className="relative inline-block">
          Future.
          <svg
            className="absolute w-full h-3 -bottom-1 left-0 text-rose-500 opacity-80"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q 50 10 100 5"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed font-medium tracking-normal">
        We engineer enterprise-grade digital solutions. From bespoke software to
        AI-driven architectures, we empower global brands to scale with clarity.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl shadow-slate-900/20">
          <div className="absolute inset-0 animate-shimmer"></div>
          <span className="relative flex items-center">
            Start Your Project{" "}
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </span>
        </button>
        <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white border border-slate-200 text-slate-900 font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-lg">
          <a href="/ourwork"> View Our Portfolio</a>
        </button>
      </div>
    </div>
  </section>
);

const PainPoints = () => {
  const points = [
    {
      icon: Zap,
      title: "Lightning Speed",
      question: "Is your platform optimized for sub-second latency?",
    },
    {
      icon: Smartphone,
      title: "Adaptive UI",
      question: "Does your interface fluidly adapt to any viewport?",
    },
    {
      icon: ShieldCheck,
      title: "Ironclad Security",
      question: "Is your infrastructure resilient against modern threats?",
    },
    {
      icon: Code,
      title: "Clean Architecture",
      question: "Is your codebase scalable and debt-free?",
    },
  ];

  return (
    <section className="relative z-20 -mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-6">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="glass-card-light p-8 rounded-[2rem] transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-900/10 mb-6 group-hover:scale-110 transition-transform">
                <p.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {p.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="py-32 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
        <div className="lg:w-5/12">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-extrabold tracking-[0.2em] text-indigo-600 uppercase bg-indigo-50 rounded-lg">
            Proven Excellence
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            The Numbers Behind <br />
            Our Success.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
            We don't just promise results; we engineer them. Our track record
            speaks to a relentless pursuit of perfection in every line of code.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden relative shadow-sm"
                >
                  <div
                    className={`absolute inset-0 bg-indigo-${i * 100 + 100}/20`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="text-sm font-bold text-slate-900">
              <span className="block text-indigo-600 text-lg font-extrabold">
                500+
              </span>
              Enterprise Partners
            </div>
          </div>
        </div>
        <div className="lg:w-7/12 grid grid-cols-2 gap-6">
          {[
            {
              num: "589+",
              label: "Digital Platforms",
              sub: "Launched Globally",
            },
            {
              num: "129+",
              label: "Mobile Applications",
              sub: "Top App Store Rankings",
            },
            { num: "98%", label: "Client Retention", sub: "Year over Year" },
            { num: "50+", label: "Industry Awards", sub: "For Design & Code" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="text-5xl font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors tracking-tighter">
                {stat.num}
              </div>
              <div className="text-base font-bold text-slate-800 uppercase tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 font-semibold">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-32 bg-slate-950 relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <span className="text-amber-400 font-extrabold tracking-[0.2em] uppercase text-xs">
          Holistic Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-8 leading-tight">
          Topnotch Solutions By Klarity.
        </h2>
        <p className="text-xl text-slate-400 font-medium">
          We merge aesthetic mastery with engineering rigor. Our suite of
          services is designed to cover every aspect of your digital evolution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Custom Software",
            icon: Code,
            desc: "Bespoke architectural solutions tailored to complex business logic.",
          },
          {
            title: "Mobile Ecosystems",
            icon: Smartphone,
            desc: "Native and cross-platform applications engineered for performance.",
          },
          {
            title: "Web Experience",
            icon: Globe,
            desc: "Immersive web platforms that drive engagement and conversion.",
          },
          {
            title: "Digital Growth",
            icon: BarChart,
            desc: "Data-driven strategies to amplify your market presence.",
          },
          {
            title: "SEO & Visibility",
            icon: Zap,
            desc: "Technical SEO optimization for dominant search rankings.",
          },
          {
            title: "Intelligent Automation",
            icon: Settings,
            desc: "Streamlining workflows with smart, automated systems.",
          },
          {
            title: "AI & Machine Learning",
            icon: Brain,
            desc: "Predictive modeling and generative AI integration.",
          },
          {
            title: "Corporate Training",
            icon: Users,
            desc: "Empowering your internal teams with cutting-edge skills.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="glass-card-dark bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-indigo-500/30"
          >
            <div className="w-14 h-14 bg-indigo-950 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-lg">
              <service.icon size={26} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors tracking-tight">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-5/12 self-center">
          <div className="w-16 h-1.5 bg-indigo-600 mb-8 rounded-full"></div>
          <h2 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Why Global Leaders Choose{" "}
            <span className="text-indigo-600">Klarity.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
            We don't operate as a vendor; we operate as a strategic partner. Our
            dedicated squads integrate seamlessly with your culture, bringing
            diverse expertise and a results-oriented mindset.
          </p>
          <ul className="space-y-5 mb-10">
            {[
              "Top 1% Vetted Tech Talent",
              "Timezone Aligned Agile Squads",
              "Transparent & Predictable Delivery",
              "Post-Launch Dedicated Support",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center text-slate-800 font-bold text-lg tracking-tight"
              >
                <CheckCircle2
                  className="text-green-500 mr-4 fill-green-50"
                  size={26}
                  strokeWidth={3}
                />
                {item}
              </li>
            ))}
          </ul>
          <button className="px-10 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-indigo-600 transition-colors shadow-xl tracking-wide">
            Explore Our Culture
          </button>
        </div>

        <div className="lg:w-7/12 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Decades of Mastery",
              desc: "A legacy of successful project delivery across highly regulated domains.",
            },
            {
              title: "Elite Engineering",
              desc: "Passionate, skilled professionals who view code as a craft, not just a job.",
            },
            {
              title: "Client Obsession",
              desc: "Your KPIs are our KPIs. We work backwards from your business goals.",
            },
            {
              title: "Value Driven",
              desc: "Premium enterprise quality at a competitive, transparent price point.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-10 border border-slate-100 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors shadow-sm">
                <Star
                  className="text-slate-400 group-hover:text-white"
                  size={20}
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section className="py-32 bg-slate-50 border-t border-slate-200">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
          Sectors We Empower
        </h2>
        <p className="text-slate-500 text-lg font-medium">
          Delivering high-impact solutions across complex industries.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          { name: "Healthcare", icon: Stethoscope },
          { name: "Travel", icon: Plane },
          { name: "Finance", icon: Landmark },
          { name: "E-commerce", icon: ShoppingCart },
          { name: "Manufacturing", icon: Factory },
          { name: "Education", icon: GraduationCap },
          { name: "Government", icon: Building2 },
          { name: "Retail", icon: ShoppingCart },
          { name: "Logistics", icon: Truck },
        ].map((sector, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-indigo-200 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <sector.icon
              size={40}
              className="text-slate-300 group-hover:text-indigo-600 mb-4 transition-colors relative z-10"
              strokeWidth={1.5}
            />
            <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 text-center px-4 relative z-10 tracking-tight">
              {sector.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 relative bg-indigo-950 overflow-hidden">
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    ></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950/50"></div>

    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <div className="inline-block mb-6 p-4 bg-white/5 backdrop-blur rounded-2xl border border-white/10 shadow-2xl">
        <Trophy className="text-amber-400 w-8 h-8" strokeWidth={2} />
      </div>
      <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
        Ready to Architect <br />
        the Future?
      </h2>
      <p className="text-xl text-indigo-200 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
        Partner with a team that values precision, speed, and long-term
        scalability. Let's build something extraordinary together.
      </p>

      <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-12 border border-white/10 shadow-2xl max-w-3xl mx-auto transform transition-transform hover:scale-[1.02]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2 font-extrabold">
              Direct Line
            </p>
            <p className="text-3xl font-bold text-white tracking-tight">
              +91 85303 88815
            </p>
          </div>
          <div className="text-left md:border-l border-white/10 md:pl-12">
            <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2 font-extrabold">
              Email Inquiry
            </p>
            <p className="text-3xl font-bold text-white tracking-tight">
              info@klarity.com
            </p>
          </div>
        </div>
        <div className="mt-12">
          <button className="w-full md:w-auto px-12 py-5 bg-white text-indigo-950 font-black text-lg rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:bg-indigo-50 transition-all hover:scale-105 tracking-wide">
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Home Component ---

const Home = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white selection:bg-indigo-500 selection:text-white">
      <GlobalStyles />
      <Hero />
      <PainPoints />
      <Stats />
      <About />
      <WhyUs />
      <Industries />
      <CTA />
    </div>
  );
};

export default Home;
