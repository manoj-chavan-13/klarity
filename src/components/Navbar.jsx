import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Briefcase,
  Figma,
  Laptop,
  Users,
  CheckCircle,
  Layers,
  Settings,
  Mail,
  Phone,
  ArrowRight,
  Smartphone,
} from "lucide-react";

// --- Configuration Data ---
// Updated hrefs to match the routes defined in App.jsx
const NAV_LINKS = {
  solutions: {
    name: "Our Solutions",
    icon: Layers,
    links: [
      {
        name: "App Development",
        href: "/solutions/app-dev", // Updated path
        description: "Native iOS, Android, & Cross-platform solutions.",
        icon: Smartphone,
      },
      {
        name: "Web Development",
        href: "/solutions/web-dev", // Updated path
        description: "Responsive websites & complex web applications.",
        icon: Laptop,
      },
      {
        name: "UX/UI Design",
        href: "/solutions/ui-ux", // Updated path
        description: "User-centric design prototypes & interfaces.",
        icon: Figma,
      },
      {
        name: "Custom Software",
        href: "/solutions/custom-software", // Updated path
        description: "Bespoke software tailored to your specific workflow.",
        icon: Code,
      },
      {
        name: "Maintenance & Support",
        href: "/solutions/maintenance", // Updated path
        description: "24/7 monitoring, updates, and long-term care.",
        icon: Settings,
      },
      {
        name: "Technology Choice",
        href: "/solutions/tech-consulting", // Updated path
        description: "We work with YOUR preferred tech stack.",
        icon: CheckCircle,
      },
    ],
  },
};

// --- Sub-Components ---

// Updated to use Link instead of <a>
const NavLink = ({ href, children }) => (
  <Link
    to={href} // Use 'to' instead of 'href'
    className="text-gray-700 hover:text-indigo-600 transition duration-200 ease-in-out font-semibold text-[15px] px-4 py-3 rounded-xl tracking-wide whitespace-nowrap"
  >
    {children}
  </Link>
);

