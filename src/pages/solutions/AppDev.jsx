import React, { useState } from "react";
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
            {data.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            {data.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gray-900 text-white">{data.hero.cta}</Button>
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
          const Icon = service.icon;
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

const ServicePage = ({ data }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <HeroSection data={data} />
      <SubServicesSection services={data.subServices} />
      <ValuePropSection reasons={data.reasons} />
      <ProcessSection steps={data.process} />
      <FAQSection faqs={data.faqs} />
      <CTAStrip />
    </div>
  );
};

// --- DATA DEFINITIONS FOR ALL 6 SERVICES ---

const APP_DEV_DATA = {
  hero: {
    title: "App Development Solutions",
    subtitle:
      "Turn your idea into a functional, user-friendly application. Work with the top 1% of tech talent to create native iOS, Android, and Cross-platform solutions.",
    cta: "Start Your App",
  },
  subServices: [
    {
      title: "Custom Mobile Apps",
      description:
        "Turn your idea into a functional, user-friendly Android or iOS application. Get your app published in the Google Play Store and Apple App Store.",
      icon: Smartphone,
      features: [
        "Native iOS & Android",
        "Scalable Architecture",
        "High Performance",
      ],
    },
    {
      title: "Cross-Platform Dev",
      description:
        "Speed up development using a single codebase. We use tools like React Native and Flutter to build apps that work smoothly on all devices.",
      icon: Layers,
      features: ["React Native / Flutter", "Cost Effective", "Consistent UI"],
    },
    {
      title: "UI/UX Design",
      description:
        "Your apps should be user-friendly and engaging. Our designers conduct user research to create responsive, navigable, and accessible designs.",
      icon: Figma,
      features: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      title: "Integration Services",
      description:
        "Add new features easily by integrating third-party APIs like Payment Gateways, Maps, and Authentication services.",
      icon: Code,
      features: ["API Integration", "Cloud Sync", "Third-party Tools"],
    },
    {
      title: "QA and Testing",
      description:
        "Rigorous quality assurance testing using manual and automation tools to ensure your app is bug-free, secure, and performant.",
      icon: ShieldCheck,
      features: ["Automated Testing", "Security Audits", "Performance Tuning"],
    },
    {
      title: "Migration & Updates",
      description:
        "Keep your app updated with the latest OS versions. We help migrate legacy apps to modern frameworks like Kotlin or Swift.",
      icon: Zap,
      features: ["Legacy Migration", "OS Updates", "Feature Enhancement"],
    },
  ],
  reasons: [
    {
      title: "Access Specialized Expertise",
      description:
        "It can be difficult to find the tech talent you need locally. We give you access to senior specialists with niche skill sets in weeks, not months.",
    },
    {
      title: "Accelerate Development",
      description:
        "Experienced outsourced teams have established workflows in place to accelerate your app development, meaning faster time to market.",
    },
    {
      title: "Remain Compliant and Secure",
      description:
        "We are knowledgeable about best security practices. Adherence to these measures ensures your app meets industry-specific regulatory requirements.",
    },
    {
      title: "Retain Oversight",
      description:
        "You retain control. You'll receive regular progress updates and transparency, no matter what engagement model you choose.",
    },
    {
      title: "Achieve Scalability",
      description:
        "Mobile development rarely follows a linear path. With our external teams, you can scale your engagement up or down as needed.",
    },
  ],
  process: [
    {
      title: "Discuss Requirements",
      description:
        "We start by discussing your goals, budget, and timeline to choose the best engagement model for your business.",
    },
    {
      title: "Build Your Team",
      description:
        "We select the best-fit developers to build your app autonomously or work side-by-side with your internal team.",
    },
    {
      title: "Get to Work",
      description:
        "Once assembled, we execute immediately. You retain full oversight while we deliver high-quality code sprints.",
    },
  ],
  faqs: [
    {
      question: "How does outsourcing app development work?",
      answer:
        "Outsourcing involves partnering with our professional team. We offer staff augmentation, dedicated teams, or full project outsourcing depending on your level of desired involvement.",
    },
    {
      question: "Can I hire developers on a full-time basis?",
      answer:
        "Yes! With our Dedicated Teams model, you can hire developers who work exclusively on your project full-time, just like remote employees.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely. Our Maintenance & Support services ensure your application remains updated, secure, and bug-free long after the initial launch.",
    },
    {
      question: "What technologies do you support?",
      answer:
        "We support 'User Choice Technology'. Whether you prefer React Native, Flutter, Swift, Kotlin, or Python, we have experts available in your preferred stack.",
    },
  ],
};

const WEB_DEV_DATA = {
  hero: {
    title: "Web Development Solutions",
    subtitle:
      "Responsive websites & complex web applications. From simple corporate sites to massive SaaS platforms, we build the back-bone of your digital business.",
    cta: "Build Your Website",
  },
  subServices: [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end development using MERN, MEAN, or LAMP stacks. We handle the database, server, and client-side.",
      icon: Code,
      features: [
        "Front-end & Back-end",
        "Database Management",
        "API Development",
      ],
    },
    {
      title: "E-commerce Platforms",
      description:
        "Scalable online stores with secure payment processing, inventory management, and intuitive checkout flows.",
      icon: Globe,
      features: [
        "Shopify / WooCommerce",
        "Custom Payment Gateways",
        "Inventory Systems",
      ],
    },
    {
      title: "PWA Development",
      description:
        "Progressive Web Apps that offer a native-app-like experience directly in the web browser with offline capabilities.",
      icon: Smartphone,
      features: ["Offline Access", "Push Notifications", "Fast Load Times"],
    },
    {
      title: "CMS Solutions",
      description:
        "Custom WordPress, Drupal, or headless CMS implementations that give your team full control over content.",
      icon: Layout,
      features: ["Headless CMS", "WordPress Customization", "Content Strategy"],
    },
    {
      title: "Web Security",
      description:
        "Implementation of SSL, firewalls, and best practices (OWASP) to protect your data and your users.",
      icon: ShieldCheck,
      features: [
        "SSL/TLS Implementation",
        "DDoS Protection",
        "Penetration Testing",
      ],
    },
    {
      title: "API Development",
      description:
        "Robust RESTful and GraphQL APIs to connect your web application with mobile apps and third-party services.",
      icon: Server,
      features: ["REST & GraphQL", "Microservices", "Secure Endpoints"],
    },
  ],
  reasons: [
    {
      title: "Speed to Market",
      description:
        "Our agile methodology ensures rapid iteration and faster deployment without compromising quality.",
    },
    {
      title: "Scalable Architecture",
      description:
        "We build systems designed to grow with your business, handling millions of users effortlessly.",
    },
    {
      title: "SEO Optimized",
      description:
        "Technical SEO is baked into our code structure, ensuring your site ranks well from day one.",
    },
    {
      title: "Responsive Design",
      description:
        "We ensure your site looks perfect on every device, from massive desktops to small mobile screens.",
    },
    {
      title: "Transparent Process",
      description:
        "You have full visibility into our code repositories and project management tools throughout the build.",
    },
  ],
  process: [
    {
      title: "Architecture Design",
      description:
        "We map out the database schema, server structure, and frontend flow to ensure scalability.",
    },
    {
      title: "Agile Development",
      description:
        "Sprints, daily standups, and continuous delivery to keep progress visible and adaptable.",
    },
    {
      title: "Deployment & Scale",
      description:
        "We handle the launch on AWS/Azure and set up monitoring for immediate post-launch optimization.",
    },
  ],
  faqs: [
    {
      question: "Which tech stack do you recommend?",
      answer:
        "It depends on your specific needs. We work with React, Vue, Angular, Node, Python, and more. We'll recommend the best tool for the job.",
    },
    {
      question: "Is my website mobile-friendly?",
      answer:
        "Yes, we follow a mobile-first approach ensuring your site looks perfect and functions flawlessly on all devices.",
    },
    {
      question: "Do you provide hosting?",
      answer:
        "We can set up and manage cloud hosting environments on AWS, Google Cloud, or Azure, or work with your existing provider.",
    },
    {
      question: "Can you update my existing website?",
      answer:
        "Yes, we specialize in modernizing legacy websites and refactoring code for better performance.",
    },
  ],
};

