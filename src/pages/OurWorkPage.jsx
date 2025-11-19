import React, { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Code,
  Smartphone,
  Layout,
  Cpu,
  Zap,
  CheckCircle,
  Trophy,
  Users,
  Rocket,
  Lock,
  Shield,
  EyeOff,
  Landmark,
  Stethoscope,
  Sprout,
  ShoppingCart,
  Truck,
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

    h1, h2, h3, h4, h5, h6, button, input, textarea, select, p, span, div, label {
      font-family: var(--font-jakarta);
      letter-spacing: -0.03em;
    }
  `}</style>
);

// --- Components ---

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""} relative z-10`}>
    <h2
      className={`text-4xl md:text-6xl font-black tracking-tighter mb-6 ${
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

// --- Sections ---

const PortfolioHero = () => (
  <section className="pt-32 pb-20 bg-white relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute right-0 top-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 transform origin-top-right -z-10"></div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center space-x-3 bg-rose-50 border border-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
            </span>
            Enterprise Grade Security
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-8 tracking-tighter">
            We build technology. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">
              We keep secrets.
            </span>
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-medium">
            Our clients trust us with their most valuable intellectual property.
            That's why you won't find screenshots of their proprietary code on
            our website.
          </p>

          <div className="flex gap-8 text-left">
            <div>
              <p className="text-4xl font-black text-gray-900">10+</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                Private Projects
              </p>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900">100%</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                NDA Compliance
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          {/* Abstract Safe/Lock Concept Image */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-700 bg-gray-900 flex items-center justify-center h-[500px]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="text-center p-10 relative z-10">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
                <Lock size={64} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Confidential Portfolio
              </h3>
              <p className="text-gray-400">Access Restricted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProtectedWorkSection = () => (
  <section className="py-24 bg-gray-50 border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 text-rose-500 shadow-lg shadow-rose-500/10">
        <EyeOff size={40} />
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
        Our Portfolio is Strictly Confidential.
      </h2>
      <p className="text-xl text-gray-500 leading-relaxed mb-10">
        We build proprietary technology for startups and enterprises. To protect
        our clients' competitive advantage, we do not display project details or
        code snippets on public domains.
      </p>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl shadow-indigo-900/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-rose-500"></div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Want to see our capabilities?
        </h3>
        <p className="text-gray-600 mb-8 text-lg">
          We can walk you through relevant anonymized case studies and technical
          architectures on a private, secure call.
        </p>
        <button className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition-colors group">
          Request Private Demo
          <ArrowRight
            size={20}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </button>
        <p className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-wider">
          <Lock size={12} className="inline mr-1 mb-0.5" />
          Verification Required
        </p>
      </div>
    </div>
  </section>
);

const IndustriesSection = () => (
  <section className="py-32 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <SectionHeading
        title="Industries We Power"
        subtitle="While we can't name the clients, we can tell you where we've made an impact."
        centered
      />

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Landmark,
            title: "FinTech",
            desc: "We have built secure, RBI-compliant dashboards for personal finance, loan origination systems, and real-time payment processing gateways.",
            tech: ["Node.js", "PostgreSQL", "Blockchain"],
          },
          {
            icon: Stethoscope,
            title: "HealthTech",
            desc: "From telemedicine apps connecting rural patients to doctors, to HIPPA-compliant record management systems for multi-specialty hospitals.",
            tech: ["React Native", "WebRTC", "AWS"],
          },
          {
            icon: Sprout,
            title: "AgriTech",
            desc: "Empowering farmers with IoT-based soil monitoring dashboards and direct-to-consumer marketplace applications.",
            tech: ["Flutter", "IoT / MQTT", "Firebase"],
          },
          {
            icon: ShoppingCart,
            title: "E-Commerce",
            desc: "Building high-scale inventory management systems and custom storefronts with AR try-on capabilities for fashion brands.",
            tech: ["Next.js", "Shopify API", "Three.js"],
          },
          {
            icon: Truck,
            title: "Logistics",
            desc: "Route optimization algorithms for delivery fleets and real-time tracking systems for supply chain visibility.",
            tech: ["Google Maps API", "Python", "Socket.io"],
          },
          {
            icon: Code,
            title: "SaaS",
            desc: "Multi-tenant cloud platforms with complex role-based access control, automated billing, and white-label capabilities.",
            tech: ["Microservices", "Docker", "React"],
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-indigo-600">
              <item.icon size={28} />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm font-medium">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-bold uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyFreshersSection = () => (
  <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Why trust <span className="text-rose-500">Freshers</span> with your
            dream project?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Experience matters, but so does passion. We bridge the gap by
            pairing our high-energy fresh talent with strict mentorship and code
            reviews.
          </p>

          <div className="space-y-8">
            {[
              {
                title: "Modern Tech Stack Natives",
                desc: "We didn't learn to code on legacy systems. We grew up with React, Flutter, and AI. We build for tomorrow, not yesterday.",
                icon: Zap,
              },
              {
                title: "Hunger for Perfection",
                desc: "This isn't just a job for us; it's our portfolio. We go the extra mile to make sure every pixel is perfect because our reputation depends on it.",
                icon: Rocket,
              },
              {
                title: "Cost-Effective Innovation",
                desc: "Get enterprise-grade quality without the bloated agency fees. You pay for talent and results, not administrative overhead.",
                icon: CheckCircle,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0 mr-6 border border-gray-700">
                  <item.icon size={24} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-600 to-rose-600 p-1 rounded-[2.5rem] transform rotate-2 hover:rotate-0 transition-all duration-500">
            <div className="bg-gray-900 rounded-[2.4rem] p-10">
              <Code size={48} className="text-white mb-8" />
              <blockquote className="text-2xl font-medium leading-relaxed mb-8">
                "I was skeptical about hiring a team of freshers initially. But
                their dedication blew me away. They worked weekends, suggested
                features I hadn't thought of, and delivered a bug-free app."
              </blockquote>
              <div>
                <p className="font-bold text-lg">Satisfied Client</p>
                <p className="text-rose-400 text-sm font-bold uppercase tracking-wide">
                  AgriTech Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
        Ready to be our next <br />
        <span className="text-indigo-600">Success Story?</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        We are looking for Project #11. Let's build something amazing together.
      </p>
      <button className="inline-flex items-center justify-center px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-600/20 hover:-translate-y-1 transition-all duration-300">
        Start Your Project
        <ArrowRight size={20} className="ml-2" />
      </button>
    </div>
  </section>
);

const OurWorkPage = () => {
  return (
    <div className="antialiased bg-white text-gray-900">
      <GlobalStyles />
      <PortfolioHero />
      <ProtectedWorkSection />
      <IndustriesSection />
      <WhyFreshersSection />
      <CTABanner />
    </div>
  );
};

export default OurWorkPage;
