import React from "react";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
  Check,
  MapPin,
} from "lucide-react";

// --- Configuration Data ---
const COMPANY_LINKS = [
  { name: "About Us", href: "#" },
  { name: "Our Leadership", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Referral Program", href: "#" },
  { name: "Diversity & Inclusion", href: "#" },
];

const SERVICE_LINKS = [
  { name: "Custom Software Development", href: "#" },
  { name: "Web & Mobile App Development", href: "#" },
  { name: "UX/UI Design Strategy", href: "#" },
  { name: "QA & Automated Testing", href: "#" },
  { name: "Staff Augmentation", href: "#" },
];

const RESOURCE_LINKS = [
  { name: "Case Studies", href: "#" },
  { name: "Tech Stack Index", href: "#" },
  { name: "Industry Insights", href: "#" },
  { name: "Blog", href: "#" },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

/**
 * Professional Split-Layout Footer
 * Left Side: Detailed Navigation & Branding
 * Right Side: Contact, Newsletter & Actions
 */
const Footer = () => {
  return (
    <footer className="w-full font-sans text-gray-600 border-t border-gray-100">
      <div className="flex flex-col lg:flex-row">
        {/* ================= LEFT SECTION: Navigation (White) ================= */}
        <div className="w-full lg:w-2/3 bg-white px-8 py-16 lg:p-20">
          {/* Header Row: Logo & Tagline */}
          <div className="mb-16">
            {/* Logo matched exactly to Navbar */}
            <a href="/" className="flex items-center group w-fit mb-6">
              {/* <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:rotate-3 transition-transform duration-300 shadow-indigo-200 shadow-lg">
                <span className="text-white font-black text-xl">K</span>
              </div> */}
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight group-hover:text-indigo-900 transition-colors">
                Klarity<span className="text-rose-500">.</span>
              </span>
            </a>
            <p className="max-w-md text-gray-500 text-sm leading-relaxed font-medium">
              We build high-integrity custom software using{" "}
              <strong>your preferred tech stack</strong>. From fintech to
              healthcare, we deliver scalable solutions with top 1% talent.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="col-span-1">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-span-1">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-1">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {RESOURCE_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[15px] font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-6 text-xs font-medium text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Klarity Software Inc. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SECTION: Contact (Light Gray) ================= */}
        <div className="w-full lg:w-1/3 bg-slate-50 px-8 py-16 lg:p-20 border-l border-gray-100">
          {/* CTA Header */}
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Let's build something great<span className="text-rose-500">.</span>
          </h3>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-10">
            <button className="w-full px-6 py-4 rounded-xl bg-gray-900 text-white font-bold text-[15px] shadow-lg shadow-gray-200 hover:bg-rose-600 hover:shadow-rose-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group">
              Schedule a Call
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform opacity-80"
              />
            </button>
            <button className="w-full px-6 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-700 font-bold text-[15px] hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
              Contact Sales
            </button>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-3 text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Phone size={16} />
              </div>
              <span>+1 (408) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Mail size={16} />
              </div>
              <span>hello@klarity.com</span>
            </div>
            <div className="flex items-start gap-3 text-gray-600 font-medium">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                <MapPin size={16} />
              </div>
              <span>San Francisco, CA & Global Remote</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
            <h4 className="text-sm font-bold text-gray-900 mb-3">
              Get tech trends & insights.
            </h4>
            <form className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm transition-all"
                />
              </div>
              <div className="flex items-start gap-2 mt-1">
                <div className="relative flex items-start pt-0.5">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <label htmlFor="privacy" className="text-xs text-gray-500">
                  I agree to the Privacy Policy.
                </label>
              </div>
              <button
                type="submit"
                className="w-full mt-2 px-4 py-2.5 bg-indigo-50 text-indigo-700 font-bold rounded-lg text-sm hover:bg-indigo-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div>
            <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Follow Us
            </h5>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-md transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