const UX_UI_DATA = {
  hero: {
    title: "UX/UI Design Services",
    subtitle:
      "Design That Delights. Interfaces That Convert. We conduct deep user research to build intuitive, navigable, and accessible designs that drive business results.",
    cta: "Start Designing",
  },
  subServices: [
    {
      title: "User Research",
      description:
        "Surveys, focus groups, and competitive analysis to understand your users deeply before a single pixel is drawn.",
      icon: Users,
      features: ["User Personas", "Journey Mapping", "Competitive Analysis"],
    },
    {
      title: "Wireframing",
      description:
        "Low and high-fidelity prototypes to visualize flow and functionality before coding begins, saving time and money.",
      icon: Layout,
      features: [
        "Interactive Prototypes",
        "Information Architecture",
        "Flow Charts",
      ],
    },
    {
      title: "Visual Design",
      description:
        "Pixel-perfect UI design systems that align with your brand identity and evoke the right emotional response.",
      icon: PenTool,
      features: ["Design Systems", "Brand Integration", "Iconography"],
    },
    {
      title: "Usability Testing",
      description:
        "Real-user testing sessions to identify friction points and optimize the experience for maximum conversion.",
      icon: CheckCircle2,
      features: ["A/B Testing", "Heatmaps", "User Feedback Loops"],
    },
    {
      title: "Accessibility",
      description:
        "Ensuring your product meets WCAG guidelines so it is usable by everyone, regardless of ability.",
      icon: ShieldCheck,
      features: [
        "WCAG Compliance",
        "Screen Reader Optimization",
        "Color Contrast Checks",
      ],
    },
    {
      title: "Design Systems",
      description:
        "Creating reusable component libraries to ensure consistency across all your digital products and speed up dev.",
      icon: Figma,
      features: ["Component Libraries", "Style Guides", "Documentation"],
    },
  ],
  reasons: [
    {
      title: "Data-Driven Design",
      description:
        "We don't just guess. We use data and user feedback to inform every design decision we make.",
    },
    {
      title: "Collaborative Process",
      description:
        "We work closely with your stakeholders to ensure the design meets both user needs and business goals.",
    },
    {
      title: "Developer Handoff",
      description:
        "We provide detailed specs, assets, and CSS/code snippets to ensure the final product matches the design exactly.",
    },
    {
      title: "Conversion Focused",
      description:
        "Our designs aren't just pretty; they are engineered to guide users toward your key conversion actions.",
    },
    {
      title: "Brand Consistency",
      description:
        "We ensure your digital presence perfectly reflects your established brand voice and visual identity.",
    },
  ],
  process: [
    {
      title: "Discovery",
      description:
        "Understanding user personas, pain points, and business objectives through workshops and research.",
    },
    {
      title: "Ideation",
      description:
        "Sketching, wireframing, and exploring different design directions to find the best solution.",
    },
    {
      title: "Refinement",
      description:
        "Polishing the UI, testing with real users, and finalizing the design system for handoff.",
    },
  ],
  faqs: [
    {
      question: "What tools do you use?",
      answer:
        "We primarily use Figma, Adobe XD, and Sketch for design and prototyping, ensuring industry-standard compatibility.",
    },
    {
      question: "Do you do branding?",
      answer:
        "Yes, we can help define your logo, color palette, typography, and brand voice as part of the UI process.",
    },
    {
      question: "How long does a design project take?",
      answer:
        "It varies, but typically a full app design takes 4-8 weeks depending on complexity and feedback cycles.",
    },
    {
      question: "Do I own the designs?",
      answer:
        "Yes, once the project is complete and paid for, you own 100% of the source files and intellectual property.",
    },
  ],
};

