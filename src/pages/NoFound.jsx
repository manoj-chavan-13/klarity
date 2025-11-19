import React from "react";
import { ArrowRight, Home, Search, HelpCircle } from "lucide-react";

// --- Reusable Components (Consistent with Design System) ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-[16px] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 tracking-tight cursor-pointer";
  const variants = {
    primary:
      "bg-gray-900 text-white shadow-xl shadow-gray-900/10 hover:bg-rose-600 hover:shadow-rose-600/20",
    outline:
      "bg-white border-2 border-gray-200 text-gray-900 hover:border-indigo-600 hover:text-indigo-600",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </button>
  );
};

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 relative overflow-hidden flex items-center justify-center">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-rose-50 rounded-full blur-3xl -z-10 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] -z-10"></div>

      <div className="max-w-4xl w-full px-6 text-center relative z-10">
        {/* Glitchy 404 Text Effect */}
        <div className="relative inline-block mb-8">
          <h1 className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gray-700 select-none">
            404
          </h1>
          {/* Decorative Elements around the number */}
          <div className="absolute top-1/2 -left-12 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 -right-12 w-32 h-32 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mb-6">
          Lost in the <span className="text-indigo-600">Cloud?</span>
        </h2>

        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Don't
          worry, even the best code has a few bugs.
        </p>

        {/* Action Buttons - Now Functional */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Button
            variant="primary"
            icon={Home}
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </Button>
          <Button
            variant="outline"
            icon={HelpCircle}
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
