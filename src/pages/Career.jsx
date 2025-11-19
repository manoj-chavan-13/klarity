import React, { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Users,
  Zap,
  Globe,
  Cpu,
  Smile,
  Coffee,
  TrendingUp,
  Award,
  Clock,
  MapPin,
} from "lucide-react";

// --- Reusable UI Components (Matched to ServicePageLayout) ---

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
      "bg-gray-900 text-white shadow-xl shadow-gray-900/10 hover:bg-rose-600 hover:shadow-rose-600/20",
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

// --- Career Specific Sections ---

const HeroSection = () => (
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
              We are Hiring
            </span>
          </div>
          <h1 className="text-6xl lg:text-[5.5rem] font-black text-gray-900 leading-[1.05] mb-8 tracking-tighter">
            Join the Top 1% <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 animate-gradient-x">
              Engineering Talent
            </span>
          </h1>
          <p className="text-2xl text-gray-500 mb-12 leading-relaxed max-w-2xl font-medium">
            Work on challenging projects, use the latest tech stacks, and grow
            your career with a team that values integrity and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <Button className="h-16 px-10 text-lg">View Open Roles</Button>
            <Button variant="outline" className="h-16 px-10 text-lg">
              Our Culture
            </Button>
          </div>
          <div className="flex items-center gap-12 border-t border-gray-100 pt-10">
            <div>
              <p className="text-4xl font-black text-gray-900 tracking-tight">
                100%
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">
                Remote
              </p>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900 tracking-tight">
                4.9
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">
                Glassdoor
              </p>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900 tracking-tight">
                15+
              </p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">
                Countries
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/20 border-8 border-white bg-white z-10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Klarity Team"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Team Growth
                    </p>
                    <p className="font-bold text-gray-900">
                      Expanding Globally
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide">
                  Hiring
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="py-32 bg-gray-50 relative">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <SectionHeading
        title="Why Join Klarity?"
        subtitle="We invest in our people. Enjoy perks designed to help you thrive professionally and personally."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Remote-First Culture",
            desc: "Work from anywhere in the world. We focus on output, not hours.",
            icon: Globe,
            color: "bg-blue-500",
          },
          {
            title: "Top-Tier Compensation",
            desc: "Salaries pegged to the US market, regardless of your location.",
            icon: TrendingUp,
            color: "bg-green-500",
          },
          {
            title: "Tech Freedom",
            desc: "Choose your own hardware and tech stack preferences.",
            icon: Cpu,
            color: "bg-purple-500",
          },
          {
            title: "Learning Budget",
            desc: "Annual stipend for courses, conferences, and certifications.",
            icon: BookOpen,
            color: "bg-yellow-500",
          },
          {
            title: "Health & Wellness",
            desc: "Comprehensive insurance and wellness allowances.",
            icon: Smile,
            color: "bg-rose-500",
          },
          {
            title: "Career Growth",
            desc: "Clear promotion paths and mentorship from senior architects.",
            icon: Award,
            color: "bg-indigo-500",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 relative z-10">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight relative z-10">
              {item.title}
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed font-medium relative z-10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const JobBoardSection = () => (
  <section className="py-32 bg-white" id="open-roles">
    <div className="max-w-[1200px] mx-auto px-6">
      <SectionHeading
        title="Open Positions"
        subtitle="Find the role that fits your skills and passion. We are always looking for exceptional talent."
        centered
      />

      <div className="space-y-4">
        {[
          {
            role: "Senior React Native Developer",
            type: "Full-time",
            loc: "Remote (Global)",
            dept: "Engineering",
          },
          {
            role: "Backend Architect (Node.js/Go)",
            type: "Full-time",
            loc: "Remote (Americas)",
            dept: "Engineering",
          },
          {
            role: "Lead UX/UI Designer",
            type: "Full-time",
            loc: "Remote (Europe)",
            dept: "Design",
          },
          {
            role: "DevOps Engineer (AWS)",
            type: "Contract",
            loc: "Remote (Global)",
            dept: "Operations",
          },
          {
            role: "QA Automation Engineer",
            type: "Full-time",
            loc: "Remote (Global)",
            dept: "Quality",
          },
        ].map((job, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col gap-2 text-center md:text-left mb-6 md:mb-0">
              <h4 className="text-2xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
                {job.role}
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-bold text-gray-500">
                <span className="flex items-center">
                  <Briefcase size={16} className="mr-2" />
                  {job.dept}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {job.type}
                </span>
                <span className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {job.loc}
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gray-50 text-gray-900 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                Apply Now <ArrowRight size={18} className="ml-2" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-500 font-medium mb-6">
          Don't see a perfect fit? We are always hiring.
        </p>
        <Button variant="outline">Send Open Application</Button>
      </div>
    </div>
  </section>
);

const HiringProcessSection = () => (
  <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
            The Hiring <br />
            <span className="text-indigo-400">Process.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium max-w-lg">
            We value your time. Our process is streamlined, transparent, and
            designed to identify the top 1% of talent efficiently.
          </p>
          <Button variant="light">Read Hiring Guide</Button>
        </div>

        <div className="space-y-8">
          {[
            {
              step: "01",
              title: "Application",
              desc: "Submit your CV and portfolio. We review every application within 48 hours.",
            },
            {
              step: "02",
              title: "Technical Screening",
              desc: "A brief online assessment to evaluate your core technical skills.",
            },
            {
              step: "03",
              title: "Deep Dive Interview",
              desc: "Meet with a Senior Architect to discuss complex problems and your experience.",
            },
            {
              step: "04",
              title: "Culture Fit & Offer",
              desc: "Meet the team. If it's a match, we make a competitive offer immediately.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-4xl font-black text-gray-700 mr-8 opacity-50">
                {item.step}
              </span>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Icon placeholder for Learning Budget
const BookOpen = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
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

const CareerPage = () => {
  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      <GlobalStyles />
      <HeroSection />
      <BenefitsSection />
      <HiringProcessSection />
      <JobBoardSection />
    </div>
  );
};

export default CareerPage;