const CUSTOM_SOFT_DATA = {
  hero: {
    title: "Custom Software Solutions",
    subtitle:
      "Bespoke software tailored to your specific workflow. Off-the-shelf solutions have limits. We build custom software that fits your business like a glove.",
    cta: "Build Custom Software",
  },
  subServices: [
    {
      title: "Enterprise ERP",
      description:
        "Centralized systems to manage day-to-day business activities like accounting, procurement, and project management.",
      icon: Monitor,
      features: ["Centralized Data", "Automated Reporting", "Custom Modules"],
    },
    {
      title: "CRM Development",
      description:
        "Custom tools to manage customer interactions, sales pipelines, and support tickets exactly how your sales team works.",
      icon: Users,
      features: ["Sales Automation", "Customer Insights", "Ticket Management"],
    },
    {
      title: "SaaS Product Dev",
      description:
        "Building multi-tenant cloud software products from MVP to scale, designed for subscription-based business models.",
      icon: Cloud,
      features: [
        "Multi-tenancy",
        "Subscription Billing",
        "Scalable Infrastructure",
      ],
    },
    {
      title: "Legacy Modernization",
      description:
        "Updating old, slow systems with modern tech stacks without losing data or disrupting business operations.",
      icon: RefreshCcw,
      features: ["Code Refactoring", "Cloud Migration", "UI Modernization"],
    },
    {
      title: "Workflow Automation",
      description:
        "Automating repetitive tasks to save time and reduce human error using custom scripts and bots.",
      icon: Zap,
      features: ["Process Mapping", "Bot Development", "Integration Scripts"],
    },
    {
      title: "API Integration",
      description:
        "Connecting your disparate software tools into a unified ecosystem where data flows freely between apps.",
      icon: GitBranch,
      features: ["Unified Dashboards", "Data Sync", "Third-party Connectors"],
    },
  ],
  reasons: [
    {
      title: "Domain Expertise",
      description:
        "We have deep experience in Finance, Healthcare, Logistics, and Retail. We understand your industry jargon and needs.",
    },
    {
      title: "Security First",
      description:
        "We build with security in mind from day one, ensuring your proprietary data and trade secrets are safe.",
    },
    {
      title: "Ownership",
      description:
        "You own 100% of the code and intellectual property we create. No licensing fees, ever.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Custom software gives you features your competitors don't have, allowing you to operate more efficiently.",
    },
    {
      title: "Scalability",
      description:
        "Our solutions are built to grow. As your company expands, your software expands with it.",
    },
  ],
  process: [
    {
      title: "Business Analysis",
      description:
        "We sit down with your team to map current workflows and identify bottlenecks.",
    },
    {
      title: "Solution Architecture",
      description:
        "Designing a custom system architecture that solves your specific problems efficiently.",
    },
    {
      title: "Development",
      description:
        "Building the software with regular demos and feedback loops to ensure it meets your needs.",
    },
  ],
  faqs: [
    {
      question: "Who owns the code?",
      answer:
        "You do. Once the project is complete and paid for, the IP is 100% yours.",
    },
    {
      question: "Can you integrate with our existing tools?",
      answer:
        "Yes, we specialize in integrating with Salesforce, SAP, HubSpot, QuickBooks, and virtually any tool with an API.",
    },
    {
      question: "How do you handle data migration?",
      answer:
        "We have dedicated specialists to safely extract, transform, and load (ETL) your data from old systems to the new one.",
    },
    {
      question: "Is custom software expensive?",
      answer:
        "Initial costs are higher than off-the-shelf, but the long-term ROI from efficiency gains and no licensing fees often makes it cheaper.",
    },
  ],
};