const DesktopDropdown = ({ title, icon: TitleIcon, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDetailedLayout = items.length > 4;

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-gray-700 hover:text-indigo-600 font-bold text-[15px] transition duration-200 ease-in-out px-4 py-3 rounded-xl tracking-wide whitespace-nowrap">
        <TitleIcon size={18} className="mr-1.5 text-indigo-500" />
        {title}
        <ChevronDown
          size={16}
          className={`ml-1.5 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-indigo-600" : ""
          }`}
        />
      </button>

      {/* Dropdown Content */}
      <div
        className={`absolute top-[90%] left-1/2 transform -translate-x-1/2 w-max max-w-5xl bg-white rounded-2xl shadow-3xl border border-gray-100/50 overflow-hidden 
                  transition-all duration-200 ease-out z-50
                  ${
                    isOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 translate-y-2 pointer-events-none"
                  }`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500"></div>
        <div
          className={`p-6 ${
            isDetailedLayout
              ? "grid grid-cols-2 gap-x-12 gap-y-6"
              : "flex flex-col gap-2"
          }`}
        >
          {items.map((item) => {
            const ItemIcon = item.icon;
            return (
              <Link // Updated to Link
                key={item.name}
                to={item.href} // Updated to 'to'
                className="flex items-start p-3 -ml-3 rounded-xl hover:bg-indigo-50/80 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 mr-4 text-indigo-600 p-3 bg-indigo-100/50 rounded-xl group-hover:bg-indigo-200/50 transition-colors">
                  <ItemIcon size={22} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 text-[15px] flex items-center mb-0.5 group-hover:text-indigo-700 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[260px]">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Updated to use Link
const MobileLink = ({ href, children, onClick }) => (
  <Link
    to={href} // Use 'to'
    className="flex items-center w-full py-4 px-6 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 font-bold text-lg border-b border-gray-50 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

const ContactInfoBar = () => (
  <div className="hidden lg:flex bg-slate-50 border-b border-gray-200 py-2.5 text-sm font-medium text-gray-600">
    <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">
          Expert Development Team
        </span>
        <a
          href="tel:+11234567890"
          className="flex items-center hover:text-indigo-600 transition-colors"
        >
          <Phone size={14} className="mr-2 text-indigo-500" />
          +1 (123) 456-7890
        </a>
        <a
          href="mailto:info@klarity.com"
          className="flex items-center hover:text-indigo-600 transition-colors"
        >
          <Mail size={14} className="mr-2 text-indigo-500" />
          info@klarity.com
        </a>
      </div>
      <div className="flex items-center space-x-4 text-xs font-semibold text-gray-400">
        <span>ALL TECH STACKS AVAILABLE</span>
        <span>•</span>
        <span>EST. 2024</span>
      </div>
    </div>
  </div>
);

// --- Main Navbar Component ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased w-full">
      <style>{`
        .shadow-3xl { box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.1); }
      `}</style>

      <header className="w-full bg-white shadow-lg shadow-gray-100/50 relative z-50">
        <ContactInfoBar />

        <nav className="relative w-full h-[90px] bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-full">
            <div className="flex justify-between items-center h-full">
              {/* Logo - Updated to Link */}
              <Link to="/" className="flex items-center group">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:rotate-3 transition-transform duration-300 shadow-indigo-200 shadow-lg">
                  <span className="text-white font-black text-xl">K</span>
                </div>
                <span className="text-3xl font-extrabold text-gray-900 tracking-tight group-hover:text-indigo-900 transition-colors">
                  Klarity<span className="text-rose-500">.</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden xl:flex space-x-2 items-center h-full">
                <NavLink href="/">Home</NavLink>

                {/* Our Solutions Dropdown containing all services */}
                <DesktopDropdown
                  title={NAV_LINKS.solutions.name}
                  icon={NAV_LINKS.solutions.icon}
                  items={NAV_LINKS.solutions.links}
                />

                <NavLink href="/career">Career</NavLink>
                <NavLink href="/about-us">About Us</NavLink>
                <NavLink href="/blogs">Blogs</NavLink>
              </div>

              {/* Right Side Actions - Kept as anchor tags if they are external/special actions, or change to Link if internal routes exist */}
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  to="/contact" // Assuming there is a contact route
                  className="text-gray-600 font-bold text-[15px] hover:text-indigo-600 transition-colors hidden xl:block"
                >
                  Contact Us
                </Link>
                <Link
                  to="/quote" // Assuming there is a quote route
                  className="px-8 py-3.5 rounded-full 
                            bg-gray-900 text-white font-bold text-[15px]
                            shadow-xl shadow-gray-200
                            transition-all duration-300 hover:bg-rose-600 hover:shadow-rose-500/30 hover:-translate-y-0.5
                            flex items-center"
                >
                  Get A Quote
                  <ArrowRight size={18} className="ml-2 opacity-80" />
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                className="xl:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transform transition-all duration-300 ease-in-out overflow-hidden 
            ${
              isMobileMenuOpen
                ? "max-h-[90vh] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col p-4 pb-8 max-h-[80vh] overflow-y-auto">
              <MobileLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileLink>

              <div className="px-6 pt-6 pb-2 text-xs font-black text-indigo-500 uppercase tracking-widest">
                Our Solutions
              </div>
              {NAV_LINKS.solutions.links.map((item) => (
                <MobileLink
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </MobileLink>
              ))}

              <div className="my-4 border-t border-gray-100"></div>
              <MobileLink
                href="/career"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </MobileLink>
              <MobileLink
                href="/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </MobileLink>
              <MobileLink
                href="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </MobileLink>
              <MobileLink
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </MobileLink>

              <div className="p-6 mt-4">
                <Link
                  to="/quote"
                  className="block w-full text-center px-6 py-4 rounded-xl 
                            bg-indigo-600 text-white font-bold text-lg
                            shadow-lg shadow-indigo-200
                            active:scale-95 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
