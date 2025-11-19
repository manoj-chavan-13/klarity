import React from "react";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Award,
  Heart,
  Target,
  Zap,
  Smile,
  Linkedin,
  Twitter,
  Trophy,
  Star,
  TrendingUp,
  Newspaper,
  MapPin,
  Calendar,
  Coffee,
} from "lucide-react";

// --- Reusable UI Components ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

    :root {
      --font-jakarta: 'Plus Jakarta Sans', sans-serif;
    }

    body {
      font-family: var(--font-jakarta);
    }

    h1, h2, h3, h4, h5, h6, button, p, div, span {
      font-family: var(--font-jakarta);
      letter-spacing: -0.03em;
    }

  `}</style>
);

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => (
  <div className={`mb-20 ${centered ? "text-center" : ""} relative z-10`}>
    {/* Removed inline font-family override */}
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
        className={`text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed ${
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
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
      <ArrowRight size={20} className="ml-2" />
    </button>
  );
};

// --- Sections ---

const HeroSection = () => (
  <section className="relative pt-32 pb-24 bg-white overflow-hidden">
    <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-50/80 to-purple-50/80 rounded-full blur-3xl -z-10 opacity-70"></div>

    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center space-x-3 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-8">
            About Klarity
          </div>
          {/* Removed inline font-family override */}
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-8 tracking-tighter">
            Born in India. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">
              Building Globally.
            </span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl font-medium">
            From humble beginnings in Pune & Nashik to partnering with Fortune
            500s. We combine world-class Indian engineering talent with global
            innovation standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button className="h-16 px-10 text-lg">Our Story</Button>
          </div>
        </div>

        <div className="relative lg:h-[600px] flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Abstract composition representing "Scale" */}
            <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform rotate-3 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                className="w-full h-full object-cover opacity-90"
                alt="Team"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs z-20 animate-bounce-slow">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">Top 1%</p>
                  <p className="text-xs font-bold text-gray-400 uppercase">
                    Indian Talent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OriginStorySection = () => (
  <section className="py-32 bg-gray-50 relative">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-10">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Founding Moment"
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative Blob */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl -z-10 opacity-50"></div>
        </div>

        <div>
          {/* Removed inline font-family override */}
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
            From Nashik to the World.
          </h2>
          <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
            <p>
              Founded in 2024 with a singular mission: to prove that{" "}
              <span className="text-indigo-600 font-bold">fresh talent</span>{" "}
              can drive global innovation. We started in a small office in
              Nashik, believing that passion and mentorship matter more than
              just years on a resume.
            </p>
            <p>
              We are proud to be a{" "}
              <span className="text-rose-600 font-bold">Fresher-Friendly</span>{" "}
              company. We invest heavily in training academies, corporate
              workshops, and mentorship programs to turn raw potential into
              world-class engineering skill.
            </p>
            <p>
              Today, Klarity stands as a beacon of Indian ingenuity, bridging
              the gap between ambitious local talent and international
              enterprise needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatsStrip = () => (
  <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="text-center mb-16">
        {/* Removed inline font-family override */}
        <h3 className="text-3xl font-bold mb-4">Our Impact So Far...</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
        <div className="px-6 py-4">
          {/* Removed inline font-family override */}
          <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            1,200<span className="text-rose-500">+</span>
          </div>
          <p className="text-xl text-gray-400 font-medium">
            Projects Delivered
          </p>
        </div>
        <div className="px-6 py-4">
          {/* Removed inline font-family override */}
          <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            500<span className="text-indigo-500">+</span>
          </div>
          <p className="text-xl text-gray-400 font-medium">Happy Clients</p>
        </div>
        <div className="px-6 py-4">
          {/* Removed inline font-family override */}
          <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            4,000<span className="text-green-500">+</span>
          </div>
          <p className="text-xl text-gray-400 font-medium">Freshers Trained</p>
        </div>
      </div>
    </div>
  </section>
);

const ClientsSection = () => (
  <section className="py-32 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
      <SectionHeading
        title="Who we work with"
        subtitle="From Indian startups to Global Fortune 500 giants, we power the technology behind the brands you love."
        centered
      />

      <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Placeholder Logos - Replace with SVGs */}
        {["TATA", "Reliance", "Google", "Adobe", "Infosys", "Flipkart"].map(
          (brand, i) => (
            <div
              key={i}
              className="h-12 flex items-center justify-center px-8 border border-gray-100 rounded-xl bg-gray-50 font-black text-2xl text-gray-400 select-none"
            >
              {brand}
            </div>
          )
        )}
      </div>

      {/* Testimonial Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 text-left">
        {[
          {
            quote:
              "Their fresher team brought an energy and modern perspective we didn't know we needed. Exceptional work.",
            author: "Rajesh Kumar",
            role: "CTO, TechIndia",
          },
          {
            quote:
              "Klarity proves that Indian talent is second to none. They delivered our complex SaaS platform ahead of schedule.",
            author: "Sarah Jenkins",
            role: "Director of Strategy, US-Fintech",
          },
          {
            quote:
              "I was impressed by their training programs. The developers were up to speed on our stack in days.",
            author: "Amit Patel",
            role: "Founder, StartupHub",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-10 bg-gray-50 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 border border-gray-100"
          >
            <div className="mb-6 text-indigo-600">
              <QuoteIcon size={40} />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
              "{item.quote}"
            </p>
            <div>
              <p className="font-bold text-gray-900">{item.author}</p>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-bold">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TrophyCabinet = () => (
  <section className="py-32 bg-gray-900 text-white relative">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            title="Our Trophy Cabinet"
            subtitle="Recognized for excellence in training and delivery."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Best Employer for Freshers 2024",
              "Top IT Exporter - Maharashtra",
              "Most Innovative Training Program",
              "India's Fastest Growing Tech Co.",
            ].map((award, i) => (
              <div
                key={i}
                className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700"
              >
                <Trophy
                  size={24}
                  className="text-yellow-500 mr-4 flex-shrink-0"
                />
                <span className="font-bold text-sm">{award}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-600 to-rose-600 p-1 rounded-[2.5rem]">
            <div className="bg-gray-900 rounded-[2.3rem] p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Award size={48} className="text-white" />
              </div>
              {/* Removed inline font-family override */}
              <h3 className="text-3xl font-black mb-4">91%</h3>
              <p className="text-gray-400 mb-8 font-medium">
                Employee Retention Rate
              </p>
              <div className="h-px w-full bg-gray-800 mb-8"></div>
              {/* Removed inline font-family override */}
              <h3 className="text-3xl font-black mb-4">3+ Years</h3>
              <p className="text-gray-400 font-medium">
                Average Client Relationship
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CultureSection = () => (
  <section className="py-32 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <SectionHeading
        title="The Desi Culture"
        subtitle="We work hard, we party harder. From Diwali to Hackathons, our office is always buzzing."
        centered
      />

      <div className="grid md:grid-cols-4 gap-6 mt-16">
        {[
          {
            title: "Fresher Friendly",
            icon: Coffee,
            color: "bg-rose-100 text-rose-600",
          },
          {
            title: "Mentorship First",
            icon: Users,
            color: "bg-blue-100 text-blue-600",
          },
          {
            title: "Festival Celebrations",
            icon: Star,
            color: "bg-indigo-100 text-indigo-600",
          },
          {
            title: "Continuous Learning",
            icon: Zap,
            color: "bg-yellow-100 text-yellow-600",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-gray-50 text-center hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100"
          >
            <div
              className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}
            >
              <item.icon size={32} />
            </div>
            {/* Removed inline font-family override */}
            <h4 className="text-lg font-black text-gray-900">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GlassdoorSection = () => (
  <section className="py-32 bg-indigo-50 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="text-center mb-16">
        <div className="inline-block p-3 bg-green-500 text-white rounded-xl mb-6">
          <Star size={32} fill="currentColor" />
        </div>
        {/* Removed inline font-family override */}
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Driven by Trust in Talent.
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          What our team says about starting their career here.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[2rem] shadow-lg">
          <div className="flex mb-4 text-green-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-lg font-medium text-gray-700 mb-6">
            "Best place for freshers! The training provided by seniors is
            amazing. I learned React and Node.js in just 3 months."
          </p>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">
            Junior Developer, Pune
          </p>
        </div>
        <div className="bg-white p-10 rounded-[2rem] shadow-lg">
          <div className="flex mb-4 text-green-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-lg font-medium text-gray-700 mb-6">
            "The company treats you like family. Great work-life balance and so
            many fun events like Cricket tournaments and Diwali parties."
          </p>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">
            QA Engineer, Nashik
          </p>
        </div>
      </div>
    </div>
  </section>
);

const TimelineSection = () => {
  const events = [
    {
      year: "2024",
      title: "Klarity Born in Nashik",
      desc: "Started with a small team of 5 passionate developers.",
    },
    {
      year: "2024",
      title: "Expansion to Pune",
      desc: "Opened our second development center to tap into metro talent.",
    },
    {
      year: "2025",
      title: "Global Clients",
      desc: "Signed our first major US and European enterprise contracts.",
    },
    {
      year: "2025",
      title: "1000+ Freshers Hired",
      desc: "Launched our dedicated 'Klarity Academy' for training graduates.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
        <SectionHeading title="How our vision became reality" centered />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100"></div>

          <div className="space-y-16">
            {events.map((event, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:w-1/2"></div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                </div>
                <div
                  className={`flex-1 md:w-1/2 pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <span className="inline-block px-4 py-1 bg-indigo-50 text-indigo-700 font-black rounded-full mb-3">
                    {event.year}
                  </span>
                  {/* Removed inline font-family override */}
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialImpactSection = () => (
  <section className="py-24 bg-rose-600 text-white text-center">
    <div className="max-w-4xl mx-auto px-6">
      <Heart
        size={48}
        className="mx-auto mb-8 text-white"
        fill="currentColor"
      />
      {/* Removed inline font-family override */}
      <h2 className="text-4xl md:text-5xl font-black mb-6">
        Empowering Indian Youth.
      </h2>
      <p className="text-xl text-white/90 mb-12 leading-relaxed">
        We believe talent exists in every corner of India. Our rural outreach
        programs provide coding education and career opportunities to students
        from Tier-2 and Tier-3 cities.
      </p>
      <Button
        variant="light"
        className="bg-white text-rose-600 hover:bg-gray-100"
      >
        See Our Impact
      </Button>
    </div>
  </section>
);

const CTAStrip = () => (
  <section className="py-32 relative overflow-hidden bg-gray-900">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-gray-900 opacity-90"></div>
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      {/* Removed inline font-family override */}
      <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
        Join the Indian <br /> Tech Revolution.
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Button
          variant="primary"
          className="bg-white text-gray-900 hover:bg-rose-600 hover:text-white h-16 px-12 text-lg shadow-2xl"
        >
          Talk to Sales
        </Button>
        <Button
          variant="outline"
          className="bg-transparent border-gray-700 text-white hover:bg-white hover:text-gray-900 h-16 px-12 text-lg"
        >
          Apply as Fresher
        </Button>
      </div>
    </div>
  </section>
);

// --- Helper Icon ---
const QuoteIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
  </svg>
);

const AboutUsPage = () => {
  return (
    <div className=" antialiased bg-white text-gray-900">
      <GlobalStyles />
      <HeroSection />
      <OriginStorySection />
      <StatsStrip />
      <ClientsSection />
      <TrophyCabinet />
      <CultureSection />
      <GlassdoorSection />
      <SocialImpactSection />
      <TimelineSection />
      <CTAStrip />
    </div>
  );
};

export default AboutUsPage;