const MAINTENANCE_DATA = {
  hero: {
    title: "Maintenance & Support",
    subtitle:
      "24/7 monitoring, updates, and long-term care. Software isn't 'set it and forget it'. We provide the care your digital assets need.",
    cta: "Get Support",
  },
  subServices: [
    {
      title: "24/7 Monitoring",
      description:
        "Real-time tracking of server health, uptime, and performance metrics to catch issues before users do.",
      icon: Monitor,
      features: ["Uptime Checks", "Performance Alerts", "Server Health"],
    },
    {
      title: "Security Patches",
      description:
        "Regular updates to protect against new vulnerabilities and threats as they emerge.",
      icon: Lock,
      features: [
        "Vulnerability Scanning",
        "Patch Management",
        "Firewall Updates",
      ],
    },
    {
      title: "Bug Fixes",
      description:
        "Rapid resolution of any issues that arise in your production environment, guaranteed by SLAs.",
      icon: Terminal,
      features: ["SLA Guarantees", "Issue Tracking", "Root Cause Analysis"],
    },
    {
      title: "Performance Tuning",
      description:
        "Optimizing database queries and code to keep your app fast as your user base grows.",
      icon: Zap,
      features: [
        "Database Indexing",
        "Caching Strategies",
        "Code Optimization",
      ],
    },
    {
      title: "Feature Enhancements",
      description:
        "Adding new small features and improvements based on user feedback without full development cycles.",
      icon: Code,
      features: [
        "Agile Improvements",
        "User Feedback Implementation",
        "Minor Upgrades",
      ],
    },
    {
      title: "Backup & Recovery",
      description:
        "Regular backups and disaster recovery planning to prevent data loss in any scenario.",
      icon: Database,
      features: [
        "Automated Backups",
        "Disaster Recovery Plan",
        "Data Restoration",
      ],
    },
  ],
  reasons: [
    {
      title: "Proactive Approach",
      description:
        "We don't just wait for things to break. We fix potential issues before your users even notice them.",
    },
    {
      title: "Dedicated Team",
      description:
        "You get a team that knows your codebase inside and out, not a random support agent.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Weekly reports on health status, updates performed, and future recommendations.",
    },
    {
      title: "Cost Effective",
      description:
        "Preventing downtime is far cheaper than fixing a catastrophic failure. Our plans are predictable.",
    },
    {
      title: "Peace of Mind",
      description:
        "Sleep easy knowing experts are watching your infrastructure 24/7/365.",
    },
  ],
  process: [
    {
      title: "Audit",
      description:
        "We assess your current system health, security status, and backup protocols.",
    },
    {
      title: "Onboarding",
      description:
        "Setting up monitoring tools, access protocols, and communication channels.",
    },
    {
      title: "Management",
      description:
        "Continuous monitoring, updating, and reporting. We handle the headaches.",
    },
  ],
  faqs: [
    {
      question: "Do you support code you didn't write?",
      answer:
        "Yes, we can take over maintenance for existing codebases after an initial audit to ensure code quality.",
    },
    {
      question: "What are your support hours?",
      answer:
        "We offer packages ranging from standard business hours to full 24/7/365 coverage for critical systems.",
    },
    {
      question: "How do we report issues?",
      answer:
        "You'll have access to a dedicated ticketing system and a direct line to your project manager.",
    },
    {
      question: "Is there a minimum contract?",
      answer:
        "We generally recommend 6-month terms to ensure we can provide meaningful stability improvements.",
    },
  ],
};

