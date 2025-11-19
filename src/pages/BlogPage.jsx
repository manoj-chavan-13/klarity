import React, { useState } from "react";
import {
  Search,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
  TrendingUp,
  Zap,
  Code,
} from "lucide-react";

// --- Reusable UI Components (Consistent with your Design System) ---

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => (
  <div className={`mb-16 ${centered ? "text-center" : ""} relative z-10`}>
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
    "inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-[15px] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 tracking-tight";
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
      <ArrowRight size={18} className="ml-2 opacity-80" />
    </button>
  );
};

const Badge = ({ text, color = "indigo" }) => {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
    green: "bg-green-50 text-green-700 border-green-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${
        colors[color] || colors.indigo
      }`}
    >
      {text}
    </span>
  );
};

// --- Blog Data ---

const FEATURED_POST = {
  id: 1,
  title:
    "The Future of Scaling: Why Indian Tech Talent is Winning Global Contracts",
  excerpt:
    "As remote work becomes the norm, India's engineering talent pool is evolving from 'outsourcing' to 'core innovation'. Here is how Klarity is bridging the gap.",
  author: "Sonali Adhav",
  role: "CEO",
  date: "Oct 24, 2025",
  readTime: "8 min read",
  category: "Industry Insights",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
};

const BLOG_POSTS = [
  {
    id: 2,
    title: "React Native vs Flutter: The 2025 Performance Benchmark",
    excerpt:
      "We ran extensive tests on both frameworks for enterprise-scale apps. The results might surprise you.",
    date: "Oct 20, 2025",
    readTime: "6 min read",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true, // Large card
  },
  {
    id: 3,
    title: "How We Onboard 50+ Freshers in a Single Month",
    excerpt:
      "Our 'Klarity Academy' playbook for turning raw potential into production-ready code.",
    date: "Oct 18, 2025",
    readTime: "5 min read",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Microservices Architecture: When to Monolith Instead",
    excerpt:
      "Don't over-engineer too early. A guide to pragmatic architecture decisions.",
    date: "Oct 15, 2025",
    readTime: "10 min read",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Diwali at Klarity: Celebrating Code & Culture",
    excerpt: "A look back at our biggest office celebration of the year.",
    date: "Nov 01, 2024",
    readTime: "3 min read",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 6,
    title: "Optimizing AWS Costs for Startups",
    excerpt:
      "Practical tips to cut your cloud bill by 30% without sacrificing performance.",
    date: "Sep 28, 2025",
    readTime: "7 min read",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

// --- Components ---

const HeroSection = () => (
  <section className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-6xl lg:text-[7rem] font-black text-gray-900 leading-none tracking-tighter mb-6">
          Insights{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">
            &
          </span>{" "}
          Ideas
        </h1>
        <p className="text-2xl text-gray-500 max-w-2xl mx-auto font-medium">
          Thoughts on technology, leadership, and scaling from the team at
          Klarity.
        </p>
      </div>

      {/* Featured Post Card */}
      <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/10 bg-white border border-gray-100 hover:shadow-indigo-900/20 transition-all duration-500 cursor-pointer">
        <div className="grid lg:grid-cols-2 h-full">
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
            <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img
              src={FEATURED_POST.image}
              alt={FEATURED_POST.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-8 left-8 z-20">
              <Badge text="Featured Story" color="rose" />
            </div>
          </div>

          <div className="p-10 lg:p-20 flex flex-col justify-center bg-white relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-bl-[100%] -z-10 opacity-50"></div>

            <div className="flex items-center gap-4 text-sm font-bold text-gray-400 mb-6">
              <span className="flex items-center">
                <Calendar size={16} className="mr-2 text-indigo-500" />{" "}
                {FEATURED_POST.date}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2 text-indigo-500" />{" "}
                {FEATURED_POST.readTime}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tighter group-hover:text-indigo-900 transition-colors">
              {FEATURED_POST.title}
            </h2>

            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              {FEATURED_POST.excerpt}
            </p>

            <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg">
                  SA
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    {FEATURED_POST.author}
                  </p>
                  <p className="text-xs font-bold text-gray-400 uppercase">
                    {FEATURED_POST.role}
                  </p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Engineering",
    "Culture",
    "DevOps",
    "Case Studies",
  ];

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className={`group relative flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-500 ${
                post.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  post.featured ? "h-80" : "h-64"
                }`}
              >
                <div className="absolute top-4 left-4 z-10">
                  <Badge
                    text={post.category}
                    color={post.category === "Culture" ? "rose" : "indigo"}
                  />
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3
                  className={`font-black text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors ${
                    post.featured ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {post.title}
                </h3>

                <p className="text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center text-indigo-600 font-bold text-sm group/link">
                  Read Full Story{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 transform group-hover/link:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>
    </section>
  );
};

const NewsletterSection = () => (
  <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]"></div>

    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
        <Zap size={32} className="text-yellow-400" fill="currentColor" />
      </div>

      <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
        Stay ahead of the curve.
      </h2>

      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
        Join 15,000+ CTOs and engineers receiving our weekly digest on Indian
        tech talent, scaling strategies, and code architecture.
      </p>

      <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
        <div className="flex-grow relative">
          <Mail
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full h-14 pl-12 pr-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all"
          />
        </div>
        <Button className="h-14 px-8 bg-white text-gray-900 hover:bg-rose-500 hover:text-white">
          Subscribe
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-6 font-bold uppercase tracking-wide">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  </section>
);

const Mail = ({ className, size }) => (
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
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
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

const BlogPage = () => {
  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      <GlobalStyles />
      <HeroSection />
      <BlogGrid />
      <NewsletterSection />
    </div>
  );
};

export default BlogPage;