const TECH_CHOICE_DATA = {
  hero: {
    title: "Technology Choice",
    subtitle:
      "We work with YOUR preferred tech stack. React, Node, Python, .NET? We have experts in almost every modern language and framework.",
    cta: "View Tech Stack",
  },
  subServices: [
    {
      title: "Front-End",
      description:
        "Creating stunning, responsive user interfaces using the modern web's most powerful frameworks.",
      icon: Layout,
      features: ["React / Next.js", "Angular", "Vue.js", "Tailwind CSS"],
    },
    {
      title: "Back-End",
      description:
        "Robust server-side logic using proven technologies that scale securely.",
      icon: Server,
      features: [
        "Node.js",
        "Python (Django/Flask)",
        ".NET / C#",
        "Java (Spring)",
      ],
    },
    {
      title: "Mobile",
      description:
        "Native and cross-platform mobile development for reach and performance.",
      icon: Smartphone,
      features: ["Swift (iOS)", "Kotlin (Android)", "React Native", "Flutter"],
    },
    {
      title: "Database",
      description:
        "Secure data storage solutions optimized for your specific data structure and volume.",
      icon: Database,
      features: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Infrastructure as code and cloud-native deployments for maximum uptime.",
      icon: Cloud,
      features: ["AWS / Azure / GCP", "Docker & Kubernetes", "Jenkins / CI/CD"],
    },
    {
      title: "Emerging Tech",
      description:
        "Cutting-edge solutions for forward-thinking business problems.",
      icon: Cpu,
      features: ["AI / ML (TensorFlow)", "Blockchain", "IoT"],
    },
  ],
  reasons: [
    {
      title: "No Vendor Lock-in",
      description:
        "We recommend what's best for YOU, not what's easiest for us. We believe in open standards.",
    },
    {
      title: "Future Proofing",
      description:
        "We use modern, widely-supported technologies to ensure your software remains viable for years.",
    },
    {
      title: "Expert Vetting",
      description:
        "Our developers are tested specifically on the technologies they claim to know. We verify expertise.",
    },
    {
      title: "Tech Agnostic Advice",
      description:
        "We can objectively compare stacks (e.g., React vs. Angular) to help you make the right decision.",
    },
    {
      title: "Full-Stack Capabilities",
      description:
        "We have the breadth to handle every layer of your application stack in-house.",
    },
  ],
  process: [
    {
      title: "Requirement Analysis",
      description:
        "We analyze your project needs, performance requirements, and team skills.",
    },
    {
      title: "Tech Selection",
      description:
        "We recommend the optimal stack or validate your existing choice against industry best practices.",
    },
    {
      title: "Execution",
      description:
        "We assemble a team of experts specialized in that specific stack to build your product.",
    },
  ],
  faqs: [
    {
      question: "Can you migrate us to a new stack?",
      answer:
        "Yes, we specialize in legacy modernization and re-platforming (e.g., moving from PHP to Node.js).",
    },
    {
      question: "Do you have AI experts?",
      answer:
        "Yes, we have a dedicated practice for Data Science and AI engineering using Python and TensorFlow.",
    },
    {
      question: "What if I don't know what tech to use?",
      answer:
        "Our solution architects will guide you to the best choice based on your budget, scalability needs, and goals.",
    },
    {
      question: "Do you support .NET?",
      answer:
        "Absolutely. We have a strong team of enterprise-grade .NET and C# developers.",
    },
  ],
};

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

// --- Main Component with Navigation ---

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("app-development");

  // Tabs Configuration
  const tabs = [
    { id: "app-development", label: "App Development", data: APP_DEV_DATA },
    { id: "web-development", label: "Web Development", data: WEB_DEV_DATA },
    { id: "ux-ui-design", label: "UX/UI Design", data: UX_UI_DATA },
    { id: "custom-software", label: "Custom Software", data: CUSTOM_SOFT_DATA },
    { id: "maintenance-support", label: "Maintenance", data: MAINTENANCE_DATA },
    {
      id: "technology-choice",
      label: "Technology Choice",
      data: TECH_CHOICE_DATA,
    },
  ];

  const activeData = tabs.find((t) => t.id === activeTab)?.data || APP_DEV_DATA;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <GlobalStyles />
      {/* Page Switcher Controller - Allows you to see each separate page */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 py-3 flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Page Content */}
      <ServicePage data={activeData} />
    </div>
  );
};

export default Solutions;
